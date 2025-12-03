// FIX: Corrected import path for types to avoid module resolution issue.
import type { Service, Project } from '../types/index';

export const servicesData: Service[] = [
    { 
        id: 'local-seo',
        filterId: 'growth', 
        icon: '📍', 
        name: 'Local Search & GMB Command', 
        problem: 'Invisible to local customers.',
        solution: 'Technical GMB audits, reinstatement, and local SEO optimization to rank #1 on Maps.' 
    },
    { 
        id: 'content-seo',
        filterId: 'strategy', 
        icon: '✍️', 
        name: 'Content Strategy & Organic SEO', 
        problem: 'Low authority and traffic.',
        solution: 'AI-driven content plans and on-page SEO to answer customer questions and drive free traffic.' 
    },
    { 
        id: 'paid-media',
        filterId: 'growth', 
        icon: '🎯', 
        name: 'Paid Media & PPC', 
        problem: 'Need leads now.',
        solution: 'High-intent Google Ads and targeted Social Media campaigns (Paid Social) to inject immediate traffic.' 
    },
    { 
        id: 'email-automation',
        filterId: 'automation', 
        icon: '⚙️', 
        name: 'Email Marketing & Automation', 
        problem: 'Leaky funnel.',
        solution: 'Automated nurture sequences (Welcome, Abandoned Cart) via Email and WhatsApp that turn cold leads into loyal customers while you sleep.' 
    },
    { 
        id: 'inbound',
        filterId: 'strategy', 
        icon: '🧲', 
        name: 'Inbound Marketing Strategy', 
        problem: 'Chasing clients.',
        solution: 'A holistic methodology (Attract, Engage, Delight) that pulls customers to you using valuable content and experiences.' 
    },
    { 
        id: 'social-media',
        filterId: 'creative', 
        icon: '📱', 
        name: 'Social Media Marketing', 
        problem: 'No brand engagement.',
        solution: 'Community management and strategic posting schedules to build brand awareness and social proof.' 
    },
    { 
        id: 'analytics',
        filterId: 'systems', 
        icon: '📊', 
        name: 'Analytics & Conversion Ops', 
        problem: 'Guessing what works.',
        solution: 'Holistic dashboards (GA4, Looker Studio) and CRO testing to prove ROI and optimize the win.' 
    }
];

export const projectData: Project[] = [
    {
        id: 'profuse-beauty',
        title: 'Profuse Beauty Cosmetics',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762929115/Black_Gold_Elegant_Floral_Gala_Night_Invitation_Square_-_1_xpngal.png',
        tags: ['creative', 'strategy', 'automation'],
        services: ['Social Media Marketing', 'Content Strategy & Organic SEO', 'Email & Automation'],
        challenge: 'Invisible to online shoppers and no retention strategy.',
        system: 'Managed community engagement, optimized product pages for keywords, and built abandoned cart flows.',
        outcome: 'Increased repeat purchases by 30% via email automation.'
    },
    {
        id: 'custom-crafted-spaces',
        title: 'Custom Crafted Spaces 2025',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762928718/CCS_gqbogg.jpg',
        tags: ['growth', 'systems'],
        services: ['Local Search & GMB', 'Analytics & Conversion'],
        challenge: 'Suspended GMB profile = Zero leads.',
        system: 'Technical appeal and fix, optimized for "Custom Kitchens [City]", new conversion-focused site.',
        outcome: 'Profile restored. Lead flow returned to 100% capacity.'
    },
    {
        id: 'khongoloti',
        title: 'Khongoloti Training Academy',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762927791/logo_Khongoloti_1_e4k887.png',
        tags: ['growth'], 
        services: ['Local Search & GMB', 'Paid Media (PPC)'],
        challenge: 'No digital footprint for student enrollment.',
        system: 'High-converting page for course signups, targeted "Training Academy" keywords.',
        outcome: 'First page rankings for key terms within 3 months.'
    },
    {
        id: 'gamazine',
        title: 'Gamazine & Glamour Coat',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762927469/GKY_xjxyuy.jpg', 
        tags: ['creative', 'strategy'],
        services: ['Social Media Marketing', 'Content Strategy & Organic SEO'],
        challenge: 'Low brand awareness in niche market.',
        system: 'Visual content strategy, Before/After application guides.',
        outcome: 'Established as a premium brand choice on Facebook.'
    },
    {
        id: 'gae-kemetic-yoga',
        title: 'Gae Kemetic Yoga',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762927469/GKY_xjxyuy.jpg',
        tags: ['strategy'],
        services: ['Inbound Marketing', 'Content Strategy & Organic SEO'],
        challenge: 'Undefined brand in a crowded market.',
        system: 'Visual identity & voice, launch campaign direction.',
        outcome: 'Successful launch with fully booked workshops.'
    },
    {
        id: 'integrated-wellth',
        title: 'Integrated Wellth Solutions',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762928010/A_Strategic_Funding_Roadmap_for_the_IGOCOEL_Institute_Aligning_a_Transformative_Model_with_Funder_Priorities_3_su2stf.jpg',
        tags: ['strategy', 'growth'],
        services: ['Inbound Marketing', 'Paid Media (PPC)'],
        challenge: 'New institute needing lead generation.',
        system: 'Full funnel strategy, corporate website build.',
        outcome: 'Consistent flow of qualified B2B leads.'
    }
];