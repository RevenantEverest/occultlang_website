import { getRouterContext, Outlet, useMatches } from '@tanstack/react-router';
import { useIsPresent, motion, MotionProps, Variants } from 'motion/react';
import { cloneDeep } from 'lodash';
import { forwardRef, useContext, useRef } from 'react';

type Direction = 'left' | 'right' | 'up' | 'down';

type AnimatedOutletProps = MotionProps & {
    direction?: Direction;
};

const OFFSET: Record<Direction, 1 | -1> = {
    left: 1,
    right: -1,
    up: 1,
    down: -1,
};

const AXIS: Record<Direction, 'x' | 'y'> = {
    left: 'x',
    right: 'x',
    up: 'y',
    down: 'y',
};

export const RouteTransitionVariants: Variants = {
    initial: (direction: Direction = 'left') => ({
        [AXIS[direction]]: `${OFFSET[direction] * 100}vw`,
        opacity: 0,
    }),
    animate: (direction: Direction = 'left') => ({
        [AXIS[direction]]: 0,
        opacity: 1,
    }),
    exit: (direction: Direction = 'left') => ({
        [AXIS[direction]]: `${OFFSET[direction] * -100}vw`,
        opacity: 0,
    }),
};

export const TransitionProps = {
    variants: RouteTransitionVariants,
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    transition: {
        type: 'spring',
        bounce: 0.2,
    },
    style: {
        display: 'grid',
        alignSelf: 'stretch',
        justifySelf: 'stretch',
    },
} as const;

const AnimatedOutlet = forwardRef<HTMLDivElement, AnimatedOutletProps>(({ direction, ...props }, ref) => {
    const isPresent = useIsPresent();

    const matches = useMatches();
    const prevMatches = useRef(matches);

    const RouterContext = getRouterContext();
    const routerContext = useContext(RouterContext);

    let renderedContext = routerContext;

    if (isPresent) {
        prevMatches.current = cloneDeep(matches);
    } else {
        renderedContext = cloneDeep(routerContext);
        renderedContext.__store.state.matches = [
            ...matches.map((m, i) => ({
            ...(prevMatches.current[i] || m),
            id: m.id,
            })),
            ...prevMatches.current.slice(matches.length),
        ];
    }

    return (
        <motion.div 
            ref={ref} 
            className="outlet" 
            custom={direction} {...TransitionProps} {...props}
        >
            <RouterContext.Provider value={renderedContext}>
            <Outlet />
            </RouterContext.Provider>
        </motion.div>
    );
});

AnimatedOutlet.displayName = "AnimatedOutlet";

export default AnimatedOutlet;
