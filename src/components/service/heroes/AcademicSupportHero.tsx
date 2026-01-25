import { motion } from 'framer-motion';
import HeroLayout from './HeroLayout';
import { BookOpen, Star, Sparkles, BookCheck, ArrowRight } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const AcademicSupportHero = ({ service }: { service: any }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const visual = (
        <div className="relative w-full aspect-square flex items-center justify-center isolate">
            {/* Main Trophy/A+ Visual */}
            <motion.div
                className={`relative w-72 md:w-80 h-80 md:h-96 rounded-[2.5rem] border backdrop-blur-3xl z-20 flex flex-col items-center justify-center
                ${isDark ? 'bg-zinc-900/80 border-white/10 shadow-[0_0_60px_rgba(16,185,129,0.1)]' : 'bg-white/80 border-white/60 shadow-2xl shadow-emerald-500/10'}`}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Decorative Elements - Contained inside relative parent */}
                <div className="absolute top-0 right-0 p-6 md:p-8">
                    <Star size={28} className="text-brand-orange animate-pulse opacity-20" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <Sparkles size={20} className="text-brand-blue animate-pulse opacity-20" />
                </div>

                {/* Background Gradient Mesh - Clipped to radius */}
                <div className={`absolute inset-0 opacity-30 rounded-[2.5rem] overflow-hidden ${isDark ? 'bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20' : 'bg-gradient-to-br from-emerald-100 via-transparent to-teal-100'}`} />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="relative z-10 text-[100px] md:text-[140px] font-serif font-black leading-none mb-2"
                    style={{
                        background: 'linear-gradient(135deg, #10B981 0%, #14B8A6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 10px 20px rgba(16, 185, 129, 0.2))'
                    }}
                >
                    A+
                </motion.div>

                <div className={`relative z-10 text-[10px] md:text-[11px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-white/40' : 'text-gray-400'}`}>
                    Academic Excellence
                </div>

                {/* Floating Grade Indicators - Centered relative positioning */}
                {[
                    { label: 'IB', x: '-50%', y: '-280%', color: 'bg-blue-500', delay: 0, dx: 100, dy: -40 },
                    { label: 'IGCSE', x: '-180%', y: '120%', color: 'bg-emerald-500', delay: 1, dx: -60, dy: 20 },
                    { label: 'CBSE', x: '80%', y: '280%', color: 'bg-brand-orange', delay: 2, dx: 50, dy: 50 }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className={`absolute px-3 py-2 md:px-4 md:py-2.5 rounded-xl backdrop-blur-xl border flex items-center gap-2 z-30 shadow-lg top-1/2 left-1/2
                            ${isDark ? 'bg-zinc-800/90 border-white/20' : 'bg-white border-white/60'}
                        `}
                        initial={{ x: item.dx, y: item.dy }}
                        animate={{
                            x: [item.dx, item.dx, item.dx],
                            y: [item.dy, item.dy - 10, item.dy]
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
                        style={{ marginLeft: item.x, marginTop: item.y, transform: 'translate(-50%, -50%)' }}
                    >
                        <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${item.color} shadow-sm`} />
                        <span className={`text-[10px] md:text-[11px] font-bold tracking-wider uppercase ${isDark ? 'text-white' : 'text-gray-700'}`}>{item.label}</span>
                    </motion.div>
                ))}
            </motion.div>

            {/* Background Elements */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-2xl border backdrop-blur-sm
                            ${isDark ? 'bg-white/5 border-white/5' : 'bg-white/40 border-white/40 shadow-sm'}
                        `}
                        style={{
                            width: `${60 + i * 10}%`,
                            height: `${60 + i * 10}%`,
                            maxWidth: '300px',
                            maxHeight: '380px',
                            zIndex: 10 - i,
                        }}
                        animate={{ rotate: [i * 15 - 15, i * 15 - 10, i * 15 - 15] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
                    />
                ))}
            </div>

            {/* Floating Icons */}
            <motion.div
                className="absolute top-[10%] right-[5%] text-brand-blue opacity-30"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <BookOpen size={40} strokeWidth={1.5} />
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
