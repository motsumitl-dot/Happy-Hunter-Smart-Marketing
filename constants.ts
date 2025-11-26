
import { Service, CaseStudy, BlogPost, PricingPlan } from './types';

export const services: Service[] = [
    {
        filter: "growth",
        name: "Local Search & GMB Command",
        icon: "📍",
        description: "Technical GMB audits, reinstatement, and local SEO optimization to rank #1 on Maps."
    },
    {
        filter: "strategy",
        name: "Content Strategy & Organic SEO",
        icon: "✍️",
        description: "AI-driven content plans and on-page SEO to answer customer questions and drive free traffic."
    },
    {
        filter: "growth",
        name: "Paid Media & PPC",
        icon: "🎯",
        description: "High-intent Google Ads and targeted Social Media campaigns (Paid Social) to inject immediate traffic."
    },
    {
        filter: "automation",
        name: "Email & Automation",
        icon: "⚙️",
        description: "Automated nurture sequences (Welcome, Abandoned Cart) via Email and WhatsApp to turn cold leads into loyal customers."
    },
    {
        filter: "strategy",
        name: "Inbound Marketing Strategy",
        icon: "🧲",
        description: "A holistic methodology (Attract, Engage, Delight) that pulls customers to you using valuable content."
    },
    {
        filter: "creative",
        name: "Social Media Marketing",
        icon: "📱",
        description: "Community management and strategic posting schedules to build brand awareness and social proof."
    },
    {
        filter: "systems",
        name: "Analytics & Conversion Ops",
        icon: "📊",
        description: "Holistic dashboards (GA4, Looker Studio) and CRO testing to prove ROI and optimize the win."
    }
];

