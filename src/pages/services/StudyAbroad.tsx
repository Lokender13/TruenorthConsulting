import ServicePageLayout from './ServicePageLayout';

import { motion } from 'framer-motion';
import { Globe2, GraduationCap, Landmark } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const StudyAbroad = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <ServicePageLayout serviceId="study-abroad">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {[
                        { icon: Globe2, title: "Global University Guidance", desc: "We'll help you find and apply to top universities worldwide that match your goals and budget." },
                        { icon: Landmark, title: "Scholarship Support", desc: "Let us help you discover and apply for scholarships to make your education more affordable." },
                        { icon: GraduationCap, title: "Visa Assistance", desc: "We'll guide you through every step of the visa process so you feel prepared and confident." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-[2.5rem] border backdrop-blur-xl ${isDark ? 'bg-zinc-900/40 border-white/5' : 'bg-white border-gray-100 shadow-xl shadow-black/[0.02]'}`}
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDark ? 'bg-brand-orange/10 text-brand-orange' : 'bg-brand-orange/5 text-brand-orange'}`}>
                                <item.icon size={24} />
                            </div>
                            <h4 className={`text-xl font-serif font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                            <p className={`leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </ServicePageLayout>
    );
};

export default StudyAbroad;
