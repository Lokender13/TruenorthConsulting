import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, ArrowRight, BookOpen, GraduationCap, Globe, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';
import SpotlightCard from '../components/ui/SpotlightCard';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const About = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Credentials and achievements
    const credentials = [
        "Global Teacher Accreditation Award – British Council & UCL",
        "Certified Career Counselor with International Certifications",
        "IB Educator with 10+ Years Experience",
        "Led Learning Enrichment Program (LEAP) at IB World School",
        "Trained in Harvard's Project Zero & de Bono's CoRT Tools",
    ];

    const courses = [
        { title: "Student Thinking at the Core", institution: "Vanderbilt University" },
        { title: "Critical Thinking in Global Challenges", institution: "University of Edinburgh" },
        { title: "Creative Problem Solving", institution: "University of Minnesota" },
    ];

    return (
        <div className={`min-h-screen theme-transition ${isDark ? 'bg-black' : 'bg-white'}`}>
            <SEO
                title="About TrueNorth Consulting | Career Counselling & Education Consultancy in Dubai"
                description="TrueNorth Consulting, founded by Surabhi Rawat, is a premier career counselling and education consultancy based in Dubai, UAE. We help students navigate academic pathways from CBSE to IB, British, and American curricula."
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "TrueNorth Consulting",
                    "founder": {
                        "@type": "Person",
                        "name": "Surabhi Rawat",
                        "jobTitle": "Founder & Career Counselor"
                    },
                    "description": "Premier career counselling and education consultancy",
                    "url": "https://www.truenorthae.com",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Dubai",
                        "addressCountry": "UAE"
                    }
                }}
            />

            {/* Hero Section */}
            <section className={`relative pt-32 pb-16 px-4 overflow-hidden ${isDark ? 'bg-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
                {/* Background design */}
                <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-2 rounded-full border ${isDark ? 'border-white/10 text-white/50' : 'border-orange-200 text-orange-600 bg-orange-50'}`}>
                            About TrueNorth
                        </span>
                        <h1 className={`text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Empowering Students to Find Their
                            <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"> True North</span>
                        </h1>
                    </div>
                </motion.div>
            </section>

            {/* Our Story Section */}
            <section className={`py-16 px-4 ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Story Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-500 mb-4 block">Our Story</span>
                            <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Founded with Purpose
                            </h2>
                            <div className={`space-y-4 text-base leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                <p>
                                    <strong className={isDark ? 'text-white' : 'text-gray-900'}>TrueNorth Consulting</strong> was founded by <strong className="text-orange-500">Surabhi Rawat</strong>, an experienced educator and certified career counselor, driven by a deep understanding of the challenges students and parents face today.
                                </p>
                                <p>
                                    She recognized how overwhelming it can be to make sense of the many available academic pathways — from <strong className={isDark ? 'text-white' : 'text-gray-900'}>CBSE to IB, British, American,</strong> and more. Whether you're part of a local curriculum or an international one, the pressure to "get it right" can be stressful.
                                </p>
                                <p>
                                    TrueNorth Consulting was established with one clear purpose — to support students and parents in making <strong className="text-orange-500">confident, well-informed academic and career decisions</strong>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&q=80"
                                    alt="Career counselling session"
                                    className="w-full h-80 object-cover"
                                />
                                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/50 to-transparent' : 'bg-gradient-to-t from-gray-900/30 to-transparent'}`}></div>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl shadow-lg">
                                <span className="text-sm font-bold">Based in Dubai, UAE</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className={`py-16 px-4 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-500 mb-4 block">What We Do</span>
                        <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Comprehensive Career & Education Guidance
                        </h2>
                        <p className={`max-w-3xl mx-auto text-lg ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
                            We are a comprehensive career counseling and educational consultancy service, dedicated to guiding students and parents through every stage of academic and career planning.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: BookOpen, title: "Personalized Guidance", desc: "Tailored advice based on each student's unique strengths and aspirations." },
                            { icon: GraduationCap, title: "All Age Groups", desc: "Services for students from middle school to college level." },
                            { icon: Globe, title: "Global Reach", desc: "Serving clients across UAE, India, and international markets." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <SpotlightCard
                                    className={`p-8 rounded-2xl h-full ${isDark ? 'bg-zinc-900/50 border border-white/10' : 'bg-white border border-gray-100 shadow-lg'}`}
                                    spotlightColor={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(249,115,22,0.05)'}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isDark ? 'bg-orange-500/10' : 'bg-orange-50'}`}>
                                        <item.icon className="text-orange-500" size={24} />
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                                    <p className={isDark ? 'text-white/50' : 'text-gray-600'}>{item.desc}</p>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className={`py-16 px-4 ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Our Mission",
                                desc: "To empower students and parents with the clarity, confidence, and direction they need to make informed decisions about their academic and career journeys."
                            },
                            {
                                icon: Lightbulb,
                                title: "Our Vision",
                                desc: "We believe every child has a unique path — their own True North. Our mission is to help them discover and navigate that path with purpose and peace of mind."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <SpotlightCard
                                    className={`p-10 rounded-3xl h-full ${isDark ? 'bg-zinc-900/50 border border-white/10' : 'bg-gradient-to-br from-orange-50 to-white border border-orange-100'}`}
                                    spotlightColor={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(249,115,22,0.08)'}
                                >
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${isDark ? 'bg-orange-500/10' : 'bg-orange-100'}`}>
                                        <item.icon className="text-orange-500" size={28} />
                                    </div>
                                    <h2 className={`text-2xl font-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h2>
                                    <p className={`leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-600'}`}>{item.desc}</p>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={`text-center mt-10 text-lg italic ${isDark ? 'text-white/40' : 'text-gray-500'}`}
                    >
                        "Above all, TrueNorth is committed to creating a <strong className="text-orange-500">safe, supportive space</strong> where students feel heard, understood, and inspired to take charge of their future."
                    </motion.p>
                </div>
            </section>

            {/* Founder Section */}
            <section className={`py-20 px-4 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-orange-500 mb-4 block">Meet The Founder</span>
                        <h2 className={`text-4xl md:text-5xl font-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Surabhi Rawat
                        </h2>
                        <p className={`text-lg mt-2 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Founder & Lead Career Counselor</p>
                    </motion.div>

                    {/* Main Founder Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* Left - Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4"
                        >
                            <div className="relative">
                                {/* Profile Image Container */}
                                <div className={`relative overflow-hidden rounded-3xl ${isDark ? 'bg-zinc-900' : 'bg-white shadow-xl'}`}>
                                    <img
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80"
                                        alt="Surabhi Rawat - Founder of TrueNorth Consulting"
                                        className="w-full h-80 lg:h-96 object-cover"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                    {/* Name badge */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="backdrop-blur-md bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                                            <p className="text-white font-bold">Surabhi Rawat</p>
                                            <p className="text-white/70 text-sm">M.Sc., B.Ed. | IB Educator</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative badge */}
                                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                    10+ Years
                                </div>
                            </div>
                        </motion.div>

                        {/* Middle - Bio Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5"
                        >
                            <div className={`h-full p-8 rounded-3xl ${isDark ? 'bg-zinc-900/50 border border-white/10' : 'bg-white border border-gray-100 shadow-lg'}`}>
                                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>About Surabhi</h3>
                                <div className={`space-y-4 text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                    <p>
                                        <strong className="text-orange-500">Surabhi Rawat</strong> is a passionate educator and career counselor with a rich and diverse background spanning over <strong className={isDark ? 'text-white' : 'text-gray-900'}>a decade of experience</strong> across educational settings in India and abroad.
                                    </p>
                                    <p>
                                        With a <strong className={isDark ? 'text-white' : 'text-gray-900'}>Master's degree in Science</strong> and a <strong className={isDark ? 'text-white' : 'text-gray-900'}>Bachelor's in Education</strong>, Surabhi has evolved from traditional teaching methodologies to adopting innovative, learner-centered approaches.
                                    </p>
                                    <p>
                                        Her most impactful professional growth took place at <strong className={isDark ? 'text-white' : 'text-gray-900'}>Fountainhead School</strong>, an IB World School in Surat, where she fully embraced the International Baccalaureate philosophy. Here, she led the <strong className="text-orange-500">Learning Enrichment Program (LEAP)</strong> — a pilot initiative aimed at fostering critical thinking, creativity, problem-solving, and logical reasoning skills.
                                    </p>
                                    <p>
                                        As an IB educator and parent navigating different educational systems across countries, Surabhi understands firsthand the complexities families face when making critical decisions about subjects, careers, courses, countries, and universities.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Credentials */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className={`h-full p-6 rounded-3xl ${isDark ? 'bg-gradient-to-br from-orange-500/10 to-zinc-900 border border-orange-500/20' : 'bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200'}`}>
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                                        <Award className="text-white" size={16} />
                                    </div>
                                    <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Awards & Credentials</h3>
                                </div>
                                <ul className="space-y-4">
                                    {credentials.map((cred, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckCircle size={12} className="text-orange-500" />
                                            </div>
                                            <span className={`text-xs leading-relaxed ${isDark ? 'text-white/80' : 'text-gray-700'}`}>{cred}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Professional Development */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-10"
                    >
                        <div className={`p-6 rounded-2xl ${isDark ? 'bg-zinc-900/50 border border-white/10' : 'bg-white border border-gray-100 shadow-lg'}`}>
                            <div className="flex items-center gap-2 mb-6">
                                <Star className="text-orange-500" size={20} />
                                <h3 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Continuous Professional Development</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {courses.map((course, i) => (
                                    <div key={i} className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gradient-to-br from-gray-50 to-white border border-gray-100'}`}>
                                        <p className={`font-semibold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{course.title}</p>
                                        <p className={`text-xs ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>{course.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={`py-16 px-4 ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: Users, num: 5000, suffix: '+', label: "Students Guided" },
                            { icon: BookOpen, num: 50, suffix: '+', label: "Schools Partnered" },
                            { icon: Award, num: 98, suffix: '%', label: "Success Rate" },
                            { icon: Globe, num: 3, suffix: '+', label: "Countries Served" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`text-center p-6 rounded-2xl ${isDark ? 'bg-zinc-900/50 border border-white/10' : 'bg-gray-50 border border-gray-100'}`}
                            >
                                <stat.icon className={`mx-auto mb-3 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} size={32} />
                                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    <AnimatedCounter target={stat.num} suffix={stat.suffix} duration={2} />
                                </div>
                                <div className={`text-xs uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-gray-500'}`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={`py-16 px-4 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Ready to Find Your <span className="text-orange-500">True North</span>?
                    </h2>
                    <p className={`text-lg mb-8 ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
                        Join thousands of students and families who found their direction with our personalized guidance.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                        >
                            Start Your Journey <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section >
        </div >
    );
};

export default About;
