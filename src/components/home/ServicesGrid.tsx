import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, GraduationCap, Users, Building, BarChart } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import TiltCard from '../ui/TiltCard';

import careerCounsellingImg from '../../assets/images/services/career-counselling.webp';
import studyAbroadImg from '../../assets/images/services/study-abroad.webp';
import academicSupportImg from '../../assets/images/services/academic-support.webp';
import testPrepImg from '../../assets/images/services/test-prep.webp';
import schoolPartnershipsImg from '../../assets/images/services/school-partnerships.webp';
import careerLabsImg from '../../assets/images/services/career-labs.webp';

// Color themes for each service
const serviceColors = {
    blue: {
        light: { iconBg: 'bg-brand-blue/5', iconText: 'text-brand-blue', border: 'border-brand-blue/10', glow: 'shadow-brand-blue/10' },
        dark: { iconBg: 'bg-brand-blue/10', iconText: 'text-brand-blue', border: 'border-brand-blue/20', glow: 'shadow-brand-blue/20' }
    },
    orange: {
        light: { iconBg: 'bg-brand-orange/5', iconText: 'text-brand-orange', border: 'border-brand-orange/10', glow: 'shadow-brand-orange/10' },
        dark: { iconBg: 'bg-brand-orange/10', iconText: 'text-brand-orange', border: 'border-brand-orange/20', glow: 'shadow-brand-orange/20' }
    },
    emerald: {
        light: { iconBg: 'bg-emerald-500/5', iconText: 'text-emerald-600', border: 'border-emerald-500/10', glow: 'shadow-emerald-500/10' },
        dark: { iconBg: 'bg-emerald-500/10', iconText: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'shadow-emerald-500/20' }
    },
    purple: {
        light: { iconBg: 'bg-purple-500/5', iconText: 'text-purple-600', border: 'border-purple-500/10', glow: 'shadow-purple-500/10' },
        dark: { iconBg: 'bg-purple-500/10', iconText: 'text-purple-400', border: 'border-purple-500/20', glow: 'shadow-purple-500/20' }
    },
    pink: {
        light: { iconBg: 'bg-pink-500/5', iconText: 'text-pink-600', border: 'border-pink-500/10', glow: 'shadow-pink-500/10' },
        dark: { iconBg: 'bg-pink-500/10', iconText: 'text-pink-400', border: 'border-pink-500/20', glow: 'shadow-pink-500/20' }
    },
    slate: {
        light: { iconBg: 'bg-slate-500/5', iconText: 'text-slate-600', border: 'border-slate-500/10', glow: 'shadow-slate-500/10' },
        dark: { iconBg: 'bg-slate-500/10', iconText: 'text-slate-400', border: 'border-slate-500/20', glow: 'shadow-slate-500/20' }
    },
};

const services = [
    {
        icon: BookOpen,
        title: "Career Counselling",
        slug: "career-counselling-psychometric-assessments",
        desc: "Unlock your true potential with scientifically-backed psychometric assessments and personalized mentorship to map your perfect career trajectory.",
        color: 'blue' as keyof typeof serviceColors,
        image: careerCounsellingImg
    },
    {
        icon: Globe,
        title: "Study Abroad",
        slug: "university-admissions-study-abroad",
        desc: "Expert end-to-end guidance for global university admissions. From selecting the right Ivy League to visa approvals, we make your global dreams a reality.",
        color: 'orange' as keyof typeof serviceColors,
        image: studyAbroadImg
    },
    {
        icon: GraduationCap,
        title: "Academic Support",
        slug: "academic-support-online-tutoring",
        desc: "Achieve academic excellence with tailored 1-on-1 tutoring. We identify learning gaps and design custom strategies to boost grades and subject mastery.",
        color: 'emerald' as keyof typeof serviceColors,
        image: academicSupportImg
    },
    {
        icon: BarChart,
        title: "Profile Building & IELTS Prep",
        slug: "competitive-exam-language-preparation",
        desc: "Craft a standout profile for top-tier universities and master the IELTS. We combine strategic profile enhancement with rigorous exam prep to maximize your scholarship chances.",
        color: 'purple' as keyof typeof serviceColors,
        image: testPrepImg
    },
    {
        icon: Users,
        title: "School Partnerships",
        slug: "school-college-partnerships",
        desc: "Collaborate with us to implement comprehensive career guidance programs. We offer train-the-trainer modules, student workshops, and university fair organization to elevate your institution's offering.",
        color: 'pink' as keyof typeof serviceColors,
        image: schoolPartnershipsImg
    },
    {
        icon: Building,
        title: "Career Labs",
        slug: "career-lab-setup",
        desc: "Establish dedicated, high-tech career guidance centers within your school. We provide the infrastructure, resources, and curriculum to help students innovate and explore future career paths.",
        color: 'slate' as keyof typeof serviceColors,
        image: careerLabsImg
    },
];

