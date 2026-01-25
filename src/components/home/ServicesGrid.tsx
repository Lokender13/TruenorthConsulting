import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, GraduationCap, Users, Building, BarChart } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';


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
        slug: "career-counselling-dubai",
        desc: "Unlock your true potential with scientifically-backed psychometric assessments and personalized mentorship to map your perfect career trajectory.",
        color: 'blue' as keyof typeof serviceColors,
        image: careerCounsellingImg
    },
    {
        icon: Globe,
        title: "Study Abroad",
        slug: "study-abroad-consultants-dubai",
        desc: "Expert end-to-end guidance for global university admissions. From selecting the right Ivy League to visa approvals, we make your global dreams a reality.",
        color: 'orange' as keyof typeof serviceColors,
        image: studyAbroadImg
    },
    {
        icon: GraduationCap,
        title: "Academic Support & Online Tutoring",
        slug: "online-tutoring-academic-support",
        desc: "Achieve academic excellence with tailored 1-on-1 tutoring. We identify learning gaps and design custom strategies to boost grades and subject mastery.",
        color: 'emerald' as keyof typeof serviceColors,
        image: academicSupportImg
    },
    {
        icon: BarChart,
        title: "Career Booster & Profile Building",
        slug: "profile-building-career-booster",
        desc: "Craft a standout profile for top-tier universities. We focus on strategic profile enhancement, research, and internships to maximize your scholarship chances.",
        color: 'purple' as keyof typeof serviceColors,
        image: testPrepImg
    },
    {
        icon: Users,
        title: "School & College Partnerships",
        slug: "school-career-guidance-programs",
        desc: "Collaborate with us to implement comprehensive career guidance programs. We offer train-the-trainer modules, student workshops, and university fair organization to elevate your institution's offering.",
        color: 'pink' as keyof typeof serviceColors,
        image: schoolPartnershipsImg
    },
    {
        icon: Building,
        title: "Career Labs",
        slug: "career-lab-setup-schools",
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
        <section className={`py-24 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
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

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <motion.span
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] font-bold tracking-[0.2em] uppercase mb-6
                            ${isDark ? 'border-brand-orange/20 text-brand-orange bg-brand-orange/5' : 'border-brand-orange/10 text-brand-orange bg-white shadow-sm'}`}
                    >
                        Our Services
                    </motion.span>

                    <h2 className={`text-4xl md:text-5xl font-serif font-medium mb-6 tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue italic">Can Help.</span>
                    </h2>

                    <p className={`text-lg font-light max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Whether you're a student feeling unsure about subjects or careers, a parent seeking clarity and direction, or an institution supporting learners at key decision points—we're here to help. Through personalised career counselling, psychometric assessments, profile building, and study abroad guidance, we support confident, well-informed academic and career choices.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                        >
                            <Link to={`/services/${service.slug}`} className="group h-full block">
                                <div
                                    className={`
                                        h-full rounded-3xl overflow-hidden transition-all duration-500 border
                                        ${isDark
                                            ? `bg-zinc-950 border-white/20 shadow-lg shadow-black/50 hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/10`
                                            : `bg-white border-zinc-200 shadow-md hover:border-zinc-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]`
                                        }
                                    `}
                                >
                                    <div className="flex flex-col h-full">
                                        {/* Image Section */}
                                        <div className="relative h-60 overflow-hidden">
                                            <motion.img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                onError={handleImageError}
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-zinc-950 via-transparent' : 'from-white via-transparent'} to-transparent opacity-60`} />

                                            {/* Icon Overlay */}
                                            <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md border transition-transform duration-500
                                                ${isDark ? 'bg-black/40 border-white/10 text-white' : 'bg-white/90 border-white text-zinc-900 shadow-lg'}`}>
                                                <service.icon size={22} />
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-8 flex-grow flex flex-col">
                                            <h3 className={`text-xl font-serif font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                                {service.title}
                                            </h3>

                                            <p className={`text-base font-light leading-relaxed mb-6 flex-grow ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                                {service.desc}
                                            </p>

                                            <div className={`
                                                flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase
                                                ${isDark ? 'text-brand-orange' : 'text-brand-orange'}
                                                transition-all duration-300
                                            `}>
                                                Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/services"
                        className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-300
                            ${isDark
                                ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                                : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
                    >
                        View All Services <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section >
    );
};

export default ServicesGrid;

