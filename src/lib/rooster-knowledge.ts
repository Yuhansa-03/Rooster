import {
  COMPANY_CONTACT,
  COMPANY_HOURS,
  COMPANY_MEETINGS,
  COMPANY_REPLY,
  COMPANY_START,
  LEA_TOPICS,
  type KnowledgeTopic,
  type TopicSection,
} from "@/lib/lea-topics";

export type KnowledgeItem = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
};

export const ROOSTER_KNOWLEDGE: KnowledgeItem[] = [
  {
    id: "ai-build",
    question: "Will Rooster use AI to build my website?",
    answer:
      "Yes — where it makes sense. We use AI as part of our development and creative workflow to research faster, explore ideas, prototype, write and review code, solve technical problems and improve efficiency. However, AI doesn't replace our design decisions, development expertise or understanding of your business. We use AI to make our work better, not to make your project generic. Our core concepts, UI/UX designs, and strategies are 100% human-made.",
    keywords: [
      "ai",
      "artificial",
      "intelligence",
      "generic",
      "chatgpt",
      "automate",
      "replace",
    ],
  },
  {
    id: "from-scratch",
    question: "Can you build a website from scratch?",
    answer:
      "Absolutely. We can take a project from the initial idea and requirements through UX, UI design, development, testing and launch. If you already have designs or an existing website, we can also work from those and improve or rebuild them.",
    keywords: ["scratch", "new", "start", "build", "create", "from", "zero"],
  },
  {
    id: "know-exactly",
    question: "Do I need to know exactly what I want before contacting Rooster?",
    answer:
      "No. You don't need to come to us with a complete technical specification. Tell us about your business, your problem and what you're hoping to achieve. We'll help translate that into a practical digital solution.",
    keywords: [
      "exactly",
      "specification",
      "idea",
      "unsure",
      "dont",
      "know",
      "brief",
      "ready",
    ],
  },
  {
    id: "template",
    question: "Will you use a template?",
    answer:
      "If a template genuinely makes sense for your project, we'll tell you. But we don't believe every business should look the same. Depending on the project, we can create a custom experience around your brand, customers and requirements.",
    keywords: ["template", "theme", "wordpress", "same", "custom", "unique"],
  },
  {
    id: "features",
    question: "How do you decide what features a website needs?",
    answer:
      "We don't add features simply because they look impressive. We consider your business objectives, customer journey, usability and technical requirements before recommending functionality. The goal isn't more features. It's the right features.",
    keywords: [
      "features",
      "functionality",
      "need",
      "decide",
      "pages",
      "modules",
    ],
  },
  {
    id: "redesign",
    question: "Can you redesign our existing website?",
    answer:
      "Yes. We can review your existing website, identify usability and design problems and rebuild or improve the experience while considering your existing content, SEO and business requirements.",
    keywords: [
      "redesign",
      "rebuild",
      "existing",
      "current",
      "old",
      "improve",
      "revamp",
    ],
  },
  {
    id: "mobile",
    question: "Will my website work on mobile?",
    answer:
      "Yes. Responsive design is a fundamental part of our development process. We design and test experiences across different screen sizes to ensure the website remains usable and consistent.",
    keywords: [
      "mobile",
      "phone",
      "responsive",
      "tablet",
      "screen",
      "devices",
    ],
  },
  {
    id: "after-live",
    question: "Can Rooster help after the website goes live?",
    answer:
      "Yes. We can provide ongoing maintenance, updates, improvements and technical support depending on your requirements. Your website shouldn't be something you build once and forget about.",
    keywords: [
      "after",
      "live",
      "maintenance",
      "support",
      "updates",
      "ongoing",
      "hosting",
    ],
  },
  {
    id: "timeline",
    question: "How long does it take to build a website?",
    answer:
      "It depends on the size and complexity of the project. A simple corporate website can have a very different timeline from an e-commerce platform, customer portal or web application. We'll define the scope, milestones and expected timeline before development begins.",
    keywords: [
      "long",
      "time",
      "timeline",
      "duration",
      "weeks",
      "months",
      "fast",
    ],
  },
  {
    id: "cost",
    question: "How much does a website cost?",
    answer:
      "There isn't one fixed price because every project is different. The cost depends on factors such as the number of pages, design requirements, functionality, integrations and ongoing support. We'll first understand what you need and then provide a clear proposal based on the actual scope.",
    keywords: [
      "cost",
      "price",
      "pricing",
      "budget",
      "charge",
      "fee",
      "quote",
      "investment",
    ],
  },
  {
    id: "after-contact",
    question: "What happens after I contact Rooster?",
    answer:
      "First, we'll learn about your business and what you're trying to achieve. Then we'll discuss the requirements, recommend an approach and define the scope, timeline and investment. If we're a good fit, we'll start turning the idea into something real.",
    keywords: ["happens", "next", "onboard", "first", "after", "enquiry"],
  },
  {
    id: "who",
    question: "Who is Rooster?",
    answer:
      "We're Rooster — a digital studio that builds with purpose, not just pixels.\n\nWe focus on:\n• Website design & high-performance development\n• Smart AI integration\n• Digital growth\n\nAI can build a website. Rooster builds the right one.",
    keywords: ["who", "rooster", "studio", "company", "about", "team"],
  },
  {
    id: "services",
    question: "What services does Rooster offer?",
    answer:
      "Here's what we can help you with:\n\nAvailable now\n• Website Design & Development — custom UI, build, CMS, hosting and maintenance\n• Rooster Marketing — including Social Media Marketing, SEO, paid ads, CRO, email, and copy\n\nComing soon\n• AI Chatbots\n• Digital Products\n\nAsk about Social Media Marketing if you want the detailed breakdown — or tell me which service you need.",
    keywords: [
      "services",
      "service",
      "offer",
      "offers",
      "provide",
      "provides",
      "offering",
      "marketing",
      "chatbot",
      "cms",
      "hosting",
      "products",
    ],
  },
  {
    id: "contact-email",
    question: "How can I contact Rooster?",
    answer: COMPANY_CONTACT,
    keywords: ["email", "contact", "reach", "whatsapp", "phone", "talk", "quote"],
  },
  {
    id: "hours",
    question: "What are your working hours?",
    answer: COMPANY_HOURS,
    keywords: ["hours", "monday", "friday", "ist", "time", "open"],
  },
  {
    id: "meetings",
    question: "Do you meet clients in person or is everything online?",
    answer: COMPANY_MEETINGS,
    keywords: ["meet", "person", "online", "visit", "onsite", "face"],
  },
  {
    id: "reply-time",
    question: "How fast do you reply to messages?",
    answer: COMPANY_REPLY,
    keywords: ["reply", "respond", "response", "fast", "promptly"],
  },
  {
    id: "get-started",
    question: "What do I need to get started?",
    answer: COMPANY_START,
    keywords: ["started", "start", "begin", "need"],
  },
  {
    id: "social-platforms",
    question: "Which social media platforms do you manage?",
    answer: "We manage all major platforms except TikTok and LinkedIn. We cover Facebook, Instagram, and more.",
    keywords: ["platform", "platforms", "tiktok", "linkedin", "instagram", "facebook"],
  },
  {
    id: "social-branding",
    question: "Do you design brand logos or brand identity guidelines?",
    answer:
      "Not yet. We don't do logos or brand guidelines right now — you'll need to provide your own brand assets.",
    keywords: ["logo", "branding", "identity", "guidelines", "brand"],
  },
  {
    id: "social-languages",
    question: "What languages do you create content in?",
    answer:
      "We create content and provide community management in both Sinhala and English.",
    keywords: ["language", "languages", "sinhala", "english"],
  },
  {
    id: "process",
    question: "What is your website process?",
    answer:
      "We keep it simple:\n\n1. Discover — goals, audience, constraints\n2. Design — structure, UI, motion\n3. Build — fast, clean, easy to extend\n4. Launch — QA, performance, a sharp handoff\n\nWe'll set the scope and timeline before we start building.",
    keywords: ["process", "discover", "design", "build", "launch", "steps"],
  },
  {
    id: "marketing-process",
    question: "How does your marketing service work?",
    answer: LEA_TOPICS[0].howItWorks,
    keywords: ["marketing", "ads", "seo", "campaign", "growth", "service"],
  },
];

