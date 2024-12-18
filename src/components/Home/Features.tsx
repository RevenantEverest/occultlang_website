import type { IconType } from 'react-icons/lib';

import React from 'react';
import { 
    Card, 
    CardHeader,
    CardTitle, 
    CardDescription
} from '@@components/ui/card';

import { motion } from 'motion/react';

import { MdOutlineShutterSpeed } from 'react-icons/md';
import { FaMemory, FaCode } from 'react-icons/fa';

interface Feature {
    title: string,
    subtitle: string | React.ReactNode,
    icon: IconType
};

function Features() {

    const featureList: Feature[] = [
        { 
            title: "Speed", 
            subtitle: <p>We aim to be on par with <span className="text-accent">C</span></p>, 
            icon: MdOutlineShutterSpeed
        },
        { 
            title: "Memory Management", 
            subtitle: <p>Our goal is to achieve memory safety similar to <span className="text-accent">Rust</span></p>, 
            icon: FaMemory 
        },
        { 
            title: "Syntax", 
            subtitle: "Procedurally typed syntax", 
            icon: FaCode
        },
    ];

    const renderFeatures = () => {
        return featureList.map((feature, index) => {
            const key = `feature-${feature.title}-${index}`;
            const Icon = feature.icon;

            return(
                <motion.div
                    key={key}
                    className="flex-1"
                    whileHover={{
                        y: "-.5vh"
                    }}
                >
                    <motion.div
                        className="flex flex-1 flex-col justify-center items-center"
                        initial={{ opacity: 0, y: "15vh" }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
                    >
                        <Card className="w-full h-60">
                            <CardHeader>
                                <CardTitle className="flex flex-col justify-center items-center text-2xl md:text-3xl">
                                    <Icon className="text-primary text-5xl md:text-6xl mb-2 md:mb-4" />
                                    {feature.title}
                                </CardTitle>
                                <CardDescription className="text-lg font-semibold text-center mt-2">
                                    {feature.subtitle}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>
                </motion.div>
            );
        });
    };

    return(
        <div className="flex flex-col gap-20 justify-center items-center w-full">
            <div className="w-full md:w-6/12">
                <h1 className="text-4xl md:text-6xl font-bold text-center">How Do We <span className="text-accent">Compare</span> To Other Languages?</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-4 w-full">
                {renderFeatures()}
            </div>
        </div>
    );
};

export default Features;