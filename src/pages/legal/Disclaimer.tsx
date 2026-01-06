import { useTheme } from '../../contexts/ThemeContext';
import SEO from '../../components/SEO';

const Disclaimer = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={`min-h-screen theme-transition py-32 px-4 ${isDark ? 'bg-zinc-950 text-zinc-300' : 'bg-gray-50 text-zinc-700'}`}>
            <SEO title="Disclaimer | TrueNorth Consulting" description="Disclaimer for TrueNorth Consulting." />
            <div className="max-w-4xl mx-auto">
                <h1 className={`text-4xl font-serif font-bold mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Disclaimer</h1>
                <div className="space-y-6 text-lg leading-relaxed">
                    <p>Last updated: January 2025</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>1. General Information</h2>
                    <p>The information provided by TrueNorth Consulting on our website is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>2. Professional Advice</h2>
                    <p>The educational and career information provided is for general guidance and does not substitute for professional advice tailored to your specific situation. We recommend consulting with our professionals directly for advice pertinent to your specific circumstances.</p>

                    <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>3. External Links</h2>
                    <p>Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with TrueNorth Consulting. Please note that the TrueNorth Consulting does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
                </div>
            </div>
        </div>
    );
};

export default Disclaimer;
