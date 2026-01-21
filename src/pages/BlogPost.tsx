import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Linkedin, Twitter, Tag } from 'lucide-react';
import { blogData } from '../data/blogData';
import { useTheme } from '../contexts/ThemeContext';
import SEO from '../components/SEO';

const BlogPost = () => {
    const { slug } = useParams();
    const { theme } = useTheme();
    const navigate = useNavigate();
    const isDark = theme === 'dark';

    const post = blogData.find(p => p.slug === slug);

    useEffect(() => {
        if (!post) {
            // navigate('/resources'); // Optional: redirect if not found
        }
        window.scrollTo(0, 0);
    }, [post, navigate]);

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

    // Schema for BlogPosting
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
        "articleBody": post.content.replace(/<[^>]*>?/gm, "") // Stripped text for schema
    };

    return (
        <div className={`min-h-screen theme-transition pb-20 ${isDark ? 'bg-zinc-950 text-zinc-300' : 'bg-zinc-100 text-zinc-700'}`}>
            <SEO
                title={`${post.seoTitle} | TrueNorth Resources`}
                description={post.seoDescription}
                keywords={post.keywords}
                image={post.image}
                type="article"
                schema={schema}
            />

            {/* Hero Image Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full z-20 flex flex-col justify-end pb-12 px-4 md:px-8 max-w-7xl mx-auto">
                    <Link to="/resources" className="inline-flex items-center text-white/80 hover:text-white mb-6 uppercase tracking-widest text-xs font-bold transition-colors w-fit">
                        <ArrowLeft size={16} className="mr-2" /> Back to Resources
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="bg-brand-orange text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base font-medium">
                            <span className="flex items-center gap-2"><User size={18} /> {post.author}</span>
                            <span className="flex items-center gap-2"><Calendar size={18} /> {post.date}</span>
                            <span className="flex items-center gap-2"><Clock size={18} /> {post.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-30">
                <div className={`p-8 md:p-12 rounded-3xl shadow-xl ${isDark ? 'bg-zinc-950 border border-white/10' : 'bg-white border border-zinc-100 shadow-[0_30px_60px_rgba(0,0,0,0.05)]'}`}>

                    {/* Share Buttons */}
                    <div className="flex justify-end gap-3 mb-8 border-b pb-8 border-dashed border-gray-200 dark:border-gray-800">
                        <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 mr-2 opacity-60">
                            <Share2 size={16} /> Share:
                        </span>
                        <button className="hover:text-brand-blue transition-colors"><Facebook size={20} /></button>
                        <button className="hover:text-blue-400 transition-colors"><Twitter size={20} /></button>
                        <button className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></button>
                    </div>

                    {/* Main HTML Content */}
                    <article
                        className={`prose prose-lg max-w-none ${isDark ? 'prose-invert prose-headings:text-white prose-a:text-brand-orange' : 'prose-headings:text-gray-900 prose-a:text-brand-blue'}`}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    {post.keywords && (
                        <div className="mt-12 pt-8 border-t border-dashed border-gray-200 dark:border-gray-800">
                            <div className="flex flex-wrap gap-2">
                                {post.keywords.split(',').map((keyword, i) => (
                                    <span key={i} className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full ${isDark ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                                        <Tag size={12} /> {keyword.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-4 mt-20 text-center">
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Need personalized guidance?</h3>
                <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Our experts are ready to help you navigate your career journey.</p>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 mb-6 font-bold text-white transition-all duration-200 bg-brand-orange rounded-full hover:bg-orange-600 hover:shadow-lg">
                    Speak to a Counsellor
                </Link>
            </div>
        </div>
    );
};

export default BlogPost;
