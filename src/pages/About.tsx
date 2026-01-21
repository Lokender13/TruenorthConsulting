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

    const qualificationSections = [
        {
            title: "Academic Credentials",
            icon: GraduationCap,
            items: [
                { title: "Master of Science (M.Sc.)", desc: "Strong academic foundation in scientific inquiry and analytical thinking." },
                { title: "Bachelor of Education (B.Ed.)", desc: "Professional qualification in pedagogy and learner-centred instruction." }
            ]
        },
        {
            title: "Career Counselling",
            icon: Award,
            items: [
                { title: "Certified Career Analyst (CCA)", desc: "Certification in psychometric assessment and data-driven guidance." },
                { title: "CCCIS", desc: "Qualification for global education pathways and international admissions." },
                { title: "Global Career Counsellor", desc: "UCLA Extension & Univariety internationally recognised certification." },
                { title: "Green Belt Certification", desc: "Advanced career counselling certification through Univariety." },
                { title: "Specialist Accreditations", desc: "Premium Overseas Admission & Profile Building Beyond Academics." },
                { title: "Global Teacher Accreditation", desc: "Awarded by British Council & UCL for action research excellence." }
            ]
        },
        {
            title: "Specialist Training",
            icon: BookOpen,
            items: [
                { title: "Thinking Frameworks", desc: "Professional training in visible thinking routines and creative problem solving." },
                { title: "Global Learning", desc: "Courses from Vanderbilt, Edinburgh, and Minnesota in Critical Thinking." }
            ]
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
                                icon: Lightbulb,
                                title: "Our Mission",
                                desc: "We believe every individual has a unique path — their own True North. Our mission is to help students, professionals, and families discover and navigate that path with clarity, confidence, and peace of mind."
                            },
                            {
                                icon: Target,
                                title: "Our Vision",
                                desc: "To empower students, parents, and professionals with the clarity, confidence, and direction they need to make informed decisions across their academic and career journeys."
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
                                "Above all, TrueNorth is committed to creating a <span className="text-brand-orange font-bold">supportive space</span> where individuals and families feel heard, understood, and confident in the decisions they make."
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

                                <div className={`space-y-8 text-base md:text-lg font-light leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-600 font-medium'}`}>
                                    <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-orange-500">
                                        <strong className={isDark ? 'text-white' : 'text-gray-900'}>Surabhi Rawat</strong> is the Founder of TrueNorth Consulting and an educator and career counsellor with over a decade of experience in international education. Her professional journey is strongly shaped by her work at <span className="text-orange-500 italic">Fountainhead School</span>, an IB World School, where she embraced inquiry-led learning and the International Baccalaureate philosophy.
                                    </p>

                                    <p>
                                        At Fountainhead, Surabhi led the <strong className={isDark ? 'text-zinc-200' : 'text-zinc-900'}>Learning Enrichment Program (LEAP)</strong> — a pilot initiative focused on developing critical thinking, creativity, problem-solving, and logical reasoning skills in students. She also facilitated professional development for educators using globally recognised thinking frameworks, including de Bono’s CoRT tools, Harvard’s Project Zero, and Design for Change.
                                    </p>

                                    <p>
                                        Surabhi received the <span className="text-orange-500 font-bold">Global Teacher Accreditation Award</span> from the British Council in collaboration with <strong className={isDark ? 'text-zinc-200' : 'text-zinc-900'}>University College London (UCL)</strong> for her action research. A lifelong learner, she continues to update her skills through global learning experiences, ensuring her guidance remains current and responsive to evolving contexts.
                                    </p>

                                    <p className={`p-6 rounded-2xl border ${isDark ? 'bg-orange-500/5 border-orange-500/10' : 'bg-orange-50 border-orange-100'}`}>
                                        As both an <span className="text-orange-500 italic">IB educator</span> and an <span className="text-orange-500 italic">expat parent</span> navigating multiple systems, Surabhi brings a rare blend of professional insight and lived understanding to her work, shaping TrueNorth’s empathetic and globally informed approach.
                                    </p>
                                </div>


                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Elite Authority Section - Marketing Enhancement */}
            <section className={`relative py-24 px-4 overflow-hidden`}>
                <div className={`absolute inset-0 opacity-[0.4] ${isDark ? 'bg-[radial-gradient(#ffffff0a_1px,transparent_1px)]' : 'bg-[radial-gradient(#00000005_1px,transparent_1px)]'}`} style={{ backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <div className="flex justify-center mb-6">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} className="h-0.5 bg-orange-500 self-center mr-4"></motion.div>
                            <span className="text-xs font-black tracking-[0.5em] uppercase text-orange-600">Expertise & Accreditation</span>
                            <motion.div initial={{ width: 0 }} whileInView={{ width: 40 }} className="h-0.5 bg-orange-500 self-center ml-4"></motion.div>
                        </div>

                        <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Certifications & <br /> Professional <span className="italic font-light text-brand-orange">Qualifications</span>
                        </h2>

                        <div className="mb-12">
                            <h3 className={`text-xl font-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                Surabhi Rawat — <span className="italic font-light text-brand-orange">Founder & Lead Career Consultant</span>
                            </h3>
                            <p className={`max-w-4xl mx-auto text-lg leading-relaxed ${isDark ? 'text-zinc-400 font-light' : 'text-zinc-600 font-medium'}`}>
                                Surabhi brings a unique blend of educational expertise, global perspective, and certified professional training to every student and parent she works with. Her qualifications include:
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {qualificationSections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`
                                    group relative p-10 rounded-[2.5rem] border transition-all duration-500 overflow-hidden h-full flex flex-col items-start
                                    ${isDark
                                        ? 'bg-zinc-900/60 border-white/10 shadow-xl shadow-black/30 hover:border-brand-orange/30 hover:bg-zinc-900/80'
                                        : 'bg-white border-zinc-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/10'
                                    }
                                `}
                            >
                                {/* Animated Background Glow */}
                                <div className={`absolute -inset-4 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                <div className="flex items-center gap-4 mb-10 w-full relative z-10">
                                    <div className={`p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                                        ${isDark ? 'bg-white/5 text-brand-orange border border-white/10' : 'bg-orange-50 text-brand-orange border border-orange-100'}`}>
                                        <section.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className={`text-2xl font-serif font-bold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                        {section.title}
                                    </h3>
                                </div>

                                <div className="space-y-6 w-full relative z-10">
                                    {section.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="group/item relative pl-8">
                                            {/* Decorative Bullet */}
                                            <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange/30 transition-all duration-300 group-hover/item:h-full group-hover/item:bg-brand-orange/60" />

                                            <h4 className={`text-sm font-bold tracking-wide mb-1.5 transition-colors group-hover/item:text-brand-orange ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>
                                                {item.title}
                                            </h4>
                                            <p className={`text-[13px] leading-relaxed transition-colors ${isDark ? 'text-zinc-500 font-light' : 'text-zinc-500 font-medium'}`}>
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Subtle Watermark Icon */}
                                <div className="absolute -bottom-10 -right-10 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700 pointer-events-none transform group-hover:-translate-x-4 group-hover:-translate-y-4">
                                    <section.icon size={180} strokeWidth={1} />
                                </div>
                            </motion.div>
                        ))}
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
