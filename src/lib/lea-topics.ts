export type TopicSection = {
  id: string;
  aliases: string[];
  answer: string;
};

export type KnowledgeTopic = {
  id: string;
  title: string;
  aliases: string[];
  fullAnswer: string;
  howItWorks: string;
  sections: TopicSection[];
};

const SOCIAL_OVERVIEW = `We grow your online presence and turn followers into customers — you run the business, we handle strategy, posting, and engagement.`;

const SOCIAL_OPTIONS = `Two options: A) we create everything — strategy, design, video, captions, hashtags, posting, and community. B) you send the content, we schedule it and manage the account in working hours.`;

const SOCIAL_PLATFORMS = `We manage all major platforms except TikTok and LinkedIn. We cover Facebook, Instagram, and more.`;

const SOCIAL_ADS = `Yes — paid ads and boosting. More detail sits under High-ROI Paid Advertising & Google Ads.`;

const SOCIAL_BRANDING = `Not yet. We don't do logos or brand guidelines right now — you'll need to provide your own brand assets.`;

const SOCIAL_LANGUAGES = `We create content and provide community management in both Sinhala and English.`;

const SOCIAL_OPTION_B_LIMITS = `Yes — Option B post/flyer volume is agreed at the start of the contract.`;

const SOCIAL_VIDEO_LIMITS = `On-site video (Option A) is for safe spots like offices and filming staff. Complex location shoots are standalone Videography — not in this package.`;

const SOCIAL_PLANNING = `We create and share all content two weeks prior to the posting date so you can review it.`;

const SOCIAL_REVIEW = `Yes — you review visuals, captions, and hashtags first. Once approved, we don't change them.`;

const SOCIAL_REVISIONS = `There are 2 revision rounds included when we create content two weeks in advance.`;

const SOCIAL_PERFORMANCE = `If something isn't landing, we watch it and change or optimize mid-month.`;

const SOCIAL_ASSETS = `Clients share raw content, flyers, and brand assets easily via Google Drive.`;

const SOCIAL_REPORTS = `Yes, we provide performance reports and analytics at the end of every month.`;

const SOCIAL_PROCESS = `Content is shared 2 weeks before posting, plans can change on request, and we optimize mid-month if results are weak.`;

const SOCIAL_PRICING = `Packages are custom to your budget and scope. WhatsApp +94 70 665 5547 for a quote.`;

const SOCIAL_HOW_IT_WORKS = `Two ways to work: A) we create and run everything, or B) you send content and we schedule + manage the account. Content is planned 2 weeks ahead. WhatsApp +94 70 665 5547 for a quote.`;

export const COMPANY_HOURS = `Our working hours are Monday to Friday, 9:00 AM – 5:00 PM IST.`;

export const COMPANY_CONTACT = `WhatsApp +94 70 665 5547 — quotes, project chat, or a live agent.`;

export const COMPANY_MEETINGS = `Mostly online. We visit in person only for full-service video recording.`;

export const COMPANY_REPLY = `We reply promptly during working hours, Mon–Fri 9AM–5PM IST.`;

export const COMPANY_START = `WhatsApp +94 70 665 5547, tell us about your business, and we'll walk you through packages.`;

const COMPANY_SUMMARY = `Mon–Fri, 9AM–5PM IST. WhatsApp +94 70 665 5547 to get started.`;

