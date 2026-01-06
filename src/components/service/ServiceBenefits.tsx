import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Award, BarChart, TrendingUp, ShieldCheck, Smile } from 'lucide-react';

interface ServiceBenefitsProps {
    benefits: string[];
}

const benefitIcons = [
    Award,
    TrendingUp,
    BarChart,
    ShieldCheck,
    Smile,
];

import TiltCard from '../ui/TiltCard';

const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any
            }
        },
    };

    return (
        <section className={`py-16 md:py-20 theme-transition ${isDark ? 'bg-black/0' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span className="text-brand-orange font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                        Direct Impact
                    </motion.span>
                    <h2 className={`text-4xl lg:text-7xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Tangible{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-purple-500">
                            Outcomes
                        </span>
                    </h2>
                    <p className={`text-xl lg:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>
                        Our intervention is designed to produce measurable results that accelerate your personal and professional growth.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {benefits.map((benefit, idx) => {
                        const Icon = benefitIcons[idx % benefitIcons.length];
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="h-full"
                            >
                                <TiltCard
                                    tiltIntensity={5}
                                    glareOpacity={isDark ? 0.1 : 0.05}
                                    className={`group h-full p-10 rounded-[3rem] border transition-all duration-500
                                        ${isDark
                                            ? 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 shadow-2xl shadow-black/20'
                                            : 'bg-white/80 border-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] shadow-[0_10px_30px_rgba(0,0,0,0.02)]'
                                        }`}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className={`mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                                            ${isDark ? 'bg-brand-orange/10 text-brand-orange' : 'bg-brand-orange/5 text-brand-orange shadow-inner shadow-brand-orange/10'}
                                        `}>
                                            <Icon size={32} />
                                        </div>
                                        <p className={`text-xl md:text-2xl font-serif font-bold leading-tight ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                                            {benefit}
                                        </p>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceBenefits;
