import { useEffect } from 'react';
import { servicesData } from '../../data/servicesData';
import SEO from '../../components/SEO';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceOverview from '../../components/service/ServiceOverview';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceProcess from '../../components/service/ServiceProcess';
import ServiceAudience from '../../components/service/ServiceAudience';
import ServiceFAQ from '../../components/service/ServiceFAQ';

import StudentProfilerCTA from '../../components/service/StudentProfilerCTA';
import { useTheme } from '../../contexts/ThemeContext';

const StudyAbroad = () => {
    const service = servicesData.find(s => s.id === "study-abroad");
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => { window.scrollTo(0, 0); }, []);
    if (!service) return null;

    return (
        <div className={`min-h-screen theme-transition ${isDark ? 'bg-black' : 'bg-white'}`}>
            <SEO title={service.seo.title} description={service.seo.description} keywords={service.seo.keywords} schema={{ "@context": "https://schema.org", "@type": "Service", "name": service.title, "description": service.shortDesc, "provider": { "@type": "EducationalOrganization", "name": "TrueNorth Consulting" } }} />
            <ServiceHero service={service} />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="space-y-16">
                    <ServiceOverview desc={service.fullDesc} serviceId={service.id} />
                    <StudentProfilerCTA />
                    <ServiceFeatures features={service.features} />
                    <ServiceProcess process={service.process} />
                    <ServiceBenefits benefits={service.benefits} />
                    <ServiceAudience audience={service.targetAudience} />
                    <ServiceFAQ faq={service.faq} />
                </div>
            </div>
        </div>
    );
};

export default StudyAbroad;
