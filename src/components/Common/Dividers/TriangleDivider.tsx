import React from "react";

interface TriangleDividerProps extends React.HTMLAttributes<HTMLDivElement> {
    fill?: string
};

function TriangleDivider({ className, fill="#ffffff" }: TriangleDividerProps) {

    return(
        <div 
            className={`w-full overflow-hidden leading-0 bottom-0 ${className}`}
            style={{ 
                transform: "rotate(180deg)"
            }}
        >
            <svg
                className="relative block h-[150px] w-full"
                style={{
                    transform: "calc(100% + 1.3px)"
                }}
                fill={fill}
                data-name="Layer 1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
            >
                <path 
                    className="shape-fill" 
                    d="M1200 0L0 0 598.97 114.72 1200 0z" 
                />
            </svg>
        </div>
    );
};

export default TriangleDivider;