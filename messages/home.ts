export type Locale = "de" | "en";

export const homeMessages = {
  de: {
    nav: {
      home: "Startseite",
      company: "Unternehmen",
      solutions: "Lösungen",
      industries: "Branchen",
      service: "Service",
      careers: "Karriere",
      contact: "Kontakt",
      training: "Training",
      menu: "Menü öffnen",
      close: "Menü schließen",
    },
    hero: {
      title: "Effiziente Materialflüsse.\nZuverlässige Anlagen.\nDigitale Zukunft.",
      subtitle:
        "Kronberg entwickelt, produziert, installiert und wartet integrierte Förder-, Sortier- und Automatisierungslösungen für effiziente und zuverlässige Materialflüsse.",
      primary: "Unsere Lösungen",
      secondary: "Unternehmen entdecken",
    },
    stats: [
      "ca. 2.500 Mitarbeitende",
      "Ursprung 1968",
      "5+ europäische Standorte",
    ],
    previews: {
      eyebrow: "Kompetenzfelder",
      title: "Technik, Branchenverständnis und Service aus einer Hand",
      intro:
        "Kronberg verbindet robuste Fördertechnik, Automatisierung und digitale Transparenz zu integrierten Anlagenlösungen.",
      items: [
        {
          title: "Lösungen",
          text: "Förderbänder, Rollenbahnen, Sortiermodule, Hubstationen, Sensorik, Steuerungstechnik und digitale Monitoring-Lösungen.",
          href: "/loesungen",
        },
        {
          title: "Branchen",
          text: "Materialflusslösungen für Industrie, Logistik, Handel, E-Commerce, Maschinenbau, Automotive, Pharma und Lebensmittel.",
          href: "/branchen",
        },
        {
          title: "Service",
          text: "Wartung, Ersatzteile, Vor-Ort-Service, Remote Support, Serviceverträge und Inbetriebnahmeunterstützung.",
          href: "/service",
        },
      ],
    },
    imagePlaceholder: "Bildplatzhalter",
    footer: {
      claim: "Integrierte Förder-, Sortier- und Automatisierungslösungen.",
      fictional: "Fiktive Unternehmensdarstellung für Trainingszwecke.",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
  },
  en: {
    nav: {
      home: "Home",
      company: "Company",
      solutions: "Solutions",
      industries: "Industries",
      service: "Service",
      careers: "Careers",
      contact: "Contact",
      training: "Training",
      menu: "Open menu",
      close: "Close menu",
    },
    hero: {
      title: "Efficient Material Flows.\nReliable Systems.\nA Digital Future.",
      subtitle:
        "Kronberg develops, manufactures, installs and maintains integrated conveyor, sorting and automation solutions for efficient and reliable material flows.",
      primary: "Explore our solutions",
      secondary: "Discover the company",
    },
    stats: [
      "Approx. 2,500 employees",
      "Founded in 1968",
      "5+ European service and operational locations",
    ],
    previews: {
      eyebrow: "Fields of expertise",
      title: "Technology, industry focus and service from one partner",
      intro:
        "Kronberg combines robust conveyor technology, automation and digital transparency into integrated system solutions.",
      items: [
        {
          title: "Solutions",
          text: "Conveyors, roller conveyors, sorting modules, lifting stations, sensor technology, control systems and digital monitoring solutions.",
          href: "/loesungen",
        },
        {
          title: "Industries",
          text: "Material flow solutions for industry, logistics, retail, e-commerce, mechanical engineering, automotive, pharma and food.",
          href: "/branchen",
        },
        {
          title: "Service",
          text: "Maintenance, spare parts, on-site service, remote support, service contracts and commissioning support.",
          href: "/service",
        },
      ],
    },
    imagePlaceholder: "Image placeholder",
    footer: {
      claim: "Integrated conveyor, sorting and automation solutions.",
      fictional: "Fictional company presentation for training purposes.",
      imprint: "Imprint",
      privacy: "Privacy",
    },
  },
} as const;
