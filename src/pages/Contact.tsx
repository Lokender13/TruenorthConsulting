import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
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
        <div className={`min-h-screen pb-20 theme-transition ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
            <SEO
                title="Contact Us - Get Free Career Counselling Consultation"
                description="Contact TrueNorth Consulting for career counselling and education guidance. Based in Dubai, UAE. Phone: +971 50 142 0956. Email: contact@truenorthae.com. WhatsApp available. Book your free consultation today."
                keywords="contact TrueNorth, career counselling Dubai, education consultant contact, book consultation, free career guidance, WhatsApp consultation, Dubai career counselor"
                canonical="/contact"
                schema={contactSchema}
            />

            {/* Hero Section */}
            <section className={`relative pt-40 pb-48 px-4 overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
                {/* FloatingOrbs */}
                <FloatingOrbs orbs={isDark ? [
                    { size: 400, x: '15%', y: '25%', color: 'rgba(255,255,255,0.025)', delay: 0, duration: 18 },
                    { size: 300, x: '75%', y: '55%', color: 'rgba(255,255,255,0.02)', delay: 2, duration: 14 },
                    { size: 200, x: '45%', y: '75%', color: 'rgba(255,255,255,0.03)', delay: 1, duration: 16 },
                ] : [
                    { size: 400, x: '15%', y: '25%', color: 'rgba(249,115,22,0.05)', delay: 0, duration: 18 },
                    { size: 300, x: '75%', y: '55%', color: 'rgba(30,111,235,0.05)', delay: 2, duration: 14 },
                    { size: 200, x: '45%', y: '75%', color: 'rgba(249,115,22,0.03)', delay: 1, duration: 16 },
                ]} />

                {/* Pattern */}
                <div className="absolute inset-0">
                    <div
                        className={`absolute inset-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.03]'}`}
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.1)'} 1px, transparent 0)`,
                            backgroundSize: '32px 32px'
                        }}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto relative z-10 text-center"
                >
                    <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-6 px-4 py-2 rounded-full border ${isDark ? 'border-white/10 text-white/50' : 'border-brand-orange/30 text-brand-orange'}`}>
                        Get In Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                        <TextReveal>Let's Shape</TextReveal> <span className={isDark ? 'text-white/50' : 'text-brand-blue'}><TextReveal delay={0.3}>Your Future.</TextReveal></span>
                    </h1>
                    <p className={`text-xl max-w-2xl mx-auto font-light ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                        Whether you have a question about our services or want to book a consultation, our team is ready to help.
                    </p>
                </motion.div>
            </section>

            {/* Form Card */}
            <div className="max-w-6xl mx-auto px-4 -mt-32 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className={`rounded-3xl overflow-hidden flex flex-col lg:flex-row ${isDark
                        ? 'bg-zinc-900 border border-white/[0.08]'
                        : 'bg-white border border-brand-orange/20 shadow-2xl shadow-brand-orange/5'
                        }`}
                    whileHover={{ boxShadow: isDark ? '0 25px 80px rgba(255,255,255,0.08)' : '0 25px 80px rgba(249,115,22,0.1)' }}
                >
                    {/* Left: Contact Information */}
                    <div className={`lg:w-2/5 p-10 md:p-14 relative overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-brand-blue'} text-white`}>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.05] rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif font-bold mb-2">Contact Information</h3>
                            <p className="text-white/60 mb-10">Reach out to us directly.</p>

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
                                        <motion.div
                                            className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <item.icon size={22} />
                                        </motion.div>
                                        <div>
                                            <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white/90 hover:text-white transition-colors">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-lg font-medium text-white/90">{item.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mt-10 pt-8 border-t border-white/10">
                                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Connect With Us</p>
                                <div className="space-y-3">
                                    <a href="https://instagram.com/surabhi_truenorth" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                                        <span className="text-sm">Instagram:</span>
                                        <span className="font-medium">@surabhi_truenorth</span>
                                    </a>
                                    <a href="https://linkedin.com/in/surabhi-rawat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                                        <span className="text-sm">LinkedIn:</span>
                                        <span className="font-medium">Surabhi Rawat</span>
                                    </a>
                                    <a href="https://www.truenorthae.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                                        <span className="text-sm">Website:</span>
                                        <span className="font-medium">www.truenorthae.com</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-12 p-5 bg-white/[0.02] rounded-xl border border-white/5">
                                <div className="flex items-center gap-3 mb-3 text-white/40">
                                    <Clock size={18} />
                                    <span className="font-semibold text-sm">Office Hours</span>
                                </div>
                                <ul className="space-y-2 text-sm text-white/30">
                                    <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 6:00 PM</span></li>
                                    <li className="flex justify-between"><span>Sat</span> <span>10:00 AM - 2:00 PM</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className={`lg:w-3/5 p-10 md:p-14 ${isDark ? 'bg-zinc-900' : 'bg-white'}`}>
                        <div className="flex items-center gap-3 mb-8">
                            <motion.div
                                className={`p-3 rounded-xl ${isDark ? 'bg-white/[0.05]' : 'bg-gray-100'}`}
                                whileHover={{ scale: 1.1 }}
                            >
                                <MessageSquare size={22} className={isDark ? 'text-white/60' : 'text-gray-500'} />
                            </motion.div>
                            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
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
                                        <label className={`text-sm font-medium ml-1 ${isDark ? 'text-white/50' : 'text-gray-600'}`}>{label}</label>
                                        <input
                                            type="text"
                                            placeholder={label === 'First Name' ? 'John' : 'Doe'}
                                            className={`w-full px-5 py-4 rounded-xl border outline-none transition-all ${isDark
                                                ? 'bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:bg-white/[0.05]'
                                                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
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
                                <label className={`text-sm font-medium ml-1 ${isDark ? 'text-white/50' : 'text-gray-600'}`}>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className={`w-full px-5 py-4 rounded-xl border outline-none transition-all ${isDark
                                        ? 'bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:bg-white/[0.05]'
                                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                                        }`}
                                />
                            </motion.div>

                            <motion.div
                                className="space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <label className={`text-sm font-medium ml-1 ${isDark ? 'text-white/50' : 'text-gray-600'}`}>Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your goals..."
                                    className={`w-full px-5 py-4 rounded-xl border outline-none transition-all resize-none ${isDark
                                        ? 'bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:bg-white/[0.05]'
                                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                                        }`}
                                ></textarea>
                            </motion.div>

                            <motion.button
                                type="submit"
                                className={`
                                    w-full py-4 rounded-xl font-semibold
                                    transition-all duration-300 flex items-center justify-center gap-3 text-lg
                                    ${isDark
                                        ? 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                                        : 'bg-brand-orange text-white hover:bg-brand-orange-dark hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]'
                                    }
                                `}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Request <Send size={20} />
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
