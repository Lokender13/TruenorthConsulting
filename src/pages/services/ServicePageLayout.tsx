import { useEffect, useRef } from 'react';
import { servicesData } from '../../data/servicesData';
import type { Service } from '../../data/servicesData';
import SEO from '../../components/SEO';
import ServiceHero from '../../components/service/ServiceHero';
import ServiceOverview from '../../components/service/ServiceOverview';
import ServiceFeatures from '../../components/service/ServiceFeatures';
import ServiceBenefits from '../../components/service/ServiceBenefits';
import ServiceProcess from '../../components/service/ServiceProcess';
import ServiceAudience from '../../components/service/ServiceAudience';
import ServiceFAQ from '../../components/service/ServiceFAQ';
import PsychometricAssessment from '../../components/service/PsychometricAssessment';
import { useTheme } from '../../contexts/ThemeContext';
import { motion, useScroll, useSpring } from 'framer-motion';
import CTASection from '../../components/home/CTASection';
import RelatedServices from '../../components/service/RelatedServices';


const Section = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

const SectionDivider = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`h-px w-full bg-gradient-to-r from-transparent via-${isDark ? 'white/20' : 'brand-blue/20'} to-transparent opacity-50`} />
        </div>
    );
};

interface ServicePageLayoutProps {
    serviceId: string;
    children?: React.ReactNode;
}

const ServicePageLayout = ({ serviceId, children }: ServicePageLayoutProps) => {
    const service = servicesData.find(s => s.id === serviceId);
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    if (!service) return null;

    const has = (key: keyof Service) => service[key] && (service[key] as any[]).length > 0;

    return (
        <div ref={containerRef} className={`min-h-screen theme-transition relative overflow-hidden ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-900'}`}>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-purple-500 to-brand-blue z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] rounded-full blur-[150px] transition-colors duration-1000
                    ${isDark ? 'bg-brand-blue/10' : 'bg-brand-blue/[0.08]'}`} />
                <div className={`absolute bottom-[-10%] right-[-10%] w-[1000px] h-[1000px] rounded-full blur-[150px] transition-colors duration-1000
                    ${isDark ? 'bg-brand-orange/10' : 'bg-brand-orange/[0.08]'}`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] transition-colors duration-1000
                    ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/[0.05]'}`} />
            </div>

            <SEO
                title={service.seo.title}
                description={service.seo.description}
                keywords={service.seo.keywords}
                schema={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Service",
                            "name": service.title,
                            "description": service.shortDesc,
                            "provider": {
                                "@type": "EducationalOrganization",
                                "name": "TrueNorth Consulting"
                            }
                        },
                        ...(service.faq && service.faq.length > 0 ? [{
                            "@type": "FAQPage",
                            "mainEntity": service.faq.map(item => ({
                                "@type": "Question",
                                "name": item.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": item.answer
                                }
                            }))
                        }] : [])
                    ]
                }}
            />

            <ServiceHero service={service} />

            <main className="relative">
                {/* Refined Grid Pattern */}
                <div
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
                    style={{
                        backgroundImage: `linear-gradient(to right, ${isDark ? 'white' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px), 
                                          linear-gradient(to bottom, ${isDark ? 'white' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                    }}
                />

                <div className="relative z-10">
                    <div className="space-y-0">
                        {service.fullDesc && (
                            <Section>
                                <ServiceOverview
                                    desc={service.fullDesc}
                                    serviceId={service.id}
                                    duration={service.duration}
                                    pricing={service.pricing}
                                />
                            </Section>
                        )}

                        {children && (
                            <>
                                <SectionDivider />
                                <Section>
                                    <div className="py-12">
                                        {children}
                                    </div>
                                </Section>
                            </>
                        )}

                        {serviceId === 'career-counselling' && (
                            <>
                                <SectionDivider />
                                <Section>
                                    <PsychometricAssessment />
                                </Section>
                            </>
                        )}

                        {has('features') && (
                            <>
                                <SectionDivider />
                                <Section>
                                    <ServiceFeatures features={service.features} />
                                </Section>
                            </>
                        )}

                        {has('process') && (
                            <>
                                <SectionDivider />
                                <Section>
                                    <ServiceProcess process={service.process} />
                                </Section>
                            </>
                        )}

                        {has('benefits') && (
                            <>
                                <SectionDivider />
                                <Section>
                                    <ServiceBenefits benefits={service.benefits} />
                                </Section>
                            </>
                        )}

                        {has('targetAudience') && (
                            <>
                                <SectionDivider />
                                <Section>
                                    <ServiceAudience audience={service.targetAudience} />
                                </Section>
                            </>
                        )}

                        {has('faq') && (
                            <>
                                <SectionDivider />
                                <Section>
                                    <ServiceFAQ faq={service.faq} />
                                </Section>
                            </>
                        )}

                        <SectionDivider />
                        <Section>
                            <RelatedServices currentServiceId={service.id} />
                        </Section>

                        <SectionDivider />
                        <Section>
                            <CTASection />
                        </Section>
                    </div>
                </div>
            </main>

            {/* Floating Action Button */}
            <motion.div
                className="fixed bottom-8 right-8 z-[90] flex flex-col gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
            >
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border
                        ${isDark ? 'bg-zinc-900 border-white/10 text-white hover:bg-zinc-800' : 'bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50'}
                    `}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ServicePageLayout;
