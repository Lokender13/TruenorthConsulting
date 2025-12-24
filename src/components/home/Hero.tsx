import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useRef, useState } from 'react';
import FloatingOrbs from '../ui/FloatingOrbs';
import TextReveal from '../ui/TextReveal';
import AnimatedGradientText from '../ui/AnimatedGradientText';

const Hero = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Mouse spotlight effect
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={`relative min-h-screen flex items-center justify-center overflow-hidden theme-transition`}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80"
                    alt="University Campus Architecture"
                    className="w-full h-full object-cover"
                />
                {/* Overlay - adjusted for better image visibility while maintaining text readability */}
                <div className={`absolute inset-0 ${isDark
                    ? 'bg-gradient-to-r from-black/90 via-black/60 to-transparent'
                    : 'bg-gradient-to-r from-white/80 via-white/40 to-transparent'
                    }`}></div>
            </div>

            {/* Floating Orbs Background */}
            <FloatingOrbs orbs={isDark ? [
                { size: 400, x: '5%', y: '10%', color: 'rgba(255,255,255,0.03)', delay: 0, duration: 20 },
                { size: 300, x: '85%', y: '60%', color: 'rgba(255,255,255,0.025)', delay: 2, duration: 15 },
                { size: 500, x: '50%', y: '80%', color: 'rgba(255,255,255,0.02)', delay: 4, duration: 25 },
                { size: 200, x: '15%', y: '70%', color: 'rgba(255,255,255,0.035)', delay: 1, duration: 12 },
                { size: 350, x: '70%', y: '15%', color: 'rgba(255,255,255,0.02)', delay: 3, duration: 18 },
            ] : [
                { size: 400, x: '5%', y: '10%', color: 'rgba(249, 115, 22, 0.08)', delay: 0, duration: 20 }, // Orange
                { size: 300, x: '85%', y: '60%', color: 'rgba(30, 111, 235, 0.08)', delay: 2, duration: 15 }, // Blue
                { size: 500, x: '50%', y: '80%', color: 'rgba(249, 115, 22, 0.05)', delay: 4, duration: 25 }, // Orange
                { size: 200, x: '15%', y: '70%', color: 'rgba(30, 111, 235, 0.06)', delay: 1, duration: 12 }, // Blue
                { size: 350, x: '70%', y: '15%', color: 'rgba(249, 115, 22, 0.04)', delay: 3, duration: 18 }, // Orange
            ]} />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 z-[1]">
                <div
                    className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.04]'}`}
                    style={{
                        backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(249, 115, 22, 0.05)'} 1px, transparent 1px),
                                         linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(30, 111, 235, 0.05)'} 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Mouse-following spotlight - more visible now */}
            <motion.div
                className="absolute pointer-events-none"
                animate={{
                    left: mousePosition.x - 200,
                    top: mousePosition.y - 200,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                style={{
                    width: 400,
                    height: 400,
                    background: isDark
                        ? 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                }}
            />

            {/* Animated Lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className={`absolute h-px w-[200%] top-1/4 -left-1/2 ${isDark ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'bg-gradient-to-r from-transparent via-orange-500/20 to-transparent'}`}
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className={`absolute h-px w-[200%] top-3/4 -left-1/2 ${isDark ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-500/20 to-transparent'}`}
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 pt-20">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                    {/* Badge with pulse */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 mb-8"
                    >
                        <motion.span
                            className={`
                                inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase
                                border ${isDark ? 'border-white/10 text-white/60' : 'border-orange-200 text-orange-600 bg-orange-50/50'}
                            `}
                            animate={{ boxShadow: isDark ? ['0 0 0 0 rgba(255,255,255,0)', '0 0 20px 5px rgba(255,255,255,0.1)', '0 0 0 0 rgba(255,255,255,0)'] : ['0 0 0 0 rgba(249,115,22,0)', '0 0 20px 5px rgba(249,115,22,0.1)', '0 0 0 0 rgba(249,115,22,0)'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Sparkles size={12} className={isDark ? 'text-white/40' : 'text-orange-500'} />
                            Premier Education Consultancy
                        </motion.span>
                    </motion.div>

                    {/* Headline with TextReveal and Gradient Text */}
                    <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold leading-[0.95] mb-8 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        <TextReveal>Navigate Your</TextReveal>
                        <br />
                        <AnimatedGradientText
                            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold"
                            colors={isDark
                                ? ['#ffffff', '#a0a0a0', '#ffffff', '#606060', '#ffffff']
                                : ['#1f2937', '#F97316', '#1f2937', '#1E6FEB', '#1f2937']
                            }
                        >
                            Future
                        </AnimatedGradientText>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className={`text-lg lg:text-xl max-w-xl mb-10 leading-relaxed font-medium ${isDark ? 'text-white/60' : 'text-gray-900 drop-shadow-sm'
                            }`}
                    >
                        Transform your academic journey with expert career counselling,
                        global university admissions, and personalized guidance.
                    </motion.p>

                    {/* CTA Buttons with glow */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                to="/contact"
                                className={`
                                    group inline-flex items-center justify-center gap-3
                                    px-8 py-4 rounded-full font-medium
                                    transition-all duration-300
                                    ${isDark
                                        ? 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]'
                                        : 'bg-brand-orange text-white hover:bg-brand-orange-dark hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]'
                                    }
                                `}
                            >
                                Get Started
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                to="/services"
                                className={`
                                    inline-flex items-center justify-center gap-2
                                    px-8 py-4 rounded-full font-medium
                                    transition-all duration-300 border
                                    ${isDark
                                        ? 'border-white/20 text-white/70 hover:bg-white/5 hover:border-white/40'
                                        : 'border-brand-blue/30 text-brand-blue hover:bg-brand-blue/5 hover:border-brand-blue'
                                    }
                                `}
                            >
                                Explore Services
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right - Form Card with glow effect */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotateY: -10 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex-1 w-full max-w-md perspective-[1000px]"
                >
                    <motion.div
                        className={`
                            relative p-8 rounded-3xl backdrop-blur-xl
                            ${isDark
                                ? 'bg-zinc-900/50 border border-white/[0.08]'
                                : 'bg-white/80 border border-brand-orange/10'
                            }
                        `}
                        whileHover={{
                            boxShadow: isDark
                                ? '0 20px 60px rgba(255,255,255,0.1)'
                                : '0 20px 60px rgba(249, 115, 22, 0.15)',
                            y: -5
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Subtle gradient glow */}
                        <div className={`absolute -inset-px rounded-3xl bg-gradient-to-b ${isDark ? 'from-white/10 to-transparent' : 'from-brand-orange/20 to-transparent'
                            } pointer-events-none opacity-50`}></div>

                        <div className="relative z-10">
                            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Free Consultation
                            </h3>
                            <p className={`text-sm mb-6 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                                Get personalized career guidance from our experts
                            </p>

                            <form className="space-y-4">
                                {['Your Name', 'Email Address', 'Phone Number'].map((placeholder, i) => (
                                    <motion.input
                                        key={i}
                                        type={placeholder === 'Email Address' ? 'email' : placeholder === 'Phone Number' ? 'tel' : 'text'}
                                        placeholder={placeholder}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + i * 0.1 }}
                                        className={`
                                            w-full px-4 py-3 rounded-xl outline-none transition-all
                                            ${isDark
                                                ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-white/30 focus:bg-white/10'
                                                : 'bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand-orange/50 focus:shadow-[0_0_15px_rgba(249,115,22,0.1)]'
                                            }
                                        `}
                                    />
                                ))}
                                <motion.button
                                    type="submit"
                                    className={`
                                        w-full py-4 rounded-xl font-semibold
                                        transition-all duration-300
                                        ${isDark
                                            ? 'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                                            : 'bg-brand-blue text-white hover:bg-brand-blue-dark hover:shadow-[0_0_30px_rgba(30,111,235,0.3)]'
                                        }
                                    `}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Request Callback
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${isDark ? 'border-white/20' : 'border-gray-300'
                        }`}
                >
                    <motion.div
                        className={`w-1 h-2 rounded-full ${isDark ? 'bg-white/40' : 'bg-gray-400'}`}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
