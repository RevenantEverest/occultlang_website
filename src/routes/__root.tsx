import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import ThemeValidator from '@@components/ThemeChanger/ThemeValidator';

export const Route = createRootRoute({
    component: () => (
        <div className="h-[100vh] bg-neutral-800 text-white">
            <ThemeValidator />
            <Outlet />
            <TanStackRouterDevtools />
        </div>
    ),
});