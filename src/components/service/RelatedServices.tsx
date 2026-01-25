import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { servicesData } from '../../data/servicesData';
import { ArrowRight } from 'lucide-react';

interface RelatedServicesProps {
    currentServiceId: string;
}

const RelatedServices = ({ currentServiceId }: RelatedServicesProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Filter out the current service and get up to 3 others
    const otherServices = servicesData
        .filter(s => s.id !== currentServiceId)
        .slice(0, 3);

    if (otherServices.length === 0) return null;

    return (
        <section className={`py-12 md:py-16 relative theme-transition ${isDark ? 'bg-zinc-950/0' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-center"
                >
                    <h3 className={`text-2xl md:text-3xl font-serif font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        Explore Other Services
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {otherServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/services/${service.slug}`} className="group block h-full">
                                <div className={`h-full p-6 rounded-2xl border transition-all duration-300 flex flex-col
                                    ${isDark
                                        ? 'bg-zinc-900/40 border-white/10 hover:border-white/20 hover:bg-zinc-900/60'
                                        : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-lg'
                                    }
                                `}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`p-3 rounded-xl ${isDark ? 'bg-white/5 text-white' : 'bg-gray-100 text-gray-900'}`}>
                                            <service.icon size={24} />
                                        </div>
                                        <h4 className={`text-lg font-bold leading-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                                            {service.title}
                                        </h4>
                                    </div>

                                    <p className={`text-sm mb-6 flex-grow line-clamp-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                        {service.shortDesc}
                                    </p>

                                    <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white/60 group-hover:text-white' : 'text-zinc-500 group-hover:text-zinc-900'}`}>
                                        Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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

export default RelatedServices;