const STOP = new Set([
  "the",
  "and",
  "for",
  "you",
  "your",
  "our",
  "are",
  "is",
  "do",
  "does",
  "can",
  "will",
  "what",
  "how",
  "when",
  "with",
  "from",
  "that",
  "this",
  "have",
  "need",
  "just",
  "not",
  "but",
  "about",
  "please",
  "could",
  "would",
  "website",
  "site",
  "web",
]);

const SYNONYMS: Record<string, string> = {
  ig: "instagram",
  fb: "facebook",
  tt: "tiktok",
  wat: "what",
  wht: "what",
  pricey: "price",
  costing: "cost",
  pkg: "package",
  pkgs: "packages",
  insta: "instagram",
  smm: "social media",
  socials: "social media",
};

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function expandSynonyms(value: string) {
  return normalize(value)
    .split(" ")
    .map((word) => SYNONYMS[word] || word)
    .join(" ");
}

function words(value: string) {
  return expandSynonyms(value)
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOP.has(word));
}

function editDistance(a: string, b: string) {
  if (Math.abs(a.length - b.length) > 2) return 99;
  const rows = a.length + 1;
  const cols = b.length + 1;
  const grid = Array.from({ length: rows }, () => Array<number>(cols).fill(0));
  for (let i = 0; i < rows; i += 1) grid[i][0] = i;
  for (let j = 0; j < cols; j += 1) grid[0][j] = j;
  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      grid[i][j] = Math.min(
        grid[i - 1][j] + 1,
        grid[i][j - 1] + 1,
        grid[i - 1][j - 1] + cost,
      );
    }
  }
  return grid[a.length][b.length];
}

