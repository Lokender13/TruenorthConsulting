import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import MarqueeSection from '../components/home/MarqueeSection';
import TrustedBy from '../components/home/TrustedBy';
import StatsSection from '../components/home/StatsSection';
import ServicesGrid from '../components/home/ServicesGrid';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import StrategicDNA from '../components/home/StrategicDNA';
import InteractiveProcess from '../components/home/InteractiveProcess';

const Home = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const homeSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "TrueNorth Consulting - Career Counselling & Education Consultancy",
        "description": "Premier career counselling and education consultancy based in Dubai, UAE. Expert guidance for study abroad, university admissions, and career planning.",
        "url": "https://www.truenorthae.com/",
        "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "TrueNorth Consulting",
            "description": "Premier career counselling and education consultancy helping students navigate their path to success."
        }
    };

    return (
        <div className={`min-h-screen theme-transition relative overflow-hidden ${isDark ? 'bg-zinc-950 text-white' : 'bg-[#FAFAFA] text-zinc-900'}`}>
            <SEO
                title="Career Counselling & Education Consultancy in Dubai"
                description="TrueNorth Consulting is a premier career counselling and education consultancy based in Dubai, UAE. Expert guidance for study abroad, university admissions, IB/CBSE/British curriculum support, and personalized career planning. Founded by Surabhi Rawat."
                keywords="career counselling Dubai, education consultancy UAE, study abroad consultant, university admissions, IB curriculum support, CBSE tutoring, British curriculum, psychometric assessment, Surabhi Rawat, TrueNorth"
                canonical="/"
                schema={homeSchema}
            />

            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] rounded-full blur-[150px] transition-colors duration-1000
                    ${isDark ? 'bg-brand-blue/10' : 'bg-brand-blue/[0.08]'}`} />
                <div className={`absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] rounded-full blur-[150px] transition-colors duration-1000
                    ${isDark ? 'bg-brand-orange/10' : 'bg-brand-orange/[0.08]'}`} />
            </div>

            {/* Grid Pattern */}
            <div
                className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
                style={{
                    backgroundImage: `linear-gradient(to right, ${isDark ? 'white' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px), 
                                      linear-gradient(to bottom, ${isDark ? 'white' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Hero - Main landing section with lead form */}
            <Hero />

            {/* About Section - Brief intro about Truenorth - ADDED NEW */}
            <AboutSection />

            {/* The 1% Strategic Framework - High-impact marketing hook */}
            <StrategicDNA />

            {/* Key stats to build credibility - Right after hero */}
            <StatsSection />

            {/* Services overview with images */}
            <ServicesGrid />

            {/* How it works - Interactive Infographic */}
            <InteractiveProcess />

            {/* Infinite scrolling text marquee - Visual separator */}
            <MarqueeSection />

            {/* Social proof - Universities our students got into */}
            <TrustedBy />

            {/* Testimonials for trust */}
            <Testimonials />

            {/* Final CTA */}
            <CTASection />
        </div>
    );
};

export default Home;
