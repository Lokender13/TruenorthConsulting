import SEO from '../components/SEO';
import { useTheme } from '../contexts/ThemeContext';
import Hero from '../components/home/Hero';

import MarqueeSection from '../components/home/MarqueeSection';
import TrustedBy from '../components/home/TrustedBy';
import StatsSection from '../components/home/StatsSection';
import ServicesGrid from '../components/home/ServicesGrid';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import InteractiveProcess from '../components/home/InteractiveProcess';
import RecentArticles from '../components/home/RecentArticles';

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
                title="TrueNorth Consulting | Best Career Counselling & Study Abroad Consultants Dubai"
                description="Premier education consultancy in Dubai. TrueNorth offers expert career counselling, psychometric assessments, and study abroad guidance for students in UAE & India."
                keywords="career counselling Dubai, study abroad consultants UAE, university admission guidance India, education consultancy UAE, IELTS coaching Dubai, TrueNorth Consulting, education advisory India, best career counsellor dubai, study abroad consultants uae"
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

            {/* Services overview with images */}
            <ServicesGrid />



            {/* Key stats to build credibility - Right after hero */}
            <StatsSection />



            {/* How it works - Interactive Infographic */}
            <InteractiveProcess />

            {/* Infinite scrolling text marquee - Visual separator */}
            <MarqueeSection />

            {/* Social proof - Universities our students got into */}
            <TrustedBy />

            {/* Testimonials for trust */}
            <Testimonials />

            {/* Recent Articles / Resources */}
            <RecentArticles />

            {/* Final CTA */}
            <CTASection />
        </div>
    );
};

export default Home;
