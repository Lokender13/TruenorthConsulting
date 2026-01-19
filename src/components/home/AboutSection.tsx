import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../ui/TiltCard';

const AboutSection = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const benefits = [
        "Certified Counsellors",
        "1-on-1 Guidance",
        "International University Network",
        "Proven Student Success"
    ];

    return (
        <section className={`py-24 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image / Visual Side */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative p-8">
                            {/* Main Image Container */}
                            <TiltCard
                                className={`
                                    relative rounded-[3.5rem] overflow-hidden shadow-2xl
                                    ${isDark ? 'border border-white/5 shadow-black/50' : 'border border-white shadow-brand-blue/10'}
                                `}
                                tiltIntensity={5}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                    alt="TrueNorth Consultancy Team"
                                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-1000 hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/60 via-transparent' : 'from-black/20 via-transparent'} to-transparent`}></div>
                            </TiltCard>

                            {/* Floating Stats Card 1 */}
                            <motion.div
                                className={`
                                    absolute -right-2 md:-right-4 top-10 md:top-20 p-4 md:p-8 rounded-2xl md:rounded-[2rem] backdrop-blur-2xl border shadow-2xl max-w-[140px] md:max-w-xs z-20
                                    ${isDark ? 'bg-zinc-900/60 border-white/10' : 'bg-white/80 border-white'}
                                `}
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <div className="text-3xl md:text-5xl font-serif font-black text-brand-orange mb-1 md:mb-2">10+</div>
                                <div className={`text-[8px] md:text-xs font-black tracking-widest uppercase ${isDark ? 'text-white/40' : 'text-zinc-500'}`}>Years of Excellence</div>
                            </motion.div>

                            {/* Floating Stats Card 2 */}
                            <motion.div
                                className={`
                                    absolute -left-2 md:-left-4 bottom-10 md:bottom-20 p-4 md:p-8 rounded-2xl md:rounded-[2rem] backdrop-blur-2xl border shadow-2xl max-w-[140px] md:max-w-xs z-20
                                    ${isDark ? 'bg-zinc-900/60 border-white/10' : 'bg-white/80 border-white'}
                                `}
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            >
                                <div className="text-3xl md:text-5xl font-serif font-black text-brand-blue mb-1 md:mb-2">5000+</div>
                                <div className={`text-[8px] md:text-xs font-black tracking-widest uppercase ${isDark ? 'text-white/40' : 'text-zinc-500'}`}>Potential Unlocked</div>
                            </motion.div>

                            {/* Decorative Rings */}
                            <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-brand-orange/10 rounded-full animate-[spin_30s_linear_infinite]`}></div>
                            <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-blue/10 rounded-full animate-[spin_20s_linear_infinite_reverse]`}></div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-6 block">The Visionary Edge</span>
                            <h2 className={`text-5xl md:text-7xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                Navigating Your Path to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic font-light">Global Excellence.</span>
                            </h2>
                            <p className={`text-xl font-light mb-8 leading-relaxed transition-colors duration-500 ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                                At TrueNorth Consulting, we believe every student has a unique potential waiting to be unlocked. We are more than just consultants; we are <strong className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>architects of academic futures</strong>.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500
                                            ${isDark ? 'bg-brand-orange/10 text-brand-orange' : 'bg-brand-orange/5 text-brand-orange shadow-inner shadow-brand-orange/10'}`}>
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className={`text-lg font-serif font-bold tracking-tight ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                <Link
                                    to="/about"
                                    className={`
                                        group inline-flex items-center gap-4 px-10 py-5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-300
                                        ${isDark
                                            ? 'bg-white text-zinc-950 hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]'
                                            : 'bg-zinc-900 text-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]'
                                        }
                                    `}
                                >
                                    Read Our Story <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
