
import { Service, CaseStudy } from './types';

export const services: Service[] = [
    {
        filter: "strategy",
        name: "Strategic Marketing & Brand Positioning",
        icon: "🧠",
        description: "Brand strategy, messaging frameworks, audience segmentation, and Fractional CMO support."
    },
    {
        filter: "growth",
        name: "AI-Powered Growth & Discoverability",
        icon: "📈",
        description: "AI Search Optimization, App Store Optimization, Programmatic & Display, Influencer Marketing, and content systems."
    },
    {
        filter: "automation",
        name: "Automation & Engagement Systems",
        icon: "⚙️",
        description: "Email flows, WhatsApp/SMS campaigns, DM outreach, trigger-based workflows, and full CRM integration with team SOPs."
    },
    {
        filter: "funding",
        name: "Funder-Readiness & Proposal Development",
        icon: "📊",
        description: "Proposal writing, visual design, budget modeling, impact reporting, and audit-ready formatting for securing funding."
    },
    {
        filter: "finance",
        name: "Financial Operations & Compliance",
        icon: "🧾",
        description: "Bookkeeping workflows, transaction categorization, audit prep, granular reporting, and POPIA-aligned data handling."
    },
    {
        filter: "creative",
        name: "Creative Direction & Visual Storytelling",
        icon: "🎨",
        description: "Campaign creative, asset production oversight, photography direction, Proposal visuals, and Streaming/Audio Production."
    },
    {
        filter: "systems",
        name: "Systems, Measurement & Capability Building",
        icon: "🛠️",
        description: "Marketing automation stacks, Front End Development, Ad Operations, KPI dashboards, cohort analysis, and team upskilling."
    }
];

