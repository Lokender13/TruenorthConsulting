import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Lazy load all page components
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const CareerCounselling = lazy(() => import('./pages/services/CareerCounselling'));
const StudyAbroad = lazy(() => import('./pages/services/StudyAbroad'));
const AcademicSupport = lazy(() => import('./pages/services/AcademicSupport'));
const CompetitiveExams = lazy(() => import('./pages/services/CompetitiveExams'));
const SchoolPartnerships = lazy(() => import('./pages/services/SchoolPartnerships'));
const CareerLab = lazy(() => import('./pages/services/CareerLab'));
const DigitalSolutions = lazy(() => import('./pages/services/DigitalSolutions'));
const Resources = lazy(() => import('./pages/Resources'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/legal/TermsConditions'));
const RefundPolicy = lazy(() => import('./pages/legal/RefundPolicy'));
const Disclaimer = lazy(() => import('./pages/legal/Disclaimer'));

// Loading component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />

            <Route path="/services/career-counselling-dubai" element={<CareerCounselling />} />
            <Route path="/services/study-abroad-consultants-dubai" element={<StudyAbroad />} />
            <Route path="/services/online-tutoring-academic-support" element={<AcademicSupport />} />
            <Route path="/services/profile-building-career-booster" element={<CompetitiveExams />} />
            <Route path="/services/school-career-guidance-programs" element={<SchoolPartnerships />} />
            <Route path="/services/career-lab-setup-schools" element={<CareerLab />} />
            <Route path="/services/education-digital-marketing" element={<DigitalSolutions />} />

            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </motion.div>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <div className="relative flex flex-col min-h-screen overflow-x-hidden transition-colors duration-300 bg-zinc-100 dark:bg-zinc-950">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
