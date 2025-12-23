import { ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import SpotlightCard from '../ui/SpotlightCard';

interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    faq: FAQItem[];
}

const ServiceFAQ = ({ faq }: ServiceFAQProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section>
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faq.map((item, idx) => (
                    <SpotlightCard
                        key={idx}
                        className={`p-6 rounded-xl ${isDark
                                ? 'bg-zinc-900/50 border border-white/[0.06]'
                                : 'bg-gray-50 border border-gray-100'
                            }`}
                        spotlightColor={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)'}
                    >
                        <div className="relative z-10">
                            <h3 className={`text-lg font-bold mb-3 flex items-center justify-between ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {item.question}
                                <ChevronDown size={18} className={isDark ? 'text-white/20' : 'text-gray-300'} />
                            </h3>
                            <p className={`text-sm leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-500'}`}>{item.answer}</p>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
};

export default ServiceFAQ;
