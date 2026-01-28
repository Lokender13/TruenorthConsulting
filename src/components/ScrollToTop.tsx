import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [isVisible, setIsVisible] = useState(false);

    // Initial scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Handle button visibility on scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className={`fixed bottom-24 right-6 z-[45] p-3 rounded-full border shadow-2xl backdrop-blur-md transition-all group ${isDark
                            ? 'bg-zinc-900/80 border-white/10 text-white hover:bg-brand-orange hover:border-brand-orange shadow-black/50'
                            : 'bg-white/80 border-zinc-200 text-zinc-900 hover:bg-brand-orange hover:text-white hover:border-brand-orange shadow-zinc-200/50'
                        }`}
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={24} className="transition-transform group-hover:-translate-y-1" />

                    {/* Subtle pulse ring */}
                    <span className="absolute inset-0 rounded-full animate-ping bg-brand-orange/20 -z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
