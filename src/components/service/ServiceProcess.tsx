import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useRef } from 'react';

interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

interface ServiceProcessProps {
    process: ProcessStep[];
}

const ProcessCard = ({ item, index, isDark }: { item: ProcessStep, index: number, isDark: boolean }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative p-10 rounded-[3rem] border transition-all duration-500
                ${isDark
                    ? 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 shadow-2xl shadow-black/20'
                    : 'bg-white/80 border-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] shadow-[0_10px_30px_rgba(0,0,0,0.02)]'
                }
            `}
        >
            <div className={`absolute -top-6 -left-6 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110 group-hover:rotate-6
                ${isDark ? 'bg-white text-black' : 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20'}
            `}>
                {item.step}
            </div>

            <h3 className={`text-2xl font-serif font-bold mb-4 tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                {item.title}
            </h3>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500 font-medium'}`}>
                {item.description}
            </p>
        </motion.div>
    );
};

const ServiceProcess = ({ process }: ServiceProcessProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const ref = useRef(null);

    if (!process || process.length === 0) return null;

    return (
        <section className={`py-16 md:py-20 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`} ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span className="text-brand-orange font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                        Execution Workflow
                    </motion.span>
                    <h2 className={`text-4xl lg:text-7xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Our Strategic{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-purple-500">
                            Roadmap
                        </span>
                    </h2>
                    <p className={`text-xl lg:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>
                        A systematic, data-driven methodology designed to convert your potential into high-impact performance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[150px] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />

                    {process.map((item, index) => (
                        <ProcessCard key={index} item={item} index={index} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;
