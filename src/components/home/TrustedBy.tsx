import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

// Import local images
import harvardLogo from '../../assets/images/universities/harvard.png';
import stanfordLogo from '../../assets/images/universities/stanford.png';
import oxfordLogo from '../../assets/images/universities/oxford.png';
import cambridgeLogo from '../../assets/images/universities/cambridge.png';
import iitDelhiLogo from '../../assets/images/universities/iit-delhi.png';
import yaleLogo from '../../assets/images/universities/yale.png';
import princetonLogo from '../../assets/images/universities/princeton.png';
import lseLogo from '../../assets/images/universities/lse.png';

const universities = [
    { name: "Harvard University", logo: harvardLogo },
    { name: "Stanford University", logo: stanfordLogo },
    { name: "Oxford University", logo: oxfordLogo },
    { name: "Cambridge University", logo: cambridgeLogo },
    { name: "IIT Delhi", logo: iitDelhiLogo },
    { name: "Yale University", logo: yaleLogo },
    { name: "Princeton University", logo: princetonLogo },
    { name: "LSE", logo: lseLogo },
];

const TrustedBy = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-10 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Minimal Top Border */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/5' : 'via-zinc-200/50'} to-transparent`}></div>

            <div className="max-w-7xl mx-auto px-4 text-center mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full border ${isDark ? 'border-white/5 bg-white/5 text-white/40' : 'border-zinc-200 bg-zinc-50 text-zinc-400'}`}>
                        Proven Excellence
                    </span>
                    <h2 className={`text-2xl md:text-3xl font-serif font-medium mb-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        Admitted to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">World's Best</span>
                    </h2>
                </motion.div>
            </div>

            <div className="relative overflow-hidden">
                {/* Gradient Masks */}
                <div className={`absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r ${isDark ? 'from-zinc-950' : 'from-[#FAFAFA]'} to-transparent pointer-events-none`}></div>
                <div className={`absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l ${isDark ? 'from-zinc-950' : 'from-[#FAFAFA]'} to-transparent pointer-events-none`}></div>

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex items-center py-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 40
                        }}
                    >
                        {[...universities, ...universities, ...universities, ...universities].map((uni, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 mx-6 md:mx-8 group"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div
                                    className={`
                                        w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center p-5
                                        transition-all duration-500
                                        ${isDark
                                            ? 'bg-zinc-950 border border-white/10 group-hover:bg-zinc-900 group-hover:border-white/20'
                                            : 'bg-white border border-zinc-100 shadow-sm group-hover:shadow-md'
                                        }
                                    `}
                                >
                                    <img
                                        src={uni.logo}
                                        alt={uni.name}
                                        className={`
                                            w-full h-full object-contain transition-all duration-500
                                        `}
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
