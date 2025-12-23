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
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Yale_University_logo.svg/200px-Yale_University_logo.svg.png"
    },
    {
        name: "Princeton University",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/200px-Princeton_seal.svg.png"
    },
    {
        name: "Columbia University",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Columbia_coat_of_arms_no_crest.svg/200px-Columbia_coat_of_arms_no_crest.svg.png"
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
        <section className={`py-12 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
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

                {/* Infinite Scroll Logo Strip */}
                <div className="relative overflow-hidden">
                    {/* Fade edges */}
                    <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r ${isDark ? 'from-zinc-950' : 'from-white'} to-transparent`}></div>
                    <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l ${isDark ? 'from-zinc-950' : 'from-white'} to-transparent`}></div>

                    {/* Scrolling logos */}
                    <div className="flex animate-marquee items-center">
                        {[...universities, ...universities, ...universities].map((uni, index) => (
                            <motion.div
                                key={index}
                                className="flex-shrink-0 mx-6"
                                whileHover={{ scale: 1.15, y: -3 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div
                                    className={`
                                        w-16 h-16 rounded-full flex items-center justify-center p-2
                                        cursor-pointer transition-all duration-300
                                        ${isDark
                                            ? 'bg-white/5 hover:bg-white/10'
                                            : 'bg-gray-50 hover:bg-gray-100 shadow-sm hover:shadow-md'
                                        }
                                    `}
                                    title={uni.name}
                                >
                                    <img
                                        src={uni.logo}
                                        alt={uni.name}
                                        className={`w-10 h-10 object-contain ${isDark ? 'filter brightness-90' : ''}`}
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