const ServicesGrid = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Fallback image in case any service image fails to load
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop";
    };

    return (
        <section className={`py-16 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'} 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Very subtle accent glow */}
            <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] ${isDark ? 'bg-white/[0.02]' : 'bg-gray-200/30'} rounded-full blur-[120px]`}></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <motion.span
                        className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase mb-8
                            ${isDark ? 'border-brand-orange/20 text-brand-orange bg-brand-orange/5' : 'border-brand-orange/10 text-brand-orange bg-white shadow-sm'}`}
                    >
                        Our Services
                    </motion.span>

                    <h2 className={`text-5xl md:text-7xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        How We <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic font-light">
                            Can Help.
                        </span>
                    </h2>

                    <p className={`text-xl font-light max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                        Complete guidance for every step of your education journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                        >
                            <Link to={`/services/${service.slug}`} className="group h-full block">
                                <TiltCard
                                    className={`
                                        h-full rounded-[3rem] overflow-hidden backdrop-blur-xl transition-all duration-700 border
                                        ${isDark
                                            ? `bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 shadow-2xl shadow-black/50`
                                            : `bg-white/80 border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]`
                                        }
                                    `}
                                    tiltIntensity={5}
                                    glareOpacity={isDark ? 0.1 : 0.05}
                                >
                                    <div className="flex flex-col h-full">
                                        {/* Image Section */}
                                        <div className="relative h-64 overflow-hidden rounded-t-[3rem]">
                                            <motion.img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                onError={handleImageError}
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-zinc-950 via-zinc-950/20' : 'from-zinc-900/40'} to-transparent`} />

                                            {/* Icon Overlay */}
                                            <div className={`absolute bottom-6 left-8 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-2xl border transition-transform duration-500 group-hover:scale-110
                                                ${isDark ? 'bg-black/40 border-white/10 text-white' : 'bg-white/80 border-white text-zinc-900 shadow-xl'}`}>
                                                <service.icon size={32} />
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-10 flex-grow flex flex-col">
                                            <h3 className={`text-2xl font-serif font-bold mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                                {service.title}
                                            </h3>

                                            <p className={`text-lg font-light leading-relaxed mb-8 flex-grow transition-colors duration-500 ${isDark ? 'text-zinc-400' : 'text-zinc-500 font-medium'}`}>
                                                {service.desc}
                                            </p>

                                            <div className={`
                                                flex items-center gap-3 text-[10px] font-black tracking-[0.2em] uppercase
                                                ${isDark ? 'text-brand-orange' : 'text-brand-orange'}
                                                transition-all duration-300
                                            `}>
                                                Explore Service <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                        <Link
                            to="/services"
                            className={`group inline-flex items-center gap-4 px-12 py-6 rounded-full font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-300
                                ${isDark
                                    ? 'bg-white text-zinc-950 hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]'
                                    : 'bg-zinc-900 text-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]'}`}
                        >
                            Explore All Services <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
};

export default ServicesGrid;
