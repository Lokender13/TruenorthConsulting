import ServicePageLayout from './ServicePageLayout';
import { motion } from 'framer-motion';
import { Building2, PieChart, Users2 } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const SchoolPartnerships = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <ServicePageLayout serviceId="school-partnerships">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {[
                        { icon: Building2, title: "Institutional ROI", desc: "Elevate your school's brand with 100% university placement track record." },
                        { icon: Users2, title: "Faculty Training", desc: "Empower your teachers with certified Career Analyst (CCA) skills." },
                        { icon: PieChart, title: "Data Insights", desc: "Gain real-time analytics on student career interests and aspirations." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 rounded-[2.5rem] border backdrop-blur-xl ${isDark ? 'bg-zinc-900/40 border-white/5' : 'bg-white border-gray-100 shadow-xl shadow-black/[0.02]'}`}
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isDark ? 'bg-indigo-500/10 text-indigo-500' : 'bg-indigo-500/5 text-indigo-500'}`}>
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

export default SchoolPartnerships;
