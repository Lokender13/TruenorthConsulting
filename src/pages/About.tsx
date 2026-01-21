import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Award, ArrowRight, BookOpen, GraduationCap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import TiltCard from '../components/ui/TiltCard';

const About = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const credentials = [
        {
            title: "Certified by UCLA",
            issuer: "UCLA Extension",
            impact: "Career Planning Expert",
            desc: "Specialized training in university placement and career planning from UCLA Extension."
        },
        {
            title: "Expert in Student Assessments",
            issuer: "CCA / Univariety",
            impact: "Scientific Testing",
            desc: "Using scientific tests to understand your strengths and find the best fit for your future."
        },
        {
            title: "IB Education Expert",
            issuer: "International Baccalaureate",
            impact: "World-Class Teaching",
            desc: "Experience in teaching and guiding students within the International Baccalaureate (IB) system."
        },
        {
            title: "Harvard Project Zero Focus",
            issuer: "Project Zero",
            impact: "Creative Thinking",
            desc: "Trained in teaching methods that help students think deeply and creatively."
        },
        {
            title: "International Education Expert",
            issuer: "CCCIS International",
            impact: "Study Anywhere",
            desc: "Expertise in British, American, and Indian education systems to help you study anywhere."
        }
    ];

    return (
        <div className={`min-h-screen theme-transition relative overflow-hidden ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-900'}`}>
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

            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] rounded-full blur-[150px] transition-colors duration-1000
                    ${isDark ? 'bg-brand-orange/10' : 'bg-brand-orange/[0.08]'}`} />
                <div className={`absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] rounded-full blur-[150px] transition-colors duration-1000
                    ${isDark ? 'bg-brand-blue/10' : 'bg-brand-blue/[0.08]'}`} />
            </div>

            {/* Grid Pattern */}
            <div
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
                style={{
                    backgroundImage: `linear-gradient(to right, ${isDark ? 'white' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px), 
                                      linear-gradient(to bottom, ${isDark ? 'white' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex justify-center mb-8">
                            <span className={`px-5 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase border transition-colors
                                ${isDark ? 'border-white/10 text-white/60 bg-white/5' : 'border-black/5 text-zinc-500 bg-black/[0.02]'}`}>
                                Who We Are
                            </span>
                        </div>

                        <h1 className={`text-4xl md:text-7xl font-serif font-bold mb-8 leading-[1.1] tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Expert Guidance for <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-yellow-500 to-brand-orange italic font-light drop-shadow-sm">
                                Education & Career Decisions
                            </span>
                            <br className="hidden md:block" /> at Every Stage
                        </h1>
                        <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light transition-colors duration-500
                            ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            Supporting students, professionals, families, and institutions with clarity, insight, and purpose.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Story Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-6 block">Our Story</span>
                            <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                Why We <span className="italic font-light">Started.</span>
                            </h2>
                            <div className={`space-y-6 text-base lg:text-lg leading-relaxed transition-colors duration-500 ${isDark ? 'text-zinc-300 font-light' : 'text-zinc-700'}`}>
                                <p>
                                    <strong className={isDark ? 'text-zinc-200' : 'text-zinc-900'}>TrueNorth</strong> was founded by <strong className="text-brand-orange">Surabhi Rawat</strong>, a career counsellor and education consultant, with the aim of bringing <strong className={isDark ? 'text-zinc-200' : 'text-zinc-900'}>clarity and structure</strong> to education and career decision-making.
                                </p>
                                <p>
                                    As an education professional and an <strong className={isDark ? 'text-zinc-200' : 'text-zinc-900'}>expat parent</strong>, Surabhi witnessed firsthand the uncertainty faced by students, the concerns of parents, the transitions professionals navigate, and the need schools have for ethical, structured guidance partners. Too often, these journeys were approached in isolation.
                                </p>
                                <p>
                                    TrueNorth was created to align them — offering <strong className="text-brand-orange">psychometric-led insights</strong> and personalised guidance that support informed education and career decisions at <strong className={isDark ? 'text-zinc-200' : 'text-zinc-900'}>every stage</strong>.
                                </p>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className={`relative overflow-hidden rounded-[3rem] aspect-[4/3] shadow-2xl ${isDark ? 'shadow-black/50 border border-white/5' : 'border border-white shadow-brand-blue/10'}`}>
                                <img
                                    src="https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&w=800&q=80"
                                    alt="Dubai Skyline Premium view"
                                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                />
                                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/60 via-transparent' : 'bg-gradient-to-t from-zinc-900/20 via-transparent'}`}></div>
                                {/* Floating badge */}
                                <div className="absolute bottom-10 right-10 backdrop-blur-3xl bg-white/10 dark:bg-black/20 px-8 py-4 rounded-2xl border border-white/20 shadow-2xl">
                                    <span className="text-white text-xs font-black tracking-widest uppercase">Based in Dubai, UAE</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-center mb-20"
                    >
                        <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-6 block">We Help Everyone</span>
                        <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Guidance that reaches <br /><span className="italic font-light">Everywhere.</span>
                        </h2>
                        <p className={`max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed transition-colors duration-500
                            ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                            We help students at every important step of their education, no matter where they are.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className={`
                                    group p-10 rounded-[2.5rem] h-full border transition-all duration-500 flex flex-col items-center text-center
                                    ${isDark
                                        ? 'bg-zinc-900/80 border-white/10 shadow-xl shadow-black/30 hover:bg-zinc-900 hover:border-white/20'
                                        : 'bg-white border-zinc-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] hover:border-zinc-300'}
                                `}
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3
                                    ${isDark ? 'bg-brand-orange/10 text-brand-orange' : 'bg-orange-50 text-brand-orange'}`}>
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className={`text-2xl font-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h3>
                                <p className={`text-lg leading-relaxed ${isDark ? 'text-zinc-400 font-light' : 'text-zinc-500 font-medium'}`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 px-4 relative z-10 transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
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
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="relative group"
                            >
                                <div className={`absolute -inset-4 bg-gradient-to-b from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] -z-10`} />

                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110
                                    ${isDark ? 'bg-white/5 text-white ring-1 ring-white/10' : 'bg-zinc-50 text-zinc-900 border border-zinc-200'}`}>
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h2 className={`text-4xl font-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h2>
                                <div className={`h-px w-12 bg-brand-orange mb-8`}></div>
                                <p className={`text-xl leading-relaxed transition-colors duration-500 ${isDark ? 'text-zinc-400 font-light' : 'text-zinc-600 font-medium'}`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-32"
                    >
                        <div className={`relative p-12 md:p-16 rounded-[3rem] overflow-hidden border
                            ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-white border-zinc-100 shadow-2xl shadow-zinc-100/50'}`}>
                            <div className={`absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 rounded-tl-[2rem] m-8 border-brand-orange/20`} />
                            <div className={`absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 rounded-br-[2rem] m-8 border-brand-orange/20`} />

                            <p className={`relative z-10 text-2xl md:text-3xl italic font-serif leading-relaxed transition-colors duration-500 max-w-4xl mx-auto
                                    ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                                "Above all, TrueNorth is committed to creating a <span className="text-brand-orange font-bold">supportive space</span> where students feel heard, understood, and inspired."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Founder Section - Hyper Luxury Version */}
            <section className={`relative py-20 px-4 overflow-hidden ${isDark ? 'bg-transparent' : 'bg-transparent'}`}>
                {/* Atmospheric Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

                {/* Decorative Text Watermark - Premium Animated Stroke Version */}
                <motion.div
                    animate={{
                        y: ["-45%", "-55%", "-45%"],
                        x: [0, 10, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`absolute top-1/2 left-4 font-serif font-bold pointer-events-none select-none tracking-tighter transition-colors duration-1000 text-[18vw]
                        ${isDark
                            ? 'text-transparent opacity-[0.08] [-webkit-text-stroke:1px_rgba(255,165,0,0.3)]'
                            : 'text-transparent opacity-[0.03] [-webkit-text-stroke:1px_rgba(0,0,0,0.15)]'}`}
                >
                    TRUENORTH
                </motion.div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                        {/* Left - Portrait Side with 3D Effects */}
                        <div className="lg:col-span-5 relative">
                            {/* Decorative Frame Element */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="absolute -top-10 -left-10 w-64 h-64 border-l border-t border-orange-500/30 rounded-tl-[4rem] hidden lg:block"
                            ></motion.div>

                            <TiltCard tiltIntensity={15} glareOpacity={0.15} className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className="relative group"
                                >
                                    <div className={`relative overflow-hidden rounded-[3rem] ${isDark ? 'bg-zinc-900 border border-white/5' : 'bg-white shadow-2xl border border-gray-100'}`}>
                                        <img
                                            src="/assets/surabhi-rawat.jpg"
                                            alt="Surabhi Rawat - Founder of TrueNorth Consulting"
                                            className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                                    </div>

                                    {/* Floating Glass Name Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="absolute -bottom-8 -right-8 w-72 backdrop-blur-2xl bg-white/10 dark:bg-black/20 p-8 rounded-[2rem] border border-white/20 shadow-2xl"
                                    >
                                        <div className="relative">
                                            <h4 className="text-white text-2xl font-serif font-black mb-1">Surabhi Rawat</h4>
                                            <p className="text-orange-400 text-[10px] font-black tracking-[0.3em] uppercase mb-4">Founder & Lead Counselor</p>
                                            <p className="text-white/60 text-xs italic font-light leading-relaxed">
                                                "Every student has a unique North Star; it's our mission to find it."
                                            </p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </TiltCard>
                        </div>

                        {/* Right - Narrative Section */}
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-px w-12 bg-orange-500"></div>
                                    <span className="text-[10px] font-black tracking-[0.5em] uppercase text-orange-500">The Visionary Mind</span>
                                </div>

                                <h2 className={`text-4xl md:text-6xl font-serif font-bold mb-10 leading-[0.9] tracking-tighter ${isDark ? 'bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                                    Guidance as an <br />
                                    <span className="italic font-light text-orange-500">Art Form.</span>
                                </h2>

                                <div className={`space-y-8 text-base md:text-lg font-light leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                                    <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-orange-500">
                                        <strong className={isDark ? 'text-white' : 'text-gray-900'}>Surabhi Rawat</strong> is more than just a counselor; she helps build bright futures. With over 10 years of experience, she combines expert knowledge with a caring heart.
                                    </p>

                                    <p>
                                        An <span className="text-orange-500 italic">IB World Educator</span> at her core, Surabhi pioneered the Learning Enrichment Program (LEAP), a groundbreaking initiative that shifted the focus from rote learning to the cultivation of critical thinking and creative logic.
                                    </p>

                                    <p>
                                        As a parent who has navigated diverse global educational systems, her approach is deeply personal. She transformed her firsthand challenges into a boutique consultancy model that prioritizes <span className="underline decoration-orange-500/30 underline-offset-8">peace of mind</span> for families and <span className="text-orange-500 font-bold italic">clarity of purpose</span> for students.
                                    </p>
                                </div>

                                {/* Expertise Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-orange-500/10">
                                    <div className="group">
                                        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-orange-500/50 mb-2 group-hover:text-orange-500 transition-colors">Academic Foundation</p>
                                        <h5 className={`text-xl font-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>M.Sc., B.Ed.</h5>
                                    </div>
                                    <div className="group">
                                        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-orange-500/50 mb-2 group-hover:text-orange-500 transition-colors">Global Counseling</p>
                                        <h5 className={`text-xl font-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>UCLA Certified</h5>
                                    </div>
                                    <div className="group">
                                        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-orange-500/50 mb-2 group-hover:text-orange-500 transition-colors">Design Thinking</p>
                                        <h5 className={`text-xl font-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Harvard Project Zero</h5>
                                    </div>
                                    <div className="group">
                                        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-orange-500/50 mb-2 group-hover:text-orange-500 transition-colors">International Standards</p>
                                        <h5 className={`text-xl font-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>IB Educator</h5>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Elite Authority Section - Marketing Enhancement */}
            <section className={`relative py-20 px-4 overflow-hidden`}>
                <div className={`absolute inset-0 opacity-[0.4] ${isDark ? 'bg-[radial-gradient(#ffffff0a_1px,transparent_1px)]' : 'bg-[radial-gradient(#00000005_1px,transparent_1px)]'}`} style={{ backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <div className="flex justify-center mb-6">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} className="h-0.5 bg-orange-500 self-center mr-4"></motion.div>
                            <span className="text-xs font-black tracking-[0.5em] uppercase text-orange-600">Our Qualifications</span>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} className="h-0.5 bg-orange-500 self-center ml-4"></motion.div>
                        </div>

                        <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Certified <br />
                            <span className="italic text-brand-orange">Experts.</span>
                        </h2>

                        <p className={`max-w-3xl mx-auto text-lg font-light leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>
                            Our methods are proven and trusted. We use international standards to give you the best advice.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {credentials.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`
                                    group relative p-10 rounded-[2.5rem] border transition-all duration-500 overflow-hidden h-full flex flex-col items-start
                                    ${isDark
                                        ? 'bg-zinc-900/60 border-white/10 shadow-xl shadow-black/30 hover:border-white/20'
                                        : 'bg-white border-zinc-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:border-zinc-300 hover:shadow-xl'
                                    }
                                `}
                            >
                                <div className="flex items-center justify-between w-full mb-8">
                                    <div className={`p-4 rounded-2xl transition-all duration-500 group-hover:scale-110
                                        ${isDark ? 'bg-white/5 text-brand-orange' : 'bg-orange-50 text-brand-orange'}`}>
                                        <Award size={28} strokeWidth={1.5} />
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-colors
                                        ${isDark
                                            ? 'bg-transparent border-white/10 text-zinc-400 group-hover:text-white group-hover:border-white/20'
                                            : 'bg-transparent border-zinc-100 text-zinc-500 group-hover:text-zinc-900 group-hover:border-zinc-200'}`}>
                                        {item.issuer}
                                    </span>
                                </div>

                                <h3 className={`text-2xl font-serif font-medium mb-4 transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                    {item.title}
                                </h3>

                                <div className="mb-6 flex items-center gap-3">
                                    <div className={`h-px w-8 ${isDark ? 'bg-brand-orange/50' : 'bg-brand-orange'}`}></div>
                                    <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.2em]">
                                        {item.impact}
                                    </p>
                                </div>

                                <p className={`text-base leading-relaxed mt-auto ${isDark ? 'text-zinc-400 font-light' : 'text-zinc-500 font-medium'}`}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}

                        {/* Interactive "Why it matters" card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-1"
                        >
                            <div className={`
                                h-full p-10 rounded-[3rem] flex flex-col justify-center items-center text-center border-2 border-dashed
                                ${isDark ? 'border-brand-orange/20 bg-brand-orange/5' : 'border-brand-orange/20 bg-brand-orange/[0.02]'}
                            `}>
                                <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center mb-6 shadow-xl shadow-brand-orange/20">
                                    <Target size={30} />
                                </div>
                                <h4 className={`text-2xl font-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>The Global Advantage</h4>
                                <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                                    These aren't just titles. They represent a global network of academic intelligence that we leverage for every single student.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={`py-20 border-y ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-zinc-50/50 border-zinc-100'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
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
                                className={`text-center relative ${idx !== 3 ? 'md:border-r' : ''} ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
                            >
                                <div className={`text-4xl md:text-5xl font-serif font-bold mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                    <AnimatedCounter target={stat.num} suffix={stat.suffix} duration={2.5} />
                                </div>
                                <div className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-brand-orange' : 'text-zinc-500'}`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4 relative z-10 overflow-hidden">
                <div className={`max-w-5xl mx-auto rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden theme-transition
                    ${isDark ? 'bg-zinc-900/40 border border-white/5 shadow-2xl shadow-black/50' : 'bg-white border border-white shadow-2xl shadow-brand-orange/10'}`}>

                    {/* Inner Content */}
                    <div className="relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-black tracking-[0.3em] uppercase text-brand-orange mb-6 block">
                            Take the First Step
                        </motion.span>
                        <h2 className={`text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Ready to Find Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic font-light">
                                True North?
                            </span>
                        </h2>
                        <p className={`text-lg lg:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-500
                            ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                            Join thousands of families who found their future with our personalized guidance.
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                            <Link
                                to="/contact"
                                className={`group inline-flex items-center gap-4 px-12 py-6 rounded-full font-black text-xs tracking-[0.2em] uppercase transition-all duration-300
                                    ${isDark
                                        ? 'bg-white text-zinc-950 hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]'
                                        : 'bg-zinc-900 text-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]'}`}
                            >
                                Start Your Journey <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] -mr-40 -mt-40 transition-colors duration-500
                        ${isDark ? 'bg-brand-orange/20' : 'bg-brand-orange/10'}`} />
                    <div className={`absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[100px] -ml-40 -mb-40 transition-colors duration-500
                        ${isDark ? 'bg-brand-blue/20' : 'bg-brand-blue/10'}`} />
                </div>
            </section>
        </div >
    );
};

export default About;
