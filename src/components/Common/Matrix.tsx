import { useRef, useEffect } from 'react';

function Matrix() {
    const canvas = useRef<HTMLCanvasElement>(null);
    const drops = useRef<number[]>([]); // Use a ref to persist drops state
    const colors = ['#ff0000', '#cc1111'];

    useEffect(() => {
        if (!canvas.current) {
            return;
        }

        const canvasEl = canvas.current;
        const ctx = canvasEl.getContext('2d');

        if (!ctx) {
            return;
        }

        // Resize canvas to fit the screen
        const resizeCanvas = () => {
            canvasEl.width = window.innerWidth;
            canvasEl.height = window.innerHeight;

            // Reinitialize drops for new dimensions
            const columns = Math.floor(canvasEl.width / 10);
            drops.current = Array(columns).fill(1);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');
        const fontSize = 18;

        // Animation loop
        const draw = () => {
            ctx.fillStyle = 'rgba(21, 21, 21, 0.1)';
            ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

            const color = colors[Math.floor(Math.random() * colors.length)]
            ctx.fillStyle = color;
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.current.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops.current[i] * fontSize);

                if (drops.current[i] * fontSize > canvasEl.height && Math.random() > 0.95) {
                    drops.current[i] = 0;
                }
                drops.current[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvas} />;
}

export default Matrix;