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
                staggerChildren: 0.05,
            },
        },
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -15 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as any
            }
        },
    };

    return (
        <section className={`py-12 sm:py-16 md:py-20 lg:py-24 relative theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <motion.span className="inline-block text-brand-blue font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">
                        What's Included
                    </motion.span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 tracking-tight px-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        What You'll{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-cyan-500 to-purple-600">
                            Get
                        </span>
                    </h2>
                    <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                        Our program includes everything you need to succeed, with personalized support at every step
                    </p>
                </motion.div>

                {/* Features Grid - Responsive columns */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-5 sm:gap-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={featureVariants}
                            className="group flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2"
                        >
                            {/* Checkmark - Responsive sizing */}
                            <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-brand-blue to-cyan-500 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                                <Check size={16} className="sm:hidden text-white" strokeWidth={3} />
                                <Check size={18} className="hidden sm:block text-white" strokeWidth={3} />
                            </div>

                            {/* Feature Text - Responsive sizing */}
                            <p className={`text-base sm:text-lg md:text-xl leading-relaxed font-medium pt-0 sm:pt-0.5 transition-colors duration-300 break-words ${isDark ? 'text-zinc-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'}`}>
                                {feature}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
