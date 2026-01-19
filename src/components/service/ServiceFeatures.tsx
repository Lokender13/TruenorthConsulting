import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Check } from 'lucide-react';

interface ServiceFeaturesProps {
    features: string[];
}

const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
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

    const featureVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any
            }
        },
    };

    return (
        <section className={`py-16 md:py-20 relative theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span className="text-brand-blue font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                        Detailed Roadmap
                    </motion.span>
                    <h2 className={`text-4xl lg:text-7xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Core Program{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-purple-500 to-brand-orange">
                            Inclusions
                        </span>
                    </h2>
                    <p className={`text-xl lg:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>
                        Our comprehensive program is meticulously engineered to provide a 360-degree approach to your career evolution.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={featureVariants}
                            className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500
                                ${isDark
                                    ? 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 shadow-2xl shadow-black/20'
                                    : 'bg-white/80 border-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] shadow-[0_10px_30px_rgba(0,0,0,0.02)]'
                                }
                            `}
                        >
                            <div className="flex items-start gap-6">
                                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                                    ${isDark ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-blue/5 text-brand-blue shadow-inner shadow-brand-blue/10'}
                                `}>
                                    <Check size={24} strokeWidth={3} />
                                </div>
                                <p className={`text-lg md:text-xl leading-relaxed font-serif font-bold ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                                    {feature}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
