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
        <section className={`relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 overflow-hidden theme-transition ${isDark ? 'bg-zinc-950 text-white' : 'bg-white text-gray-900'} ${className}`}>
            {/* Common Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
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
