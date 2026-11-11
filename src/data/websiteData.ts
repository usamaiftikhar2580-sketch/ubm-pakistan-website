export interface Course {
  id: string;
  title: string;
  category: 'ecommerce' | 'marketing' | 'creative';
  description: string;
  duration: string;
  level: string;
  badge: string;
  highlights: string[];
  syllabus: { week: string; topic: string; details: string }[];
  audience: string;
  tools: string[];
  imageTheme: string;
}

export interface Service {
  id: string;
  title: string;
  category: 'ecommerce' | 'digital';
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  keyBenefits: string[];
  timeline: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  courseOrBatch: string;
  rating: number;
  review: string;
  avatarSeed: string;
  verifiedLabel: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'stores' | 'websites' | 'marketing' | 'design' | 'youtube';
  clientType: string;
  metric: string;
  summary: string;
  deliverables: string[];
}

export interface Announcement {
  id: string;
  title: string;
  category: 'Admissions' | 'New Course' | 'Workshop' | 'Internship' | 'Update';
  date: string;
  isUrgent?: boolean;
  shortDesc: string;
  content: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  author: string;
  content: string[];
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const BRAND = {
  name: "UBM Pakistan",
  tagline: "Learn & Earn | Build Your Digital Future",
  founder: {
    name: "Usman Iftikhar",
    title: "Founder & CEO – UBM Pakistan",
    bio: "Usman Iftikhar is the Founder and CEO of UBM Pakistan, focused on ecommerce education, digital skills development, and online business opportunities. Through UBM Pakistan, he aims to empower individuals with practical knowledge and help businesses establish and strengthen their digital presence. His vision is to build a professional platform where learning, innovation, and real-world business opportunities come together.",
    quote: "Our mission is to turn ambitious talent into global digital operators and help businesses across Pakistan build sustainable revenue on world-class marketplaces.",
    image: "/assets/aistudio/Confident_South_Asian_Man_in_Black_Suit_3fbe291e.png",
  },
  logo: "/assets/aistudio/WhatsApp_Image_2026-09-06_at_11.20.40_PM_c38efa27.jpeg",
  contact: {
    phone: "+92 304 0880992",
    whatsappClean: "923040880992",
    whatsappUrl: "https://wa.me/923040880992",
    email: "contact.ubmpakistan@gmail.com",
    address: "UBM Pakistan Digital Hub, Main Boulevard, Lahore, Pakistan",
    mapEmbedQuery: "Lahore, Pakistan",
  },
  socials: {
    facebook: "https://web.facebook.com/profile.php?id=100076012387155",
    instagram: "https://www.instagram.com/ubm_pakistan/",
    linkedin: "https://www.linkedin.com/in/ubm-pakistan-091975330/",
    tiktok: "https://www.tiktok.com/@ubmpakistanofficial",
  },
  stats: [
    { label: "Students & Learners", value: "1,500+", note: "Across batch cohorts (editable placeholder)" },
    { label: "Professional Programs", value: "10 Tracks", note: "Skill-focused curricula" },
    { label: "Digital Solutions", value: "18+ Services", note: "Ecommerce & digital agency" },
    { label: "Client Projects Delivered", value: "250+", note: "Stores, campaigns & assets" },
  ]
};

export const COURSES: Course[] = [
  {
    id: "ebay-mastery",
    title: "eBay Business & Account Management",
    category: "ecommerce",
    description: "Master eBay dropshipping, wholesale, and private label operations. Learn product hunting, high-converting listings, seller metrics, and account health maintenance.",
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    badge: "High Demand",
    highlights: [
      "UK & US marketplace setup",
      "Product research with ZIK Analytics",
      "Policy compliance & defect rate control",
      "Customer feedback & dispute handling"
    ],
    tools: ["ZIK Analytics", "eBay Seller Hub", "AutoDS", "Terapeak"],
    audience: "Aspiring online sellers, freelancers, and virtual assistants seeking international client accounts.",
    imageTheme: "emerald-ebay",
    syllabus: [
      { week: "Week 1-2", topic: "Account Creation & Architecture", details: "Stealth accounts, business vs personal tiers, UK/US banking integration." },
      { week: "Week 3-4", topic: "Product Hunting & Competitor Analysis", details: "Utilizing Terapeak and ZIK Analytics to source high-margin winner products." },
      { week: "Week 5-6", topic: "Listing Optimization & SEO", details: "Title optimization, item specifics, Cassini algorithm ranking tactics." },
      { week: "Week 7-8", topic: "Customer Service & Scaling", details: "Order dispatch, return management, maintaining Top Rated Seller status." }
    ]
  },
  {
    id: "amazon-fba",
    title: "Amazon FBA & Ecommerce",
    category: "ecommerce",
    description: "Comprehensive training on Amazon Private Label & Wholesale FBA. From Helium 10 product validation to supplier negotiation, shipment plans, and PPC ad campaigns.",
    duration: "10 Weeks",
    level: "Intermediate",
    badge: "Flagship",
    highlights: [
      "Product hunting with Helium 10 & Keepa",
      "Alibaba supplier sourcing & QA inspection",
      "Listing creation & A+ Content strategy",
      "Amazon PPC campaign optimization"
    ],
    tools: ["Helium 10", "Keepa", "Amazon Seller Central", "Jungle Scout"],
    audience: "Entrepreneurs ready to launch their own brand or provide high-ticket FBA management services.",
    imageTheme: "emerald-amazon",
    syllabus: [
      { week: "Week 1-3", topic: "Product Hunting & Market Analysis", details: "Revenue validation, search volume metrics, and patent clearance." },
      { week: "Week 4-5", topic: "Global Sourcing & Logistics", details: "RFQ drafting, sample evaluation, freight forwarding, and FBA shipment labels." },
      { week: "Week 6-8", topic: "Listing Launch & Organic Rank", details: "Keyword indexing, backend search terms, review generation strategies." },
      { week: "Week 9-10", topic: "PPC Advertising & Scale", details: "Exact, phrase, broad campaigns, negative keywords, and ACoS control." }
    ]
  },
  {
    id: "shopify-store",
    title: "Shopify Store Development",
    category: "ecommerce",
    description: "Build high-converting, professional Shopify stores from scratch. Learn theme customization, Liquid basics, app integrations, checkout optimization, and local/global gateways.",
    duration: "6 Weeks",
    level: "All Levels",
    badge: "Practical",
    highlights: [
      "Custom Shopify 2.0 store building",
      "Payment gateway integration (Stripe, COD, PayPal)",
      "High-converting landing page layouts",
      "Speed optimization & mobile responsiveness"
    ],
    tools: ["Shopify Admin", "PageFly", "Klaviyo", "Loox", "Google Analytics 4"],
    audience: "Developers, dropshippers, and business owners looking to launch modern storefronts.",
    imageTheme: "emerald-shopify",
    syllabus: [
      { week: "Week 1-2", topic: "Store Setup & Theme Customization", details: "Domain connection, responsive theme architecture, header & footer navigation." },
      { week: "Week 3-4", topic: "Product Architecture & Collections", details: "Variants, SEO meta titles, high-resolution media galleries, and social proof apps." },
      { week: "Week 5-6", topic: "Payments, Apps & Launch Readiness", details: "Cart abandonment flows, currency converters, and post-launch audit checklist." }
    ]
  },
  {
    id: "etsy-mastery",
    title: "Etsy Business & Store Management",
    category: "ecommerce",
    description: "Unlock the lucrative world of handmade, vintage, and digital products on Etsy. Master Etsy SEO, shop setup, product mockup generation, and overseas shipping solutions.",
    duration: "6 Weeks",
    level: "Beginner",
    badge: "High Margin",
    highlights: [
      "Digital downloads & Print-on-Demand setup",
      "Etsy SEO & tag ranking secrets",
      "Shop policies & star seller badge strategies",
      "Dispute-free customer relations"
    ],
    tools: ["eRank", "EverBee", "Canva Pro", "Printify"],
    audience: "Crafters, graphic designers, digital product creators, and international store operators.",
    imageTheme: "emerald-etsy",
    syllabus: [
      { week: "Week 1-2", topic: "Etsy Ecosystem & Policy Rules", details: "Understanding intellectual property, prohibited items, and shop verification." },
      { week: "Week 3-4", topic: "Product Research with eRank & Everbee", details: "Identifying untapped low-competition niches with high conversion velocity." },
      { week: "Week 5-6", topic: "Tags, Pricing & Conversion Mastery", details: "13 tag formula, thumbnail visual appeal, and repeat customer marketing." }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Mastery",
    category: "marketing",
    description: "End-to-end performance marketing course covering Meta Ads (Facebook & Instagram), Google Search & Display Ads, sales funnel architecture, and analytics tracking.",
    duration: "8 Weeks",
    level: "All Levels",
    badge: "Career Builder",
    highlights: [
      "Meta Business Suite & Pixel setup",
      "CBO vs ABO campaign optimization",
      "Google Ads keyword intent bidding",
      "Sales funnel psychology & retargeting"
    ],
    tools: ["Meta Ads Manager", "Google Ads", "Google Tag Manager", "Hotjar"],
    audience: "Marketing professionals, business founders, and agency media buyers.",
    imageTheme: "emerald-marketing",
    syllabus: [
      { week: "Week 1-2", topic: "Marketing Fundamentals & Funnels", details: "TOFU, MOFU, BOFU frameworks, customer personas, and value ladder design." },
      { week: "Week 3-5", topic: "Meta Advertising (FB & IG)", details: "Audience targeting, lookalikes, creative testing matrix, and scaling winning ad sets." },
      { week: "Week 6-8", topic: "Google Ads & Conversion Tracking", details: "Search ads, negative keywords, tag manager events, and ROAS calculation." }
    ]
  },
  {
    id: "graphic-design-canva",
    title: "Graphic Designing & Canva",
    category: "creative",
    description: "Design professional brand assets, marketing flyers, social media carousels, and ecommerce product banners using Canva Pro, Adobe Photoshop, and modern typography.",
    duration: "6 Weeks",
    level: "Beginner",
    badge: "Creative",
    highlights: [
      "Brand kits, palettes & typographic harmony",
      "Ecommerce product banner creation",
      "Social media post templates & animations",
      "Client presentation & portfolio prep"
    ],
    tools: ["Canva Pro", "Adobe Photoshop", "Figma Basics", "Remove.bg"],
    audience: "Creative starters, social media managers, and virtual assistants.",
    imageTheme: "emerald-design",
    syllabus: [
      { week: "Week 1-2", topic: "Design Principles & Color Psychology", details: "Visual hierarchy, grid layouts, contrast rules, and font pairings." },
      { week: "Week 3-4", topic: "Commercial Social Media Assets", details: "Instagram carousels, YouTube thumbnails, Facebook ad creative mockups." },
      { week: "Week 5-6", topic: "Ecommerce Graphics & Packaging", details: "Infographic feature callouts, lifestyle badges, and portfolio creation." }
    ]
  },
  {
    id: "youtube-automation",
    title: "YouTube Automation & Channel Growth",
    category: "creative",
    description: "Learn how to build, operate, and monetize faceless YouTube channels. Scriptwriting with AI, voiceover production, video editing workflows, and YouTube SEO.",
    duration: "8 Weeks",
    level: "All Levels",
    badge: "Trending",
    highlights: [
      "Niche selection & CPM monetization models",
      "Automated video production pipeline",
      "Click-worthy thumbnail psychology",
      "Algorithm ranking & retention strategies"
    ],
    tools: ["CapCut Pro", "VidIQ", "ElevenLabs", "Premiere Pro Basics"],
    audience: "Content entrepreneurs seeking scalable passive income channels.",
    imageTheme: "emerald-youtube",
    syllabus: [
      { week: "Week 1-2", topic: "High-CPM Niche Selection", details: "Finance, tech, luxury, and educational niche research with VidIQ." },
      { week: "Week 3-5", topic: "Content Engine & Editing", details: "Hook writing, pacing, copyright-free B-roll sourcing, dynamic sound design." },
      { week: "Week 6-8", topic: "Thumbnail CTR & Scaling", details: "A/B testing titles, community tab engagement, and sponsorship outreach." }
    ]
  },
  {
    id: "content-writing",
    title: "Professional Content Writing",
    category: "creative",
    description: "Master commercial copywriting, SEO article writing, persuasive email sequences, and ecommerce product descriptions that engage readers and drive sales.",
    duration: "6 Weeks",
    level: "All Levels",
    badge: "Core Skill",
    highlights: [
      "SEO on-page keyword density & structure",
      "Conversion copywriting (AIDA, PAS frameworks)",
      "Ecommerce product descriptions that sell",
      "Freelance profile setup on Upwork/Fiverr"
    ],
    tools: ["Grammarly Premium", "SurferSEO", "Google Docs", "Yoast SEO"],
    audience: "Writers, bloggers, virtual assistants, and agency content creators.",
    imageTheme: "emerald-writing",
    syllabus: [
      { week: "Week 1-2", topic: "Foundations of Commercial Writing", details: "Active voice, readability scores, headline formulas, and tonal consistency." },
      { week: "Week 3-4", topic: "SEO Blog Posts & Pillar Articles", details: "Search intent, H1-H4 hierarchy, semantic LSI keywords, and meta snippets." },
      { week: "Week 5-6", topic: "Sales Copy & Client Acquisition", details: "Landing page hero copy, email lead magnets, and proposing to foreign clients." }
    ]
  },
  {
    id: "product-research",
    title: "Ecommerce Product Research",
    category: "ecommerce",
    description: "Specialized analytical training in finding winning products for eBay, Amazon, Shopify, and TikTok Shop. Evaluate competition, profit margins, supplier viability, and trends.",
    duration: "4 Weeks",
    level: "Intermediate",
    badge: "High ROI",
    highlights: [
      "Data-driven product validation frameworks",
      "Seasonal vs evergreen demand analysis",
      "Profit margin & fee breakdown calculators",
      "Competitor weakness exploitation"
    ],
    tools: ["Helium 10", "ZIK Analytics", "Google Trends", "TikTok Creative Center"],
    audience: "Dropshippers, agency account managers, and freelance product hunters.",
    imageTheme: "emerald-research",
    syllabus: [
      { week: "Week 1", topic: "Market Demand & Opportunity Gaps", details: "Evaluating keyword trends, search volume surges, and saturation factors." },
      { week: "Week 2", topic: "Unit Economics & Supplier Feasibility", details: "Landed cost calculation, packaging weight, shipping brackets, and customs." },
      { week: "Week 3-4", topic: "Cross-Platform Validation & Pitching", details: "Presenting audited product dossiers to investors and agency clients." }
    ]
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    category: "marketing",
    description: "Learn how to manage, grow, and monetize business accounts across Instagram, Facebook, TikTok, and LinkedIn. Build content calendars, community engagement, and brand reputation.",
    duration: "6 Weeks",
    level: "All Levels",
    badge: "Practical",
    highlights: [
      "Monthly content calendar architecture",
      "Viral organic reel & video frameworks",
      "Community management & DM sales tactics",
      "Monthly performance analytics reporting"
    ],
    tools: ["Meta Business Suite", "Buffer", "Notion", "CapCut"],
    audience: "Social media coordinators, brand managers, and remote agency talent.",
    imageTheme: "emerald-smm",
    syllabus: [
      { week: "Week 1-2", topic: "Platform Algorithms & Brand Persona", details: "Audience demographics, profile optimization, visual identity guidelines." },
      { week: "Week 3-4", topic: "Organic Growth & Short-Form Content", details: "Hook writing, viral trends analysis, hashtag strategy, and scheduling tools." },
      { week: "Week 5-6", topic: "Reporting & Client Retainers", details: "KPI tracking, engagement rate computation, and monthly retainer pitches." }
    ]
  }
];

export const AGENCY_SERVICES: Service[] = [
  // ECOMMERCE SERVICES
  {
    id: "ebay-management",
    title: "eBay Store Management",
    category: "ecommerce",
    shortDesc: "End-to-end management of your eBay seller accounts, maintaining Top-Rated status and growing sales volume.",
    fullDesc: "Our dedicated account managers handle daily listing updates, inventory reconciliation, order processing, defect monitoring, and buyer inquiry resolution on US, UK, and European eBay marketplaces.",
    deliverables: ["Daily order processing & tracking uploads", "Competitor price adjustments", "Resolution center & dispute protection", "Monthly P&L reporting"],
    keyBenefits: ["Protects seller level ratings", "Accelerates weekly sales", "Frees up your business hours"],
    timeline: "Monthly Retainer",
    iconName: "ShoppingBag"
  },
  {
    id: "amazon-account-management",
    title: "Amazon Account Management",
    category: "ecommerce",
    shortDesc: "Comprehensive Amazon FBA & FBM store supervision from inventory health to brand registry and case logging.",
    fullDesc: "Complete operational stewardship for your Amazon seller central account. We protect your account health rating, handle brand registry issues, coordinate with Amazon support, and maintain catalog hygiene.",
    deliverables: ["Stranded & suppressed inventory fixes", "PPC ad management & bid refinement", "Seller feedback & review monitoring", "Case log dispute escalations"],
    keyBenefits: ["Zero downtime from policy strikes", "Optimized advertising spend", "Continuous catalog growth"],
    timeline: "Monthly Retainer",
    iconName: "ShieldCheck"
  },
  {
    id: "shopify-development-service",
    title: "Shopify Store Development",
    category: "ecommerce",
    shortDesc: "Bespoke high-converting Shopify 2.0 storefronts tailored for maximum speed and frictionless checkouts.",
    fullDesc: "From custom UI design to Liquid theme engineering, payment gateway configuration, and essential app stacks, we craft online shops engineered specifically to convert cold traffic into buyers.",
    deliverables: ["Custom Shopify 2.0 theme setup", "Payment gateway integration (Stripe, COD)", "Mobile-optimized cart & checkout", "Speed optimization score 85+"],
    keyBenefits: ["Higher conversion rate", "Lightning-fast page loading", "Easy-to-edit backend for your team"],
    timeline: "2-3 Weeks Turnaround",
    iconName: "Globe"
  },
  {
    id: "etsy-store-management",
    title: "Etsy Store Management",
    category: "ecommerce",
    shortDesc: "Specialized support for handmade, vintage, and digital print-on-demand shops looking to scale globally.",
    fullDesc: "We optimize product tags, descriptions, mockups, and customer satisfaction metrics to ensure your shop consistently ranks on high-intent search terms and maintains Star Seller status.",
    deliverables: ["Continuous keyword tag audits", "Product mockup visual refinement", "Customer message response SLA < 2 hrs", "Seasonal promotional campaigns"],
    keyBenefits: ["Star Seller badge retention", "Increased organic impressions", "Safe policy-compliant operations"],
    timeline: "Monthly Retainer",
    iconName: "Sparkles"
  },
  {
    id: "product-research-hunting",
    title: "Product Research & Hunting",
    category: "ecommerce",
    shortDesc: "Uncover high-demand, low-competition winner products with verified margins and ready-to-sell suppliers.",
    fullDesc: "We provide comprehensive product audit dossiers using institutional data tools. Every vetted product includes margin projections, supplier quotes, keyword volume analysis, and patent clearance checks.",
    deliverables: ["Vetted winner product reports", "Landed cost & profit margin breakdown", "Verified Alibaba/manufacturer contact", "Competitor vulnerability report"],
    keyBenefits: ["Reduces financial risk", "Proven market demand before buying", "Clear differentiation angle"],
    timeline: "Per Batch / Monthly",
    iconName: "Search"
  },
  {
    id: "listing-optimization",
    title: "Product Listing Optimization",
    category: "ecommerce",
    shortDesc: "Transform mediocre product pages into high-converting sales machines with persuasive copy and keyword SEO.",
    fullDesc: "We craft index-optimized titles, persuasive bullet points, A+ Brand Story content, and strategic backend search terms that capture algorithm rank and address customer objections instantly.",
    deliverables: ["SEO-optimized title & 5 key bullet points", "HTML description & backend search terms", "Graphic design recommendations for images", "Keyword indexing checklist"],
    keyBenefits: ["Higher organic search rank", "Substantial conversion boost", "Lower bounce rate"],
    timeline: "3-5 Business Days",
    iconName: "FileText"
  },
  {
    id: "ecommerce-account-management",
    title: "Ecommerce Account Management",
    category: "ecommerce",
    shortDesc: "Multi-channel operations team managing your brand across TikTok Shop, Walmart, eBay, and local marketplaces.",
    fullDesc: "Streamline multi-platform selling with a centralized operations team. We sync inventory counts, fulfill orders, handle return RMA requests, and maintain cross-channel customer communication.",
    deliverables: ["Multi-channel inventory synchronization", "Order tracking updates & label generation", "RMA & return reconciliation", "Unified weekly executive summary"],
    keyBenefits: ["Eliminates overselling", "Centralized operational control", "Scalable without hiring in-house"],
    timeline: "Monthly Retainer",
    iconName: "Layers"
  },
  {
    id: "store-performance-analysis",
    title: "Store Performance Analysis",
    category: "ecommerce",
    shortDesc: "In-depth diagnostic audits pinpointing traffic leaks, checkout bottlenecks, and wasted ad spend.",
    fullDesc: "A ruthless data audit of your ecommerce business. We analyze traffic sources, cart drop-off stages, advertising CAC vs LTV, and customer reviews to provide an actionable 30-day turnaround blueprint.",
    deliverables: ["Full 25-point UX & speed audit", "Checkout friction diagnostic", "PPC ad waste breakdown", "Prioritized 30-day action plan"],
    keyBenefits: ["Immediately cuts wasted ad budget", "Closes checkout leaks", "Clear path to scaling profitability"],
    timeline: "5-7 Business Days",
    iconName: "BarChart3"
  },
  {
    id: "order-management-support",
    title: "Order Management Support",
    category: "ecommerce",
    shortDesc: "24/7 backend dispatch, tracking verification, carrier coordination, and customer dispute resolution.",
    fullDesc: "Ensure on-time delivery and flawless customer satisfaction. Our support team processes incoming orders, verifies addresses, liaises with freight forwarders, and handles customer inquiries with rapid turnaround.",
    deliverables: ["Fast order fulfillment execution", "Address verification & fraud screening", "Carrier tracking upload & monitoring", "Customer delivery inquiry resolution"],
    keyBenefits: ["Protects on-time delivery metrics", "Minimizes item-not-received claims", "Delivers 5-star customer experience"],
    timeline: "Dedicated Staffing Retainer",
    iconName: "Truck"
  },

  // DIGITAL SERVICES
  {
    id: "digital-marketing-agency",
    title: "Digital Marketing",
    category: "digital",
    shortDesc: "Full-funnel digital marketing strategies to acquire qualified leads and direct sales for your brand.",
    fullDesc: "We develop customized acquisition strategies combining search intent, social awareness, and retention email flows to ensure maximum return on every marketing dollar invested.",
    deliverables: ["Omnichannel growth strategy blueprint", "Audience persona & messaging hierarchy", "Bi-weekly strategy check-in calls", "Real-time performance dashboard"],
    keyBenefits: ["Predictable customer acquisition", "Consistent brand messaging", "Transparent ROI reporting"],
    timeline: "Ongoing Retainer",
    iconName: "TrendingUp"
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    category: "digital",
    shortDesc: "Build authority and community with consistent, professional content across Instagram, Facebook, and LinkedIn.",
    fullDesc: "We take full ownership of your social presence. From monthly content planning to visual design, copywriting, daily posting, and audience interaction, we keep your brand vibrant and authoritative.",
    deliverables: ["16-24 custom monthly brand posts", "Story & Reel content production", "Hashtag & keyword engagement strategy", "Monthly audience growth report"],
    keyBenefits: ["Builds brand prestige", "Nurtures organic prospects", "Keeps social channels active 365 days"],
    timeline: "Monthly Retainer",
    iconName: "Share2"
  },
  {
    id: "meta-advertising",
    title: "Facebook & Instagram Advertising",
    category: "digital",
    shortDesc: "High-ROI paid social campaigns designed to generate measurable sales and qualified inquiries.",
    fullDesc: "Stop burning ad budget on boosted posts. We build disciplined Meta advertising funnels with creative variations, broad & lookalike targeting, dynamic retargeting, and rigorous CBO scaling.",
    deliverables: ["Complete ad campaign architecture", "High-converting ad creative copy & visuals", "A/B creative testing protocols", "Daily ROAS monitoring & budget tuning"],
    keyBenefits: ["Scale profitable ad campaigns", "Lower Cost Per Acquisition (CPA)", "Predictable lead flow"],
    timeline: "Monthly Retainer",
    iconName: "Target"
  },
  {
    id: "graphic-designing-service",
    title: "Graphic Designing",
    category: "digital",
    shortDesc: "Premium corporate identity, commercial packaging, marketing collateral, and digital brand design.",
    fullDesc: "Our designers craft world-class visual assets that establish instant credibility. Whether you need an identity system, marketing brochures, or product packaging, we ensure consistent excellence.",
    deliverables: ["Vector brand identity & logos", "Print-ready packaging & product labels", "Marketing collateral & brochures", "Editable source files included"],
    keyBenefits: ["Premium international aesthetic", "High-resolution vector assets", "Immediate brand elevation"],
    timeline: "Project Based",
    iconName: "PenTool"
  },
  {
    id: "canva-design-services",
    title: "Canva Design Services",
    category: "digital",
    shortDesc: "Custom, fully editable Canva Pro templates designed for your internal team to quickly update content.",
    fullDesc: "Get stunning, brand-aligned templates that your team can edit in seconds without needing Adobe software. Perfect for fast-paced social media teams, coaches, and small business owners.",
    deliverables: ["Custom Canva Pro master templates", "Brand kit setup with colors & fonts", "Reusable carousel & reel layouts", "Video walkthrough guide for your staff"],
    keyBenefits: ["100% editable by anyone", "Fast turnaround for daily posts", "No expensive software licenses required"],
    timeline: "3-5 Business Days",
    iconName: "Palette"
  },
  {
    id: "content-writing-service",
    title: "Content Writing",
    category: "digital",
    shortDesc: "Persuasive copywriting, SEO articles, and authority pieces that educate visitors and convert them into buyers.",
    fullDesc: "Words that drive revenue. We research your industry deeply to produce SEO-optimized blog posts, persuasive website landing pages, email nurture sequences, and professional whitepapers.",
    deliverables: ["100% original, plagiarism-free copy", "SEO keyword integration & meta descriptions", "Engaging hook & call-to-action structure", "Unlimited revisions on initial draft"],
    keyBenefits: ["Climbs Google search rankings", "Addresses customer hesitations", "Elevates your brand authority"],
    timeline: "Per Word / Monthly Retainer",
    iconName: "Edit3"
  },
  {
    id: "website-development",
    title: "Website Development",
    category: "digital",
    shortDesc: "Fast, responsive, modern websites engineered with clean code, mobile-first design, and seamless conversions.",
    fullDesc: "We build custom business websites, landing pages, and web applications that represent your brand with prestige. Built for speed, mobile responsiveness, search engine friendliness, and security.",
    deliverables: ["Responsive desktop, tablet & mobile layouts", "SEO-optimized semantic code structure", "Contact & lead capture form setup", "Fast loading speeds < 2s"],
    keyBenefits: ["Establishes corporate credibility", "Converts mobile visitors", "Easy future maintenance"],
    timeline: "2-4 Weeks",
    iconName: "Code2"
  },
  {
    id: "youtube-channel-management",
    title: "YouTube Channel Management",
    category: "digital",
    shortDesc: "Complete operational management of your company or creator YouTube channel for long-term subscriber growth.",
    fullDesc: "From publishing schedules to thumbnail A/B testing, description SEO, community posts, and analytics monitoring, we treat your YouTube channel like a premier broadcast network.",
    deliverables: ["Video uploading with SEO tags & titles", "Custom click-worthy thumbnail design", "Community tab engagement strategy", "Monthly audience retention analysis"],
    keyBenefits: ["Consistently higher Click-Through-Rate (CTR)", "Higher watch time retention", "Hands-off growth for founders"],
    timeline: "Monthly Retainer",
    iconName: "Video"
  },
  {
    id: "youtube-automation-service",
    title: "YouTube Automation",
    category: "digital",
    shortDesc: "Turnkey faceless channel creation: scriptwriting, voiceover, video editing, and automated revenue scaling.",
    fullDesc: "We build and manage fully automated YouTube channels in profitable CPM niches. Our production team handles research, scripts, licensed footage editing, voiceovers, and daily management.",
    deliverables: ["Researched high-retention video topics", "Professional human or studio AI voiceovers", "High-impact video editing with dynamic B-roll", "Targeted thumbnails designed for >10% CTR"],
    keyBenefits: ["100% hands-off content production", "Long-term compounding digital asset", "Monetization through AdSense & sponsors"],
    timeline: "Batch / Monthly Retainer",
    iconName: "Cpu"
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "1",
    title: "Practical Learning",
    description: "No theoretical fluff. Every course module is built around live store dashboards, real client accounts, and hands-on operational practice.",
    icon: "BookOpen"
  },
  {
    id: "2",
    title: "Expert Guidance",
    description: "Learn directly from practitioners who manage multi-six-figure store accounts and run active client campaigns every single day.",
    icon: "Award"
  },
  {
    id: "3",
    title: "Real-World Projects",
    description: "Build an active portfolio while studying. Graduate with verified case studies, launched products, and real sales track records.",
    icon: "Briefcase"
  },
  {
    id: "4",
    title: "Professional Mentorship",
    description: "Direct access to instructors and senior agency specialists for continuous troubleshooting, store audits, and strategic direction.",
    icon: "Users"
  },
  {
    id: "5",
    title: "Career Development",
    description: "We guide our students in securing remote international contracts on Upwork, Fiverr, and building their own client acquisition funnels.",
    icon: "TrendingUp"
  },
  {
    id: "6",
    title: "Ecommerce Opportunities",
    description: "Tap into high-margin global marketplaces across the US, UK, Canada, and Europe through structured store frameworks.",
    icon: "Globe"
  },
  {
    id: "7",
    title: "Business Growth Support",
    description: "For corporate clients, our agency division provides complete turnkey management, scaling revenue while mitigating operational stress.",
    icon: "ShieldCheck"
  },
  {
    id: "8",
    title: "Continuous Learning Resources",
    description: "Market algorithms change fast. Our alumni receive lifetime community updates, policy briefings, and private workshops.",
    icon: "RefreshCw"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Hamza Tariq",
    city: "Lahore",
    courseOrBatch: "eBay Business & Account Management",
    rating: 5,
    review: "UBM Pakistan completely changed my perspective on ecommerce. Within 6 weeks of completing the eBay track, I landed my first UK client on Upwork to manage their inventory.",
    avatarSeed: "HT",
    verifiedLabel: "Verified Learner"
  },
  {
    id: "t2",
    name: "Ayesha Malik",
    city: "Karachi",
    courseOrBatch: "Shopify Store Development",
    rating: 5,
    review: "The focus on practical store development without unnecessary coding made it accessible. I launched my own clothing brand store and got my first 20 orders in the opening week.",
    avatarSeed: "AM",
    verifiedLabel: "Verified Learner"
  },
  {
    id: "t3",
    name: "Bilal Ahmed",
    city: "Rawalpindi",
    courseOrBatch: "Amazon FBA Mastery",
    rating: 5,
    review: "Usman Iftikhar's mentorship and product hunting frameworks helped me avoid costly sourcing mistakes. The Helium 10 modules alone were worth ten times the admission.",
    avatarSeed: "BA",
    verifiedLabel: "Verified Learner"
  },
  {
    id: "t4",
    name: "Zainab Raza",
    city: "Islamabad",
    courseOrBatch: "Etsy Business & Digital Products",
    rating: 5,
    review: "I started with zero design background. Today I manage two digital download Etsy shops earning recurring foreign currency while studying at university.",
    avatarSeed: "ZR",
    verifiedLabel: "Verified Learner"
  },
  {
    id: "t5",
    name: "Muhammad Fahad",
    city: "Faisalabad",
    courseOrBatch: "Agency Client – Shopify Store",
    rating: 5,
    review: "We hired UBM Pakistan's agency to revamp our textile brand's ecommerce presence. Their team delivered a blazing-fast Shopify store that doubled our checkout completion rate.",
    avatarSeed: "MF",
    verifiedLabel: "Agency Client"
  },
  {
    id: "t6",
    name: "Kashif Mehmood",
    city: "Multan",
    courseOrBatch: "Digital Marketing & Meta Ads",
    rating: 5,
    review: "The Meta Ads training taught me the exact creative testing frameworks used by global agencies. I went from losing money on boosted posts to generating consistent 4.2x ROAS.",
    avatarSeed: "KM",
    verifiedLabel: "Verified Learner"
  },
  {
    id: "t7",
    name: "Sana Javed",
    city: "Peshawar",
    courseOrBatch: "Graphic Designing & Canva",
    rating: 5,
    review: "The hands-on practice on ecommerce product banners and social media carousels made my portfolio look like an experienced agency designer. Highly recommended!",
    avatarSeed: "SJ",
    verifiedLabel: "Verified Learner"
  },
  {
    id: "t8",
    name: "Usama Khan",
    city: "Sialkot",
    courseOrBatch: "Agency Client – Amazon Account",
    rating: 5,
    review: "For a manufacturer like us, dealing with Amazon customer disputes and listing optimization was overwhelming. UBM Pakistan took over our account and stabilized our metrics.",
    avatarSeed: "UK",
    verifiedLabel: "Agency Client"
  },
  {
    id: "t9",
    name: "Danish Rehman",
    city: "Gujranwala",
    courseOrBatch: "YouTube Automation",
    rating: 5,
    review: "The automation workflow is brilliant. Scripting, voiceovers, and editing pipeline were explained step by step. My channel crossed monetized watch hours in 4 months.",
    avatarSeed: "DR",
    verifiedLabel: "Verified Learner"
  },
  {
    id: "t10",
    name: "Farhan Siddiqui",
    city: "Overseas (Dubai, UAE)",
    courseOrBatch: "Ecommerce Product Research",
    rating: 5,
    review: "Even being in the UAE, I chose UBM Pakistan because of their direct, pragmatic mentorship. Usman sir provides genuine feedback on product viability rather than false hype.",
    avatarSeed: "FS",
    verifiedLabel: "Verified Learner"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: "p1",
    title: "US Home Goods eBay Store Turnaround",
    category: "stores",
    clientType: "International Seller Account",
    metric: "+185% Monthly Revenue in 90 Days",
    summary: "Re-engineered 450+ eBay listings with optimized titles, updated shipping policies, and reduced late shipment defect rate from 3.8% to 0.4%.",
    deliverables: ["Catalog Title Optimization", "Cassini SEO Rework", "Customer Service SLA < 1 hr", "Inventory Feed Integration"]
  },
  {
    id: "p2",
    title: "Apparel Brand Shopify 2.0 Store",
    category: "websites",
    clientType: "Pakistani Fashion Exporter",
    metric: "3.4% Checkout Conversion Rate",
    summary: "Built a mobile-first, high-speed custom Shopify storefront with currency detection, automated WhatsApp order confirmations, and local COD gateway.",
    deliverables: ["Custom Liquid Theme", "Speed Optimization (91 Score)", "COD & Card Payment Gateways", "Abandoned Cart Email Sequences"]
  },
  {
    id: "p3",
    title: "B2B Industrial Leather Goods Amazon PL",
    category: "stores",
    clientType: "Private Label Exporter",
    metric: "ACoS Reduced from 42% to 19.4%",
    summary: "Restructured Amazon PPC campaigns into tightly segmented exact match ad groups while producing 3D infographic lifestyle imagery and A+ Content.",
    deliverables: ["Amazon Brand Story & A+ Content", "PPC Negative Keyword Sculpting", "Helium 10 Rank Tracking", "FBA Packaging Compliance"]
  },
  {
    id: "p4",
    title: "Fitness Equipment Meta Ads Campaign",
    category: "marketing",
    clientType: "Regional Ecommerce Brand",
    metric: "4.8x Return on Ad Spend (ROAS)",
    summary: "Engineered high-converting video hook creatives, dynamic retargeting for cart abandoners, and lookalike audiences based on verified purchase values.",
    deliverables: ["24 UGC Video Ads Produced", "CBO Campaign Architecture", "Pixel & CAPI Server Tracking", "Daily ROAS Dashboard"]
  },
  {
    id: "p5",
    title: "Printable Planner Etsy Store Launch",
    category: "design",
    clientType: "Student Graduate Project",
    metric: "1,200+ Digital Orders in 6 Months",
    summary: "Conceived, designed, and packaged 35 printable productivity planners in Canva Pro, ranking in the top 3 search results for key student search queries.",
    deliverables: ["35 Printable Digital Assets", "Mockup Presentation Suite", "eRank Keyword Tag Strategy", "Automated PDF Delivery"]
  },
  {
    id: "p6",
    title: "Luxury Tech & Gadgets YouTube Channel",
    category: "youtube",
    clientType: "Automation Portfolio Asset",
    metric: "85K Subscribers & $2.8K Monthly Revenue",
    summary: "Faceless YouTube channel in the consumer electronics niche. Produced 48 high-retention videos with bespoke scripts, licensed B-roll, and 11.2% average CTR thumbnails.",
    deliverables: ["Turnkey Video Production", "Thumbnail A/B Testing", "Voiceover Audio Mastering", "Sponsorship Integration Kit"]
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "a1",
    title: "New Batch Admissions Open: Weekend & Evening Sessions",
    category: "Admissions",
    date: "November 2026",
    isUrgent: true,
    shortDesc: "Enrollment is now officially open for our upcoming cohort across eBay, Amazon FBA, Shopify, and Digital Marketing.",
    content: "We are pleased to announce admissions for the new cohort at UBM Pakistan. Both in-person interactive sessions and remote virtual classes are available. Seats are strictly limited to ensure 1-on-1 mentorship for each enrolled student. Early applicants receive customized product hunting dossiers upon enrollment."
  },
  {
    id: "a2",
    title: "UBM Pakistan Expands Agency Division for Overseas Clients",
    category: "Update",
    date: "October 2026",
    shortDesc: "Our dedicated agency team now provides full multi-channel account management for sellers operating in the US, UK, and UAE.",
    content: "To support businesses scaling beyond local borders, UBM Pakistan has enhanced its agency infrastructure. Clients now receive dedicated Slack channels, weekly performance calls, and real-time P&L reporting on eBay, Amazon, and Shopify stores."
  },
  {
    id: "a3",
    title: "Free Masterclass: Navigating eBay Policy Updates & Seller Metrics",
    category: "Workshop",
    date: "Upcoming Saturday",
    shortDesc: "Join CEO Usman Iftikhar for a live 2-hour strategic briefing on maintaining Top Rated Seller status on international accounts.",
    content: "A free practical session breaking down recent changes in eBay Cassini algorithms, payment hold regulations, dispute handling, and best practices for Pakistani sellers handling foreign stores."
  },
  {
    id: "a4",
    title: "Top Graduate Internship & Virtual Assistant Placement Program",
    category: "Internship",
    date: "Ongoing Initiative",
    shortDesc: "High-performing students in our eBay and Amazon cohorts are selected for paid agency internships and client account placements.",
    content: "At UBM Pakistan, our commitment extends beyond the classroom. Outstanding graduates who demonstrate operational discipline and reliable assignment completion are recommended directly to international clients or onboarded into UBM agency teams."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "How to Avoid eBay Account Restrictions: The Essential 2026 Guide",
    category: "eBay Tips",
    readTime: "6 min read",
    date: "Nov 02, 2026",
    excerpt: "Learn the crucial identity verification, tracking compliance, and velocity limit guidelines required to keep your eBay business in good standing.",
    author: "Usman Iftikhar",
    tags: ["eBay", "Account Health", "Dropshipping", "Compliance"],
    content: [
      "Operating a healthy eBay account in 2026 requires understanding Cassini algorithm safety thresholds. Many beginners make the fatal mistake of listing too fast without warming up their account velocity.",
      "First, establish strict shipping handling times. Never mark an item as dispatched without a verifiable carrier tracking number. eBay's tracking upload validation tracks exact carrier scan timestamps.",
      "Second, resolve buyer inquiries before they turn into formal cases. An unresolved case is heavily weighted against your seller performance level. Our golden rule at UBM Pakistan: refund or replace promptly when a tracking dispute arises.",
      "Finally, keep item specifics accurate. Inaccurate category attributes increase return defect rates, which can quickly drop your account to Below Standard."
    ]
  },
  {
    id: "b2",
    title: "Winning on Amazon FBA: Product Research Metrics That Actually Matter",
    category: "Amazon Business",
    readTime: "8 min read",
    date: "Oct 28, 2026",
    excerpt: "Stop relying on surface-level search volume. Discover the unit economics, patent checks, and review velocity formulas that ensure profitable launches.",
    author: "Usman Iftikhar",
    tags: ["Amazon FBA", "Product Hunting", "Helium 10", "Ecommerce"],
    content: [
      "The days of launching a generic silicon spatula on Amazon are long gone. In today's competitive environment, product hunting requires surgical data analysis.",
      "At UBM Pakistan, we teach students to verify at least 3 distinct factors before even ordering a sample: review velocity distribution, landed gross margin above 35%, and zero active utility patents.",
      "Evaluate whether the top 10 competitors have dominated for years or if newer entrants have gained reviews in the last 90 days. If the top 5 brands monopolize 80% of revenue, move on to a sub-niche with fragmented market share."
    ]
  },
  {
    id: "b3",
    title: "Why High-Converting Shopify Stores Outperform Generic Marketplaces",
    category: "Shopify Guides",
    readTime: "5 min read",
    date: "Oct 20, 2026",
    excerpt: "Building your independent brand asset gives you ownership of your customer list, repeat margins, and higher business valuation.",
    author: "UBM Agency Team",
    tags: ["Shopify", "Branding", "DTC", "Conversion Rate"],
    content: [
      "While marketplaces like Amazon and eBay provide ready buyer traffic, you never truly own the customer. With your own Shopify storefront, every marketing dollar builds equity in your brand.",
      "To convert traffic into buyers, eliminate friction: keep page load speeds under 2 seconds, simplify checkout to 1 page, and feature prominent social proof testimonials right next to the Add to Cart button."
    ]
  },
  {
    id: "b4",
    title: "Etsy Digital Products: The Zero-Inventory Business Model for 2026",
    category: "Etsy Business",
    readTime: "7 min read",
    date: "Oct 12, 2026",
    excerpt: "Discover how Pakistani designers and creators are earning recurring foreign currency through printable templates, planners, and digital assets.",
    author: "Creative Division",
    tags: ["Etsy", "Digital Downloads", "Canva", "Passive Income"],
    content: [
      "Selling digital downloads on Etsy is one of the highest margin business models accessible today. Once an asset is designed, it can be sold thousands of times with zero packaging, zero shipping costs, and zero inventory risk.",
      "The secret lies in identifying micro-niches: wedding stationery bundles, real estate agent social media templates, and fitness tracker spreadsheets. Pair strong Canva Pro designs with eRank SEO to rank on the first page."
    ]
  },
  {
    id: "b5",
    title: "The 3 Pillars of Profitable Meta Ads for Ecommerce Stores",
    category: "Digital Marketing",
    readTime: "6 min read",
    date: "Sep 30, 2026",
    excerpt: "How to structure Advantage+ shopping campaigns, produce winning video hooks, and calculate your true break-even Cost Per Acquisition.",
    author: "Performance Marketing Team",
    tags: ["Meta Ads", "Facebook", "Instagram", "ROAS"],
    content: [
      "Many store owners fail on Facebook Ads because they optimize for vanity metrics like link clicks rather than purchase conversions with clean Conversions API tracking.",
      "We recommend a 3-part framework: 1) Scroll-stopping video hooks in the first 2.5 seconds, 2) Clear value proposition and customer reviews in the body copy, and 3) Advantage+ campaign consolidation to let Meta's machine learning find the highest intent buyers."
    ]
  },
  {
    id: "b6",
    title: "Faceless YouTube Automation: How to Build Scalable Digital Real Estate",
    category: "YouTube Growth",
    readTime: "7 min read",
    date: "Sep 22, 2026",
    excerpt: "Step-by-step breakdown of managing scriptwriters, voiceover artists, and video editors to create passive income channels.",
    author: "Content Division",
    tags: ["YouTube", "Automation", "Video Production", "Passive Income"],
    content: [
      "YouTube automation treats video creation like an assembly line. By targeting high-CPM niches such as finance, technology, or luxury, creators can generate $15 to $35 RPM (revenue per thousand views).",
      "Focus obsessively on your thumbnail Click-Through-Rate (CTR) and first 30 seconds retention curve. If viewers stay past the 60-second mark, YouTube's recommendation engine will deliver exponential organic reach."
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is UBM Pakistan?",
    answer: "UBM Pakistan is a premier digital organization operating two complementary divisions: an Ecommerce & Digital Skills Training Institute dedicated to practical mentorship, and a professional Ecommerce Agency that manages international online stores and digital marketing campaigns for local and overseas clients.",
    category: "General"
  },
  {
    question: "Which ecommerce courses do you offer?",
    answer: "We offer 10 comprehensive training programs: eBay Business & Account Management, Amazon FBA & Ecommerce, Shopify Store Development, Etsy Business & Store Management, Digital Marketing, Graphic Designing & Canva, YouTube Automation, Professional Content Writing, Ecommerce Product Research, and Social Media Management.",
    category: "Courses"
  },
  {
    question: "Are the courses beginner-friendly?",
    answer: "Yes, absolutely. Our training is designed to take a complete beginner with zero prior experience to an operational, job-ready level. We begin with core fundamentals before guiding you through live store setups, software tools, and real client workflows.",
    category: "Courses"
  },
  {
    question: "How can I enroll in a course?",
    answer: "You can click the 'Enroll Now' button anywhere on our website, submit the admission inquiry form, or message our team directly via WhatsApp at +923040880992. Our academic counselors will brief you on current batch timings, requirements, and verify your seat.",
    category: "Admissions"
  },
  {
    question: "Do you offer ecommerce account management for businesses?",
    answer: "Yes. Our agency division manages active seller accounts on eBay, Amazon, Shopify, and Etsy for manufacturers, brand owners, and investors. We handle everything from daily order dispatch and customer service to inventory reconciliation and advertising PPC.",
    category: "Agency"
  },
  {
    question: "Can international clients hire UBM Pakistan for agency services?",
    answer: "Yes. We work extensively with overseas clients in the USA, UK, UAE, Canada, and Europe. We provide dedicated communication channels, weekly video check-ins, transparent reporting dashboards, and NDA-backed confidentiality.",
    category: "Agency"
  },
  {
    question: "How can I contact the UBM Pakistan team or founder?",
    answer: "You can call or WhatsApp our official number at +923040880992, send an email to contact.ubmpakistan@gmail.com, or fill out the contact form on this website. Our team typically responds within 1 to 2 business hours.",
    category: "Contact"
  },
  {
    question: "Where can I get detailed course curriculum and fee structure?",
    answer: "Click the 'Learn More' button on any course card to open the interactive syllabus overview. For specific batch schedules, payment plan options, and seat reservations, please contact us on WhatsApp (+923040880992) for the official course prospectus.",
    category: "Courses"
  }
];
