import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Instagram, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo.png';

const Footer = () => {
    useTheme(); // Subscriing to the theme

    const services = [
        { label: "Career Counselling", path: "/services/career-counselling-psychometric-assessments" },
        { label: "Study Abroad", path: "/services/university-admissions-study-abroad" },
        { label: "Academic Support", path: "/services/academic-support-online-tutoring" },
        { label: "Competitive Exams", path: "/services/competitive-exam-language-preparation" },
        { label: "School Partnerships", path: "/services/school-college-partnerships" },
        { label: "Career Labs", path: "/services/career-lab-setup" },
    ];

    const company = [
        { label: "About Us", path: "/about" },
        { label: "All Services", path: "/services" },
        { label: "Contact Us", path: "/contact" },
    ];

    return (
        <footer className="bg-[#0a0a0f] text-white relative overflow-hidden">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent"></div>

            {/* Background design elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="inline-block mb-5">
                            <img src={logo} alt="TrueNorth" className="h-10 w-auto" />
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Premier career and education consultancy helping students navigate their path to success.
                        </p>

                        {/* Location & Reach Box */}
                        <div className="border border-gray-700/50 rounded-lg p-4">
                            <h5 className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-2">
                                Location & Reach
                            </h5>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Based in <span className="text-orange-400">Dubai</span>, <span className="text-orange-400">UAE</span>, serving clients across{' '}
                                <span className="text-orange-400">UAE</span>, <span className="text-orange-400">India</span>, and international markets.
                            </p>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-orange-400">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.path}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-orange-400">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {company.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        to={item.path}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us Column */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-orange-400">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Globe size={16} className="text-orange-400" />
                                <a
                                    href="https://www.truenorthae.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    www.truenorthae.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-orange-400" />
                                <a
                                    href="mailto:contact@truenorthae.com"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    contact@truenorthae.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-orange-400 mt-0.5" />
                                <a
                                    href="https://wa.me/971501420956"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    +971 50 142 0956
                                    <span className="text-xs text-gray-600 block">Phone / WhatsApp</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Instagram size={16} className="text-orange-400" />
                                <a
                                    href="https://instagram.com/surabhi_truenorth"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    @surabhi_truenorth
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Linkedin size={16} className="text-orange-400" />
                                <a
                                    href="https://linkedin.com/in/surabhi-rawat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    Surabhi Rawat
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-orange-400" />
                                <span className="text-sm text-gray-400">Dubai, UAE</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} TrueNorth Consulting. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="text-xs text-gray-600 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-xs text-gray-600 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
