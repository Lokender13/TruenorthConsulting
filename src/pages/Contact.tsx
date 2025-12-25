import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';
import FloatingOrbs from '../components/ui/FloatingOrbs';
import TextReveal from '../components/ui/TextReveal';

const Contact = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact TrueNorth Consulting",
        "description": "Get in touch with TrueNorth Consulting for career guidance and education consultancy services",
        "url": "https://www.truenorthae.com/contact",
        "mainEntity": {
            "@type": "Organization",
            "name": "TrueNorth Consulting",
            "telephone": "+971501420956",
            "email": "contact@truenorthae.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
            }
        }
    };

    return (
        <div className={`min-h-screen pb-20 theme-transition ${isDark ? 'bg-zinc-950' : 'bg-slate-50'}`}>
            <SEO
                title="Contact Us - Get Free Career Counselling Consultation"
                description="Contact TrueNorth Consulting for career counselling and education guidance. Based in Dubai, UAE. Phone: +971 50 142 0956. Email: contact@truenorthae.com. WhatsApp available. Book your free consultation today."
                keywords="contact TrueNorth, career counselling Dubai, education consultant contact, book consultation, free career guidance, WhatsApp consultation, Dubai career counselor"
                canonical="/contact"
                schema={contactSchema}
            />

            {/* Background elements for depth */}
            <div className={`absolute inset-0 overflow-hidden pointer-events-none`}>
                {/* Soft background gradient for light mode */}
                {!isDark && (
                    <>
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
                    </>
                )}
            </div>

            {/* Hero Section */}
            <section className={`relative pt-40 pb-40 px-4 overflow-hidden`}>
                {/* FloatingOrbs - Subtle movement */}
                <FloatingOrbs orbs={isDark ? [
                    { size: 400, x: '15%', y: '25%', color: 'rgba(255,255,255,0.025)', delay: 0, duration: 18 },
                    { size: 300, x: '75%', y: '55%', color: 'rgba(255,255,255,0.02)', delay: 2, duration: 14 },
                ] : [
                    { size: 400, x: '10%', y: '20%', color: 'rgba(249,115,22,0.03)', delay: 0, duration: 20 }, // Subtle Orange
                    { size: 350, x: '80%', y: '60%', color: 'rgba(59,130,246,0.03)', delay: 2, duration: 15 }, // Subtle Blue
                ]} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto relative z-10 text-center"
                >
                    <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-2 rounded-full border backdrop-blur-sm ${isDark ? 'border-white/10 text-white/50 bg-white/5' : 'border-brand-orange/20 text-brand-orange bg-white/60'}`}>
                        Get In Touch
                    </span>
                    <h1 className={`text-5xl md:text-7xl font-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <TextReveal>Let's Shape</TextReveal> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue"><TextReveal delay={0.3}>Your Future.</TextReveal></span>
                    </h1>
                    <p className={`text-xl max-w-2xl mx-auto font-light leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-600'}`}>
                        Whether you have a question about our services or want to book a consultation, our team is ready to help you navigate your journey.
                    </p>
                </motion.div>
            </section>

            {/* Form Card Container */}
            <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className={`rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row backdrop-blur-xl ${isDark
                        ? 'bg-zinc-900/80 border border-white/[0.08]'
                        : 'bg-white/80 border border-white/50 shadow-brand-blue/5' // Glassmorphism in light mode too
                        }`}
                >
                    {/* Left: Contact Information Panel */}
                    <div className={`lg:w-2/5 p-10 md:p-14 relative overflow-hidden text-white`}>
                        {/* Background for left panel */}
                        <div className={`absolute inset-0 ${isDark ? 'bg-zinc-950' : 'bg-gradient-to-br from-brand-blue to-blue-700'}`}></div>

                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.1] rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-serif font-bold mb-4">Contact Info</h3>
                                <p className="text-white/70 mb-12 text-lg">We'd love to hear from you. Reach out to us directly.</p>

                                <div className="space-y-8">
                                    {[
                                        { icon: Phone, label: 'Phone / WhatsApp', value: '+971 50 142 0956', href: 'https://wa.me/971501420956' },
                                        { icon: Mail, label: 'Email', value: 'contact@truenorthae.com', href: 'mailto:contact@truenorthae.com' },
                                        { icon: MapPin, label: 'Location', value: 'Dubai, UAE' }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-start gap-5 group"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                        >
                                            <div
                                                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300"
                                            >
                                                <item.icon size={22} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white/90 hover:text-white transition-colors flex items-center gap-2 group-hover:gap-3">
                                                        {item.value} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </a>
                                                ) : (
                                                    <p className="text-lg font-medium text-white/90">{item.value}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-6">Connect With Us</p>
                                <div className="flex gap-4">
                                    {/* Social Icons instead of list for cleaner look */}
                                    <a href="https://instagram.com/surabhi_truenorth" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300" title="Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    </a>
                                    <a href="https://linkedin.com/in/surabhi-rawat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue-dark hover:text-white transition-all duration-300" title="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className={`lg:w-3/5 p-10 md:p-14 ${isDark ? 'bg-zinc-900/50' : 'bg-white/60'}`}>
                        <div className="mb-10">
                            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
                            <p className={`${isDark ? 'text-white/40' : 'text-gray-500'}`}>Fill out the form below and we'll get back to you within 24 hours.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {['First Name', 'Last Name'].map((label, i) => (
                                    <motion.div
                                        key={i}
                                        className="space-y-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                    >
                                        <label className={`text-sm font-medium ml-1 ${isDark ? 'text-white/60' : 'text-gray-700'}`}>{label}</label>
                                        <input
                                            type="text"
                                            className={`w-full px-5 py-3 rounded-xl border outline-none transition-all duration-300 ${isDark
                                                ? 'bg-zinc-800/50 border-white/10 text-white focus:border-white/30 focus:bg-zinc-800'
                                                : 'bg-white border-gray-200 text-gray-900 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 focus:shadow-lg'
                                                }`}
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <label className={`text-sm font-medium ml-1 ${isDark ? 'text-white/60' : 'text-gray-700'}`}>Email Address</label>
                                <input
                                    type="email"
                                    className={`w-full px-5 py-3 rounded-xl border outline-none transition-all duration-300 ${isDark
                                        ? 'bg-zinc-800/50 border-white/10 text-white focus:border-white/30 focus:bg-zinc-800'
                                        : 'bg-white border-gray-200 text-gray-900 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 focus:shadow-lg'
                                        }`}
                                />
                            </motion.div>

                            <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.65 }}
                            >
                                <label className={`text-sm font-medium ml-1 ${isDark ? 'text-white/60' : 'text-gray-700'}`}>Phone Number</label>
                                <input
                                    type="tel"
                                    className={`w-full px-5 py-3 rounded-xl border outline-none transition-all duration-300 ${isDark
                                        ? 'bg-zinc-800/50 border-white/10 text-white focus:border-white/30 focus:bg-zinc-800'
                                        : 'bg-white border-gray-200 text-gray-900 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 focus:shadow-lg'
                                        }`}
                                />
                            </motion.div>

                            <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <label className={`text-sm font-medium ml-1 ${isDark ? 'text-white/60' : 'text-gray-700'}`}>Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about the student's grade, curriculum, and goals..."
                                    className={`w-full px-5 py-3 rounded-xl border outline-none transition-all resize-none duration-300 ${isDark
                                        ? 'bg-zinc-800/50 border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:bg-zinc-800'
                                        : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 focus:shadow-lg'
                                        }`}
                                ></textarea>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className={`
                                    w-full py-4 rounded-xl font-bold tracking-wide uppercase text-sm
                                    transition-all duration-300 flex items-center justify-center gap-3
                                    ${isDark
                                        ? 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                                        : 'bg-gradient-to-r from-brand-orange to-red-500 text-white hover:shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:-translate-y-1'
                                    }
                                `}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Request <Send size={18} />
                            </motion.button>
                        </form>
                    </div>
                </motion.div>

                {/* Map Section (Visual representation) */}
                <div className={`mt-20 rounded-3xl overflow-hidden h-96 grayscale theme-transition ${isDark ? 'opacity-50 hover:opacity-70' : 'opacity-80 hover:opacity-100'}`}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231264.67500588636!2d55.132514164808055!3d25.07470417933939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="TrueNorth Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
