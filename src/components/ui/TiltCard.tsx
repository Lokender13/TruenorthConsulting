import { useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltIntensity?: number;
    glareOpacity?: number;
}

/**
 * TiltCard - 3D tilt effect on hover with glare
 * Creates depth and premium feel without color overload
 */
const TiltCard = ({
    children,
    className = '',
    tiltIntensity = 10,
    glareOpacity = 0.1
}: TiltCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (mouseY / (rect.height / 2)) * -tiltIntensity;
        const rotateY = (mouseX / (rect.width / 2)) * tiltIntensity;

        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);

        // Update glare position
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        setGlarePosition({ x: glareX, y: glareY });
    };

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    };

    return (
        <div
            ref={cardRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform,
                transition: 'transform 0.15s ease-out',
                transformStyle: 'preserve-3d',
            }}
        >
            {/* Glare effect */}
            <div
                className="absolute inset-0 pointer-events-none rounded-inherit z-10"
                style={{
                    background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 50%)`,
                    borderRadius: 'inherit',
                }}
            />
            {children}
        </div>
    );
};

export default TiltCard;