export const LEA_TOPICS: KnowledgeTopic[] = [
  {
    id: "social-media",
    title: "Social Media Marketing",
    aliases: [
      "social media",
      "social media marketing",
      "social media management",
      "marketing",
      "marketing service",
      "marketing services",
      "rooster marketing",
      "digital marketing",
      "socials",
      "instagram",
      "facebook",
      "community management",
      "content creation",
      "reels",
      "social posts",
      "posting",
    ],
    howItWorks: SOCIAL_HOW_IT_WORKS,
    fullAnswer: SOCIAL_HOW_IT_WORKS,
    sections: [
      {
        id: "overview",
        aliases: [
          "what is",
          "overview",
          "do you do",
          "help with",
          "grow",
          "followers",
          "audience",
          "presence",
        ],
        answer: SOCIAL_OVERVIEW,
      },
      {
        id: "platforms",
        aliases: [
          "platform",
          "platforms",
          "tiktok",
          "linkedin",
          "which platforms",
          "what platforms",
        ],
        answer: SOCIAL_PLATFORMS,
      },
      {
        id: "ads",
        aliases: [
          "paid ads",
          "paid advertising",
          "boosting",
          "boost posts",
          "boosting posts",
          "advertising",
          "google ads",
        ],
        answer: SOCIAL_ADS,
      },
      {
        id: "branding",
        aliases: [
          "logo",
          "logos",
          "branding",
          "brand identity",
          "brand guidelines",
          "brand assets",
        ],
        answer: SOCIAL_BRANDING,
      },
      {
        id: "languages",
        aliases: [
          "language",
          "languages",
          "sinhala",
          "english",
        ],
        answer: SOCIAL_LANGUAGES,
      },
      {
        id: "options",
        aliases: [
          "option",
          "options",
          "option a",
          "option b",
          "full service",
          "full-service",
          "already have",
          "difference",
          "account management",
          "execution",
          "how we can work",
          "work together",
          "two options",
          "service options",
        ],
        answer: SOCIAL_OPTIONS,
      },
      {
        id: "option-b-limits",
        aliases: [
          "limit",
          "limits",
          "how many posts",
          "how many flyers",
          "volume",
          "posts per week",
        ],
        answer: SOCIAL_OPTION_B_LIMITS,
      },
      {
        id: "video-limits",
        aliases: [
          "on-site",
          "onsite",
          "recording",
          "filming",
          "videography",
          "location-based",
          "office",
          "employees",
        ],
        answer: SOCIAL_VIDEO_LIMITS,
      },
      {
        id: "planning",
        aliases: [
          "how far",
          "in advance",
          "two weeks",
          "2 weeks",
          "planned",
          "planning",
        ],
        answer: SOCIAL_PLANNING,
      },
      {
        id: "review",
        aliases: [
          "review",
          "approve",
          "approval",
          "captions",
          "hashtags",
          "before they are posted",
        ],
        answer: SOCIAL_REVIEW,
      },
      {
        id: "revisions",
        aliases: [
          "revision",
          "revisions",
          "revision rounds",
          "how many revision",
        ],
        answer: SOCIAL_REVISIONS,
      },
      {
        id: "performance",
        aliases: [
          "performing",
          "isn't performing",
          "not performing",
          "mid-month",
          "mid month",
          "optimize",
          "optimisation",
          "optimization",
        ],
        answer: SOCIAL_PERFORMANCE,
      },
      {
        id: "assets",
        aliases: [
          "google drive",
          "drive",
          "raw content",
          "send over",
          "share assets",
          "brand assets",
        ],
        answer: SOCIAL_ASSETS,
      },
      {
        id: "reports",
        aliases: [
          "report",
          "reports",
          "analytics",
          "performance reports",
        ],
        answer: SOCIAL_REPORTS,
      },
      {
        id: "process",
        aliases: [
          "process",
          "timeline",
          "how you work",
          "how we work",
          "how it works",
          "schedule",
          "feedback",
        ],
        answer: SOCIAL_PROCESS,
      },
      {
        id: "pricing",
        aliases: [
          "price",
          "pricing",
          "cost",
          "how much",
          "package",
          "packages",
          "budget",
          "fee",
          "charge",
        ],
        answer: SOCIAL_PRICING,
      },
    ],
  },
  {
    id: "company",
    title: "General Company Information",
    aliases: [
      "working hours",
      "office hours",
      "business hours",
      "work hours",
      "opening hours",
    ],
    howItWorks: COMPANY_SUMMARY,
    fullAnswer: COMPANY_SUMMARY,
    sections: [
      {
        id: "hours",
        aliases: [
          "working hours",
          "office hours",
          "business hours",
          "work hours",
          "opening hours",
          "what time",
          "9am",
          "5pm",
          "ist",
        ],
        answer: COMPANY_HOURS,
      },
      {
        id: "contact",
        aliases: [
          "contact",
          "get a quote",
          "get quote",
          "quote",
          "whatsapp",
          "live agent",
          "live agents",
          "reach you",
          "talk to",
          "call",
        ],
        answer: COMPANY_CONTACT,
      },
      {
        id: "meetings",
        aliases: [
          "in person",
          "in-person",
          "meet clients",
          "meet in person",
          "face to face",
          "face-to-face",
          "office visit",
          "on-site",
          "onsite",
          "everything online",
          "primarily online",
          "online only",
        ],
        answer: COMPANY_MEETINGS,
      },
      {
        id: "reply",
        aliases: [
          "how fast",
          "reply",
          "replies",
          "respond",
          "response",
          "response time",
          "client requests",
        ],
        answer: COMPANY_REPLY,
      },
      {
        id: "start",
        aliases: [
          "get started",
          "getting started",
          "what do i need",
          "need to start",
          "start working",
        ],
        answer: COMPANY_START,
      },
    ],
  },
];
