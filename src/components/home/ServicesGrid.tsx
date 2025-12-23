import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, GraduationCap, Users, Building, BarChart } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import SpotlightCard from '../ui/SpotlightCard';
import AnimatedGradientText from '../ui/AnimatedGradientText';

// Color themes for each service
const serviceColors = {
    blue: {
        light: { iconBg: 'bg-blue-100', iconText: 'text-blue-600', border: 'hover:border-blue-400', glow: 'hover:shadow-blue-500/20' },
        dark: { iconBg: 'bg-blue-500/10', iconText: 'text-blue-400', border: 'hover:border-blue-500/50', glow: 'hover:shadow-blue-500/10' }
    },
    orange: {
        light: { iconBg: 'bg-orange-100', iconText: 'text-orange-600', border: 'hover:border-orange-400', glow: 'hover:shadow-orange-500/20' },
        dark: { iconBg: 'bg-orange-500/10', iconText: 'text-orange-400', border: 'hover:border-orange-500/50', glow: 'hover:shadow-orange-500/10' }
    },
    emerald: {
        light: { iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', border: 'hover:border-emerald-400', glow: 'hover:shadow-emerald-500/20' },
        dark: { iconBg: 'bg-emerald-500/10', iconText: 'text-emerald-400', border: 'hover:border-emerald-500/50', glow: 'hover:shadow-emerald-500/10' }
    },
    purple: {
        light: { iconBg: 'bg-purple-100', iconText: 'text-purple-600', border: 'hover:border-purple-400', glow: 'hover:shadow-purple-500/20' },
        dark: { iconBg: 'bg-purple-500/10', iconText: 'text-purple-400', border: 'hover:border-purple-500/50', glow: 'hover:shadow-purple-500/10' }
    },
    pink: {
        light: { iconBg: 'bg-pink-100', iconText: 'text-pink-600', border: 'hover:border-pink-400', glow: 'hover:shadow-pink-500/20' },
        dark: { iconBg: 'bg-pink-500/10', iconText: 'text-pink-400', border: 'hover:border-pink-500/50', glow: 'hover:shadow-pink-500/10' }
    },
    slate: {
        light: { iconBg: 'bg-slate-100', iconText: 'text-slate-600', border: 'hover:border-slate-400', glow: 'hover:shadow-slate-500/20' },
        dark: { iconBg: 'bg-slate-500/10', iconText: 'text-slate-400', border: 'hover:border-slate-500/50', glow: 'hover:shadow-slate-500/10' }
    },
};

const services = [
    {
        icon: BookOpen,
        title: "Career Counselling",
        slug: "career-counselling-psychometric-assessments",
        desc: "Scientific psychometric assessments & personalized career roadmaps for students.",
        color: 'blue' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80"
    },
    {
        icon: Globe,
        title: "Study Abroad",
        slug: "university-admissions-study-abroad",
        desc: "End-to-end admission guidance for top global universities worldwide.",
        color: 'orange' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop&q=80"
    },
    {
        icon: GraduationCap,
        title: "Academic Support",
        slug: "academic-support-online-tutoring",
        desc: "Expert tutoring for IB, IGCSE, CBSE & international curricula.",
        color: 'emerald' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop&q=80"
    },
    {
        icon: BarChart,
        title: "Competitive Exams",
        slug: "competitive-exam-language-preparation",
        desc: "IELTS, NEET, JEE & language proficiency preparation.",
        color: 'purple' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop&q=80"
    },
    {
        icon: Users,
        title: "School Partnerships",
        slug: "school-college-partnerships",
        desc: "Comprehensive career guidance curricula for institutions.",
        color: 'pink' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=250&fit=crop&q=80"
    },
    {
        icon: Building,
        title: "Career Labs",
        slug: "career-lab-setup",
        desc: "In-house career infrastructure setup for schools.",
        color: 'slate' as keyof typeof serviceColors,
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop&q=80"
    },
];

const ServicesGrid = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-16 lg:py-20 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950' : 'bg-gray-50'}`}>
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

            {/* Very subtle accent glow - reduced orange */}
            <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] ${isDark ? 'bg-white/[0.02]' : 'bg-gray-200/30'} rounded-full blur-[120px]`}></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                        >
                            <Link to={`/services/${service.slug}`} className="block h-full group">
                                <SpotlightCard
                                    className={`
                                        h-full min-h-[380px] rounded-2xl backdrop-blur-md overflow-hidden
                                        ${isDark
                                            ? 'bg-zinc-900/50 border border-white/[0.06]'
                                            : 'bg-white/90 border border-white/20 shadow-[0_8px_30px_rgba(249,115,22,0.08)] hover:border-brand-orange/40'
                                        }
                                    `}
                                    spotlightColor={isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'}
                                >
                                    {/* Service Image at Top */}
                                    <div className="relative h-40 overflow-hidden rounded-t-2xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className={`absolute inset-0 ${isDark
                                            ? 'bg-gradient-to-t from-zinc-900 via-transparent to-transparent'
                                            : 'bg-gradient-to-t from-white via-transparent to-transparent'
                                            }`} />
                                    </div>

                                    <div className="relative z-10 p-6 h-full flex flex-col">
                                        {/* Icon with unique color per service */}
                                        <div className={`
                                            w-12 h-12 rounded-xl flex items-center justify-center mb-4
                                            transition-all duration-500 shadow-lg -mt-10 relative z-20
                                            ${isDark
                                                ? `${serviceColors[service.color].dark.iconBg} group-hover:shadow-xl border border-white/10`
                                                : `${serviceColors[service.color].light.iconBg} group-hover:shadow-xl border border-white`
                                            }
                                        `}>
                                            <service.icon
                                                size={22}
                                                className={`transition-all duration-300 ${isDark
                                                    ? serviceColors[service.color].dark.iconText
                                                    : serviceColors[service.color].light.iconText
                                                    }`}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className={`
                                            text-xl font-bold mb-3 
                                            transition-colors duration-300
                                            ${isDark ? 'text-white' : 'text-gray-900'}
                                        `}>
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className={`
                                            text-sm leading-relaxed mb-6 flex-grow
                                            ${isDark ? 'text-white/40' : 'text-gray-500'}
                                        `}>
                                            {service.desc}
                                        </p>

                                        {/* CTA - Subtle arrow animation */}
                                        <div className={`
                                            flex items-center gap-2 text-sm font-medium 
                                            transition-all duration-300
                                            ${isDark
                                                ? 'text-white/30 group-hover:text-white/70'
                                                : 'text-gray-400 group-hover:text-gray-700'
                                            }
                                        `}>
                                            <span>Learn more</span>
                                            <ArrowRight
                                                size={14}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </div>

                                        {/* Bottom accent line - appears on hover */}
                                        <div className={`
                                            absolute bottom-0 left-8 right-8 h-px
                                            bg-gradient-to-r from-transparent via-current to-transparent
                                            opacity-0 group-hover:opacity-20
                                            transition-opacity duration-500
                                            ${isDark ? 'text-white' : 'text-gray-900'}
                                        `}></div>
                                    </div>
                                </SpotlightCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button - Minimal design */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        to="/services"
                        className={`
                            inline-flex items-center gap-3 
                            px-8 py-4 rounded-full 
                            font-medium text-sm
                            transition-all duration-300
                            border
                            ${isDark
                                ? 'border-white/20 text-white hover:bg-white hover:text-black'
                                : 'border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white'
                            }
                        `}
                    >
                        View All Services
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section >
    );
};

export default ServicesGrid;
