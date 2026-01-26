import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    GraduationCap,
    Globe,
    BookOpen,
    Target,
    Building2,
    Laptop,
    ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';

import TiltCard from '../components/ui/TiltCard';
import FloatingOrbs from '../components/ui/FloatingOrbs';
import TextReveal from '../components/ui/TextReveal';

const services = [
    {
        title: "Career Counselling",
        description: "Scientific psychometric assessments & personalized career roadmaps for students.",
        icon: Target,
        path: "/services/career-counselling-dubai",
        color: 'blue' as const,
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=75&w=800&fm=webp&auto=format&fit=crop"
    },
    {
        title: "Study Abroad",
        description: "End-to-end admission guidance for top global universities worldwide.",
        icon: Globe,
        path: "/services/study-abroad-consultants-dubai",
        color: 'orange' as const,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=75&w=800&fm=webp&auto=format&fit=crop"
    },
    {
        title: "Academic Support",
        description: "Expert tutoring for IB, IGCSE, CBSE & international curricula.",
        icon: BookOpen,
        path: "/services/online-tutoring-academic-support",
        color: 'emerald' as const,
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=75&w=800&fm=webp&auto=format&fit=crop"
    },
    {
        title: "Competitive Exams",
        description: "IELTS, NEET, JEE & language proficiency preparation.",
        icon: GraduationCap,
        path: "/services/profile-building-career-booster",
        color: 'purple' as const,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=75&w=800&fm=webp&auto=format&fit=crop"
    },
    {
        title: "School Partnerships",
        description: "Comprehensive career guidance curricula for institutions.",
        icon: Building2,
        path: "/services/school-career-guidance-programs",
        color: 'pink' as const,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=75&w=800&fm=webp&auto=format&fit=crop"
    },
    {
        title: "Career Labs",
        description: "In-house career infrastructure setup for schools.",
        icon: Laptop,
        path: "/services/career-lab-setup-schools",
        color: 'slate' as const,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=800&fm=webp&auto=format&fit=crop"
    },
    {
        title: "Digital Solutions",
        description: "Web development & digital marketing for education brands.",
        icon: Laptop,
        path: "/services/education-digital-marketing",
        color: 'cyan' as const,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=800&fm=webp&auto=format&fit=crop"
    }
];

// Color themes for each service (Make sure to match keys with services data)
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
    cyan: {
        light: { iconBg: 'bg-cyan-100', iconText: 'text-cyan-600', border: 'border-cyan-200', glow: 'group-hover:shadow-cyan-500/20' },
        dark: { iconBg: 'bg-cyan-500/10', iconText: 'text-cyan-400', border: 'border-cyan-500/20', glow: 'group-hover:shadow-cyan-500/10' }
    },
};

