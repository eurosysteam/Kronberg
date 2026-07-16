import type { TrainingTaskContent } from "@/content/training/types";

export const intelligenceEn: TrainingTaskContent = {
  area: "intelligence",
  label: "Training task",
  title: "Key problem areas in the sales team",
  intro: "AI bot prototype for day-to-day sales work",
  breadcrumb: {
    training: "Training",
    current: "Sales team",
  },
  sections: [
    {
      title: "Your role",
      body: [
        "You take on the role of Sabine Vogel, Head of Sales, Marketing & Service at Kronberg Fördertechnik Gruppe.",
        "From your perspective, the sales team is facing several simultaneous challenges. You would like to examine whether a targeted AI solution can help make day-to-day sales work more structured, faster and more reliable.",
      ],
    },
    {
      title: "Three key problem areas in the sales team",
    },
    {
      title: "1. Incomplete customer inquiries and limited technical knowledge",
      body: [
        "Customers often describe their requirements only in general terms, for example with phrases such as “more throughput”, “flexible sorting”, “short delivery time” or “dashboard”. At the same time, many sales employees do not have an in-depth technical background. This makes it difficult to identify missing information early, classify technical requirements reliably, roughly assess feasibility and involve Engineering, IT or Operations in good time. This makes it harder to prepare reliable offers and leads to additional questions and coordination loops.",
      ],
    },
    {
      title: "2. Cultural differences with international customers",
      body: [
        "With international customers, communication styles, negotiation logic, expectations regarding commitment, pace, directness and relationship management differ. These differences can lead to misunderstandings and make professional preparation for customer conversations and negotiations more difficult.",
      ],
    },
    {
      title: "3. Challenges in onboarding new sales employees",
      body: [
        "New colleagues have to familiarize themselves at the same time with products, industries, basic technical terminology, offer logic, internal processes and important points of contact. Since experienced employees have little time for structured knowledge transfer, competence development often takes longer than desired.",
      ],
    },
    {
      title: "Your task",
      body: [
        "Develop an AI bot prototype for the sales team from the perspective of Sabine Vogel.",
        "The bot should solve one or more problems from the situation report described, or at least noticeably ease them. It should not cover all challenges at the same time.",
      ],
      callout: "Develop an AI bot prototype for the sales team.",
    },
    {
      title: "Requirements for the AI solution",
      body: [
        "The AI solution should primarily be designed from the perspective of sales leadership. However, it may also support adjacent areas such as Engineering, Operations, Finance, Service or IT & Digital Solutions if this makes sense for the selected problem.",
        "Prepare a 5–7-minute presentation including a short demonstration of your AI bot prototype.",
      ],
    },
  ],
  support: {
    title: "Support",
    text: "The AI advisor of the Kronberg Group can support you with information about the company and with topic-specific advice.",
    linkLabel: "Open Kronberg AI",
    href: "https://chatgpt.com/g/g-6a4b982c1e7481919fa43865a21cf944-berater-kronberg",
  },
  reset: "Reset training access",
};
