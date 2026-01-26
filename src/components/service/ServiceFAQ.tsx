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
                group border-b transition-all duration-500 overflow-hidden
                ${isDark ? 'border-white/10' : 'border-zinc-200'}
            `}
        >
            <motion.button
                layout
                onClick={onToggle}
                className="w-full py-8 text-left flex justify-between items-start gap-8"
            >
                <div className="flex-grow">
                    <h3 className={`text-xl md:text-2xl font-serif font-medium tracking-tight transition-colors duration-300 ${isDark ? (isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-white') : (isOpen ? 'text-zinc-900' : 'text-zinc-600 group-hover:text-zinc-900')}`}>
                        <span className={`inline-block w-10 mr-2 text-xl md:text-2xl font-sans font-black uppercase tracking-widest ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                            Q.
                        </span>
                        {item.question}
                    </h3>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 mt-1
                    ${isOpen ? 'bg-brand-orange text-white rotate-45' : (isDark ? 'bg-white/10 text-white group-hover:bg-white/20' : 'bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200')}
                `}>
                    <Plus size={16} />
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
                        <div className={`pb-10 pl-12 text-lg md:text-xl leading-relaxed transition-colors duration-500 ${isDark ? 'text-zinc-400 font-light' : 'text-zinc-600 font-medium'}`}>
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
        <section className={`py-16 md:py-24 relative theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span className="text-brand-orange font-black tracking-[0.3em] uppercase text-xs mb-6 block">
                        Clarifications
                    </motion.span>
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Frequently Asked{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-purple-500">
                            Questions
                        </span>
                    </h2>
                    <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>
                        Transparent answers to help you make informed decisions about your future.
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-2"
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
