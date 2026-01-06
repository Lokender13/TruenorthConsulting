import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import TiltCard from '../components/ui/TiltCard';

const Resources = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const blogs = [
        {
            title: "How to choose the right career after 12th?",
            slug: "choose-right-career-after-12th",
            excerpt: "Confused about your next step? Discover a scientific approach to identifying your strengths and aligning them with the perfect career path. Don't just follow the crowd.",
            author: "Surabhi Rawat",
            date: "Jan 05, 2025",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
            category: "Career Guidance"
        },
        {
            title: "Study Abroad vs India – A Comparative Analysis",
            slug: "study-abroad-vs-india-comparative-analysis",
            excerpt: "Is studying abroad really worth the investment? We break down the ROI, lifestyle, and career opportunities of international vs domestic education to help you decide.",
            author: "Team TrueNorth",
            date: "Dec 28, 2024",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
            category: "Study Abroad"
        },
        {
            title: "Top Universities for Indian Students in 2025",
            slug: "top-universities-indian-students-2025",
            excerpt: "A curated list of universities in the UK, USA, and Canada that are welcoming Indian talent with open arms and generous scholarships this year.",
            author: "Surabhi Rawat",
            date: "Dec 15, 2024",
            image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
            category: "University Admissions"
        }
    ];

    return (
        <div className={`min-h-screen theme-transition relative overflow-hidden ${isDark ? 'bg-zinc-950 text-white' : 'bg-[#FAFAFA] text-zinc-900'}`}>
            <SEO
                title="Resources & Insights | TrueNorth Consulting"
                description="Expert articles, guides, and resources on career planning, study abroad, and educational success by TrueNorth Consulting."
                keywords="career guidance blog, study abroad articles, education resources, student tips, university admission guides"
            />

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-brand-orange/20' : 'bg-brand-orange/10'}`} />
                <div className={`absolute bottom-0 left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-brand-blue/20' : 'bg-brand-blue/10'}`} />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-orange font-black tracking-[0.3em] uppercase text-xs mb-4 block">
                            Knowledge Hub
                        </span>
                        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Insights for your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue italic">
                                Journey.
                            </span>
                        </h1>
                        <p className={`max-w-2xl mx-auto text-xl font-light leading-relaxed ${isDark ? 'text-white/40' : 'text-zinc-500'}`}>
                            Expert advice, detailed guides, and the latest updates on global education trends.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-32 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogs.map((blog, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link to={`/resources/${blog.slug}`} className="block h-full">
                                    <TiltCard
                                        tiltIntensity={5}
                                        className={`h-full flex flex-col rounded-[2rem] overflow-hidden border transition-all duration-500
                                            ${isDark
                                                ? 'bg-zinc-900/40 border-white/5 hover:border-white/10 group'
                                                : 'bg-white border-zinc-100 hover:border-brand-orange/20 shadow-lg group'}`}
                                    >
                                        {/* Image */}
                                        <div className="aspect-[16/9] relative overflow-hidden">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-wider text-zinc-900">
                                                {blog.category}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex items-center gap-4 mb-4 text-xs font-medium text-zinc-500">
                                                <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
                                                <span className="flex items-center gap-1"><User size={12} /> {blog.author}</span>
                                            </div>

                                            <h3 className={`text-xl font-serif font-bold mb-4 ${isDark ? 'text-white group-hover:text-brand-orange' : 'text-zinc-900 group-hover:text-brand-orange'} transition-colors`}>
                                                {blog.title}
                                            </h3>
                                            <p className={`text-sm leading-relaxed mb-6 flex-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                                {blog.excerpt}
                                            </p>

                                            <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all ${isDark ? 'text-white group-hover:translate-x-2' : 'text-zinc-900 group-hover:translate-x-2'}`}>
                                                Read Article <ArrowRight size={14} className="text-brand-orange" />
                                            </div>
                                        </div>
                                    </TiltCard>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
