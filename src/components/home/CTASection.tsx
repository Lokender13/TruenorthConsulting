import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import AnimatedGradientText from '../ui/AnimatedGradientText';

const CTASection = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-16 lg:py-20 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950' : 'bg-gray-50'}`}>
            {/* Top border */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-gray-200'} to-transparent`}></div>

            {/* Subtle gradient orb */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] ${isDark ? 'bg-white/[0.02]' : 'bg-gray-200/30'
                }`}></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                        Start Today
                    </span>

                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Ready to Shape
                        <br />
                        <AnimatedGradientText
                            colors={isDark
                                ? ['#ffffff', '#a0a0a0', '#ffffff', '#606060', '#ffffff']
                                : ['#1f2937', '#F97316', '#1f2937', '#1E6FEB', '#1f2937']
                            }
                        >Your Future?</AnimatedGradientText>
                    </h2>

                    <p className={`text-lg max-w-2xl mx-auto mb-10 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                        Join thousands of students who have transformed their academic journey with TrueNorth's expert guidance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className={`
                                group inline-flex items-center justify-center gap-3
                                px-8 py-4 rounded-full font-medium
                                transition-all duration-300
                                ${isDark
                                    ? 'bg-white text-black hover:bg-white/90'
                                    : 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/20'
                                }
                            `}
                        >
                            Book Free Consultation
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/about"
                            className={`
                                inline-flex items-center justify-center
                                px-8 py-4 rounded-full font-medium
                                transition-all duration-300 border
                                ${isDark
                                    ? 'border-white/20 text-white/70 hover:bg-white/5'
                                    : 'border-brand-blue/20 text-brand-blue hover:bg-blue-50'
                                }
                            `}
                        >
                            Learn More
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
