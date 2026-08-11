import type { Locale } from "@/messages/home";

export const trainingOverviewContent = {
  de: {
    eyebrow: "Training",
    title: "Trainingsbereiche",
    intro: "Wählen Sie den für Ihren Workshop vorgesehenen Aufgabenbereich.",
    leadership: "Führungsaufgaben",
    intelligence: "Fachaufgaben",
    open: "Bereich öffnen",
  },
  en: {
    eyebrow: "Training",
    title: "Training areas",
    intro: "Select the task area intended for your workshop.",
    leadership: "Leadership tasks",
    intelligence: "Specialist tasks",
    open: "Open area",
  },
} satisfies Record<Locale, object>;
