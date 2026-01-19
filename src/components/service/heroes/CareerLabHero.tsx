import { motion } from 'framer-motion';
import HeroLayout from './HeroLayout';
import { Layout, Smartphone, PieChart, FlaskConical, Sparkles } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const CareerLabHero = ({ service }: { service: any }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const visual = (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Control Center Visual */}
            <div className="relative w-full max-w-lg aspect-video">
                <motion.div
                    className={`absolute inset-0 rounded-[3rem] border-2 backdrop-blur-3xl z-20 flex flex-col p-8 overflow-hidden
                    ${isDark ? 'bg-zinc-900/60 border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.1)]' : 'bg-white/60 border-white shadow-2xl'}`}
                    initial={{ rotateX: 10, rotateY: 5 }}
                    animate={{ rotateX: 15, rotateY: -5 }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex gap-4">
                            <div className={`p-4 rounded-2xl ${isDark ? 'bg-white/5' : 'bg-brand-blue/10'} text-brand-blue`}>
                                <Layout size={24} />
                            </div>
                            <div>
                                <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Lab Operating System</div>
                                <div className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-400'}`}>v4.2.0-STABLE</div>
                            </div>
                        </div>
                        <div className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase ${isDark ? 'bg-white/5 text-white/50' : 'bg-gray-100 text-gray-500'}`}>
                            White-Label
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-4">
                        {[
                            { label: 'Platform Usage', value: '100%', icon: Smartphone, color: 'text-brand-orange' },
                            { label: 'Real-time Stats', value: 'Live', icon: PieChart, color: 'text-brand-blue' }
                        ].map((stat, i) => (
                            <div key={i} className={`p-6 rounded-[2rem] border ${isDark ? 'bg-white/5 border-white/5' : 'bg-gray-50/50 border-gray-100'}`}>
                                <stat.icon size={20} className={`${stat.color} mb-3`} />
                                <div className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                                <div className={`text-[9px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-white/30' : 'text-gray-400'}`}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Floating Elements Around */}
                <motion.div
                    className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/20 rounded-full blur-[80px] z-10"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
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
                    <FlaskConical size={12} />
                    The Future of Career Guidance
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight">
                    {service.title.split(' ').map((word: string, i: number) => (
                        <span key={i} className={i >= 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue' : ''}>
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
                        Schedule a Demo
                        <Sparkles size={20} />
                    </Link>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>100%</span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-400'}`}>White-Labeled</span>
                    </div>
                </div>
            </motion.div>
        </HeroLayout>
    );
};

export default CareerLabHero;
