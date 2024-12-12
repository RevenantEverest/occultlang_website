import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
    component: () => (
        <div className="h-[100vh] bg-neutral-800 text-white">
            <Outlet />
            <TanStackRouterDevtools />
        </div>
    ),
});