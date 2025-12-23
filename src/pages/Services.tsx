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
import SpotlightCard from '../components/ui/SpotlightCard';
import FloatingOrbs from '../components/ui/FloatingOrbs';
import TextReveal from '../components/ui/TextReveal';

const services = [
    {
        title: "Career Counselling",
        description: "Scientific psychometric assessments and personalized career guidance.",
        icon: Target,
        path: "/services/career-counselling-psychometric-assessments"
    },
    {
        title: "Study Abroad",
        description: "University admissions and global education opportunities.",
        icon: Globe,
        path: "/services/university-admissions-study-abroad"
    },
    {
        title: "Academic Support",
        description: "Online tutoring for IB, IGCSE, CBSE and more.",
        icon: BookOpen,
        path: "/services/academic-support-online-tutoring"
    },
    {
        title: "Competitive Exams",
        description: "Preparation for entrance exams and language tests.",
        icon: GraduationCap,
        path: "/services/competitive-exam-language-preparation"
    },
    {
        title: "School Partnerships",
        description: "Institutional career guidance programs.",
        icon: Building2,
        path: "/services/school-college-partnerships"
    },
    {
        title: "Career Labs",
        description: "Technology-enabled career discovery centers.",
        icon: Laptop,
        path: "/services/career-lab-setup"
    }
];

const Services = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

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
        <div className={`min-h-screen theme-transition ${isDark ? 'bg-black' : 'bg-white'}`}>
            <SEO
                title="Our Services - Career Counselling, Study Abroad & Academic Support"
                description="Explore TrueNorth's comprehensive services: career counselling, psychometric assessments, study abroad guidance, university admissions, IB/CBSE/IGCSE tutoring, IELTS/SAT preparation, and school partnerships in Dubai, UAE."
                keywords="career counselling services, study abroad Dubai, university admissions UAE, IB tutoring, CBSE support, IGCSE tutoring, IELTS preparation, SAT preparation, psychometric assessment, school partnerships, career lab setup"
                canonical="/services"
                schema={servicesSchema}
            />

            {/* Hero */}
            <section className={`relative pt-40 pb-24 px-4 overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
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
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                        <TextReveal>Our Services</TextReveal>
                    </h1>
                    <p className={`text-xl max-w-2xl mx-auto ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                        Comprehensive solutions for every stage of your educational journey.
                    </p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className={`py-16 relative ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-gray-200'} to-transparent`}></div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.path}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, type: 'spring', stiffness: 100 }}
                            >
                                <Link to={service.path}>
                                    <SpotlightCard
                                        className={`
                                            h-full p-8 rounded-2xl group cursor-pointer
                                            ${isDark
                                                ? 'bg-zinc-900/50 border border-white/[0.06]'
                                                : 'bg-gray-50 border border-gray-100'
                                            }
                                        `}
                                        spotlightColor={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.03)'}
                                    >
                                        <div className="relative z-10">
                                            <motion.div
                                                className={`
                                                    w-14 h-14 rounded-xl flex items-center justify-center mb-6
                                                    transition-all duration-300
                                                    ${isDark
                                                        ? 'bg-white/[0.05] group-hover:bg-white/[0.1]'
                                                        : 'bg-white group-hover:bg-gray-100 shadow-sm'
                                                    }
                                                `}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                <service.icon
                                                    size={28}
                                                    className={`
                                                        transition-colors duration-300
                                                        ${isDark
                                                            ? 'text-white/60 group-hover:text-white'
                                                            : 'text-gray-500 group-hover:text-gray-900'
                                                        }
                                                    `}
                                                />
                                            </motion.div>

                                            <h3 className={`text-xl font-bold mb-3 transition-colors ${isDark ? 'text-white' : 'text-gray-900'
                                                }`}>
                                                {service.title}
                                            </h3>

                                            <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-500'
                                                }`}>
                                                {service.description}
                                            </p>

                                            <div className={`
                                                flex items-center gap-2 text-sm font-medium
                                                transition-all duration-300
                                                ${isDark
                                                    ? 'text-white/40 group-hover:text-white'
                                                    : 'text-gray-400 group-hover:text-gray-900'
                                                }
                                            `}>
                                                Learn More
                                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`py-24 text-center relative ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
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
