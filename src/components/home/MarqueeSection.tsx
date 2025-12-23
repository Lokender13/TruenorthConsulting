import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import InfiniteMarquee from '../ui/InfiniteMarquee';
import { Star, Sparkles } from 'lucide-react';

const MarqueeSection = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const marqueeItems = [
        { text: 'Study Abroad', icon: '🌍' },
        { text: 'University Admissions', icon: '🎓' },
        { text: 'Academic Excellence', icon: '📚' },
        { text: 'Global Opportunities', icon: '✈️' },
        { text: 'Career Counselling', icon: '🧭' },
        { text: 'Psychometric Tests', icon: '📊' },
    ];

    return (
        <section className={`py-8 relative overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-gradient-to-r from-orange-50 via-white to-blue-50'}`}>
            {/* Top border with gradient */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent`}></div>
            <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent`}></div>

            {/* Sparkle decorations */}
            <motion.div
                className="absolute left-10 top-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <Sparkles className={`w-4 h-4 ${isDark ? 'text-white/20' : 'text-orange-400/40'}`} />
            </motion.div>
            <motion.div
                className="absolute right-10 top-1/2 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <Star className={`w-4 h-4 ${isDark ? 'text-white/20' : 'text-blue-400/40'}`} />
            </motion.div>

            <div className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                <InfiniteMarquee
                    items={marqueeItems}
                    speed={30}
                    direction="left"
                />
            </div>
        </section>
    );
};

export default MarqueeSection;
