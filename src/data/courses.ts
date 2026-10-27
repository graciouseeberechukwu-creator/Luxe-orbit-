export interface Module {
  id: number;
  title: string;
  duration: string;
  description: string;
  lessons: string[];
  resources: string[];
}

export interface Course {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  description: string;
  category: 'Online Business' | 'Tech & Web' | 'Writing & Content' | 'Creative & Media' | 'AI & Tools' | 'Affiliate Marketing' | 'Digital Opportunities';
  duration: string;
  level: string;
  finalPrice: number; // Final selling price in Naira (₦)
  currency: string;
  thumbnail: string;
  deliverables: string[];
  modules: Module[];
  sampleLesson: {
    title: string;
    duration: string;
    summary: string;
    keyTakeaway: string;
  };
}

export const COURSES: Course[] = [
  {
    id: 'paypal-creation-course',
    title: 'PayPal Creation Course',
    shortTitle: 'PayPal Creation',
    badge: 'HIGH DEMAND',
    tagline: 'Step-by-step blueprint for setting up, verifying, and maintaining international PayPal accounts.',
    description: 'Learn the exact, compliant methods to create and verify a legitimate, fully functional PayPal account capable of sending, receiving, and withdrawing international funds for freelancing, e-commerce, and digital business without arbitrary account restrictions.',
    category: 'Online Business',
    duration: '2 Weeks • Self-Paced',
    level: 'Beginner to Intermediate',
    finalPrice: 7500,
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Step-by-Step Account Setup Video Walkthroughs',
      'Virtual Card & Bank Linking Verification Protocols',
      'Account Security & Anti-Flagging Operational Checklist',
      'Direct Withdrawal to Local Bank Accounts Guide',
      'Troubleshooting & Resolution Toolkit'
    ],
    modules: [
      {
        id: 1,
        title: 'Prerequisites & Jurisdictional Account Setup',
        duration: '3 Lessons • 45 mins',
        description: 'Understand the legal frameworks, accepted documents, and compliant IP protocols before registering.',
        lessons: [
          'Understanding cross-border PayPal regulations and limitations',
          'Clean IP, browser hygiene, and identity documentation requirements',
          'Selecting the right regional account type for international earnings'
        ],
        resources: ['Document Preparation Checklist.pdf', 'IP Hygiene Guidelines.pdf']
      },
      {
        id: 2,
        title: 'Verification, Bank Linking & Currency Handling',
        duration: '4 Lessons • 65 mins',
        description: 'Connecting compatible virtual cards and fintech transit accounts for smooth verification.',
        lessons: [
          'Sourcing and attaching compatible virtual bank cards',
          'Linking local and international routing accounts',
          'Handling dual-currency conversion without excessive bank surcharges'
        ],
        resources: ['Fintech Linking Compatibility Sheet.xlsx']
      },
      {
        id: 3,
        title: 'Account Health, Warm-Up & Withdrawal Operations',
        duration: '3 Lessons • 50 mins',
        description: 'How to warm up new accounts and withdraw funds safely into local bank accounts.',
        lessons: [
          'The 30-day account warm-up protocol to prevent sudden flags',
          'How to respond calmly and successfully to verification reviews',
          'Step-by-step withdrawals to local bank accounts with favorable rates'
        ],
        resources: ['Withdrawal Flow Chart.pdf', 'Account Warm-Up Schedule.pdf']
      }
    ],
    sampleLesson: {
      title: 'Module 2.1: Linking Virtual Cards Without Triggering Immediate Security Review',
      duration: '18 min video tutorial',
      summary: 'Learn the exact card address matching techniques that ensure seamless verification on the first attempt.',
      keyTakeaway: 'Always ensure your billing address spelling exactly matches the document metadata on file.'
    }
  },
  {
    id: 'ultimate-web-design-course',
    title: 'Ultimate Web Design Course',
    shortTitle: 'Web Design Course',
    badge: 'BESTSELLER',
    tagline: 'Design and launch high-converting, responsive websites for clients without writing complex code.',
    description: 'Master website creation, modern visual UI design, content management systems, responsive layouts, and domain hosting. Learn how to package your web design skills and deliver high-value websites for business owners and personal brands.',
    category: 'Tech & Web',
    duration: '4 Weeks • Practical',
    level: 'Beginner to Advanced',
    finalPrice: 10000,
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      '5 Complete Responsive Website Starter Templates',
      'Client Onboarding Briefs & Contract Agreement Template',
      'Domain Setup, CPanel & WordPress Installation Blueprint',
      'E-commerce & WhatsApp Checkout Integration Guide',
      'Portfolio & Client Acquisition Strategy'
    ],
    modules: [
      {
        id: 1,
        title: 'Web Fundamentals, Domains & Hosting Architecture',
        duration: '4 Lessons • 60 mins',
        description: 'Domain registration, DNS records, SSL certificates, and hosting deployment.',
        lessons: [
          'How domains, DNS, and hosting servers work together',
          'Purchasing domains and configuring affordable high-speed hosting',
          'One-click CMS installations and security configuration'
        ],
        resources: ['Hosting Setup Checklist.pdf', 'DNS Configuration Guide.pdf']
      },
      {
        id: 2,
        title: 'Visual Page Building & Responsive Layout Mastery',
        duration: '5 Lessons • 90 mins',
        description: 'Creating stunning hero sections, product grids, testimonials, and contact forms.',
        lessons: [
          'Visual hierarchy, typography pairs, and color theory for conversions',
          'Building mobile-first layouts that adapt to tablets and smartphones',
          'Creating sticky navigation bars, modals, and dynamic lead forms'
        ],
        resources: ['UI Color Palette & Font Swatches.pdf', 'Wireframe Templates.fig']
      },
      {
        id: 3,
        title: 'E-Commerce, Client Delivery & Pricing Your Services',
        duration: '4 Lessons • 75 mins',
        description: 'Setting up store catalogs, payment channels, and pitching corporate clients.',
        lessons: [
          'Setting up digital downloads, services, and physical store products',
          'Connecting payment channels and direct WhatsApp order buttons',
          'How to price, pitch, and deliver websites to paying business owners'
        ],
        resources: ['Web Design Client Proposal.docx', 'Handover Document Template.docx']
      }
    ],
    sampleLesson: {
      title: 'Module 2.3: Mobile-First Optimization for Smartphone Visitors',
      duration: '22 min practical walkthrough',
      summary: 'Learn how to adjust padding, font sizing, and touch target buttons so mobile visitors convert effortlessly.',
      keyTakeaway: 'Over 75% of web traffic comes from smartphones; always design mobile screens first before desktop.'
    }
  },
  {
    id: 'ghostwriting-goldmine',
    title: 'Ghostwriting Goldmine',
    shortTitle: 'Ghostwriting Goldmine',
    badge: 'HIGH-INCOME SKILL',
    tagline: 'Master the art of ghostwriting high-ticket content, articles, and books for busy professionals.',
    description: 'Learn how to write content, articles, newsletters, and books for clients, founders, and creators who lack the time to write for themselves. Master voice adoption, research systems, client outreach, and contract negotiation for premium writing gigs.',
    category: 'Writing & Content',
    duration: '3 Weeks • Intensive',
    level: 'Beginner to Advanced',
    finalPrice: 22000,
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Ghostwriting Client Cold Outreach & Pitch Scripts',
      'Voice-Matching & Style Discovery Questionnaire',
      'Article, Thread & Newsletter Production Frameworks',
      'Freelance Ghostwriting Contract & Invoicing Template',
      'Portfolio Construction System without Prior Byline'
    ],
    modules: [
      {
        id: 1,
        title: 'The Foundations of Ghostwriting & Voice Matching',
        duration: '4 Lessons • 60 mins',
        description: 'How ghostwriting works and adopting another professional’s authentic tone.',
        lessons: [
          'Understanding ghostwriting vs standard freelance writing',
          'Conducting client voice discovery interviews and content audits',
          'Writing in authoritative, executive, or casual conversational tones'
        ],
        resources: ['Voice Discovery Questionnaire.docx', 'Tone Framework Guide.pdf']
      },
      {
        id: 2,
        title: 'High-Demand Formats: Thought Leadership, Newsletters & eBooks',
        duration: '4 Lessons • 75 mins',
        description: 'Crafting content that executives gladly pay premium rates to publish under their name.',
        lessons: [
          'Ghostwriting viral social posts and thought leadership essays',
          'Building recurring monthly newsletter retainers',
          'Outlining, structuring, and ghostwriting comprehensive short books'
        ],
        resources: ['Executive Post Outlines.pdf', 'Short Book Blueprint.docx']
      },
      {
        id: 3,
        title: 'Client Acquisition, Retainer Pricing & Scaling',
        duration: '4 Lessons • 65 mins',
        description: 'Sourcing clients, pitching cold prospects, and locking in monthly retainer agreements.',
        lessons: [
          'Finding high-value founders and executives on LinkedIn and Twitter',
          'The 3-stage cold email script that gets opened and replied to',
          'Structuring $500–$2,000 monthly ghostwriting retainers'
        ],
        resources: ['Cold Pitch Email Templates.docx', 'Retainer Agreement.docx']
      }
    ],
    sampleLesson: {
      title: 'Module 1.3: Deconstructing Client Audio Notes into Polished Essays',
      duration: '24 min video demonstration',
      summary: 'Watch the instructor take an unedited 5-minute voice memo from a busy executive and transform it into a compelling 800-word article.',
      keyTakeaway: 'Your value as a ghostwriter is extracting raw ideas and packaging them into clean, structured prose.'
    }
  },
  {
    id: 'cartoon-animation',
    title: 'Cartoon Animation',
    shortTitle: 'Cartoon Animation',
    badge: 'CREATIVE SKILL',
    tagline: 'Create captivating 2D and 3D cartoon animations for storytelling, advertising, and social media.',
    description: 'Learn animation creation using both smartphone and computer tools. Master character design, movement, lip-syncing, scene transitions, and background sound design to produce animated videos for marketing, education, and entertainment.',
    category: 'Creative & Media',
    duration: '3 Weeks • Hands-on',
    level: 'Beginner Friendly',
    finalPrice: 8000,
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Character & Background Asset Pack',
      'Sound Effects & Royalty-Free Animation Audio Library',
      'Smartphone Animation Tool Setup Guide',
      'Commercial Ad Animation Storyboard Templates',
      'Client Export & Social Media Aspect Ratio Guide'
    ],
    modules: [
      {
        id: 1,
        title: 'Character Design & Scene Construction',
        duration: '4 Lessons • 55 mins',
        description: 'Setting up characters, backgrounds, and scenes in mobile and desktop animation apps.',
        lessons: [
          'Selecting and installing accessible animation applications',
          'Customizing character appearance, clothing, and distinctive features',
          'Composing indoor and outdoor backgrounds with proper perspective'
        ],
        resources: ['Character Design Sheet.pdf', 'Asset Library Links.txt']
      },
      {
        id: 2,
        title: 'Movement, Gestures & Voice Lip-Syncing',
        duration: '4 Lessons • 70 mins',
        description: 'Bringing characters to life with realistic walking, facial expressions, and speech.',
        lessons: [
          'Keyframing body movement, walking cycles, and hand gestures',
          'Recording or generating audio dialog and syncing lip movements',
          'Camera angles, panning, zooming, and dynamic shot transitions'
        ],
        resources: ['Lip-Sync Chart.pdf', 'Storyboarding Grid.pdf']
      },
      {
        id: 3,
        title: 'Commercial Animations for Brands & Social Channels',
        duration: '3 Lessons • 50 mins',
        description: 'Creating animated explainer videos for businesses and growing YouTube/TikTok channels.',
        lessons: [
          'Scripting 30-second and 60-second animated business advertisements',
          'Adding sound effects, music, and title graphics',
          'Exporting in high-definition and monetizing animation services'
        ],
        resources: ['Explainer Script Template.docx', 'Pricing Guide.pdf']
      }
    ],
    sampleLesson: {
      title: 'Module 2.2: Perfecting Lip-Syncing on Mobile Animation Apps',
      duration: '16 min tutorial',
      summary: 'Learn the simple phonetic timing method that matches character mouth shapes to dialogue naturally.',
      keyTakeaway: 'Focus on primary vowel sounds (A, E, O) rather than trying to animate every individual letter.'
    }
  },
  {
    id: 'video-and-photo-editing-mastery',
    title: 'Video and Photo Editing Mastery',
    shortTitle: 'Video & Photo Editing',
    badge: 'ESSENTIAL SKILL',
    tagline: 'Master professional video cutting, photo retouching, and viral visual effects.',
    description: 'A comprehensive editing masterclass covering industry-standard mobile and desktop software. Learn color grading, audio cleaning, seamless transitions, subtitle animation, photo manipulation, and high-converting visual assets for creators and brands.',
    category: 'Creative & Media',
    duration: '3 Weeks • Practical',
    level: 'Beginner to Intermediate',
    finalPrice: 8000,
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      '50+ Transition Presets & Motion Graphics Overlays',
      'LUTs & Cinematic Color Grading Preset Pack',
      'Sound Effects (SFX) Creator Vault (Whooshes, Pops, Risers)',
      'Thumbnail & Banner Design Templates',
      'Client Delivery & Video Export Settings Cheatsheet'
    ],
    modules: [
      {
        id: 1,
        title: 'Photo Editing & Graphic Composition',
        duration: '4 Lessons • 55 mins',
        description: 'Photo retouching, background removal, lighting correction, and promotional flyer design.',
        lessons: [
          'Color correction, exposure balance, and skin retouching techniques',
          'Clean object and background removal for product photography',
          'Designing high-click-through thumbnails and social media banners'
        ],
        resources: ['Lighting & Color Cheatsheet.pdf', 'Photo Presets.zip']
      },
      {
        id: 2,
        title: 'Video Editing Mechanics & Pacing',
        duration: '5 Lessons • 85 mins',
        description: 'Rough cuts, timeline organization, jump cuts, and maintaining viewer retention.',
        lessons: [
          'Setting up timelines in CapCut, Premiere Pro, and mobile editors',
          'Trimming dead air, pacing cuts, and rhythm-based editing',
          'Dynamic captions, text animations, and highlighting key terms'
        ],
        resources: ['Keyboard Shortcuts Poster.pdf', 'Retention Editing Rules.pdf']
      },
      {
        id: 3,
        title: 'Sound Design, Color Grading & Exporting',
        duration: '4 Lessons • 60 mins',
        description: 'Audio cleaning, sound design layering, color grading, and optimal social export settings.',
        lessons: [
          'Noise reduction, voice equalization, and background music leveling',
          'Applying LUTs and creating cinematic visual warmth',
          'Exporting for Instagram Reels, TikTok, YouTube, and corporate delivery'
        ],
        resources: ['SFX Starter Vault.zip', 'Export Settings Cheatsheet.pdf']
      }
    ],
    sampleLesson: {
      title: 'Module 2.3: Kinetic Captions & Audio Pacing for Short-Form Videos',
      duration: '19 min walkthrough',
      summary: 'Learn how to generate and stylize dynamic subtitles that keep viewer eyes glued to the screen.',
      keyTakeaway: 'Visual change every 3 to 4 seconds dramatically increases video retention rates.'
    }
  },
  {
    id: 'content-creation-hacks',
    title: 'Content Creation Hacks',
    shortTitle: 'Content Creation Hacks',
    badge: 'GROWTH STRATEGY',
    tagline: 'Streamline your content production, discover viral hooks, and build an engaged audience.',
    description: 'Learn the battle-tested frameworks to research, script, record, and repurpose high-engagement content across social platforms. Build a sustainable content engine that attracts clients, followers, and business inquiries without creator burnout.',
    category: 'Writing & Content',
    duration: '2 Weeks • Action-Oriented',
    level: 'Beginner to Intermediate',
    finalPrice: 9000,
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      '100 Proven Viral Hook Formulas (Swipe File)',
      'Content Calendar & Batch Production Notion Template',
      'Repurposing System: 1 Video to 5 Formats Matrix',
      'Audience Engagement & Community Conversion Guide',
      'Smartphone Lighting & Audio Budget Setup Kit'
    ],
    modules: [
      {
        id: 1,
        title: 'Ideation, Research & Viral Hook Architecture',
        duration: '4 Lessons • 50 mins',
        description: 'Finding endless content ideas and crafting hooks that stop the scroll in 2 seconds.',
        lessons: [
          'How to research what your target audience is already searching for',
          'The psychology of scroll-stopping hooks and curiosity gaps',
          'Developing your unique perspective and niche positioning'
        ],
        resources: ['100 Hook Templates.pdf', 'Idea Generation Matrix.xlsx']
      },
      {
        id: 2,
        title: 'Batch Recording, Equipment & Rapid Production',
        duration: '4 Lessons • 65 mins',
        description: 'Recording a full month of content in one weekend using simple equipment.',
        lessons: [
          'Budget studio setup: Lighting, positioning, and crystal-clear smartphone audio',
          'Teleprompter and bullet-point scripting techniques',
          'Batch shooting workflows that save 10+ hours per week'
        ],
        resources: ['Batch Recording Checklist.pdf', 'Equipment Recommendations.pdf']
      },
      {
        id: 3,
        title: 'Cross-Platform Repurposing & Lead Generation',
        duration: '3 Lessons • 45 mins',
        description: 'Converting video views into email subscribers, clients, and course buyers.',
        lessons: [
          'Repurposing one core video into carousels, text posts, and short clips',
          'Calls-to-action that drive direct inquiries and profile visits',
          'Analyzing metrics to iterate on what works best'
        ],
        resources: ['Repurposing Workflow.pdf', 'CTA Bank.docx']
      }
    ],
    sampleLesson: {
      title: 'Module 1.2: The "Problem-Agitate-Curiosity" Hook Formula',
      duration: '15 min lesson',
      summary: 'Deconstruct real viral hooks that generated millions of views and learn how to adapt them to any niche.',
      keyTakeaway: 'The first 3 seconds determine whether 90% of your audience continues watching.'
    }
  },
  {
    id: 'chatgpt-cash-flow',
    title: 'ChatGPT Cash Flow',
    shortTitle: 'ChatGPT Cash Flow',
    badge: 'AI PRODUCTIVITY',
    tagline: 'Leverage AI prompting to automate tasks, create client deliverables, and unlock business workflows.',
    description: 'Master advanced prompt engineering and practical AI workflows with ChatGPT. Learn how to generate marketing copy, business proposals, research summaries, spreadsheet formulas, and digital services that save hours and power freelance income streams.',
    category: 'AI & Tools',
    duration: '2 Weeks • Practical',
    level: 'Beginner to Intermediate',
    finalPrice: 7000,
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Master Prompt Library (500+ Categorized Prompts)',
      'Custom GPT Creation & Knowledge File Templates',
      'AI-Powered Client Service Packaging Playbook',
      'Automated Research & Document Synthesis System',
      'Prompt Optimization & Hallucination Defense Guide'
    ],
    modules: [
      {
        id: 1,
        title: 'Advanced Prompt Engineering & Role Persona Architecture',
        duration: '4 Lessons • 55 mins',
        description: 'Moving beyond basic queries to generate nuanced, expert-level outputs.',
        lessons: [
          'The 5-part anatomy of a high-performance system prompt',
          'Few-shot prompting, delimiter tagging, and structured outputs',
          'Eliminating generic AI tone and injecting human personality'
        ],
        resources: ['Prompt Engineering Framework.pdf', 'Tone Adjustment Cheatsheet.pdf']
      },
      {
        id: 2,
        title: 'Productivity Systems: Research, Writing & Business Operations',
        duration: '4 Lessons • 70 mins',
        description: 'Using ChatGPT for fast market research, drafting proposals, and data analysis.',
        lessons: [
          'Summarizing long documents and extracting critical business insights',
          'Drafting sales copy, email sequences, and client pitch decks',
          'Generating formulas, spreadsheets, and basic coding scripts'
        ],
        resources: ['Business Workflow Prompts.xlsx', 'Proposal Generator Template.docx']
      },
      {
        id: 3,
        title: 'Packaging AI-Assisted Services for Paying Clients',
        duration: '3 Lessons • 45 mins',
        description: 'Offering high-value services powered by fast, disciplined AI workflows.',
        lessons: [
          'High-demand client services you can fulfill 5x faster with AI assistance',
          'Quality control: Editing and refining AI output for professional standards',
          'Ethics, originality, and building long-term client trust'
        ],
        resources: ['Service Packaging Guide.pdf', 'Quality Control Checklist.pdf']
      }
    ],
    sampleLesson: {
      title: 'Module 1.3: Few-Shot Prompting to Match Specific Brand Formats',
      duration: '17 min live prompt demo',
      summary: 'See how providing 2-3 precise input/output examples produces flawless, ready-to-use business deliverables.',
      keyTakeaway: 'Show, don’t just tell: ChatGPT performs best when given structured input/output reference pairs.'
    }
  },
  {
    id: 'ai-video-creation-mastery',
    title: 'AI Video Creation Mastery',
    shortTitle: 'AI Video Creation',
    badge: 'CUTTING-EDGE',
    tagline: 'Create ultra-realistic AI avatars, voiceovers, and faceless videos without expensive cameras.',
    description: 'Learn how to generate engaging videos using modern artificial intelligence tools. Master AI talking avatars, text-to-speech voice synthesis, AI scriptwriting, generative B-roll, and building faceless video channels for brand promotion and client marketing.',
    category: 'AI & Tools',
    duration: '3 Weeks • Hands-on',
    level: 'Beginner to Advanced',
    finalPrice: 7500,
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Top Free & Low-Cost AI Video Tools Directory',
      'AI Video Scriptwriting Prompts & Templates',
      'Voice Synthesis & Natural Pacing Cheatsheet',
      'Faceless YouTube/TikTok Channel Launch Blueprint',
      'Commercial Video Licensing & Client Export Settings'
    ],
    modules: [
      {
        id: 1,
        title: 'AI Tool Stack & Script-to-Video Workflow',
        duration: '4 Lessons • 60 mins',
        description: 'Setting up the essential AI toolchain for text, voice, and image generation.',
        lessons: [
          'Overview of the best AI video generators, avatar tools, and editors',
          'Generating structured, high-retention video scripts with AI',
          'Voice cloning and realistic voiceover synthesis with natural pauses'
        ],
        resources: ['AI Toolchain Comparison.pdf', 'Video Scripting Prompts.docx']
      },
      {
        id: 2,
        title: 'Talking Avatars, Generative B-Roll & Visual Synthesis',
        duration: '4 Lessons • 75 mins',
        description: 'Creating realistic virtual presenters and cinematic background video clips.',
        lessons: [
          'Setting up custom AI avatars that speak any written script naturally',
          'Prompting AI image and video generators for hyper-relevant B-roll',
          'Combining avatar footage with graphics, captions, and sound effects'
        ],
        resources: ['B-Roll Prompt Vault.pdf', 'Avatar Setup Checklist.pdf']
      },
      {
        id: 3,
        title: 'Building Faceless Media Channels & Client Projects',
        duration: '3 Lessons • 50 mins',
        description: 'Monetizing AI videos for marketing campaigns, educational content, and ads.',
        lessons: [
          'Launching a faceless content channel from zero to steady posting',
          'Creating product explainer videos for local and international brands',
          'Client delivery, pricing packages, and ongoing retainer retainers'
        ],
        resources: ['Channel Growth Roadmap.pdf', 'Client Rate Card.xlsx']
      }
    ],
    sampleLesson: {
      title: 'Module 2.1: Generating Consistent Virtual Presenters with Zero Camera Setup',
      duration: '20 min tutorial',
      summary: 'Learn how to generate, animate, and composite a digital presenter into professional brand videos.',
      keyTakeaway: 'Audio clarity is 50% of perceived video quality; always pair AI visuals with clean, high-bitrate voice synthesis.'
    }
  },
  {
    id: 'bab-beginners-affiliate-blueprint',
    title: "BAB-Beginner's Affiliate Blueprint",
    shortTitle: "Beginner's Affiliate Blueprint",
    badge: 'AFFILIATE MARKETING EXCEPTION',
    tagline: 'Master ethical affiliate marketing, product selection, and traffic systems to earn commissions.',
    description: 'A comprehensive beginner-to-advanced roadmap for affiliate marketing. Learn how to select proven, high-demand digital products, position compelling offers, build organic and paid traffic channels, and earn commissions by connecting buyers with solutions.',
    category: 'Affiliate Marketing',
    duration: '4 Weeks • Practical',
    level: 'Beginner Friendly',
    finalPrice: 10000, // AFFILIATE MARKETING EXCEPTION: Retains ₦10,000 without price increase!
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Top Affiliate Networks & Vetted Product Directory',
      'High-Converting Landing Page & Lead Magnet Funnels',
      'Organic Traffic Generation Blueprints (WhatsApp, Social Media)',
      'Email & Direct Message Nurture Sequence Swipe Files',
      'Affiliate Tracking, Analytics & Commission Optimization Guide'
    ],
    modules: [
      {
        id: 1,
        title: 'Affiliate Marketing Foundations & Product Selection',
        duration: '4 Lessons • 60 mins',
        description: 'How affiliate marketing works, choosing networks, and vetting winning products.',
        lessons: [
          'The mechanics of affiliate tracking cookies, links, and payout cycles',
          'How to evaluate high-converting digital products and avoid low-quality offers',
          'Ethical promotion standards: Building trust rather than spamming links'
        ],
        resources: ['Product Vetting Scorecard.xlsx', 'Top Affiliate Platforms List.pdf']
      },
      {
        id: 2,
        title: 'Audience Building & Organic Traffic Channels',
        duration: '5 Lessons • 85 mins',
        description: 'Generating consistent visitor traffic without spending money on upfront advertising.',
        lessons: [
          'WhatsApp audience building and high-engagement broadcast strategies',
          'Creating helpful social media reviews that attract ready-to-buy prospects',
          'Setting up simple bridge pages that educate buyers before purchase'
        ],
        resources: ['Bridge Page Template.fig', 'Organic Traffic Roadmap.pdf']
      },
      {
        id: 3,
        title: 'Follow-Up Systems, Conversion Psychology & Scaling',
        duration: '4 Lessons • 70 mins',
        description: 'Automating follow-up messages and multiplying affiliate commission revenue.',
        lessons: [
          'Writing value-driven follow-up sequences that answer common objections',
          'Offering unique bonuses that make your affiliate link the obvious choice',
          'Tracking link analytics and scaling successful promotional campaigns'
        ],
        resources: ['Follow-Up Message Swipe File.docx', 'Bonus Creation Guide.pdf']
      }
    ],
    sampleLesson: {
      title: 'Module 1.3: The "Value Bridge" Strategy That Multiplies Conversions',
      duration: '25 min masterclass',
      summary: 'Learn why sending prospects directly to raw affiliate links fails, and how a 1-page bridge page turns cold visitors into buyers.',
      keyTakeaway: 'Affiliate marketing is about trust: recommend solutions you have vetted and explain clearly how they solve specific pain points.'
    }
  },
  {
    id: 'the-ultimate-copywriting-guide',
    title: 'The Ultimate Copywriting Guide',
    shortTitle: 'Ultimate Copywriting',
    badge: 'CORE SKILL',
    tagline: 'Write persuasive words that sell products, convert visitors, and drive customer action.',
    description: 'Learn the psychology of persuasive copywriting. Master the art of writing captivating headlines, sales pages, email sequences, social advertisements, and product descriptions that compel readers to take decisive action.',
    category: 'Writing & Content',
    duration: '3 Weeks • Masterclass',
    level: 'Beginner to Advanced',
    finalPrice: 7000,
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'The Master Copywriter’s Swipe File (50+ Winning Sales Letters)',
      '15 Proven Headline Formulas for Instant Attention',
      'The 7-Day Email Nurture Sequence Blueprint',
      'Landing Page & Sales Letter Wireframe Breakdown',
      'Objection Handling & Call-to-Action Toolkit'
    ],
    modules: [
      {
        id: 1,
        title: 'Customer Psychology & Persuasion Principles',
        duration: '4 Lessons • 55 mins',
        description: 'Understanding buying triggers, deep desires, fears, and objections.',
        lessons: [
          'Features vs benefits: Why customers buy transformations, not tools',
          'The PAS (Problem-Agitate-Solution) and AIDA copywriting frameworks',
          'Conducting customer research to uncover their exact spoken language'
        ],
        resources: ['Customer Avatar Worksheet.pdf', 'PAS Framework Guide.pdf']
      },
      {
        id: 2,
        title: 'Headlines, Leads & Irresistible Offers',
        duration: '4 Lessons • 70 mins',
        description: 'Crafting magnetic opening lines and offers that feel too good to refuse.',
        lessons: [
          'Writing 25 headlines for every piece of copy before choosing the winner',
          'Hooking attention with story-driven and curiosity-based lead paragraphs',
          'Packaging bonuses, guarantees, and risk reversals that dissolve hesitation'
        ],
        resources: ['15 Headline Formulas.pdf', 'Offer Structuring Template.docx']
      },
      {
        id: 3,
        title: 'Sales Pages, Emails & Ad Copy That Converts',
        duration: '4 Lessons • 65 mins',
        description: 'Writing full-length sales pages, email campaigns, and paid social ads.',
        lessons: [
          'Structuring a complete long-form sales page from top to bottom',
          'Writing high-open-rate subject lines and conversational email copy',
          'Short-form ad copy for Facebook, Instagram, and search ads'
        ],
        resources: ['Sales Page Template.docx', 'Email Swipe Sequence.docx']
      }
    ],
    sampleLesson: {
      title: 'Module 1.2: The "So What?" Test for Transforming Features into Benefits',
      duration: '18 min practical exercise',
      summary: 'Learn the simple linguistic technique that forces you to dig past technical specs until you reach the emotional core of why people buy.',
      keyTakeaway: 'Never describe what a product IS until you have vividly illustrated what it DOES for the buyer’s life.'
    }
  },
  {
    id: 'female-cyber-friend-income-blueprint',
    title: 'Female Cyber Friend Income Blueprint',
    shortTitle: 'Cyber Friend Blueprint',
    badge: 'OPPORTUNITY BLUEPRINT',
    tagline: 'Understand the cyber friend and virtual companionship opportunity with safety, boundaries, and legitimate payment channels.',
    description: 'A structured, practical guide exploring the legitimate international cyber friend and virtual conversation model. Learn how verified international platforms operate, how to set clear personal boundaries and privacy safeguards, build engaging conversational profiles, and receive international payments securely.',
    category: 'Digital Opportunities',
    duration: '2 Weeks • Practical Guide',
    level: 'Beginner Friendly',
    finalPrice: 12000,
    currency: 'NGN',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    deliverables: [
      'Verified International Platform Onboarding Directory',
      'Personal Privacy, Anonymity & Digital Safety Checklist',
      'Conversational Icebreakers & Communication Etiquette Guide',
      'Cross-Border Payment Reception & Foreign Account Guide',
      'Boundary Enforcement & Red-Flag Identification Framework'
    ],
    modules: [
      {
        id: 1,
        title: 'The Cyber Friend Model & Verified Platforms',
        duration: '3 Lessons • 45 mins',
        description: 'Understanding how international virtual friendship and audio chat platforms function.',
        lessons: [
          'What the cyber friend market is and how vetted platforms connect people globally',
          'Reviewing legitimate platforms: Registration requirements and verification rules',
          'Understanding platform policies, terms of service, and ethical parameters'
        ],
        resources: ['Platform Directory & Requirements.pdf', 'Terms Checklist.pdf']
      },
      {
        id: 2,
        title: 'Privacy Safeguards, Boundaries & Profile Positioning',
        duration: '4 Lessons • 60 mins',
        description: 'Protecting your identity, setting non-negotiable boundaries, and engaging communication.',
        lessons: [
          'Digital safety protocols: Protecting your real name, location, and personal data',
          'Setting firm personal boundaries and knowing when to end conversations',
          'Creating an engaging, friendly bio highlighting hobbies, culture, and interests'
        ],
        resources: ['Privacy & Anonymity Guide.pdf', 'Bio Writing Templates.docx']
      },
      {
        id: 3,
        title: 'Receiving International Payouts & Sustainable Practice',
        duration: '3 Lessons • 50 mins',
        description: 'Setting up foreign currency payout accounts and maintaining healthy routine.',
        lessons: [
          'Connecting international payment processors and virtual transit accounts',
          'Withdrawing earnings to your local bank account safely',
          'Time management, mental wellbeing, and maintaining a healthy balance'
        ],
        resources: ['Payment Setup Blueprint.pdf', 'Safety Rules Poster.pdf']
      }
    ],
    sampleLesson: {
      title: 'Module 2.1: Non-Negotiable Digital Safety Protocols and Pseudonym Hygiene',
      duration: '16 min safety briefing',
      summary: 'Learn essential privacy safeguards to maintain complete personal boundary control while communicating on international platforms.',
      keyTakeaway: 'Your privacy and boundaries come first: always operate strictly within vetted platform communication channels.'
    }
  }
];

