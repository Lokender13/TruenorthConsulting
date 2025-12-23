import type { ReactNode, CSSProperties } from 'react';

interface ShimmerTextProps {
    children: ReactNode;
    className?: string;
    shimmerColor?: string;
    duration?: number;
}

/**
 * ShimmerText - Text with animated shimmer/shine effect
 * Creates luxury feel for headlines
 */
const ShimmerText = ({
    children,
    className = '',
    shimmerColor = 'rgba(255,255,255,0.3)',
    duration = 3
}: ShimmerTextProps) => {
    const shimmerStyle: CSSProperties = {
        background: `linear-gradient(
            90deg,
            currentColor 0%,
            currentColor 40%,
            ${shimmerColor} 50%,
            currentColor 60%,
            currentColor 100%
        )`,
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: `shimmer ${duration}s linear infinite`,
    };

    return (
        <>
            <style>
                {`
                    @keyframes shimmer {
                        0% { background-position: 200% center; }
                        100% { background-position: -200% center; }
                    }
                `}
            </style>
            <span className={className} style={shimmerStyle}>
                {children}
            </span>
        </>
    );
};

export default ShimmerText;
