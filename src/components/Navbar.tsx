import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setServicesOpen(false);
    }, [location]);

    const services = [
        { name: "Career Counselling", path: "/services/career-counselling-psychometric-assessments" },
        { name: "Study Abroad", path: "/services/university-admissions-study-abroad" },
        { name: "Academic Support", path: "/services/academic-support-online-tutoring" },
        { name: "Competitive Exams", path: "/services/competitive-exam-language-preparation" },
        { name: "School Partnerships", path: "/services/school-college-partnerships" },
        { name: "Career Labs", path: "/services/career-lab-setup" },
    ];

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services", hasDropdown: true },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${scrolled
            ? isDark
                ? 'bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
                : 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg shadow-gray-200/50'
            : isDark
                ? 'bg-gradient-to-b from-black/80 to-transparent'
                : 'bg-gradient-to-b from-white/80 to-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="TrueNorth" className="h-10 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.hasDropdown ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setServicesOpen(true)}
                                        onMouseLeave={() => setServicesOpen(false)}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDark
                                                ? 'text-white/70 hover:text-white hover:bg-white/5'
                                                : 'text-gray-600 hover:text-brand-blue hover:bg-brand-blue/5'
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                        </Link>

                                        {/* Dropdown */}
                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className={`absolute top-full left-0 mt-2 w-64 py-2 rounded-xl border ${isDark
                                                        ? 'bg-zinc-900 border-white/10'
                                                        : 'bg-white border-gray-100 shadow-xl'
                                                        }`}
                                                >
                                                    {services.map((service) => (
                                                        <Link
                                                            key={service.path}
                                                            to={service.path}
                                                            className={`block px-4 py-2.5 text-sm transition-colors ${isDark
                                                                ? 'text-white/60 hover:text-white hover:bg-white/5'
                                                                : 'text-gray-600 hover:text-brand-blue hover:bg-brand-blue/5'
                                                                }`}
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDark
                                            ? 'text-white/70 hover:text-white hover:bg-white/5'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-xl transition-colors ${isDark
                                ? 'text-white/60 hover:text-white hover:bg-white/5'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                                }`}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle theme"
                        >
                            <motion.div
                                key={theme}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.div>
                        </motion.button>

                        {/* CTA Button */}
                        <Link
                            to="/contact"
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isDark || !scrolled
                                ? 'bg-white text-black hover:bg-white/90'
                                : 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/20'
                                }`}
                        >
                            Start Your Journey
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <motion.button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg ${isDark || !scrolled ? 'text-white' : 'text-gray-900'}`}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg ${isDark || !scrolled ? 'text-white' : 'text-gray-900'}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`lg:hidden border-t ${isDark
                            ? 'bg-black border-white/5'
                            : 'bg-white border-gray-100'
                            }`}
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isDark
                                        ? 'text-white/70 hover:text-white hover:bg-white/5'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className={`block text-center px-4 py-3 rounded-xl text-sm font-semibold ${isDark
                                    ? 'bg-white text-black'
                                    : 'bg-brand-orange text-white'
                                    }`}
                            >
                                Start Your Journey
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
