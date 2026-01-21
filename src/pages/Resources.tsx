import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import TiltCard from '../components/ui/TiltCard';

import { blogData } from '../data/blogData';

const Resources = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const blogs = blogData;

    return (
        <div className={`min-h-screen theme-transition relative overflow-hidden ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-900'}`}>
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
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Insights for your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue italic">
                                Journey.
                            </span>
                        </h1>
                        <p className={`max-w-2xl mx-auto text-lg font-light leading-relaxed ${isDark ? 'text-white/40' : 'text-zinc-500'}`}>
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
                                                ? 'bg-zinc-950 border-white/10 hover:bg-zinc-900 group'
                                                : 'bg-white border-zinc-100 hover:border-zinc-200 hover:shadow-xl group'}`}
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
