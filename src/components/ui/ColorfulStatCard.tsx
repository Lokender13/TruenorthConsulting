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
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className={`
                relative p-6 rounded-2xl border overflow-hidden group cursor-pointer
                ${isDark
                    ? `bg-zinc-900/80 ${colors.border}`
                    : `bg-white ${colors.border} shadow-lg ${colors.glow}`
                }
            `}
        >
            {/* Gradient background on hover */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />

            {/* Floating orb */}
            <motion.div
                className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${colors.gradient} opacity-20 blur-2xl`}
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10">
                {/* Icon */}
                <motion.div
                    className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 10 }}
                >
                    <Icon className={`w-7 h-7 ${colors.text}`} />
                </motion.div>

                {/* Value */}
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <AnimatedCounter target={value} suffix={suffix} duration={2} />
                </div>

                {/* Label */}
                <p className={`text-sm font-medium ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    {label}
                </p>
            </div>

            {/* Bottom gradient line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
        </motion.div>
    );
};

export default ColorfulStatCard;