import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import { useThemeStore } from '@@store/theme';

import { motion } from 'motion/react';
import { Layout, OccultLogo, TriangleDivider } from '@@components/Common';
import { Button } from '@@components/ui/button';

import Features from '@@components/Home/Features';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {

    const theme = useThemeStore((state) => state.theme);

    return (
        <React.Fragment>
            <div className="bg-card-light">
                <div className="flex justify-center h-[75dvh]">
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
                                <Button variant="secondary" className="w-30 h-10 text-secondary bg-transparent border hover:text-background">
                                    Features 
                                </Button>
                                <Button variant="secondary" className="w-30 h-10 text-background">
                                    Get Started 
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <TriangleDivider className="absolute bottom-1 blur-md z-0" fill={theme.colors.card} />
                    <TriangleDivider className="z-10" fill={theme.colors.background} />
                </div>
            </div>

            
            <Layout className="items-center justify-center text-text pt-20">
                <Features />
                <div className="py-20">
                    <p>Content Here</p>
                </div>
                <div className="py-20">
                    <p>Content Here</p>
                </div>
                <div className="py-20">
                    <p>Content Here</p>
                </div>
            </Layout>
        </React.Fragment>
    );
};