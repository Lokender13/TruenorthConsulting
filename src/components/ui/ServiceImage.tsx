import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

// High-quality realistic stock photos from Unsplash for each service
const serviceImages: Record<string, { src: string; alt: string }> = {
    'career-counselling': {
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
        alt: 'Professional career counselling session'
    },
    'study-abroad': {
        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&q=80',
        alt: 'Students at international university campus'
    },
    'academic-support': {
        src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop&q=80',
        alt: 'Student studying with tutor'
    },
    'competitive-exams': {
        src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&q=80',
        alt: 'Student preparing for competitive exams'
    },
    'school-partnerships': {
        src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop&q=80',
        alt: 'Modern school campus'
    },
    'career-lab': {
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80',
        alt: 'Modern career lab setup'
    },
    'digital-solutions': {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
        alt: 'Digital marketing analytics dashboard'
    },
};

interface ServiceImageProps {
    serviceId: string;
    className?: string;
}

const ServiceImage = ({ serviceId, className = '' }: ServiceImageProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const image = serviceImages[serviceId] || serviceImages['career-counselling'];

    return (
        <motion.div
            className={`relative overflow-hidden rounded-2xl ${className}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 z-10 ${isDark
                ? 'bg-gradient-to-t from-black/30 via-transparent to-transparent'
                : 'bg-gradient-to-t from-gray-900/20 via-transparent to-transparent'
                }`} />

            {/* Image */}
            <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
            />

            {/* Colorful accent border */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-white/10 z-20" />
        </motion.div>
    );
};

export { serviceImages };
export default ServiceImage;
