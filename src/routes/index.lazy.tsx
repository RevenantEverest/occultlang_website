import { createLazyFileRoute } from '@tanstack/react-router';
import Layout from '@@components/Common/Layout';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <Layout className="items-center justify-center">
            
        </Layout>
    );
};