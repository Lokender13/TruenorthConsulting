import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Search, Map, GraduationCap, Globe, ArrowDown } from 'lucide-react';
import TiltCard from '../ui/TiltCard';
import { useRef } from 'react';

const steps = [
    {
        icon: Search,
        title: "Discovery & Analysis",
        description: "We begin by understanding your unique strengths, interests, and aspirations through specialized, customized psychometric assessments.",
        color: "orange",
        gradient: "from-orange-500 to-amber-500",
        shadow: "shadow-orange-500/20"
    },
    {
        icon: Map,
        title: "Strategic Mapping",
        description: "Based on our discovery, we map out a personalized multi-year roadmap for your academic and professional success.",
        color: "blue",
        gradient: "from-blue-500 to-indigo-500",
        shadow: "shadow-blue-500/20"
    },
    {
        icon: GraduationCap,
        title: "Academic Excellence",
        description: "Receive expert guidance on profile building, standardized test prep, and curriculum support to strengthen your applications.",
        color: "purple",
        gradient: "from-purple-500 to-pink-500",
        shadow: "shadow-purple-500/20"
    },
    {
        icon: Globe,
        title: "Global Achievement",
        description: "From university selection to visa processing, we ensure a smooth journey to your dream global destination.",
        color: "teal",
        gradient: "from-teal-500 to-emerald-500",
        shadow: "shadow-teal-500/20"
    }
];

const InteractiveProcess: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section ref={containerRef} className={`py-20 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Background elements */}
            <div className={`absolute inset-0 opacity-10 ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'}`}>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase mb-8
                            ${isDark ? 'border-brand-orange/20 text-brand-orange bg-brand-orange/5' : 'border-brand-orange/10 text-brand-orange bg-white shadow-sm'}`}
                    >
                        Our Strategic Evolution
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-5xl md:text-8xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}
                    >
                        Your Journey to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic font-light">Success.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-xl font-light max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}
                    >
                        A systematic, scientifically-backed approach to navigating the complexities of global education and career planning.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Animated connecting lines for Desktop */}
                    <div className="hidden lg:block absolute top-[100px] left-0 w-full h-0.5 z-0">
                        <svg className="w-full h-2 overflow-visible">
                            <motion.path
                                d="M 0 1 L 1200 1"
                                fill="none"
                                stroke={isDark ? "rgba(249, 115, 22, 0.1)" : "rgba(249, 115, 22, 0.05)"}
                                strokeWidth="2"
                                strokeDasharray="10 10"
                            />
                            <motion.path
                                d="M 0 1 L 1200 1"
                                fill="none"
                                stroke="url(#gradient-line-process)"
                                strokeWidth="3"
                                style={{ pathLength }}
                            />
                            <defs>
                                <linearGradient id="gradient-line-process" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#F97316" />
                                    <stop offset="50%" stopColor="#1E6FEB" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="relative"
                        >
                            {/* Connector for Mobile/Tablet */}
                            {index !== steps.length - 1 && (
                                <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 z-0">
                                    <ArrowDown className={`${isDark ? 'text-white/10' : 'text-gray-200'}`} size={24} />
                                </div>
                            )}

                            <TiltCard
                                tiltIntensity={5}
                                className={`
                                    relative p-10 rounded-[3rem] h-full flex flex-col items-center text-center
                                    backdrop-blur-xl transition-all duration-700 group border
                                    ${isDark
                                        ? 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 shadow-2xl shadow-black/50'
                                        : 'bg-white/80 border-white hover:bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]'
                                    }
                                `}
                            >
                                {/* Floating Number */}
                                <div className={`
                                    absolute -top-6 -left-6 w-14 h-14 rounded-2xl flex items-center justify-center font-serif text-2xl font-bold
                                    shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12
                                    ${isDark ? 'bg-zinc-900 text-white border border-white/10' : 'bg-white text-zinc-900 border border-white shadow-brand-orange/10'}
                                `}>
                                    0{index + 1}
                                </div>

                                {/* Icon Container */}
                                <div className={`
                                    relative w-24 h-24 rounded-[2rem] mb-10 flex items-center justify-center
                                    bg-gradient-to-br transition-all duration-700 group-hover:scale-110 group-hover:rotate-6
                                    ${step.gradient}
                                    ${step.shadow}
                                `}>
                                    <div className="absolute inset-0 rounded-[2rem] bg-white/10 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <step.icon size={42} className="text-white relative z-10" />
                                </div>

                                <h3 className={`text-2xl md:text-3xl font-serif font-bold mb-6 transition-colors duration-500 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                    {step.title}
                                </h3>

                                <p className={`text-lg font-light leading-relaxed mb-8 flex-grow transition-colors duration-500 ${isDark ? 'text-zinc-400' : 'text-zinc-500 font-medium'}`}>
                                    {step.description}
                                </p>

                                {/* Bottom Decorative Line */}
                                <div className={`mt-auto w-16 h-1 rounded-full bg-gradient-to-r ${step.gradient} opacity-20 group-hover:w-32 group-hover:opacity-100 transition-all duration-700`} />
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-24 text-center"
                >
                    <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-full border shadow-sm transition-colors duration-500 ${isDark ? 'border-white/5 bg-white/5 text-zinc-500' : 'border-white bg-white text-zinc-400'}`}>
                        <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                        <span className="text-[10px] font-black tracking-widest uppercase">Scientifically Validated Assessments Applied at Each Stage</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InteractiveProcess;
