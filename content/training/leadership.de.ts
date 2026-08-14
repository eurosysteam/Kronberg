import type { TrainingTaskContent } from "@/content/training/types";

export const leadershipDe: TrainingTaskContent = {
  area: "leadership",
  label: "Trainingsaufgabe",
  title: "Aufgabenstellung: Führung mit KI",
  intro: "Entwicklung eines KI-Bot-Prototypen für eine konkrete Führungsherausforderung",
  breadcrumb: {
    training: "Training",
    current: "Führung mit KI",
  },
  sections: [
    {
      title: "1. Ihre Rolle und der gemeinsame Arbeitsauftrag",
      body: [
        "Sie übernehmen die Rolle von **Sabine Vogel, Head of Sales, Marketing & Technischer Service bei der Kronberg Fördertechnik Gruppe**. Sie verantworten einen kundennahen Bereich mit rund 570 Mitarbeitenden. Dazu gehören Vertrieb DACH, International Sales, Key Account Management, Sales Engineering, Marketing sowie Technischer Service & After Sales.",
      ],
      callout:
        "Wählen Sie eine der drei Führungsherausforderungen und entwickeln Sie dafür einen funktionsfähigen KI-Bot-Prototypen, der Sabine bei ihrer Entscheidungsfindung berät, ohne die Entscheidung selbstständig zu treffen. Priorität hat die Entwicklung eines guten Beraters. Die Lösung der Führungsherausforderung dient lediglich als Anwendungsgrundlage und steht nicht im Mittelpunkt der Aufgabe. Weitere Informationen zu den drei Fällen finden Sie in der Wissensbasis Führung.",
    },
    {
      title: "2. Drei mögliche Führungsherausforderungen",
    },
    {
      title: "Fall 1 – Konflikt zwischen zwei Führungskräften",
      body: [
        "**Ausgangslage:**",
        "Oliver Brandt, Leiter Key Account Management, und Jana Weber, Leiterin Service DACH, streiten über Servicezusagen für Projekt Atlas. Der Konflikt ist per E-Mail eskaliert, die Teams beginnen sich zu positionieren und in fünf Tagen findet ein gemeinsamer Kundentermin statt.",
        "Sabine muss eine tragfähige Lösung für den Kunden und die Organisation vorbereiten und gleichzeitig die Zusammenarbeit der beiden Führungskräfte stabilisieren.",
        "Der KI-Prototyp soll sie bei der Entwicklung einer Lösung beraten und sie bei der Vorbereitung unterstützen, indem er unter anderem Gespräche mit den am Konflikt beteiligten Führungskräften simuliert.",
        "**Überblick über die vorliegenden Informationen:**",
        "Für Fall 1 liegen Informationen zum strategisch wichtigen Bestandskunden, zum bestehenden Servicevertrag und zu den zusätzlich geforderten Leistungen während der achtwöchigen Hochlaufphase vor. Dokumentiert sind außerdem die von Oliver Brandt gegenüber dem Kunden genannten, intern noch nicht freigegebenen Leistungswerte sowie die von Jana Weber benannten Kapazitäts-, Kosten-, Ersatzteil- und Sicherheitsfragen. Die Wissensbasis enthält Angaben zum bisherigen Eskalationsverlauf, zu den Interessen und Positionen der Beteiligten, zur verfügbaren Servicekapazität, zu wirtschaftlichen und vertraglichen Rahmenbedingungen sowie zu den Erwartungen des Kunden. Mehrere Punkte sind noch nicht abschließend geprüft. Sabine muss bis morgen festlegen, welche Leistungswerte im Kundentermin vorläufig besprochen werden dürfen; der Termin findet in fünf Tagen statt.",
      ],
    },
    {
      title: "Fall 2 – KI-Strategie und Befähigung der Abteilung",
      body: [
        "**Ausgangslage:**",
        "Im Bereich wird KI bislang uneinheitlich genutzt. Befragungsdaten, Prozesskennzahlen, dokumentierte Vorfälle, Plattformoptionen, Umsetzungs- und Kapazitätsgrenzen sowie unterschiedliche Stakeholderpositionen liegen vor. Gleichzeitig bestehen unter den Mitarbeitenden Unsicherheiten über mögliche Stellenkürzungen sowie Veränderungen von Aufgaben und Rollen.",
        "Sabine muss innerhalb des Quartals einen Bereichsrahmen entwickeln und innerhalb von sechs Monaten zwei Piloten bewerten.",
        "Der KI-Prototyp soll sie bei der Ausarbeitung der Strategie beraten, unter anderem durch die strukturierte Aufbereitung und Einordnung der vorhandenen Informationen.",
        "**Überblick über die vorliegenden Informationen:**",
        "Für Fall 2 liegen Informationen zur bisherigen KI-Nutzung in den verschiedenen Teilbereichen sowie Ergebnisse einer Pulsbefragung zu Nutzungserfahrung, Unsicherheiten und Lernbedarfen vor. Dokumentiert sind außerdem Ausgangswerte ausgewählter Arbeitsprozesse, Vorfälle aus der bisherigen KI-Nutzung und die vorhandene Wissens- und Systemlandschaft. Die Wissensbasis enthält vorläufige Regeln für unterschiedliche Datenarten sowie detaillierte Angaben zu drei möglichen technischen Plattformen, ihren Funktionen, zulässigen Daten, Grenzen und Einführungsvoraussetzungen. Darüber hinaus liegen Informationen zu verfügbaren Umsetzungskapazitäten, den Positionen wichtiger Stakeholder und den Sorgen der Mitarbeitenden hinsichtlich möglicher Stellenkürzungen und Veränderungen ihrer Aufgaben vor. Noch nicht entschieden sind unter anderem die Auswahl der beiden Pilotanwendungsfälle, die geeignete technische Hauptumgebung, die erforderlichen Datenquellen, Lernangebote, Erfolgskriterien und Verantwortlichkeiten. Innerhalb des laufenden Quartals soll ein abgestimmter Bereichsrahmen vorliegen; innerhalb von sechs Monaten sollen zwei Piloten ausgewertet sein.",
      ],
    },
    {
      title: "Fall 3 – Akuter Ressourcen- und Priorisierungsengpass",
      body: [
        "**Ausgangslage:**",
        "Vier kritische Arbeitsstränge treffen auf begrenzte Fachkapazitäten, konkrete Arbeitspakete, Abhängigkeiten, Belastungsgrenzen und externe Unterstützungsmöglichkeiten.",
        "Sabine muss innerhalb von 24 Stunden eine belastbare Zuordnung für die ersten zehn Arbeitstage festlegen.",
        "Der KI-Prototyp soll sie dabei unterstützen, mögliche Lösungen für den Ressourcenengpass zu entwickeln und zu bewerten.",
        "**Überblick über die vorliegenden Informationen:**",
        "Für Fall 3 liegen Informationen zu vier kritischen Arbeitssträngen, ihren Terminen, ihrer wirtschaftlichen oder operativen Bedeutung und ihrem jeweiligen Personalbedarf vor. Dokumentiert sind außerdem die Kompetenzen und verfügbaren Kapazitäten der einsetzbaren Personen sowie bestehende Überstunden, Rollenbeschränkungen und Freigabeberechtigungen. Die Wissensbasis enthält konkrete Arbeitspakete und Aufwände, Abhängigkeiten zwischen den Aufgaben, nicht verhandelbare Termine und mögliche Spielräume beim Leistungsumfang. Darüber hinaus stehen Angaben zu internen und externen Unterstützungsmöglichkeiten, deren Verfügbarkeit, Kosten und Grenzen sowie zu einer vorläufigen Budgetreserve und verbindlichen Belastungsgrenzen zur Verfügung. Offene Unsicherheiten betreffen unter anderem die Dauer der Serviceeskalation, die punktuelle Verfügbarkeit notwendiger Prüfungen und mögliche zusätzliche Kundenanforderungen. Innerhalb von 24 Stunden wird eine Zuordnung für die ersten zehn Arbeitstage benötigt; über eine mögliche externe Beauftragung muss wegen der Vorlaufzeit spätestens an Tag 2 grundsätzlich entschieden werden.",
      ],
    },
    {
      title: "Ihre Aufgabe",
      body: [
        "Wählen Sie eine der drei Führungsherausforderungen und entwickeln Sie einen funktionsfähigen KI-Bot-Prototypen.",
        "Der Bot soll Sabine bei der Bearbeitung der Herausforderung unterstützen: Er strukturiert Informationen, fördert Reflexion, macht Handlungsoptionen vergleichbar und bereitet Gespräche oder Entscheidungen vor. **Er löst die Führungsherausforderung nicht selbst und übernimmt keine Entscheidung.**",
      ],
    },
    {
      title: "Bearbeiten Sie die Aufgabe in drei Phasen",
      body: [
        "**Phase 1 – Unterstützungs- und Entscheidungslogik entwickeln**",
        "Arbeiten Sie zunächst ohne Laptop. Entwickeln Sie auf einem Plakat die Arbeitsmethode Ihres Bots. Lösen Sie den Führungsfall noch nicht und erstellen Sie noch keinen Prompt.",
        "**Leitfragen**",
        "**Wie klärt und strukturiert der Bot die Situation?** Legen Sie fest, wie er Fakten, Einschätzungen, Annahmen, Interessen und offene Fragen unterscheidet.",
        "**Wie darf der Bot beraten?** Bestimmen Sie, wie er Sabine beim Entwickeln und Vergleichen eigener Optionen unterstützt und Bedingungen sowie Risiken nachvollziehbar darstellt, ohne eine Lösung vorzugeben.",
        "**Wo müssen Menschen entscheiden?** Benennen Sie Entscheidungen, Freigaben und Verantwortlichkeiten, die bei Sabine Vogel oder anderen zuständigen Personen bleiben.",
        "**Ergebnis:** Ein visueller Methodenentwurf mit klarer Schrittfolge, benötigten Eingaben, Rückfragen des Bots und menschlichen Entscheidungspunkten.",
        "**Phase 2 – Idee mit KI schärfen**",
        "Nutzen Sie den Meta-Skill oder einen normalen KI-Chat, um Ihren analogen Methodenentwurf kritisch zu prüfen und weiterzuentwickeln.",
        "Prüfen Sie offene Annahmen, Informationskategorien und Entscheidungspunkte.",
        "Ergänzen Sie fehlende menschliche Entscheidungen, Freigaben und Grenzen.",
        "Klären Sie, welche Daten der Bot tatsächlich benötigt und welche Testfälle vorgesehen werden sollten.",
        "Dokumentieren Sie jede von Ihnen ausgewählte Änderung am Plakat. Lassen Sie in dieser Phase noch keine fertige Falllösung oder vollständige Strategie erzeugen.",
        "**Ergebnis:** Eine geprüfte Unterstützungs- und Entscheidungslogik als Grundlage für den Bot.",
        "**Phase 3 – Prompt, Wissensbasis und Prototyp entwickeln**",
        "Formulieren Sie den System-Prompt und wählen Sie eine passende Wissensbasis aus.",
        "Erstellen Sie einen funktionsfähigen Bot-Prototypen.",
        "Testen Sie mindestens drei Fälle: einen realistischen Normalfall, fehlende oder widersprüchliche Informationen und die Aufforderung zu einer vorschnellen Komplettlösung.",
        "Prüfen Sie, ob der Bot Unsicherheit kennzeichnet, menschliche Entscheidungen einfordert und seine Grenzen einhält.",
        "Verbessern Sie Prompt und Wissensbasis iterativ und bereiten Sie die Demonstration vor.",
        "**Ergebnis:** Ein getesteter KI-Bot-Prototyp mit passender Wissensbasis.",
      ],
    },
    {
      title: "Abschluss – Live-Demonstration",
      body: ["Bereiten Sie eine **5- bis 7-minütige Live-Demo** vor."],
    },
  ],
  support: {
    title: "Unterstützung",
    text: "Der KI-Berater der Kronberg Fördertechnik Gruppe kann Sie mit Informationen zum Unternehmen sowie durch themenspezifische Beratung unterstützen.",
    linkLabel: "Kronberg KI öffnen",
    href: "https://chatgpt.com/g/g-6a4b982c1e7481919fa43865a21cf944-berater-kronberg",
    downloads: [
      {
        label: "Wissensbasis Allgemein (PDF)",
        href: "/downloads/Kronberg_Wissensbasis_Allgemein.pdf",
      },
      {
        label: "Wissensbasis Führung (PDF)",
        href: "/downloads/Kronberg_Wissensbasis_Fuehrung.pdf",
      },
    ],
  },
  reset: "Bereich wechseln",
};
