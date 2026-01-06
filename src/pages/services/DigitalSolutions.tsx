import ServicePageLayout from './ServicePageLayout';
import { motion } from 'framer-motion';
import { Rocket, Search, Code } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import StudentProfilerCTA from '../../components/service/StudentProfilerCTA';

const DigitalSolutions = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <ServicePageLayout serviceId="digital-solutions">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: Rocket, title: "Admission Scale", desc: "Engineered marketing funnels that predictably drive school admissions." },
                        { icon: Search, title: "SEO Dominance", desc: "#1 rankings for competitive education keywords in your local region." },
                        { icon: Code, title: "Next-Gen Platforms", desc: "High-performance websites that work flawlessly across all modern devices." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-[2.5rem] border backdrop-blur-xl ${isDark ? 'bg-zinc-900/40 border-white/5' : 'bg-white border-gray-100 shadow-xl shadow-black/[0.02]'}`}
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDark ? 'bg-blue-500/10 text-brand-blue' : 'bg-brand-blue/5 text-brand-blue'}`}>
                                <item.icon size={24} />
                            </div>
                            <h4 className={`text-xl font-serif font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                            <p className={`leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mb-16">
                    <StudentProfilerCTA />
                </div>
            </div>
        </ServicePageLayout>
    );
};

export default DigitalSolutions;
