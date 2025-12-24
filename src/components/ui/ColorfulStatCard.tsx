import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import AnimatedCounter from './AnimatedCounter';
import type { LucideIcon } from 'lucide-react';

interface ColorfulStatCardProps {
    icon: LucideIcon;
    value: number;
    suffix?: string;
    label: string;
    colorTheme: 'orange' | 'purple' | 'emerald' | 'blue';
    delay?: number;
}

const colorConfig = {
    orange: {
        gradient: 'from-orange-500 to-amber-500',
        bg: 'bg-orange-500/10',
        text: 'text-orange-500',
        border: 'border-orange-500/20',
        glow: 'shadow-orange-500/20',
    },
    purple: {
        gradient: 'from-purple-500 to-pink-500',
        bg: 'bg-purple-500/10',
        text: 'text-purple-500',
        border: 'border-purple-500/20',
        glow: 'shadow-purple-500/20',
    },
    emerald: {
        gradient: 'from-emerald-500 to-teal-500',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-500',
        border: 'border-emerald-500/20',
        glow: 'shadow-emerald-500/20',
    },
    blue: {
        gradient: 'from-blue-500 to-cyan-500',
        bg: 'bg-blue-500/10',
        text: 'text-blue-500',
        border: 'border-blue-500/20',
        glow: 'shadow-blue-500/20',
    },
};

const ColorfulStatCard = ({ icon: Icon, value, suffix = '', label, colorTheme, delay = 0 }: ColorfulStatCardProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const colors = colorConfig[colorTheme];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`
                relative p-8 rounded-3xl overflow-hidden group cursor-pointer backdrop-blur-md
                ${isDark
                    ? `bg-zinc-900/40 border border-white/10 hover:bg-zinc-900/60`
                    : `bg-white/60 border border-white/50 shadow-xl shadow-${colorTheme}-500/10 hover:bg-white/80`
                }
                transition-all duration-300
            `}
        >
            {/* Glossy gradient reflection */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />

            {/* Top highlight for glass effect */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />

            {/* Floating blurred orb in background */}
            <motion.div
                className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${colors.gradient} opacity-[0.15] blur-3xl`}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Container with Glass Effect */}
                <motion.div
                    className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center mb-6
                        backdrop-blur-xl shadow-lg
                        ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-white/60'}
                    `}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                </motion.div>

                {/* Value - Big & Bold */}
                <div className={`text-5xl md:text-6xl font-serif font-bold mb-3 tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${colors.gradient}`}>
                    <AnimatedCounter target={value} suffix={suffix} duration={2.5} />
                </div>

                {/* Label */}
                <p className={`text-base font-medium tracking-wide uppercase ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    {label}
                </p>
            </div>
        </motion.div>
    );
};

export default ColorfulStatCard;