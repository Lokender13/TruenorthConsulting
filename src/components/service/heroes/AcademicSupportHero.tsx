import { motion } from 'framer-motion';
import HeroLayout from './HeroLayout';
import { Sparkles, BookCheck, ArrowRight } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const AcademicSupportHero = ({ service }: { service: any }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const visual = (
        <div className="relative w-full aspect-square flex items-center justify-center isolate">
            {/* Background Geometric Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                    <motion.circle cx="20" cy="20" r="2" fill="currentColor" className="text-emerald-500" animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} />
                    <motion.rect x="70" y="15" width="4" height="4" fill="currentColor" className="text-blue-500" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} />
                    <motion.path d="M80,80 L85,90 L75,90 Z" fill="currentColor" className="text-orange-500" animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} />
                </svg>
            </div>

            {/* Central Badge Container */}
            <motion.div
                className={`relative w-64 h-80 rounded-[2.5rem] border backdrop-blur-3xl z-20 flex flex-col items-center justify-center p-6
                    ${isDark ? 'bg-zinc-900/80 border-white/10 shadow-[0_0_60px_rgba(16,185,129,0.15)]' : 'bg-white/90 border-white/60 shadow-2xl shadow-emerald-500/15'}`}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* School Subject 3D Icons orbiting */}
                <div className="absolute inset-0 z-0">
                    {[
                        { icon: "∑", label: "Math", color: "bg-blue-100 text-blue-600", angle: 0 },
                        { icon: "⚗️", label: "Science", color: "bg-purple-100 text-purple-600", angle: 120 },
                        { icon: "Aa", label: "English", color: "bg-orange-100 text-orange-600", angle: 240 }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-12 h-12 rounded-2xl shadow-lg flex items-center justify-center text-xl font-bold ${item.color}`}
                            animate={{
                                x: [
                                    Math.cos((item.angle * Math.PI) / 180) * 140,
                                    Math.cos(((item.angle + 360) * Math.PI) / 180) * 140
                                ],
                                y: [
                                    Math.sin((item.angle * Math.PI) / 180) * 80,
                                    Math.sin(((item.angle + 360) * Math.PI) / 180) * 80
                                ],
                                scale: [1, 1.1, 1],
                                zIndex: [10, 30, 10] // Simple depth simulation
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            {item.icon}
                        </motion.div>
                    ))}
                </div>

                {/* Main A+ Text */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 text-center"
                >
                    <div className="text-[120px] font-serif font-black leading-none tracking-tighter"
                        style={{
                            background: 'linear-gradient(135deg, #10B981 0%, #0D9488 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 4px 12px rgba(16,185,129,0.3))'
                        }}
                    >
                        A+
                    </div>
                    <div className={`text-xs font-bold tracking-[0.3em] uppercase mt-2 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                        Academic Mastery
                    </div>
                </motion.div>

                {/* Floating Tags */}
                <motion.div
                    className={`absolute -bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-xl border shadow-lg flex items-center gap-2 whitespace-nowrap
                        ${isDark ? 'bg-zinc-800 text-white border-white/10' : 'bg-white text-gray-800 border-gray-100'}`}
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <Sparkles size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold">Top 1% Scorer</span>
                </motion.div>
            </motion.div>

            {/* Live Class Indicator */}
            <motion.div
                className={`absolute top-[15%] right-[10%] px-4 py-2 rounded-lg backdrop-blur-md border shadow-lg flex items-center gap-2
                    ${isDark ? 'bg-red-500/10 border-red-500/30' : 'bg-red-50 border-red-200'}
                `}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-red-400' : 'text-red-500'}`}>Live Session</span>
            </motion.div>
        </div>
    );

    return (
        <HeroLayout visual={visual}>
            {/* Background Grid Pattern to fill empty space */}
            <div className={`absolute inset-0 pointer-events-none -z-10 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.02]'}`}
                style={{
                    backgroundImage: `radial-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
            >
                <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm border
                    ${isDark ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-white text-emerald-600 border-emerald-100 shadow-emerald-500/5'}
                `}>
                    <BookCheck size={12} />
                    Grade Mastery Programs
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight tracking-tight">
                    {service.title.split(' ').map((word: string, i: number) => (
                        <span key={i} className={i >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>

                <p className={`text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl ${isDark ? 'text-white/60' : 'text-gray-600 font-medium'}`}>
                    {service.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-5 sm:items-center mb-12">
                    <Link
                        to="/contact"
                        className={`group relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1
                            ${isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-brand-blue/30'}
                        `}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Demo Session
                            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-zinc-100' : 'bg-brand-blue-dark'}`} />
                    </Link>

                    <div className={`flex items-center gap-2 text-sm font-semibold opacity-70 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`w-8 h-8 rounded-full border-2 ${isDark ? 'border-black bg-zinc-800' : 'border-white bg-gray-100'}`} />
                            ))}
                        </div>
                        <span>Trusted by 500+ parents</span>
                    </div>
                </div>
            </motion.div>
        </HeroLayout>
    );
};

export default AcademicSupportHero;
