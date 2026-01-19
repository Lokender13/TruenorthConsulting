import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GradientBadgeProps {
    children: ReactNode;
    variant?: 'orange' | 'blue' | 'purple' | 'teal' | 'pink' | 'emerald';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    pulse?: boolean;
}

const gradientMap = {
    orange: 'from-orange-500 to-amber-500',
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    teal: 'from-teal-500 to-emerald-500',
    pink: 'from-pink-500 to-rose-500',
    emerald: 'from-emerald-500 to-teal-500',
};

const sizeMap = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
};

const GradientBadge = ({
    children,
    variant = 'orange',
    size = 'md',
    className = '',
    pulse = false
}: GradientBadgeProps) => {
    return (
        <motion.span
            className={`
                inline-flex items-center gap-1.5 font-semibold tracking-wider uppercase
                bg-gradient-to-r ${gradientMap[variant]} text-white
                rounded-full shadow-lg
                ${sizeMap[size]}
                ${className}
            `}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
        >
            {pulse && (
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
            )}
            {children}
        </motion.span>
    );
};

export default GradientBadge;
