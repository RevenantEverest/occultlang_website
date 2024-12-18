import { useEffect, useState } from 'react';
import { FiCopy } from 'react-icons/fi';

import { Card } from '@@components/ui/card';
import { 
    TooltipProvider, 
    Tooltip, 
    TooltipTrigger, 
    TooltipContent
} from '@@components/ui/tooltip';

function HelloWorldExample() {

    const [hasCopied, setHasCopied] = useState(false);

    const textColors = {
        "rose": "text-[#ea9a97]",
        "iris": "text-[#c4a7e7]",
        "foam": "text-[#9ccfd8]",
        "gold": "text-[#f6c177]",
        "subtle": "text-[#908caa]"
    };

    useEffect(() => {
        let _timer: NodeJS.Timeout | null = null;

        _timer = setTimeout(() => {
            setHasCopied(false);
        }, 2000);

        return () => {
            if(!_timer) return;

            clearTimeout(_timer);
            return;
        };
    }, [hasCopied]);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(
                'fn main() int32 {\n' +
                '    println("Hello, wizards!";\n' +
                '}\n'
            );
            setHasCopied(true);
        } catch (err) {
            console.error("Failed to copy text:", err);
        }
    };

    return(
        <div className="flex flex-col md:flex-row gap-20 items-center justify-center">
            <div className="flex-1 flex flex-col ">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-center mb-5 w-12/12">Your First Steps with <span className="text-accent">Occultlang</span></h1>
                    <p className="font-semibold text-muted text-xl w-9/12">
                        A simple &apos;Hello, World!&apos; to get you started and showcase the power of <span className="text-accent">Occultlang</span>.
                    </p>
                </div>
            </div>
            <div className="flex-1">
                <Card className="rounded-xl border-muted/40 border-2 bg-card-light">
                    <div className="bg-card py-2 px-4 flex gap-2">
                        <div className="bg-green-500 w-2 h-2 rounded-full" />
                        <div className="bg-amber-300 w-2 h-2 rounded-full" />
                        <div className="bg-red-500 w-2 h-2 rounded-full" />
                    </div>
                    <div className="flex justify-end pr-2 md:pr-5 pt-4">
                        <TooltipProvider delayDuration={0}>
                            <Tooltip open={hasCopied ? true : undefined}>
                                <TooltipTrigger>
                                    <FiCopy 
                                        className="rotate-x-180 hover:text-muted duration-200 cursor-pointer"
                                        onClick={copyToClipboard}
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="font-semibold">{hasCopied ? "Copied!" : "Copy Code"}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <p className="px-8 md:px-20 pt-4 md:pt-2 pb-8">
                        <span className={textColors.rose}>fn</span>&nbsp;
                        <span className={textColors.iris}>main{"()"}</span>&nbsp;
                        <span className={textColors.foam}>int32</span>&nbsp; 
                        <span className={textColors.subtle}>{"{"}</span>&nbsp;
                        
                        <br />
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className={textColors.iris}>println</span>
                        <span className={textColors.subtle}>{"("}</span>
                        <span className={textColors.gold}>&quot;Hello, wizards!&quot;</span>
                        <span className={textColors.subtle}>;</span>
                        
                        <br />
                        
                        <span className={textColors.subtle}>{"}"}</span>
                    </p>
                </Card>
            </div>
        </div>
        
    );
};

export default HelloWorldExample;

            