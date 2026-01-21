import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Search, Map, GraduationCap, Globe, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: Search,
        number: "01",
        title: "Discovery & Analysis",
        description: "We begin by understanding your unique strengths, interests, and aspirations through specialized, customized psychometric assessments.",
        color: "orange",
        gradient: "from-orange-500 to-amber-500",
        bgGradient: "from-orange-500/10 to-amber-500/10",
    },
    {
        icon: Map,
        number: "02",
        title: "Strategic Mapping",
        description: "Based on our discovery, we map out a personalized multi-year roadmap for your academic and professional success.",
        color: "blue",
        gradient: "from-blue-500 to-indigo-500",
        bgGradient: "from-blue-500/10 to-indigo-500/10",
    },
    {
        icon: GraduationCap,
        number: "03",
        title: "Academic Excellence",
        description: "Receive expert guidance on profile building, standardized test prep, and curriculum support to strengthen your applications.",
        color: "purple",
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
        icon: Globe,
        number: "04",
        title: "Global Achievement",
        description: "From university selection to visa processing, we ensure a smooth journey to your dream global destination.",
        color: "teal",
        gradient: "from-teal-500 to-emerald-500",
        bgGradient: "from-teal-500/10 to-emerald-500/10",
    }
];

const InteractiveProcess: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-20 md:py-32 relative overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-zinc-100'}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] ${isDark ? 'bg-brand-orange/20' : 'bg-brand-orange/10'}`} />
                <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[150px] ${isDark ? 'bg-brand-blue/20' : 'bg-brand-blue/10'}`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase mb-8
                            ${isDark ? 'border-brand-orange/20 text-brand-orange bg-brand-orange/5' : 'border-brand-orange/20 text-brand-orange bg-white'}`}
                    >
                        Our Proven Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}
                    >
                        Your Journey to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue">Success.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}
                    >
                        A systematic, scientifically-backed approach to navigating the complexities of global education and career planning.
                    </motion.p>
                </div>

                {/* Process Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className={`
                                relative p-8 rounded-3xl h-full transition-all duration-500
                                ${isDark
                                    ? 'bg-zinc-900 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50'
                                    : 'bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-200/50'
                                }
                            `}>
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${step.bgGradient}`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Number & Icon Row */}
                                    <div className="flex items-center justify-between mb-6">
                                        {/* Large Number */}
                                        <span className={`text-6xl font-serif font-bold transition-colors duration-500 ${isDark ? 'text-zinc-800 group-hover:text-zinc-700' : 'text-zinc-100 group-hover:text-zinc-200'}`}>
                                            {step.number}
                                        </span>

                                        {/* Icon */}
                                        <div className={`
                                            w-16 h-16 rounded-2xl flex items-center justify-center
                                            bg-gradient-to-br ${step.gradient}
                                            transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                                            shadow-lg
                                        `}>
                                            <step.icon className="text-white w-8 h-8" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-2xl md:text-3xl font-serif font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`text-base leading-relaxed mb-6 transition-colors duration-500 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                                        {step.description}
                                    </p>

                                    {/* Arrow Indicator */}
                                    <div className={`
                                        inline-flex items-center gap-2 text-sm font-semibold
                                        transition-all duration-300 group-hover:gap-4
                                        bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent
                                    `}>
                                        Learn More
                                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 ${isDark ? 'text-white' : 'text-zinc-900'}`} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 md:mt-20 text-center"
                >
                    <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-full border ${isDark ? 'border-white/10 bg-white/5' : 'border-zinc-200 bg-white'}`}>
                        <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                        <span className={`text-xs font-semibold tracking-wide ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                            Scientifically Validated Assessments Applied at Each Stage
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InteractiveProcess;
