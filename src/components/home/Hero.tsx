import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useRef, useState } from 'react';
import FloatingOrbs from '../ui/FloatingOrbs';


const Hero = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Mouse spotlight effect
    // Mouse spotlight effect - Optimized with MotionValues to prevent re-renders
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the spotlight
    const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    formType: 'Hero Strategy Audit'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - 200); // Center the spotlight
        mouseY.set(e.clientY - rect.top - 200);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={`relative min-h-screen flex items-center justify-center overflow-hidden theme-transition pt-32 pb-10`}
        >
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Background Image Removed as per request */}

                {/* Multi-layered Cinematic Overlays */}
                <div className={`absolute inset-0 transition-colors duration-1000 ${isDark
                    ? 'bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent'
                    : 'bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/40 to-transparent'
                    }`}></div>

                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-${isDark ? 'zinc-950' : '[#FAFAFA]'}`}></div>

                {/* Cinematic Light Leak Pulse */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className={`absolute top-0 right-0 w-[800px] h-[800px] blur-[150px] rounded-full pointer-events-none ${isDark ? 'bg-brand-orange/10' : 'bg-brand-orange/5'}`}
                />
            </div>

            {/* Floating Orbs Background - Reduced Opacity */}
            <FloatingOrbs orbs={isDark ? [
                { size: 400, x: '5%', y: '10%', color: 'rgba(255,255,255,0.02)', delay: 0, duration: 20 },
                { size: 300, x: '85%', y: '60%', color: 'rgba(255,255,255,0.015)', delay: 2, duration: 15 },
                { size: 500, x: '50%', y: '80%', color: 'rgba(255,255,255,0.01)', delay: 4, duration: 25 },
            ] : [
                { size: 400, x: '5%', y: '10%', color: 'rgba(249, 115, 22, 0.04)', delay: 0, duration: 20 }, // Orange
                { size: 300, x: '85%', y: '60%', color: 'rgba(30, 111, 235, 0.04)', delay: 2, duration: 15 }, // Blue
                { size: 500, x: '50%', y: '80%', color: 'rgba(249, 115, 22, 0.02)', delay: 4, duration: 25 }, // Orange
            ]} />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 z-[1]">
                <div
                    className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.03]'}`}
                    style={{
                        backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(249, 115, 22, 0.05)'} 1px, transparent 1px),
                                         linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(30, 111, 235, 0.05)'} 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Mouse-following spotlight - more visible now */}
            <motion.div
                className="absolute pointer-events-none will-change-transform"
                style={{
                    x: springX,
                    y: springY,
                    width: 400,
                    height: 400,
                    background: isDark
                        ? 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
                    borderRadius: '50%',
                }}
            />

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
                                inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase
                                border ${isDark ? 'border-white/10 text-white/50' : 'border-zinc-200 text-zinc-500 bg-zinc-50'}
                            `}
                        >
                            <Sparkles size={12} className={isDark ? 'text-white/40' : 'text-brand-orange'} />
                            TrueNorth Consulting FZE
                        </motion.span>
                    </motion.div>

                    {/* Differentiator Sub-heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}
                    >
                        Career & University Admission in ( UAE & India )
                    </motion.h2>

                    {/* Headline with TextReveal and Gradient Text */}
                    <h1 className={`text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight mb-8 ${isDark ? 'text-white' : 'text-zinc-900'
                        }`}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic">
                            Navigate Your Career with Confidence.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className={`text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed transition-colors duration-500 ${isDark ? 'text-zinc-400' : 'text-zinc-600'
                            }`}
                    >
                        Success starts with the right guidance. We help you find your right career and get into your dream university with confidence.
                    </motion.p>

                    {/* CTA Buttons with glow */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/services"
                                className={`
                                    group inline-flex items-center justify-center gap-3
                                    px-8 py-4 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase
                                    transition-all duration-300
                                    ${isDark
                                        ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                                        : 'bg-zinc-900 text-white hover:bg-zinc-800'
                                    }
                                `}
                            >
                                Our Services
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
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
                            relative p-8 rounded-3xl backdrop-blur-3xl border transition-all duration-700
                            ${isDark
                                ? 'bg-zinc-900/40 border-white/5 shadow-xl'
                                : 'bg-white/80 border-white shadow-xl shadow-zinc-200/50'
                            }
                        `}
                        whileHover={{
                            y: -5,
                            boxShadow: isDark
                                ? '0 20px 40px rgba(0,0,0,0.4)'
                                : '0 20px 40px rgba(0,0,0,0.05)',
                        }}
                    >
                        <div className="relative z-10">
                            <h3 className={`text-2xl font-serif font-bold mb-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                Book Appointment
                            </h3>
                            <p className={`text-sm mb-6 transition-colors duration-500 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                Book a session to plan your future.
                            </p>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {[
                                    { name: 'name', placeholder: 'Your Name', type: 'text' },
                                    { name: 'email', placeholder: 'Email Address', type: 'email' },
                                    { name: 'phone', placeholder: 'Phone Number', type: 'tel' }
                                ].map((field, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + i * 0.1 }}
                                    >
                                        <input
                                            required
                                            name={field.name}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            value={formData[field.name as keyof typeof formData]}
                                            onChange={handleInputChange}
                                            className={`
                                                w-full px-5 py-3 rounded-xl outline-none transition-all duration-300 font-medium text-sm
                                                ${isDark
                                                    ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:bg-white/10'
                                                    : 'bg-white border border-zinc-100 text-zinc-900 placeholder:text-zinc-400 focus:border-brand-orange/50 focus:shadow-sm shadow-inner'
                                                }
                                            `}
                                        />
                                    </motion.div>
                                ))}
                                <motion.button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className={`
                                        w-full py-4 rounded-xl font-bold text-[10px] tracking-[0.2em] uppercase
                                        transition-all duration-300
                                        ${status === 'success' ? 'bg-green-500 text-white' : (isDark ? 'bg-white text-zinc-950 hover:bg-zinc-100' : 'bg-brand-orange text-white hover:opacity-90')}
                                        ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
                                        shadow-lg
                                    `}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent Successfully' : status === 'error' ? 'Retry Action' : 'Book Free Session'}
                                </motion.button>
                                {status === 'success' && <p className="text-center text-[10px] text-green-500 font-bold uppercase tracking-widest mt-2 animate-pulse">Session Booked!</p>}
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
