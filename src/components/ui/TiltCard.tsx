import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltIntensity?: number;
    glareOpacity?: number;
}

/**
 * TiltCard - 3D tilt effect on hover with glare
 * Optimized with Framer Motion to avoid React re-renders = Ultra Smooth
 */
const TiltCard = ({
    children,
    className = '',
    tiltIntensity = 20, // Increased default slightly for better feel with springs
    glareOpacity = 0.1
}: TiltCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    // Motion values for mouse position relative to card center (0 to 1)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for rotation
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]), { damping: 15, stiffness: 150 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]), { damping: 15, stiffness: 150 });

    // Scale spring
    const scale = useSpring(1, { damping: 15, stiffness: 150 });

    // Glare positioning
    const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
    const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 50%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        // Calculate normalized position (-0.5 to 0.5)
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(xPct);
        mouseY.set(yPct);
        scale.set(1.02);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        scale.set(1);
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
                scale,
                transformStyle: 'preserve-3d',
            }}
        >
            {/* Glare effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none rounded-inherit z-10"
                style={{
                    background: glareBackground,
                    borderRadius: 'inherit',
                }}
            />
            {children}
        </motion.div>
    );
};

export default TiltCard;
