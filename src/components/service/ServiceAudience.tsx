import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { Users, CheckCircle2 } from 'lucide-react';

interface ServiceAudienceProps {
    audience: string[];
}

const ServiceAudience = ({ audience }: ServiceAudienceProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    if (!audience || audience.length === 0) return null;

    return (
        <section className={`p-8 rounded-3xl ${isDark ? 'bg-zinc-900/50 border border-white/10' : 'bg-blue-50 border border-blue-100'}`}>
            <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                    <Users size={24} />
                </div>
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Who Is This For?
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {audience.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`
                            flex items-center gap-4 p-4 rounded-xl
                            ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:shadow-md'}
                            transition-all duration-300
                        `}
                    >
                        <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                            <CheckCircle2 size={14} strokeWidth={3} />
                        </div>
                        <span className={`font-medium ${isDark ? 'text-white/80' : 'text-gray-800'}`}>
                            {item}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServiceAudience;