export interface BusinessDetails {
  brandName: string;
  tagline: string;
  email: string;
  whatsappSupportNumber: string;
  whatsappDisplay: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
}

export const BUSINESS_DETAILS: BusinessDetails = {
  brandName: 'Luxe Échelon Orbit',
  tagline: 'Learn | Grow | Earn',
  email: 'madebygracie287@gmail.com',
  whatsappSupportNumber: '2349138941163',
  whatsappDisplay: '+234 913 894 1163',
  bankName: 'Moniepoint MFB',
  accountName: 'Eberechukwu Gracious Ezinne',
  accountNumber: '8086382378'
};

export const WHAT_TO_EXPECT = [
  {
    title: 'Practical, Actionable Digital Skills',
    description: 'Every course focuses on real-world application, step-by-step implementation, and tangible tools rather than abstract theory.',
    icon: 'wrench'
  },
  {
    title: 'Transparent, Direct Pricing',
    description: 'Clear pricing in Nigerian naira (₦) with no hidden fees or surprise subscriptions. You know exactly what you pay for each course.',
    icon: 'tag'
  },
  {
    title: 'Downloadable Resources & Toolkits',
    description: 'Access templates, frameworks, swipe files, checklists, and guides you can reference repeatedly as you build your projects.',
    icon: 'download'
  },
  {
    title: 'Beginner-to-Advanced Pathways',
    description: 'Curricula structured logically so complete beginners can build foundational confidence before tackling advanced workflows.',
    icon: 'trending-up'
  }
];
