import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Clock, ArrowRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';
import TiltCard from '../components/ui/TiltCard';
import TextReveal from '../components/ui/TextReveal';

// FAQ Content
const faqs = [
    {
        question: "What age students do you work with?",
        answer: "We help students from Grade 8 to postgraduate level."
    },
    {
        question: "Do you offer online consultations?",
        answer: "Yes, we do online sessions via Zoom or Google Meet."
    },
    {
        question: "How are you different from other agents?",
        answer: "We work for you, not the universities. We help you apply anywhere."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick, isDark }: { question: string, answer: string, isOpen: boolean, onClick: () => void, isDark: boolean }) => {
    return (
        <motion.div
            initial={false}
            className={`border-b ${isDark ? 'border-white/10' : 'border-gray-100'}`}
        >
            <button
                onClick={onClick}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Collapse question" : "Expand question"}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-brand-orange' : (isDark ? 'text-white' : 'text-gray-900')}`}>
                    {question}
                </span>
                <span className={`relative flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-brand-orange text-white' : (isDark ? 'bg-white/10 text-white/60' : 'bg-gray-100 text-gray-400')}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className={`pb-6 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const Contact = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        requirements: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                body: JSON.stringify({ ...formData, formType: 'Contact Page' })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', phone: '', requirements: '' });
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

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact TrueNorth Consulting",
        "url": "https://www.truenorthae.com/contact",
        "telephone": "+971501420956",
        "email": "contact@truenorthae.com"
    };

    return (
        <div className={`min-h-screen theme-transition relative overflow-hidden ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-900'}`}>
            <SEO
                title="Contact TrueNorth | Best Education Consultants Dubai & India"
                description="Contact TrueNorth Consulting for top-rated career counselling and study abroad guidance in Dubai. Book your appointment today."
                keywords="contact career counsellor dubai, education consultants contact number, study abroad enquiry dubai, career guidance appointment"
                canonical="/contact"
                schema={contactSchema}
            />

            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] rounded-full blur-[150px] transition-colors duration-1000
                    ${isDark ? 'bg-brand-blue/10' : 'bg-brand-blue/[0.08]'}`} />
                <div className={`absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] rounded-full blur-[150px] transition-colors duration-1000
                    ${isDark ? 'bg-brand-orange/10' : 'bg-brand-orange/[0.08]'}`} />
            </div>

            {/* Grid Pattern */}
            <div
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
                style={{
                    backgroundImage: `linear-gradient(to right, ${isDark ? 'white' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px), 
                                      linear-gradient(to bottom, ${isDark ? 'white' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Header / Hero Section - Brand Themed */}
            <section className={`relative pt-32 pb-48 px-4 overflow-hidden`}>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-6 block">Get in Touch</span>
                            <h1 className={`text-4xl md:text-6xl font-serif font-bold leading-[0.9] tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                <TextReveal>Let's Talk.</TextReveal>
                            </h1>
                            <p className={`text-lg lg:text-xl font-light max-w-xl transition-colors duration-500 ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>
                                We are here to answer your questions and help you plan your future.
                            </p>
                        </motion.div>

                        {/* Hero decorative graphic */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:flex justify-end relative"
                        >
                            <TiltCard
                                className={`
                                    relative z-10 p-10 rounded-[3rem] backdrop-blur-xl border transition-all duration-700 max-w-md w-full
                                    ${isDark ? 'bg-zinc-950/80 border-white/10 shadow-2xl shadow-black/50' : 'bg-white border-zinc-100 shadow-[0_20px_50px_rgba(249,115,22,0.06)]'}
                                `}
                                tiltIntensity={5}
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-lg shadow-brand-orange/20">
                                        <MessageSquare size={28} />
                                    </div>
                                    <div>
                                        <p className={`text-xs font-black tracking-widest uppercase mb-1 ${isDark ? 'text-white/40' : 'text-zinc-400'}`}>Status</p>
                                        <p className={`font-serif font-bold text-xl flex items-center gap-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                                            Admissions Open
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className={`h-2.5 w-3/4 rounded-full ${isDark ? 'bg-white/5' : 'bg-zinc-100 shadow-inner'}`}></div>
                                    <div className={`h-2.5 w-1/2 rounded-full ${isDark ? 'bg-white/5' : 'bg-zinc-100 shadow-inner'}`}></div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Overlap Section */}
            <section className="relative z-20 px-4 -mt-32 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Contact Form - Main Focus */}
                        <motion.div
                            className="lg:col-span-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <TiltCard
                                className={`p-10 md:p-14 rounded-[3.5rem] backdrop-blur-xl border transition-all duration-700
                                ${isDark ? 'bg-zinc-950/80 border-white/10 shadow-2xl shadow-black/50' : 'bg-white border-zinc-100 shadow-[0_30px_60px_rgba(0,0,0,0.04)]'}`}
                                tiltIntensity={2}
                            >
                                <h3 className={`text-4xl font-serif font-bold mb-10 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Send a Message</h3>
                                <form className="space-y-10" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="group relative">
                                            <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors ${isDark ? 'text-zinc-600 group-focus-within:text-brand-orange' : 'text-zinc-400 group-focus-within:text-brand-orange'}`}>First Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all font-serif font-bold text-xl ${isDark ? 'border-white/5 text-white focus:border-brand-orange placeholder:text-zinc-800' : 'border-zinc-100 text-zinc-900 focus:border-brand-orange'}`}
                                                placeholder="Jane"
                                            />
                                        </div>
                                        <div className="group relative">
                                            <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors ${isDark ? 'text-zinc-600 group-focus-within:text-brand-orange' : 'text-zinc-400 group-focus-within:text-brand-orange'}`}>Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all font-serif font-bold text-xl ${isDark ? 'border-white/5 text-white focus:border-brand-orange placeholder:text-zinc-800' : 'border-zinc-100 text-zinc-900 focus:border-brand-orange'}`}
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="group relative">
                                            <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors ${isDark ? 'text-zinc-600 group-focus-within:text-brand-orange' : 'text-zinc-400 group-focus-within:text-brand-orange'}`}>Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all font-serif font-bold text-xl ${isDark ? 'border-white/5 text-white focus:border-brand-orange placeholder:text-zinc-800' : 'border-zinc-100 text-zinc-900 focus:border-brand-orange'}`}
                                                placeholder="jane@example.com"
                                            />
                                        </div>
                                        <div className="group relative">
                                            <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors ${isDark ? 'text-zinc-600 group-focus-within:text-brand-orange' : 'text-zinc-400 group-focus-within:text-brand-orange'}`}>Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all font-serif font-bold text-xl ${isDark ? 'border-white/5 text-white focus:border-brand-orange placeholder:text-zinc-800' : 'border-zinc-100 text-zinc-900 focus:border-brand-orange'}`}
                                                placeholder="+971 50..."
                                            />
                                        </div>
                                    </div>

                                    <div className="group relative">
                                        <label className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-3 transition-colors ${isDark ? 'text-zinc-600 group-focus-within:text-brand-orange' : 'text-zinc-400 group-focus-within:text-brand-orange'}`}>How can we help?</label>
                                        <textarea
                                            name="requirements"
                                            value={formData.requirements}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className={`w-full bg-transparent border-b-2 py-4 outline-none transition-all font-serif font-bold text-xl resize-none ${isDark ? 'border-white/5 text-white focus:border-brand-orange placeholder:text-zinc-800' : 'border-zinc-100 text-zinc-900 focus:border-brand-orange'}`}
                                            placeholder="Tell us about your goals..."
                                        ></textarea>
                                    </div>

                                    <div className="pt-6">
                                        <motion.button
                                            disabled={status === 'loading'}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`
                                                px-12 py-5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase shadow-2xl transition-all flex items-center gap-4
                                                ${status === 'success' ? 'bg-green-500 text-white' : 'bg-brand-orange text-white shadow-brand-orange/20'}
                                                ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
                                            `}
                                        >
                                            {status === 'loading' ? 'Processing...' : status === 'success' ? 'Message Sent' : status === 'error' ? 'Retry Sending' : 'Send Message'}
                                            {status === 'idle' && <ArrowRight size={18} />}
                                        </motion.button>

                                        {status === 'success' && (
                                            <p className="mt-4 text-green-500 font-serif font-bold italic animate-pulse">We will get back to you soon.</p>
                                        )}
                                        {status === 'error' && (
                                            <p className="mt-4 text-red-500 font-serif font-bold italic">Something went wrong. Please try again.</p>
                                        )}
                                    </div>
                                </form>
                            </TiltCard>
                        </motion.div>

                        {/* Sidebar Info */}
                        <motion.div
                            className="lg:col-span-4 space-y-10"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            {/* Quick Contact Card */}
                            <TiltCard
                                className={`p-10 rounded-[3rem] backdrop-blur-xl border transition-all duration-700
                                ${isDark ? 'bg-zinc-900/60 border-white/10 shadow-3xl shadow-black/80' : 'bg-white border-white shadow-2xl shadow-brand-orange/5'}`}
                                tiltIntensity={5}
                            >
                                <h4 className={`text-2xl font-serif font-bold mb-8 flex items-center gap-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                    <Phone size={24} className="text-brand-orange" /> Contact
                                </h4>
                                <ul className="space-y-8">
                                    <li>
                                        <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Phone</p>
                                        <a href="https://wa.me/971501420956" className={`text-xl font-serif font-bold hover:text-brand-orange transition-colors block ${isDark ? 'text-white' : 'text-zinc-900'}`}>+971 50 142 0956</a>
                                    </li>
                                    <li>
                                        <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Email</p>
                                        <a href="mailto:contact@truenorthae.com" className={`text-xl font-serif font-bold hover:text-brand-orange transition-colors block ${isDark ? 'text-white' : 'text-zinc-900'}`}>contact@truenorthae.com</a>
                                    </li>
                                    <li>
                                        <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>Locations</p>
                                        <p className={`text-lg font-serif font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                            Dubai, UAE (Headquarters)<br />
                                            <span className={`text-base ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>Serving students in India & Globally</span>
                                        </p>
                                    </li>
                                </ul>
                            </TiltCard>

                            {/* Office Hours */}
                            <div className={`p-10 rounded-[3rem] border backdrop-blur-xl transition-all duration-500
                                ${isDark ? 'border-white/5 bg-zinc-900/40 text-white' : 'border-zinc-100 bg-white shadow-sm'}`}>
                                <h4 className={`text-xl font-serif font-bold mb-6 flex items-center gap-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                    <Clock size={20} className="text-brand-orange" /> Schedule
                                </h4>
                                <div className="space-y-4">
                                    {[
                                        { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                                        { day: "Saturday", time: "10:00 AM - 2:00 PM" },
                                        { day: "Sunday", time: "Strictly Closed", accent: true }
                                    ].map((row, i) => (
                                        <div key={i} className={`flex justify-between items-center text-sm font-medium ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                            <span>{row.day}</span>
                                            <span className={row.accent ? 'text-brand-orange' : (isDark ? 'text-zinc-300' : 'text-zinc-900')}>{row.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ Section - "Something Else" */}
                    <motion.div
                        className="mt-32 max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-16">
                            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-orange mb-4 block">Common Questions</span>
                            <h2 className={`text-4xl md:text-6xl font-serif font-bold tracking-tighter ${isDark ? 'text-white' : 'text-zinc-900'}`}>Frequently Asked <br /><span className="italic font-light text-zinc-400">Questions.</span></h2>
                        </div>

                        <TiltCard
                            className={`rounded-[3rem] p-10 lg:p-20 backdrop-blur-xl border transition-all duration-700
                            ${isDark ? 'bg-zinc-900/40 border-white/5 shadow-2xl shadow-black/50' : 'bg-white border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)]'}`}
                            tiltIntensity={2}
                        >
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openFAQ === index}
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    isDark={isDark}
                                />
                            ))}
                            <div className="mt-12 pt-12 text-center border-t border-dashed border-zinc-200/20">
                                <p className={`text-lg font-light mb-6 ${isDark ? 'text-zinc-500' : 'text-zinc-500 font-medium'}`}>Have complex queries?</p>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    href="https://wa.me/971501420956"
                                    className="inline-flex items-center gap-4 text-brand-orange font-black text-[10px] tracking-[0.2em] uppercase hover:underline"
                                >
                                    Instant Support <ArrowRight size={16} />
                                </motion.a>
                            </div>
                        </TiltCard>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
