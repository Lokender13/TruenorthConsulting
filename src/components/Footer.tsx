import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo.png';

const Footer = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const services = [
        { label: "Career Counselling", path: "/services/career-counselling-psychometric-assessments" },
        { label: "Study Abroad", path: "/services/university-admissions-study-abroad" },
        { label: "Academic Support", path: "/services/academic-support-online-tutoring" },
        { label: "Profile Building & IELTS", path: "/services/competitive-exam-language-preparation" },
        { label: "School Partnerships", path: "/services/school-college-partnerships" },
        { label: "Career Labs", path: "/services/career-lab-setup" },
    ];

    const company = [
        { label: "About Us", path: "/about" },
        { label: "Success Stories", path: "/testimonials" },
        { label: "Our Partners", path: "/partners" },
        { label: "Contact Us", path: "/contact" },
    ];

    const socialLinks = [
        { icon: Linkedin, href: "https://linkedin.com/in/surabhi-rawat", label: "LinkedIn" },
        { icon: Instagram, href: "https://instagram.com/surabhi_truenorth", label: "Instagram" },
    ];

    return (
        <footer className={`relative overflow-hidden theme-transition border-t pt-20 pb-10 ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-zinc-50 border-zinc-200'}`}>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column (4 cols) */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link to="/" className="inline-block">
                            <img src={logo} alt="TrueNorth" className={`h-10 w-auto opacity-90 hover:opacity-100 transition-opacity ${!isDark ? 'brightness-0' : ''}`} />
                        </Link>
                        <p className={`text-base leading-relaxed max-w-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            Architects of academic futures, navigating the complexities of global education with elite precision and personalized guidance.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border
                                        ${isDark
                                            ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-white hover:text-black hover:border-white'
                                            : 'bg-white border-zinc-200 text-zinc-600 hover:bg-black hover:text-white hover:border-black'
                                        }`}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links (2 cols) */}
                    <div className="lg:col-span-2 lg:pl-4">
                        <h4 className={`font-serif text-lg font-medium mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {company.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.path}
                                        className={`text-sm transition-colors duration-200 hover:underline hover:decoration-brand-orange underline-offset-4 ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className={`font-serif text-lg font-medium mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Expertise
                        </h4>
                        <ul className="space-y-4">
                            {services.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.path}
                                        className={`text-sm transition-colors duration-200 hover:underline hover:decoration-brand-orange underline-offset-4 ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className={`font-serif text-lg font-medium mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Contact
                        </h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className={`mt-1 shrink-0 ${isDark ? 'text-brand-orange' : 'text-zinc-900'}`} />
                                <span className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                    <strong className={`block mb-1 ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>Global Hub</strong>
                                    Block C VL10-132 SRTIP, Sharjah, UAE
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={20} className={`shrink-0 ${isDark ? 'text-brand-orange' : 'text-zinc-900'}`} />
                                <a href="mailto:contact@truenorthae.com" className={`text-sm transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>
                                    contact@truenorthae.com
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={20} className={`shrink-0 ${isDark ? 'text-brand-orange' : 'text-zinc-900'}`} />
                                <a href="https://wa.me/971501420956" className={`text-sm transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>
                                    +971 50 142 0956
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
                    <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                        © {new Date().getFullYear()} TrueNorth Consulting. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link to="/privacy-policy" className={`text-xs transition-colors ${isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-500 hover:text-zinc-900'}`}>
                            Privacy Policy
                        </Link>
                        <Link to="/terms-of-service" className={`text-xs transition-colors ${isDark ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-500 hover:text-zinc-900'}`}>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>

            {/* Minimal Ambient Background */}
            <div className={`absolute -bottom-1/2 -left-1/4 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-20 ${isDark ? 'bg-brand-blue/10' : 'bg-brand-blue/5'}`} />
            <div className={`absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none opacity-20 ${isDark ? 'bg-brand-orange/10' : 'bg-brand-orange/5'}`} />
        </footer>
    );
};

export default Footer;
