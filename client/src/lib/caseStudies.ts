export type CaseStudyType = 'SaaS' | 'Sprint' | 'App' | 'Website';

export interface CaseStudyDeliverable {
  title: string;
  description: string;
  imagePlaceholder: string;
}

export interface CaseStudySection {
  title: string;
  content: string[];
  deliverables?: CaseStudyDeliverable[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  type: CaseStudyType;
  role: string;
  duration: string;
  team: string;
  summary: string;
  outcome: string;
  outcomeMetric: string;
  problem: {
    business: string;
    user: string;
    constraints: string[];
  };
  responsibilities: string[];
  discovery: CaseStudySection;
  ideation: CaseStudySection;
  design: CaseStudySection;
  testing: CaseStudySection;
  outcomes: {
    metrics: string[];
    qualitative: string[];
  };
  reflection: {
    improvements: string[];
    learnings: string[];
  };
  nextCaseStudy: string;
  gradientColors: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'fluxboard',
    title: 'FluxBoard',
    type: 'SaaS',
    role: 'Product Designer',
    duration: '12 weeks',
    team: 'PM, 3 Engineers, Data Analyst',
    summary: 'Redesigned the onboarding experience for a B2B analytics platform to improve user activation and reduce time-to-value.',
    outcome: 'Improved onboarding completion by 28%',
    outcomeMetric: '+28% onboarding completion',
    problem: {
      business: 'Low activation rates were impacting customer retention and increasing support costs. Only 34% of new users completed onboarding.',
      user: 'Operations managers and analysts found the initial setup confusing, with unclear next steps and overwhelming configuration options.',
      constraints: [
        'Must integrate with existing data pipelines',
        'Cannot change core dashboard architecture',
        'Limited engineering resources for 3-month timeline'
      ]
    },
    responsibilities: [
      'Led end-to-end UX research and design',
      'Conducted stakeholder interviews and user research',
      'Created user journey maps and identified pain points',
      'Designed and prototyped new onboarding flows',
      'Collaborated with engineering on implementation'
    ],
    discovery: {
      title: 'Discovery & Insights',
      content: [
        'Conducted 12 user interviews with new customers to understand onboarding challenges',
        'Analyzed support tickets to identify common friction points',
        'Mapped the existing user journey revealing 7 critical drop-off points'
      ],
      deliverables: [
        {
          title: 'Research Plan',
          description: 'Structured interview guide and research objectives',
          imagePlaceholder: 'Research plan document with interview questions'
        },
        {
          title: 'Journey Map',
          description: 'End-to-end user journey highlighting pain points',
          imagePlaceholder: 'Visual journey map showing user emotions and touchpoints'
        }
      ]
    },
    ideation: {
      title: 'Ideation & Exploration',
      content: [
        'Ran design sprint workshops with cross-functional team',
        'Generated 40+ ideas through Crazy 8s exercises',
        'Prioritized solutions based on impact vs. effort matrix'
      ],
      deliverables: [
        {
          title: 'Wireframes',
          description: 'Low-fidelity explorations of progressive onboarding',
          imagePlaceholder: 'Wireframe sketches showing step-by-step onboarding'
        },
        {
          title: 'User Flow',
          description: 'Optimized information architecture for setup',
          imagePlaceholder: 'Flowchart showing simplified user paths'
        }
      ]
    },
    design: {
      title: 'Design & Prototype',
      content: [
        'Designed progressive disclosure pattern for complex settings',
        'Created contextual tooltips and inline guidance',
        'Built interactive prototype for usability testing'
      ],
      deliverables: [
        {
          title: 'High-Fidelity Designs',
          description: 'Complete onboarding flow with new patterns',
          imagePlaceholder: 'Polished UI screens showing new onboarding experience'
        },
        {
          title: 'Design System',
          description: 'New components for guided experiences',
          imagePlaceholder: 'Component library with tooltips and progress indicators'
        }
      ]
    },
    testing: {
      title: 'Testing & Iteration',
      content: [
        'Conducted 8 moderated usability tests',
        'Identified navigation confusion in step 3',
        'Iterated on copy and visual hierarchy based on feedback'
      ],
      deliverables: [
        {
          title: 'Usability Test Plan',
          description: 'Task scenarios and success metrics',
          imagePlaceholder: 'Test script with task flows and questions'
        },
        {
          title: 'Iteration Changelog',
          description: 'Documented changes from user feedback',
          imagePlaceholder: 'Before/after comparisons with annotations'
        }
      ]
    },
    outcomes: {
      metrics: [
        'Onboarding completion: 34% → 62% (+28%)',
        'Support tickets reduced by 45%',
        'Time to first dashboard: 23 min → 11 min'
      ],
      qualitative: [
        'Users reported feeling "guided" rather than "overwhelmed"',
        'Sales team noted improved demo-to-signup conversion'
      ]
    },
    reflection: {
      improvements: [
        'Would have conducted more A/B testing on copy variations',
        'Could have involved customer success earlier in the process'
      ],
      learnings: [
        'Progressive disclosure is crucial for complex B2B products',
        'Early engineering collaboration prevents scope creep'
      ]
    },
    nextCaseStudy: 'greengrid',
    gradientColors: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: '4',
    slug: 'greengrid',
    title: 'GreenGrid',
    type: 'Website',
    role: 'Product Designer',
    duration: '6 weeks',
    team: 'Marketing Director, Developer, Copywriter',
    summary: 'Redesigned the marketing website for a sustainable energy company to clarify the value proposition and increase lead conversion.',
    outcome: 'Increased lead conversion with clearer value proposition',
    outcomeMetric: '+42% lead conversion',
    problem: {
      business: 'Website generated traffic but only 1.2% of visitors submitted contact forms. Bounce rate was 73%.',
      user: 'Visitors couldn\'t quickly understand what the company offered or why it was different from competitors.',
      constraints: [
        'Must maintain brand guidelines',
        'CMS limitations on interactive features',
        'SEO rankings must be preserved'
      ]
    },
    responsibilities: [
      'Conducted competitive analysis and content audit',
      'Led messaging workshops with stakeholders',
      'Designed new information architecture',
      'Created responsive website designs',
      'Developed lead capture strategy'
    ],
    discovery: {
      title: 'Discovery & Insights',
      content: [
        'Audited existing site content and user flows',
        'Ran heatmap analysis on key pages',
        'Interviewed 6 recent customers about their decision process'
      ],
      deliverables: [
        {
          title: 'Content Audit',
          description: 'Inventory of existing pages and messaging gaps',
          imagePlaceholder: 'Spreadsheet showing content analysis'
        },
        {
          title: 'Heatmap Analysis',
          description: 'User attention and click patterns',
          imagePlaceholder: 'Heatmap overlays on key pages'
        }
      ]
    },
    ideation: {
      title: 'Ideation & Exploration',
      content: [
        'Facilitated messaging workshop to define value proposition',
        'Sketched multiple homepage layouts',
        'Explored different lead capture mechanisms'
      ],
      deliverables: [
        {
          title: 'Messaging Framework',
          description: 'Core value proposition and supporting messages',
          imagePlaceholder: 'Document with headline variations'
        },
        {
          title: 'Wireframes',
          description: 'Layout explorations for homepage and key pages',
          imagePlaceholder: 'Low-fidelity wireframes of page structures'
        }
      ]
    },
    design: {
      title: 'Design & Prototype',
      content: [
        'Designed hero section with clear value statement',
        'Created visual hierarchy emphasizing benefits over features',
        'Built responsive designs for all breakpoints'
      ],
      deliverables: [
        {
          title: 'Website Designs',
          description: 'Complete desktop and mobile designs',
          imagePlaceholder: 'High-fidelity website mockups'
        },
        {
          title: 'Component Library',
          description: 'Reusable UI elements for development',
          imagePlaceholder: 'Design system with buttons, cards, forms'
        }
      ]
    },
    testing: {
      title: 'Testing & Iteration',
      content: [
        'Conducted 5 unmoderated tests on prototype',
        'A/B tested two headline variations post-launch',
        'Iterated on form placement based on analytics'
      ],
      deliverables: [
        {
          title: 'Test Results',
          description: 'User feedback and task completion rates',
          imagePlaceholder: 'Summary report with key findings'
        },
        {
          title: 'A/B Test Report',
          description: 'Headline variation performance data',
          imagePlaceholder: 'Chart comparing conversion rates'
        }
      ]
    },
    outcomes: {
      metrics: [
        'Lead conversion: 1.2% → 3.4% (+42%)',
        'Bounce rate: 73% → 51%',
        'Average session duration: +45 seconds'
      ],
      qualitative: [
        'Sales team reported higher quality leads',
        'Visitors mentioned "finally understanding the offering"'
      ]
    },
    reflection: {
      improvements: [
        'Would have tested more CTA variations',
        'Could have added customer testimonial videos'
      ],
      learnings: [
        'Clear value proposition beats feature lists',
        'Visual hierarchy guides users to action'
      ]
    },
    nextCaseStudy: 'surgeryprep',
    gradientColors: 'from-amber-500/20 to-orange-500/20'
  },
  {
    id: '5',
    slug: 'surgeryprep',
    title: 'SurgeryPrep',
    type: 'App',
    role: 'UI/UX Designer',
    duration: '3 months',
    team: 'Solo Designer',
    summary: 'Designed a personalised mobile companion that delivers the right information at the right time to surgery patients, reducing anxiety and empowering them throughout their surgical journey.',
    outcome: 'Validated solution addressing patient pain points',
    outcomeMetric: '100% task completion',
    problem: {
      business: 'Healthcare staff spent hours answering repetitive questions, with patients forgetting 40-80% of medical information immediately after consultations.',
      user: 'Patients undergoing surgery faced anxiety, confusion, and information overload. Traditional communication methods—verbal instructions and printed leaflets—often failed to provide the right information at the right time.',
      constraints: [
        'Must maintain medical credibility and accuracy',
        'Solution needs to work for diverse surgery types',
        'Must reduce communication burden on healthcare staff'
      ]
    },
    responsibilities: [
      'Conducted primary research with patients and healthcare providers',
      'Led end-to-end UX research and design process',
      'Created user personas and journey maps',
      'Designed information architecture and core features',
      'Developed comprehensive design system',
      'Conducted usability testing and iterations'
    ],
    discovery: {
      title: 'Research: Understanding the Human Experience',
      content: [
        'Conducted patient interviews with 8 participants across various surgery types to understand diverse experiences and needs',
        'Interviewed 5 healthcare professionals (3 surgeons, 2 nurses) to reveal their communication challenges',
        'Created journey mapping documenting emotional highs and lows throughout the surgical process',
        'Identified critical finding: Patients experience peak anxiety 24-48 hours before surgery due to uncertainty about preparation steps'
      ],
      deliverables: [
        {
          title: 'Patient Interview Report',
          description: 'Insights from 8 patients revealing anxiety patterns and information needs',
          imagePlaceholder: 'Sticky notes showing patient feedback themes'
        },
        {
          title: 'Healthcare Provider Report',
          description: 'Professional perspectives on communication gaps and support challenges',
          imagePlaceholder: 'Interview synthesis showing provider pain points'
        }
      ]
    },
    ideation: {
      title: 'Insights: Defining the Design Challenge',
      content: [
        'Synthesised research findings to identify core user needs: How might we help patients feel confident and prepared throughout their surgical journey?',
        'Created detailed personas capturing emotional states, motivations, and specific pain points from research',
        'Used structured ideation techniques (Crazy 8s) to generate over 20 diverse concepts',
        'Prioritised solutions based on user impact and technical feasibility'
      ],
      deliverables: [
        {
          title: 'User Personas',
          description: 'Primary patient and healthcare provider personas with comprehensive profiles',
          imagePlaceholder: 'Detailed persona cards with photos and attributes'
        },
        {
          title: 'Concept Sketches',
          description: 'Ideation process documented showing concept evolution',
          imagePlaceholder: 'Hand-drawn sketches of mobile app concepts'
        },
        {
          title: 'User Journey Map',
          description: 'Comprehensive flow showing patient navigation from diagnosis through recovery',
          imagePlaceholder: 'Journey map with touchpoints and emotional states'
        }
      ]
    },
    design: {
      title: 'Solution: Design & Validation',
      content: [
        'Created low-fidelity wireframes to test core concepts and user flows before high-fidelity design work',
        'Developed comprehensive design system prioritising calm, reassuring aesthetic to reduce anxiety and build confidence',
        'Designed six essential features: Personalised Surgery Timeline, Interactive Checklists, Smart FAQ System, Recovery Tracking, Gentle Reminders, and Educational Content',
        'Built information architecture ensuring intuitive navigation throughout the patient journey'
      ],
      deliverables: [
        {
          title: 'Wireframes',
          description: 'Low-fidelity explorations testing core concepts',
          imagePlaceholder: 'Wireframe screens showing app structure'
        },
        {
          title: 'Design System',
          description: 'Complete colour palette, typography, and component library',
          imagePlaceholder: 'Design system documentation with colors and components'
        },
        {
          title: 'Information Architecture',
          description: 'Site map organizing features and navigation patterns',
          imagePlaceholder: 'Hierarchical diagram of app structure'
        },
        {
          title: 'High-Fidelity Prototype',
          description: 'Interactive prototype with all key features and user flows',
          imagePlaceholder: 'Polished mobile screens showing complete experience'
        }
      ]
    },
    testing: {
      title: 'Final Design & User Validation',
      content: [
        'Conducted usability testing with 5 users (3 patients, 2 clinicians) through task-based scenarios',
        'Achieved 100% task completion rate across all core user flows',
        'Received feedback: "Reassuring" and "much clearer than leaflets"',
        'Made improvements: Simplified medical terminology, added voice-over capability for accessibility, enhanced visual hierarchy for key information, refined notification timing'
      ],
      deliverables: [
        {
          title: 'Usability Test Plan',
          description: 'Task scenarios and success metrics for validation',
          imagePlaceholder: 'Test script with scenarios and questions'
        },
        {
          title: 'Test Findings Report',
          description: 'Synthesized user feedback and validation results',
          imagePlaceholder: 'Report showing quotes and success metrics'
        },
        {
          title: 'Iteration Documentation',
          description: 'Changes made based on user feedback',
          imagePlaceholder: 'Before/after comparisons with improvement notes'
        }
      ]
    },
    outcomes: {
      metrics: [
        '100% task completion rate across all users',
        'Clinicians confirmed significant call reduction potential',
        'Intuitive navigation requiring no explanation'
      ],
      qualitative: [
        'Users reported feeling "reassuring" and found it "much clearer than leaflets"',
        'Patient testimonial: "For the first time, I felt like I knew what was happening to my body"',
        'Healthcare professionals noted reduced repetitive communication burden'
      ]
    },
    reflection: {
      improvements: [
        'Would conduct pilot program with local hospital for 3-month real-world study',
        'Could explore integration with existing hospital record systems (EHR)',
        'Would add multilingual capabilities and full voice support for broader accessibility'
      ],
      learnings: [
        'Timing is everything: Right information at the wrong time creates more anxiety, not less',
        'Language matters: Medical jargon creates barriers; simple, empathetic language builds trust and understanding',
        'Personalisation scales: Surgery-specific content dramatically improves relevance without exponentially increasing complexity'
      ]
    },
    nextCaseStudy: 'harrods',
    gradientColors: 'from-teal-500/20 to-cyan-500/20'
  },
  {
    id: '6',
    slug: 'harrods',
    title: 'Harrods Pre-order',
    type: 'App',
    role: 'UI/UX Designer',
    duration: '8 weeks',
    team: 'Solo Designer',
    summary: 'Designed a luxury pre-order experience that allows customers to reserve high-demand products before launch, enhancing exclusivity while providing Harrods with demand forecasting capabilities.',
    outcome: 'Validated luxury pre-order experience',
    outcomeMetric: '100% task completion',
    problem: {
      business: 'Harrods did not offer a pre-order feature, causing customer frustration and lost revenue for high-demand and limited-edition products. Missed conversion opportunities reduced both revenue and customer satisfaction.',
      user: 'Luxury shoppers missed out on limited-edition items they wanted because they didn\'t know when products would be available. Customers were forced to repeatedly check availability, creating frustration and uncertainty.',
      constraints: [
        'Must feel effortless, exclusive, and premium',
        'Solution needs to integrate seamlessly into existing platform',
        'Must maintain Harrods\' luxury brand positioning'
      ]
    },
    responsibilities: [
      'Structured research to balance customer expectations, competitive standards, and business goals',
      'Conducted customer surveys and interviews with Harrods customers',
      'Performed competitive analysis of luxury retailers',
      'Created user personas and journey maps',
      'Designed complete pre-order flow and information architecture',
      'Developed wireframes and high-fidelity mobile experience',
      'Conducted usability testing and iterations'
    ],
    discovery: {
      title: 'Research: Understanding Luxury Shopping Behaviour',
      content: [
        'Gathered insights from Harrods customers across different segments to understand expectations around exclusivity and early access',
        'Mapped journeys for limited-edition purchases to identify friction points and moments of frustration',
        'Analysed how other luxury retailers approached pre-ordering to identify best practices and opportunities for differentiation',
        'Evaluated how pre-ordering could support inventory planning, revenue forecasting, and customer loyalty'
      ],
      deliverables: [
        {
          title: 'Customer Interview Report',
          description: 'Insights from Harrods customers revealing expectations and frustrations',
          imagePlaceholder: 'Customer interview synthesis document'
        },
        {
          title: 'Competitive Analysis',
          description: 'Framework comparing pre-order approaches across luxury retailers',
          imagePlaceholder: 'Competitive analysis matrix with findings'
        }
      ]
    },
    ideation: {
      title: 'Insights: Defining the Luxury Experience Challenge',
      content: [
        'Synthesised research insights to define a design challenge centred on security, simplicity, and exclusivity',
        'Created focused user persona "Sarah Martins" to anchor design decisions around high-value luxury shoppers',
        'Framed key design questions: How might we help customers secure high-demand items while preserving the premium Harrods experience?',
        'Defined problem statement: Lack of early access and transparency for high-intent customers, requiring a solution that feels like a service, not just a transactional feature'
      ],
      deliverables: [
        {
          title: 'User Persona',
          description: 'Detailed persona for luxury shopper with demographics and pain points',
          imagePlaceholder: 'Persona card for Sarah Martins'
        },
        {
          title: 'Concept Sketches',
          description: 'Multiple concepts evaluated using value vs. effort matrix',
          imagePlaceholder: 'Hand-drawn sketches of reservation approaches'
        },
        {
          title: 'User Flow Design',
          description: 'Detailed flows ensuring pre-order journey feels familiar and frictionless',
          imagePlaceholder: 'User flow diagram showing pre-order process'
        }
      ]
    },
    design: {
      title: 'Solution: Design & Validation',
      content: [
        'Created progressive wireframes to test core concepts and user flows before investing in high-fidelity design work',
        'Developed mobile-first experience that balanced luxury aesthetics with clarity and usability',
        'Designed six core features: Exclusive Access Notifications, Seamless Reservation Process, Order Status Tracking, Flexible Payment Options, Wishlist Integration, and Concierge Support',
        'Built information architecture to integrate pre-order feature seamlessly into Harrods\' existing platform'
      ],
      deliverables: [
        {
          title: 'Wireframes',
          description: 'Progressive wireframes testing core flows before luxury polish',
          imagePlaceholder: 'Low-fidelity wireframe screens'
        },
        {
          title: 'High-Fidelity Mobile Experience',
          description: 'Complete end-to-end pre-order journey from discovery to shipment',
          imagePlaceholder: 'Polished mobile screens showing full flow'
        },
        {
          title: 'Information Architecture',
          description: 'Site map integrating pre-order seamlessly into existing experience',
          imagePlaceholder: 'IA diagram showing feature integration'
        }
      ]
    },
    testing: {
      title: 'Testing & Iteration',
      content: [
        'Conducted usability testing with representative users through task-based scenarios',
        'Achieved 100% task completion across all test users',
        'Received feedback consistently describing experience as "intuitive" and "premium"',
        'Made improvements: Simplified product detail layouts, strengthened visual hierarchy for key CTAs, refined notification preferences and timing, clarified payment options and terminology'
      ],
      deliverables: [
        {
          title: 'Usability Test Plan',
          description: 'Task scenarios testing full pre-order journey',
          imagePlaceholder: 'Test script with scenarios'
        },
        {
          title: 'Validation Report',
          description: 'Synthesized feedback showing seamless integration',
          imagePlaceholder: 'Report with user quotes and success metrics'
        },
        {
          title: 'Iteration Documentation',
          description: 'Improvements made based on testing feedback',
          imagePlaceholder: 'Before/after comparisons with annotations'
        }
      ]
    },
    outcomes: {
      metrics: [
        '100% task completion across all test users',
        'Clear understanding of pre-order terms and delivery timelines',
        'Seamless integration with existing Harrods shopping experience'
      ],
      qualitative: [
        'Users consistently described experience as "intuitive" and "premium"',
        'Customer quote: "This is exactly what luxury shopping should feel like—effortless and exclusive"',
        'Demonstrated how UX design can enhance exclusivity while delivering tangible business value'
      ]
    },
    reflection: {
      improvements: [
        'Would launch pilot with select product category to validate in real-world',
        'Could track conversion rates and demand-forecast accuracy',
        'Would conduct A/B testing on messaging and flow variations',
        'Could expand feature to desktop and in-store kiosks'
      ],
      learnings: [
        'Luxury Requires Simplicity: Premium experiences feel effortless when unnecessary complexity is removed',
        'Early Access Drives Loyalty: Providing customers with early access strengthens emotional connection and repeat engagement',
        'Transparency Builds Trust: Clear expectations increase confidence and conversion'
      ]
    },
    nextCaseStudy: 'samsung-b2b',
    gradientColors: 'from-rose-500/20 to-pink-500/20'
  },
  {
    id: '7',
    slug: 'samsung-b2b',
    title: 'Samsung B2B Lead Generation',
    type: 'Website',
    role: 'UI/UX Designer',
    duration: '3 months',
    team: 'Solo Designer',
    summary: 'Transformed Samsung\'s B2B digital presence from product showcase to partnership platform, creating a strategic lead generation page for Construction and PRS sectors.',
    outcome: 'Strategic B2B partnership platform',
    outcomeMetric: 'Strong stakeholder alignment',
    problem: {
      business: 'Samsung\'s B2B digital presence was underperforming in the Construction and Private Rental Sector (PRS) markets. Product-led messaging was failing to resonate with senior decision-makers seeking long-term strategic partners rather than transactional suppliers.',
      user: 'Construction and PRS decision-makers needed partners who understood their long-term vision and industry challenges, not just vendors pushing individual products. Generic lead forms and vague messaging failed to capture high-intent B2B leads.',
      constraints: [
        'Must balance credibility, clarity, and conversion without feeling sales-driven',
        'Solution needs to integrate seamlessly with Samsung\'s existing B2B site structure',
        'Must position Samsung as strategic partner rather than product vendor'
      ]
    },
    responsibilities: [
      'Structured research to balance internal stakeholder insights with external market understanding',
      'Conducted in-depth stakeholder interviews with Samsung\'s internal teams',
      'Performed target audience analysis of construction and PRS decision-makers',
      'Analysed competitor B2B pages to identify messaging gaps and opportunities',
      'Reviewed existing Samsung content to identify areas lacking clarity',
      'Created user persona for B2B decision-makers',
      'Designed content strategy and narrative structure',
      'Developed information architecture and page structure',
      'Created wireframes and high-fidelity designs'
    ],
    discovery: {
      title: 'Research: Understanding Business Alignment',
      content: [
        'Conducted in-depth interviews with Samsung\'s internal teams to understand business objectives, success metrics, and competitive positioning',
        'Researched decision-makers within construction firms, developers, and architectural practices to understand partnership criteria and pain points',
        'Analysed competitor B2B pages to identify common gaps, messaging weaknesses, and opportunities for differentiation',
        'Reviewed existing Samsung content to identify areas where messaging lacked clarity, relevance, or industry focus'
      ],
      deliverables: [
        {
          title: 'Stakeholder Interview Insights',
          description: 'Key findings from Samsung internal teams on business objectives and positioning',
          imagePlaceholder: 'Stakeholder interview synthesis document'
        },
        {
          title: 'Competitive Analysis',
          description: 'Framework comparing B2B messaging approaches across technology vendors',
          imagePlaceholder: 'Competitive analysis matrix'
        }
      ]
    },
    ideation: {
      title: 'Insights: Defining the Strategic Challenge',
      content: [
        'Synthesised research insights to identify core challenge: repositioning Samsung\'s B2B presence to clearly communicate partnership value, industry understanding, and long-term collaboration',
        'Created detailed B2B decision-maker persona representing mid-to-senior level professionals in construction and PRS organisations',
        'Framed key design questions: How might we position Samsung as a strategic solutions partner? How might partnership value be communicated in a way that builds trust?',
        'The design needed to balance credibility, clarity, and conversion without feeling sales-driven'
      ],
      deliverables: [
        {
          title: 'User Persona',
          description: 'B2B decision-maker persona for construction and PRS organisations',
          imagePlaceholder: 'Persona card with demographics and pain points'
        },
        {
          title: 'Design Questions Framework',
          description: 'Key questions guiding the strategic positioning and messaging approach',
          imagePlaceholder: 'Framework document with design questions'
        }
      ]
    },
    design: {
      title: 'Solution: Design & Validation',
      content: [
        'Explored multiple structural and messaging concepts using structured ideation techniques, prioritised based on business impact and alignment with user needs',
        'Designed narrative structure guiding users from industry understanding to partnership credibility to engagement, focusing on real-world partnership stories and industry-specific challenges',
        'Created six core features: Partnership Storytelling (real-world case studies), Solution Overviews (industry-specific value propositions), Trust Indicators (client testimonials and certifications), Strategic CTAs (consultation-focused calls-to-action), Educational Content (thought leadership and industry insights), Lead Qualification (smart forms segmenting prospects by project needs)',
        'Designed clear information architecture that supported logical content flow and intuitive navigation'
      ],
      deliverables: [
        {
          title: 'Concept Sketches',
          description: 'Multiple page structures and narratives with value vs. effort prioritisation',
          imagePlaceholder: 'Sketches and ideation concepts'
        },
        {
          title: 'Content Strategy & Flow',
          description: 'Narrative structure guiding development priorities',
          imagePlaceholder: 'Content flow diagram'
        },
        {
          title: 'Wireframes',
          description: 'Progressive wireframes testing content hierarchy and narrative flow',
          imagePlaceholder: 'Low-fidelity wireframe screens'
        },
        {
          title: 'High-Fidelity Design',
          description: 'Final lead generation page optimised for clarity, trust, and engagement',
          imagePlaceholder: 'Polished desktop design showing partnership focus'
        },
        {
          title: 'Information Architecture',
          description: 'Site structure integrating seamlessly with existing B2B platform',
          imagePlaceholder: 'IA diagram showing feature integration'
        }
      ]
    },
    testing: {
      title: 'Testing & Iteration',
      content: [
        'Iterated from low-fidelity wireframes to high-fidelity designs, validating decisions through stakeholder feedback and research insights',
        'Early wireframes focused on content hierarchy and narrative clarity, refined through feedback sessions before moving into high-fidelity design',
        'Final design balanced business credibility, partnership messaging, and conversion optimisation',
        'Made improvements: Refined messaging based on stakeholder feedback, strengthened visual storytelling for partnership case studies, optimised form design for lead qualification, improved mobile responsiveness for field-based professionals'
      ],
      deliverables: [
        {
          title: 'Wireframe Testing',
          description: 'Content hierarchy and narrative validation sessions',
          imagePlaceholder: 'Wireframe feedback documentation'
        },
        {
          title: 'Stakeholder Validation',
          description: 'Alignment sessions confirming partnership-focused messaging',
          imagePlaceholder: 'Validation report with stakeholder feedback'
        },
        {
          title: 'Design Iterations',
          description: 'Refinements based on feedback and research insights',
          imagePlaceholder: 'Before/after comparisons showing improvements'
        }
      ]
    },
    outcomes: {
      metrics: [
        'Strong stakeholder alignment on partnership-focused messaging',
        'Clear value proposition differentiation from competitors',
        'Intuitive navigation requiring minimal explanation',
        'Strong visual hierarchy guiding users toward key actions'
      ],
      qualitative: [
        'Stakeholders validated the design as positioning Samsung as "the strategic partner we want to be, not just another vendor"',
        'Demonstrated how UX design can transform business messaging from product-led to partnership-centred',
        'Project showed the value of early stakeholder collaboration in supporting business objectives'
      ]
    },
    reflection: {
      improvements: [
        'Would launch within Samsung\'s Business Industries section to validate with real users',
        'Could track engagement metrics, form submissions, and lead quality',
        'Would conduct A/B testing on messaging and layout variations',
        'Could integrate with CRM for improved lead nurturing and tracking'
      ],
      learnings: [
        'Partnership Over Product: B2B audiences respond more strongly to relationship-driven messaging than feature lists',
        'Industry Specificity Matters: Tailored content significantly improves credibility and engagement',
        'Stakeholder Alignment Is Critical: Early and ongoing collaboration ensures design decisions support business objectives'
      ]
    },
    nextCaseStudy: 'blu-vape',
    gradientColors: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: '8',
    slug: 'blu-vape',
    title: 'Blu Vape Brand Reimagination',
    type: 'Sprint',
    role: 'UI/UX Designer',
    duration: '5 days',
    team: 'Cross-functional Sprint Team',
    summary: 'Led a Google Design Sprint to reimagine Blu Vape\'s brand experience, transforming it from product-focused to community-driven through an integrated loyalty ecosystem.',
    outcome: '87% found loyalty programme appealing',
    outcomeMetric: '100% starter kit comprehension',
    problem: {
      business: 'Blu Vape was experiencing declining market share driven by increased competition, shifting customer expectations, and weakening brand loyalty. Existing experiences focused heavily on products, with limited emotional connection or long-term engagement.',
      user: 'Customers wanted to be part of a community and build relationships with the brand, not just purchase products. The fragmented customer experience across touchpoints failed to create meaningful connections or long-term loyalty.',
      constraints: [
        'Limited to 5-day Google Design Sprint timeframe',
        'Must explore bold ideas while remaining feasible',
        'Solution needs to differentiate through experience, not just products'
      ]
    },
    responsibilities: [
      'Facilitated lightning talks with key stakeholders to clarify business goals and sprint success criteria',
      'Led customer journey mapping from awareness to loyalty',
      'Conducted competitive analysis of loyalty programmes and trial mechanics',
      'Facilitated Crazy 8s ideation session for wide-ranging solution exploration',
      'Led concept evaluation using dot voting and value-effort-feasibility matrix',
      'Designed mid-fidelity wireframes to validate information architecture and user flows',
      'Created high-fidelity prototype reflecting refreshed brand direction',
      'Conducted moderated usability testing with 8 participants across three user groups'
    ],
    discovery: {
      title: 'Day 1: Understand – Mapping the Challenge',
      content: [
        'Worked closely with stakeholders to understand Blu Vape\'s vision, rebranding ambitions, and commercial challenges',
        'Mapped the end-to-end customer journey from awareness to loyalty, identifying gaps, friction points, and emotional drop-offs',
        'Reviewed competitor approaches to loyalty, trial, and retail engagement to identify opportunities for differentiation',
        'Synthesised insights into clear problem statements and sprint objectives that guided decision-making throughout the week'
      ],
      deliverables: [
        {
          title: 'Stakeholder Insights',
          description: 'Key findings from interviews clarifying business goals and brand direction',
          imagePlaceholder: 'Stakeholder interview synthesis document'
        },
        {
          title: 'Customer Journey Map',
          description: 'End-to-end journey mapping identifying friction points and drop-offs',
          imagePlaceholder: 'Customer journey visualization'
        }
      ]
    },
    ideation: {
      title: 'Day 2-3: Diverge & Decide – From Ideas to Direction',
      content: [
        'Generated wide range of potential solutions through Crazy 8s session and collaborative ideation focused on loyalty, product trial, and tobacconist engagement',
        'Ideas ranged from digital loyalty systems and community features to in-store trial experiences and retailer tools, emphasizing volume and variety over refinement',
        'Grouped ideas into strategic themes: Brand Identity, Product Innovation, and Customer Experience',
        'Evaluated concepts using dot voting and evaluation matrix considering user value, business impact, and feasibility',
        'Selected winning concept: Integrated Loyalty Ecosystem connecting digital experiences with physical touchpoints, emphasizing community and personalization'
      ],
      deliverables: [
        {
          title: 'Crazy 8s Sketches',
          description: 'Rapid ideation exploring loyalty, trial, and community concepts',
          imagePlaceholder: 'Individual sketches from ideation session'
        },
        {
          title: 'Thematic Clustering',
          description: 'Ideas grouped into Brand Identity, Product Innovation, and Customer Experience',
          imagePlaceholder: 'Concept clusters and themes'
        },
        {
          title: 'Decision Matrix',
          description: 'Evaluation framework showing concept selection rationale',
          imagePlaceholder: 'Decision matrix with scoring'
        }
      ]
    },
    design: {
      title: 'Day 4: Prototype – Building to Learn',
      content: [
        'Created realistic prototype to test core assumptions: product discovery, loyalty onboarding, and community engagement',
        'Built just enough fidelity to test both usability and emotional response to the reimagined brand',
        'Prioritized clarity, flow, and brand tone over exhaustive screen coverage',
        'Focused on five key prototype areas: Trial onboarding, Goal selection, Registration, Special offers, Help & support',
        'Developed prototype showcasing integrated loyalty ecosystem with tiered rewards, curated starter kits, community features, tobacconist portal, exclusive experiences, and integrated feedback loops'
      ],
      deliverables: [
        {
          title: 'Mid-Fidelity Wireframes',
          description: 'Information architecture and flow validation before visual polish',
          imagePlaceholder: 'Wireframe screens showing key flows'
        },
        {
          title: 'High-Fidelity Prototype',
          description: 'Polished prototype reflecting refreshed brand direction',
          imagePlaceholder: 'Mobile screens showing onboarding, goals, registration, offers, and support'
        },
        {
          title: 'Testing Scenarios',
          description: 'Three core scenarios: new user onboarding, loyalty engagement, retail integration',
          imagePlaceholder: 'Test plan document'
        }
      ]
    },
    testing: {
      title: 'Day 5: Test – Validating with Real Users',
      content: [
        'Conducted moderated testing sessions with 8 participants across three groups: existing customers, potential new users, and tobacconist representatives',
        'Each participant completed 45-minute session covering key flows, combining behavioral observation with qualitative feedback',
        'Strong positive response: 87% found loyalty programme appealing, 100% of new users understood and valued starter kits, 75% expressed interest in community features',
        'Identified areas for improvement: simplify reward redemption, clarify community guidelines, improve mobile flow performance, strengthen onboarding guidance'
      ],
      deliverables: [
        {
          title: 'Testing Protocol',
          description: 'Structured scenarios and observation framework for three user groups',
          imagePlaceholder: 'Testing script and observation guide'
        },
        {
          title: 'User Insights Report',
          description: 'Synthesis of behavioral observations and qualitative feedback',
          imagePlaceholder: 'Report with user quotes and findings'
        },
        {
          title: 'Validation Metrics',
          description: 'Quantitative results showing strong positive response',
          imagePlaceholder: 'Metrics dashboard with percentages'
        }
      ]
    },
    outcomes: {
      metrics: [
        '87% found the loyalty programme appealing',
        '100% of new users understood and valued the starter kits',
        '75% expressed interest in community features',
        'All tobacconists valued the centralised resource hub'
      ],
      qualitative: [
        'User feedback: "This finally feels like a brand that understands what I want, not just trying to sell me products"',
        'User feedback: "The starter kit makes it easy to try without committing"',
        'User feedback: "Having centralised resources makes me more confident in promoting the brand"',
        'Stakeholder validation: "This sprint gave us the confidence and direction we needed to move forward with a complete brand transformation"',
        'Demonstrated clear opportunity to differentiate through experience, loyalty, and community rather than product features alone'
      ]
    },
    reflection: {
      improvements: [
        'Refine the prototype based on testing feedback',
        'Define technical requirements for development',
        'Plan a phased rollout of loyalty features',
        'Launch a pilot with selected tobacconist partners',
        'Establish success metrics and feedback loops',
        'Run follow-up sprints for individual features'
      ],
      learnings: [
        'Sprint Efficiency: Google Design Sprint compressed months of exploration into one focused week while delivering validated strategic direction',
        'Experience Over Product: Focusing on customer experience rather than product differentiation alone uncovered clearer path for brand transformation',
        'Stakeholder Alignment: Sprint format effectively aligned diverse stakeholders and accelerated decision-making through structured process'
      ]
    },
    nextCaseStudy: 'fluxboard',
    gradientColors: 'from-cyan-500/20 to-blue-500/20'
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(cs => cs.slug === slug);
};

export const getCaseStudiesByType = (type: CaseStudyType | 'All'): CaseStudy[] => {
  if (type === 'All') return caseStudies;
  return caseStudies.filter(cs => cs.type === type);
};

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Research, interviews, and problem definition'
  },
  {
    number: '02',
    title: 'Explore',
    description: 'Ideation, sketching, and concept validation'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Wireframes, prototypes, and visual design'
  },
  {
    number: '04',
    title: 'Test',
    description: 'Usability testing and iteration'
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Implementation support and measurement'
  }
];

export const credibilityStats = [
  {
    stat: '5+',
    label: 'Years Experience'
  },
  {
    stat: 'SaaS • Mobile • Web',
    label: 'Product Types'
  },
  {
    stat: 'Agile + Sprints',
    label: 'Methodologies'
  },
  {
    stat: 'A11y + Systems',
    label: 'Design Focus'
  }
];

export const tools = [
  'Figma',
  'Figma AI',
  'ChatGPT',
  'Notion',
  'Jira',
  'Miro'
];
