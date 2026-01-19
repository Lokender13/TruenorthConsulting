import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
}

/**
 * AnimatedGradientText - Shifting gradient colors on text
 * Creates mesmerizing color-shifting effect
 */
const AnimatedGradientText = ({
    children,
    className = '',
    colors = ['#ff6b35', '#f7c59f', '#ffffff', '#f7c59f', '#ff6b35']
}: AnimatedGradientTextProps) => {
    return (
        <motion.span
            className={`inline-block bg-clip-text text-transparent ${className}`}
            style={{
                backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
                backgroundSize: '200% auto',
            }}
            animate={{
                backgroundPosition: ['0% center', '200% center'],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
            }}
        >
            {children}
        </motion.span>
    );
};

export default AnimatedGradientText;
