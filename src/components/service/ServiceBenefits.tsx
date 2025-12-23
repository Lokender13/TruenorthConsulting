import { useTheme } from '../../contexts/ThemeContext';

interface ServiceBenefitsProps {
    benefits: string[];
}

const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section>
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Why Choose This?</h2>
            <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                    <li key={idx} className={`flex items-center gap-3 ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
                        <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/30' : 'bg-gray-400'}`}></div>
                        <span>{benefit}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ServiceBenefits;
