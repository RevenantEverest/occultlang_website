import React from 'react';
import { createRootRoute, useMatches, useMatch } from '@tanstack/react-router';

import AnimatedOutlet from '@@components/AnimatedOutlet';
import { AnimatePresence } from 'motion/react';

import Navbar from '@@navigation/Navbar';
import Footer from '@@navigation/Footer';

import ThemeValidator from '@@components/ThemeChanger/ThemeValidator';

const TanStackRouterDevtools =
    process.env.NODE_ENV === "production"
        ? () => null // Render nothing in production
        : React.lazy(() =>
            // Lazy load in development
            import('@tanstack/router-devtools').then((res) => ({
                default: res.TanStackRouterDevtools,
                // For Embedded Mode
                // default: res.TanStackRouterDevtoolsPanel
            })),
        );

export const Route = createRootRoute({
    component: Root,
});

function Root() {
    const matches = useMatches();
    const match = useMatch({ strict: false });
    const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
    const nextMatch = matches[nextMatchIndex];

    return(
        <div className="min-h-[100vh] text-text bg-background overflow-x-hidden">
            <ThemeValidator />

            <Navbar />
            <AnimatePresence mode="popLayout">
                <AnimatedOutlet key={nextMatch ? nextMatch.id : ""} />
            </AnimatePresence>
            <Footer />

            <TanStackRouterDevtools />
        </div>
    );
};