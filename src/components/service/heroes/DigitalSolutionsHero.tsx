import { motion } from 'framer-motion';
import HeroLayout from './HeroLayout';
import { Laptop, Code, Rocket, Globe } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const DigitalSolutionsHero = ({ service }: { service: any }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const visual = (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* High-Tech Dashboard */}
            <motion.div
                className={`relative w-full max-w-md h-80 rounded-[2.5rem] border-2 backdrop-blur-3xl z-20 overflow-hidden
                ${isDark ? 'bg-zinc-900/60 border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.1)]' : 'bg-white/60 border-white shadow-2xl'}`}
                initial={{ rotateX: 20 }}
                animate={{ rotateX: 25, rotateY: -10 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
                {/* Header Dots */}
                <div className={`px-6 py-4 border-b flex items-center justify-between ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-100 bg-gray-50/50'}`}>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className={`text-[9px] font-mono tracking-widest ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Live_Analytics.sys</div>
                </div>

                <div className="p-8">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Lead Growth</div>
                            <div className={`text-5xl font-serif font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>3.5x</div>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase ${isDark ? 'bg-emerald-500/10 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                            Surging
                        </div>
                    </div>

                    {/* Animated Wave Graph */}
                    <div className="h-24 relative mt-4">
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                            <motion.path
                                d="M0,40 C10,38 20,35 30,32 C40,28 50,15 60,12 C70,10 80,5 100,0"
                                fill="none"
                                stroke="url(#dash-grad)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />
                            <defs>
                                <linearGradient id="dash-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FB923C" />
                                    <stop offset="100%" stopColor="#1E6FEB" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -right-8 bottom-1/4 space-y-3">
                    {[Code, Globe, Rocket].map((Icon, i) => (
                        <motion.div
                            key={i}
                            className={`p-3 rounded-2xl backdrop-blur-xl border ${isDark ? 'bg-brand-blue/20 border-white/10' : 'bg-white border-gray-100 shadow-xl'} text-brand-blue`}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.5 + i * 0.2 }}
                        >
                            <Icon size={20} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Background Data Stream */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-80 pointer-events-none opacity-10">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute text-[8px] font-mono whitespace-nowrap ${isDark ? 'text-brand-blue' : 'text-brand-blue'}`}
                        style={{ top: `${i * 10}%`, left: '-10%' }}
                        animate={{ x: ['0%', '120%'] }}
                        transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
                    >
                        {Math.random().toString(16).substring(2, 50)} {Math.random().toString(16).substring(2, 50)}
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <HeroLayout visual={visual}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm
                    ${isDark ? 'bg-blue-500/10 text-brand-blue border border-brand-blue/20' : 'bg-brand-blue/5 text-brand-blue border border-brand-blue/10'}
                `}>
                    <Laptop size={12} />
                    Digital Growth Architecture
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight tracking-tight">
                    {service.title.split(' ').map((word: string, i: number) => (
                        <span key={i} className={i >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>

                <p className={`text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl ${isDark ? 'text-white/50' : 'text-gray-500 font-medium'}`}>
                    {service.tagline}
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                    <Link
                        to="/contact"
                        className={`px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform active:scale-95 shadow-2xl flex items-center gap-3
                            ${isDark ? 'bg-white text-black hover:bg-white/90 shadow-white/5' : 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-brand-blue/20'}
                        `}
                    >
                        Scale My Brand
                        <Rocket size={20} />
                    </Link>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>350%</span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Avg Lead Growth</span>
                    </div>
                </div>
            </motion.div>
        </HeroLayout>
    );
};

export default DigitalSolutionsHero;
