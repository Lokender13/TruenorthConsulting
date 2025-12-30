import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useRef, useState } from 'react';
import FloatingOrbs from '../ui/FloatingOrbs';
import TextReveal from '../ui/TextReveal';

const Hero = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Mouse spotlight effect
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={`relative min-h-screen flex items-center justify-center overflow-hidden theme-transition pt-32 pb-10`}
        >
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.1],
                        rotate: [0, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'linear'
                    }}
                    className="w-full h-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1498243639351-a4329a28853d?auto=format&fit=crop&w=2000&q=100"
                        alt="Elite Academic Architecture"
                        className="w-full h-full object-cover grayscale-[0.3] brightness-[0.7]"
                    />
                </motion.div>

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
                    <h1 className={`text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-[0.9] tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-zinc-900'
                        }`}>
                        <TextReveal>Architect Your</TextReveal>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue italic font-light">
                            Global Legacy.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className={`text-xl lg:text-2xl font-light max-w-xl mb-12 leading-relaxed transition-colors duration-500 ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'
                            }`}
                    >
                        Success isn't accidental—it's engineered. We provide the strategic DNA and elite mentorship required to conquer the world's most prestigious institutions.
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
                                to="/contact"
                                className={`
                                    group inline-flex items-center justify-center gap-4
                                    px-10 py-5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase
                                    transition-all duration-300
                                    ${isDark
                                        ? 'bg-white text-zinc-950 hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]'
                                        : 'bg-zinc-900 text-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]'
                                    }
                                `}
                            >
                                Start Your Journey
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/services"
                                className={`
                                    inline-flex items-center justify-center gap-4
                                    px-10 py-5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase
                                    transition-all duration-300 border
                                    ${isDark
                                        ? 'border-white/10 text-white hover:bg-white/5'
                                        : 'bg-white border-white text-zinc-900 hover:bg-zinc-50 shadow-xl shadow-black/5'
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
                            relative p-10 rounded-[3rem] backdrop-blur-3xl border transition-all duration-700
                            ${isDark
                                ? 'bg-zinc-900/40 border-white/5 shadow-2xl shadow-black/50'
                                : 'bg-white/80 border-white shadow-[0_20px_50px_rgba(249,115,22,0.06)]'
                            }
                        `}
                        whileHover={{
                            y: -10,
                            boxShadow: isDark
                                ? '0 30px 60px rgba(0,0,0,0.6)'
                                : '0 30px 60px rgba(249, 115, 22, 0.12)',
                        }}
                    >
                        {/* Elegant glow */}
                        <div className={`absolute -inset-px rounded-[3rem] bg-gradient-to-b ${isDark ? 'from-white/10' : 'from-brand-orange/20'
                            } to-transparent pointer-events-none opacity-50`}></div>

                        <div className="relative z-10">
                            <h3 className={`text-3xl font-serif font-bold mb-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                Strategy Audit
                            </h3>
                            <p className={`text-sm mb-8 transition-colors duration-500 ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                                Get your personalized 1:1 Admission Roadmap session.
                            </p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
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
                                                w-full px-6 py-4 rounded-2xl outline-none transition-all duration-300 font-medium text-sm
                                                ${isDark
                                                    ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:bg-white/10'
                                                    : 'bg-white border border-zinc-100 text-zinc-900 placeholder:text-zinc-400 focus:border-brand-orange focus:shadow-[0_0_20px_rgba(249,115,22,0.1)] shadow-inner'
                                                }
                                            `}
                                        />
                                    </motion.div>
                                ))}
                                <motion.button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className={`
                                        w-full py-5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase
                                        transition-all duration-300
                                        ${status === 'success' ? 'bg-green-500 text-white' : (isDark ? 'bg-white text-zinc-950 hover:bg-zinc-100' : 'bg-brand-orange text-white hover:opacity-90')}
                                        ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
                                        shadow-xl
                                    `}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent Successfully' : status === 'error' ? 'Retry Action' : 'Claim My Roadmap'}
                                </motion.button>
                                {status === 'success' && <p className="text-center text-[10px] text-green-500 font-bold uppercase tracking-widest mt-2 animate-pulse">Roadmap session locked in!</p>}
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
