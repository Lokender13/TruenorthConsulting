import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import SpotlightCard from '../ui/SpotlightCard';
import AnimatedGradientText from '../ui/AnimatedGradientText';

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Medical Student, AIIMS",
        content: "TrueNorth's career counselling helped me discover my true passion for medicine. Their scientific approach made all the difference.",
        rating: 5
    },
    {
        name: "Rahul Mehta",
        role: "MS in CS, Stanford",
        content: "From university selection to visa approval, TrueNorth guided me through every step. Now studying at my dream university!",
        rating: 5
    },
    {
        name: "Ananya Verma",
        role: "IB Student, Delhi",
        content: "The academic tutoring sessions were exceptional. My grades improved significantly and I gained real confidence.",
        rating: 5
    }
];

const Testimonials = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-10 relative overflow-hidden theme-transition ${isDark ? 'bg-black' : 'bg-white'}`}>
            {/* Subtle pattern */}
            <div className="absolute inset-0">
                <div
                    className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'} 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-2 rounded-full border ${isDark ? 'border-white/10 text-white/50' : 'border-gray-200 text-gray-400'
                        }`}>
                        Testimonials
                    </span>
                    <h2 className={`text-4xl md:text-5xl font-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        What Our <AnimatedGradientText
                            colors={isDark
                                ? ['#ffffff', '#a0a0a0', '#ffffff', '#606060', '#ffffff']
                                : ['#1f2937', '#F97316', '#1f2937', '#1E6FEB', '#1f2937']
                            }
                        >Students Say</AnimatedGradientText>
                    </h2>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard
                                className={`
                                    h-full p-8 rounded-2xl backdrop-blur-md
                                    ${isDark
                                        ? 'bg-zinc-900/50 border border-white/[0.06]'
                                        : 'bg-white/90 border border-brand-orange/20 shadow-xl shadow-brand-orange/5'
                                    }
                                `}
                                spotlightColor={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(249,115,22,0.05)'}
                            >
                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Quote Icon */}
                                    <Quote size={32} className={`mb-6 ${isDark ? 'text-white/10' : 'text-brand-blue/10'}`} />

                                    {/* Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={14} className={isDark ? 'text-white/40 fill-white/40' : 'text-brand-orange fill-brand-orange'} />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className={`text-sm leading-relaxed mb-6 flex-grow ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
                                        "{testimonial.content}"
                                    </p>

                                    {/* Author */}
                                    <div className={`pt-6 border-t ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
                                        <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {testimonial.name}
                                        </div>
                                        <div className={`text-xs mt-1 ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
