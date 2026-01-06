import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    faq: FAQItem[];
}

const FAQCard = ({ item, isDark, isOpen, onToggle }: { item: FAQItem, isDark: boolean, isOpen: boolean, onToggle: () => void }) => {
    return (
        <motion.div
            layout
            className={`
                group rounded-[2.5rem] border transition-all duration-500 overflow-hidden
                ${isDark
                    ? 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 shadow-2xl shadow-black/20'
                    : 'bg-white/80 border-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] shadow-[0_10px_30px_rgba(0,0,0,0.02)]'
                }
                ${isOpen ? (isDark ? 'border-brand-blue/30 ring-1 ring-brand-blue/20' : 'border-brand-blue/20 ring-1 ring-brand-blue/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)]') : ''}
            `}
        >
            <motion.button
                layout
                onClick={onToggle}
                className="w-full px-10 py-8 text-left flex justify-between items-center gap-8"
            >
                <h3 className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${isOpen ? (isDark ? 'text-brand-blue' : 'text-brand-blue') : (isDark ? 'text-zinc-200' : 'text-zinc-800')}`}>
                    {item.question}
                </h3>
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500
                    ${isOpen ? 'bg-brand-blue text-white rotate-180 shadow-lg shadow-brand-blue/40' : (isDark ? 'bg-white/5 text-white/40 border border-white/5' : 'bg-zinc-100 text-zinc-400 border border-zinc-200 shadow-inner')}
                `}>
                    <Plus size={24} className={`transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} />
                </div>
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                    >
                        <div className={`px-10 pb-10 text-lg md:text-xl leading-relaxed transition-colors duration-500 ${isDark ? 'text-zinc-400 font-light' : 'text-zinc-600 font-medium'}`}>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-8" />
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const ServiceFAQ = ({ faq }: ServiceFAQProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!faq || faq.length === 0) return null;

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
        }
    };

    return (
        <section className={`py-16 md:py-20 relative theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span className="text-brand-orange font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                        Clarifications
                    </motion.span>
                    <h2 className={`text-4xl lg:text-7xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Common{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-purple-500">
                            Inquiries
                        </span>
                    </h2>
                    <p className={`text-xl lg:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>
                        Transparent answers to help you make informed decisions about your future.
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {faq.map((item, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                            <FAQCard
                                item={item}
                                isDark={isDark}
                                isOpen={openIndex === idx}
                                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceFAQ;
