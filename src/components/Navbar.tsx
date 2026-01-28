import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Linkedin, Instagram, BookOpen, Globe, GraduationCap, Target, Building2, Laptop, LogIn } from 'lucide-react';
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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

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
        { name: "Career Library", path: "https://surabhirawat.edumilestones.com/global-career-library/", isExternal: true },
        { name: "About us", path: "/about" },
        { name: "Resources", path: "/resources" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${scrolled
            ? 'h-16 md:h-20'
            : 'h-20 md:h-24'
            }`}>
            {/* Glass Background Layer */}
            <div className={`absolute inset-0 transition-all duration-700 pointer-events-none ${scrolled
                ? isDark
                    ? 'bg-zinc-950/80 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                    : 'bg-white/70 backdrop-blur-2xl border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.05)]'
                : 'bg-transparent'
                }`} />

            <div className="relative max-w-7xl mx-auto px-4 h-full pointer-events-auto">
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
                                                relative flex items-center gap-2 px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300
                                                ${isDark
                                                    ? 'text-zinc-400 hover:text-white group-hover:bg-white/5'
                                                    : scrolled
                                                        ? 'text-zinc-600 hover:text-zinc-900 group-hover:bg-zinc-950/5'
                                                        : 'text-zinc-900 hover:text-zinc-900 group-hover:bg-white/10'
                                                }
                                                ${location.pathname.startsWith(link.path) && link.path !== '/' ? 'text-brand-orange' : ''}
                                            `}
                                        >
                                            {link.name}
                                            <ChevronDown size={12} className={`transition-transform duration-500 ${servicesOpen ? 'rotate-180' : ''}`} />
                                            {location.pathname.startsWith(link.path) && link.path !== '/' && (
                                                <motion.div
                                                    layoutId="nav-underline"
                                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange"
                                                />
                                            )}
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
                                                                block px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
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
                                    link.isExternal ? (
                                        <a
                                            href={link.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`
                                            px-6 py-2.5 rounded-full text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-500
                                            ${isDark
                                                    ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                                                    : scrolled
                                                        ? 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                                                        : 'text-zinc-900 hover:bg-white/10'
                                                }
                                        `}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className={`
                                            relative px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300
                                            ${isDark
                                                    ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                                                    : scrolled
                                                        ? 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-950/5'
                                                        : 'text-zinc-900 hover:text-zinc-900 hover:bg-white/10'
                                                }
                                            ${location.pathname === link.path ? 'text-brand-orange' : ''}
                                        `}
                                        >
                                            {link.name}
                                            {location.pathname === link.path && (
                                                <motion.div
                                                    layoutId="nav-underline"
                                                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-orange"
                                                />
                                            )}
                                        </Link>
                                    )
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

                        {/* Login Button - Elevated Premium */}
                        <motion.a
                            href="https://career.truenorthae.com/student-login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group px-6 py-2 rounded-full overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Animated Background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-red to-brand-blue"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                style={{ backgroundSize: "200% 200%" }}
                            />

                            {/* Glass Overlay for Depth */}
                            <div className="absolute inset-[1px] bg-black/10 backdrop-blur-[2px] rounded-full group-hover:bg-transparent transition-colors duration-300" />

                            <span className="relative z-10 flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-white">
                                <LogIn size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                Login
                            </span>
                        </motion.a>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-2">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/surabhi-rawat-truenorth/", label: "LinkedIn" },
                                { icon: Instagram, href: "https://www.instagram.com/surabhi_truenorth/", label: "Instagram" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={`Visit our ${social.label}`}
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
                            aria-label="Toggle theme"
                            className={`p-2.5 rounded-xl backdrop-blur-md border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/60 border-black/5 text-black'
                                }`}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            className={`p-2.5 rounded-xl backdrop-blur-md border transition-all duration-300 ${isOpen
                                ? (isDark ? 'bg-white text-black border-white rotate-90' : 'bg-black text-white border-black rotate-90')
                                : (isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white/60 border-black/5 text-black')
                                }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Side Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`fixed inset-y-0 right-0 w-[85%] md:w-[400px] shadow-2xl overflow-y-auto pointer-events-auto ${isDark
                            ? 'bg-zinc-950 border-l border-white/5'
                            : 'bg-white border-l border-black/5'
                            }`}
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-6 border-b border-zinc-500/10">
                                <span className="text-[10px] font-bold tracking-widest uppercase opacity-50">Menu</span>
                                <button onClick={() => setIsOpen(false)} className="p-2 opacity-50 hover:opacity-100 transition-opacity">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 p-6 space-y-2">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.hasDropdown ? (
                                            <div className="space-y-2">
                                                <button
                                                    onClick={() => setServicesOpen(!servicesOpen)}
                                                    className={`
                                                    flex items-center justify-between w-full px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300
                                                    ${isDark
                                                            ? 'text-white/70 hover:text-white hover:bg-white/10'
                                                            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                                                        }
                                                `}
                                                >
                                                    {link.name}
                                                    <ChevronDown size={20} className={`transition-transform duration-500 ${servicesOpen ? 'rotate-180' : ''}`} />
                                                </button>

                                                <AnimatePresence>
                                                    {servicesOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden pl-4 space-y-1"
                                                        >
                                                            {services.map((service) => (
                                                                <Link
                                                                    key={service.path}
                                                                    to={service.path}
                                                                    className={`
                                                                    flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200
                                                                    ${isDark
                                                                            ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                                                                            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                                                                        }
                                                                `}
                                                                    onClick={() => setIsOpen(false)}
                                                                >
                                                                    <service.icon size={16} />
                                                                    {service.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : link.isExternal ? (
                                            <a
                                                href={link.path}
                                                target="_blank"
                                                rel="noopener noreferrer"
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
                                            </a>
                                        ) : (
                                            <Link
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
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 border-t border-zinc-500/10 space-y-4">
                                {/* Mobile Login Button */}
                                <motion.a
                                    href="https://career.truenorthae.com/student-login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group block w-full px-8 py-5 rounded-2xl overflow-hidden text-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-red to-brand-blue"
                                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        style={{ backgroundSize: "200% 200%" }}
                                    />
                                    <span className="relative z-10 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-white">
                                        <LogIn size={18} />
                                        Student Login
                                    </span>
                                </motion.a>

                                <Link
                                    to="/contact"
                                    className={`
                                        block text-center px-8 py-5 rounded-2xl text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500
                                        ${isDark
                                            ? 'bg-white/5 text-white border border-white/10'
                                            : 'bg-zinc-950 text-white shadow-lg'
                                        }
                                    `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Start Journey
                                </Link>

                                {/* Social Links in Mobile Menu Footer */}
                                <div className="flex items-center justify-center gap-6 pt-4">
                                    {[
                                        { icon: Linkedin, href: "https://www.linkedin.com/in/surabhi-rawat-truenorth/" },
                                        { icon: Instagram, href: "https://www.instagram.com/surabhi_truenorth/" }
                                    ].map((social, i) => (
                                        <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                                            <social.icon size={22} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
