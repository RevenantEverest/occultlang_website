import React from 'react';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {

};

function Layout({ className, children }: React.PropsWithChildren<LayoutProps>) {
    return(
        <React.Fragment>
            <div className={`flex flex-col items-center h-full ${className}`}>
                {children}
            </div>
        </React.Fragment>
    );
};

export default Layout;