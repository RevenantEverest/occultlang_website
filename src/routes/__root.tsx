import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import Navbar from '@@navigation/Navbar';
import Footer from '@@navigation/Footer';

import ThemeValidator from '@@components/ThemeChanger/ThemeValidator';

export const Route = createRootRoute({
    component: () => (
        <div className="min-h-[100vh] text-text">
            <ThemeValidator />
            <Navbar />
            <Outlet />
            <Footer />
            <TanStackRouterDevtools />
        </div>
    ),
});