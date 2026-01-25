import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const RecentArticles = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Get the first 3 posts
    const recentPosts = blogData.slice(0, 3);

    return (
        <section className={`py-24 relative overflow-hidden theme-transition ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-brand-orange mb-4 block">
                            Knowledge Hub
                        </span>
                        <h2 className={`text-3xl md:text-5xl font-serif font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                            Latest <span className="italic font-light text-brand-blue">Insights.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/resources"
                            className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}
                        >
                            View All Articles <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <Link to={`/resources/${post.slug}`} className="block h-full">
                                <div className={`h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-500 border
                                    ${isDark
                                        ? 'bg-zinc-900 border-white/10 hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/5'
                                        : 'bg-white border-zinc-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px]'
                                    }`}
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80";
                                            }}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur text-zinc-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className={`flex items-center gap-4 text-xs mb-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                                            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                        </div>

                                        <h3 className={`text-xl font-bold mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-brand-orange ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                            {post.title}
                                        </h3>

                                        <p className={`text-sm line-clamp-3 mb-6 flex-grow leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                            {post.excerpt}
                                        </p>

                                        <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white group-hover:text-brand-orange' : 'text-zinc-900 group-hover:text-brand-orange'} transition-colors mt-auto`}>
                                            Read Article <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentArticles;
