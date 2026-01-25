import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

interface ServiceProcessProps {
    process: ProcessStep[];
}

const ServiceProcess = ({ process }: ServiceProcessProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    if (!process || process.length === 0) return null;

    return (
        <section className={`py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <motion.span className="inline-block text-brand-orange font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-3 sm:mb-4">
                        How It Works
                    </motion.span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 tracking-tight px-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Our Simple{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-pink-500 to-purple-600">
                            Process
                        </span>
                    </h2>
                    <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
                        We've designed a clear, step-by-step approach to help you reach your goals with confidence
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical connecting line - Responsive positioning */}
                    <div className={`absolute left-6 sm:left-7 md:left-10 top-0 bottom-0 w-0.5 ${isDark ? 'bg-gradient-to-b from-brand-orange/30 via-purple-500/30 to-brand-blue/30' : 'bg-gradient-to-b from-brand-orange/20 via-purple-500/20 to-brand-blue/20'}`} />

                    <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
                        {process.map((item, index) => {
                            const gradients = [
                                'from-orange-500 to-pink-500',
                                'from-blue-500 to-cyan-500',
                                'from-purple-500 to-pink-500',
                                'from-green-500 to-emerald-500',
                                'from-yellow-500 to-orange-500',
                            ];
                            const gradient = gradients[index % gradients.length];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative flex gap-5 sm:gap-6 md:gap-8 lg:gap-12 group"
                                >
                                    {/* Step Number - Responsive sizing */}
                                    <div className="relative flex-shrink-0">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl shadow-lg sm:shadow-xl bg-gradient-to-br ${gradient} text-white relative z-10 transition-all duration-300`}
                                        >
                                            {item.step}
                                        </motion.div>

                                        {/* Glow effect */}
                                        <div className={`absolute inset-0 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-40 bg-gradient-to-br ${gradient}`} />
                                    </div>

                                    {/* Content - Responsive text sizing */}
                                    <div className="flex-1 pb-6 sm:pb-8 md:pb-10 lg:pb-12 border-b border-gray-200 dark:border-white/10 last:border-0 transition-all duration-300 group-hover:border-gray-300 dark:group-hover:border-white/20 min-w-0">
                                        <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-2 sm:mb-3 md:mb-4 tracking-tight transition-colors duration-300 break-words ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-300 break-words ${isDark ? 'text-zinc-400 group-hover:text-zinc-300' : 'text-gray-600 group-hover:text-gray-700'}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;
