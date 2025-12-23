import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles, Phone } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import SpotlightCard from '../ui/SpotlightCard';
import AnimatedGradientText from '../ui/AnimatedGradientText';

const ServiceSidebar = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const benefits = [
        "Scientific Psychometric Assessments",
        "Global University Network",
        "98% Admission Success Rate",
        "Personalized Mentorship"
    ];

    return (
        <div className="sticky top-24 space-y-6">
            {/* Main CTA Card */}
            <SpotlightCard
                className={`rounded-2xl overflow-hidden backdrop-blur-md ${isDark
                    ? 'bg-zinc-900/80 border border-white/[0.08]'
                    : 'bg-white/90 border border-brand-orange/20 shadow-xl shadow-brand-orange/10'
                    }`}
                spotlightColor={isDark ? 'rgba(255,255,255,0.05)' : 'rgba(249,115,22,0.05)'}
            >
                <div className="p-8 relative z-10">
                    <div className="mb-6">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-4 ${isDark
                            ? 'bg-white/10 text-white/70'
                            : 'bg-orange-50 text-brand-orange border border-brand-orange/20'
                            }`}>
                            <Sparkles size={10} />
                            Start Your Journey
                        </span>

                        <h3 className={`text-2xl font-serif font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Ready to <AnimatedGradientText
                                colors={isDark
                                    ? ['#ffffff', '#a0a0a0', '#ffffff', '#606060', '#ffffff']
                                    : ['#1f2937', '#F97316', '#1f2937', '#1E6FEB', '#1f2937']
                                }
                            >Begin?</AnimatedGradientText>
                        </h3>

                        <p className={`text-sm leading-relaxed ${isDark ? 'text-white/40' : 'text-gray-500'}`}>
                            Take the first step towards your dream university. Schedule a free discovery call today.
                        </p>
                    </div>

                    {/* Quick Form */}
                    <div className="space-y-3 mb-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all ${isDark
                                ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-white/30'
                                : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand-orange/50 focus:bg-white'
                                }`}
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all ${isDark
                                ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:border-white/30'
                                : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand-orange/50 focus:bg-white'
                                }`}
                        />
                    </div>

                    <Link
                        to="/contact"
                        className={`
                            group flex items-center justify-center gap-2 w-full font-semibold py-4 rounded-xl
                            transition-all duration-300
                            ${isDark
                                ? 'bg-white text-black hover:bg-white/90'
                                : 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/20'
                            }
                        `}
                    >
                        Book Consultation
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>

                    <div className={`mt-4 flex items-center justify-center gap-2 text-xs font-medium ${isDark ? 'text-white/30' : 'text-gray-400'}`}>
                        <MessageSquare size={12} />
                        <span>Free 15-min discovery call</span>
                    </div>
                </div>
            </SpotlightCard>

            {/* Why Choose Us Card */}
            <div className={`p-6 rounded-2xl ${isDark
                ? 'bg-white/[0.02] border border-white/5'
                : 'bg-white border border-gray-100 shadow-lg shadow-gray-100'
                }`}>
                <h4 className={`font-bold text-sm mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <div className={`w-1 h-4 rounded-full ${isDark ? 'bg-white/20' : 'bg-brand-blue'}`}></div>
                    Why TrueNorth?
                </h4>

                <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-white/40' : 'text-brand-blue'}`} />
                            <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                                {benefit}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className={`mt-6 pt-6 border-t ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
                    <a href="tel:+971501420956" className={`flex items-center gap-3 group`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-white/5 group-hover:bg-white/10 text-white' : 'bg-brand-blue/5 group-hover:bg-brand-blue/10 text-brand-blue'}`}>
                            <Phone size={18} />
                        </div>
                        <div>
                            <div className={`text-xs font-medium ${isDark ? 'text-white/40' : 'text-gray-400'}`}>Have questions?</div>
                            <div className={`text-sm font-bold ${isDark ? 'text-white group-hover:text-white/90' : 'text-gray-900 group-hover:text-brand-blue'}`}>+971 50 142 0956</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;
