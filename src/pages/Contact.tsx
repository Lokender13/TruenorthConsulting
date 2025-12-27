import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Clock, ArrowRight, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';

// FAQ Content
const faqs = [
    {
        question: "What age students do you work with?",
        answer: "We work with students from Grade 8 onwards for subject selection, profile building, and early career planning, all the way up to postgraduate university admissions."
    },
    {
        question: "Do you offer online consultations?",
        answer: "Yes! We work with students globally. All our counseling sessions can be conducted via Zoom or Google Meet with the same effectiveness as in-person meetings."
    },
    {
        question: "How are you different from other agents?",
        answer: "We are not 'agents' who get commissions from universities. We are independent educational consultants who work exclusively for the student's best interest, helping you apply to any university worldwide."
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
                className="w-full py-6 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
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

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact TrueNorth Consulting",
        "url": "https://www.truenorthae.com/contact",
        "telephone": "+971501420956",
        "email": "contact@truenorthae.com"
    };

    return (
        <div className={`min-h-screen theme-transition ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
            <SEO
                title="Contact TrueNorth | Expert Career Counselling Dubai"
                description="Get in touch for premier career counselling and university admissions guidance. Located in Dubai, serving globally."
                canonical="/contact"
                schema={contactSchema}
            />

            {/* Header / Hero Section - Brand Themed */}
            <section className={`relative pt-32 pb-64 px-4 overflow-hidden ${isDark ? 'bg-black' : 'bg-brand-blue'}`}>
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">
                                Contact Us
                            </span>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                                Let's Start a <br />
                                <span className={isDark ? 'text-brand-orange' : 'text-brand-orange'}>Conversation.</span>
                            </h1>
                            <p className="text-xl text-white/70 max-w-lg leading-relaxed font-light">
                                Whether you're a parent, student, or school representative, we're here to answer your questions and guide you forward.
                            </p>
                        </motion.div>

                        {/* Hero decorative graphic */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:flex justify-end relative"
                        >
                            <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl max-w-md w-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-white">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium opacity-60">Status</p>
                                        <p className="text-white font-semibold flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                            Accepting New Students
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                                    <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
                                </div>
                            </div>
                            {/* Orbit rings behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"></div>
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
                            <div className={`p-10 md:p-14 rounded-3xl shadow-2xl ${isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-gray-100'}`}>
                                <h3 className={`text-3xl font-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send us a Message</h3>
                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group relative">
                                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${isDark ? 'text-white/40 group-focus-within:text-brand-orange' : 'text-gray-400 group-focus-within:text-brand-orange'}`}>First Name</label>
                                            <input type="text" className={`w-full bg-transparent border-b-2 py-2 outline-none transition-colors font-medium text-lg ${isDark ? 'border-white/10 text-white focus:border-brand-orange placeholder:text-white/10' : 'border-gray-200 text-gray-900 focus:border-brand-orange'}`} placeholder="Jane" />
                                        </div>
                                        <div className="group relative">
                                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${isDark ? 'text-white/40 group-focus-within:text-brand-orange' : 'text-gray-400 group-focus-within:text-brand-orange'}`}>Last Name</label>
                                            <input type="text" className={`w-full bg-transparent border-b-2 py-2 outline-none transition-colors font-medium text-lg ${isDark ? 'border-white/10 text-white focus:border-brand-orange placeholder:text-white/10' : 'border-gray-200 text-gray-900 focus:border-brand-orange'}`} placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group relative">
                                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${isDark ? 'text-white/40 group-focus-within:text-brand-orange' : 'text-gray-400 group-focus-within:text-brand-orange'}`}>Email Address</label>
                                            <input type="email" className={`w-full bg-transparent border-b-2 py-2 outline-none transition-colors font-medium text-lg ${isDark ? 'border-white/10 text-white focus:border-brand-orange placeholder:text-white/10' : 'border-gray-200 text-gray-900 focus:border-brand-orange'}`} placeholder="jane@example.com" />
                                        </div>
                                        <div className="group relative">
                                            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${isDark ? 'text-white/40 group-focus-within:text-brand-orange' : 'text-gray-400 group-focus-within:text-brand-orange'}`}>Phone Number</label>
                                            <input type="tel" className={`w-full bg-transparent border-b-2 py-2 outline-none transition-colors font-medium text-lg ${isDark ? 'border-white/10 text-white focus:border-brand-orange placeholder:text-white/10' : 'border-gray-200 text-gray-900 focus:border-brand-orange'}`} placeholder="+971 50..." />
                                        </div>
                                    </div>

                                    <div className="group relative">
                                        <label className={`block text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${isDark ? 'text-white/40 group-focus-within:text-brand-orange' : 'text-gray-400 group-focus-within:text-brand-orange'}`}>How can we help?</label>
                                        <textarea rows={4} className={`w-full bg-transparent border-b-2 py-2 outline-none transition-colors font-medium text-lg resize-none ${isDark ? 'border-white/10 text-white focus:border-brand-orange placeholder:text-white/10' : 'border-gray-200 text-gray-900 focus:border-brand-orange'}`} placeholder="Tell us about your academic goals..."></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button className="bg-brand-orange text-white px-10 py-4 rounded-full font-bold tracking-wide hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-3">
                                            Send Message <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </motion.div>

                        {/* Sidebar Info */}
                        <motion.div
                            className="lg:col-span-4 space-y-6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            {/* Quick Contact Card */}
                            <div className={`p-8 rounded-3xl ${isDark ? 'bg-zinc-800' : 'bg-brand-blue-dark text-white'} shadow-xl`}>
                                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Phone size={20} className="text-brand-orange" /> Quick Connect
                                </h4>
                                <ul className="space-y-6">
                                    <li>
                                        <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Call / WhatsApp</p>
                                        <a href="https://wa.me/971501420956" className="text-xl font-medium hover:text-brand-orange transition-colors block">+971 50 142 0956</a>
                                    </li>
                                    <li>
                                        <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Email</p>
                                        <a href="mailto:contact@truenorthae.com" className="text-xl font-medium hover:text-brand-orange transition-colors block">contact@truenorthae.com</a>
                                    </li>
                                    <li>
                                        <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Office</p>
                                        <p className="text-lg font-medium">Dubai, United Arab Emirates</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Office Hours */}
                            <div className={`p-8 rounded-3xl border ${isDark ? 'border-white/10 bg-zinc-900/50' : 'border-gray-200 bg-white'}`}>
                                <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    <Clock size={18} className="text-brand-orange" /> Working Hours
                                </h4>
                                <div className="space-y-3">
                                    <div className={`flex justify-between text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                        <span>Monday - Friday</span>
                                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className={`flex justify-between text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                        <span>Saturday</span>
                                        <span className="font-semibold">10:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className={`flex justify-between text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                        <span>Sunday</span>
                                        <span className="text-brand-orange font-semibold">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ Section - "Something Else" */}
                    <motion.div
                        className="mt-24 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12">
                            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-2 block">Common Questions</span>
                            <h2 className={`text-3xl md:text-5xl font-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
                        </div>

                        <div className={`rounded-3xl p-8 lg:p-12 ${isDark ? 'bg-zinc-900 border border-white/5' : 'bg-gray-50'}`}>
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
                            <div className="mt-8 pt-8 text-center">
                                <p className={`mb-4 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Have more questions?</p>
                                <a href="https://wa.me/971501420956" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:underline">
                                    Chat with us on WhatsApp <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
