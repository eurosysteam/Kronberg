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
        "You take on the role of a consultant from the **Strategy & Corporate Development** area at Kronberg Fördertechnik Gruppe.",
        "You support **Sabine Vogel**, **Head of Sales, Marketing & Technical Service**, in exploring how AI can be used meaningfully in everyday work. Her area includes DACH sales, international sales, key account management, marketing as well as technical service & after sales. The situation report describes several operational and strategic challenges.",
      ],
    },
    {
      title: "Key problem areas in the sales team",
    },
    {
      title: "1. Incomplete customer inquiries and limited technical knowledge",
      body: [
        "Customers often describe their requirements only in general terms, for example with phrases such as “more throughput”, “flexible sorting”, “short delivery time” or “dashboard”. At the same time, many sales employees do not have an in-depth technical background. This makes it difficult to identify missing information early, classify technical requirements reliably, roughly assess feasibility and involve Engineering, IT or Operations in good time. This makes it harder to prepare reliable offers and leads to additional questions and coordination loops.",
      ],
    },
    {
      title: "2. Argumentation against lower-cost providers",
      body: [
        "Kronberg frequently competes with lower-cost providers. A uniform sales pitch is not always sufficient because customers evaluate added value, risk, quality and collaboration differently. If the reasoning is not adapted to the culture, mindset and decision-making logic of the respective counterpart, Kronberg's higher prices can be difficult to understand.",
      ],
    },
    {
      title: "3. Challenges in onboarding new sales employees",
      body: [
        "New colleagues must familiarize themselves simultaneously with products, industries, basic technical terminology, quotation logic, internal processes and important points of contact. Since experienced employees have little time for structured knowledge transfer, competence development often takes longer than desired.",
      ],
    },
    {
      title: "Your task",
      body: [
        "Your task is to select one specific challenge and develop an AI bot prototype for it.",
        "The bot should solve a clearly defined problem or noticeably reduce its impact. It does not have to cover all challenges at the same time.",
        "**Phase 1 – Design the application**",
        "First work without a laptop and record your thoughts on a poster.",
        "**Guiding questions**",
        "**Which specific problem or recurring workflow should be improved?** Describe the situation, the roles involved and the current process.",
        "**Which tasks should the bot take on, and which should it explicitly not take on?** Define functions, boundaries, required information and responsibilities.",
        "**How should the bot be used in concrete terms?** Sketch the process from the start through follow-up questions and processing to the desired result.",
        "**Result:** A clearly described application scenario with target group, functions, boundaries and process.",
        "**Phase 2 – Develop the concept with AI**",
        "Review and refine the idea with AI.",
        "Define the role, tasks, rules and boundaries precisely.",
        "Define the conversation or work process.",
        "Develop a first prompt draft.",
        "Identify open questions and risks.",
        "**Result:** A robust bot concept and a first prompt draft.",
        "**Phase 3 – Build and test the prototype**",
        "Compile a suitable knowledge base.",
        "Create a functional bot prototype.",
        "Test realistic tasks and inputs.",
        "Try out incomplete information and error cases.",
        "Iteratively improve the prompt and knowledge base.",
        "Prepare the demo.",
        "**Result:** A tested AI bot prototype with a suitable knowledge base.",
        "**Conclusion – Live demonstration**",
        "Prepare a **5- to 7-minute live demo**.",
      ],
    },
  ],
  support: {
    title: "Support",
    text: "The AI advisor of the Kronberg Group can support you with information about the company and topic-specific advice.",
    linkLabel: "Open Kronberg AI",
    href: "https://chatgpt.com/g/g-6a4b982c1e7481919fa43865a21cf944-berater-kronberg",
  },
  reset: "Log out",
};
