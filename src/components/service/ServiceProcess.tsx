import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

interface ServiceProcessProps {
    process: ProcessStep[];
}

const ServiceProcess = ({ process }: ServiceProcessProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    if (!process || process.length === 0) return null;

    return (
        <section className="space-y-8">
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Our <span className="text-brand-orange">Process</span>
            </h2>

            <div className="relative">
                {/* Vertical Line */}
                <div className={`absolute left-8 top-4 bottom-4 w-0.5 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}></div>

                <div className="space-y-12">
                    {process.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-24"
                        >
                            {/* Number Bubble */}
                            <div className={`
                                absolute left-0 top-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl border-4
                                ${isDark
                                    ? 'bg-zinc-900 border-zinc-950 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                                    : 'bg-white border-white text-brand-orange shadow-lg'
                                }
                            `}>
                                {index + 1}
                            </div>

                            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {item.title}
                            </h3>
                            <p className={`leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;
