import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ProcessStep {
    icon: LucideIcon;
    title: string;
    description: string;
    color: 'orange' | 'blue' | 'purple' | 'teal' | 'pink' | 'emerald';
}

interface ProcessInfographicProps {
    steps: ProcessStep[];
    title?: string;
    subtitle?: string;
}

const colorMap = {
    orange: {
        bg: 'bg-gradient-to-br from-orange-500 to-amber-500',
        ring: 'ring-orange-500/30',
        line: 'from-orange-500',
        text: 'text-orange-500',
    },
    blue: {
        bg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
        ring: 'ring-blue-500/30',
        line: 'from-blue-500',
        text: 'text-blue-500',
    },
    purple: {
        bg: 'bg-gradient-to-br from-purple-500 to-pink-500',
        ring: 'ring-purple-500/30',
        line: 'from-purple-500',
        text: 'text-purple-500',
    },
    teal: {
        bg: 'bg-gradient-to-br from-teal-500 to-emerald-500',
        ring: 'ring-teal-500/30',
        line: 'from-teal-500',
        text: 'text-teal-500',
    },
    pink: {
        bg: 'bg-gradient-to-br from-pink-500 to-rose-500',
        ring: 'ring-pink-500/30',
        line: 'from-pink-500',
        text: 'text-pink-500',
    },
    emerald: {
        bg: 'bg-gradient-to-br from-emerald-500 to-green-500',
        ring: 'ring-emerald-500/30',
        line: 'from-emerald-500',
        text: 'text-emerald-500',
    },
};

const ProcessInfographic = ({ steps, title, subtitle }: ProcessInfographicProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="py-12">
            {/* Header */}
            {(title || subtitle) && (
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {subtitle && (
                        <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                            {subtitle}
                        </span>
                    )}
                    {title && (
                        <h3 className={`text-2xl md:text-3xl font-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {title}
                        </h3>
                    )}
                </motion.div>
            )}

            {/* Process Steps */}
            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-0 right-0 h-1">
                    <div className={`h-full w-full rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-teal-500 opacity-20`} />
                    <motion.div
                        className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-teal-500"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {steps.map((step, index) => {
                        const colors = colorMap[step.color];
                        return (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                            >
                                {/* Step Number & Icon */}
                                <motion.div
                                    className={`
                                        relative w-24 h-24 mx-auto mb-6 rounded-2xl
                                        ${colors.bg} shadow-xl
                                        flex items-center justify-center
                                        ring-4 ${colors.ring}
                                    `}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <step.icon size={36} className="text-white" />

                                    {/* Step Number Badge */}
                                    <div className={`
                                        absolute -top-2 -right-2 w-8 h-8 rounded-full
                                        bg-white dark:bg-zinc-900 shadow-lg
                                        flex items-center justify-center
                                        text-sm font-bold ${colors.text}
                                        ring-2 ${colors.ring}
                                    `}>
                                        {index + 1}
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {step.title}
                                </h4>
                                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProcessInfographic;