export const caseStudies: CaseStudy[] = [
    {
        id: 'profuse',
        title: 'Profuse Beauty Cosmetics',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762929115/Black_Gold_Elegant_Floral_Gala_Night_Invitation_Square_-_1_xpngal.png',
        tags: ['strategy', 'automation', 'growth', 'creative'],
        description: 'A cosmetics brand in South Africa needing a complete digital system to drive sales.',
        tagsDisplay: ['Social Media', 'Website SEO', 'Email Automation'],
        modalContent: {
            challenge: 'A South African cosmetics brand needed a complete digital system to build brand awareness and drive consistent online sales in a competitive market.',
            system: [
                'Social Media Management: Developed a content strategy and managed channels to build an engaged community.',
                'Content Management: Created compelling product descriptions, blog posts, and visual assets.',
                'Website SEO: Improved the website\'s technical SEO and on-page content to rank for relevant keywords.',
                'Email Marketing Systems: Built automated email flows (welcome, abandoned cart, post-purchase) to nurture leads and increase customer lifetime value.'
            ],
            outcome: 'Established a cohesive brand presence, significantly improved organic search visibility, and created an automated sales funnel that generated revenue reliably.'
        }
    },
    {
        id: 'custom',
        title: 'Custom Crafted Spaces 2025',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762928718/CCS_gqbogg.jpg',
        tags: ['growth', 'systems', 'strategy'],
        description: 'Lead flow dried up overnight after their primary lead source—their Google profile—was suspended.',
        tagsDisplay: ['GMB Reinstatement', 'Website Build', 'Technical SEO'],
        modalContent: {
            challenge: 'The business\'s primary lead source—their Google profile—was suspended without warning. Their phone stopped ringing, and their online presence was non-existent.',
            system: [
                'GMB Reinstatement: Conducted a full policy diagnosis, compiled all necessary legal documentation and evidence, and managed the full appeals process with Google.',
                'Website & CMS Delivery: Built a new, professional WordPress site to act as a stable "home base," optimized for speed, accessibility, and SEO.',
                'SEO Foundations: Implemented structured data, a new meta architecture, and technical SEO to rebuild brand authority and create a new source of leads.'
            ],
            outcome: 'Successfully reinstated the GMB profile, restoring the primary lead flow. The new website established a professional, high-trust brand image and a long-term asset for organic growth.'
        }
    },
    {
        id: 'khongoloti',
        title: 'Khongoloti Training Academy',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762927791/logo_Khongoloti_1_e4k887.png',
        tags: ['growth', 'strategy', 'creative'],
        description: 'A professional services organization needing to establish a foundational online presence.',
        tagsDisplay: ['Online SEO Profile', 'Landing Page'],
        modalContent: {
            challenge: 'A professional training academy needed a foundational online presence to establish credibility, be discoverable, and generate leads for its courses.',
            system: [
                'Online SEO Profile: Developed their core SEO strategy, including keyword mapping and on-page optimization.',
                'High-Converting Landing Page: Designed and built a fast, professional landing page focused on clear value propositions and lead capture.'
            ],
            outcome: 'Established a professional digital "front door" that immediately built trust and began ranking on search engines, creating a new, reliable source of leads.'
        }
    },
    {
        id: 'gamazine',
        title: 'Gamazine & Glamour Coat',
        logo: '',
        tags: ['strategy', 'creative'],
        description: 'Building brand awareness and managing community for a niche coatings supplier.',
        tagsDisplay: ['Social Media Mgmt', 'Content Marketing'],
        modalContent: {
            challenge: 'A supplier of niche wall coatings needed to build brand awareness and manage community engagement on social media to reach both contractors and homeowners.',
            system: [
                'Social Media Management: Created and managed a content calendar showcasing projects, educating customers, and engaging with inquiries.',
                'Content Marketing: Produced "before and after" visuals, video content, and application guides to demonstrate the product\'s value.'
            ],
            outcome: 'Grew a highly engaged social media following, establishing the brand as a premium choice in its niche and generating a steady stream of leads through social channels.'
        }
    },
    {
        id: 'gae-yoga',
        title: 'Gae Kemetic Yoga',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762927469/GKY_xjxyuy.jpg',
        tags: ['strategy', 'creative'],
        description: 'A wellness brand needing a defined brand presence and strategic campaign direction.',
        tagsDisplay: ['Brand Strategy', 'Campaign Direction'],
        modalContent: {
            challenge: 'A new wellness brand needed to define its identity, establish a digital presence, and plan its launch campaigns to connect with its target audience.',
            system: [
                'Brand Strategy: Collaborated on brand messaging, value propositions, and visual identity to create a "minimalist-luxury" feel.',
                'Digital Presence: Advised on website structure, social media channel selection, and content pillars.',
                'Campaign Direction: Architected launch campaigns blending creative storytelling with strategic audience outreach.'
            ],
            outcome: 'Delivered a clear, compelling brand and a strategic roadmap, positioning Gae Kemetic Yoga for a successful launch with a strong, authentic connection to its community.'
        }
    },
    {
        id: 'wellth',
        title: 'Integrated Wellth Solutions',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762928010/A_Strategic_Funding_Roadmap_for_the_IGOCOEL_Institute_Aligning_a_Transformative_Model_with_Funder_Priorities_3_su2stf.jpg',
        tags: ['strategy', 'growth', 'systems'],
        description: 'A growth institute needing a comprehensive digital system to attract clients.',
        tagsDisplay: ['Digital Marketing', 'Website Build', 'Landing Pages'],
        modalContent: {
            challenge: 'A personal and professional growth institute required a comprehensive digital system to attract clients, manage leads, and showcase its transformative models.',
            system: [
                'Digital Marketing Strategy: Developed a full-funnel strategy to build authority and attract qualified leads.',
                'Website Development: Built a professional website to serve as the central hub for content, courses, and resources.',
                'Landing Page Creation: Designed and implemented high-converting landing pages for specific programs and lead magnets.'
            ],
            outcome: 'Created a robust digital ecosystem that successfully launched the institute, establishing its credibility and generating a consistent flow of leads for its programs.'
        }
    }
];
