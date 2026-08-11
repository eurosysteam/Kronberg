import type { TrainingTaskContent } from "@/content/training/types";

export const intelligenceDe: TrainingTaskContent = {
  area: "intelligence",
  label: "Trainingsaufgabe",
  title: "Zentrale Problemstellungen im Sales-Team",
  intro: "KI-Bot-Prototyp für den Sales-Alltag",
  breadcrumb: {
    training: "Training",
    current: "Sales-Team",
  },
  sections: [
    {
      title: "Ihre Rolle",
      body: [
        "Sie übernehmen die Rolle eines Beraters aus dem Bereich **Strategy & Corporate Development** der Kronberg Fördertechnik Gruppe.",
        "Sie unterstützen **Sabine Vogel**, **Head of Sales, Marketing & Technischer Service**, bei der Frage, wie KI sinnvoll im Arbeitsalltag eingesetzt werden kann. Ihr Bereich umfasst Vertrieb DACH, International Sales, Key Account Management, Marketing sowie Technischen Service & After Sales. Im beschriebenen Lagebericht finden sich mehrere operative und strategische Herausforderungen.",
      ],
    },
    {
      title: "Zentrale Problemstellungen im Sales-Team",
    },
    {
      title: "1. Unvollständige Kundenanfragen und begrenztes technisches Wissen",
      body: [
        "Kunden beschreiben ihre Anforderungen häufig nur allgemein, zum Beispiel mit Begriffen wie „mehr Durchsatz“, „flexible Sortierung“, „kurze Lieferzeit“ oder „Dashboard“. Gleichzeitig verfügen viele Sales-Mitarbeitende nicht über einen vertieften technischen Hintergrund. Dadurch fällt es schwer, fehlende Informationen früh zu erkennen, technische Anforderungen sicher einzuordnen, die Machbarkeit grob einzuschätzen und rechtzeitig Engineering, IT oder Operations einzubinden. Das erschwert die Erstellung belastbarer Angebote und führt zu zusätzlichen Rückfragen und Abstimmungsschleifen.",
      ],
    },
    {
      title: "2. Argumentation gegenüber günstigeren Anbietern",
      body: [
        "Kronberg steht häufig im Wettbewerb mit günstigeren Anbietern. Dabei reicht eine einheitliche Verkaufsargumentation nicht immer aus, weil Kunden Mehrwert, Risiko, Qualität und Zusammenarbeit unterschiedlich bewerten. Wird die Argumentation nicht an die Kultur, Denkweise und Entscheidungslogik des jeweiligen Gegenübers angepasst, können die höheren Preise von Kronberg schwer nachvollziehbar wirken.",
      ],
    },
    {
      title: "3. Herausforderungen im Onboarding neuer Sales-Mitarbeitender",
      body: [
        "Neue Kolleginnen und Kollegen müssen sich gleichzeitig in Produkte, Branchen, technische Grundbegriffe, Angebotslogik, interne Prozesse und wichtige Ansprechpartner einarbeiten. Da erfahrene Mitarbeitende wenig Zeit für strukturierte Wissensweitergabe haben, dauert der Kompetenzaufbau oft länger als gewünscht.",
      ],
    },
    {
      title: "Ihre Aufgabe",
      body: [
        "Ihre Aufgabe ist es, eine konkrete Herausforderung auszuwählen und dafür einen KI-Bot-Prototypen zu entwickeln.",
        "Der Bot soll ein klar abgegrenztes Problem lösen oder spürbar entschärfen. Er muss nicht alle Herausforderungen gleichzeitig abdecken.",
        "**Phase 1 – Anwendung konzipieren**",
        "Arbeiten Sie zunächst ohne Laptop und halten Sie Ihre Überlegungen auf einem Plakat fest.",
        "**Leitfragen**",
        "**Welches konkrete Problem oder welcher wiederkehrende Arbeitsablauf soll verbessert werden?** Beschreiben Sie die Situation, die betroffenen Rollen und den bisherigen Ablauf.",
        "**Welche Aufgaben soll der Bot übernehmen – und welche ausdrücklich nicht?** Legen Sie Funktionen, Grenzen, benötigte Informationen und Verantwortlichkeiten fest.",
        "**Wie soll die Nutzung des Bots konkret ablaufen?** Skizzieren Sie den Prozess vom Start über Rückfragen und Bearbeitung bis zum gewünschten Ergebnis.",
        "**Ergebnis:** Ein klar beschriebenes Anwendungsszenario mit Zielgruppe, Funktionen, Grenzen und Ablauf.",
        "**Phase 2 – Konzept mit KI ausarbeiten**",
        "Idee mit der KI prüfen und konkretisieren.",
        "Rolle, Aufgaben, Regeln und Grenzen präzisieren.",
        "Gesprächs- oder Arbeitsablauf festlegen.",
        "Ersten Promptentwurf entwickeln.",
        "Offene Fragen und Risiken identifizieren.",
        "**Ergebnis:** Ein belastbares Bot-Konzept und ein erster Promptentwurf.",
        "**Phase 3 – Prototyp bauen und testen**",
        "Passende Wissensbasis zusammenstellen.",
        "Funktionsfähigen Bot-Prototypen erstellen.",
        "Realistische Aufgaben und Eingaben testen.",
        "Unvollständige Informationen und Fehlerfälle ausprobieren.",
        "Prompt und Wissensbasis iterativ verbessern.",
        "Demo vorbereiten.",
        "**Ergebnis:** Ein getesteter KI-Bot-Prototyp mit passender Wissensbasis.",
        "**Abschluss – Live-Demonstration**",
        "Bereiten Sie eine **5- bis 7-minütige Live-Demo** vor.",
      ],
    },
  ],
  support: {
    title: "Unterstützung",
    text: "Der KI-Berater der Kronberg Fördertechnik Gruppe kann Sie mit Informationen über das Unternehmen und durch themenspezifische Beratung unterstützen.",
    linkLabel: "Kronberg KI öffnen",
    href: "https://chatgpt.com/g/g-6a4b982c1e7481919fa43865a21cf944-berater-kronberg",
    downloads: [
      {
        label: "Wissensbasis Allgemein (PDF)",
        href: "/downloads/Kronberg_Wissensbasis_Allgemein.pdf",
      },
      {
        label: "Wissensbasis Fachaufgaben (PDF)",
        href: "/downloads/Kronberg_Wissensbasis_Fachaufgaben.pdf",
      },
    ],
  },
  reset: "Bereich wechseln",
};
