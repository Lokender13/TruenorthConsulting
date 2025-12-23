import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Award, CheckCircle2, GraduationCap, Globe, Users, BarChart, Laptop, Building, BookOpen, Code, Server, Brain, PenTool } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface ServiceHeroProps {
    service: any;
}

const ServiceHero = ({ service }: ServiceHeroProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Dynamic Content Mapping based on Service ID
    const heroContent: any = {
        "career-counselling": {
            type: "dashboard",
            fileName: "Career_Path_Analytics.exe",
            graphTitle: "Clarity Score",
            graphValue: "98%",
            badge1: { icon: Users, label: "Satisfaction", value: "4.9/5 Rated" },
            badge2: { icon: BookOpen, label: "Reports", value: "Detailed" },
            bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
        },
        "study-abroad": {
            type: "globe",
            fileName: "Admission_Success.exe",
            graphTitle: "Acceptance Rate",
            graphValue: "99.5%",
            badge1: { icon: GraduationCap, label: "Acceptance", value: "Ivy League" },
            badge2: { icon: Award, label: "Scholarships", value: "$5M+ Secured" },
            bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
        },
        "academic-support": {
            type: "academic",
            fileName: "Grade_Improvement.exe",
            graphTitle: "Grade Boost",
            graphValue: "+2 Grades",
            badge1: { icon: CheckCircle2, label: "Tutors", value: "IB/IGCSE Experts" },
            badge2: { icon: TrendingUp, label: "Results", value: "A* Achieved" },
            bgImage: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80"
        },
        "competitive-exams": {
            type: "academic",
            fileName: "Score_Tracker.exe",
            graphTitle: "Avg. Score",
            graphValue: "Top 5%",
            badge1: { icon: Globe, label: "IELTS/TOEFL", value: "Band 8.0+" },
            badge2: { icon: Award, label: "SAT/ACT", value: "1500+ Avg" },
            bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80"
        },
        "school-partnerships": {
            type: "network",
            fileName: "Placement_Stats.exe",
            graphTitle: "Placement",
            graphValue: "+40%",
            badge1: { icon: Building, label: "Partners", value: "50+ Schools" },
            badge2: { icon: Users, label: "Impact", value: "10k+ Students" },
            bgImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80"
        },
        "career-lab": {
            type: "dashboard",
            fileName: "Lab_Utilization.exe",
            graphTitle: "Engagement",
            graphValue: "100%",
            badge1: { icon: Laptop, label: "Platform", value: "White-Labeled" },
            badge2: { icon: BarChart, label: "Analytics", value: "Real-time" },
            bgImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80"
        },
        "digital-solutions": {
            type: "digital",
            fileName: "Lead_Generation.exe",
            graphTitle: "Lead Growth",
            graphValue: "3.5x",
            badge1: { icon: Globe, label: "SEO Rank", value: "#1 Page" },
            badge2: { icon: Users, label: "Admissions", value: "+200% YoY" },
            bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
        }
    };

    // Fallback content
    const content = heroContent[service.id] || {
        type: "dashboard",
        fileName: "Growth_Analytics.exe",
        graphTitle: "Success Rate",
        graphValue: "98.5%",
        badge1: { icon: CheckCircle2, label: "Certified", value: "Experts" },
        badge2: { icon: TrendingUp, label: "Results", value: "Guaranteed" }
    };

    const Badge1Icon = content.badge1.icon;
    const Badge2Icon = content.badge2.icon;

    // --- RENDERERS FOR DIFFERENT 3D VARIANTS ---

    // 1. Dashboard Variant (Career Counselling, Career Lab)
    const renderDashboard = () => (
        <motion.div
            className={`
                relative w-[420px] h-[280px] rounded-2xl backdrop-blur-xl border shadow-2xl
                ${isDark
                    ? 'bg-zinc-900/80 border-white/10 shadow-black/50'
                    : 'bg-white/80 border-white/60 shadow-brand-blue/10'
                }
            `}
            initial={{ rotateY: -15, rotateX: 5, y: 20, opacity: 0 }}
            animate={{ rotateY: -10, rotateX: 5, y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Header */}
            <div className={`px-6 py-4 border-b flex items-center justify-between ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className={`text-xs font-mono ${isDark ? 'text-white/30' : 'text-gray-400'}`}>{content.fileName}</div>
            </div>
            {/* Body */}
            <div className="p-6 relative">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <div className={`text-xs uppercase tracking-wider mb-1 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>{content.graphTitle}</div>
                        <div className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{content.graphValue}</div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-bold ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                        ▲ High Potential
                    </div>
                </div>
                {/* Graph */}
                <svg className="w-full h-32 overflow-visible" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="0" stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} strokeWidth="0.5" />
                    <line x1="0" y1="20" x2="100" y2="20" stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} strokeWidth="0.5" />
                    <line x1="0" y1="40" x2="100" y2="40" stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} strokeWidth="0.5" />
                    <motion.path
                        d="M0,40 C20,35 40,30 50,20 C60,10 80,5 100,0"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F97316" />
                            <stop offset="100%" stopColor="#1E6FEB" />
                        </linearGradient>
                    </defs>
                    <motion.circle cx="50" cy="20" r="2" fill="#1E6FEB" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} />
                    <motion.circle cx="100" cy="0" r="2" fill="#1E6FEB" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }} />
                </svg>
            </div>
            {renderBadges()}
        </motion.div>
    );

    // 2. Globe Variant (Study Abroad) - REFINED
    const renderGlobe = () => (
        <div className="relative w-[400px] h-[400px] flex items-center justify-center" style={{ perspective: '1000px' }}>
            {/* Solid Glass Globe */}
            <motion.div
                className={`relative w-64 h-64 rounded-full backdrop-blur-sm border shadow-2xl overflow-hidden ${isDark ? 'bg-brand-blue/10 border-white/20 shadow-brand-blue/20' : 'bg-white/30 border-white/60 shadow-brand-blue/20'}`}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Map Texture / Meridians */}
                <div className="absolute inset-0 opacity-30">
                    {[0, 45, 90, 135].map((deg, i) => (
                        <div key={i} className={`absolute inset-0 border border-brand-blue/30 rounded-full`} style={{ transform: `rotateY(${deg}deg)` }}></div>
                    ))}
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className={`absolute inset-0 border-t border-b border-brand-blue/30 rounded-full`} style={{ top: `${i * 25}%`, bottom: `${i * 25}%` }}></div>
                    ))}
                </div>

                {/* Glowing Core */}
                <div className="absolute inset-10 rounded-full bg-brand-blue/20 blur-xl"></div>

                {/* Rotating Ring */}
                <motion.div
                    className="absolute inset-[-20px] border-2 border-dashed border-brand-orange/40 rounded-full"
                    style={{ rotateX: 75 }}
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>

            {renderBadges()}
        </div>
    );

    // 3. Academic Variant (Academic Support, Competitive Exams) - REFINED
    const renderAcademic = () => (
        <div className="relative w-[400px] h-[400px] flex items-center justify-center" style={{ perspective: '1000px' }}>
            {/* Floating 3D Stack */}
            <div className="relative z-10 transform preserve-3d rotate-y-12 rotate-x-12">
                {/* Base Book */}
                <motion.div
                    className={`w-48 h-64 rounded-lg border shadow-xl absolute top-0 left-0 ${isDark ? 'bg-zinc-800 border-white/10' : 'bg-white border-gray-200'}`}
                    style={{ transform: 'translateZ(-20px)' }}
                />
                {/* Middle Book */}
                <motion.div
                    className={`w-48 h-64 rounded-lg border shadow-xl absolute top-0 left-0 ${isDark ? 'bg-zinc-800 border-white/10' : 'bg-white border-gray-200'}`}
                    style={{ transform: 'translateZ(0px) rotate(-5deg)' }}
                />
                {/* Top Card */}
                <motion.div
                    className={`w-48 h-64 rounded-lg border shadow-2xl flex flex-col items-center justify-center relative overflow-hidden ${isDark ? 'bg-zinc-900 border-white/20' : 'bg-white border-brand-blue/20'}`}
                    style={{ transform: 'translateZ(20px) rotate(5deg)' }}
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent"></div>
                    <div className="text-6xl font-bold text-brand-orange mb-2">A+</div>
                    <div className={`text-sm font-medium ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Exam Mastery</div>

                    {/* Decorative shapes */}
                    <div className="absolute top-4 right-4 text-brand-blue/20"><Brain size={32} /></div>
                    <div className="absolute bottom-4 left-4 text-brand-orange/20"><PenTool size={32} /></div>
                </motion.div>
            </div>

            {/* Orbiting Elements */}
            <motion.div className="absolute w-80 h-80 rounded-full border border-dashed border-brand-blue/10" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

            {renderBadges()}
        </div>
    );

    // 4. Digital Variant (Digital Solutions) - REFINED
    const renderDigital = () => (
        <div className="relative w-[400px] h-[400px] flex items-center justify-center" style={{ perspective: '1000px' }}>
            {/* Central Cube Structure */}
            <div className="relative w-48 h-48 transform-style-3d animate-float">
                {/* Back Plane */}
                <motion.div
                    className={`absolute inset-0 rounded-2xl border opacity-50 ${isDark ? 'bg-brand-blue/5 border-brand-blue/20' : 'bg-brand-blue/5 border-brand-blue/20'}`}
                    style={{ transform: 'translateZ(-40px) scale(0.9)' }}
                />
                {/* Main Plane */}
                <motion.div
                    className={`absolute inset-0 rounded-2xl backdrop-blur-xl border shadow-2xl flex flex-col items-center justify-center ${isDark ? 'bg-zinc-900/80 border-white/10' : 'bg-white/80 border-white/60'}`}
                    style={{ transform: 'translateZ(0px)' }}
                    animate={{ rotateY: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-brand-orange/10 text-brand-orange"><Code size={24} /></div>
                        <div className="p-3 rounded-lg bg-brand-blue/10 text-brand-blue"><Server size={24} /></div>
                        <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500"><Laptop size={24} /></div>
                        <div className="p-3 rounded-lg bg-green-500/10 text-green-500"><Globe size={24} /></div>
                    </div>
                </motion.div>
                {/* Front Floating Elements */}
                <motion.div
                    className={`absolute -right-8 top-1/2 w-16 h-16 rounded-xl shadow-lg flex items-center justify-center ${isDark ? 'bg-zinc-800 border border-white/10' : 'bg-white border border-gray-100'}`}
                    style={{ transform: 'translateZ(40px)' }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="text-xs font-bold text-brand-blue">SEO</div>
                </motion.div>
            </div>

            {renderBadges()}
        </div>
    );

    // 5. Network Variant (School Partnerships) - REFINED
    const renderNetwork = () => (
        <div className="relative w-[400px] h-[400px] flex items-center justify-center" style={{ perspective: '1000px' }}>
            {/* Central Hub - 3D Glass Sphere */}
            <motion.div
                className={`relative w-40 h-40 rounded-full flex items-center justify-center z-10 backdrop-blur-xl border shadow-2xl ${isDark ? 'bg-white/10 border-white/20' : 'bg-white/40 border-white/60 shadow-brand-blue/20'}`}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${isDark ? 'from-brand-blue/20 to-transparent' : 'from-brand-blue/10 to-transparent'}`}></div>
                <Building size={64} className="text-brand-blue relative z-10" />

                {/* Inner pulsing core */}
                <motion.div
                    className="absolute inset-4 rounded-full border-2 border-brand-orange/30"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.div>

            {/* Orbiting Nodes - Tilted Ring */}
            <motion.div
                className={`absolute w-80 h-80 rounded-full border ${isDark ? 'border-white/10' : 'border-brand-blue/10'}`}
                style={{ rotateX: 70 }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {/* Node 1 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-orange shadow-lg shadow-brand-orange/50"></div>
                {/* Node 2 */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-brand-blue shadow-lg shadow-brand-blue/50"></div>
                {/* Node 3 */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-orange shadow-lg shadow-brand-orange/50"></div>
                {/* Node 4 */}
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-blue shadow-lg shadow-brand-blue/50"></div>
            </motion.div>

            {renderBadges()}
        </div>
    );

    // Helper to render the floating badges (shared across variants)
    const renderBadges = () => (
        <>
            <motion.div
                className={`absolute -right-4 top-10 px-4 py-3 rounded-xl backdrop-blur-md border shadow-lg flex items-center gap-3 ${isDark ? 'bg-zinc-800/90 border-white/10' : 'bg-white/90 border-white/50'}`}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: 'translateZ(40px)' }}
            >
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-brand-orange">
                    <Badge1Icon size={18} />
                </div>
                <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">{content.badge1.label}</div>
                    <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{content.badge1.value}</div>
                </div>
            </motion.div>

            <motion.div
                className={`absolute -left-4 bottom-8 px-4 py-3 rounded-xl backdrop-blur-md border shadow-lg flex items-center gap-3 ${isDark ? 'bg-zinc-800/90 border-white/10' : 'bg-white/90 border-white/50'}`}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ transform: 'translateZ(20px)' }}
            >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue">
                    <Badge2Icon size={18} />
                </div>
                <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">{content.badge2.label}</div>
                    <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{content.badge2.value}</div>
                </div>
            </motion.div>
        </>
    );

    return (
        <section className={`relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden theme-transition ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
            {/* Service Background Image */}
            {content.bgImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={content.bgImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay for readability - less opaque in light mode to show image */}
                    <div className={`absolute inset-0 ${isDark
                        ? 'bg-gradient-to-r from-black/85 via-black/70 to-black/50'
                        : 'bg-gradient-to-r from-white/80 via-white/60 to-white/30'
                        }`}></div>
                </div>
            )}

            {/* Corporate Grid Background */}
            <div className="absolute inset-0 z-[1]">
                <div
                    className={`absolute inset-0 ${isDark ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}
                    style={{
                        backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                {/* Gradient Overlay for depth */}
                <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-black via-transparent to-black' : 'from-white via-transparent to-white'} opacity-50`}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/services" className={`inline-flex items-center mb-8 transition-colors text-sm font-medium ${isDark ? 'text-white/40 hover:text-white' : 'text-gray-500 hover:text-brand-blue'}`}>
                            <ArrowLeft size={18} className="mr-2" /> Back to Services
                        </Link>

                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-6 ${isDark ? 'bg-white/10 text-white' : 'bg-brand-blue/5 text-brand-blue border border-brand-blue/10'}`}>
                            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                            Professional Services
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                            {service.title}
                        </h1>

                        <p className={`text-xl md:text-2xl font-light leading-relaxed mb-8 ${isDark ? 'text-white/40' : 'text-gray-600'}`}>
                            {service.tagline}
                        </p>

                        {/* Metrics/Badges */}
                        <div className="flex flex-wrap gap-6">
                            <div className={`flex items-center gap-3 px-4 py-2 rounded-lg border ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                                <CheckCircle2 className="text-brand-orange" size={20} />
                                <span className="text-sm font-semibold">Certified Experts</span>
                            </div>
                            <div className={`flex items-center gap-3 px-4 py-2 rounded-lg border ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}>
                                <TrendingUp className="text-brand-blue" size={20} />
                                <span className="text-sm font-semibold">Data-Driven</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Dynamic 3D Graphic */}
                    <div className="relative h-[400px] lg:h-[500px] hidden lg:block perspective-1000">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {content.type === 'dashboard' && renderDashboard()}
                            {content.type === 'globe' && renderGlobe()}
                            {content.type === 'academic' && renderAcademic()}
                            {content.type === 'digital' && renderDigital()}
                            {content.type === 'network' && renderNetwork()}

                            {/* Background Glow */}
                            <div className={`absolute w-[500px] h-[500px] rounded-full blur-[100px] -z-10 ${isDark ? 'bg-brand-blue/10' : 'bg-brand-blue/5'}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
