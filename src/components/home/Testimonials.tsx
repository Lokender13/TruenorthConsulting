import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import TiltCard from '../ui/TiltCard';
import { useRef } from 'react';

const testimonials = [
    {
        name: "Swarna",
        role: "Client Review",
        content: "I know Surabhi personally, and she has always been passionate about helping students and professionals find their true calling. Her certified expertise and caring nature make her an outstanding counselor.",
        rating: 5,
        date: "09-09-2025",
        verified: true
    },
    {
        name: "Shalini Shaswat",
        role: "Client Review",
        content: "Surabhi is extremely passionate about helping students find the right career path. She takes time to understand individual strengths and provides clear practical guidance. I would highly recommend her for anyone considering studying abroad.",
        rating: 4,
        date: "08-09-2025",
        verified: true
    },
    {
        name: "Sangeeta Gopalani",
        role: "Fountainhead School",
        content: "I had the opportunity to work under Surabhi's leadership at Fountainhead School. She was always approachable, supportive, and guided us with clarity. I'm sure her career counseling will help many students and professionals achieve the same clarity.",
        rating: 5,
        date: "04-09-2025",
        verified: true
    },
    {
        name: "Neha Patwa",
        role: "Fountainhead School",
        content: "Surabhi was my team leader at Fountainhead School, and she created a positive, motivating environment to work in. She encouraged us to bring our best ideas forward and always provided constructive guidance. Her ability to mentor and lead makes her an excellent career counselor.",
        rating: 4,
        date: "03-09-2025",
        verified: true
    },
    {
        name: "Mayukhi Saini",
        role: "Medical Student",
        content: "Surabhi helped me navigate the hardest decisions in my academic life. I got to know my strengths and weakness and am now pursuing medicine. The most remarkable quality is her patience and ability to listen. Psychometric tests also I would recommend to everyone.",
        rating: 5,
        date: "03-09-2025",
        verified: true
    }
];

const Testimonials = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className={`py-24 md:py-32 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px] ${isDark ? 'bg-brand-orange/10' : 'bg-brand-orange/5'}`} />
                <div className={`absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[120px] ${isDark ? 'bg-brand-blue/10' : 'bg-brand-blue/5'}`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className={`flex items-center gap-2 px-5 py-2 rounded-full border backdrop-blur-sm
                            ${isDark ? 'bg-zinc-900/50 border-white/10' : 'bg-white/80 border-zinc-200 shadow-sm'}`}>
                            <Star size={14} className="text-brand-orange fill-brand-orange" />
                            <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                7 Reviews
                            </span>
                        </div>
                    </motion.div>

                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        What Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue">
                            Students Say.
                        </span>
                    </h2>
                    <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Real experiences from students and professionals we've helped achieve their goals.
                    </p>
                </motion.div>

                {/* Scrollable Carousel Container */}
                <div className="relative">
                    {/* Scroll Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 items-center justify-center rounded-full backdrop-blur-xl border transition-all duration-300 hover:scale-110
                            ${isDark ? 'bg-zinc-900/90 border-white/10 text-white hover:bg-zinc-800' : 'bg-white/90 border-zinc-200 text-zinc-900 hover:bg-white shadow-lg'}`}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 items-center justify-center rounded-full backdrop-blur-xl border transition-all duration-300 hover:scale-110
                            ${isDark ? 'bg-zinc-900/90 border-white/10 text-white hover:bg-zinc-800' : 'bg-white/90 border-zinc-200 text-zinc-900 hover:bg-white shadow-lg'}`}
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Gradient Fade Edges */}
                    <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r ${isDark ? 'from-zinc-950 to-transparent' : 'from-zinc-100 to-transparent'}`} />
                    <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l ${isDark ? 'from-zinc-950 to-transparent' : 'from-zinc-100 to-transparent'}`} />

                    {/* Scrollable Reviews */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="flex-shrink-0 w-[340px] md:w-[380px]"
                            >
                                <TiltCard
                                    className={`group h-full p-8 rounded-3xl backdrop-blur-xl transition-all duration-500 border relative overflow-hidden
                                        ${isDark
                                            ? 'bg-zinc-900/60 border-white/10 hover:border-brand-orange/30 shadow-xl shadow-black/20'
                                            : 'bg-white/80 border-zinc-200 hover:border-brand-orange/20 shadow-lg hover:shadow-xl'
                                        }
                                    `}
                                    tiltIntensity={6}
                                    glareOpacity={isDark ? 0.05 : 0.02}
                                >
                                    {/* Gradient Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 via-transparent to-brand-blue/0 group-hover:from-brand-orange/5 group-hover:to-brand-blue/5 transition-all duration-500 pointer-events-none" />

                                    <div className="relative h-full flex flex-col">
                                        {/* Quote Icon */}
                                        <Quote size={40} className={`mb-6 ${isDark ? 'text-brand-orange/20' : 'text-brand-orange/15'}`} strokeWidth={1.5} />

                                        {/* Rating Stars */}
                                        <div className="flex items-center gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={16}
                                                    className={i < testimonial.rating
                                                        ? 'text-brand-orange fill-brand-orange'
                                                        : isDark ? 'text-zinc-700' : 'text-zinc-300'
                                                    }
                                                    strokeWidth={1.5}
                                                />
                                            ))}
                                        </div>

                                        {/* Review Content */}
                                        <p className={`text-base leading-relaxed mb-8 flex-grow ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                                            "{testimonial.content}"
                                        </p>

                                        {/* Reviewer Info */}
                                        <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h4 className={`font-bold text-base ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                                            {testimonial.name}
                                                        </h4>
                                                        {testimonial.verified && (
                                                            <CheckCircle2 size={16} className="text-brand-blue flex-shrink-0" />
                                                        )}
                                                    </div>
                                                    <p className={`text-xs font-medium uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                        Join hundreds of satisfied students.{' '}
                        <a href="/contact" className="text-brand-orange hover:text-brand-orange-dark font-semibold underline underline-offset-2 transition-colors">
                            Start your journey today
                        </a>
                    </p>
                </motion.div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
