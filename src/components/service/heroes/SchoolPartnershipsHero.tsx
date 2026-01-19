import { motion } from 'framer-motion';
import HeroLayout from './HeroLayout';
import { Users2, Building2, Share2, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const SchoolPartnershipsHero = ({ service }: { service: any }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const visual = (
        <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Network Visualization */}
            <div className="relative w-80 h-80">
                <motion.div
                    className={`absolute inset-0 rounded-full border-2 border-dashed ${isDark ? 'border-brand-blue/20' : 'border-brand-blue/10'}`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                {/* Central Hub */}
                <motion.div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-[2.5rem] flex items-center justify-center z-20 shadow-2xl
                        ${isDark ? 'bg-zinc-900 border border-brand-blue/20' : 'bg-white border border-brand-blue/10'}`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    <Building2 size={60} className="text-brand-blue" />
                </motion.div>

                {/* Partner Nodes */}
                {[
                    { icon: Users2, label: '10k+ Students', x: -160, y: -80 },
                    { icon: ShieldCheck, label: 'NEP Compliant', x: 180, y: -40 },
                    { icon: Share2, label: 'Global Network', x: 0, y: 180 },
                    { icon: HeartHandshake, label: 'Unified Vision', x: -140, y: 120 }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className={`absolute px-5 py-4 rounded-2xl backdrop-blur-3xl border flex flex-col items-center gap-2 z-30
                            ${isDark ? 'bg-zinc-800/90 border-white/10' : 'bg-white/90 border-gray-100 shadow-xl'}
                        `}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, x: item.x, y: item.y }}
                        transition={{ delay: 1 + i * 0.2, duration: 1, type: "spring" }}
                    >
                        <div className={`p-2 rounded-xl bg-brand-blue/10 text-brand-blue`}>
                            <item.icon size={20} />
                        </div>
                        <span className={`text-[9px] font-black tracking-widest uppercase ${isDark ? 'text-white/60' : 'text-gray-500'}`}>{item.label}</span>
                    </motion.div>
                ))}

                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-x-[-100px] inset-y-[-100px] w-[calc(100%+200px)] h-[calc(100%+200px)] pointer-events-none opacity-20">
                    <defs>
                        <linearGradient id="link-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1E6FEB" />
                            <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                    </defs>
                    {[
                        { x1: '50%', y1: '50%', x2: '10%', y2: '30%' },
                        { x1: '50%', y1: '50%', x2: '85%', y2: '40%' },
                        { x1: '50%', y1: '50%', x2: '50%', y2: '85%' },
                        { x1: '50%', y1: '50%', x2: '20%', y2: '75%' }
                    ].map((line, i) => (
                        <motion.line
                            key={i}
                            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                            stroke="url(#link-grad)" strokeWidth="2" strokeDasharray="5,5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 1.5 + i * 0.2 }}
                        />
                    ))}
                </svg>
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
                    ${isDark ? 'bg-indigo-500/10 text-indigo-500 border border-indigo-500/20' : 'bg-indigo-500/5 text-indigo-500 border border-indigo-500/10'}
                `}>
                    <HeartHandshake size={12} />
                    Strategic Institutional Synergy
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-[1.1] tracking-tight">
                    {service.title.split(' ').map((word: string, i: number) => (
                        <span key={i} className={i >= 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-indigo-500 to-purple-600' : ''}>
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
                        Partner With Us
                        <ArrowRight size={20} />
                    </Link>
                    <div className="flex flex-col">
                        <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>50+</span>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/30' : 'text-gray-400'}`}>School Partners</span>
                    </div>
                </div>
            </motion.div>
        </HeroLayout>
    );
};

export default SchoolPartnershipsHero;
