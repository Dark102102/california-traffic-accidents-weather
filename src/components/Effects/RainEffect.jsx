import { useEffect, useRef } from 'react';

const RainEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const drops = [];
        const dropCount = 100; // Number of drops

        // Resize handling
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // Drop class
        class Drop {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height; // Distribute vertically initially
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = -10;
                this.speed = Math.random() * 2 + 1; // Speed between 1 and 3
                this.length = Math.random() * 10 + 5; // Length between 5 and 15
                this.opacity = Math.random() * 0.2 + 0.1; // Opacity between 0.1 and 0.3
            }

            update() {
                this.y += this.speed;
                if (this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + this.length);
                ctx.strokeStyle = `rgba(170, 190, 255, ${this.opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        // Initialize drops
        for (let i = 0; i < dropCount; i++) {
            drops.push(new Drop());
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drops.forEach(drop => {
                drop.update();
                drop.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0, // Behind content if content has z-index > 0
                opacity: 0.6
            }}
        />
    );
};

export default RainEffect;
