import { motion } from 'framer-motion';
import HeroLayout from './HeroLayout';
import { Globe, Plane, Award, MapPin, GraduationCap } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const StudyAbroadHero = ({ service }: { service: any }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const visual = (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Main Globe */}
            <motion.div
                className={`relative w-80 h-80 rounded-full border-2 overflow-hidden backdrop-blur-3xl z-20 flex items-center justify-center
                ${isDark ? 'bg-zinc-900/40 border-white/20 shadow-[0_0_80px_rgba(59,130,246,0.2)]' : 'bg-white/40 border-white shadow-brand-blue/20'}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <div className={`absolute inset-0 opacity-[0.1] bg-gradient-to-tr from-brand-blue via-transparent to-brand-orange`} />
                <Globe size={180} className={`${isDark ? 'text-white/10' : 'text-black/5'}`} />

                {/* Glowing Nodes on Globe */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(249,115,22,1)]"
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`
                        }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                ))}
            </motion.div>

            {/* Orbiting Plane */}
            <motion.div
                className="absolute z-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ width: '100%', height: '100%' }}
            >
                <motion.div
                    className={`absolute p-3 rounded-xl backdrop-blur-xl border
                        ${isDark ? 'bg-white/10 border-white/20 text-brand-orange' : 'bg-white/90 border-gray-100 text-brand-orange shadow-lg'}
                    `}
                    style={{ left: '50%', top: '5%' }}
                >
                    <Plane size={24} />
                </motion.div>
            </motion.div>

            {/* University Badges */}
            {[
                { icon: GraduationCap, label: "USA", x: -180, y: -100 },
                { icon: MapPin, label: "UK", x: 180, y: -50 },
                { icon: Award, label: "EU", x: -120, y: 150 }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    className={`absolute px-4 py-3 rounded-2xl backdrop-blur-2xl border flex items-center gap-3 z-30
                        ${isDark ? 'bg-zinc-800/90 border-white/10' : 'bg-white/90 border-white shadow-xl'}
                    `}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, x: item.x, y: item.y }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 1, type: "spring" }}
                >
                    <div className={`p-2 rounded-lg bg-brand-blue/10 text-brand-blue text-xs font-bold leading-none`}>
                        {item.label}
                    </div>
                </motion.div>
            ))}

            {/* Atmospheric Rings */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full border border-dashed opacity-20 ${isDark ? 'border-white' : 'border-brand-blue'}`}
                    style={{ width: `${400 + i * 100}px`, height: `${400 + i * 100}px` }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50 + i * 20, repeat: Infinity, ease: "linear" }}
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
                    <Link
                        to="/contact"
                        className={`px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform active:scale-95 shadow-2xl flex items-center gap-3
                            ${isDark ? 'bg-white text-black hover:bg-white/90 shadow-white/5' : 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-brand-orange/20'}
                        `}
                    >
                        Secure Your Seat
                        <Plane size={20} className="rotate-45" />
                    </Link>
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
