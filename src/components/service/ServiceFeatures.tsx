import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import SpotlightCard from '../ui/SpotlightCard';

interface ServiceFeaturesProps {
    features: string[];
}

// Rotating colors for feature items
const featureColors = [
    { light: 'bg-blue-100 text-blue-600', dark: 'bg-blue-500/20 text-blue-400' },
    { light: 'bg-purple-100 text-purple-600', dark: 'bg-purple-500/20 text-purple-400' },
    { light: 'bg-orange-100 text-orange-600', dark: 'bg-orange-500/20 text-orange-400' },
    { light: 'bg-emerald-100 text-emerald-600', dark: 'bg-emerald-500/20 text-emerald-400' },
    { light: 'bg-pink-100 text-pink-600', dark: 'bg-pink-500/20 text-pink-400' },
    { light: 'bg-teal-100 text-teal-600', dark: 'bg-teal-500/20 text-teal-400' },
];

const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section>
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                    Key Features
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => {
                    const color = featureColors[idx % featureColors.length];
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                        >
                            <SpotlightCard
                                className={`p-5 rounded-xl ${isDark
                                    ? 'bg-zinc-900/50 border border-white/[0.06]'
                                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'
                                    }`}
                                spotlightColor={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)'}
                            >
                                <div className="relative z-10 flex items-start gap-4">
                                    <div className={`
                                        w-8 h-8 rounded-lg flex items-center justify-center shrink-0
                                        ${isDark ? color.dark : color.light}
                                    `}>
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <span className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>{feature}</span>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServiceFeatures;

