import { useTheme } from '../../contexts/ThemeContext';
import SEO from '../../components/SEO';

const RefundPolicy = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={`min-h-screen theme-transition py-32 px-4 ${isDark ? 'bg-zinc-950 text-zinc-300' : 'bg-gray-50 text-zinc-700'}`}>
            <SEO title="Refund Policy | TrueNorth Consulting" description="Refund Policy for TrueNorth Consulting services." />
            <div className="max-w-4xl mx-auto">
                <h1 className={`text-4xl font-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Refund Policy</h1>
                <div className="space-y-6 text-lg leading-relaxed">
                    <p>Last updated: January 2025</p>
                    <p>We want you to be completely satisfied with our services. However, due to the nature of our consulting and counselling services, we have specific guidelines regarding refunds.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>1. Service Cancellation</h2>
                    <p>Clients may cancel a service booking up to 24 hours before the scheduled session for a full refund. Cancellations made within 24 hours of the session may be subject to a cancellation fee.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>2. Package Refunds</h2>
                    <p>For multi-session packages, refunds are calculated on a pro-rata basis for unused sessions, minus an administrative fee. Once a significant portion of the service (e.g., Psychometric Report generation) has been delivered, that portion is non-refundable.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>3. Contact</h2>
                    <p>If you have any questions concerning our return policy, please contact us at: contact@truenorthae.com</p>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
