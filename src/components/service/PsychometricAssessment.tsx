import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { ArrowRight, Brain, School, GraduationCap, Briefcase, UserCheck } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

const assessments = [
    {
        title: "Career Analysis for 2nd to 7th class",
        description: "Discover your child's unique Multiple Intelligence profile. Identify hidden strengths and learning styles early to create a solid foundation for future success.",
        icon: School,
        color: "from-blue-500 to-cyan-400",
        shadow: "shadow-blue-500/30",
        url: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as11"
    },
    {
        title: "Career Analysis for 8th, 9th & 10th Class",
        description: "Find the perfect stream and subject combinations aligned with your aptitude. Make informed decisions for your crucial high school years.",
        icon: Brain,
        color: "from-emerald-500 to-teal-400",
        shadow: "shadow-emerald-500/30",
        url: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as12"
    },
    {
        title: "Career Analysis for 11th & 12th Class",
        description: "Map out your ideal career path with a detailed execution plan. Explore suitable degree options and entrance exams tailored to your personality.",
        icon: GraduationCap,
        color: "from-orange-500 to-amber-400",
        shadow: "shadow-orange-500/30",
        url: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as13"
    },
    {
        title: "Career Analysis for Graduates",
        description: "Confused about post-graduation? Get clarity on master's programs, job profiles, and industry fits that maximize your earning potential.",
        icon: UserCheck,
        color: "from-purple-500 to-pink-400",
        shadow: "shadow-purple-500/30",
        url: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as14"
    },
    {
        title: "Career Analysis for Professionals",
        description: "Feeling stuck in your career? Evaluate your current trajectory and discover opportunities for growth, upskilling, or a successful career pivot.",
        icon: Briefcase,
        color: "from-red-500 to-rose-400",
        shadow: "shadow-red-500/30",
        url: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as204"
    }
];

const AssessmentCard = ({ item, index }: { item: typeof assessments[0], index: number }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            <TiltCard
                tiltIntensity={8}
                glareOpacity={isDark ? 0.1 : 0.05}
                className={`group relative h-full rounded-[2.5rem] p-8 transition-all duration-500 overflow-hidden border
                    ${isDark
                        ? 'bg-zinc-900 border-white/10 hover:border-brand-orange/30 shadow-xl shadow-black/50'
                        : 'bg-white border-zinc-200 hover:border-brand-orange/30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)]'
                    }
                `}
            >
                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Header */}
                    <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg ${item.shadow} transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                        <item.icon className="text-white" size={32} />
                    </div>

                    <div className="flex-grow">
                        <h3 className={`text-2xl font-serif font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h3>
                        <p className={`mb-8 leading-relaxed text-base ${isDark ? 'text-zinc-400 font-light' : 'text-zinc-600 font-medium'}`}>{item.description}</p>
                    </div>

                    <div className={`mt-auto pt-6 border-t ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase group/btn transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
                        >
                            <span>Start Assessment</span>
                            <ArrowRight size={18} className="translate-x-0 group-hover/btn:translate-x-2 transition-transform text-current" style={{ color: 'initial' }} />
                        </a>
                    </div>
                </div>
            </TiltCard>
        </motion.div>
    );
};

const PsychometricAssessment = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-16 md:py-20 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.05] ${isDark ? 'bg-brand-orange' : 'bg-brand-orange/40'}`} />
                <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.05] ${isDark ? 'bg-brand-blue' : 'bg-brand-blue/40'}`} />

                {/* Grid Pattern */}
                <div
                    className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.02]'}`}
                    style={{
                        backgroundImage: `radial-gradient(circle, ${isDark ? 'white' : 'black'} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Psychometric Excellence
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-6xl font-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    >
                        Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue">True Potential</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}
                    >
                        Scientifically-designed assessments to guide you toward a fulfilling career at every life stage, from early schooling to professional pivots.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {assessments.map((item, index) => (
                        <AssessmentCard key={index} item={item} index={index} />
                    ))}
                </div>

                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={`p-1 rounded-full inline-block bg-gradient-to-r from-brand-orange to-brand-blue shadow-2xl`}>
                        <a href="https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as13"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 px-10 py-5 text-lg font-bold rounded-full transition-all duration-300 transform active:scale-95
                                ${isDark ? 'bg-zinc-900 text-white hover:bg-transparent' : 'bg-white text-gray-900 hover:bg-transparent hover:text-white'}
                            `}
                        >
                            <span>Take a Free Analysis Now</span>
                            <ArrowRight size={22} />
                        </a>
                    </div>
                    <p className={`mt-6 text-sm font-medium ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                        Institutional login? <a href="#" className="underline hover:text-brand-orange transition-colors">Contact Partner Support</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PsychometricAssessment;
