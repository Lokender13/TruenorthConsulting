import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    Clock,
    Facebook, Linkedin, Twitter, Tag, ChevronRight,
    MessageCircle, BookOpen
} from 'lucide-react';
import { blogData } from '../data/blogData';
import { useTheme } from '../contexts/ThemeContext';
import SEO from '../components/SEO';

const BlogPost = () => {
    const { slug } = useParams();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const post = blogData.find(p => p.slug === slug);
    const relatedPosts = blogData
        .filter(p => p.slug !== slug && p.category === post?.category)
        .slice(0, 3);

    // fallback if no same category
    const finalRelated = relatedPosts.length > 0
        ? relatedPosts
        : blogData.filter(p => p.slug !== slug).slice(0, 3);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className={`min-h-screen grid place-items-center ${isDark ? 'bg-zinc-950 text-white' : 'bg-gray-50 text-zinc-900'}`}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <Link to="/resources" className="text-brand-orange hover:underline">Back to Resources</Link>
                </div>
            </div>
        );
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.seoTitle,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "TrueNorth Consulting",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.truenorthae.com/logo.png"
            }
        },
        "datePublished": new Date(post.date).toISOString(),
        "description": post.seoDescription,
        "articleBody": post.content.replace(/<[^>]*>?/gm, "")
    };

    return (
        <div className={`min-h-screen theme-transition pb-20 ${isDark ? 'bg-zinc-950 text-zinc-300' : 'bg-zinc-50 text-zinc-700'}`}>
            <SEO
                title={`${post.seoTitle} | TrueNorth Resources`}
                description={post.seoDescription}
                keywords={post.keywords}
                image={post.image}
                type="article"
                schema={schema}
            />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-brand-orange z-[60] origin-left"
                style={{ scaleX }}
            />

            {/* Hero Section - Immersive Design */}
            <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden flex items-end">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 max-w-5xl mx-auto px-6 pb-20 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-brand-orange text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-orange/20">
                                {post.category}
                            </span>
                            <span className="text-white/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                <Clock size={14} className="text-brand-orange" /> {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight max-w-4xl">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-blue p-[2px]">
                                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold text-xs">
                                        {post.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>
                                <div className="flex flex-col text-white">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Written by</span>
                                    <span className="font-bold text-sm">{post.author}</span>
                                </div>
                            </div>
                            <div className="h-10 w-[1px] bg-white/20" />
                            <div className="flex flex-col text-white">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Published</span>
                                <span className="font-bold text-sm">{post.date}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-30 -mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
                    {/* Main Article Content */}
                    <div className={`${isDark ? 'bg-zinc-950 border-white/5 shadow-2xl' : 'bg-white border-zinc-200/50 shadow-xl'} rounded-[2.5rem] border p-8 md:p-16`}>
                        {/* Summary Box */}
                        <div className={`mb-12 p-8 rounded-3xl border-l-4 border-brand-orange ${isDark ? 'bg-white/5 border-white/10' : 'bg-zinc-50 border-zinc-100'}`}>
                            <div className="flex items-center gap-2 text-brand-orange mb-3">
                                <BookOpen size={20} />
                                <span className="text-xs font-black uppercase tracking-widest">Article Summary</span>
                            </div>
                            <p className={`text-lg italic font-medium leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                                "{post.excerpt}"
                            </p>
                        </div>

                        {/* Article Text */}
                        <article
                            className={`prose prose-xl max-w-none 
                                ${isDark
                                    ? 'prose-invert prose-headings:text-white prose-p:text-zinc-400 prose-strong:text-white prose-li:text-zinc-400 [&_h2]:text-white [&_h3]:text-white [&_h1]:text-white'
                                    : 'prose-headings:text-zinc-900 prose-p:text-zinc-600 prose-strong:text-zinc-900 prose-li:text-zinc-600'
                                } prose-headings:font-serif prose-headings:tracking-tight prose-a:text-brand-orange prose-img:rounded-3xl prose-table:rounded-xl prose-table:overflow-hidden prose-th:bg-brand-orange prose-th:text-white prose-th:p-4 prose-td:p-4`}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Tags & Bottom Actions */}
                        <div className="mt-20 pt-10 border-t border-dashed border-zinc-500/20">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="flex flex-wrap gap-2">
                                    {post.keywords.split(',').map((keyword, i) => (
                                        <span key={i} className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full ${isDark ? 'bg-white/5 text-zinc-400' : 'bg-zinc-100 text-zinc-600'}`}>
                                            <Tag size={12} className="text-brand-orange" /> {keyword.trim()}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Share:</span>
                                    <div className="flex gap-2">
                                        {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                            <button key={i} className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isDark ? 'bg-white/5 hover:bg-brand-orange text-white' : 'bg-zinc-100 hover:bg-brand-orange hover:text-white text-zinc-600'}`}>
                                                <Icon size={18} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Related Posts - Sticky for desktop */}
                    <aside className="space-y-10 lg:sticky lg:top-28 lg:h-fit self-start">
                        {/* Newsletter/CTA Box */}
                        <div className="bg-brand-orange rounded-[2rem] p-8 text-white shadow-xl shadow-brand-orange/20">
                            <MessageCircle size={32} className="mb-6" />
                            <h4 className="text-2xl font-serif font-bold mb-4">Have Questions?</h4>
                            <p className="text-sm opacity-90 mb-8 leading-relaxed">
                                Get personalized advice for your unique situation. Our consultants are here to help.
                            </p>
                            <Link
                                to="/contact"
                                className="block w-full text-center bg-white text-brand-orange py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-transform"
                            >
                                Book Consultation
                            </Link>
                        </div>

                        {/* Related Articles List */}
                        <div>
                            <h4 className={`text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                Related Reading
                                <div className="h-[1px] flex-1 bg-zinc-500/20" />
                            </h4>
                            <div className="space-y-6">
                                {finalRelated.map((related, idx) => (
                                    <Link key={idx} to={`/resources/${related.slug}`} className="group block">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                                                <img src={related.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-[9px] font-black uppercase tracking-widest text-brand-orange mb-1 block">{related.category}</span>
                                                <h5 className={`text-sm font-bold leading-tight line-clamp-2 transition-colors ${isDark ? 'text-zinc-300 group-hover:text-white' : 'text-zinc-700 group-hover:text-zinc-900'}`}>
                                                    {related.title}
                                                </h5>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Bottom Section - More Insights */}
            <div className={`mt-32 pt-24 border-t ${isDark ? 'border-white/5' : 'border-zinc-200'}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-16">
                        <div>
                            <span className="text-brand-orange font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">Continue Exploring</span>
                            <h3 className={`text-4xl font-serif font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>More From The <span className="italic font-light text-brand-blue">Library.</span></h3>
                        </div>
                        <Link to="/resources" className={`hidden md:flex items-center gap-3 text-xs font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-zinc-900'} group`}>
                            View All Articles <div className="p-2 rounded-full border border-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all"><ChevronRight size={16} /></div>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogData.sort(() => 0.5 - Math.random()).slice(0, 3).map((r, i) => (
                            <Link key={i} to={`/resources/${r.slug}`} className="group">
                                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-6">
                                    <img src={r.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange mb-3 block">{r.category}</span>
                                <h4 className={`text-xl font-bold mb-4 leading-tight ${isDark ? 'text-white group-hover:text-zinc-400' : 'text-zinc-900 group-hover:text-brand-orange'} transition-colors`}>{r.title}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
