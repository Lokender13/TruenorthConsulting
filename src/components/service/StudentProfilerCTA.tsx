import { motion } from 'framer-motion';
import { ArrowRight, ClipboardList } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const StudentProfilerCTA = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative overflow-hidden rounded-3xl p-8 lg:p-12 border ${isDark
                    ? 'bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border-white/10'
                    : 'bg-gradient-to-br from-blue-50 via-white to-blue-50 border-brand-blue/10'
                    }`}
            >
                {/* Background Decorations */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 pointer-events-none ${isDark ? 'bg-blue-500' : 'bg-brand-blue'}`} />
                <div className={`absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-20 -ml-16 -mb-16 pointer-events-none ${isDark ? 'bg-purple-500' : 'bg-brand-orange'}`} />

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                    {/* Icon/Image Side */}
                    <div className="flex-shrink-0">
                        <div className={`w-24 h-24 rounded-2xl flex items-center justify-center transform rotate-3 ${isDark
                            ? 'bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                            : 'bg-white border border-blue-100 shadow-[0_0_30px_rgba(30,111,235,0.15)]'
                            }`}>
                            <ClipboardList size={48} className={isDark ? 'text-blue-400' : 'text-brand-blue'} />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 text-center lg:text-left">

                        <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Not sure which country or course fits you?
                        </h3>
                        <p className={`text-lg mb-6 max-w-2xl ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                            Take our comprehensive <strong>Student Profiler Test</strong> to evaluate your profile, strengths, and preferences. Get a personalized roadmap for your study abroad journey.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.a
                                href="https://careertest.edumilestones.com/student-profiler/?channel_id=Mzk2Mw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-xl ${isDark
                                    ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/20'
                                    : 'bg-brand-blue hover:bg-brand-blue-dark shadow-blue-500/20'
                                    }`}
                            >
                                Start Free Profiler Test
                                <ArrowRight size={20} />
                            </motion.a>

                            <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold ${isDark ? 'border-black bg-zinc-800' : 'border-white bg-gray-100'}`}>
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span>500+ students evaluated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default StudentProfilerCTA;
