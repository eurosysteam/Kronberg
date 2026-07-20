import type { Locale } from "@/messages/home";

export type JobPosting = {
  title: string;
  department: string;
  location: string;
  employment: string;
  level: string;
  text: string;
  tags: string[];
};

export const phaseThreeContent = {
  de: {
    careers: {
      eyebrow: "Karriere",
      title: "Fiktive Stellenanzeigen bei Kronberg",
      intro:
        "Diese Übersicht zeigt beispielhafte Rollen in unterschiedlichen Bereichen der Kronberg Fördertechnik Gruppe. Es gibt keine Detailseiten, keine Gehaltsangaben und keine Bewerbungsfristen.",
      labels: {
        department: "Bereich",
        location: "Standort",
        employment: "Beschäftigungsart",
        level: "Erfahrungslevel",
        fictional: "Fiktive Stellenanzeige",
      },
      jobs: [
        {
          title: "Entwicklungsingenieur Fördertechnik",
          department: "Engineering & Product Development",
          location: "Hauptstandort Süddeutschland",
          employment: "Vollzeit",
          level: "Berufserfahren",
          text: "Entwicklung und Auslegung von Komponenten für robuste Förder-, Sortier- und Automatisierungslösungen.",
          tags: ["Fördertechnik", "Konstruktion", "Anlagenlogik"],
        },
        {
          title: "Mechatroniker Montage",
          department: "Produktion & Montage",
          location: "Produktionswerk Tschechien",
          employment: "Vollzeit",
          level: "Fachkraft",
          text: "Montage und Vorbereitung von Anlagenbestandteilen für innerbetriebliche Materialflüsse.",
          tags: ["Montage", "Mechatronik", "Qualität"],
        },
        {
          title: "Technischer Einkäufer",
          department: "Einkauf & Supply Chain",
          location: "Hybrid am Hauptstandort",
          employment: "Vollzeit",
          level: "Berufserfahren",
          text: "Unterstützung der Materialverfügbarkeit für Kundenaufträge, Produktion und Montage.",
          tags: ["Einkauf", "Supply Chain", "Abstimmung"],
        },
        {
          title: "Qualitätsingenieur",
          department: "Qualität & Prozessmanagement",
          location: "Hauptstandort Süddeutschland",
          employment: "Vollzeit",
          level: "Berufserfahren",
          text: "Begleitung von Qualitäts- und Prozessfragen rund um technische Anlagenlösungen.",
          tags: ["Qualität", "Prozesse", "Analyse"],
        },
        {
          title: "Sales Engineer",
          department: "Sales",
          location: "Service Schweiz",
          employment: "Vollzeit",
          level: "Berufserfahren",
          text: "Technische Klärung von Kundenanforderungen an Förder-, Sortier- und Automatisierungslösungen.",
          tags: ["Sales", "Kundenanforderungen", "Technik"],
        },
        {
          title: "Servicetechniker",
          department: "Service",
          location: "Europaweit mit Reisetätigkeit",
          employment: "Vollzeit",
          level: "Fachkraft",
          text: "Betreuung von Anlagen im Betrieb sowie Unterstützung bei Wartung und Inbetriebnahme.",
          tags: ["Service", "Wartung", "Inbetriebnahme"],
        },
        {
          title: "Marketing Manager Industrial Solutions",
          department: "Marketing",
          location: "Hybrid am Hauptstandort",
          employment: "Vollzeit",
          level: "Berufserfahren",
          text: "Aufbereitung technischer Themen für Industrie-, Logistik- und Servicekontexte.",
          tags: ["Marketing", "Industrie", "Content"],
        },
        {
          title: "Data Analyst",
          department: "IT & Digital Solutions",
          location: "Service Niederlande",
          employment: "Vollzeit",
          level: "Berufserfahren",
          text: "Analyse digitaler Anlageninformationen zur besseren Transparenz im Betrieb.",
          tags: ["Daten", "Monitoring", "Digitalisierung"],
        },
        {
          title: "Controller",
          department: "Finance & Administration",
          location: "Hauptstandort Süddeutschland",
          employment: "Vollzeit",
          level: "Berufserfahren",
          text: "Unterstützung wirtschaftlicher Auswertungen für Bereiche, Projekte und Investitionsentscheidungen.",
          tags: ["Controlling", "Reporting", "Planung"],
        },
        {
          title: "Projektmanager Transformation",
          department: "Strategy & Transformation",
          location: "Service Frankreich",
          employment: "Vollzeit",
          level: "Berufserfahren",
          text: "Strukturierung und Begleitung bereichsübergreifender Veränderungs- und Umsetzungsprojekte.",
          tags: ["Transformation", "Projektmanagement", "Umsetzung"],
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Kontaktformular",
      intro:
        "Dieses Formular simuliert zu Demonstrationszwecken eine serverseitige Übermittlung. Es versendet keine E-Mail, speichert keine Daten dauerhaft und überträgt keine Daten an externe Dienste.",
      fields: {
        firstName: "Vorname",
        lastName: "Nachname",
        company: "Unternehmen",
        email: "E-Mail",
        subject: "Betreff",
        message: "Nachricht",
        privacy: "Ich bestätige, dass dieses Demo-Formular meine Eingaben nur zur Simulation verarbeitet und danach verwirft.",
      },
      errors: {
        firstName: "Bitte geben Sie Ihren Vornamen ein.",
        lastName: "Bitte geben Sie Ihren Nachnamen ein.",
        company: "Bitte geben Sie Ihr Unternehmen ein.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        subject: "Bitte geben Sie einen Betreff ein.",
        message: "Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.",
        privacy: "Bitte bestätigen Sie den Datenschutzhinweis.",
        generic: "Die Eingaben konnten nicht verarbeitet werden. Bitte prüfen Sie das Formular.",
      },
      submit: "Nachricht senden",
      sending: "Wird gesendet",
      success:
        "Vielen Dank. Die Demo-Übermittlung wurde erfolgreich simuliert; die eingegebenen Daten wurden nicht gespeichert.",
    },
    imprint: {
      eyebrow: "Impressum",
      title: "Demo-Platzhalter für ein Impressum",
      intro:
        "Diese Seite ist ein Platzhalter für Trainingszwecke und enthält keine rechtlich verbindlichen Anbieterangaben.",
      noticeTitle: "Keine rechtlichen Angaben",
      notice:
        "Für diese fiktive Unternehmensdarstellung werden keine Adresse, keine Kontaktperson, keine Telefonnummer und keine E-Mail-Adresse erfunden.",
      items: [
        "Fiktive Unternehmensdarstellung für Trainingszwecke.",
        "Rechtlich verbindliche Angaben müssen vor einer echten Veröffentlichung durch geeignete Verantwortliche ergänzt und geprüft werden.",
      ],
    },
    privacy: {
      eyebrow: "Datenschutz",
      title: "Demo-Platzhalter für Datenschutzinformationen",
      intro:
        "Diese Seite ist ein Platzhalter für Trainingszwecke und ersetzt keine rechtliche Prüfung.",
      noticeTitle: "Demo-Hinweis",
      notice:
        "Die öffentliche Website verwendet keine Analyse- oder Trackingdienste und lädt keine externen Formulardienste.",
      items: [
        "Das Kontaktformular simuliert eine serverseitige Verarbeitung und verwirft die eingegebenen Daten danach.",
        "Für eine echte Veröffentlichung müssen Datenschutzinformationen passend zum tatsächlichen Betrieb ergänzt und geprüft werden.",
      ],
    },
  },
  en: {
    careers: {
      eyebrow: "Careers",
      title: "Fictional job postings at Kronberg",
      intro:
        "This overview shows example roles across different areas of Kronberg Fördertechnik Gruppe. There are no detail pages, salary details or application deadlines.",
      labels: {
        department: "Department",
        location: "Location",
        employment: "Employment type",
        level: "Experience level",
        fictional: "Fictional job posting",
      },
      jobs: [
        {
          title: "Development Engineer Conveyor Technology",
          department: "Engineering & Product Development",
          location: "Main site in southern Germany",
          employment: "Full-time",
          level: "Experienced professional",
          text: "Development and design of components for robust conveyor, sorting and automation solutions.",
          tags: ["Conveyor technology", "Engineering", "System logic"],
        },
        {
          title: "Mechatronics Technician Assembly",
          department: "Production & Assembly",
          location: "Production plant in Czechia",
          employment: "Full-time",
          level: "Skilled professional",
          text: "Assembly and preparation of system components for internal material flows.",
          tags: ["Assembly", "Mechatronics", "Quality"],
        },
        {
          title: "Technical Buyer",
          department: "Purchasing & Supply Chain",
          location: "Hybrid at the main site",
          employment: "Full-time",
          level: "Experienced professional",
          text: "Support the availability of materials for customer orders, production and assembly.",
          tags: ["Purchasing", "Supply chain", "Coordination"],
        },
        {
          title: "Quality Engineer",
          department: "Quality & Process Management",
          location: "Main site in southern Germany",
          employment: "Full-time",
          level: "Experienced professional",
          text: "Support quality and process topics related to technical system solutions.",
          tags: ["Quality", "Processes", "Analysis"],
        },
        {
          title: "Sales Engineer",
          department: "Sales",
          location: "Service location in Switzerland",
          employment: "Full-time",
          level: "Experienced professional",
          text: "Technical clarification of customer requirements for conveyor, sorting and automation solutions.",
          tags: ["Sales", "Customer requirements", "Technology"],
        },
        {
          title: "Service Technician",
          department: "Service",
          location: "Across Europe with travel",
          employment: "Full-time",
          level: "Skilled professional",
          text: "Support systems in operation as well as maintenance and commissioning activities.",
          tags: ["Service", "Maintenance", "Commissioning"],
        },
        {
          title: "Marketing Manager Industrial Solutions",
          department: "Marketing",
          location: "Hybrid at the main site",
          employment: "Full-time",
          level: "Experienced professional",
          text: "Prepare technical topics for industry, logistics and service contexts.",
          tags: ["Marketing", "Industry", "Content"],
        },
        {
          title: "Data Analyst",
          department: "IT & Digital Solutions",
          location: "Service location in the Netherlands",
          employment: "Full-time",
          level: "Experienced professional",
          text: "Analyze digital system information to improve transparency during operation.",
          tags: ["Data", "Monitoring", "Digitalization"],
        },
        {
          title: "Controller",
          department: "Finance & Administration",
          location: "Main site in southern Germany",
          employment: "Full-time",
          level: "Experienced professional",
          text: "Support financial analysis for departments, projects and investment decisions.",
          tags: ["Controlling", "Reporting", "Planning"],
        },
        {
          title: "Transformation Project Manager",
          department: "Strategy & Transformation",
          location: "Service location in France",
          employment: "Full-time",
          level: "Experienced professional",
          text: "Structure and support cross-functional change and implementation projects.",
          tags: ["Transformation", "Project management", "Execution"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact form",
      intro:
        "This form simulates server-side submission as a demo. It does not send email, permanently store data or transfer data to external services.",
      fields: {
        firstName: "First name",
        lastName: "Last name",
        company: "Company",
        email: "Email",
        subject: "Subject",
        message: "Message",
        privacy: "I confirm that this demo form processes my input only for simulation and then discards it.",
      },
      errors: {
        firstName: "Please enter your first name.",
        lastName: "Please enter your last name.",
        company: "Please enter your company.",
        email: "Please enter a valid email address.",
        subject: "Please enter a subject.",
        message: "Please enter a message with at least 10 characters.",
        privacy: "Please confirm the privacy notice.",
        generic: "The input could not be processed. Please check the form.",
      },
      submit: "Send message",
      sending: "Sending",
      success:
        "Thank you. The demo submission was simulated successfully; the entered data was not stored.",
    },
    imprint: {
      eyebrow: "Imprint",
      title: "Demo placeholder for imprint information",
      intro:
        "This page is a placeholder for training purposes and contains no legally binding provider information.",
      noticeTitle: "No legal information",
      notice:
        "For this fictional company presentation, no address, contact person, telephone number or email address is invented.",
      items: [
        "Fictional company presentation for training purposes.",
        "Legally binding information must be added and reviewed by suitable responsible parties before any real publication.",
      ],
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Demo placeholder for privacy information",
      intro:
        "This page is a placeholder for training purposes and does not replace legal review.",
      noticeTitle: "Demo notice",
      notice:
        "The public website uses no analytics or tracking services and loads no external form services.",
      items: [
        "The contact form simulates server-side processing and discards entered data afterwards.",
        "Before a real publication, privacy information must be added and reviewed according to the actual operation of the website.",
      ],
    },
  },
} satisfies Record<Locale, object>;
