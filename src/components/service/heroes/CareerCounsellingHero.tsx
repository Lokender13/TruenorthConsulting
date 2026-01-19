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
            {/* Pulsing Brain Base */}
            <motion.div
                className={`relative w-64 h-64 rounded-full flex items-center justify-center z-10 
                    ${isDark ? 'bg-zinc-900 shadow-[0_0_50px_rgba(59,130,246,0.2)]' : 'bg-white shadow-[0_0_50px_rgba(59,130,246,0.1)]'}`}
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <Brain size={100} className="text-brand-blue" />

                {/* Floating Insight Bubbles */}
                {[
                    { icon: Sparkles, color: 'text-brand-orange', delay: 0 },
                    { icon: Target, color: 'text-brand-blue', delay: 1 },
                    { icon: Compass, color: 'text-purple-500', delay: 2 }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-16 h-16 rounded-2xl backdrop-blur-xl border flex items-center justify-center shadow-lg
                            ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-100'}
                        `}
                        animate={{
                            x: [Math.cos(i * 120 * Math.PI / 180) * 150, Math.cos(i * 120 * Math.PI / 180) * 170, Math.cos(i * 120 * Math.PI / 180) * 150],
                            y: [Math.sin(i * 120 * Math.PI / 180) * 150, Math.sin(i * 120 * Math.PI / 180) * 170, Math.sin(i * 120 * Math.PI / 180) * 150],
                        }}
                        transition={{ duration: 4, repeat: Infinity, delay: item.delay }}
                    >
                        <item.icon size={24} className={item.color} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Orbiting Particles */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-orange'}`}
                        animate={{
                            rotate: 360,
                            scale: [1, 1.5, 1],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity },
                            opacity: { duration: 2, repeat: Infinity }
                        }}
                        style={{
                            left: '50%',
                            top: '50%',
                            transformOrigin: `${140 + i * 20}px 0`
                        }}
                    />
                ))}
            </div>

            {/* Data Scanning Effect */}
            <motion.div
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent z-20"
                animate={{ top: ['20%', '80%', '20%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
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

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight">
                    {service.title.split(' ').map((word: string, i: number) => (
                        <span key={i} className={i >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>

                <p className={`text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-xl ${isDark ? 'text-white/50' : 'text-gray-500 font-medium'}`}>
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
