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
    nextCaseStudy: 'pulsepay',
    gradientColors: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: '2',
    slug: 'pulsepay',
    title: 'PulsePay',
    type: 'Sprint',
    role: 'Product Designer',
    duration: '5 days',
    team: 'PM, 2 Engineers, Stakeholder',
    summary: 'Led a Google Design Sprint to validate a redesigned checkout flow and address trust concerns causing drop-offs.',
    outcome: 'Validated a new checkout flow in 5 days',
    outcomeMetric: 'Validated in 5 days',
    problem: {
      business: 'Checkout abandonment rate of 68% was significantly impacting revenue. Competitors had 40% lower drop-off rates.',
      user: 'Users expressed concerns about payment security and felt uncertain about what would happen after purchase.',
      constraints: [
        'Sprint timeline: 5 days maximum',
        'Must work within existing payment provider',
        'Need to maintain PCI compliance'
      ]
    },
    responsibilities: [
      'Facilitated the entire 5-day design sprint',
      'Led sketching and decision-making sessions',
      'Created high-fidelity prototype for testing',
      'Conducted user interviews on day 5',
      'Synthesized findings and presented recommendations'
    ],
    discovery: {
      title: 'Day 1: Map & Understand',
      content: [
        'Mapped the checkout journey with stakeholders',
        'Identified trust as the primary barrier through HMW exercises',
        'Set sprint target: reduce perceived risk at payment step'
      ],
      deliverables: [
        {
          title: 'Sprint Map',
          description: 'Visual map of checkout journey and pain points',
          imagePlaceholder: 'Whiteboard showing checkout flow with red flags'
        },
        {
          title: 'HMW Notes',
          description: 'Prioritized "How Might We" questions',
          imagePlaceholder: 'Sticky notes organized by theme'
        }
      ]
    },
    ideation: {
      title: 'Day 2-3: Sketch & Decide',
      content: [
        'Individual sketching produced diverse solutions',
        'Dot voting narrowed to 3 promising concepts',
        'Storyboarded the winning solution for testing'
      ],
      deliverables: [
        {
          title: 'Solution Sketches',
          description: 'Crazy 8s and detailed solution sketches',
          imagePlaceholder: 'Hand-drawn sketches of checkout variations'
        },
        {
          title: 'Storyboard',
          description: 'Step-by-step flow of chosen solution',
          imagePlaceholder: '16-panel storyboard of new checkout'
        }
      ]
    },
    design: {
      title: 'Day 4: Prototype',
      content: [
        'Built clickable Figma prototype in 8 hours',
        'Added trust signals: security badges, clear pricing, confirmation preview',
        'Included progress indicators and reassuring microcopy'
      ],
      deliverables: [
        {
          title: 'Interactive Prototype',
          description: 'Clickable checkout flow for testing',
          imagePlaceholder: 'Figma prototype screens with trust elements'
        },
        {
          title: 'Trust Signal System',
          description: 'Security indicators and reassurance patterns',
          imagePlaceholder: 'Badge designs and microcopy examples'
        }
      ]
    },
    testing: {
      title: 'Day 5: Test & Learn',
      content: [
        'Tested with 5 representative users',
        'All 5 completed checkout without hesitation',
        'Users specifically mentioned feeling "secure" and "informed"'
      ],
      deliverables: [
        {
          title: 'Test Script',
          description: 'Interview guide and observation sheet',
          imagePlaceholder: 'Document with test scenarios'
        },
        {
          title: 'Findings Report',
          description: 'Synthesized insights and recommendations',
          imagePlaceholder: 'Presentation slides with quotes and patterns'
        }
      ]
    },
    outcomes: {
      metrics: [
        'Prototype validated with 5/5 successful completions',
        'Projected 25-30% reduction in cart abandonment',
        'Engineering estimate: 3 weeks to implement'
      ],
      qualitative: [
        'Stakeholders aligned on solution after seeing user reactions',
        'Trust became a core principle for future design work'
      ]
    },
    reflection: {
      improvements: [
        'Would recruit more diverse user profiles for testing',
        'Could have explored mobile-first checkout more deeply'
      ],
      learnings: [
        'Design sprints are excellent for high-stakes decisions',
        'Trust signals must be visible, not assumed'
      ]
    },
    nextCaseStudy: 'mindnest',
    gradientColors: 'from-violet-500/20 to-purple-500/20'
  },
  {
    id: '3',
    slug: 'mindnest',
    title: 'MindNest',
    type: 'App',
    role: 'Product Designer',
    duration: '8 weeks',
    team: 'PM, 2 iOS Engineers, Content Strategist',
    summary: 'Redesigned the onboarding and habit formation experience for a wellness app to reduce week-one drop-off.',
    outcome: 'Reduced drop-off in week one with clearer flows',
    outcomeMetric: '-35% week-one churn',
    problem: {
      business: '52% of users churned within the first 7 days, before experiencing the app\'s core value proposition.',
      user: 'New users felt overwhelmed by options and unclear about how to build a consistent wellness routine.',
      constraints: [
        'iOS platform only for initial release',
        'Must work offline for core features',
        'Content library already established'
      ]
    },
    responsibilities: [
      'Led user research and persona development',
      'Designed end-to-end onboarding experience',
      'Created habit loop mechanics and reminders',
      'Developed gamification elements',
      'Worked closely with content team on messaging'
    ],
    discovery: {
      title: 'Discovery & Insights',
      content: [
        'Analyzed cohort data to identify churn patterns',
        'Conducted diary studies with 8 users over 2 weeks',
        'Found that users who set reminders had 3x better retention'
      ],
      deliverables: [
        {
          title: 'User Personas',
          description: 'Three key user archetypes with goals and barriers',
          imagePlaceholder: 'Persona cards with photos and key attributes'
        },
        {
          title: 'Churn Analysis',
          description: 'Behavioral patterns leading to drop-off',
          imagePlaceholder: 'Data visualization of user journey drop-offs'
        }
      ]
    },
    ideation: {
      title: 'Ideation & Exploration',
      content: [
        'Explored habit formation frameworks (BJ Fogg, Nir Eyal)',
        'Sketched 15 different onboarding approaches',
        'Prioritized progressive goal-setting model'
      ],
      deliverables: [
        {
          title: 'Concept Sketches',
          description: 'Various onboarding and habit-forming patterns',
          imagePlaceholder: 'Sketches showing different app flows'
        },
        {
          title: 'Habit Loop Diagram',
          description: 'Designed trigger-routine-reward cycle',
          imagePlaceholder: 'Circular diagram showing habit mechanics'
        }
      ]
    },
    design: {
      title: 'Design & Prototype',
      content: [
        'Created personalized onboarding based on user goals',
        'Designed streak system and gentle reminders',
        'Built iOS prototype with micro-animations'
      ],
      deliverables: [
        {
          title: 'App Screens',
          description: 'Complete onboarding and home experience',
          imagePlaceholder: 'Mobile screens showing welcome flow and dashboard'
        },
        {
          title: 'Animation Specs',
          description: 'Micro-interaction guidelines for developers',
          imagePlaceholder: 'Animation timing and easing specifications'
        }
      ]
    },
    testing: {
      title: 'Testing & Iteration',
      content: [
        'Ran beta test with 50 users over 2 weeks',
        'Tracked daily engagement and completion rates',
        'Simplified goal-setting based on confusion feedback'
      ],
      deliverables: [
        {
          title: 'Beta Test Plan',
          description: 'Metrics and feedback collection strategy',
          imagePlaceholder: 'Document outlining test parameters'
        },
        {
          title: 'Iteration Log',
          description: 'Changes made from beta feedback',
          imagePlaceholder: 'Before/after screens with change notes'
        }
      ]
    },
    outcomes: {
      metrics: [
        'Week-one retention: 48% → 63% (-35% churn)',
        'Daily active users up 22%',
        'Reminder opt-in rate: 78%'
      ],
      qualitative: [
        'App Store reviews mentioned "easy to stick with"',
        'Users shared streaks on social media organically'
      ]
    },
    reflection: {
      improvements: [
        'Would have tested push notification timing more rigorously',
        'Could have added more social features earlier'
      ],
      learnings: [
        'Small, achievable goals are key to habit formation',
        'Celebration moments matter more than gamification points'
      ]
    },
    nextCaseStudy: 'greengrid',
    gradientColors: 'from-emerald-500/20 to-teal-500/20'
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
    nextCaseStudy: 'fluxboard',
    gradientColors: 'from-teal-500/20 to-cyan-500/20'
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
