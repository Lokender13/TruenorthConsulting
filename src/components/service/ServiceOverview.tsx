import { motion, type Variants } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { serviceImages } from '../ui/ServiceImage';
import { PenTool, Clock, Sparkles } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

interface ServiceOverviewProps {
    desc: string;
    serviceId?: string;
    duration?: string;
    pricing?: string;
}

const ServiceOverview = ({ desc, serviceId, duration, pricing }: ServiceOverviewProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const image = serviceId && serviceImages[serviceId]
        ? serviceImages[serviceId]
        : { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80', alt: 'Professional consulting session' };

    const paragraphs = desc.split('. ').map(p => p.trim()).filter(p => p.length > 0);

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section className={`py-16 md:py-20 relative theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        className="text-brand-orange font-black tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Strategic Overview
                    </motion.span>
                    <h2 className={`text-4xl lg:text-7xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        The TrueNorth{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue">
                            Advisory
                        </span>
                    </h2>
                    <p className={`max-w-3xl mx-auto text-xl lg:text-2xl font-light leading-relaxed ${isDark ? 'text-white/40' : 'text-zinc-500 font-medium'}`}>
                        Our methodology is rooted in precision, empathy, and data-driven insights.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Left: Interactive Image & Card */}
                    <motion.div
                        className="lg:col-span-5 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <TiltCard
                            tiltIntensity={5}
                            glareOpacity={isDark ? 0.1 : 0.05}
                            className={`relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl ${isDark ? 'shadow-black/50' : 'shadow-brand-blue/10 border border-white'}`}
                        >
                            <motion.img
                                src={image.src}
                                alt={image.alt}
                                className="absolute inset-0 w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <p className="text-white text-[10px] font-black tracking-[0.2em] uppercase mb-2 opacity-60">Success Stories</p>
                                <p className="text-white text-lg font-serif font-bold leading-tight">Join 5,000+ students who transformed their futures.</p>
                            </div>
                        </TiltCard>

                        {(duration || pricing) && (
                            <div className={`p-8 rounded-[2.5rem] border backdrop-blur-3xl space-y-6 transition-all duration-500
                                ${isDark
                                    ? 'bg-zinc-900/40 border-white/5 shadow-2xl shadow-black/20'
                                    : 'bg-white/80 border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]'}`}>

                                <div className="flex items-start gap-4">
                                    <div className={`mt-1 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                                        ${isDark ? 'bg-brand-orange/10 text-brand-orange' : 'bg-brand-orange/5 text-brand-orange'}`}>
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h4 className={`text-sm font-black uppercase tracking-wider mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Duration</h4>
                                        <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>{duration || "Flexible"}</p>
                                    </div>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"></div>

                                <div className="flex items-start gap-4">
                                    <div className={`mt-1 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                                        ${isDark ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-blue/5 text-brand-blue'}`}>
                                        <Sparkles size={20} />
                                    </div>
                                    <div>
                                        <h4 className={`text-sm font-black uppercase tracking-wider mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Investment</h4>
                                        <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>{pricing || "Contact for pricing"}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={`p-10 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500
                            ${isDark
                                ? 'bg-zinc-900/40 border-white/5 shadow-2xl shadow-black/20'
                                : 'bg-white/80 border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]'}`}>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110
                                ${isDark ? 'bg-brand-orange/10 text-brand-orange' : 'bg-brand-orange/5 text-brand-orange shadow-inner shadow-brand-orange/10'}`}>
                                <PenTool size={32} />
                            </div>
                            <h3 className={`text-2xl font-serif font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Our Core Intent</h3>
                            <p className={`text-lg leading-relaxed ${isDark ? 'text-white/40' : 'text-zinc-500 font-medium'}`}>
                                We don't just provide options; we engineer paths that align with your deepest aspirations and market realities.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Narrative Content */}
                    <motion.div
                        className="lg:col-span-7 pt-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {paragraphs.map((paragraph, i) => (
                            <motion.p
                                key={i}
                                variants={itemVariants}
                                className={`text-xl md:text-2xl mb-10 leading-[1.6] transition-colors duration-500 ${isDark ? 'text-zinc-400 font-light' : 'text-zinc-600 font-medium'} 
                                    ${i === 0 ? 'first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-orange first-letter:mr-4 first-letter:float-left first-letter:mt-1' : ''}`}
                            >
                                {paragraph}.
                            </motion.p>
                        ))}

                        <motion.div
                            variants={itemVariants}
                            className={`mt-12 p-8 rounded-3xl border-l-4 border-brand-blue
                                ${isDark ? 'bg-brand-blue/5 text-brand-blue/80' : 'bg-brand-blue/5 text-brand-blue'}`}
                        >
                            <p className="text-lg font-serif italic font-medium leading-relaxed">
                                "Excellence is not an act, but a habit. We make excellence the standard for your career journey."
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
