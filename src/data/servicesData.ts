import { BookOpen, Globe, GraduationCap, BarChart, Users, Building, Laptop } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    shortDesc: string;
    fullDesc: string;
    icon: LucideIcon;
    color: string;
    gradient: string;
    features: string[];
    benefits: string[];
    process: {
        step: string;
        title: string;
        description: string;
    }[];
    targetAudience: string[];
    faq: {
        question: string;
        answer: string;
    }[];
    duration: string;
    pricing: string;
    seo: {
        title: string;
        description: string;
        keywords: string;
    };
}

export const servicesData = [
    {
        id: "career-counselling",
        slug: "career-counselling-psychometric-assessments",
        title: "Career Counselling & Psychometric Assessments",
        tagline: "Ignite Your Future with Data-Driven Clarity & Purpose",
        shortDesc: "Experience the world's most advanced career discovery journey. We blend AI-powered psychometrics with empathetic human mentorship to architect your perfect success story.",
        fullDesc: "Embark on a transformative journey of self-discovery with TrueNorth's elite Career Counselling ecosystem. We believe that every individual is a powerhouse of untapped potential waiting to be unleashed. In today's dynamic world, 'good enough' is not enough—you deserve a career that sets your soul on fire. Our proprietary 5-Dimensional Assessment Framework goes beyond basic aptitude; it decodes your DNA of success by analyzing your unique Personality, Core Interests, Emotional Intelligence, and Orientation style. This isn't just counselling; it's career architecture. Whether you are a student standing at a crossroads or a professional yearning for a breakthrough, our certified experts provide the profound clarity, strategic roadmap, and unwavering confidence you need to dominate your chosen field and live a life of fulfillment.",
        icon: BookOpen,
        color: "bg-blue-50",
        gradient: "from-blue-500 to-cyan-500",
        features: [
            "Advanced 5-Dimensional Psychometric Profiling (Personality, Aptitude, Interest, EQ, Orientation)",
            "Detailed 35+ Page Comprehensive 'Career Blueprint' Report",
            "One-on-One Strategic Mentorship with Certified Industry Experts",
            "Scientific Stream Selector for Class 8-10: Choose with Absolute Certainty",
            "Future-Ready College & Course Mapping for Class 11-12",
            "Professional Career Shift & Growth Strategy for Graduates",
            "Actionable 5-Year Roadmap with Milestones & Success Tracking"
        ],
        benefits: [
            "Gain 100% clarity and eliminate the stress of uncertainty forever",
            "Discover your 'Genius Zone'—where your passion meets your talent",
            "Save precious years and money by making the right choice instantly",
            "Align your personal happiness with professional massive success",
            "Empower parents and students with a unified, conflict-free vision"
        ],
        process: [
            {
                step: "01",
                title: "Discovery & Assessment",
                description: "We begin with our industry-leading 5-dimensional psychometric test. This online assessment takes about 60-90 minutes and rigorously analyzes your personality, aptitude, interests, and emotional quotient."
            },
            {
                step: "02",
                title: "Report Generation & Analysis",
                description: "Our AI engine generates a comprehensive 30+ page Career Blueprint. Our senior analysts then review this report to identify patterns, strengths, and unique trait combinations."
            },
            {
                step: "03",
                title: "Expert Consultation",
                description: "You and your parents join a deep-dive session with a certified counsellor. We decode the report, discuss aspirations, address concerns, and explore the most suitable career pathways."
            },
            {
                step: "04",
                title: "Roadmap Creation",
                description: "We co-create a concrete action plan. This includes stream selection, subject choices, entrance exam timelines, and a list of target colleges or courses aligned with your goals."
            },
            {
                step: "05",
                title: "Implementation & Follow-up",
                description: "You don't walk away alone. We provide post-counselling support to ensure you stay on track, offering guidance on profile building and skill development as you progress."
            }
        ],
        targetAudience: [
            "Grade 8-10 Students (Stream Selection)",
            "Grade 11-12 Students (College & Course Selection)",
            "Undergraduates (Career Planning & Masters)",
            "Working Professionals (Career Pivot & Growth)",
            "Concerned Parents seeking scientific guidance"
        ],
        faq: [
            {
                question: "How will this transform my career journey?",
                answer: "Think of this as your personal GPS for success. Instead of guessing and taking wrong turns, you get a scientifically validated, direct route to a career where you will naturally excel and feel happiest."
            },
            {
                question: "Is this effective for experienced professionals feeling stuck?",
                answer: "Absolutely! It is a game-changer. We specialize in 'Career Renaissance.' We uncover your transferable superpowers and identify emerging domains where your experience will be valued most, reigniting your professional passion."
            },
            {
                question: "How reliable is the scientific analysis?",
                answer: "Our assessments are world-class, boasting a validation accuracy of over 97%. They are the gold standard used by global organizations to identify top talent, adapted now for your personal growth."
            }
        ],
        duration: "2-3 Sessions (Assessment + Report Analysis + Planning)",
        pricing: "Custom packages available starting from AED 1500",
        seo: {
            title: "Best Career Counselling India | Scientific Psychometric Tests",
            description: "Unlock your dream future with India's #1 Career Counselling & Psychometric Analysis. Expert guidance for students & professionals to achieve 100% career clarity and success.",
            keywords: "best career counselling india, career counselling in dubai, career guidance dubai, psychometric test for students, career path finder, online career guidance, stream selector test, career counselling for professionals"
        }
    },
    {
        id: "study-abroad",
        slug: "university-admissions-study-abroad",
        title: "University Admissions & Study Abroad Consulting",
        tagline: "Your VIP Pass to the World's Most Prestigious Universities",
        shortDesc: "Turn your global ambitions into reality. We craft irresistible application narratives that open doors to the Ivy League and top-tier universities worldwide.",
        fullDesc: "Step onto the global stage and claim your place among the world's best. TrueNorth's Study Abroad division is more than a consultancy; we are your strategic partners in global dominance. We specialize in 'Profile Alchemizing'—turning your achievements into compelling stories that captivate admissions officers at Harvard, Oxford, Stanford, and beyond. From the bustling campuses of the USA to the historic halls of the UK, Canada, Australia, and Europe, our expertise knows no borders. We meticulously manage every pixel of your application strategy: hyper-personalized university selection, world-class SOP editing, rigorous interview simulations, and scholarship head-hunting. With TrueNorth, you don't just apply; you arrive.",
        icon: Globe,
        color: "bg-orange-50",
        gradient: "from-orange-500 to-red-500",
        features: [
            "Ivy League & Top-100 Global University Acceptance Strategy",
            "Holistic 'Profile Alchemist' Mentorship for Extraordinary Applications",
            "Precision AI-driven Country & University Fitment Analysis",
            "World-Class Editing for SOPs, LORs, and Admission Essays by Experts",
            "Maximum Scholarship & Financial Aid Discovery Engine",
            "Visa Success Blueprint: Mock Interviews & Financial Documentation",
            "Exclusive Pre-departure 'Global Citizen' Orientation"
        ],
        benefits: [
            "Skyrocket your acceptance chances at your dream dream universities",
            "Secure significant scholarships to maximize return on education",
            "Experience a stress-free, seamless application process from start to fly",
            "Stand out from thousands of applicants with a unique personal brand",
            "Launch a global career with a prestigious international degree"
        ],
        process: [
            {
                step: "01",
                title: "Profile Evaluation & Strategy",
                description: "We assess your academic history, extracurriculars, and test scores to build a 'Gap Analysis' and a strategic roadmap for your target universities."
            },
            {
                step: "02",
                title: "University & Course Shortlisting",
                description: "Using data-backed insights, we curate a balanced list of Ambitious, Target, and Safe universities that align with your career goals and budget."
            },
            {
                step: "03",
                title: "Application Mentoring & SOP Editing",
                description: "Our editors work with you to craft compelling Essays and SOPs. We ensure your application tells a unique story that resonates with admissions committees."
            },
            {
                step: "04",
                title: "Application Submission & Interviews",
                description: "We handle the complex documentation and submission process. We also conduct rigorous mock interviews to prepare you for university/visa interactions."
            },
            {
                step: "05",
                title: "Visa & Pre-Departure",
                description: "From financial documentation to visa interview prep, we hold your hand until you board the flight. We also connect you with alumni in your destination country."
            }
        ],
        targetAudience: [
            "High School Students (Undergraduate Abroad)",
            "Graduates (Masters/MBA Abroad)",
            "PhD Aspirants",
            "Working Professionals seeking Global Exposure"
        ],
        faq: [
            {
                question: "When should I ignite my study abroad dream?",
                answer: "The best time is NOW! Ideally, 12-18 months prior gives us the perfect runway to build a stellar profile, ace standardized tests (SAT/GRE), and craft a masterpiece application without rush."
            },
            {
                question: "Can TrueNorth help me get full scholarships?",
                answer: "Yes! We are scholarship hunters. We aggressively identify merit-based and profile-based funding opportunities and help you write winning scholarship essays to fund your global education."
            },
            {
                question: "What is your Visa success rate?",
                answer: "We hold a near-perfect track record. Our 'Visa Blueprint' preparation ensures your financial papers are bulletproof and your interview confidence is unshakeable."
            }
        ],
        duration: "End-to-End Support (6-12 Months recommended)",
        pricing: "Tailored based on number of universities and regions",
        seo: {
            title: "Top Study Abroad Consultants | Ivy League & Global Admissions",
            description: "Premier overseas education consultants for USA, UK, Canada, Australia. Expert guidance for Ivy League admissions, scholarships, SOPs & student visas.",
            keywords: "study abroad consultants, study abroad consultants uae, university admission guidance india, overseas education experts, study in USA, study in UK, ivy league admissions, sop writing services, scholarship assistance"
        }
    },
    {
        id: "academic-support",
        slug: "academic-support-online-tutoring",
        title: "Academic Support & Online Tutoring",
        tagline: "Achieve Academic Mastery & Ignite Your Grades",
        shortDesc: "Experience the power of elite mentorship. Premium online tutoring for IB, IGCSE, and CBSE that turns academic challenges into effortless top scores.",
        fullDesc: "Transform your academic trajectory from 'average' to 'exceptional' with TrueNorth's Academic Mastery programs. We don't just teach subjects; we spark a love for learning. Our faculty comprises top-tier educators, PhD scholars, and industry veterans who masterfully deconstruct complex concepts in IB (PYP, MYP, DP), IGCSE, A-Level, and CBSE curriculums. Imagine Physics becoming intuitive, Calculus becoming fun, and Literature becoming alive! Our hyper-personalized, one-on-one approach adapts instantly to your learning speed, ensuring zero gaps in understanding. With a relentless focus on exam strategy, time management, and answer precision, we empower you to walk into every exam hall with the confidence of a topper.",
        icon: GraduationCap,
        color: "bg-gray-50",
        gradient: "from-emerald-500 to-teal-500",
        features: [
            "Premium One-on-One Live Interactive Tutoring Sessions",
            "Curriculum Specialists for IB (DP/MYP), IGCSE, A-Levels & CBSE",
            "Mastery Modules for Math, Physics, Chemistry, Biology, Economics & English",
            "Expert 'Grade-Booster' Guidance for IAs, EEs, and TOK",
            "Extensive Past Paper Drills & Exam Simulation Workshops",
            "Flexible 'Learning on Demand' Scheduling for Busy Students",
            "Real-time Performance Analytics & Parent Success Reports"
        ],
        benefits: [
            "Witness a rapid, tangible jump in grades and predicted scores",
            "Gain crystal-clear conceptual understanding that lasts a lifetime",
            "Master elite exam techniques to maximize marks in every paper",
            "Reduce study stress with smarter, structured learning plans",
            "Learn from the safety and comfort of your home, saving travel time"
        ],
        process: [
            {
                step: "01",
                title: "Diagnostic Assessment",
                description: "We assess the student's current understanding, weak areas, and learning style through a specialized diagnostic test and interaction."
            },
            {
                step: "02",
                title: "Personalized Learning Plan",
                description: "We design a custom curriculum map that aligns with school timelines but accelerates concept mastery, ensuring the student is always ahead of the class."
            },
            {
                step: "03",
                title: "Interactive Sessions",
                description: "Classes are conducted on a premium virtual whiteboard. We use visualization, real-world examples, and Socratic questioning to deepen understanding."
            },
            {
                step: "04",
                title: "Regular Testing & Feedback",
                description: "Weekly mini-tests and monthly full-length mock exams track progress. Detailed feedback reports are shared with parents to ensure transparency."
            },
            {
                step: "05",
                title: "Exam Strategy & Final Sprint",
                description: "In the final months, we shift focus to past paper drills, time management techniques, and 'marker-friendly' answer writing strategies."
            }
        ],
        targetAudience: [
            "IB Diploma (DP) & MYP Students",
            "IGCSE & A-Level Students",
            "CBSE Class 9-12 Students",
            "Students needing help with IAs/EE/TOK",
            "Homeschoolers"
        ],
        faq: [
            {
                question: "Is online tutoring as effective as face-to-face?",
                answer: "It's even better! Our digital classrooms use advanced whiteboards and interactive tools, recording every session for your revision. You get the world's best tutors right at your desk, tailored 100% to you."
            },
            {
                question: "Do you support the rigorous IB Diploma Programme?",
                answer: "We excel at it! Our IB specialists are often examiners themselves. They provide insider strategies for HL/SL subjects and critical, grade-saving feedback on your Internal Assessments."
            },
            {
                question: "Can I try before I commit?",
                answer: "Absolutely. We invite you to a complimentary 'Discovery Session' to experience our teaching magic firsthand and see the immediate difference in your understanding."
            }
        ],
        duration: "Flexible (Hourly or Monthly Packages)",
        pricing: "Competitive hourly rates. Book a trial to discuss.",
        seo: {
            title: "Online IB, IGCSE, CBSE Tutors | Elite Math & Science Tuition",
            description: "World-class online tutoring for IB, IGCSE, A-Levels & CBSE. Logic-based mastery in Math, Physics, Chem. Boost your grades with India's best tutors.",
            keywords: "online ib tutors, igcse maths tutor, cbse online coaching, physics tuition, chemistry tutors, academic excellence, homework help, exam preparation"
        }
    },
    {
        id: "competitive-exams",
        slug: "competitive-exam-language-preparation",
        title: "Competitive Exam & Language Preparation",
        tagline: "Crush Your Targets: Strategic Prep for High-Stakes Success",
        shortDesc: "Dominate the competition with our high-impact training for IELTS, TOEFL, SAT, NEET, and JEE. We turn aspirants into achievers.",
        fullDesc: "Victory in competitive exams belongs to the prepared. TrueNorth's Exam Prep wing is your training ground for champions. Whether your goal is a top global university or a premier Indian institute, we provide the arsenal you need to win. Our language mastery courses (IELTS, TOEFL, PTE) are designed to rocket you to Band 8+ and 110+ scores effortlessly. For the science wizards, our NEET and JEE Foundation programs build bedrock-strong concepts and lightning-fast problem-solving reflexes. We move beyond teaching—we coach you in 'Test-Taking Warfare': strategic guessing, time dilation, and stress immunity. With our rigorous mock drills and AI-driven performance insights, you won't just take the exam; you will own it.",
        icon: BarChart,
        color: "bg-blue-50",
        gradient: "from-indigo-600 to-purple-600",
        features: [
            "High-Octane IELTS, TOEFL, & PTE Academic Coaching",
            "SAT & ACT Elite Prep: Verbal & Quant Mastery",
            "JEE & NEET strong Foundation Courses for Class 8-10 Leaders",
            "Full-Length Mock Test Series with Deep-Dive Error Analysis",
            "Advanced Vocabulary, Speed Reading & Critical Thinking Drills",
            "Micro-Batch Sizes for Hyper-Personalized Attention",
            "Intensive 'Last Mile' Crash Courses & Revision Bootcamps"
        ],
        benefits: [
            "Secure the top-percentile scores demanded by world-class universities",
            "Develop lightning speed and laser accuracy in problem-solving",
            "Master the psychology of test-taking to eliminate exam fear",
            "Access an unlimited repository of premium practice resources",
            "Build a foundation of excellence that serves you beyond exams"
        ],
        process: [
            {
                step: "01",
                title: "Baseline Assessment",
                description: "We start with a full-length diagnostic test to identify your current score, strengths, and specific areas for improvement."
            },
            {
                step: "02",
                title: "Concept Building",
                description: "We break down the syllabus into manageable modules. Our expert faculty ensures you understand the core logic behind every concept."
            },
            {
                step: "03",
                title: "Strategy Workshops",
                description: "We teach you specific hacks for each section—skimming for Reading, templates for Writing, mnemonics for Science, and elimination for MCQs."
            },
            {
                step: "04",
                title: "Drill & Practice",
                description: "Intensive practice with sectional tests. We focus on increasing your speed and accuracy systematically through timed drills."
            },
            {
                step: "05",
                title: "Mock Marathon",
                description: "In the final weeks, you take full-length simulated exams under real test conditions. We analyze each test to fine-tune your final strategy."
            }
        ],
        targetAudience: [
            "Study Abroad Aspirants (IELTS/TOEFL/SAT)",
            "Medical & Engineering Aspirants (NEET/JEE)",
            "Professionals migrating abroad (IELTS General)",
            "Students wanting to build strong foundation (Class 8-10)"
        ],
        faq: [
            {
                question: "How fast can I master IELTS/TOEFL?",
                answer: "With our 'Fast-Track Success' modules, many students achieve their target scores in as little as 2-4 weeks. We focus on high-yield strategies that give you the maximum point boost."
            },
            {
                question: "Is the study material comprehensive?",
                answer: "It is exhaustive and premium. You get access to the latest question banks, listening audio tracks, high-scoring writing templates, and realistic mock tests."
            },
            {
                question: "Do you offer flexible timings?",
                answer: "Yes! We run multiple batches including evenings and weekends to fit perfectly into your school or work schedule. Both online and offline options are available."
            }
        ],
        duration: "3-6 Months Comprehensive Courses",
        pricing: "Course-based pricing. Contact for current batch fees.",
        seo: {
            title: "Best IELTS, TOEFL, SAT, JEE, NEET Coaching | Score Booster",
            description: "Top-rated coaching for IELTS, TOEFL, SAT & JEE/NEET Foundation. Strategic prep, expert faculty, and proven results for high-stakes exams.",
            keywords: "ielts coaching classes, ielts coaching dubai, toefl preparation, sat exam prep, neet foundation course, jee coaching, competitive exam training, english language mastery"
        }
    },
    {
        id: "school-partnerships",
        slug: "school-college-partnerships",
        title: "School & College Partnerships",
        tagline: "Empowering Institutions to Build Future Leaders",
        shortDesc: "Partner with TrueNorth to integrate a world-class career guidance infrastructure directly into your academic ecosystem. Elevate your institution's brand.",
        fullDesc: "Visionary schools know that education is not just about marks; it's about life success. TrueNorth collaborates with forward-thinking institutions to become their external 'Center of Excellence' for Career Guidance. We seamlessly integrate with your academic calendar to deliver a structured, year-long Career Curriculum for students from Class 8 to 12. From energizing workshops and psychometric drives to faculty development and parent harmony sessions, we cover it all. By partnering with us, you not only fulfill the NEP (National Education Policy) mandate for holistic development but also significantly boost your university placement records—making your school the preferred choice for parents who want the best for their children.",
        icon: Users,
        color: "bg-orange-50",
        gradient: "from-orange-600 to-pink-600",
        features: [
            "Complete Outsourcing of Career Guidance Department (Turnkey Solution)",
            "Structured Year-Long Career Awareness Curriculum (Grades 8-12)",
            "Institutional Batch-wise Psychometric Profiling & Reports",
            "Strategic Stream Selection & Subject Mapping Workshops",
            "Global University Profile Building & Application Seminars",
            "High-Impact Teacher Training (FDP) & Leadership Coaching",
            "Parent Engagement Sessions to Align Goals & Expectations"
        ],
        benefits: [
            "Dramatically improve your institution's University Placement track record",
            "Achieve full compliance with NEP mandates for holistic education",
            "Enhance your brand value and admissions by offering premium career support",
            "Foster a focused, stress-free, and ambitious student community",
            "Gain powerful data analytics on student interests for strategic planning"
        ],
        process: [
            {
                step: "01",
                title: "Institutional Needs Analysis",
                description: "We consult with your leadership team to understand your school's ethos, student demographics, and specific goals for the academic year."
            },
            {
                step: "02",
                title: "Curriculum Design",
                description: "We design a bespoke Grade-wise calendar of interventions (workshops, tests, counseling) that fits seamlessly into your existing timetable."
            },
            {
                step: "03",
                title: "Launch & Orientation",
                description: "We conduct energizing orientation sessions for students, teachers, and parents to create excitement and buy-in for the program."
            },
            {
                step: "04",
                title: "Execution & Delivery",
                description: "Our experts visit your campus (or connect virtually) to deliver high-impact workshops, conduct assessments, and hold one-on-one sessions."
            },
            {
                step: "05",
                title: "Impact Reporting",
                description: "At the end of the year, we provide a detailed 'Impact Report' showcasing student progress, placement statistics, and strategic recommendations."
            }
        ],
        targetAudience: [
            "K-12 Schools (CBSE/IB/IGCSE/ICSE)",
            "Junior Colleges",
            "Universities looking for placement support",
            "Educational Trusts & Groups"
        ],
        faq: [
            {
                question: "How does this fit into our busy academic calendar?",
                answer: "Seamlessly. We design our interventions to be high-impact but low-disruption. We map our sessions to your free periods, activity hours, or specific guidance weeks."
            },
            {
                question: "Can we customize the program for our school?",
                answer: "100%. We co-create the roadmap with you. Whether you need a comprehensive annual engagement or a focused 'Career Week' power series, we tailor it to your unique ethos."
            }
        ],
        duration: "Annual Partnership / Academic Year Contract",
        pricing: "Custom institutional proposal based on student count",
        seo: {
            title: "Career Guidance for Schools | Institutional Educational Partners",
            description: "Partner with TrueNorth to set up a world-class Career Guidance Cell. Structured curriculum, student workshops, and NEP-compliant solutions for schools.",
            keywords: "school career guidance partnership, institutional career counselling, nep compliance for schools, student holistic development, career workshops for students"
        }
    },
    {
        id: "career-lab",
        slug: "career-lab-setup",
        title: "Career Lab Setup",
        tagline: "Install the Future: Your In-House Career Technology Hub",
        shortDesc: "Launch your own white-labeled, tech-enabled Career Lab. Powered by Edumilestones, we give you the infrastructure to be a self-sufficient guidance powerhouse.",
        fullDesc: "Transform your institution into a beacon of modern guidance with the 'TrueNorth Career Lab'. In exclusive association with Edumilestones, we set up a cutting-edge technological infrastructure right within your campus. Imagine a dedicated space where students can explore thousands of careers, take unlimited psychometric tests, and access global university databases—all under your school's own brand. This is a White-Labeled solution, meaning it looks, feels, and acts like YOUR innovative platform. We don't just hand over the tech; we train your staff to become Certified Career Analysts (CCA), ensuring that your school becomes a sustainable, self-reliant hub of career wisdom for generations to come.",
        icon: Building,
        color: "bg-gray-50",
        gradient: "from-gray-700 to-gray-900",
        features: [
            "Premium White-Labeled Career Portal with Your School's Branding",
            "Unlimited Access to Professional Psychometric Assessments",
            "Comprehensive Global University & Entrance Exam Database",
            "Integrated Alumni Management & Student Tracking System",
            "Certified Career Analyst (CCA) Training for Your Faculty",
            "Strategic Marketing Support to Launch Your Lab with Buzz",
            "Lifetime Technical Support & Regular Content Updates"
        ],
        benefits: [
            "Establish a massive Unique Selling Proposition (USP) for your school",
            "Generate a new revenue stream through in-house assessment services",
            "Ensure total data privacy and ownership of your student's data",
            "Create a sustainable, long-term culture of career readiness in-house",
            "Access international-standard infrastructure at a fraction of the cost"
        ],
        process: [
            {
                step: "01",
                title: "Consultation & Demo",
                description: "We demonstrate the platform's capabilities and understand your school's specific technical and branding requirements."
            },
            {
                step: "02",
                title: "White-Label Configuration",
                description: "Our tech team configures the portal with your school's logo, colors, and domain name suited to your brand guidelines."
            },
            {
                step: "03",
                title: "Installation & Integration",
                description: "We set up the necessary credentials and integrate the portal with your existing website or student management system."
            },
            {
                step: "04",
                title: "Training & Certification",
                description: "We conduct an intensive training workshop for your designated teachers/counsellors to become Certified Career Analysts (CCA)."
            },
            {
                step: "05",
                title: "Launch & Handholding",
                description: "We help you launch the lab with a student event. Our support team remains available 24/7 for any technical or functional queries."
            }
        ],
        targetAudience: [
            "Progressive Schools",
            "Coaching Centers",
            "Individual Career Counsellors",
            "EdTech Companies"
        ],
        faq: [
            {
                question: "What infrastructure do we need?",
                answer: "Surprisingly little! As a cloud-based superpower, all you need is a quiet room with computers or tablets and an internet connection. We handle the entire digital backend."
            },
            {
                question: "Will our teachers be able to manage it?",
                answer: "Yes, and they will love it! We provide intensive, certification-level training that empowers your teachers to use the platform effectively and guide students with confidence."
            }
        ],
        duration: "Setup: 4-6 Weeks | License: Annual",
        pricing: "White-label licensing fee + Setup cost",
        seo: {
            title: "Setup Career Lab in School | White Label Career Platform",
            description: "Launch a state-of-the-art Career Lab in your school. White-label technology, psychometric tools, and staff training powered by TrueNorth & Edumilestones.",
            keywords: "career lab setup, school career technology, white label career platform, edumilestones partner, career guidance infrastructure"
        }
    },
    {
        id: "digital-solutions",
        slug: "digital-solutions-education",
        title: "Digital Solutions for Educational Institutions",
        tagline: "Digital Dominance: Transforming Education Brands Online",
        shortDesc: "We build high-performance digital ecosystems for schools and consultants. From stunning websites to admission-driving SEO, we make you the #1 choice.",
        fullDesc: "In a digital-first world, your online presence is your first impression. TrueNorth's Digital Solutions wing is the specialized growth engine for the education sector. We understand that selling 'Futures' is different from selling products; it requires Trust, Authority, and Prestige. We craft breathtaking, responsive websites that tell your institution's story with impact. Our forensic SEO strategies ensure you dominate search results for keywords like 'Best School' or 'Top Consultant'. We run hyper-targeted Google & Social Media campaigns that don't just bring clicks—they bring qualified admissions. From your 'About Us' page to your 'Pay Fee' portal, we engineer a seamless 360-degree digital experience that converts parents into partners.",
        icon: Laptop,
        color: "bg-blue-50",
        gradient: "from-blue-600 to-indigo-600",
        features: [
            "Award-Winning School & College Website Design & Development",
            "Education-Specific SEO (Search Engine Optimization) Domination",
            "High-ROI Admission Lead Generation (Google/Facebook/Insta Ads)",
            "Premium Social Media Branding & Content Strategy",
            "Seamless LMS (Learning Management System) Integration",
            "Immersive Virtual Tours & Corporate Video Production",
            "Proactive Online Reputation Management (ORM)"
        ],
        benefits: [
            "Skyrocket your qualified admission leads year over year",
            "Cultivate a premium, trusted brand image that parents love",
            "Engage your community effectively with targeted communication",
            "Drastically reduce your cost-per-admission with smart marketing",
            "Deliver a flawless mobile-first experience for modern families"
        ],
        process: [
            {
                step: "01",
                title: "Digital Audit & Strategy",
                description: "We conduct a deep audit of your current online presence, identifying gaps, functional issues, and missed opportunities compared to competitors."
            },
            {
                step: "02",
                title: "Blueprint Design",
                description: "We propose a custom digital roadmap—whether it's a new website, an SEO overhaul, or a lead-gen funnel—tailored to your admission goals."
            },
            {
                step: "03",
                title: "Development & Creation",
                description: "Our creative team builds the assets—coding the website, designing ad creatives, or writing SEO content—with regular feedback loops."
            },
            {
                step: "04",
                title: "Launch & Campaign Run",
                description: "We go live! We launch your campaigns and monitor performance real-time, optimizing bids and targeting to maximize ROI."
            },
            {
                step: "05",
                title: "Analytics & Optimization",
                description: "We provide monthly reports on traffic, leads, and conversions. We continuously refine the strategy to ensure sustained growth."
            }
        ],
        targetAudience: [
            "Schools & Colleges",
            "Universities",
            "EdTech Startups",
            "Individual Educators & Tutors"
        ],
        faq: [
            {
                question: "Why choose a specialist education agency?",
                answer: "Because nuances matter. We know the admission cycles, parent psychology, and the academic lexicon. We don't just market; we educate your audience about your value."
            },
            {
                question: "Can you revamp our outdated website?",
                answer: "Consider it done. We will transform your existing site into a modern, lightning-fast, and mobile-responsive masterpiece that retains your legacy while powering your future."
            }
        ],
        duration: "Project-based or Monthly Retainer",
        pricing: "Custom quote based on scope of work",
        seo: {
            title: "Digital Marketing for Schools | Best Education Web Design & SEO",
            description: "India's specialized digital agency for schools & colleges. Stunning websites, #1 ranking SEO, and high-conversion admission marketing services.",
            keywords: "digital marketing for schools, education website design, seo for educational institutions, admission lead generation, education brand management, school marketing india, education consultancy digital growth"
        }
    }
];
