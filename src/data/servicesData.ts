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
        slug: "career-counselling-dubai",
        title: "Career Counselling & Psychometric Assessments",
        tagline: "Find Your Path with Confidence and Clarity",
        shortDesc: "Confused about which career is right for you? We combine scientific assessments with caring guidance to help you discover your strengths and find the perfect direction.",
        fullDesc: "Choosing a career is one of the biggest decisions you'll ever make, and it's completely normal to feel uncertain or overwhelmed. Maybe you're a student trying to pick the right stream, or perhaps you're already working but wondering if there's something better out there. You're not alone in feeling this way.\n\nAt TrueNorth, we believe every person has unique talents and interests that, when understood properly, can lead to a fulfilling and successful career. That's why we use scientifically-designed psychometric assessments that look at multiple aspects of who you are—your personality, your natural abilities, what genuinely interests you, and how you work best.\n\nThis isn't just a simple quiz. It's a comprehensive evaluation that gives you real insights into yourself. After you complete the assessment, you'll receive a detailed report that explains your results in clear, easy-to-understand language. But we don't just hand you a report and say goodbye.\n\nWe sit down with you (and your parents, if you'd like) to talk through everything. We'll help you understand what your results mean, explore different career options that suit you, and create a practical plan for moving forward. Whether you need to choose subjects for next year, pick a college course, or make a career change, we'll guide you step by step.\n\nFor parents, we know you want what's best for your child. Our process helps create clarity and alignment, so everyone in the family understands and supports the chosen path. No more arguments about science vs. commerce, or engineering vs. arts—just informed, confident decisions based on real data about your child's strengths.",
        icon: BookOpen,
        color: "bg-blue-50",
        gradient: "from-blue-500 to-cyan-500",
        features: [
            "Comprehensive psychometric assessment covering personality, abilities, and interests",
            "Detailed personalized report (30+ pages) explaining your unique profile",
            "One-on-one counseling session with experienced career experts",
            "Stream and subject selection guidance for school students",
            "College and course recommendations based on your profile",
            "Career change and growth planning for working professionals",
            "Practical action plan with clear next steps"
        ],
        benefits: [
            "Gain clarity and confidence about your career direction",
            "Make informed decisions based on scientific insights, not guesswork",
            "Avoid costly mistakes and wasted years in the wrong field",
            "Reduce family stress and conflicts about career choices",
            "Discover careers you might never have considered before"
        ],
        process: [
            {
                step: "01",
                title: "Take the Assessment",
                description: "You'll complete a comprehensive online assessment (takes about 60-90 minutes) that evaluates your personality, abilities, interests, and work style. You can do this from home at your convenience."
            },
            {
                step: "02",
                title: "We Analyze Your Results",
                description: "Our experts carefully review your assessment results to identify patterns, strengths, and the career paths that would be the best fit for you."
            },
            {
                step: "03",
                title: "Personal Counseling Session",
                description: "We meet with you (and your parents if you wish) to discuss your results in detail. We'll explain what they mean, answer all your questions, and explore suitable career options together."
            },
            {
                step: "04",
                title: "Create Your Action Plan",
                description: "Together, we'll create a clear, practical plan for your next steps—whether that's choosing subjects, preparing for entrance exams, selecting colleges, or planning a career transition."
            },
            {
                step: "05",
                title: "Ongoing Support",
                description: "We don't disappear after the session. We're available to answer questions and provide guidance as you move forward with your plan."
            }
        ],
        targetAudience: [
            "Students in grades 8-10 choosing their stream (Science, Commerce, or Arts)",
            "Students in grades 11-12 selecting colleges and courses",
            "College students planning their career path",
            "Working professionals considering a career change",
            "Parents seeking expert guidance for their children"
        ],
        faq: [
            {
                question: "How accurate are these assessments?",
                answer: "Our psychometric assessments are scientifically validated and have over 97% accuracy. They're based on the same tools used by leading companies worldwide to identify talent and match people to the right roles."
            },
            {
                question: "What if I'm already working? Can this still help me?",
                answer: "Absolutely! Many working professionals feel stuck or unfulfilled in their current careers. Our assessment helps you identify your transferable skills and discover new career paths where you'll be happier and more successful."
            },
            {
                question: "Will this tell me exactly what career to choose?",
                answer: "The assessment provides insights into careers that match your profile, but the final decision is always yours. We give you the information and guidance you need to make a confident, informed choice that feels right for you."
            }
        ],
        duration: "2-3 sessions over 1-2 weeks (Assessment + Counseling + Planning)",
        pricing: "Packages start from AED 1500 - Contact us for details",
        seo: {
            title: "Best Career Counselling in Dubai & India | Certified Psychometric Tests",
            description: "Top-rated career counselling in Dubai and India. Expert guidance for students and professionals using scientific psychometric assessments. Book a free consultation.",
            keywords: "best career counselling india, career counselling in dubai, best career counsellor uae, career guidance dubai, psychometric test for students, career path finder, online career guidance"
        }
    },
    {
        id: "study-abroad",
        slug: "study-abroad-consultants-dubai",
        title: "University Admissions & Study Abroad Consulting",
        tagline: "Your Compass for a Successful Study Abroad Journey",
        shortDesc: "We understand that studying abroad is a big decision. Let us guide you through every step—from choosing the right university to landing safely on campus.",
        fullDesc: "Studying abroad is more than just getting a degree—it's about discovering yourself, experiencing new cultures, and building a future full of possibilities. We know this journey can feel overwhelming. There are so many questions: Which country is right for me? Can I afford it? Will I get in? What if my application isn't strong enough?\n\nThat's exactly why we're here. At TrueNorth, we've helped hundreds of students just like you turn their study abroad dreams into reality. Whether you're aiming for top universities in the USA, UK, Canada, Australia, or Europe, we'll be with you every step of the way.\n\nWe start by really getting to know you—your strengths, your interests, your goals, and yes, even your worries. Then we help you find universities that are the right fit, not just the most famous ones. We'll work together to build an application that truly reflects who you are, help you write essays that tell your unique story, and prepare you for interviews so you feel confident, not nervous.\n\nFor parents, we know you want the best for your child while also being mindful of finances. We'll help you explore scholarship opportunities, understand the true costs, and ensure every decision is well-informed. You're not just sending your child abroad—you're investing in their future, and we take that responsibility seriously.",
        icon: Globe,
        color: "bg-orange-50",
        gradient: "from-orange-500 to-red-500",
        features: [
            "Personalized university selection based on your profile, interests, and budget",
            "Expert guidance for applications to top global universities",
            "Help with crafting compelling essays, SOPs, and recommendation letters",
            "Interview preparation and practice sessions to boost your confidence",
            "Scholarship search and application support to reduce financial burden",
            "Complete visa assistance—from documentation to interview preparation",
            "Pre-departure guidance to help you settle in smoothly"
        ],
        benefits: [
            "Feel confident and prepared throughout the entire application process",
            "Increase your chances of acceptance with a strong, authentic application",
            "Discover scholarship opportunities you might have missed on your own",
            "Save time and avoid costly mistakes with expert guidance",
            "Get peace of mind knowing experienced mentors are supporting you"
        ],
        process: [
            {
                step: "01",
                title: "Understanding You",
                description: "We start with a friendly conversation to understand your academic background, interests, career goals, and budget. This helps us create a personalized plan just for you."
            },
            {
                step: "02",
                title: "Finding the Right Fit",
                description: "We help you shortlist universities that match your profile and aspirations. We consider factors like course quality, location, campus culture, and affordability to create a balanced list."
            },
            {
                step: "03",
                title: "Building Your Application",
                description: "Together, we'll craft your essays and personal statements. We help you highlight your strengths and experiences in a way that feels genuine and stands out to admissions teams."
            },
            {
                step: "04",
                title: "Submitting with Confidence",
                description: "We guide you through the application submission process, ensuring all documents are complete and submitted on time. We also prepare you for any interviews with practice sessions."
            },
            {
                step: "05",
                title: "Visa and Beyond",
                description: "Once you receive your offer, we help with visa applications, financial documentation, and pre-departure preparations. We'll even connect you with students already studying there."
            }
        ],
        targetAudience: [
            "High school students planning to study undergraduate programs abroad",
            "College graduates looking for Master's or MBA programs overseas",
            "Students interested in pursuing PhD or research programs",
            "Working professionals seeking international education for career growth"
        ],
        faq: [
            {
                question: "When should I start planning to study abroad?",
                answer: "It's best to start 12-18 months before you want to begin your course. This gives you enough time to research universities, prepare for entrance exams, work on your application, and apply for scholarships without feeling rushed."
            },
            {
                question: "Can you help me find scholarships?",
                answer: "Absolutely! We actively search for scholarship opportunities that match your profile. We'll help you understand eligibility criteria and guide you in writing strong scholarship applications to reduce your financial burden."
            },
            {
                question: "What if I'm worried about the visa process?",
                answer: "We completely understand—visa applications can be stressful. We'll help you prepare all the required documents, ensure your financial papers are in order, and conduct mock visa interviews so you feel calm and confident on the actual day."
            }
        ],
        duration: "Complete support throughout your journey (typically 6-12 months)",
        pricing: "",
        seo: {
            title: "Best Study Abroad Consultants in Dubai | University Admissions UAE",
            description: "Leading study abroad consultants in Dubai. Expert guidance for USA, UK, Canada, Australia university admissions. 100% visa success rate & scholarship support.",
            keywords: "study abroad consultants, best study abroad consultants dubai, student visa consultants uae, university admission guidance india, overseas education experts, study in USA, study in UK"
        }
    },
    {
        id: "academic-support",
        slug: "online-tutoring-academic-support",
        title: "Academic Support & Online Tutoring",
        tagline: "Learn Better, Stress Less, Achieve More",
        shortDesc: "Personalized online tutoring that makes difficult subjects easier to understand. We help students build confidence and improve their grades in IB, IGCSE, CBSE and A-Levels.",
        fullDesc: "We understand that every student learns differently. In a busy classroom with 30 other students, it's easy to fall behind or feel like you can't ask questions. Maybe there's one topic that just doesn't make sense, or perhaps you need help preparing for important exams. That's exactly what we're here for.\n\nOur online tutoring is designed to give your child the individual attention they need to truly understand their subjects. We don't believe in rushing through topics or making students memorize formulas without understanding them. Instead, we take the time to explain concepts in different ways until they click.\n\nWhether your child is studying IB (Diploma or MYP), IGCSE, A-Levels, or CBSE, our tutors are experts in these curricula. They know exactly what examiners are looking for and how to help students perform their best. We cover all major subjects including Math, Physics, Chemistry, Biology, Economics, and English. We also provide dedicated support for IELTS preparation to ensure language proficiency.\n\nFor students working on IB Internal Assessments (IAs), Extended Essays (EE), or Theory of Knowledge (TOK), we provide expert guidance to help them produce high-quality work that meets all the requirements.\n\nOur classes happen online through an interactive virtual classroom where students can see, hear, and work with their tutor in real-time. Every session is recorded, so students can watch it again when they're revising. And because it's online, there's no travel time—just log in from home and start learning.\n\nFor parents, we provide regular updates on your child's progress so you always know how they're doing. We're not just tutors; we're partners in your child's education, working together to help them succeed.",
        icon: GraduationCap,
        color: "bg-gray-50",
        gradient: "from-emerald-500 to-teal-500",
        features: [
            "One-on-one personalized tutoring sessions",
            "Expert Tutors for IB, IGCSE, A-Levels & CBSE Boards",
            "Comprehensive IELTS & Language Proficiency Support",
            "Help with IB Internal Assessments (IA), Extended Essays (EE), and TOK",
            "Practice with past exam papers and exam techniques",
            "Flexible scheduling to fit your timetable",
            "Regular progress reports for parents"
        ],
        benefits: [
            "See real improvement in grades and understanding",
            "Build confidence in subjects that used to feel difficult",
            "Learn effective study and exam strategies",
            "Get help exactly when and where you need it",
            "Save time with no travel—learn from home"
        ],
        process: [
            {
                step: "01",
                title: "Understanding Your Needs",
                description: "We start by talking with you and your child to understand which subjects need help, what specific topics are challenging, and what your goals are."
            },
            {
                step: "02",
                title: "Creating a Learning Plan",
                description: "We design a personalized study plan that focuses on the areas where your child needs the most support, while staying aligned with their school curriculum."
            },
            {
                step: "03",
                title: "Interactive Online Sessions",
                description: "Your child attends live, one-on-one sessions with their tutor using our interactive online classroom. They can ask questions, work through problems, and get immediate feedback."
            },
            {
                step: "04",
                title: "Regular Practice and Testing",
                description: "We give regular homework and practice tests to reinforce learning. We also share detailed feedback with parents so you can track progress."
            },
            {
                step: "05",
                title: "Exam Preparation",
                description: "As exams approach, we focus on past papers, time management, and exam techniques to help your child feel prepared and confident."
            }
        ],
        targetAudience: [
            "IB Diploma (DP) and MYP students",
            "IGCSE and A-Level students",
            "CBSE students in grades 9-12",
            "Students needing help with IAs/EE/TOK",
            "Homeschooled students"
        ],
        faq: [
            {
                question: "Is online tutoring as good as in-person tutoring?",
                answer: "Yes! Our online platform uses interactive whiteboards and tools that make learning engaging and effective. Plus, every session is recorded so students can review it later. Many students actually prefer online tutoring because it's more convenient and comfortable."
            },
            {
                question: "Do you have tutors who understand the IB Diploma Programme?",
                answer: "Absolutely. Our IB tutors are highly experienced with the DP curriculum. Many have been IB examiners themselves, so they know exactly what's expected and how to help students excel in both Higher Level (HL) and Standard Level (SL) subjects."
            },
            {
                question: "Can we try a session before committing?",
                answer: "Yes! We offer a free trial session so you and your child can experience our teaching style and see if it's the right fit. There's no obligation to continue if you're not satisfied."
            }
        ],
        duration: "Flexible—hourly sessions or monthly packages",
        pricing: "Affordable hourly rates—contact us for a free trial",
        seo: {
            title: "Online Tutoring for IB, IGCSE, CBSE in Dubai | Expert Tutors UAE",
            description: "Best online tutoring in Dubai for IB, IGCSE, A-Levels & CBSE. Personalized 1-on-1 classes for Math, Science, English with expert tutors in UAE & India.",
            keywords: "online ib tutors, igcse maths tutor, cbse online coaching, online tutors dubai, ib tutors uae, physics tuition, chemistry tutors, academic excellence, homework help"
        }
    },
    {
        id: "competitive-exams",
        slug: "profile-building-career-booster",
        title: "Career Booster & Profile Building",
        tagline: "Build Your Unique Story for Global Success",
        shortDesc: "Go beyond grades. We help you build a standout profile through research, internships, and skill development that top universities look for.",
        fullDesc: "In today's competitive world, good grades are just the starting point. Top universities and employers are looking for individuals who stand out—people with unique experiences, demonstrated leadership, and real-world skills. This is where our 'Career Booster' program comes in.\n\nThis broad program is designed to help you discover your passions and turn them into tangible achievements. We don't just tell you what to do; we guide you through meaningful experiences. Whether it's identifying a research project, finding the right internship, starting a social impact initiative, or attending a prestigious summer school, we help you build a portfolio that tells your unique story.\n\nWe also focus on essential 'soft skills' that aren't taught in school but are critical for success—like communication, critical thinking, and interview skills. We help you articulate your experiences confidently, whether it's for a university application or a future job interview.\n\nThink of this as your personal accelerator. We help you explore your interests deeply, build a track record of excellence, and present yourself as a well-rounded, ambitious candidate ready to take on the world.",
        icon: BarChart,
        color: "bg-blue-50",
        gradient: "from-indigo-600 to-purple-600",
        features: [
            "Personalized Profile Building Strategy",
            "Guidance on Research Papers and Publications",
            "Support for Identifying Internships and Summer Schools",
            "Social Impact and Leadership Project Mentoring",
            "CV/Resume Writing and Portfolio Creation",
            "Interview Preparation and Mock Sessions",
            "Workshop on Communication and Soft Skills"
        ],
        benefits: [
            "Create a standout profile that impresses admissions officers",
            "Gain real-world experience through internships and projects",
            "Develop critical soft skills for university and career success",
            "Build confidence in your unique abilities and story",
            "Differentiate yourself from other high-achieving students"
        ],
        process: [
            {
                step: "01",
                title: "Profile Audit",
                description: "We analyze your current profile—academics, extracurriculars, and interests—to identify gaps and opportunities for growth."
            },
            {
                step: "02",
                title: "Strategy Roadmap",
                description: "We create a long-term plan with specific milestones. This might include targeting specific summer programs, starting a project, or writing a research paper."
            },
            {
                step: "03",
                title: "Execution Support",
                description: "We don't just plan; we help you do. We guide you through applications for summer schools, help you structure your research, or mentor you on your social project."
            },
            {
                step: "04",
                title: "Skill Development",
                description: "Through workshops and one-on-one sessions, we work on your communication, leadership, and presentation skills."
            },
            {
                step: "05",
                title: "Presentation",
                description: "Finally, we help you package all your experiences into a compelling CV, portfolio, or application narrative that shines."
            }
        ],
        targetAudience: [
            "Students in grades 8-11 looking to build a strong profile",
            "Students aiming for Ivy League or Top Tier universities",
            "Students wanting to explore career interests early",
            "Anyone looking to improve their CV and soft skills"
        ],
        faq: [
            {
                question: "When should I start building my profile?",
                answer: "The earlier, the better! Starting in Grade 8 or 9 gives you time to explore interests deeply and build a meaningful track record without stress. However, we can also help students in Grade 11 optimize their remaining time."
            },
            {
                question: "Do you provide internships?",
                answer: "We don't 'give' internships, but we guide you on how to find and apply for them. We help you identify organizations, write professional emails, and prepare for interviews to secure your own opportunities."
            },
            {
                question: "How is this different from career counselling?",
                answer: "Career counselling is about 'choosing' a path. Career Booster is about 'building' the skills and experiences to succeed on that path. They work perfectly together!"
            }
        ],
        duration: "Flexible (Project-based or Annual Mentorship)",
        pricing: "Customized based on your goals and timeline",
        seo: {
            title: "Student Profile Building for Ivy League | Dubai & India",
            description: "Build a winning profile for Ivy League & Oxbridge admissions. Research papers, internships, and leadership mentoring for students in Dubai & UAE.",
            keywords: "profile building for students, profile building dubai, ivy league consultants uae, university application CV, summer school guidance, research paper for students"
        }
    },
    {
        id: "school-partnerships",
        slug: "school-career-guidance-programs",
        title: "School & College Partnerships",
        tagline: "Empowering Institutions to Build Future Leaders",
        shortDesc: "Partner with TrueNorth to integrate a world-class career guidance infrastructure directly into your academic ecosystem. Elevate your institution's brand.",
        fullDesc: "Visionary schools know that education is not just about marks; it's about life success. TrueNorth collaborates with forward-thinking institutions to become their external 'Center of Excellence' for Career Guidance. We seamlessly integrate with your academic calendar to deliver a structured, year-long Career Curriculum for students from Class 8 to 12. From energizing workshops and psychometric drives to faculty development and parent harmony sessions, we cover it all. By partnering with us, you offer premium career support that significantly boosts your university placement records—making your school the preferred choice for parents who want the best for their children.",
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
            "Offer holistic development that parents value highly",
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
            title: "Career Guidance Programs for Schools in Dubai & UAE | Edumilestones Partner",
            description: "Partner with TrueNorth to set up world-class career guidance cells in UAE & Indian schools. Holistic student development & university placement support.",
            keywords: "school career guidance partnership, school career guidance uae, career counselling for schools dubai, institutional career counselling, student holistic development"
        }
    },
    {
        id: "career-lab",
        slug: "career-lab-setup-schools",
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
            title: "Setup Career Lab in Schools UAE | White Label Guidance Platform",
            description: "Launch a state-of-the-art Career Lab in your school in Dubai/UAE. White-label technology & certified training powered by TrueNorth & Edumilestones.",
            keywords: "career lab setup, career lab uae, school tech infrastructure dubai, school career technology, white label career platform, edumilestones partner"
        }
    },
    {
        id: "digital-solutions",
        slug: "education-digital-marketing",
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
            title: "Digital Marketing for Schools & Colleges | Education SEO Agency",
            description: "Specialized digital marketing agency for schools in Dubai & India. Website design, SEO, and admission lead generation services for educational institutions.",
            keywords: "digital marketing for schools, education marketing agency dubai, school marketing uae, education website design, admission lead generation, education brand management"
        }
    }
];
