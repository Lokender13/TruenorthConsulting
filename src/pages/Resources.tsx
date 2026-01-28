import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, User, Search, Sparkles, Clock, ChevronRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import TiltCard from '../components/ui/TiltCard';
import { blogData } from '../data/blogData';

const Resources = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = useMemo(() => ['All', ...new Set(blogData.map(blog => blog.category))], []);

    const filteredBlogs = useMemo(() => {
        return blogData.filter(blog => {
            const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
            const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const featuredPost = blogData[blogData.length - 1]; // Latest post as featured

    return (
        <div className={`min-h-screen theme-transition relative overflow-hidden ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
            <SEO
                title="Career Guidance & Education Resources | Blogs Dubai & India"
                description="Read expert insights on career planning, study abroad admissions, and student profile building. Top education blog in Dubai and UAE."
                keywords="career guidance blog, study abroad articles, education resources, student tips, university admission guides, education blog dubai, career advice uae"
            />

            {/* Premium Background Gradient System */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden h-full">
                <div className={`absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 ${isDark ? 'bg-brand-orange/30' : 'bg-brand-orange/15'}`} />
                <div className={`absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 ${isDark ? 'bg-brand-blue/30' : 'bg-brand-blue/15'}`} />
                <div className={`absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 ${isDark ? 'bg-brand-red/20' : 'bg-brand-red/10'}`} />
            </div>

            {/* Hero Section */}
            <section className="relative pt-44 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <span className="w-12 h-[1px] bg-brand-orange/40" />
                            <span className="px-4 py-1.5 text-[10px] font-black tracking-[0.4em] uppercase text-brand-orange bg-brand-orange/10 rounded-full flex items-center gap-2">
                                <Sparkles size={12} /> Resource Center
                            </span>
                            <span className="w-12 h-[1px] bg-brand-orange/40" />
                        </div>
                        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-10 leading-[0.85] tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Thought <br />
                            <span className="italic font-light text-brand-blue relative inline-block">
                                Leadership
                                <motion.svg
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: 1 }}
                                    className="absolute -bottom-2 left-0 w-full h-4 text-brand-orange/40"
                                    viewBox="0 0 300 12"
                                    fill="none"
                                >
                                    <path d="M4 8.5C50 2 240 -1 296 8.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </motion.svg>
                            </span>
                        </h1>
                        <p className={`max-w-3xl mx-auto text-xl md:text-2xl font-medium leading-relaxed mb-16 px-4 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            Your compass for navigating the complexities of global education,
                            career strategy, and self-actualization.
                        </p>
                    </motion.div>

                    {/* Search & Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-4xl mx-auto relative z-20 group"
                    >
                        <div className={`p-2 rounded-3xl border backdrop-blur-2xl transition-all duration-500 flex flex-col md:flex-row items-center gap-4 ${isDark ? 'bg-zinc-950 border-white/10 group-focus-within:border-brand-orange/50 shadow-black/40' : 'bg-white/80 border-zinc-200 group-focus-within:border-brand-orange/30 shadow-xl'}`}>
                            <div className="relative flex-1 w-full">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-brand-orange transition-colors" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search articles by title, category, or keyword..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-transparent border-none focus:ring-0 py-4 pl-16 pr-6 text-lg font-medium placeholder:text-zinc-500"
                                />
                            </div>
                            <div className="flex items-center gap-2 p-1.5 bg-zinc-50/50 dark:bg-white/5 rounded-2xl w-full md:w-auto overflow-x-auto no-scrollbar">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                                            ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20'
                                            : 'text-zinc-500 hover:text-brand-orange hover:bg-brand-orange/5'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="pb-40 px-6 relative z-10 transition-all duration-500">
                <div className="max-w-7xl mx-auto">
                    {/* Featured Post - Premium Showcase */}
                    {!searchQuery && activeCategory === 'All' && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-24"
                        >
                            <Link to={`/resources/${featuredPost.slug}`} className="group block">
                                <div className={`relative min-h-[500px] rounded-[3rem] overflow-hidden border ${isDark ? 'border-white/5 bg-zinc-900/40' : 'border-zinc-100 bg-white shadow-2xl'}`}>
                                    <div className="grid lg:grid-cols-2 h-full">
                                        <div className="relative h-[300px] lg:h-full overflow-hidden">
                                            <img
                                                src={featuredPost.image}
                                                alt={featuredPost.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                                        </div>
                                        <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-8">
                                                <span className="bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Featured Insights</span>
                                                <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                                    <Clock size={12} /> {featuredPost.readTime}
                                                </span>
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-[1.1] transition-transform group-hover:translate-x-2 duration-500">
                                                {featuredPost.title}
                                            </h2>
                                            <p className={`text-lg md:text-xl leading-relaxed mb-10 line-clamp-3 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto pt-8 border-t border-zinc-500/10">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center font-bold text-brand-orange">
                                                        {featuredPost.author[0]}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold">{featuredPost.author}</p>
                                                        <p className="text-[10px] uppercase tracking-widest text-zinc-500">{featuredPost.date}</p>
                                                    </div>
                                                </div>
                                                <div className="hidden sm:flex items-center gap-2 text-brand-orange font-black uppercase tracking-widest text-[11px] group">
                                                    Explore Full Story <ChevronRight size={18} className="translate-x-0 group-hover:translate-x-2 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* Blog Grid with Animation Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {filteredBlogs.map((blog, idx) => (
                                <motion.div
                                    key={blog.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                >
                                    <Link to={`/resources/${blog.slug}`} className="block h-full">
                                        <TiltCard
                                            tiltIntensity={4}
                                            className={`h-full flex flex-col rounded-[2.5rem] overflow-hidden border transition-all duration-500 group ${isDark
                                                ? 'bg-zinc-900/40 backdrop-blur-md border-white/5 hover:border-brand-orange/30'
                                                : 'bg-white border-zinc-100 hover:border-brand-orange/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
                                                }`}>
                                            <div className="aspect-[16/11] relative overflow-hidden m-4 rounded-[1.8rem]">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <div className="absolute top-4 right-4 px-4 py-1.5 bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full text-[9px] font-black uppercase tracking-[0.2em]">
                                                    {blog.category}
                                                </div>
                                            </div>

                                            <div className="px-8 pb-8 pt-2 flex-1 flex flex-col">
                                                <div className="flex items-center gap-5 mb-5 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
                                                    <span className="flex items-center gap-1.5 flex-shrink-0"><Calendar size={13} className="text-brand-orange" /> {blog.date}</span>
                                                    <span className="flex items-center gap-1.5 truncate"><User size={13} className="text-brand-orange" /> {blog.author}</span>
                                                </div>

                                                <h3 className={`text-2xl font-serif font-bold mb-4 leading-snug ${isDark ? 'text-white group-hover:text-brand-orange' : 'text-zinc-900 group-hover:text-brand-orange'} transition-colors duration-300`}>
                                                    {blog.title}
                                                </h3>
                                                <p className={`text-sm leading-relaxed mb-8 flex-1 line-clamp-3 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                                    {blog.excerpt}
                                                </p>

                                                <div className="mt-auto flex items-center justify-between group-hover:translate-y-[-4px] transition-transform duration-300">
                                                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                                        Read More
                                                        <div className="w-6 h-[2px] bg-brand-orange/40 group-hover:w-10 group-hover:bg-brand-orange transition-all" />
                                                    </span>
                                                    <div className={`w-10 h-10 rounded-full border border-zinc-500/20 flex items-center justify-center transition-all duration-500 group-hover:bg-brand-orange group-hover:text-white group-hover:rotate-[45deg] group-hover:scale-110`}>
                                                        <ArrowRight size={16} />
                                                    </div>
                                                </div>
                                            </div>
                                        </TiltCard>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* No Results Fallback */}
                    {filteredBlogs.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-32 text-center"
                        >
                            <div className="w-20 h-20 bg-zinc-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                <Search size={32} className="text-zinc-500" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold mb-4">No matching articles found</h3>
                            <p className="text-zinc-500 max-w-md mx-auto mb-10">We couldn't find any resources matching your search. Try different keywords or clear the filters.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                                className="bg-brand-orange text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
                            >
                                Clear All Search
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Resources;
