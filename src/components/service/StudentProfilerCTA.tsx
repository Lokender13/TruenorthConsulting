import { motion } from 'framer-motion';
import { ArrowRight, ClipboardList } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const StudentProfilerCTA = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="py-12 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative max-w-6xl mx-auto overflow-hidden rounded-[3rem] p-10 lg:p-16 border theme-transition
                    ${isDark
                        ? 'bg-zinc-900/40 border-white/5 backdrop-blur-3xl'
                        : 'bg-white border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] backdrop-blur-3xl'
                    }`}
            >
                {/* Dynamic Background Elements */}
                <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.08] pointer-events-none translate-x-1/4 -translate-y-1/4 ${isDark ? 'bg-brand-blue' : 'bg-brand-blue/40'}`} />
                <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.08] pointer-events-none -translate-x-1/4 translate-y-1/4 ${isDark ? 'bg-brand-orange' : 'bg-brand-orange/40'}`} />

                <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 items-center gap-12 lg:gap-20">
                    {/* Left: Interactive Visual */}
                    <div className="lg:col-span-4 w-full flex justify-center">
                        <motion.div
                            className={`w-48 h-48 md:w-64 md:h-64 rounded-[3rem] flex items-center justify-center transform hover:rotate-6 transition-transform duration-700 relative group
                                ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-100 shadow-xl'}
                            `}
                        >
                            <ClipboardList size={80} className={`${isDark ? 'text-brand-blue/50' : 'text-brand-blue/40'} absolute group-hover:scale-110 transition-transform duration-500`} />
                            <div className={`absolute inset-4 rounded-[2rem] border-2 border-dashed ${isDark ? 'border-brand-orange/20' : 'border-brand-orange/10'} animate-spin-slow`} />
                            <ClipboardList size={40} className={`relative z-10 ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`} />
                        </motion.div>
                    </div>

                    {/* Right: Persuasive Content */}
                    <div className="lg:col-span-8 text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block text-brand-orange font-black tracking-[0.3em] uppercase text-[10px] mb-6"
                        >
                            Profile Engineering
                        </motion.span>
                        <h3 className={`text-3xl md:text-5xl font-serif font-bold mb-8 leading-[1.2] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Uncertain about your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">Global Trajectory?</span>
                        </h3>
                        <p className={`text-lg md:text-xl mb-10 leading-relaxed font-light ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>
                            Our proprietary <strong className={isDark ? 'text-white/80' : 'text-gray-900'}>Student Profiler</strong> intelligently evaluates your aptitude, budget, and aspirations to curate a roadmap that guarantees success.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                            <motion.a
                                href="https://careertest.edumilestones.com/student-profiler/?channel_id=Mzk2Mw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className={`group flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl relative overflow-hidden
                                    ${isDark ? 'bg-white text-black' : 'bg-brand-blue text-white shadow-brand-blue/20'}
                                `}
                            >
                                <span>Analyze My Profile</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-10 h-10 rounded-full border-2 ${isDark ? 'border-zinc-900 bg-zinc-800' : 'border-white bg-gray-100'} overflow-hidden`}>
                                            <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="student" />
                                        </div>
                                    ))}
                                </div>
                                <div className={`text-xs font-bold ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                                    <span className={isDark ? 'text-white/60' : 'text-gray-900'}>8,500+</span> Roadmaps Generated
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default StudentProfilerCTA;
