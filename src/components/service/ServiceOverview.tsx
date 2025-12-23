import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { serviceImages } from '../ui/ServiceImage';

interface ServiceOverviewProps {
    desc: string;
    serviceId?: string;
}

const ServiceOverview = ({ desc, serviceId }: ServiceOverviewProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const image = serviceId && serviceImages[serviceId]
        ? serviceImages[serviceId]
        : { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80', alt: 'Professional consulting session' };

    return (
        <section className="space-y-8">
            {/* Title */}
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Overview
                </span>
            </h2>

            {/* Text Content - Full Width */}
            <p className={`leading-relaxed text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                {desc}
            </p>

            {/* Realistic Image - Full Width Below Content */}
            <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 z-10 ${isDark
                    ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                    : 'bg-gradient-to-t from-gray-900/40 via-transparent to-transparent'
                    }`} />

                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Colorful accent ring */}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-white/10 z-20" />

                {/* Caption badge */}
                <div className="absolute bottom-4 left-4 z-30">
                    <div className={`px-3 py-1.5 rounded-lg backdrop-blur-md text-sm font-medium ${isDark ? 'bg-white/10 text-white' : 'bg-white/90 text-gray-800'
                        }`}>
                        {image.alt}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ServiceOverview;