export const caseStudies: CaseStudy[] = [
    {
        id: 'profuse-beauty',
        title: 'Profuse Beauty Cosmetics',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762929115/Black_Gold_Elegant_Floral_Gala_Night_Invitation_Square_-_1_xpngal.png',
        tags: ['creative', 'strategy', 'automation'],
        services: ['Social Media Marketing', 'Content Strategy & Organic SEO', 'Email & Automation'],
        description: 'Invisible to online shoppers and no retention strategy.',
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
        description: 'Suspended GMB profile = Zero leads.',
        challenge: 'Suspended GMB profile = Zero leads.',
        system: 'Technical appeal and fix, optimized for "Custom Kitchens [City]", new conversion-focused site.',
        outcome: 'Profile restored. Lead flow returned to 100% capacity.',
        // Adding visual proof data (using placeholders that represent map grids)
        beforeImage: 'https://images.unsplash.com/photo-1623004381534-738914618f0a?q=80&w=800&auto=format&fit=crop&grayscale', // Represents a "Dark/Unclear" map
        afterImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop' // Represents a "Bright/Green" map
    },
    {
        id: 'khongoloti',
        title: 'Khongoloti Training Academy',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762927791/logo_Khongoloti_1_e4k887.png',
        tags: ['growth', 'growth'], // Maps to GMB and PPC
        services: ['Local Search & GMB', 'Paid Media (PPC)'],
        description: 'No digital footprint for student enrollment.',
        challenge: 'No digital footprint for student enrollment.',
        system: 'High-converting page for course signups, targeted "Training Academy" keywords.',
        outcome: 'First page rankings for key terms within 3 months.'
    },
    {
        id: 'gamazine',
        title: 'Gamazine & Glamour Coat',
        logo: null, 
        tags: ['creative', 'strategy'],
        services: ['Social Media Marketing', 'Content Strategy & Organic SEO'],
        description: 'Low brand awareness in niche market.',
        challenge: 'Low brand awareness in niche market.',
        system: 'Visual content strategy, Before/After application guides.',
        outcome: 'Established as a premium brand choice on Facebook.'
    },
    {
        id: 'gae-kemetic-yoga',
        title: 'Gae Kemetic Yoga',
        logo: 'https://res.cloudinary.com/dka0498ns/image/upload/v1762927469/GKY_xjxyuy.jpg',
        tags: ['strategy', 'strategy'],
        services: ['Inbound Marketing', 'Content Strategy & Organic SEO'],
        description: 'Undefined brand in a crowded market.',
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
        description: 'New institute needing lead generation.',
        challenge: 'New institute needing lead generation.',
        system: 'Full funnel strategy, corporate website build.',
        outcome: 'Consistent flow of qualified B2B leads.'
    }
];

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 'why-gmb-matters-2025',
        title: 'Why Google Business Profile is Your Most Important Asset in 2025',
        excerpt: 'Stop obsessing over Instagram likes. If you aren’t ranking on Maps, you are invisible to 80% of local customers.',
        content: '<p>Most SMEs treat their Google Business Profile (GMB) as a "set and forget" listing. This is a fatal error.</p><p>In 2025, Google Maps is the new Homepage. Customers decide to trust you based on reviews, photos, and updates before they ever click your website link.</p><h3>The "Zero-Click" Reality</h3><p>More than 60% of searches end without a click to a website. Why? Because Google provides the answer right on the results page. If your hours, services, and booking options aren\'t immediately visible, you lose.</p>',
        author: 'Thabo Motsumi',
        date: 'Oct 15, 2025',
        category: 'Local SEO',
        tags: ['GMB', 'SEO', 'Small Business'],
        image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'automation-blueprint',
        title: 'The Automation Blueprint: How to Clone Yourself',
        excerpt: 'You can’t scale if you are manually replying to every WhatsApp message. Here is how we build systems that work while you sleep.',
        content: '<p>The bottleneck in your business is YOU. As a founder, your time is worth R1000/hour, yet you spend it doing R50/hour tasks like confirming appointments.</p><p>We implement "Nurture Systems". When a lead comes in, they get an instant WhatsApp welcome, an email sequence explaining your value, and a follow-up SMS 2 days later—all without you lifting a finger.</p>',
        author: 'Thabo Motsumi',
        date: 'Oct 02, 2025',
        category: 'Automation',
        tags: ['Systems', 'Efficiency', 'Growth'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'inbound-vs-outbound',
        title: 'Stop Chasing, Start Attracting: Inbound Marketing 101',
        excerpt: 'Cold calling is dead. Learn how to create content that pulls your ideal clients toward you like a magnet.',
        content: '<p>Outbound marketing is like using a megaphone to shout at a crowd. Inbound marketing is like using a magnet to attract the right metal.</p><p>By answering the specific questions your customers are asking on Google (e.g., "price of solar installation in Randburg"), you position yourself as the expert. Trust is built before the sales call even happens.</p>',
        author: 'Thabo Motsumi',
        date: 'Sep 28, 2025',
        category: 'Strategy',
        tags: ['Inbound', 'Content Marketing'],
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'ai-in-marketing',
        title: 'AI Won\'t Replace You, But a Marketer Using AI Will',
        excerpt: 'How we use Gemini and ChatGPT to speed up content creation by 10x without losing the "human touch".',
        content: '<p>AI is not a magic button; it is an exoskeleton. It makes a strong marketer stronger, but it makes a weak marketer dangerous.</p><p>We use AI to analyze large datasets of customer reviews to find "Voice of Customer" data, which we then use to write high-converting copy that resonates emotionally.</p>',
        author: 'Thabo Motsumi',
        date: 'Sep 10, 2025',
        category: 'AI Tools',
        tags: ['AI', 'Gemini', 'Tech'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'email-list-gold',
        title: 'Why Your Email List is Your Retirement Fund',
        excerpt: 'Social media algorithms change. Your email list is the only asset you truly own. Start building it today.',
        content: '<p>If Facebook shut down tomorrow, would you still have a business? If the answer is no, you are building on rented land.</p><p>Email marketing consistently has the highest ROI of any digital channel. It is personal, direct, and algorithm-proof.</p>',
        author: 'Thabo Motsumi',
        date: 'Aug 22, 2025',
        category: 'Strategy',
        tags: ['Email', 'Retention'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'local-seo-hacks',
        title: '5 Local SEO Hacks for South African Townships',
        excerpt: 'Unique strategies for businesses in areas where "formal" addresses might be tricky, but commerce is booming.',
        content: '<p>Township economy is massive, but Google Maps often struggles with informal addresses. We use "Plus Codes" and landmark-based optimization to ensure customers can find you, even if you don\'t have a street number.</p>',
        author: 'Thabo Motsumi',
        date: 'Aug 15, 2025',
        category: 'Local SEO',
        tags: ['Township Economy', 'SA Business'],
        image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'video-marketing',
        title: 'Video or Die: The TikTok-ification of Business',
        excerpt: 'Why short-form video is essential for trust, even for "boring" B2B businesses.',
        content: '<p>People buy from people. Video is the fastest way to transmit your personality and expertise.</p>',
        author: 'Thabo Motsumi',
        date: 'Aug 01, 2025',
        category: 'Social Media',
        tags: ['Video', 'TikTok', 'Reels'],
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800'
    }
];

export const PRICING_PLANS: PricingPlan[] = [
    {
        id: 'gmb-tuneup',
        name: 'The GMB Tune-Up',
        price: 'R2,950',
        period: 'one-time',
        description: 'Perfect for businesses that just want their profile fixed, verified, and looking professional.',
        features: [
            'Full GMB Verification Support',
            'Category & Keyword Optimization',
            'Photo & Product Upload (up to 20)',
            'Review Response Strategy Guide',
            'Local Search Audit Report'
        ],
        cta: 'Book My Tune-Up',
        ctaLink: 'https://calendly.com/motsumitl/30min'
    },
    {
        id: 'growth-engine',
        name: 'The Growth Engine',
        price: 'R4,500',
        period: 'per month',
        isPopular: true,
        description: 'A complete system to dominate local search and capture leads on autopilot.',
        features: [
            'Everything in Tune-Up',
            'Weekly GMB Posts & Updates',
            'Review Management & Responses',
            'Monthly "Deep Dive" Reporting',
            'Basic Automated Email Sequence',
            'Competitor Monitoring'
        ],
        cta: 'Start Growing',
        ctaLink: 'https://calendly.com/motsumitl/30min'
    },
    {
        id: 'full-stack',
        name: 'CMO-as-a-Service',
        price: 'Custom',
        period: 'tailored',
        description: 'We become your marketing department. Full-scale inbound and paid media execution.',
        features: [
            'Full Inbound Strategy',
            'Paid Ads Management (Google/FB)',
            'Content Creation (Blogs/Social)',
            'Advanced CRM Automation',
            'Bi-Weekly Strategy Calls',
            'Dedicated Account Manager'
        ],
        cta: 'Apply Now',
        ctaLink: 'https://calendly.com/motsumitl/30min'
    }
];
