import React from 'react';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {

};

function Layout({ className, children }: React.PropsWithChildren<LayoutProps>) {
    return(
        <React.Fragment>
            <div 
                className={`
                    flex-col
                    w-full
                    relative 
                    px-5 
                    lg:px-52
                    pt-20 
                    pointer-events-auto 
                    items-center
                    justify-center
                    bg-background
                    ${className}
                `}
            >
                {children}
            </div>
        </React.Fragment>
    );
};

export default Layout;