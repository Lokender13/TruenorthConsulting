import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import TiltCard from '../ui/TiltCard';

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
        <section className={`py-32 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={`inline-flex items-center gap-2 px-6 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase mb-8
                        ${isDark ? 'border-brand-blue/20 text-brand-blue bg-brand-blue/5' : 'border-blue-200 text-brand-blue bg-white shadow-sm'}`}>
                        Student Voices
                    </span>
                    <h2 className={`text-5xl md:text-7xl font-serif font-bold mb-8 leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        What Our <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic font-light">
                            Students Say.
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                        >
                            <TiltCard
                                className={`
                                    h-full p-10 rounded-[3rem] backdrop-blur-xl transition-all duration-700 border
                                    ${isDark
                                        ? 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 shadow-2xl shadow-black/50'
                                        : 'bg-white/80 border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]'
                                    }
                                `}
                                tiltIntensity={5}
                            >
                                <div className="h-full flex flex-col">
                                    <Quote size={48} className={`mb-8 ${isDark ? 'text-brand-orange/20' : 'text-brand-orange/10'}`} />

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} className={isDark ? 'text-brand-orange fill-brand-orange/50' : 'text-brand-orange fill-brand-orange/20'} />
                                        ))}
                                    </div>

                                    <p className={`text-xl font-light italic leading-relaxed mb-10 flex-grow transition-colors duration-500 ${isDark ? 'text-zinc-400' : 'text-zinc-600 font-medium'}`}>
                                        "{testimonial.content}"
                                    </p>

                                    <div className={`pt-8 border-t transition-colors duration-500 ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                                        <div className={`text-lg font-serif font-bold transition-colors duration-500 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                            {testimonial.name}
                                        </div>
                                        <div className={`text-xs font-black tracking-widest uppercase mt-2 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
