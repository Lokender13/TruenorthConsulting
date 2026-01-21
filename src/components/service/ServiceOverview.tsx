import { motion, type Variants } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { serviceImages } from '../ui/ServiceImage';
import { Clock, Sparkles, Quote } from 'lucide-react';
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
        <section className={`py-12 md:py-16 relative theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <motion.span
                        className="text-brand-orange font-black tracking-[0.3em] uppercase text-xs mb-6 block"
                    >
                        Strategic Overview
                    </motion.span>
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        The TrueNorth{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue">
                            Advisory
                        </span>
                    </h2>
                    <p className={`max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Our methodology is rooted in precision, empathy, and data-driven insights.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    {/* Left: Interactive Image & Card */}
                    <motion.div
                        className="lg:col-span-5 space-y-6 sticky top-24"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <TiltCard
                            tiltIntensity={5}
                            glareOpacity={isDark ? 0.1 : 0.05}
                            className={`relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ${isDark ? 'shadow-black/50 border border-white/10' : 'shadow-zinc-200/50 border border-white'}`}
                        >
                            <motion.img
                                src={image.src}
                                alt={image.alt}
                                className="absolute inset-0 w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <p className="text-white text-[10px] font-black tracking-[0.2em] uppercase mb-3 opacity-80">Success Stories</p>
                                <p className="text-white text-xl font-serif font-bold leading-tight">Join 5,000+ students who transformed their futures.</p>
                            </div>
                        </TiltCard>

                        {(duration || pricing) && (
                            <div className={`p-8 rounded-[2rem] border backdrop-blur-xl space-y-6 transition-all duration-500
                                ${isDark
                                    ? 'bg-zinc-900/60 border-white/10 shadow-xl'
                                    : 'bg-white/90 border-zinc-100 shadow-xl shadow-zinc-100'}`}>

                                <div className="flex items-start gap-5">
                                    <div className={`mt-1 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0
                                        ${isDark ? 'bg-zinc-800 text-brand-orange' : 'bg-orange-50 text-brand-orange'}`}>
                                        <Clock size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className={`text-xs font-black uppercase tracking-widest mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Duration</h4>
                                        <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>{duration || "Flexible"}</p>
                                    </div>
                                </div>

                                <div className={`h-px w-full ${isDark ? 'bg-white/5' : 'bg-zinc-100'}`}></div>

                                <div className="flex items-start gap-5">
                                    <div className={`mt-1 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0
                                        ${isDark ? 'bg-zinc-800 text-brand-blue' : 'bg-blue-50 text-brand-blue'}`}>
                                        <Sparkles size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className={`text-xs font-black uppercase tracking-widest mb-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Investment</h4>
                                        <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>{pricing || "Contact for pricing"}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Right: Narrative Content */}
                    <motion.div
                        className="lg:col-span-7 pt-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="prose prose-lg max-w-none">
                            {paragraphs.map((paragraph, i) => (
                                <motion.p
                                    key={i}
                                    variants={itemVariants}
                                    className={`
                                        text-base md:text-lg leading-relaxed mb-6 transition-colors duration-500
                                        ${isDark ? 'text-zinc-300 font-light' : 'text-zinc-700 font-medium'}
                                        ${i === 0
                                            ? `first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-[0.9]
                                               ${isDark ? 'first-letter:text-brand-orange' : 'first-letter:text-brand-orange'}`
                                            : ''}
                                    `}
                                >
                                    {paragraph}.
                                </motion.p>
                            ))}
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className={`mt-10 relative p-8 rounded-[2rem] overflow-hidden
                                ${isDark ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-900'}`}
                        >
                            <Quote className={`absolute top-8 left-8 w-12 h-12 opacity-10 ${isDark ? 'text-white' : 'text-black'}`} />

                            <p className="relative z-10 text-xl md:text-2xl font-serif italic font-medium leading-relaxed text-center">
                                "Excellence is not an act, but a habit. We make excellence the standard for your career journey."
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
                        >
                            {['Strategic Clarity', 'Market Edge', 'Personal Brand', 'Growth Mindset'].map((item, i) => (
                                <div key={i} className={`p-4 rounded-2xl border text-center transition-all ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-white border-zinc-100 shadow-sm hover:shadow-md'}`}>
                                    <p className={`text-sm md:text-base font-serif font-bold ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>{item}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
