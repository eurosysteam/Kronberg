import type { TrainingTaskContent } from "@/content/training/types";

export const leadershipEn: TrainingTaskContent = {
  area: "leadership",
  label: "Training task",
  title: "Task: Leadership with AI",
  intro: "AI bot prototypes for Sales, Marketing & Service",
  source:
    "documents/Aufgabenstellung_Fuehrungskraefte_KI_Bots_Kronberg_sprachlich_ueberarbeitet.docx",
  breadcrumb: {
    training: "Training",
    current: "Leadership with AI",
  },
  sections: [
    {
      title: "Your role",
      body: [
        "You take on the role of Sabine Vogel, Head of Sales, Marketing & Service at Kronberg Fördertechnik Gruppe. You are responsible for a large, customer-facing area that includes sales, key account management, marketing, service and after sales. In addition to revenue, customer relationships and market position, your responsibilities also include leadership, collaboration, competence development and realistic resource management.",
      ],
    },
    {
      title: "Three possible leadership challenges",
    },
    {
      title: "1. Conflict between two employees",
      body: [
        "Initial situation: Oliver Brandt, Head of Key Account Management, and Jana Weber, Head of Service DACH, are working on a strategically important major customer. Oliver expects fast and flexible commitments so as not to endanger the customer relationship. Jana, by contrast, criticizes the fact that Sales has repeatedly held out the prospect of services and response times that Service can hardly meet with the available capacity. After a tense coordination meeting, the conflict has openly escalated by email. Both feel that the other side does not take them seriously. Initial team members are taking sides, and a joint customer appointment will take place in five days. Sabine Vogel must first hold one-to-one conversations and then a joint clarification meeting.",
      ],
      callout: "Develop a chatbot to prepare and simulate the conversations.",
    },
    {
      title: "2. AI strategy and enablement of the department",
      body: [
        "Initial situation: In Sales, Marketing & Service, AI is already being used selectively, for example for drafting texts, preparing conversations, summaries or research. However, use is inconsistent: some employees experiment intensively, while others are skeptical or uncertain. Shared priorities, clear rules for handling customer and company data, quality standards, responsibilities and a coordinated learning offering are missing. Sabine Vogel is therefore expected to develop an AI strategy for her entire department and at the same time ensure that different employee groups build the required skills.",
      ],
      callout: "Develop an AI strategy and learning advisor.",
    },
    {
      title: "3. Acute resource and qualification bottleneck",
      body: [
        "Initial situation: Over the next six weeks, several priority-critical requirements coincide: the final offer and negotiation phase for a strategic major customer, an international tender with a tight submission deadline, a service escalation at an existing customer and preparation for an important product and trade fair appearance. The technically demanding tasks would require twelve experienced employees from key account management, sales engineering, service and marketing. In fact, only seven are fully available: two people are absent due to illness, one new colleague is still in onboarding and two key people are already tied up in other customer projects. Among the remaining high performers, overtime and short-term priority changes are increasing. Engineering and Service can only provide selective support. External support would be available no earlier than in ten days and would involve additional costs and onboarding effort. Sabine Vogel must secure short-term delivery and customer capability without further increasing overload and quality risks.",
      ],
      callout: "Develop a resource, prioritization and decision advisor.",
    },
    {
      title: "Your task",
      body: [
        "From Sabine Vogel's perspective, develop an AI bot prototype for one of the three leadership challenges described. The bot should not solve all problems at once. Choose a clear focus and show how the solution specifically improves leadership work.",
        "Prepare a 5–7-minute presentation including a short demonstration of your AI bot prototype.",
        "The demonstration should make clear which questions the bot asks, how it deals with incomplete information and what concrete added value it provides to Sabine Vogel as a leader.",
      ],
    },
  ],
  support: {
    title: "Support",
    text: "The AI advisor of Kronberg Fördertechnik Gruppe can support you with information about the company and with topic-specific advice.",
    linkLabel: "Open Kronberg AI",
    href: "https://chatgpt.com/g/g-6a4b982c1e7481919fa43865a21cf944-berater-kronberg",
  },
  reset: "Reset training access",
};
