import type { TrainingTaskContent } from "@/content/training/types";

export const leadershipEn: TrainingTaskContent = {
  area: "leadership",
  label: "Training task",
  title: "Task: Leadership with AI",
  intro: "Developing an AI bot prototype for a specific leadership challenge",
  breadcrumb: {
    training: "Training",
    current: "Leadership with AI",
  },
  sections: [
    {
      title: "1. Your role and the shared assignment",
      body: [
        "You take on the role of **Sabine Vogel, Head of Sales, Marketing & Technical Service at Kronberg Fördertechnik Gruppe**. You are responsible for a customer-facing division with around 570 employees. It includes DACH Sales, International Sales, Key Account Management, Sales Engineering, Marketing, and Technical Service & After Sales.",
      ],
      callout:
        "Choose one of the three leadership challenges and develop a functional AI bot prototype that advises Sabine in her decision-making without making the decision itself.",
    },
    {
      title: "2. Three possible leadership challenges",
    },
    {
      title: "2.1 Case 1 – Conflict between two managers",
      body: [
        "**Initial situation:**",
        "Oliver Brandt, Head of Key Account Management, and Jana Weber, Head of Service DACH, are in conflict over service commitments for Project Atlas. The conflict has escalated by email, the teams are beginning to take sides, and a joint customer meeting will take place in five days.",
        "Sabine must prepare a viable solution for the customer and the organization while also stabilizing collaboration between the two managers.",
        "The AI prototype should advise her as she develops a solution and support her preparation, including by simulating conversations with the managers involved in the conflict.",
      ],
    },
    {
      title: "2.2 Case 2 – AI strategy and departmental enablement",
      body: [
        "**Initial situation:**",
        "AI use within the division has so far been inconsistent. Survey data, process metrics, documented incidents, platform options, implementation and capacity constraints, and differing stakeholder positions are available. At the same time, employees are uncertain about possible job cuts and changes to tasks and roles.",
        "Sabine must develop a divisional framework within the quarter and evaluate two pilots within six months.",
        "The AI prototype should advise her as she develops the strategy, including by structuring and contextualizing the available information.",
      ],
    },
    {
      title: "2.3 Case 3 – Acute resource and prioritization bottleneck",
      body: [
        "**Initial situation:**",
        "Four critical workstreams compete for limited specialist capacity and involve specific work packages, dependencies, workload limits, and external support options.",
        "Sabine must define a robust allocation for the first ten working days within 24 hours.",
        "The AI prototype should support her in developing and evaluating possible solutions to the resource bottleneck.",
      ],
    },
    {
      title: "Your task",
      body: [
        "Choose one of the three leadership challenges and develop a functional AI bot prototype.",
        "The bot should support Sabine in addressing the challenge: it structures information, encourages reflection, makes options comparable, and prepares conversations or decisions. **It does not solve the leadership challenge itself and does not make decisions.**",
        "The solution is developed from Sabine Vogel's perspective. She remains the client and the accountable decision-maker. Other roles and adjacent departments may be included in the workflow where appropriate.",
        "**Phase 1 – Develop the support and decision logic**",
        "Begin without a laptop. Develop the working method for your bot on a poster. Do not solve the leadership case or write a prompt yet.",
        "**Guiding questions**",
        "**How should the bot clarify and structure the situation?** Define how it distinguishes facts, assessments, assumptions, interests, and open questions.",
        "**How may the bot provide advice?** Determine how it helps Sabine develop and compare her own options and presents conditions and risks transparently without prescribing a solution.",
        "**Where must people make the decision?** Identify the decisions, approvals, and responsibilities that remain with Sabine Vogel or other accountable people.",
        "**Result:** A visual method design with a clear sequence, required inputs, bot follow-up questions, and human decision points.",
        "**Phase 2 – Refine the idea with AI**",
        "Use the meta-skill or a regular AI chat to critically review and develop your analog method design.",
        "Review open assumptions, information categories, and decision points.",
        "Add missing human decisions, approvals, and boundaries.",
        "Clarify which data the bot actually needs and which test cases should be included.",
        "Document every change you choose to make on the poster. Do not generate a finished case solution or complete strategy during this phase.",
        "**Result:** A reviewed support and decision logic that serves as the foundation for the bot.",
        "**Phase 3 – Develop the prompt, knowledge base, and prototype**",
        "Write the system prompt and select a suitable knowledge base.",
        "Create a functional bot prototype.",
        "Run at least three tests: a realistic normal case, a case with missing or contradictory information, and a request for a premature complete solution.",
        "Check whether the bot marks uncertainty, requires human decisions, and respects its boundaries.",
        "Iteratively improve the prompt and knowledge base and prepare the demonstration.",
        "**Result:** A tested AI bot prototype with a suitable knowledge base.",
      ],
    },
    {
      title: "Conclusion – Live demonstration",
      body: ["Prepare a **5- to 7-minute live demo**."],
    },
  ],
  support: {
    title: "Support",
    text: "The AI advisor of Kronberg Fördertechnik Gruppe can support you with information about the company and with topic-specific advice.",
    linkLabel: "Open Kronberg AI",
    href: "https://chatgpt.com/g/g-6a4b982c1e7481919fa43865a21cf944-berater-kronberg",
    downloads: [
      {
        label: "General knowledge base (PDF)",
        href: "/downloads/Kronberg_Wissensbasis_Allgemein.pdf",
      },
      {
        label: "Leadership knowledge base (PDF)",
        href: "/downloads/Kronberg_Wissensbasis_Fuehrung.pdf",
      },
    ],
  },
  reset: "Change area",
};
