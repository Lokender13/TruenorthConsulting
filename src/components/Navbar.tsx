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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'h-20'
            : 'h-24'
            }`}>
            {/* Glass Background */}
            <div className={`absolute inset-0 transition-all duration-300 ${scrolled
                ? isDark
                    ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
                    : 'bg-white/80 backdrop-blur-md border-b border-black/5'
                : 'bg-transparent'
                }`} />

            <div className="relative max-w-7xl mx-auto px-4 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo - Enhanced Visibility */}
                    <Link to="/" className="flex items-center group relative z-10">
                        <div className={`absolute -inset-2 rounded-xl blur-lg transition-opacity duration-300 ${isDark ? 'bg-white/5 opacity-0 group-hover:opacity-100' : 'bg-black/5 opacity-0 group-hover:opacity-100'
                            }`} />
                        <motion.img
                            src={logo}
                            alt="TrueNorth"
                            className="h-12 w-auto relative transition-transform duration-300 group-hover:scale-105"
                            layoutId="navbar-logo"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full border border-transparent transition-all duration-300">
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
                                            className={`
                                                flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                                ${isDark
                                                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                                                    : 'text-gray-700 hover:text-black hover:bg-black/5'
                                                }
                                            `}
                                        >
                                            {link.name}
                                            <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                                        </Link>

                                        {/* Dropdown - Premium Glass */}
                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className={`absolute top-full left-0 mt-4 w-72 p-2 rounded-2xl border backdrop-blur-xl shadow-2xl overflow-hidden ${isDark
                                                        ? 'bg-zinc-900/90 border-white/10'
                                                        : 'bg-white/90 border-black/5'
                                                        }`}
                                                >
                                                    {services.map((service, idx) => (
                                                        <Link
                                                            key={service.path}
                                                            to={service.path}
                                                            className={`
                                                                block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                                                                relative overflow-hidden group/item
                                                                ${isDark
                                                                    ? 'text-white/60 hover:text-white hover:bg-white/10'
                                                                    : 'text-gray-600 hover:text-black hover:bg-black/5'
                                                                }
                                                            `}
                                                        >
                                                            <span className="relative z-10">{service.name}</span>
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`
                                            px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                            ${isDark
                                                ? 'text-white/80 hover:text-white hover:bg-white/10'
                                                : 'text-gray-700 hover:text-black hover:bg-black/5'
                                            }
                                        `}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Theme Toggle - Glass */}
                        <motion.button
                            onClick={toggleTheme}
                            className={`
                                p-3 rounded-full border transition-all duration-300
                                ${isDark
                                    ? 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white'
                                    : 'bg-white/50 border-black/5 text-gray-700 hover:bg-black/5 hover:text-black'
                                }
                            `}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle theme"
                        >
                            <motion.div
                                key={theme}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </motion.div>
                        </motion.button>

                        {/* CTA Button */}
                        <Link
                            to="/contact"
                            className={`
                                px-7 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl
                                ${isDark || !scrolled
                                    ? 'bg-white text-black hover:bg-gray-100 hover:scale-105'
                                    : 'bg-black text-white hover:bg-zinc-800 hover:scale-105'
                                }
                            `}
                        >
                            Start Your Journey
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Glass */}
                    <div className="lg:hidden flex items-center gap-3">
                        <motion.button
                            onClick={toggleTheme}
                            className={`p-2.5 rounded-xl backdrop-blur-md border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/60 border-black/5 text-black'
                                }`}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2.5 rounded-xl backdrop-blur-md border transition-colors ${isOpen
                                    ? (isDark ? 'bg-white text-black border-white' : 'bg-black text-white border-black')
                                    : (isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/60 border-black/5 text-black')
                                }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Full Screen Premium */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`absolute top-full left-0 right-0 border-t backdrop-blur-xl shadow-2xl ${isDark
                            ? 'bg-black/95 border-white/10'
                            : 'bg-white/95 border-black/5'
                            }`}
                    >
                        <div className="p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`
                                        block px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300
                                        ${isDark
                                            ? 'text-white/70 hover:text-white hover:bg-white/10'
                                            : 'text-gray-600 hover:text-black hover:bg-black/5'
                                        }
                                    `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-dashed border-gray-500/20">
                                <Link
                                    to="/contact"
                                    className={`
                                        block text-center px-6 py-4 rounded-2xl text-lg font-bold transition-all duration-300
                                        ${isDark
                                            ? 'bg-white text-black hover:bg-gray-100'
                                            : 'bg-black text-white hover:bg-zinc-800'
                                        }
                                    `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Start Your Journey
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
