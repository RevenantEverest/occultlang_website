import { useEffect, useState } from 'react';
import { useRouter, Link } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'motion/react';

import { useThemeStore } from '@@store/theme';

import { FaBars } from 'react-icons/fa6';
import { GithubStars, OccultLogo } from '@@components/Common';
import ThemeChanger from '@@components/ThemeChanger/ThemeChanger';
import MobileNavbar from './MobileNavbar';

function Navbar() {

    const router = useRouter();
    const theme = useThemeStore((state) => state.theme);
    const setTheme = useThemeStore((state) => state.setTheme);

    const [solidBackground, setSolidBackground] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        setSolidBackground(isMobileOpen);
    }, [isMobileOpen]);

    const renderRoutes = () => {
        return Object.keys(router.routesByPath).map((key, index) => {
            const title = key.split("/")[1];

            return(
                <Link 
                    to={key}
                    key={`navbar-route-${title}-${index}`} 
                    className="hover:bg-secondary/10 hover:cursor-pointer w-20 rounded-md text-center py-1"
                >
                    <p className="font-semibold">
                        {
                            title === "" ? "Home" :
                            title.charAt(0).toUpperCase() + title.slice(1)
                        }
                    </p>
                </Link>
            );
        });
    };

    return(
        <div className="w-full fixed z-50">
            <div className="flex items-center justify-center">
                <AnimatePresence mode="wait">
                {
                    solidBackground &&
                    <motion.div 
                        className="fixed w-[140vw] top-0 left-0"
                        initial={{ skew: -50, x: "120vw" }}
                        animate={{ 
                            skew: 0, 
                            x: "-20vw",
                            transition: { duration: .3 } 
                        }}
                        exit={{
                            skew: 50,
                            x: "120vw",
                            transition: { duration: .3 }
                        }}
                    >
                        <div className="h-full w-full bg-background absolute py-11 z-40" />
                    </motion.div>
                }
                </AnimatePresence>
                <div className="flex items-center justify-center py-4 w-11/12 md:w-8/12 z-10">
                    <Link to="/" className="flex-1 flex justify-start items-center gap-1">
                        <OccultLogo height={40} width={40} fill={theme.colors.primary} />
                        <h1 className="font-bold text-lg">Occultlang</h1>
                        <div className="bg-primary px-2 py-.5 rounded-md mt-1">
                            <p className="text-sm font-semibold">v1.0.0</p>
                        </div>
                    </Link>
                    <div className="flex-1 hidden md:flex items-center justify-center">
                        {renderRoutes()}
                    </div>
                    <div className="flex-1 hidden md:flex items-center justify-end gap-5">
                        <ThemeChanger theme={theme} setTheme={setTheme} />
                        <GithubStars owner="occultlang" repo="occult" />
                    </div>
                    <div className="flex-1 flex items-center justify-end md:hidden">
                        <div className="ml-4 mr-4 flex md:hidden justify-center content-center items-center" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                            <FaBars className="text-2xl text-text" />
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence key="navbar-ap" mode="wait">
                {
                    isMobileOpen && 
                    <MobileNavbar 
                        isOpen={isMobileOpen} 
                        setIsOpen={setIsMobileOpen}
                    />
                }
            </AnimatePresence>
        </div>
    );
};

export default Navbar;