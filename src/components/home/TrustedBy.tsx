import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

// Universities with actual logo URLs
const universities = [
    {
        name: "Harvard University",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/200px-Harvard_University_coat_of_arms.svg.png"
    },
    {
        name: "Stanford University",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/200px-Seal_of_Leland_Stanford_Junior_University.svg.png"
    },
    {
        name: "MIT",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/200px-MIT_logo.svg.png"
    },
    {
        name: "Oxford University",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/200px-Oxford-University-Circlet.svg.png"
    },
    {
        name: "Cambridge University",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/200px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png"
    },
    {
        name: "IIT Delhi",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png"
    },
    {
        name: "Yale University",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/200px-Yale_University_Shield_1.svg.png"
    },
    {
        name: "Princeton University",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/200px-Princeton_seal.svg.png"
    },
    {
        name: "Columbia University",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Columbia_University_Shield.svg/200px-Columbia_University_Shield.svg.png"
    },
    {
        name: "LSE",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/LSE_Logo.svg/200px-LSE_Logo.svg.png"
    },
];

const TrustedBy = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-12 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            {/* Top Border */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isDark ? 'via-white/10' : 'via-gray-200'} to-transparent`}></div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Simple Header */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`text-center text-xs font-semibold tracking-[0.2em] uppercase mb-8 ${isDark ? 'text-white/40' : 'text-gray-400'}`}
                >
                    Students Admitted To
                </motion.p>

                {/* Scrolling logos */}
                <div className="relative overflow-hidden py-4 mb-12">
                    {/* Fade edges */}
                    <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r ${isDark ? 'from-zinc-950' : 'from-white'} to-transparent pointer-events-none`}></div>
                    <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l ${isDark ? 'from-zinc-950' : 'from-white'} to-transparent pointer-events-none`}></div>

                    {/* Scrolling logos */}
                    <div className="flex animate-marquee items-center">
                        {[...universities, ...universities, ...universities].map((uni, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 mx-6"
                                whileHover={{ scale: 1.1, y: -8 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            >
                                <div
                                    className={`
                                        w-32 h-32 rounded-3xl flex items-center justify-center p-6
                                        backdrop-blur-xl transition-all duration-500 border
                                        ${isDark
                                            ? 'bg-zinc-900/40 border-white/5 shadow-2xl shadow-black/50'
                                            : 'bg-white border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)]'
                                        }
                                    `}
                                    title={uni.name}
                                >
                                    <img
                                        src={uni.logo}
                                        alt={uni.name}
                                        className={`w-20 h-20 object-contain transition-all duration-500 ${isDark ? 'opacity-80 hover:opacity-100' : 'opacity-90 hover:opacity-100'}`}
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Country Flags Section */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`text-center text-xs font-semibold tracking-[0.2em] uppercase mb-8 ${isDark ? 'text-white/40' : 'text-gray-400'}`}
                >
                    Global Study Destinations
                </motion.p>

                <div className="relative overflow-hidden py-4">
                    {/* Fade edges */}
                    <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r ${isDark ? 'from-zinc-950' : 'from-white'} to-transparent pointer-events-none`}></div>
                    <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l ${isDark ? 'from-zinc-950' : 'from-white'} to-transparent pointer-events-none`}></div>

                    <div className="flex animate-marquee-reverse items-center">
                        {[
                            { code: 'us', name: 'USA' }, { code: 'gb', name: 'UK' }, { code: 'in', name: 'India' },
                            { code: 'ae', name: 'UAE' }, { code: 'de', name: 'Germany' }, { code: 'sg', name: 'Singapore' },
                            { code: 'nz', name: 'New Zealand' }, { code: 'ie', name: 'Ireland' }, { code: 'fr', name: 'France' },
                            { code: 'it', name: 'Italy' }, { code: 'nl', name: 'Netherlands' }, { code: 'ge', name: 'Georgia' }
                        ].map((flag, index) => (
                            // Duplicate list for infinite scroll
                            [...Array(4)].map((_, i) => (
                                <motion.div
                                    key={`${index}-${i}`}
                                    className="flex-shrink-0 mx-8 flex flex-col items-center gap-3"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                >
                                    <div className={`
                                        w-20 h-14 rounded-xl overflow-hidden shadow-lg flex items-center justify-center
                                        ${isDark ? 'bg-zinc-800' : 'bg-gray-100'}
                                    `}>
                                        <img
                                            src={`https://flagcdn.com/w160/${flag.code}.png`}
                                            alt={flag.name}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                        {flag.name}
                                    </span>
                                </motion.div>
                            ))
                        )).flat()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
