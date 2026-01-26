import { motion } from 'framer-motion';
import { useTheme } from '../../../contexts/ThemeContext';

interface HeroLayoutProps {
    children: React.ReactNode;
    visual: React.ReactNode;
    className?: string;
}

const HeroLayout = ({ children, visual, className = "" }: HeroLayoutProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 overflow-hidden theme-transition ${isDark ? 'text-white' : 'text-gray-900'} ${className}`}>
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=75&w=1600&fm=webp&auto=format&fit=crop" // Bright University/College - Consistent Image
                    alt="Educational Background"
                    width="1600"
                    height="900"
                    className="w-full h-full object-cover transition-all duration-700 pointer-events-none"
                    style={{
                        opacity: isDark ? 0.5 : 0.8,
                        filter: isDark ? 'grayscale(0.4) brightness(0.5)' : 'none'
                    }}
                />

                {/* Gradient Overlays for Text Readability - Adjusted for better visibility */}
                <div className={`absolute inset-0 ${isDark
                    ? 'bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent'
                    : 'bg-gradient-to-t from-white via-white/80 to-transparent'}`}
                />
            </div>

            {/* Common Background Ambience */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className={`absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.08] ${isDark ? 'bg-brand-orange' : 'bg-brand-orange/40'}`} />
                <div className={`absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.08] ${isDark ? 'bg-brand-blue' : 'bg-brand-blue/40'}`} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {children}
                    </motion.div>

                    <motion.div
                        className="relative hidden lg:block"
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {visual}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroLayout;
