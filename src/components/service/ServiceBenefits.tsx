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
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Tangible{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-purple-500">
                            Outcomes
                        </span>
                    </h2>
                    <p className={`text-base md:text-lg font-light max-w-3xl mx-auto ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>
                        Our intervention is designed to produce measurable results that accelerate your personal and professional growth.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                                className={`group relative p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden
                                    ${isDark
                                        ? 'border-white/5 hover:bg-white/5 hover:border-white/10'
                                        : 'border-zinc-100 hover:bg-zinc-50 hover:border-zinc-200 hover:shadow-lg hover:shadow-zinc-200/50'
                                    }
                                `}
                            >
                                {/* Background Number */}
                                <div className={`absolute -right-4 -top-8 text-[8rem] font-serif font-bold leading-none select-none transition-all duration-500 opacity-0 group-hover:opacity-100
                                    ${isDark ? 'text-white/5' : 'text-black/5'}
                                `}>
                                    {String(idx + 1).padStart(2, '0')}
                                </div>

                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                                        ${isDark
                                            ? 'bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 text-brand-orange shadow-lg shadow-black/20'
                                            : 'bg-white border border-zinc-100 text-brand-orange shadow-md shadow-zinc-200'
                                        }
                                    `}>
                                        <Icon size={26} strokeWidth={1.5} />
                                    </div>

                                    <h3 className={`text-xl font-medium leading-relaxed transition-colors duration-300 ${isDark ? 'text-zinc-300 group-hover:text-white' : 'text-zinc-700 group-hover:text-zinc-900'}`}>
                                        {benefit}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceBenefits;
