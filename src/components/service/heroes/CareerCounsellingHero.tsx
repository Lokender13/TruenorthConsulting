import { motion } from 'framer-motion';
import HeroLayout from './HeroLayout';
import { Brain, Sparkles, Target, Compass, ArrowRight } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const CareerCounsellingHero = ({ service }: { service: any }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const visual = (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Central Brain Core */}
            <motion.div
                className={`relative w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center z-20 
                    ${isDark ? 'bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.3)]' : 'bg-white/80 backdrop-blur-xl border border-white shadow-[0_0_60px_rgba(59,130,246,0.2)]'}`}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-brand-blue/20 to-brand-orange/20 animate-pulse`} />
                <Brain size={80} className="text-brand-blue relative z-10" strokeWidth={1.5} />

                {/* Scanning Effect */}
                <motion.div
                    className="absolute w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent z-30 opacity-70"
                    animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>

            {/* Orbiting Insight Cards */}
            {[
                { icon: Target, label: 'Aptitude', color: 'text-brand-blue', angle: 0 },
                { icon: Sparkles, label: 'Personality', color: 'text-brand-orange', angle: 120 },
                { icon: Compass, label: 'Interests', color: 'text-purple-500', angle: 240 }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    className={`absolute flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md border shadow-lg z-10
                        ${isDark ? 'bg-zinc-800/90 border-white/10' : 'bg-white/90 border-white'}
                    `}
                    animate={{
                        x: [
                            Math.cos((item.angle * Math.PI) / 180) * 160,
                            Math.cos(((item.angle + 360) * Math.PI) / 180) * 160
                        ],
                        y: [
                            Math.sin((item.angle * Math.PI) / 180) * 160,
                            Math.sin(((item.angle + 360) * Math.PI) / 180) * 160
                        ]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                        <item.icon size={20} className={item.color} />
                    </div>
                    <div>
                        <span className={`text-xs font-bold block ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.label}</span>
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Analysis</span>
                    </div>
                </motion.div>
            ))}

            {/* Connecting Lines (Decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 animate-spin-slow" style={{ animationDuration: '60s' }}>
                <circle cx="50%" cy="50%" r="160" stroke="url(#gradient-line)" strokeWidth="1" fill="none" strokeDasharray="10 10" />
                <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#F97316" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-orange'}`}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                    style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                    }}
                />
            ))}
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
                    ${isDark ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' : 'bg-brand-orange/5 text-brand-orange border border-brand-orange/10'}
                `}>
                    <Sparkles size={12} className="animate-pulse" />
                    Decode Your Potential
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight tracking-tight">
                    {service.title.split(' ').map((word: string, i: number) => (
                        <span key={i} className={i >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>

                <p className={`text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl ${isDark ? 'text-white/50' : 'text-gray-500 font-medium'}`}>
                    {service.tagline}
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                    <Link
                        to="/contact"
                        className={`px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform active:scale-95 shadow-2xl flex items-center gap-3
                            ${isDark ? 'bg-white text-black hover:bg-white/90 shadow-white/5' : 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-brand-blue/20'}
                        `}
                    >
                        Map Your Career
                        <ArrowRight size={20} />
                    </Link>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>98%</span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Success Rate</span>
                    </div>
                </div>
            </motion.div>
        </HeroLayout>
    );
};

export default CareerCounsellingHero;
