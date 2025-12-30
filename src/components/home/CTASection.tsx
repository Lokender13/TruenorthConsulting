import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const CTASection = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-32 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Ambient background glows */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[150px] transition-colors duration-1000
                ${isDark ? 'bg-white/[0.03]' : 'bg-brand-orange/[0.08]'}`} />

            {/* Subtle gradient orb */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] ${isDark ? 'bg-white/[0.02]' : 'bg-gray-200/30'
                }`}></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-8 block">Start Your Legacy</span>

                    <h2 className={`text-5xl md:text-8xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        Ready to Shape <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic font-light">
                            Your Future?
                        </span>
                    </h2>

                    <p className={`text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-500 ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                        Join thousands of elite students who have transformed their academic journey with TrueNorth's expert guidance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/contact"
                                className={`group inline-flex items-center gap-4 px-12 py-6 rounded-full font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-300
                                    ${isDark
                                        ? 'bg-white text-zinc-950 hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]'
                                        : 'bg-zinc-900 text-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]'}`}
                            >
                                Book Free Consultation <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/about"
                                className={`inline-flex items-center gap-4 px-12 py-6 rounded-full font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-300 border
                                    ${isDark
                                        ? 'border-white/10 text-white hover:bg-white/5'
                                        : 'border-zinc-200 text-zinc-900 hover:bg-zinc-50 shadow-sm'}`}
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
