import { motion } from 'framer-motion';
import HeroLayout from './HeroLayout';
import { Target, Zap, TrendingUp, Award, BarChart3 } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const CompetitiveExamsHero = ({ service }: { service: any }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const visual = (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Bullseye Visual */}
            <div className="relative flex items-center justify-center">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full border-2 ${isDark ? 'border-brand-orange/20' : 'border-brand-orange/10'}`}
                        style={{ width: `${100 + i * 80}px`, height: `${100 + i * 80}px` }}
                        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                ))}

                <motion.div
                    className="relative w-32 h-32 rounded-full bg-gradient-to-br from-brand-orange to-red-500 flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.4)] z-10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Target size={60} className="text-white" />
                </motion.div>

                {/* Score Indicators */}
                {[
                    { label: 'SAT 1550+', x: -180, y: -120, icon: Zap },
                    { label: 'IELTS 8.5', x: 200, y: -40, icon: Award },
                    { label: 'JEE Top 1%', x: -120, y: 160, icon: TrendingUp }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className={`absolute px-6 py-4 rounded-[2rem] backdrop-blur-3xl border flex items-center gap-4 z-20
                            ${isDark ? 'bg-zinc-800/90 border-white/10' : 'bg-white/90 border-gray-100 shadow-2xl'}
                        `}
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        animate={{ opacity: 1, x: item.x, y: item.y }}
                        transition={{ delay: 1 + i * 0.2, duration: 1, type: "spring" }}
                    >
                        <div className={`p-3 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-brand-orange/10'} text-brand-orange`}>
                            <item.icon size={24} />
                        </div>
                        <div>
                            <div className={`text-xl font-serif font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.label.split(' ')[0]}</div>
                            <div className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/40' : 'text-gray-500'}`}>{item.label.split(' ').slice(1).join(' ')}</div>
                        </div>
                    </motion.div>
                ))}

                {/* Motion Trails */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute h-[2px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-20`}
                            style={{
                                width: '200px',
                                left: `${-100 + Math.random() * 200}px`,
                                top: `${Math.random() * 100}%`,
                                rotate: -45
                            }}
                            animate={{ x: [0, 500], opacity: [0, 0.5, 0] }}
                            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: i * 0.5 }}
                        />
                    ))}
                </div>
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
                <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-sm
                    ${isDark ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' : 'bg-brand-orange/5 text-brand-orange border border-brand-orange/10'}
                `}>
                    <BarChart3 size={12} />
                    Elite Result Engineering
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight">
                    {service.title.split(' ').map((word: string, i: number) => (
                        <span key={i} className={i >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-red-500 to-purple-600' : ''}>
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
                            ${isDark ? 'bg-white text-black hover:bg-white/90 shadow-white/5' : 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-brand-orange/20'}
                        `}
                    >
                        Start Prep Now
                        <Zap size={20} className="fill-current" />
                    </Link>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Top 1%</span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-400'}`}>Success Percentile</span>
                    </div>
                </div>
            </motion.div>
        </HeroLayout>
    );
};

export default CompetitiveExamsHero;
