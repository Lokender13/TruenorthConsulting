import { motion } from 'framer-motion';
import HeroLayout from './HeroLayout';
import { BookOpen, Star, Sparkles, BookCheck } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const AcademicSupportHero = ({ service }: { service: any }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const visual = (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Main Trophy/A+ Visual */}
            <motion.div
                className={`relative w-72 h-80 rounded-[3rem] border-2 backdrop-blur-3xl z-20 flex flex-col items-center justify-center
                ${isDark ? 'bg-zinc-900/60 border-white/20 shadow-[0_0_100px_rgba(16,185,129,0.1)]' : 'bg-white/60 border-white shadow-xl shadow-emerald-500/10'}`}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute top-0 right-0 p-8">
                    <Star size={40} className="text-brand-orange animate-pulse opacity-20" />
                </div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[120px] font-serif font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-teal-500 leading-none mb-4"
                >
                    A+
                </motion.div>

                <div className={`text-[12px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                    Academic Excellence
                </div>

                {/* Floating Grade Indicators */}
                {[
                    { label: 'IB', x: -140, y: -60, color: 'bg-blue-500' },
                    { label: 'IGCSE', x: 140, y: 40, color: 'bg-emerald-500' },
                    { label: 'CBSE', x: -100, y: 120, color: 'bg-brand-orange' }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className={`absolute px-4 py-2 rounded-xl backdrop-blur-xl border flex items-center gap-2 z-30
                            ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/90 border-gray-100 shadow-lg'}
                        `}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                        style={{ transform: `translate(${item.x}px, ${item.y}px)` }}
                    >
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                        <span className={`text-[10px] font-black tracking-widest uppercase ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.label}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Background 3D Books (Conceptual) */}
            <div className="absolute inset-0">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-32 h-44 rounded-xl border backdrop-blur-md opacity-20
                            ${isDark ? 'bg-white/5 border-white/10' : 'bg-brand-blue/5 border-brand-blue/10'}
                        `}
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + i * 20}%`,
                            rotate: i * 15 - 30,
                            zIndex: 10
                        }}
                        animate={{ rotate: i * 15 - 30 + (i % 2 === 0 ? 5 : -5) }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* Floating Icons */}
            <motion.div
                className="absolute top-1/4 right-0 text-brand-blue opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <BookOpen size={48} />
            </motion.div>
        </div>
    );

    return (
        <HeroLayout visual={visual}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-sm
                    ${isDark ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-emerald-500/5 text-emerald-500 border border-emerald-500/10'}
                `}>
                    <BookCheck size={12} />
                    Grade Mastery Programs
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight">
                    {service.title.split(' ').map((word: string, i: number) => (
                        <span key={i} className={i >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>

                <p className={`text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-xl ${isDark ? 'text-white/50' : 'text-gray-500 font-medium'}`}>
                    {service.tagline}
                </p>

                <div className="flex wrap gap-6 items-center">
                    <Link
                        to="/contact"
                        className={`px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform active:scale-95 shadow-2xl flex items-center gap-3
                            ${isDark ? 'bg-white text-black hover:bg-white/90 shadow-white/5' : 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-brand-blue/20'}
                        `}
                    >
                        Boost My Grades
                        <Sparkles size={20} />
                    </Link>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>+2 Class</span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Avg Improvement</span>
                    </div>
                </div>
            </motion.div>
        </HeroLayout>
    );
};

export default AcademicSupportHero;