const Services = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Fallback image in case any service image fails to load
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop";
    };

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "TrueNorth Consulting Services",
        "description": "Comprehensive career counselling and education consultancy services",
        "numberOfItems": 6,
        "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "url": `https://www.truenorthae.com${service.path}`
            }
        }))
    };

    return (
        <div className={`min-h-screen theme-transition ${isDark ? 'bg-black' : 'bg-zinc-100'}`}>
            <SEO
                title="Our Services | Best Career Counselling & Education Consultants in Dubai"
                description="Explore TrueNorth's comprehensive services: career counselling in Dubai, study abroad consultants, IB/CBSE tutoring, and school guidance programs in UAE."
                keywords="career counselling services dubai, study abroad consultants uae, university admissions uae, ib tutoring dubai, school partnerships dubai, career lab setup"
                canonical="/services"
                schema={servicesSchema}
            />

            {/* Hero */}
            <section className={`relative pt-32 pb-16 px-4 overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-zinc-100 text-gray-900'}`}>
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=75&w=1200&fm=webp"
                        alt="Services"
                        width="1200"
                        height="600"
                        className={`w-full h-full object-cover transition-opacity duration-1000 ${isDark ? 'opacity-[0.1]' : 'opacity-[0.05]'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-${isDark ? 'black' : 'zinc-100'} via-transparent to-transparent`}></div>
                </div>

                {/* FloatingOrbs */}
                <FloatingOrbs orbs={isDark ? [
                    { size: 400, x: '5%', y: '15%', color: 'rgba(255,255,255,0.025)', delay: 0, duration: 18 },
                    { size: 300, x: '85%', y: '50%', color: 'rgba(255,255,255,0.02)', delay: 2, duration: 14 },
                    { size: 350, x: '40%', y: '75%', color: 'rgba(255,255,255,0.015)', delay: 1, duration: 20 },
                ] : [
                    { size: 400, x: '5%', y: '15%', color: 'rgba(0,0,0,0.02)', delay: 0, duration: 18 },
                    { size: 300, x: '85%', y: '50%', color: 'rgba(0,0,0,0.015)', delay: 2, duration: 14 },
                ]} />

                {/* Pattern */}
                <div className="absolute inset-0">
                    <div
                        className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'} 1px, transparent 0)`,
                            backgroundSize: '32px 32px'
                        }}
                    />
                </div>

                <motion.div
                    className="max-w-7xl mx-auto text-center relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-2 rounded-full border ${isDark ? 'border-white/10 text-white/50' : 'border-gray-200 text-gray-400'
                        }`}>
                        What We Offer
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                        <TextReveal>Our Services</TextReveal>
                    </h1>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className={`text-xl md:text-2xl font-medium leading-relaxed ${isDark ? 'text-white/90' : 'text-gray-800'}`}>
                            Structured guidance for students, families, professionals, and educational institutions navigating education and career decisions
                        </p>
                        <p className={`text-lg leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                            At <span className="font-semibold text-primary">TrueNorth Consulting</span>, we provide expert-led, personalised guidance across key education and career stages. Our approach integrates psychometric insights, academic planning, and admissions expertise to support informed, ethical, and future-ready decisions.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className={`py-12 relative ${isDark ? 'bg-zinc-950' : 'bg-zinc-100'}`}>
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-gray-200'} to-transparent`}></div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.path}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                            >
                                <Link to={service.path} className="block h-full group perspective-card">
                                    <TiltCard
                                        className={`
                                            h-full rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500
                                            ${isDark
                                                ? `bg-zinc-950 border-white/10 hover:border-white/20 ${serviceColors[service.color].dark.border}`
                                                : `bg-white border-zinc-100 shadow-xl hover:shadow-2xl hover:border-zinc-200 ${serviceColors[service.color].light.border}`
                                            }
                                            border group-hover:border-opacity-100 border-opacity-50
                                        `}
                                        tiltIntensity={10}
                                        glareOpacity={isDark ? 0.1 : 0.2}
                                    >
                                        <div className="flex flex-col h-full">
                                            {/* Image Section */}
                                            <div className="relative h-64 overflow-hidden rounded-t-3xl">
                                                <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                                <motion.img
                                                    src={service.image}
                                                    alt={service.title}
                                                    width="800"
                                                    height="600"
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.7 }}
                                                    onError={handleImageError}
                                                />
                                                {/* Gradient Overlay */}
                                                <div className={`absolute inset-0 z-20 ${isDark
                                                    ? 'bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent'
                                                    : 'bg-gradient-to-t from-white/50 via-transparent to-transparent'
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
                                                    {service.description}
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
                </div>
            </section>

            {/* CTA */}
            <section className={`py-16 text-center relative ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-gray-200'} to-transparent`}></div>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Not Sure Where to <span className={isDark ? 'text-white/50' : 'text-gray-400'}>Start?</span>
                    </h2>
                    <p className={`text-lg mb-10 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                        Book a free consultation and let our experts guide you to the right path.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                            to="/contact"
                            className={`
                                inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold
                                transition-all duration-300
                                ${isDark
                                    ? 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]'
                                    : 'bg-gray-900 text-white hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]'
                                }
                            `}
                        >
                            Contact Us <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
