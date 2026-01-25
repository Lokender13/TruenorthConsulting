import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, Globe } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import AnimatedCounter from '../ui/AnimatedCounter';

const stats = [
    { icon: Users, value: 1500, suffix: "+", label: "Students Guided", color: 'orange' as const },
    { icon: GraduationCap, value: 50, suffix: "+", label: "Partner Schools", color: 'purple' as const },
    { icon: Award, value: 98, suffix: "%", label: "Success Rate", color: 'emerald' as const },
    { icon: Globe, value: 20, suffix: "+", label: "Countries", color: 'blue' as const },
];

const StatsSection = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-12 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Background Image - Global Network */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                    alt="Global Network"
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${isDark ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}
                />
            </div>

            {/* Ambient background line */}
            <motion.div
                className={`absolute top-1/2 left-0 w-full h-[1px] ${isDark ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent' : 'bg-gradient-to-r from-transparent via-brand-orange/10 to-transparent'}`}
                animate={{ scaleX: [0, 1, 0], x: ['-100%', '0%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase mb-8
                        ${isDark ? 'border-brand-purple/20 text-brand-purple bg-brand-purple/5' : 'border-purple-200 text-purple-600 bg-white shadow-sm'}`}>
                        Our Global Footprint
                    </span>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic font-light">Thousands.</span>
                    </h2>
                </motion.div>

                {/* Minimal Stats Row */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`mb-4 p-3 rounded-2xl transition-all duration-300
                                ${isDark
                                    ? 'bg-zinc-900/50 text-white/80 group-hover:bg-zinc-800'
                                    : 'bg-white text-zinc-600 shadow-sm group-hover:shadow-md group-hover:bg-purple-50'
                                }`}>
                                <stat.icon className={`w-6 h-6 ${stat.color === 'orange' ? 'text-orange-500' :
                                    stat.color === 'purple' ? 'text-purple-500' :
                                        stat.color === 'emerald' ? 'text-emerald-500' :
                                            'text-blue-500'
                                    }`} />
                            </div>

                            <div className={`text-4xl md:text-5xl font-bold mb-2 tracking-tight
                                ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2.5} />
                            </div>

                            <p className={`text-xs md:text-sm font-bold tracking-[0.2em] uppercase
                                ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

