import { useRef, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
    spotlightColor?: string;
}

/**
 * SpotlightCard - A premium card component with mouse-following spotlight effect
 * Inspired by reactbits.dev components
 */
const SpotlightCard = ({
    children,
    className = '',
    spotlightColor = 'rgba(255, 255, 255, 0.06)'
}: SpotlightCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setOpacity(0);
    };

    const spotlightStyle: CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        opacity: opacity,
        transition: 'opacity 0.3s ease',
        borderRadius: 'inherit',
    };

    const borderGradientStyle: CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        borderRadius: 'inherit',
        padding: '1px',
        background: isHovered
            ? `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`
            : 'transparent',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        transition: 'all 0.3s ease',
    };

    return (
        <div
            ref={cardRef}
            className={`relative overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            <div style={spotlightStyle} />
            <div style={borderGradientStyle} />
            {children}
        </div>
    );
};

export default SpotlightCard;
