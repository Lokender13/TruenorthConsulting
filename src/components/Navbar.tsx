import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Linkedin, Instagram, BookOpen, Globe, GraduationCap, Target, Building2, Laptop } from 'lucide-react';
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
        { name: "Career Counselling", path: "/services/career-counselling-dubai", icon: Target },
        { name: "Study Abroad", path: "/services/study-abroad-consultants-dubai", icon: Globe },
        { name: "Academic Support", path: "/services/online-tutoring-academic-support", icon: BookOpen },
        { name: "Career Booster & Profile Building", path: "/services/profile-building-career-booster", icon: GraduationCap },
        { name: "School Partnerships", path: "/services/school-career-guidance-programs", icon: Building2 },
        { name: "Career Labs", path: "/services/career-lab-setup-schools", icon: Laptop },
        { name: "Digital Solutions", path: "/services/education-digital-marketing", icon: Laptop },
    ];

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services", hasDropdown: true },
        { name: "About us", path: "/about" },
        { name: "Resources", path: "/resources" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'h-20'
            : 'h-24'
            }`}>
            {/* Glass Background Layer */}
            <div className={`absolute inset-0 transition-all duration-700 ${scrolled
                ? isDark
                    ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50'
                    : 'bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-sm'
                : 'bg-transparent'
                }`} />

            <div className="relative max-w-7xl mx-auto px-4 h-full">
                <div className="flex items-center justify-between h-full">
                    {/* Logo - Enhanced Visibility */}
                    <Link to="/" className="flex items-center group relative z-10">
                        <motion.img
                            src={logo}
                            alt="TrueNorth"
                            className={`h-10 md:h-12 w-auto relative transition-all duration-500 group-hover:scale-105 ${!isDark && !scrolled ? 'brightness-0' : ''}`}
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
                                                flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500
                                                ${isDark
                                                    ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                                                    : scrolled
                                                        ? 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                                                        : 'text-zinc-900 hover:bg-white/10'
                                                }
                                            `}
                                        >
                                            {link.name}
                                            <ChevronDown size={12} className={`transition-transform duration-500 ${servicesOpen ? 'rotate-180' : ''}`} />
                                        </Link>

                                        {/* Dropdown - Premium Glass */}
                                        <AnimatePresence>
                                            {servicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className={`absolute top-full left-0 mt-4 w-80 p-2 rounded-2xl border backdrop-blur-xl shadow-2xl overflow-hidden ${isDark
                                                        ? 'bg-zinc-950 border-white/10 shadow-black/50'
                                                        : 'bg-white border-zinc-200/50 shadow-zinc-200/20'
                                                        }`}
                                                >
                                                    {services.map((service) => (
                                                        <Link
                                                            key={service.path}
                                                            to={service.path}
                                                            className={`
                                                                block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                                                                relative overflow-hidden group/item flex items-center
                                                                ${isDark
                                                                    ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                                                                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                                                                }
                                                            `}
                                                        >
                                                            <span className={`p-2 rounded-lg mr-3 transition-colors ${isDark ? 'bg-white/5 text-zinc-400 group-hover/item:text-white group-hover/item:bg-white/10' : 'bg-zinc-100 text-zinc-500 group-hover/item:text-zinc-900 group-hover/item:bg-white'}`}>
                                                                <service.icon size={16} />
                                                            </span>
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
                                            px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500
                                            ${isDark
                                                ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                                                : scrolled
                                                    ? 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                                                    : 'text-zinc-900 hover:bg-white/10'
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

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-2">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/surabhi-rawat-truenorth/" }, // Assuming link structure, updated later if needed
                                { icon: Instagram, href: "https://www.instagram.com/surabhi_truenorth/" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        p-2 rounded-full transition-colors duration-300
                                        ${isDark
                                            ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                                            : 'text-zinc-600 hover:text-brand-orange hover:bg-brand-orange/10'
                                        }
                                    `}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
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
                            aria-label="Toggle menu"
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
                            ? 'bg-zinc-950/95 border-white/10'
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
                                            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                                        }
                                    `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-dashed border-zinc-500/20">
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Link
                                        to="/contact"
                                        className={`
                                            block text-center px-8 py-5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-500
                                            ${isDark
                                                ? 'bg-white text-zinc-950'
                                                : 'bg-zinc-950 text-white shadow-xl'
                                            }
                                        `}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Start Journey
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