function fuzzyIncludes(hay: string, needle: string) {
  if (!needle) return false;
  if (hay.includes(needle)) return true;
  if (needle.length < 5) return false;
  return hay.split(" ").some((word) => {
    if (word.length < 5) return false;
    return editDistance(word, needle) <= 2;
  });
}

function textHasAlias(value: string, aliases: string[]) {
  const hay = expandSynonyms(value);
  const hayWords = hay.split(" ");
  return aliases.some((alias) => {
    const needle = expandSynonyms(alias);
    const parts = needle.split(" ");
    if (parts.length === 1) {
      return hayWords.some(
        (word) => word === needle || fuzzyIncludes(word, needle),
      );
    }
    if (hay.includes(needle)) return true;
    return parts.every((part) =>
      hayWords.some((word) => word === part || fuzzyIncludes(word, part)),
    );
  });
}

function findItem(id: string) {
  return ROOSTER_KNOWLEDGE.find((item) => item.id === id)!;
}

function isGreetingOnly(value: string) {
  return /^(hi|hello|hey|yo|good\s+(morning|afternoon|evening))[.!\s]*$/i.test(
    value,
  );
}

function startsWithGreeting(value: string) {
  return /^(hi|hello|hey|yo|good\s+(morning|afternoon|evening))\b/i.test(value);
}

function isNewTopicQuery(value: string) {
  return /\b(rooster|website|web design|who are|what is rooster|services|chatbot|digital product)\b/i.test(
    value,
  );
}

function isPricingQuery(query: string) {
  return /\b(how much|price|pricing|cost|budget|fee|charge)\b/i.test(query);
}

const GENERIC_SECTION_IDS = new Set([
  "overview",
  "options",
  "process",
  "pricing",
]);

const SOCIAL_DETAIL_ALIASES = [
  "tiktok",
  "linkedin",
  "platform",
  "platforms",
  "paid ads",
  "boosting",
  "boost",
  "advertising",
  "google ads",
  "logo",
  "branding",
  "brand identity",
  "brand guidelines",
  "sinhala",
  "english",
  "language",
  "option a",
  "option b",
  "two options",
  "service options",
  "how many posts",
  "how many flyers",
  "limit",
  "videography",
  "recording",
  "filming",
  "two weeks",
  "in advance",
  "captions",
  "hashtags",
  "revision",
  "revisions",
  "performing",
  "google drive",
  "analytics",
  "reports",
];

function isSocialDetailQuestion(value: string) {
  return textHasAlias(value, SOCIAL_DETAIL_ALIASES);
}

function isHowItWorksQuery(query: string) {
  if (isPricingQuery(query)) return false;
  if (isCompanyQuestion(query)) return false;
  if (isSocialDetailQuestion(query)) return false;
  return /\bhow\b/i.test(query) && /\b(work|works|working)\b/i.test(query);
}

function isCompanyQuestion(value: string) {
  if (isSocialDetailQuestion(value)) return false;
  const company = LEA_TOPICS.find((topic) => topic.id === "company");
  if (!company) return false;
  return (
    textHasAlias(value, company.aliases) ||
    company.sections.some((section) => textHasAlias(value, section.aliases))
  );
}

