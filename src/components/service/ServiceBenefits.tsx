import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Award, TrendingUp, Target, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface ServiceBenefitsProps {
    benefits: string[];
}

const benefitIcons = [
    Award,
    TrendingUp,
    Target,
    Heart,
    Sparkles,
    CheckCircle2,
];

const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as any
            }
        },
    };

    return (
        <section className={`py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <motion.span className="inline-block text-brand-orange font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">
                        Why Choose Us
                    </motion.span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 tracking-tight px-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        The{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-pink-500 to-purple-600">
                            Benefits
                        </span>
                    </h2>
                    <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                        Here's how our program will make a real difference in your journey
                    </p>
                </motion.div>

                {/* Benefits List */}
                <motion.div
                    className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {benefits.map((benefit, idx) => {
                        const Icon = benefitIcons[idx % benefitIcons.length];
                        const gradients = [
                            'from-orange-500 to-pink-500',
                            'from-blue-500 to-cyan-500',
                            'from-purple-500 to-pink-500',
                            'from-green-500 to-emerald-500',
                            'from-yellow-500 to-orange-500',
                            'from-indigo-500 to-purple-500',
                        ];
                        const gradient = gradients[idx % gradients.length];

                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="group flex items-start gap-4 sm:gap-6 md:gap-8 pb-6 sm:pb-8 md:pb-10 lg:pb-12 border-b border-gray-200 dark:border-white/10 last:border-0 transition-all duration-300 hover:pb-8 sm:hover:pb-10 md:hover:pb-12 lg:hover:pb-14"
                            >
                                {/* Icon - Responsive sizing */}
                                <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                    <Icon size={24} className="sm:hidden text-white" strokeWidth={2} />
                                    <Icon size={28} className="hidden sm:block text-white" strokeWidth={2} />
                                </div>

                                {/* Content - Responsive text sizing */}
                                <div className="flex-1 pt-0.5 sm:pt-1 min-w-0">
                                    <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug mb-0 transition-all duration-300 break-words ${isDark ? 'text-zinc-100 group-hover:text-white' : 'text-gray-800 group-hover:text-gray-900'}`}>
                                        {benefit}
                                    </h3>
                                </div>

                                {/* Number - Responsive sizing and visibility */}
                                <div className={`hidden sm:flex flex-shrink-0 text-5xl sm:text-6xl md:text-7xl font-serif font-bold transition-all duration-500 ${isDark ? 'text-white/5 group-hover:text-white/10' : 'text-gray-200 group-hover:text-gray-300'}`}>
                                    {String(idx + 1).padStart(2, '0')}
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
