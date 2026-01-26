import { motion, type Variants } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { serviceImages } from '../ui/ServiceImage';
import { Clock, Quote } from 'lucide-react';
import TiltCard from '../ui/TiltCard';

interface ServiceOverviewProps {
    desc: string;
    serviceId?: string;
    duration?: string;
}

const ServiceOverview = ({ desc, serviceId, duration }: ServiceOverviewProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const image = serviceId && serviceImages[serviceId]
        ? serviceImages[serviceId]
        : { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80', alt: 'Professional consulting session' };

    // Smart split: Use explicit newlines if available (for formatted text), otherwise fallback to sentence splitting
    const paragraphs = desc.includes('\n')
        ? desc.split('\n').map(p => p.trim()).filter(p => p.length > 0)
        : desc.split('. ').map(p => p + (p.endsWith('.') ? '' : '.')).filter(p => p.length > 1);

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section className={`py-8 md:py-12 relative theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-10"
                >
                    <motion.span
                        className="text-brand-orange font-bold tracking-[0.2em] uppercase text-xs mb-3 block"
                    >
                        About This Service
                    </motion.span>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        What We{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue">
                            Offer
                        </span>
                    </h2>
                    <p className={`max-w-2xl mx-auto text-base md:text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Here's everything you need to know about how we can help you achieve your goals.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                    {/* Left: Interactive Image & Card */}
                    <motion.div
                        className="lg:col-span-5 space-y-4 sticky top-24"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <TiltCard
                            tiltIntensity={3}
                            glareOpacity={isDark ? 0.1 : 0.05}
                            className={`relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ${isDark ? 'shadow-black/50 border border-white/10' : 'shadow-zinc-200/50 border border-white'}`}
                        >
                            <motion.img
                                src={image.src}
                                alt={image.alt}
                                className="absolute inset-0 w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white text-[10px] font-black tracking-[0.2em] uppercase mb-1 opacity-80">TrueNorth Success</p>
                                <p className="text-white text-lg font-serif font-bold leading-tight">Empowering 5,000+ students to reach their potential.</p>
                            </div>
                        </TiltCard>

                        {duration && (
                            <div className={`p-5 rounded-2xl border backdrop-blur-xl space-y-4 transition-all duration-500
                                ${isDark
                                    ? 'bg-zinc-900/60 border-white/10 shadow-lg'
                                    : 'bg-white/90 border-zinc-100 shadow-lg shadow-zinc-100'}`}>

                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                                        ${isDark ? 'bg-zinc-800 text-brand-orange' : 'bg-orange-50 text-brand-orange'}`}>
                                        <Clock size={16} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h4 className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>Duration</h4>
                                        <p className={`text-sm md:text-base font-bold leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>{duration || "Flexible"}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* Right: Narrative Content */}
                    <motion.div
                        className="lg:col-span-7"
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
                                        text-base leading-relaxed mb-4 transition-colors duration-500
                                        ${isDark ? 'text-zinc-300 font-light' : 'text-zinc-700 font-medium'}
                                        ${i === 0
                                            ? `first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-[0.9]
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
                            className={`mt-6 relative p-6 rounded-2xl overflow-hidden border
                                ${isDark ? 'bg-white/5 border-white/5 text-white' : 'bg-zinc-50 border-zinc-100 text-zinc-900'}`}
                        >
                            <Quote className={`absolute top-4 left-4 w-6 h-6 opacity-20 ${isDark ? 'text-white' : 'text-brand-blue'}`} />

                            <p className="relative z-10 text-base md:text-lg font-serif italic font-medium leading-relaxed text-center px-2">
                                "We believe every student has the potential to succeed. Our job is to help you discover and reach yours."
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;
