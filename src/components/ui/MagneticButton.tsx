import { useRef, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    magneticIntensity?: number;
}

/**
 * MagneticButton - Button that magnetically follows cursor on hover
 * Creates playful yet elegant interaction
 */
const MagneticButton = ({
    children,
    className = '',
    magneticIntensity = 0.3
}: MagneticButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = (e.clientX - centerX) * magneticIntensity;
        const distanceY = (e.clientY - centerY) * magneticIntensity;

        setPosition({ x: distanceX, y: distanceY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const buttonStyle: CSSProperties = {
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 && position.y === 0
            ? 'transform 0.5s cubic-bezier(0.33, 1, 0.68, 1)'
            : 'transform 0.1s ease-out',
    };

    return (
        <button
            ref={buttonRef}
            className={className}
            style={buttonStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </button>
    );
};

export default MagneticButton;
