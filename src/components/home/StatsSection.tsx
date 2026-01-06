import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import ColorfulStatCard from '../ui/ColorfulStatCard';

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
        <section className={`py-16 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Ambient background line */}
            <motion.div
                className={`absolute top-1/2 left-0 w-full h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent' : 'bg-gradient-to-r from-transparent via-brand-orange/10 to-transparent'}`}
                animate={{ scaleX: [0, 1, 0], x: ['-100%', '0%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase mb-8
                        ${isDark ? 'border-brand-purple/20 text-brand-purple bg-brand-purple/5' : 'border-purple-200 text-purple-600 bg-white shadow-sm'}`}>
                        Our Global Footprint
                    </span>
                    <h2 className={`text-5xl md:text-7xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        Trusted by <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic font-light">
                            Thousands.
                        </span>
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

