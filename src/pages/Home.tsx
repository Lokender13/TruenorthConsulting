import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import MarqueeSection from '../components/home/MarqueeSection';
import TrustedBy from '../components/home/TrustedBy';
import StatsSection from '../components/home/StatsSection';
import ServicesGrid from '../components/home/ServicesGrid';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
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
        <div className="min-h-screen bg-gray-900">
            <SEO
                title="Career Counselling & Education Consultancy in Dubai"
                description="TrueNorth Consulting is a premier career counselling and education consultancy based in Dubai, UAE. Expert guidance for study abroad, university admissions, IB/CBSE/British curriculum support, and personalized career planning. Founded by Surabhi Rawat."
                keywords="career counselling Dubai, education consultancy UAE, study abroad consultant, university admissions, IB curriculum support, CBSE tutoring, British curriculum, psychometric assessment, Surabhi Rawat, TrueNorth"
                canonical="/"
                schema={homeSchema}
            />

            {/* Hero - Main landing section with lead form */}
            <Hero />

            {/* Key stats to build credibility - Right after hero */}
            <StatsSection />

            {/* Services overview with images */}
            <ServicesGrid />

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
