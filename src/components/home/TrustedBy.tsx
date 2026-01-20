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

// Fallback URLs for images that couldn't be downloaded automatically
const mitLogo = "https://logo.clearbit.com/mit.edu";
const columbiaLogo = "https://logo.clearbit.com/columbia.edu";

const universities = [
    { name: "Harvard University", logo: harvardLogo },
    { name: "Stanford University", logo: stanfordLogo },
    { name: "MIT", logo: mitLogo },
    { name: "Oxford University", logo: oxfordLogo },
    { name: "Cambridge University", logo: cambridgeLogo },
    { name: "IIT Delhi", logo: iitDelhiLogo },
    { name: "Yale University", logo: yaleLogo },
    { name: "Princeton University", logo: princetonLogo },
    { name: "Columbia University", logo: columbiaLogo },
    { name: "LSE", logo: lseLogo },
];

const TrustedBy = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-20 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Minimal Top Border */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-zinc-200'} to-transparent opacity-50`}></div>

            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={`inline-block text-[10px] font-black tracking-[0.3em] uppercase mb-4 px-4 py-2 rounded-full border ${isDark ? 'border-white/10 bg-white/5 text-white/60' : 'border-zinc-200 bg-zinc-50 text-zinc-500'}`}>
                        Proven Excellence
                    </span>
                    <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        Admitted to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">World's Best</span>
                    </h2>
                    <p className={`max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Our students consistently secure offers from Ivy League universities, Oxbridge, and premier institutions worldwide.
                    </p>
                </motion.div>
            </div>

            <div className="relative overflow-hidden">
                {/* Gradient Masks */}
                <div className={`absolute left-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-r ${isDark ? 'from-zinc-950' : 'from-[#FAFAFA]'} to-transparent pointer-events-none`}></div>
                <div className={`absolute right-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-gradient-to-l ${isDark ? 'from-zinc-950' : 'from-[#FAFAFA]'} to-transparent pointer-events-none`}></div>

                <div className="flex animate-marquee items-center py-8">
                    {[...universities, ...universities].map((uni, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0 mx-8 md:mx-12 group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div
                                className={`
                                    w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center p-8
                                    transition-all duration-500
                                    ${isDark
                                        ? 'bg-zinc-900/30 border border-white/5 group-hover:bg-zinc-900/60 group-hover:border-white/10'
                                        : 'bg-white border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]'
                                    }
                                `}
                            >
                                <img
                                    src={uni.logo}
                                    alt={uni.name}
                                    className={`
                                        w-full h-full object-contain transition-all duration-500
                                        filter grayscale opacity-60
                                        group-hover:grayscale-0 group-hover:opacity-100
                                    `}
                                    loading="lazy"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
