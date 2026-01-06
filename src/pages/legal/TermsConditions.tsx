import { useTheme } from '../../contexts/ThemeContext';
import SEO from '../../components/SEO';

const TermsConditions = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={`min-h-screen theme-transition py-32 px-4 ${isDark ? 'bg-zinc-950 text-zinc-300' : 'bg-gray-50 text-zinc-700'}`}>
            <SEO title="Terms & Conditions | TrueNorth Consulting" description="Terms and Conditions for TrueNorth Consulting." />
            <div className="max-w-4xl mx-auto">
                <h1 className={`text-4xl font-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Terms & Conditions</h1>
                <div className="space-y-6 text-lg leading-relaxed">
                    <p>Last updated: January 2025</p>
                    <p>Welcome to TrueNorth Consulting. These terms and conditions outline the rules and regulations for the use of our Website and Services.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>1. Acceptance of Terms</h2>
                    <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use TrueNorth Consulting if you do not agree to take all of the terms and conditions stated on this page.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>2. Services</h2>
                    <p>We provide educational consultancy and career counselling services. All services are subject to availability and acceptance of your application.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>3. Intellectual Property</h2>
                    <p>Unless otherwise stated, TrueNorth Consulting and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>4. Limitation of Liability</h2>
                    <p>In no event shall TrueNorth Consulting, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
