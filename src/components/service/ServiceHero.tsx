import CareerCounsellingHero from './heroes/CareerCounsellingHero';
import StudyAbroadHero from './heroes/StudyAbroadHero';
import AcademicSupportHero from './heroes/AcademicSupportHero';
import CompetitiveExamsHero from './heroes/CompetitiveExamsHero';
import SchoolPartnershipsHero from './heroes/SchoolPartnershipsHero';
import DigitalSolutionsHero from './heroes/DigitalSolutionsHero';
import CareerLabHero from './heroes/CareerLabHero';
import type { Service } from '../../data/servicesData';

interface ServiceHeroProps {
    service: Service;
}

const ServiceHero = ({ service }: ServiceHeroProps) => {
    switch (service.id) {
        case 'career-counselling':
            return <CareerCounsellingHero service={service} />;
        case 'study-abroad':
            return <StudyAbroadHero service={service} />;
        case 'academic-support':
            return <AcademicSupportHero service={service} />;
        case 'competitive-exams':
            return <CompetitiveExamsHero service={service} />;
        case 'school-partnerships':
            return <SchoolPartnershipsHero service={service} />;
        case 'digital-solutions':
            return <DigitalSolutionsHero service={service} />;
        case 'career-lab':
            return <CareerLabHero service={service} />;
        default:
            return <CareerCounsellingHero service={service} />;
    }
};

export default ServiceHero;
