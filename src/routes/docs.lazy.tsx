import { createLazyFileRoute } from '@tanstack/react-router';

import { Layout } from '@@components/Common';

export const Route = createLazyFileRoute('/docs') ({
    component: RouteComponent,
});

function RouteComponent() {
    return(
        <Layout className="items-center justify-center min-h-[93.2dvh]">
        </Layout>
    );
};
