import { useTheme } from '../../contexts/ThemeContext';
import SEO from '../../components/SEO';

const PrivacyPolicy = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={`min-h-screen theme-transition py-32 px-4 ${isDark ? 'bg-zinc-950 text-zinc-300' : 'bg-gray-50 text-zinc-700'}`}>
            <SEO title="Privacy Policy | TrueNorth Consulting" description="Privacy Policy for TrueNorth Consulting." />
            <div className="max-w-4xl mx-auto">
                <h1 className={`text-4xl font-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Privacy Policy</h1>
                <div className="space-y-6 text-lg leading-relaxed">
                    <p>Last updated: January 2025</p>
                    <p>At TrueNorth Consulting, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage our services.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>1. Information We Collect</h2>
                    <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise contact us. This may include names, phone numbers, email addresses, and educational background.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>2. How We Use Your Information</h2>
                    <p>We use the information we collect to provide, operate, and maintain our website, improve your experience, and communicate with you regarding our services, updates, and promotional offers.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>3. Data Security</h2>
                    <p>We implement appropriate technical and organizational security measures to protect the security of your personal information. However, please also remember that we cannot guarantee that the internet itself is 100% secure.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>4. Contact Us</h2>
                    <p>If you have questions or comments about this policy, you may email us at contact@truenorthae.com.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
