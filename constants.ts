import { Service, CaseStudy } from './types';

export const services: Service[] = [
    {
        filter: "growth",
        name: "Local Search & GMB Command",
        icon: "📍",
        problem: "Invisible to local customers.",
        solution: "Technical GMB audits, reinstatement, and local SEO optimization to rank #1 on Maps."
    },
    {
        filter: "strategy",
        name: "Content Strategy & Organic SEO",
        icon: "✍️",
        problem: "Low authority and traffic.",
        solution: "AI-driven content plans and on-page SEO to answer customer questions and drive free traffic."
    },
    {
        filter: "growth",
        name: "Paid Media & PPC",
        icon: "🎯",
        problem: "Need leads now.",
        solution: "High-intent Google Ads and targeted Social Media campaigns (Paid Social) to inject immediate traffic."
    },
    {
        filter: "automation",
        name: "Email Marketing & Automation",
        icon: "⚙️",
        problem: "Leaky funnel.",
        solution: "Automated nurture sequences (Welcome, Abandoned Cart) via Email and WhatsApp that turn cold leads into loyal customers."
    },
    {
        filter: "strategy",
        name: "Inbound Marketing Strategy",
        icon: "🧲",
        problem: "Chasing clients.",
        solution: "A holistic methodology (Attract, Engage, Delight) that pulls customers to you using valuable content and experiences."
    },
    {
        filter: "creative",
        name: "Social Media Marketing",
        icon: "📱",
        problem: "No brand engagement.",
        solution: "Community management and strategic posting schedules to build brand awareness and social proof."
    },
    {
        filter: "systems",
        name: "Analytics & Conversion Ops",
        icon: "📊",
        problem: "Guessing what works.",
        solution: "Holistic dashboards (GA4, Looker Studio) and CRO testing to prove ROI and optimize the win."
    }
];

export const caseStudies: CaseStudy[] = [
    {
        id: 'profuse-beauty',
        title: 'Profuse Beauty Cosmetics',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762929115/Black_Gold_Elegant_Floral_Gala_Night_Invitation_Square_-_1_xpngal.png',
        tags: ['creative', 'strategy', 'automation'],
        description: 'Invisible to online shoppers and no retention strategy.',
        tagsDisplay: ['Social Media Marketing', 'Content Strategy & Organic SEO', 'Email & Automation'],
        modalContent: {
            challenge: 'Invisible to online shoppers and no retention strategy.',
            system: [
                'Social Media Marketing: Managed community engagement.',
                'Organic SEO: Optimized product pages for keywords.',
                'Email Automation: Built abandoned cart flows.'
            ],
            outcome: 'Increased repeat purchases by 30% via email automation.'
        }
    },
    {
        id: 'custom-crafted-spaces',
        title: 'Custom Crafted Spaces 2025',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762928718/CCS_gqbogg.jpg',
        tags: ['growth', 'systems'],
        description: 'Suspended GMB profile = Zero leads.',
        tagsDisplay: ['Local Search & GMB', 'Analytics & Conversion'],
        modalContent: {
            challenge: 'Suspended GMB profile = Zero leads.',
            system: [
                'GMB Reinstatement: Technical appeal and fix.',
                'Local SEO: Optimized for "Custom Kitchens [City]".',
                'Web Dev: New conversion-focused site.'
            ],
            outcome: 'Profile restored. Lead flow returned to 100% capacity.'
        }
    },
    {
        id: 'khongoloti',
        title: 'Khongoloti Training Academy',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762927791/logo_Khongoloti_1_e4k887.png',
        tags: ['growth', 'growth'], // Local Search & GMB, Paid Media
        description: 'No digital footprint for student enrollment.',
        tagsDisplay: ['Local Search & GMB', 'Paid Media (PPC)'],
        modalContent: {
            challenge: 'No digital footprint for student enrollment.',
            system: [
                'Landing Page: High-converting page for course signups.',
                'SEO: Targeted "Training Academy" keywords.'
            ],
            outcome: 'First page rankings for key terms within 3 months.'
        }
    },
    {
        id: 'gamazine',
        title: 'Gamazine & Glamour Coat',
        logo: '', // Intentionally empty to trigger Yellow Placeholder as per HTML Modal structure
        tags: ['creative', 'strategy'],
        description: 'Low brand awareness in niche market.',
        tagsDisplay: ['Social Media Marketing', 'Content Strategy & Organic SEO'],
        modalContent: {
            challenge: 'Low brand awareness in niche market.',
            system: [
                'Social Media Marketing: Visual content strategy.',
                'Content Marketing: Before/After application guides.'
            ],
            outcome: 'Established as a premium brand choice on Facebook.'
        }
    },
    {
        id: 'gae-kemetic-yoga',
        title: 'Gae Kemetic Yoga',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762927469/GKY_xjxyuy.jpg',
        tags: ['strategy', 'strategy'], // Inbound Marketing, Content Strategy
        description: 'Undefined brand in a crowded market.',
        tagsDisplay: ['Inbound Marketing', 'Content Strategy & Organic SEO'],
        modalContent: {
            challenge: 'Undefined brand in a crowded market.',
            system: [
                'Brand Strategy: Visual identity & voice.',
                'Content Strategy: Launch campaign direction.'
            ],
            outcome: 'Successful launch with fully booked workshops.'
        }
    },
    {
        id: 'integrated-wellth',
        title: 'Integrated Wellth Solutions',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762928010/A_Strategic_Funding_Roadmap_for_the_IGOCOEL_Institute_Aligning_a_Transformative_Model_with_Funder_Priorities_3_su2stf.jpg',
        tags: ['strategy', 'growth'], // Inbound Marketing, Paid Media
        description: 'New institute needing lead generation.',
        tagsDisplay: ['Inbound Marketing', 'Paid Media (PPC)'],
        modalContent: {
            challenge: 'New institute needing lead generation.',
            system: [
                'Inbound Marketing: Full funnel strategy.',
                'Web Dev: Corporate website build.'
            ],
            outcome: 'Consistent flow of qualified B2B leads.'
        }
    }
];