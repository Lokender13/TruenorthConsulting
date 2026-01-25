
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Individual Service Pages
import CareerCounselling from './pages/services/CareerCounselling';
import StudyAbroad from './pages/services/StudyAbroad';
import AcademicSupport from './pages/services/AcademicSupport';
import CompetitiveExams from './pages/services/CompetitiveExams';
import SchoolPartnerships from './pages/services/SchoolPartnerships';
import CareerLab from './pages/services/CareerLab';
import DigitalSolutions from './pages/services/DigitalSolutions';
import Resources from './pages/Resources';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import RefundPolicy from './pages/legal/RefundPolicy';
import Disclaimer from './pages/legal/Disclaimer';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Animated Routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
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

          {/* Separate routes for each service */}
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

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
// Force rebuild for new routing structure
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
