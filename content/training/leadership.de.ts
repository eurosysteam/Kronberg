import type { TrainingTaskContent } from "@/content/training/types";

export const leadershipDe: TrainingTaskContent = {
  area: "leadership",
  label: "Trainingsaufgabe",
  title: "Aufgabenstellung: Führung mit KI",
  intro: "KI-Bot-Prototypen für Sales, Marketing & Service",
  breadcrumb: {
    training: "Training",
    current: "Führung mit KI",
  },
  sections: [
    {
      title: "Ihre Rolle",
      body: [
        "Sie übernehmen die Rolle von Sabine Vogel, Head of Sales, Marketing & Service bei der Kronberg Fördertechnik Gruppe. Sie verantworten einen großen, kundennahen Bereich, der Vertrieb, Key Account Management, Marketing, Service und After Sales umfasst. Neben Umsatz, Kundenbeziehungen und Marktposition gehören auch Führung, Zusammenarbeit, Kompetenzentwicklung und eine realistische Ressourcensteuerung zu Ihren Aufgaben.",
      ],
    },
    {
      title: "Drei mögliche Führungsherausforderungen",
    },
    {
      title: "1. Konflikt zwischen zwei Mitarbeitenden",
      body: [
        "Ausgangslage: Oliver Brandt, Leiter Key Account Management, und Jana Weber, Leiterin Service DACH, arbeiten an einem strategisch wichtigen Großkunden. Oliver erwartet schnelle und flexible Zusagen, um die Kundenbeziehung nicht zu gefährden. Jana kritisiert hingegen, dass der Vertrieb wiederholt Leistungen und Reaktionszeiten in Aussicht stellt, die der Service mit den vorhandenen Kapazitäten kaum einhalten kann. Nach einer angespannten Abstimmung ist der Konflikt per E-Mail offen eskaliert. Beide fühlen sich von der jeweils anderen Seite nicht ernst genommen. Erste Teammitglieder beziehen Position, und in fünf Tagen findet ein gemeinsamer Kundentermin statt. Sabine Vogel muss zunächst Einzelgespräche und anschließend ein gemeinsames Klärungsgespräch führen.",
      ],
      callout: "Entwickeln Sie einen Chatbot zur Vorbereitung und Simulation der Gespräche.",
    },
    {
      title: "2. KI-Strategie und Befähigung der Abteilung",
      body: [
        "Ausgangslage: Im Bereich Sales, Marketing & Service wird KI bereits punktuell eingesetzt, etwa für Textentwürfe, Gesprächsvorbereitung, Zusammenfassungen oder Recherche. Die Nutzung ist jedoch uneinheitlich: Manche Mitarbeitende experimentieren intensiv, andere sind skeptisch oder unsicher. Es fehlen gemeinsame Prioritäten, klare Regeln für den Umgang mit Kunden- und Unternehmensdaten, Qualitätsstandards, Verantwortlichkeiten sowie ein abgestimmtes Lernangebot. Sabine Vogel soll deshalb eine KI-Strategie für ihre gesamte Abteilung entwickeln und zugleich sicherstellen, dass unterschiedliche Mitarbeitendengruppen die benötigten Kompetenzen aufbauen.",
      ],
      callout: "Entwickeln Sie einen KI-Strategie- und Lernberater.",
    },
    {
      title: "3. Akuter Ressourcen- und Qualifikationsengpass",
      body: [
        "Ausgangslage: In den kommenden sechs Wochen treffen mehrere prioritätskritische Anforderungen aufeinander: die finale Angebots- und Verhandlungsphase für einen strategischen Großkunden, eine internationale Ausschreibung mit engem Abgabetermin, eine Serviceeskalation bei einem Bestandskunden sowie die Vorbereitung eines wichtigen Produkt- und Messeauftritts. Für die fachlich anspruchsvollen Aufgaben wären zwölf erfahrene Mitarbeitende aus Key Account Management, Sales Engineering, Service und Marketing erforderlich. Tatsächlich stehen nur sieben vollständig zur Verfügung: Zwei Personen sind krankheitsbedingt ausgefallen, eine neue Kollegin befindet sich noch im Onboarding, und zwei Schlüsselpersonen sind bereits in anderen Kundenprojekten gebunden. Bei den verbleibenden Leistungsträgern nehmen Überstunden und kurzfristige Prioritätswechsel zu. Engineering und Service können nur punktuell unterstützen. Externe Unterstützung wäre frühestens in zehn Tagen verfügbar und würde zusätzliche Kosten sowie Einarbeitungsaufwand verursachen. Sabine Vogel muss die kurzfristige Liefer- und Kundenfähigkeit sichern, ohne Überlastung und Qualitätsrisiken weiter zu verschärfen.",
      ],
      callout: "Entwickeln Sie einen Ressourcen-, Priorisierungs- und Entscheidungsberater.",
    },
    {
      title: "Ihre Aufgabe",
      body: [
        "Sie übernehmen die Rolle von **Sabine Vogel, Head of Sales, Marketing & Service bei der Kronberg Fördertechnik Gruppe**.",
        "Sie verantworten einen großen, kundennahen Bereich, der Vertrieb, Key Account Management, Marketing, Service und After Sales umfasst. Neben Umsatz, Kundenbeziehungen und Marktposition gehören auch Führung, Zusammenarbeit, Kompetenzentwicklung und eine realistische Ressourcensteuerung zu Ihren Aufgaben.",
        "Wählen Sie **eine der drei beschriebenen Führungsherausforderungen**.",
        "Entwickeln Sie einen KI-Bot-Prototypen, der **Sabine Vogel persönlich bei der Bearbeitung dieser Führungsaufgabe unterstützt**.",
        "**Phase 1 – Führungsunterstützung konzipieren**",
        "Arbeiten Sie zunächst ohne Laptop und halten Sie Ihre Überlegungen auf einem Plakat fest.",
        "**Leitfragen**",
        "**Bei welcher konkreten Führungsaufgabe soll der Bot Sabine Vogel unterstützen?** Welche Situation, Entscheidung oder Gesprächsvorbereitung steht im Mittelpunkt?",
        "**Welche Unterstützung soll der Bot leisten – und was darf er nicht übernehmen?** Legen Sie Funktionen, Rolle, Grenzen und notwendige Schutzregeln fest.",
        "**Wie soll Sabine Vogel mit dem Bot arbeiten?** Skizzieren Sie den Ablauf vom Einstieg über Rückfragen und Analyse bis zu einer konkreten Handlungsempfehlung oder Gesprächsvorbereitung.",
        "**Ergebnis:** Ein klares Anwendungsszenario aus Sicht von Sabine Vogel.",
        "**Phase 2 – Bot entwickeln**",
        "Idee mit der KI prüfen und konkretisieren.",
        "Prompt mit Rolle, Aufgaben, Ablauf und Grenzen erstellen.",
        "**Phase 3 – Testen und verbessern**",
        "Passende Wissensbasis zusammenstellen.",
        "Ersten funktionsfähigen Prototypen bauen.",
        "Realistische Führungssituationen durchspielen.",
        "Unvollständige Informationen und schwierige Fälle testen.",
        "Qualität, Nutzen und Grenzen prüfen.",
        "Prompt und Wissensbasis iterativ verbessern.",
        "**Abschluss – Live-Demonstration**",
        "Bereiten Sie eine **5- bis 7-minütige Live-Demo** vor.",
      ],
    },
  ],
  support: {
    title: "Unterstützung",
    text: "Der KI-Berater der Kronberg Fördertechnik Gruppe kann Sie mit Informationen zum Unternehmen sowie durch themenspezifische Beratung unterstützen.",
    linkLabel: "Kronberg KI öffnen",
    href: "https://chatgpt.com/g/g-6a4b982c1e7481919fa43865a21cf944-berater-kronberg",
  },
  reset: "Ausloggen",
};
