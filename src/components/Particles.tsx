import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

interface ParticlesBackgroundProps {
    theme: 'light' | 'dark';
}

/**
 * ParticlesBackground - A high-performance Canvas-based particle system
 * that creates a professional, interactive background.
 */
const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ theme }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: null as number | null, y: null as number | null, radius: 150 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 60;
        const connectionDistance = 180;

        const isDark = theme === 'dark';
        const particleColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(249, 115, 22, 0.15)';
        const lineColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(249, 115, 22, 0.1)';

        const createParticle = (): Particle => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 2 + 1,
        });

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = Array.from({ length: particleCount }, createParticle);
        };

        const draw = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Mouse interaction
                if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
                    const dx = mouseRef.current.x - p.x;
                    const dy = mouseRef.current.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < mouseRef.current.radius) {
                        const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
                        p.x -= dx * force * 0.03;
                        p.y -= dy * force * 0.03;
                    }
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = (1 - dist / connectionDistance) * 1.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            const oldWidth = canvas.width;
            const oldHeight = canvas.height;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Adjust particle positions to prevent clustering on resize
            particles.forEach(p => {
                p.x = (p.x / oldWidth) * canvas.width;
                p.y = (p.y / oldHeight) * canvas.height;
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        init();
        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [theme]);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 -z-10 pointer-events-none select-none transition-opacity duration-1000"
                style={{
                    background: theme === 'dark' ? '#050505' : '#FFFBF7',
                }}
            />
            {/* Subtle Gradient Fog */}
            <div className={`fixed inset-0 -z-[5] pointer-events-none select-none opacity-40 transition-colors duration-1000 ${theme === 'dark'
                    ? 'bg-gradient-to-b from-black via-transparent to-black'
                    : 'bg-gradient-to-b from-white/20 via-transparent to-white/20'
                }`} />
        </>
    );
};

export default ParticlesBackground;
