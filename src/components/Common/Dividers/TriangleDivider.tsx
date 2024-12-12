function TriangleDivider() {

    return(
        <div 
            className="absolute bottom-0 left-0 leading-0 overflow-hidden w-full"
            style={{ 
                transform: "rotate(180deg)"
            }}
        >
            <svg
                className="relative block h-[150px]"
                style={{
                    transform: "calc(100% + 1.3px)"
                }}
                fill="#00ff00"
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