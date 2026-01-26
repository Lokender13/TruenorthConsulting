import { motion } from 'framer-motion';
import HeroLayout from './HeroLayout';
import { Globe, Plane, Award } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

const StudyAbroadHero = ({ service }: { service: any }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const visual = (
        <div className="relative w-full aspect-square flex items-center justify-center perspective-1000">
            {/* Background Radar Scan Effect */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 rounded-full border border-dashed opacity-10 animate-spin-slow ${isDark ? 'border-white' : 'border-blue-500'}`} style={{ animationDuration: '60s' }} />
                <div className={`absolute inset-4 rounded-full border border-dotted opacity-10 animate-spin-reverse ${isDark ? 'border-brand-orange' : 'border-blue-400'}`} style={{ animationDuration: '40s' }} />
                {/* Radar Sweep */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-brand-blue/5 animate-spin-slow" style={{ animationDuration: '4s' }} />
            </div>

            {/* Central Holographic Core */}
            <motion.div
                className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center z-10 
                    ${isDark ? 'shadow-[0_0_150px_rgba(59,130,246,0.5)]' : 'shadow-[0_0_150px_rgba(59,130,246,0.3)]'}`}
            >
                {/* Glass Sphere Surface */}
                <div className={`absolute inset-0 rounded-full backdrop-blur-sm border-2 
                    ${isDark ? 'bg-zinc-900/40 border-white/10' : 'bg-white/30 border-white/50'}`}
                />

                {/* 3D Inner Globe wireframe */}
                <Globe size={320} strokeWidth={0.5} className={`absolute text-brand-blue opacity-20 animate-spin-slow`} style={{ animationDuration: '60s' }} />

                {/* Active Scanning Beam */}
                <div className="absolute inset-0 w-full h-[2px] bg-brand-blue/50 top-1/2 shadow-[0_0_15px_#3B82F6] animate-pulse" />
                <div className="absolute inset-0 h-full w-[2px] bg-brand-orange/50 left-1/2 shadow-[0_0_15px_#F97316] animate-pulse" />

                {/* Central Iconic Logo */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`relative z-20 p-6 rounded-full ${isDark ? 'bg-black/50 border border-brand-blue/30' : 'bg-white/50 border border-white'}`}
                >
                    <Plane size={48} className="text-brand-blue transform -rotate-12" />
                </motion.div>

                {/* Floating Success Notification - Hyper Modern */}
                <motion.div
                    className={`absolute -top-16 -right-12 px-6 py-4 rounded-xl backdrop-blur-xl border-l-4 z-40 shadow-2xl
                        ${isDark ? 'bg-zinc-900/90 border-l-brand-orange border-y-white/5 border-r-white/5' : 'bg-white/95 border-l-brand-orange border-gray-100'}`}
                    animate={{ y: [-15, 0, -15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                            <Award size={16} className="text-brand-orange" />
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">Admission</div>
                            <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Confirmed</div>
                        </div>
                    </div>
                    <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
                        <motion.div
                            className="h-full bg-brand-blue"
                            animate={{ width: ['0%', '100%'] }}
                            transition={{ duration: 2, ease: "circOut" }}
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Orbiting Glassmorphic Cards */}
            {[
                { label: "USA", code: "US", x: 190, y: -60, delay: 0 },
                { label: "UK", code: "GB", x: -170, y: -80, delay: 1 },
                { label: "Canada", code: "CA", x: 170, y: 90, delay: 2 },
                { label: "Australia", code: "AU", x: -160, y: 100, delay: 3 },
                { label: "Germany", code: "DE", x: 0, y: -210, delay: 4 },
                { label: "Singapore", code: "SG", x: 0, y: 210, delay: 5 }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    className={`absolute px-5 py-3 rounded-2xl backdrop-blur-md border z-20 shadow-lg group hover:scale-110 transition-transform duration-300
                        ${isDark ? 'bg-zinc-800/40 border-white/10 hover:bg-zinc-800/80 hover:border-brand-blue/50' : 'bg-white/40 border-white/60 hover:bg-white/90 hover:border-brand-blue/30'}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        x: item.x,
                        y: item.y
                    }}
                    transition={{ delay: i * 0.1, duration: 0.8, type: 'spring' }}
                >
                    <div className="flex items-center gap-3">
                        <span className={`text-xs font-black opacity-50 ${isDark ? 'text-white' : 'text-black'}`}>{item.code}</span>
                        <div className={`h-4 w-[1px] ${isDark ? 'bg-white/20' : 'bg-black/10'}`} />
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.label}</span>
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-brand-blue/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                </motion.div>
            ))}

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-brand-blue"
                    animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                        x: [0, (Math.random() - 0.5) * 400],
                        y: [0, (Math.random() - 0.5) * 400]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
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
                    ${isDark ? 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20' : 'bg-brand-blue/5 text-brand-blue border border-brand-blue/10'}
                `}>
                    <Globe size={12} className="animate-spin-slow" />
                    World Class Admissions
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight tracking-tight">
                    {service.title.split(' ').map((word: string, i: number) => (
                        <span key={i} className={i >= 3 ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>

                <p className={`text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl ${isDark ? 'text-white/50' : 'text-gray-500 font-medium'}`}>
                    {service.tagline}
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                    <a
                        href="https://surabhirawat.edumilestones.com/abroad-studies/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform active:scale-95 shadow-2xl flex items-center gap-3
                            ${isDark ? 'bg-white text-black hover:bg-white/90 shadow-white/5' : 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-brand-orange/20'}
                        `}
                    >
                        Secure Your Seat
                        <Plane size={20} className="rotate-45" />
                    </a>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>99.5%</span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Visa Success</span>
                    </div>
                </div>
            </motion.div>
        </HeroLayout>
    );
};

export default StudyAbroadHero;
