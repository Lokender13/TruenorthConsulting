import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, GraduationCap, Users, Building, BarChart } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import TiltCard from '../ui/TiltCard';
import AnimatedGradientText from '../ui/AnimatedGradientText';

// Color themes for each service
const serviceColors = {
    blue: {
        light: { iconBg: 'bg-blue-100', iconText: 'text-blue-600', border: 'border-blue-200', glow: 'group-hover:shadow-blue-500/20' },
        dark: { iconBg: 'bg-blue-500/10', iconText: 'text-blue-400', border: 'border-blue-500/20', glow: 'group-hover:shadow-blue-500/10' }
    },
    orange: {
        light: { iconBg: 'bg-orange-100', iconText: 'text-orange-600', border: 'border-orange-200', glow: 'group-hover:shadow-orange-500/20' },
        dark: { iconBg: 'bg-orange-500/10', iconText: 'text-orange-400', border: 'border-orange-500/20', glow: 'group-hover:shadow-orange-500/10' }
    },
    emerald: {
        light: { iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', border: 'border-emerald-200', glow: 'group-hover:shadow-emerald-500/20' },
        dark: { iconBg: 'bg-emerald-500/10', iconText: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'group-hover:shadow-emerald-500/10' }
    },
    purple: {
        light: { iconBg: 'bg-purple-100', iconText: 'text-purple-600', border: 'border-purple-200', glow: 'group-hover:shadow-purple-500/20' },
        dark: { iconBg: 'bg-purple-500/10', iconText: 'text-purple-400', border: 'border-purple-500/20', glow: 'group-hover:shadow-purple-500/10' }
    },
    pink: {
        light: { iconBg: 'bg-pink-100', iconText: 'text-pink-600', border: 'border-pink-200', glow: 'group-hover:shadow-pink-500/20' },
        dark: { iconBg: 'bg-pink-500/10', iconText: 'text-pink-400', border: 'border-pink-500/20', glow: 'group-hover:shadow-pink-500/10' }
    },
    slate: {
        light: { iconBg: 'bg-slate-100', iconText: 'text-slate-600', border: 'border-slate-200', glow: 'group-hover:shadow-slate-500/20' },
        dark: { iconBg: 'bg-slate-500/10', iconText: 'text-slate-400', border: 'border-slate-500/20', glow: 'group-hover:shadow-slate-500/10' }
    },
};

const services = [
    {
        icon: BookOpen,
        title: "Career Counselling",
        slug: "career-counselling-psychometric-assessments",
        desc: "Scientific psychometric assessments & personalized career roadmaps for students.",
        color: 'blue' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: Globe,
        title: "Study Abroad",
        slug: "university-admissions-study-abroad",
        desc: "End-to-end admission guidance for top global universities worldwide.",
        color: 'orange' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: GraduationCap,
        title: "Academic Support",
        slug: "academic-support-online-tutoring",
        desc: "Expert tutoring for IB, IGCSE, CBSE & international curricula.",
        color: 'emerald' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: BarChart,
        title: "Competitive Exams",
        slug: "competitive-exam-language-preparation",
        desc: "IELTS, NEET, JEE & language proficiency preparation.",
        color: 'purple' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: Users,
        title: "School Partnerships",
        slug: "school-college-partnerships",
        desc: "Comprehensive career guidance curricula for institutions.",
        color: 'pink' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: Building,
        title: "Career Labs",
        slug: "career-lab-setup",
        desc: "In-house career infrastructure setup for schools.",
        color: 'slate' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
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
        <section className={`py-10 lg:py-16 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950' : 'bg-gray-50'}`}>
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
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-2 rounded-full border ${isDark
                            ? 'border-white/10 text-white/60'
                            : 'border-brand-orange/30 text-brand-orange'
                            }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        Our Services
                    </motion.span>

                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        What We <AnimatedGradientText
                            colors={isDark
                                ? ['#ffffff', '#a0a0a0', '#ffffff', '#606060', '#ffffff']
                                : ['#1f2937', '#F97316', '#1f2937', '#1E6FEB', '#1f2937']
                            }
                        >Offer</AnimatedGradientText>
                    </h2>

                    <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                        Comprehensive education solutions tailored for every stage of your journey.
                    </p>
                </motion.div>

                {/* Premium Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                        >
                            <Link to={`/services/${service.slug}`} className="block h-full group perspective-card">
                                <TiltCard
                                    className={`
                                        h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500
                                        ${isDark
                                            ? `bg-zinc-900/40 border-white/10 hover:bg-zinc-900/60 ${serviceColors[service.color].dark.border}`
                                            : `bg-white/70 border-white/40 shadow-xl hover:shadow-2xl hover:bg-white/90 ${serviceColors[service.color].light.border}`
                                        }
                                        border group-hover:border-opacity-100 border-opacity-50
                                    `}
                                    tiltIntensity={10}
                                    glareOpacity={isDark ? 0.1 : 0.2}
                                >
                                    <div className="flex flex-col h-full">
                                        {/* Image Section */}
                                        <div className="relative h-64 overflow-hidden rounded-t-3xl">
                                            <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                            <motion.img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.7 }}
                                                onError={handleImageError}
                                            />
                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 z-20 ${isDark
                                                ? 'bg-gradient-to-t from-zinc-900 via-transparent to-transparent'
                                                : 'bg-gradient-to-t from-white via-transparent to-transparent'
                                                }`} />

                                            {/* Floating Icon */}
                                            <div className={`
                                                absolute bottom-4 left-6 z-30
                                                w-14 h-14 rounded-2xl flex items-center justify-center
                                                backdrop-blur-md shadow-lg border
                                                ${isDark
                                                    ? `bg-zinc-900/80 ${serviceColors[service.color].dark.iconText} border-white/10`
                                                    : `bg-white/90 ${serviceColors[service.color].light.iconText} border-white/40`
                                                }
                                            `}>
                                                <service.icon size={26} strokeWidth={2} />
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-8 pt-6 flex-grow flex flex-col relative z-20">
                                            <h3 className={`text-2xl font-serif font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                                {service.title}
                                            </h3>

                                            <p className={`text-base leading-relaxed mb-6 flex-grow ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                                                {service.desc}
                                            </p>

                                            <div className={`
                                                flex items-center gap-2 text-sm font-semibold tracking-wide uppercase
                                                ${isDark ? 'text-white/30 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-900'}
                                                transition-colors duration-300
                                            `}>
                                                View Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/services"
                        className={`
                            relative inline-flex items-center gap-3 
                            px-8 py-4 rounded-full 
                            font-medium text-sm tracking-wide uppercase
                            transition-all duration-300
                            overflow-hidden group
                            ${isDark
                                ? 'bg-white text-black hover:bg-gray-100'
                                : 'bg-zinc-900 text-white hover:bg-zinc-800'
                            }
                        `}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore All Services <ArrowRight size={16} />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section >
    );
};

export default ServicesGrid;
