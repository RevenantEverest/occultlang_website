import React, { useEffect } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Element, scrollSpy } from 'react-scroll';

import { useThemeStore } from '@@store/theme';

import { Layout, TriangleDivider } from '@@components/Common';

import Jumbotron from '@@components/Home/Jumbotron';
import Features from '@@components/Home/Features';
import HelloWorldExample from '@@components/Home/HelloWorldExample';

import { SCROLL_ELEMENTS } from '@@constants';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {

    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        scrollSpy.update();
    }, []);

    return (
        <React.Fragment>
            <div className="bg-card-light">
                <div className="flex justify-center h-[75dvh]">
                    <Jumbotron />
                </div>
                <div className="relative">
                    <TriangleDivider className="absolute bottom-1 blur-md z-0" fill={theme.colors.card} />
                    <TriangleDivider className="z-10" fill={theme.colors.background} />
                </div>
            </div>
            
            <Layout className="items-center justify-center text-text py-20">
                <div className="py-20">
                    <HelloWorldExample />
                </div>
                <Element name={SCROLL_ELEMENTS.HOMEPAGE.FEATURES} className="py-20">
                    <Features />
                </Element>
            </Layout>
        </React.Fragment>
    );
};