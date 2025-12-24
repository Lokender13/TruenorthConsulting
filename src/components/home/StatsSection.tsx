import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import ColorfulStatCard from '../ui/ColorfulStatCard';
import AnimatedGradientText from '../ui/AnimatedGradientText';

const stats = [
    { icon: Users, value: 5000, suffix: "+", label: "Students Guided", color: 'orange' as const },
    { icon: GraduationCap, value: 50, suffix: "+", label: "Partner Schools", color: 'purple' as const },
    { icon: Award, value: 98, suffix: "%", label: "Success Rate", color: 'emerald' as const },
    { icon: Globe, value: 20, suffix: "+", label: "Countries", color: 'blue' as const },
];

const StatsSection = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-24 lg:py-32 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950' : 'bg-gray-50'}`}>
            {/* Subtle divider */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-gray-200'} to-transparent`}></div>

            {/* Colorful gradient orbs in background */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-teal-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

            {/* Animated background line */}
            <motion.div
                className={`absolute top-1/2 left-0 w-full h-1 ${isDark ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-100 to-transparent'}`}
                animate={{ scaleX: [0, 1, 0], x: ['-100%', '0%', '100%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Dot pattern */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.15)'} 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-2 rounded-full border ${isDark ? 'border-white/10 text-white/40' : 'border-purple-200 text-purple-600'
                        }`}>
                        Our Impact
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Trusted by <AnimatedGradientText
                            colors={isDark
                                ? ['#ffffff', '#a0a0a0', '#ffffff', '#606060', '#ffffff']
                                : ['#F97316', '#8B5CF6', '#14B8A6', '#EC4899', '#F97316']
                            }
                        >Thousands</AnimatedGradientText>
                    </h2>
                </motion.div>

                {/* Colorful Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <ColorfulStatCard
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            colorTheme={stat.color}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

