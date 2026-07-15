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
      title: "Unvollständige Kundenanfragen und begrenztes technisches Wissen im Sales-Team",
      body: [
        "Kunden beschreiben ihre Anforderungen häufig nur allgemein, zum Beispiel mit Begriffen wie „mehr Durchsatz“, „flexible Sortierung“, „kurze Lieferzeit“ oder „Dashboard“. Gleichzeitig verfügen viele Sales-Mitarbeitende nicht über einen vertieften technischen Hintergrund. Dadurch fällt es schwer, fehlende Informationen früh zu erkennen, technische Anforderungen sicher einzuordnen, die Machbarkeit grob einzuschätzen und rechtzeitig Engineering, IT oder Operations einzubinden. Das erschwert die Erstellung belastbarer Angebote und führt zu zusätzlichen Rückfragen und Abstimmungsschleifen.",
      ],
    },
    {
      title: "Kulturelle Unterschiede bei internationalen Kunden",
      body: [
        "Bei internationalen Kunden unterscheiden sich Kommunikationsstile, Verhandlungslogiken, Erwartungen an Verbindlichkeit, Tempo, Direktheit und Beziehungspflege. Diese Unterschiede können zu Missverständnissen führen und erschweren die professionelle Vorbereitung von Kundengesprächen und Verhandlungen.",
      ],
    },
    {
      title: "Herausforderungen im Onboarding neuer Sales-Mitarbeitender",
      body: [
        "Neue Kolleginnen und Kollegen müssen sich gleichzeitig in Produkte, Branchen, technische Grundbegriffe, Angebotslogik, interne Prozesse und wichtige Ansprechpartner einarbeiten. Da erfahrene Mitarbeitende wenig Zeit für strukturierte Wissensweitergabe haben, dauert der Kompetenzaufbau oft länger als gewünscht.",
      ],
    },
    {
      title: "Ihre Aufgabe",
      body: [
        "Sie übernehmen die Rolle von Sabine Vogel, Head of Sales, Marketing & Service bei der Kronberg Fördertechnik Gruppe.",
        "Aus Ihrer Sicht steht das Sales-Team vor mehreren gleichzeitigen Herausforderungen. Sie möchten prüfen, ob eine gezielte KI-Lösung helfen kann, den Sales-Alltag strukturierter, schneller und sicherer zu machen.",
      ],
      callout: "Entwickeln Sie einen KI-Bot-Prototypen für das Sales-Team.",
    },
    {
      title: "Anforderungen an die KI-Lösung",
      body: [
        "Der Bot soll eines oder mehrere Probleme aus dem beschriebenen Lagebericht lösen oder zumindest spürbar entschärfen. Er soll nicht alle Herausforderungen gleichzeitig abdecken.",
        "Die KI-Lösung soll in erster Linie aus Sicht der Sales-Leitung gedacht werden. Sie darf aber auch angrenzende Bereiche wie Engineering, Operations, Finance, Service oder IT & Digital Solutions unterstützen, wenn dies für das gewählte Problem sinnvoll ist.",
        "Bereiten Sie eine 5–7-minütige Präsentation inklusive kurzer Demonstration Ihres KI-Bot-Prototyps vor.",
      ],
    },
  ],
  support: {
    title: "Unterstützung",
    text: "Der KI-Berater der Kronberg Gruppe kann Sie mit Informationen über das Unternehmen und durch themenspezifische Beratung unterstützen.",
    linkLabel: "Kronberg KI öffnen",
    href: "https://chatgpt.com/g/g-6a4b982c1e7481919fa43865a21cf944-berater-kronberg",
  },
  reset: "Trainingszugang zurücksetzen",
};
