import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { School, User, GraduationCap, Briefcase, Users } from 'lucide-react';
import React from 'react';

interface ServiceAudienceProps {
    audience: string[];
}

const audienceIcons: { [key: string]: React.ElementType } = {
    "Grade 8-10": School,
    "Grade 11-12": User,
    "Undergraduates": GraduationCap,
    "Working Professionals": Briefcase,
    "Parents": Users,
};

const getIconForAudience = (audienceString: string) => {
    for (const key in audienceIcons) {
        if (audienceString.toLowerCase().includes(key.toLowerCase())) {
            return audienceIcons[key];
        }
    }
    return User; // Default icon
};


const ServiceAudience = ({ audience }: ServiceAudienceProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    if (!audience || audience.length === 0) return null;

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    };

    return (
        <section className={`py-16 md:py-20 theme-transition ${isDark ? 'bg-black/0' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span className="text-brand-blue font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                        Target Demographic
                    </motion.span>
                    <h2 className={`text-4xl lg:text-7xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Who is This{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-purple-500">
                            For?
                        </span>
                    </h2>
                    <p className={`text-xl lg:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-white/40' : 'text-gray-500 font-medium'}`}>
                        This service is meticulously crafted to empower individuals at critical junctures of their academic and professional journey.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-6"
                >
                    {audience.map((item, index) => {
                        const Icon = getIconForAudience(item);
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className={`group relative flex items-center gap-4 px-8 py-4 rounded-full transition-all duration-500 cursor-default
                                    ${isDark
                                        ? 'bg-zinc-900/40 border border-white/5 text-white/90 hover:bg-zinc-950 shadow-2xl shadow-black/20'
                                        : 'bg-white/80 border-white text-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
                                    }
                                `}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6
                                    ${isDark ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-blue/5 text-brand-blue shadow-inner shadow-brand-blue/10'}
                                `}>
                                    <Icon size={20} strokeWidth={2.5} />
                                </div>
                                <span className="font-serif font-bold text-lg md:text-xl tracking-tight">
                                    {item}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceAudience;
