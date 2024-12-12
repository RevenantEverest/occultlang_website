import { FaGithub, FaDiscord } from 'react-icons/fa';
import { motion } from 'motion/react';

function Footer() {

    return(
        <div className="flex flex-col relative">
            <div className="absolute bg-card top-0 h-5 w-full blur-md" />
            <div className="flex bg-background justify-center py-5 px-4 md:px-50 z-20">
                <div className="flex flex-1 z-10">
                    <div className="flex-1 justify-start">
                        <p className="text-sm">Copyright © {new Date().getFullYear()} Occultlang - Apache License</p>
                    </div>
                    <div className="flex-1 flex gap-3 text-2xl justify-end">
                        <motion.div
                            className="hover:cursor-pointer"
                            whileHover={{ y: "-.5vh" }}
                        >
                            <FaDiscord />
                        </motion.div>
                        <motion.div
                            className="hover:cursor-pointer"
                            whileHover={{ y: "-.5vh" }}
                        >
                            <FaGithub />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;