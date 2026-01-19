import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Zap, Target, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../ui/TiltCard';

const StrategicDNA = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const pillars = [
        {
            title: "Your Personal Story",
            desc: "Universities want to know who you really are. We help you tell your unique story in a way that stands out.",
            icon: Zap,
            color: "brand-orange",
            tag: "Stand Out"
        },
        {
            title: "Discover Your Strengths",
            desc: "No more guessing. We use scientific tools to find exactly what you are good at and which career fits you best.",
            icon: Target,
            color: "purple-500",
            tag: "Know Yourself"
        },
        {
            title: "Achieve Your Goals",
            desc: "We guide you every step of the way, helping you get into top universities like Harvard, Stanford, and Oxford.",
            icon: BarChart3,
            color: "brand-blue",
            tag: "Get Results"
        }
    ];

    return (
        <section className={`py-32 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`inline-block text-[10px] font-black tracking-[0.5em] uppercase mb-6 ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}
                    >
                        Success Comes From Planning
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-5xl md:text-8xl font-serif font-bold leading-[0.9] tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}
                    >
                        Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic font-light">3-Step Success</span> <br />
                        Plan.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-xl lg:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}
                    >
                        We don't just fill out forms; we build a personalized roadmap for your child's future.
                    </motion.p>
                </div>

                {/* Framework Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            <TiltCard
                                className={`
                                    h-full p-10 rounded-[3.5rem] backdrop-blur-3xl border transition-all duration-700
                                    ${isDark
                                        ? 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 shadow-2xl shadow-black/50'
                                        : 'bg-white/80 border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]'
                                    }
                                `}
                                tiltIntensity={8}
                            >
                                <div className="h-full flex flex-col relative">
                                    {/* Icon Container with Glow */}
                                    <div className={`
                                        w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 relative group
                                        ${isDark ? 'bg-zinc-950/50 text-white' : 'bg-zinc-50 text-zinc-900 shadow-inner'}
                                    `}>
                                        <div className={`absolute inset-0 rounded-[2rem] bg-${pillar.color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`}></div>
                                        <pillar.icon size={44} className={`relative z-10 text-${pillar.color} transition-transform duration-500 group-hover:scale-110`} />
                                    </div>

                                    <span className={`text-[10px] font-black tracking-widest uppercase mb-4 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                                        {pillar.tag}
                                    </span>

                                    <h3 className={`text-3xl font-serif font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                        {pillar.title}
                                    </h3>

                                    <p className={`text-lg font-light leading-relaxed mb-10 flex-grow ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                                        {pillar.desc}
                                    </p>

                                    {/* Reveal on hover line */}
                                    <div className={`w-full h-px relative overflow-hidden transition-all duration-500 ${isDark ? 'bg-white/5' : 'bg-zinc-100'}`}>
                                        <div className={`absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-${pillar.color} to-transparent transform -translate-x-full transition-transform duration-1000 group-hover:translate-x-[400%]`}></div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

                {/* Lead Magnet CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div className={`
                        inline-flex flex-col md:flex-row items-center gap-10 p-10 md:p-14 rounded-[4rem] border backdrop-blur-3xl
                        ${isDark ? 'bg-zinc-900/60 border-white/5 shadow-3xl shadow-black/80' : 'bg-white border-white shadow-2xl shadow-brand-orange/5'}
                    `}>
                        <div className="text-left max-w-md">
                            <h4 className={`text-3xl font-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                Ready to <span className="text-brand-orange">Start Planning?</span>
                            </h4>
                            <p className={`text-lg font-light ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                                Join hundreds of students who found their right path with us.
                            </p>
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/contact"
                                className={`
                                    group inline-flex items-center gap-6 px-12 py-7 rounded-full font-black text-xs tracking-[0.3em] uppercase transition-all duration-500
                                    ${isDark
                                        ? 'bg-white text-zinc-950 hover:shadow-[0_20px_50px_rgba(255,255,255,0.25)]'
                                        : 'bg-zinc-950 text-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
                                    }
                                `}
                            >
                                Get My Roadmap <ArrowRight size={20} className="transition-transform group-hover:translate-x-3" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StrategicDNA;
