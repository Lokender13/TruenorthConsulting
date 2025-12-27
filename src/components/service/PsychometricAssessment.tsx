import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { ArrowRight, Brain, School, GraduationCap, Briefcase, UserCheck } from 'lucide-react';

const assessments = [
    {
        title: "Career Analysis for 2nd to 7th class",
        description: "Discover your child's unique Multiple Intelligence profile. Identify hidden strengths and learning styles early to create a solid foundation for future success.",
        icon: School,
        color: "from-blue-400 to-cyan-300",
        shadow: "shadow-blue-500/20",
        url: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as11"
    },
    {
        title: "Career Analysis for 8th, 9th & 10th Class",
        description: "Find the perfect stream and subject combinations aligned with your aptitude. Make informed decisions for your crucial high school years.",
        icon: Brain,
        color: "from-emerald-400 to-teal-300",
        shadow: "shadow-emerald-500/20",
        url: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as12"
    },
    {
        title: "Career Analysis for 11th & 12th Class",
        description: "Map out your ideal career path with a detailed execution plan. Explore suitable degree options and entrance exams tailored to your personality.",
        icon: GraduationCap,
        color: "from-orange-400 to-amber-300",
        shadow: "shadow-orange-500/20",
        url: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as13"
    },
    {
        title: "Career Analysis for Graduates",
        description: "Confused about post-graduation? Get clarity on master's programs, job profiles, and industry fits that maximize your earning potential.",
        icon: UserCheck,
        color: "from-purple-400 to-pink-300",
        shadow: "shadow-purple-500/20",
        url: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as14"
    },
    {
        title: "Career Analysis for Professionals",
        description: "Feeling stuck in your career? Evaluate your current trajectory and discover opportunities for growth, upskilling, or a successful career pivot.",
        icon: Briefcase,
        color: "from-red-400 to-rose-300",
        shadow: "shadow-red-500/20",
        url: "https://careertest.edumilestones.com/student-dashboard/suitability-registration/login/Mzk2Mw==/as204"
    }
];

const PsychometricAssessment = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Psychometric Assessments
                </h2>
                <p className={`text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    Scientifically designed tests to help you make accurate career decisions at every stage of life.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {assessments.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className={`group relative overflow-hidden rounded-3xl p-8 border transition-all duration-300 shadow-lg ${isDark
                            ? 'bg-zinc-900/50 border-white/10 hover:bg-zinc-900'
                            : 'bg-white border-gray-100 hover:shadow-2xl'
                            } ${item.shadow}`}
                    >
                        {/* Gradient Glow Effect on Hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${item.color}`} />

                        <div className="relative z-10">
                            {/* Icon Box */}
                            <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg`}>
                                <item.icon className="text-white" size={28} />
                            </div>

                            <h3 className={`text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${item.color} transition-colors ${isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                {item.title}
                            </h3>

                            <p className={`mb-8 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                {item.description}
                            </p>

                            <div className={`inline-flex items-center font-bold text-sm tracking-wide uppercase transition-all group-hover:gap-2 ${isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                Start Assessment
                                <ArrowRight size={16} className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color}`} />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default PsychometricAssessment;
