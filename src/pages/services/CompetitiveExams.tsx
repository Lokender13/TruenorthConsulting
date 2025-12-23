import { useEffect } from 'react';
import { servicesData } from '../../data/servicesData';
import SEO from '../../components/SEO';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceOverview from '../../components/service/ServiceOverview';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceFAQ from '../../components/service/ServiceFAQ';
import ServiceSidebar from '../../components/service/ServiceSidebar';
import { useTheme } from '../../contexts/ThemeContext';

const CompetitiveExams = () => {
    const service = servicesData.find(s => s.id === "competitive-exams");
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => { window.scrollTo(0, 0); }, []);
    if (!service) return null;

    return (
        <div className={`min-h-screen theme-transition ${isDark ? 'bg-black' : 'bg-white'}`}>
            <SEO title={service.seo.title} description={service.seo.description} schema={{ "@context": "https://schema.org", "@type": "Service", "name": service.title, "description": service.shortDesc, "provider": { "@type": "EducationalOrganization", "name": "TrueNorth Consulting" } }} />
            <ServiceHero service={service} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-16">
                        <ServiceOverview desc={service.fullDesc} serviceId={service.id} />
                        <ServiceFeatures features={service.features} />
                        <ServiceBenefits benefits={service.benefits} />
                        <ServiceFAQ faq={service.faq} />
                    </div>
                    <div className="lg:col-span-1"><ServiceSidebar /></div>
                </div>
            </div>
        </div>
    );
};

export default CompetitiveExams;
