import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo.png';

const Footer = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const services = [
        { label: "Career Counselling", path: "/services/career-counselling-psychometric-assessments" },
        { label: "Study Abroad", path: "/services/university-admissions-study-abroad" },
        { label: "Academic Support", path: "/services/academic-support-online-tutoring" },
        { label: "Competitive Exams", path: "/services/competitive-exam-language-preparation" },
        { label: "School Partnerships", path: "/services/school-college-partnerships" },
        { label: "Career Lab Setup", path: "/services/career-lab-setup" },
        { label: "Digital Solutions", path: "/services/digital-solutions-education" },
    ];

    const company = [
        { label: "Our Story", path: "/about" },
        { label: "Specialized Services", path: "/services" },
        { label: "Contact Partners", path: "/contact" },
    ];

    return (
        <footer className={`relative overflow-hidden theme-transition border-t ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-[#FAFAFA] border-zinc-100'}`}>
            {/* Ambient background glows */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none transition-colors duration-1000 ${isDark ? 'bg-brand-orange/20' : 'bg-brand-orange/10'}`} />
            <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none transition-colors duration-1000 ${isDark ? 'bg-brand-blue/20' : 'bg-brand-blue/10'}`} />

            <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-block mb-8">
                            <img src={logo} alt="TrueNorth" className={`h-12 w-auto transition-all duration-500 ${!isDark ? 'brightness-0' : ''}`} />
                        </Link>
                        <p className={`text-lg font-light leading-relaxed mb-8 transition-colors duration-500 ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                            Architects of academic futures, helping students navigate the complexities of global education with elite precision.
                        </p>

                        {/* Location Badge */}
                        <div className={`
                            inline-flex flex-col p-6 rounded-[2rem] border backdrop-blur-xl transition-all duration-500
                            ${isDark ? 'bg-zinc-900/40 border-white/5 shadow-2xl shadow-black/50' : 'bg-white border-zinc-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]'}
                        `}>
                            <h5 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-3">
                                Global Hub
                            </h5>
                            <p className={`text-xs font-serif leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                Based in <span className="font-bold">Dubai, UAE</span>. <br />
                                Serving elite markets across the <span className="font-bold">GCC, India</span>, and <span className="font-bold">Europe</span>.
                            </p>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className={`text-[10px] font-black tracking-[0.3em] uppercase mb-8 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                            Specializations
                        </h4>
                        <ul className="space-y-4">
                            {services.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.path}
                                        className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-500 hover:text-zinc-950'}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className={`text-[10px] font-black tracking-[0.3em] uppercase mb-8 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                            Foundation
                        </h4>
                        <ul className="space-y-4">
                            {company.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.path}
                                        className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-500 hover:text-zinc-950'}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className={`text-[10px] font-black tracking-[0.3em] uppercase mb-8 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                            Connect
                        </h4>
                        <ul className="space-y-6">
                            {[
                                { icon: Globe, val: "truenorthae.com", href: "https://www.truenorthae.com" },
                                { icon: Mail, val: "contact@truenorthae.com", href: "mailto:contact@truenorthae.com" },
                                { icon: Phone, val: "+971 50 142 0956", href: "https://wa.me/971501420956" },
                                { icon: Instagram, val: "@surabhi_truenorth", href: "https://instagram.com/surabhi_truenorth" },
                                { icon: Linkedin, val: "Surabhi Rawat", href: "https://linkedin.com/in/surabhi-rawat" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 group">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500
                                        ${isDark ? 'bg-white/5 text-zinc-500 group-hover:text-white group-hover:bg-brand-orange/20' : 'bg-zinc-100 text-zinc-400 group-hover:text-brand-orange group-hover:bg-brand-orange/5 shadow-inner'}`}>
                                        <item.icon size={18} />
                                    </div>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-sm font-medium transition-colors duration-300 ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-500 hover:text-zinc-950'}`}
                                    >
                                        {item.val}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`mt-20 pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-6 transition-colors duration-500 ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                    <p className={`text-[10px] font-black tracking-widest uppercase ${isDark ? 'text-zinc-700' : 'text-zinc-400'}`}>
                        © {new Date().getFullYear()} TrueNorth Consulting. Handcrafted for Global Excellence.
                    </p>
                    <div className="flex gap-10">
                        {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Disclaimer'].map((link, i) => (
                            <Link key={i} to={`/${link.toLowerCase().replace(/ /g, '-')}`} className={`text-[10px] font-black tracking-widest uppercase transition-colors duration-300 ${isDark ? 'text-zinc-700 hover:text-white' : 'text-zinc-400 hover:text-zinc-950'}`}>
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
