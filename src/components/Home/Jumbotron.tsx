import { Link as ScrollLink } from 'react-scroll';

import { FaArrowRight } from 'react-icons/fa';

import { useThemeStore } from '@@store/theme';

import { motion } from 'motion/react';
import { OccultLogo} from '@@components/Common';
import { Button } from '@@components/ui/button';

import { SCROLL_ELEMENTS } from '@@constants';

function Jumbotron() {

    const theme = useThemeStore((state) => state.theme);

    return(
        <div className="flex flex-col md:flex-row gap-6 md:gap-2 items-center justify-center -mb-20 md:mb-0">
            <motion.div
                className="relative"
                animate={{
                    y: ["0vh", "-1vh", "0vh"]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity
                }}
            >
                <OccultLogo className="absolute top-0 h-50 w-50 md:h-[250px] md:w-[250px]" fill={theme.colors.primary} />
                <OccultLogo className="relative z-10 h-50 w-50 md:h-[250px] md:w-[250px]" fill={theme.colors.primary} />
            </motion.div>
            <div className="flex flex-col gap-2 justify-center items-center md:items-start text-center w-full md:w-8/12">
                <h1 className="font-bold text-5xl md:text-8xl uppercase">Occultlang</h1>
                <p className="text-muted font-semibold text-xl md:text-2xl ml-0 md:ml-2">An <span className="text-accent">enigmatic</span> JIT programming language</p>
                <div className="flex gap-4 mt-2 md:mt-4">
                    <ScrollLink 
                        to={SCROLL_ELEMENTS.HOMEPAGE.FEATURES}
                        spy={true}
                        smooth={true}
                    >
                        <Button variant="secondary" className="w-30 h-10 text-secondary bg-transparent border hover:text-background">
                            Features 
                        </Button>
                    </ScrollLink>
                    <a href="https://docs.occultlang.org" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" className="w-30 h-10 text-background">
                            Get Started <FaArrowRight />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;