function detectTopic(value: string, recent: string[]): KnowledgeTopic | null {
  const company = LEA_TOPICS.find((topic) => topic.id === "company") ?? null;
  if (company && isCompanyQuestion(value)) {
    return company;
  }

  for (const topic of LEA_TOPICS) {
    if (topic.id === "company") continue;
    if (textHasAlias(value, topic.aliases)) return topic;
    const specificHit = topic.sections.some(
      (section) =>
        !GENERIC_SECTION_IDS.has(section.id) &&
        textHasAlias(value, section.aliases),
    );
    if (specificHit) return topic;
  }
  if (isNewTopicQuery(value)) return null;
  for (const previous of recent) {
    for (const topic of LEA_TOPICS) {
      if (topic.id === "company") continue;
      if (textHasAlias(previous, topic.aliases)) return topic;
    }
  }
  return null;
}

function sectionScore(query: string, section: TopicSection) {
  const hay = expandSynonyms(query);
  let score = 0;
  for (const alias of section.aliases) {
    if (!textHasAlias(query, [alias])) continue;
    const needle = expandSynonyms(alias);
    const wordsInAlias = needle.split(" ").length;
    score += 2 + wordsInAlias * 3;
    if (hay.includes(needle)) score += 6;
  }
  if (!GENERIC_SECTION_IDS.has(section.id) && score > 0) score += 4;
  return score;
}

function matchTopicAnswer(query: string, recent: string[]) {
  const topic = detectTopic(query, recent);
  if (!topic) return null;

  let best = { score: 0, answer: "" };
  for (const section of topic.sections) {
    const score = sectionScore(query, section);
    if (score > best.score) best = { score, answer: section.answer };
  }

  if (best.score >= 4) return best.answer;
  if (isHowItWorksQuery(query)) return topic.howItWorks;

  return topic.id === "social-media"
    ? "Ask me about platforms, the two options, process, or a quote — I’ll keep it specific."
    : topic.howItWorks;
}

function matchIntent(value: string, recent: string[]) {
  if (detectTopic(value, recent)) return null;

  if (
    /\b(services?|offer|offers|offering|provide|provides)\b/i.test(value) &&
    !/\bsocial\b/i.test(value)
  ) {
    return findItem("services");
  }
  if (/\b(contact|email|whatsapp|reach|call|get a quote|quote)\b/i.test(value)) {
    return findItem("contact-email");
  }
  if (/\b(working hours|office hours|business hours)\b/i.test(value)) {
    return findItem("hours");
  }
  if (/\b(cost|price|pricing|budget|charge)\b/i.test(value)) {
    return findItem("cost");
  }
  if (/\b(process|steps|how you work|how do you work)\b/i.test(value)) {
    if (detectTopic("", recent)) return null;
    return findItem("process");
  }
  if (/\b(who are you|about rooster|what is rooster)\b/i.test(value)) {
    return findItem("who");
  }
  return null;
}

export function answerAsRooster(query: string, recentUserMessages: string[] = []) {
  const trimmed = query.trim();
  if (!trimmed) {
    return "Ask me anything about Rooster — services, process, pricing, or how we work.";
  }

  if (isGreetingOnly(trimmed)) {
    return "Hey — I'm Lea. Ask about marketing, websites, hours, or a quote.";
  }

  if (/^(thanks|thank you|cheers)[.!\s]*$/i.test(trimmed)) {
    return "You're welcome. WhatsApp +94 70 665 5547 if you want a quote.";
  }

  const prefix = startsWithGreeting(trimmed) ? "Hey! " : "";
  const recent = recentUserMessages.slice(-4);

  const topicAnswer = matchTopicAnswer(trimmed, recent);
  if (topicAnswer) {
    return `${prefix}${topicAnswer}`;
  }

  const intent = matchIntent(trimmed, recent);
  if (intent) {
    return `${prefix}${intent.answer}`;
  }

  const queryWords = words(trimmed);
  const queryNorm = expandSynonyms(trimmed);

  let best = { score: 0, item: ROOSTER_KNOWLEDGE[0] };

  for (const item of ROOSTER_KNOWLEDGE) {
    const hay = expandSynonyms(
      `${item.question} ${item.answer} ${item.keywords.join(" ")}`,
    );
    let score = 0;

    if (queryNorm.includes(normalize(item.question).slice(0, 28))) score += 10;

    for (const word of queryWords) {
      if (item.keywords.includes(word)) score += 4;
      if (hay.includes(word) || fuzzyIncludes(hay, word)) score += 2;
    }

    if (score > best.score) best = { score, item };
  }

  if (best.score < 4) {
    return `${prefix}I don't have that yet. Try platforms, options, process, or a quote — or WhatsApp +94 70 665 5547.`;
  }

  return `${prefix}${best.item.answer}`;
}

export const QUICK_PROMPTS = [
  "How does social media management work?",
  "What is the social media process?",
  "How much does a website cost?",
  "What happens after I contact you?",
] as const;
