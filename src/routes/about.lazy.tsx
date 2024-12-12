import { createLazyFileRoute } from '@tanstack/react-router';

import Layout from '@@components/Common/Layout';

export const Route = createLazyFileRoute('/about')({
    component: About,
});

function About() {
    return(
        <Layout className="items-center justify-center">
        </Layout>
    );
};
