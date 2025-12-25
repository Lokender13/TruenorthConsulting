import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../ui/TiltCard';

const AboutSection = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const benefits = [
        "Personalized Career Roadmaps",
        "Expert University Admissions Guidance",
        "Global Network of Top Institutions",
        "Holistic Student Development"
    ];

    return (
        <section className={`py-24 relative overflow-hidden theme-transition ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image / Visual Side */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <TiltCard
                                className={`
                                    relative rounded-3xl overflow-hidden shadow-2xl
                                    ${isDark ? 'border border-white/10' : 'border border-gray-200'}
                                `}
                                tiltIntensity={5}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                    alt="TrueNorth Consultancy Team"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/80' : 'from-black/40'} to-transparent`}></div>
                            </TiltCard>

                            {/* Floating Stats Card 1 */}
                            <motion.div
                                className={`
                                    absolute -right-6 top-10 p-6 rounded-2xl backdrop-blur-xl border shadow-xl max-w-xs
                                    ${isDark ? 'bg-zinc-900/90 border-white/10' : 'bg-white/90 border-gray-100'}
                                `}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <div className="text-4xl font-serif font-bold text-brand-orange mb-1">10+</div>
                                <div className={`text-sm font-medium ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Years of Experience</div>
                            </motion.div>

                            {/* Floating Stats Card 2 */}
                            <motion.div
                                className={`
                                    absolute -left-6 bottom-10 p-6 rounded-2xl backdrop-blur-xl border shadow-xl max-w-xs
                                    ${isDark ? 'bg-zinc-900/90 border-white/10' : 'bg-white/90 border-gray-100'}
                                `}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            >
                                <div className="text-4xl font-serif font-bold text-brand-blue mb-1">1000+</div>
                                <div className={`text-sm font-medium ${isDark ? 'text-white/70' : 'text-gray-600'}`}>Students Placed Globally</div>
                            </motion.div>

                            {/* Background Pattern */}
                            <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed rounded-full ${isDark ? 'border-white/5' : 'border-gray-300/30'}`}></div>
                            <div className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-dashed rounded-full ${isDark ? 'border-white/5' : 'border-gray-300/30'}`}></div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4 block">About TrueNorth</span>
                            <h2 className={`text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Navigating Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">Global Excellence</span>
                            </h2>
                            <p className={`text-lg mb-6 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                At TrueNorth Consulting, we believe every student has a unique potential waiting to be unlocked. We are more than just education consultants; we are your strategic partners in building a future without boundaries.
                            </p>
                            <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                With a deep understanding of global education systems and a commitment to personalized mentorship, we guide students from confusing choices to confident decisions, ensuring they land in universities that best fit their aspirations.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={14} className="text-brand-orange" />
                                        </div>
                                        <span className={`font-medium ${isDark ? 'text-white/80' : 'text-gray-800'}`}>{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <Link
                                to="/about"
                                className={`
                                    inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300
                                    ${isDark
                                        ? 'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                        : 'bg-brand-blue text-white hover:bg-brand-blue-dark hover:shadow-[0_0_20px_rgba(30,111,235,0.3)]'
                                    }
                                `}
                            >
                                Read Our Story <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
