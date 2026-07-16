import {
  Activity,
  BarChart3,
  Boxes,
  Building2,
  CircuitBoard,
  Cog,
  Factory,
  Gauge,
  Handshake,
  Layers3,
  LineChart,
  MonitorCog,
  PackageCheck,
  PanelsTopLeft,
  ScanLine,
  Settings,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Truck,
  Users,
  Warehouse,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/messages/home";

export type CardItem = {
  title: string;
  text: string;
  icon: LucideIcon;
  meta?: string;
  tags?: string[];
};

export type TimelineItem = {
  year: string;
  title: string;
  text: string;
};

export type OrganizationItem = {
  title: string;
  count: string;
  text: string;
  emphasis?: boolean;
};

export const pageLabels = {
  de: {
    imagePlaceholder: "Bildplatzhalter",
    learnMore: "Mehr erfahren",
    company: "Unternehmen",
    history: "Historie",
    organization: "Organisation",
    solutions: "Lösungen",
    industries: "Branchen",
    service: "Service",
  },
  en: {
    imagePlaceholder: "Image placeholder",
    learnMore: "Learn more",
    company: "Company",
    history: "History",
    organization: "Organization",
    solutions: "Solutions",
    industries: "Industries",
    service: "Service",
  },
} as const;

export const phaseTwoContent = {
  de: {
    company: {
      eyebrow: "Unternehmen",
      title: "Kronberg verbindet robuste Fördertechnik mit integrierten Anlagenlösungen.",
      intro:
        "Die Kronberg Fördertechnik Gruppe ist ein fiktives, international tätiges Industrieunternehmen mit rund 2.500 Mitarbeitenden. Das Unternehmen entwickelt, produziert, installiert und wartet technische Lösungen für den innerbetrieblichen Waren- und Materialfluss.",
      body: [
        "Aus dem Maschinenbau heraus hat sich Kronberg zu einem integrierten Anlagenpartner entwickelt. Förderbänder, Rollenbahnen, Sortierstrecken, Hubstationen, Übergabemodule, Scanner- und Sensorikmodule sowie Steuerungstechnik werden zu Anlagen kombiniert, die auf konkrete Kundenabläufe abgestimmt sind.",
        "Neben der klassischen Fördertechnik gehören Service, Wartung, Ersatzteile und digitale Lösungen zum Leistungsbild. Dazu zählen Systeme, mit denen Kunden den Zustand ihrer Anlagen überwachen, Störungen erkennen oder Wartungen besser planen können.",
      ],
      strengthsTitle: "Vier Stärken",
      strengths: [
        {
          title: "Robust",
          text: "Technik für belastbare Materialflüsse in Produktions-, Lager- und Versandumgebungen.",
          icon: ShieldCheck,
        },
        {
          title: "Kundennah",
          text: "Lösungen werden an konkrete Abläufe, Anforderungen und Einsatzorte angepasst.",
          icon: Handshake,
        },
        {
          title: "Umsetzungsstark",
          text: "Maschinenbau, Anlagenbau, Automatisierung und Service greifen in der Umsetzung zusammen.",
          icon: Settings,
        },
        {
          title: "Zukunftsfähig",
          text: "Digitale Transparenz ergänzt klassische Fördertechnik und langfristige Anlagenbetreuung.",
          icon: LineChart,
        },
      ],
      links: [
        {
          title: "Historie",
          text: "Vom Werkstattbetrieb zum integrierten Anbieter für Fördertechnik, Automatisierung, Service und digitale Anlagenlösungen.",
          href: "/unternehmen/historie",
        },
        {
          title: "Organisationsstruktur",
          text: "Ein Überblick über Bereiche, Größenordnungen und die operative Struktur der Kronberg Fördertechnik Gruppe.",
          href: "/unternehmen/organisation",
        },
      ],
    },
    history: {
      eyebrow: "Historie",
      title: "Entwicklung in klaren Etappen",
      intro:
        "Die Timeline konzentriert sich ausschließlich auf die freigegebenen Stationen der Kronberg-Entwicklung.",
      items: [
        {
          year: "1968",
          title: "Gründung als Werkstatt",
          text: "Gründung als Werkstatt für Metallverarbeitung und Sondermaschinenbau in Süddeutschland.",
        },
        {
          year: "1976",
          title: "Erster größerer Fördertechnikauftrag",
          text: "Ein regionaler Automobilzulieferer beauftragt Kronberg mit einer robusten Förderstrecke.",
        },
        {
          year: "1996",
          title: "Umbenennung",
          text: "Die Firma wird in Kronberg Fördertechnik GmbH umbenannt.",
        },
        {
          year: "2008",
          title: "Werk in Tschechien",
          text: "Eröffnung eines zweiten Produktionswerks in Tschechien.",
        },
        {
          year: "2010er",
          title: "Digitale Lösungen und Service",
          text: "Aufbau digitaler Monitoring-Lösungen und Ausbau des Servicegeschäfts.",
        },
        {
          year: "Heute",
          title: "Integrierter Anbieter",
          text: "Kronberg ist integrierter Anbieter für Fördertechnik, Automatisierung, Service und digitale Anlagenlösungen.",
        },
      ],
    },
    organization: {
      eyebrow: "Organisation",
      title: "Organigramm",
      intro: "",
      ownerCircle: {
        title: "Gesellschafterkreis",
        text: "Der Gesellschafterkreis steht oberhalb der Geschäftsführung.",
      },
      management: {
        title: "Geschäftsführung",
        count: "ca. 8 Mitarbeitende",
        text: "Trägt die Gesamtverantwortung für die strategische, wirtschaftliche und organisatorische Entwicklung der Kronberg Fördertechnik Gruppe.",
      },
      departments: [
        {
          title: "Strategy & Transformation",
          count: "ca. 45 Mitarbeitende",
          text: "Übersetzt langfristige Ausrichtung in Programme, Projekte und Entscheidungsgrundlagen.",
        },
        {
          title: "Operations",
          count: "ca. 1.170 Mitarbeitende",
          text: "Bündelt Produktion, Montage, operative Supply Chain, Qualitäts- und Prozessmanagement sowie Werksleitungen.",
        },
        {
          title: "Engineering & Product Development",
          count: "ca. 340 Mitarbeitende",
          text: "Verantwortet technische Entwicklung, Produktlogik und Auslegung der Anlagenlösungen.",
        },
        {
          title: "Sales, Marketing & Service",
          count: "ca. 560 Mitarbeitende",
          text: "Verbindet Marktposition, Kundenanforderungen, Service und After Sales.",
        },
        {
          title: "Finance & Administration",
          count: "ca. 95 Mitarbeitende",
          text: "Prüft Investitionen, Risiken, wirtschaftliche Ziele und administrative Grundlagen.",
        },
        {
          title: "People & Transformation",
          count: "ca. 65 Mitarbeitende",
          text: "Begleitet Führung, Kultur, Organisation und Veränderung.",
        },
        {
          title: "IT & Digital Solutions",
          count: "ca. 160 Mitarbeitende",
          text: "Koordiniert Digitalisierung, Datenstrategie und sichere Technologieeinführung.",
        },
        {
          title: "Sonstige Fach- und Projektrollen",
          count: "ca. 57 Mitarbeitende",
          text: "Ergänzende Fach- und Projektrollen innerhalb der Unternehmensgruppe.",
        },
      ],
      council: {
        title: "Betriebsrat",
        count: "20 gewählte Mitglieder",
        text: "Der Betriebsrat wird separat dargestellt und nicht zusätzlich zur Gesamtzahl gezählt.",
      },
    },
    solutions: {
      eyebrow: "Lösungen",
      title: "Module für integrierte Materialflüsse",
      intro:
        "Kronberg entwickelt, produziert, installiert und wartet Komponenten und Anlagen für innerbetriebliche Waren- und Materialflüsse.",
      processTitle: "Experten für den ganzen Prozess",
      process: [
        {
          title: "Verstehen",
          text: "Kundenprozesse, Materialflüsse und technische Anforderungen präzise erfassen.",
        },
        {
          title: "Entwickeln",
          text: "Komponenten, Steuerungstechnik und Anlagenlogik passgenau auslegen.",
        },
        {
          title: "Umsetzen",
          text: "Produktion, Montage, Installation und Inbetriebnahme zuverlässig steuern.",
        },
        {
          title: "Betreiben",
          text: "Service, Wartung, Ersatzteile und digitale Transparenz im Betrieb sichern.",
        },
      ],
      items: [
        {
          title: "Förderbänder",
          text: "Fördertechnik für den kontinuierlichen Transport von Produkten, Paketen, Bauteilen, Behältern oder Werkstücken.",
          icon: PanelsTopLeft,
        },
        {
          title: "Rollenbahnen",
          text: "Modulare Transportstrecken für innerbetriebliche Waren- und Materialflüsse.",
          icon: Layers3,
        },
        {
          title: "Sortiermodule",
          text: "Module zur Verteilung, Ausschleusung und Sortierung innerhalb automatisierter Abläufe.",
          icon: SlidersHorizontal,
        },
        {
          title: "Scanner- und Sensorikmodule",
          text: "Technische Module zur Erfassung, Überwachung und Steuerung von Materialflüssen.",
          icon: ScanLine,
        },
        {
          title: "Hubstationen",
          text: "Anlagenmodule für Übergänge zwischen Ebenen und Prozessabschnitten.",
          icon: Activity,
        },
        {
          title: "Übergabemodule",
          text: "Module für definierte Übergaben zwischen Förderstrecken, Arbeitsbereichen und Anlagenabschnitten.",
          icon: PackageCheck,
        },
        {
          title: "Steuerungstechnik",
          text: "Steuerungslösungen für das Zusammenspiel von Komponenten, Sensorik und Anlagenlogik.",
          icon: CircuitBoard,
        },
        {
          title: "Digitale Monitoring-Lösungen",
          text: "Systeme zur Überwachung von Anlagenzuständen, Störungen und Wartungsplanung.",
          icon: MonitorCog,
        },
      ],
    },
    industries: {
      eyebrow: "Branchen",
      title: "Materialflusslösungen für industrielle und logistische Umgebungen",
      intro:
        "Die Kunden von Kronberg kommen vor allem aus Industrie, Logistik, Handel, E-Commerce, Maschinenbau, Automotive, Pharma und Lebensmittel.",
      useCasesTitle: "Typische Einsatzorte",
      useCases: [
        "Produktionshallen",
        "Lager",
        "Versandzentren",
        "Ersatzteillogistik",
        "automatische Kommissionierung",
      ],
      items: [
        {
          title: "Industrie",
          text: "Innerbetrieblicher Transport, Sortierung und Überwachung von Produkten, Bauteilen und Werkstücken.",
          icon: Factory,
        },
        {
          title: "Logistik",
          text: "Automatisierte Materialflüsse in Lager-, Umschlag- und Versandprozessen.",
          icon: Warehouse,
        },
        {
          title: "Handel",
          text: "Anlagen für Warenbewegungen zwischen Lager, Sortierung und Versand.",
          icon: ShoppingCart,
        },
        {
          title: "E-Commerce",
          text: "Förder-, Sortier- und Automatisierungslösungen für dynamische Versandumgebungen.",
          icon: Boxes,
        },
        {
          title: "Maschinenbau",
          text: "Materialflusslösungen für Bauteile, Werkstücke und abgestimmte Produktionsprozesse.",
          icon: Cog,
        },
        {
          title: "Automotive",
          text: "Förder- und Übergabelösungen für Bauteile und industrielle Fertigungsabläufe.",
          icon: Truck,
        },
        {
          title: "Pharma",
          text: "Technische Materialflüsse in regulierten Produktions-, Lager- und Versandumgebungen.",
          icon: Gauge,
        },
        {
          title: "Lebensmittel",
          text: "Transport- und Sortierlösungen für Warenflüsse in Produktion, Lager und Versand.",
          icon: PackageCheck,
        },
      ],
    },
    service: {
      eyebrow: "Service",
      title: "Langfristige Betreuung für Anlagen im Betrieb",
      intro:
        "Neben klassischer Fördertechnik bietet Kronberg Service, Wartung, Ersatzteile und digitale Lösungen für den Anlagenbetrieb an.",
      topicsTitle: "Zentrale Themen",
      topics: [
        {
          title: "Verfügbarkeit",
          text: "Serviceleistungen unterstützen den zuverlässigen Betrieb bestehender Anlagen.",
          icon: Activity,
        },
        {
          title: "Transparenz",
          text: "Digitale Lösungen helfen, Anlagenzustände und Störungen besser zu erkennen.",
          icon: BarChart3,
        },
        {
          title: "Optimierung",
          text: "Wartung, Ersatzteile und Betreuung sichern die Weiterentwicklung im laufenden Betrieb.",
          icon: Wrench,
        },
      ],
      items: [
        {
          title: "Wartung",
          text: "Planbare Betreuung von Anlagen und Komponenten im laufenden Betrieb.",
          icon: Wrench,
        },
        {
          title: "Ersatzteile",
          text: "Versorgung mit passenden Teilen für bestehende Förder- und Automatisierungslösungen.",
          icon: PackageCheck,
        },
        {
          title: "Vor-Ort-Service",
          text: "Unterstützung direkt an Anlagen, Produktionsstandorten und Einsatzorten.",
          icon: Users,
        },
        {
          title: "Remote Support",
          text: "Unterstützung bei technischen Fragen und Anlagenzuständen aus der Ferne.",
          icon: MonitorCog,
        },
        {
          title: "Serviceverträge",
          text: "Vereinbarte Betreuung für Wartung, Service und langfristige Anlagenbegleitung.",
          icon: ShieldCheck,
        },
        {
          title: "Schulung",
          text: "Qualifizierung für den Umgang mit Anlagen, Prozessen und Serviceabläufen.",
          icon: Building2,
        },
        {
          title: "Inbetriebnahme-\nunterstützung",
          text: "Begleitung bei Installation, Anlauf und Übergang in den Betrieb.",
          icon: Settings,
        },
        {
          title: "Digitale Zustands- und Störungsüberwachung",
          text: "Systeme zur besseren Übersicht über Anlagenzustände, Störungen und Wartungsplanung.",
          icon: BarChart3,
        },
      ],
    },
  },
  en: {
    company: {
      eyebrow: "Company",
      title: "Kronberg combines robust conveyor technology with integrated system solutions.",
      intro:
        "Kronberg Fördertechnik Gruppe is a fictional international industrial company with around 2,500 employees. The company develops, manufactures, installs and maintains technical solutions for internal goods and material flows.",
      body: [
        "Rooted in mechanical engineering, Kronberg has developed into an integrated systems partner. Conveyors, roller conveyors, sorting lines, lifting stations, transfer modules, scanner and sensor modules as well as control technology are combined into systems tailored to specific customer processes.",
        "In addition to classic conveyor technology, the portfolio includes service, maintenance, spare parts and digital solutions. These include systems that help customers monitor system condition, identify faults and plan maintenance more effectively.",
      ],
      strengthsTitle: "Four strengths",
      strengths: [
        {
          title: "Robust",
          text: "Technology for resilient material flows in production, warehouse and shipping environments.",
          icon: ShieldCheck,
        },
        {
          title: "Close to customers",
          text: "Solutions are adapted to concrete processes, requirements and operating environments.",
          icon: Handshake,
        },
        {
          title: "Strong in execution",
          text: "Mechanical engineering, systems engineering, automation and service work together in delivery.",
          icon: Settings,
        },
        {
          title: "Future-ready",
          text: "Digital transparency complements classic conveyor technology and long-term system support.",
          icon: LineChart,
        },
      ],
      links: [
        {
          title: "History",
          text: "From workshop operation to integrated provider of conveyor technology, automation, service and digital system solutions.",
          href: "/unternehmen/historie",
        },
        {
          title: "Organizational structure",
          text: "An overview of departments, approximate sizes and the operating structure of Kronberg Fördertechnik Gruppe.",
          href: "/unternehmen/organisation",
        },
      ],
    },
    history: {
      eyebrow: "History",
      title: "Development in clear stages",
      intro:
        "This timeline focuses exclusively on the approved stages of Kronberg's development.",
      items: [
        {
          year: "1968",
          title: "Founded as a workshop",
          text: "Founded as a workshop for metalworking and special-purpose mechanical engineering in southern Germany.",
        },
        {
          year: "1976",
          title: "First major conveyor technology order",
          text: "A regional automotive supplier commissions Kronberg to build a robust conveyor line.",
        },
        {
          year: "1996",
          title: "Renaming",
          text: "The company is renamed Kronberg Fördertechnik GmbH.",
        },
        {
          year: "2008",
          title: "Plant in Czechia",
          text: "Opening of a second production plant in Czechia.",
        },
        {
          year: "2010s",
          title: "Digital solutions and service",
          text: "Development of digital monitoring solutions and expansion of the service business.",
        },
        {
          year: "Today",
          title: "Integrated provider",
          text: "Kronberg is an integrated provider of conveyor technology, automation, service and digital system solutions.",
        },
      ],
    },
    organization: {
      eyebrow: "Organization",
      title: "Organizational Chart",
      intro: "",
      ownerCircle: {
        title: "Shareholder circle",
        text: "The shareholder circle is positioned above the management board.",
      },
      management: {
        title: "Management board",
        count: "approx. 8 employees",
        text: "Holds overall responsibility for the strategic, economic and organizational development of Kronberg Fördertechnik Gruppe.",
      },
      departments: [
        {
          title: "Strategy & Transformation",
          count: "approx. 45 employees",
          text: "Translates long-term direction into programs, projects and decision materials.",
        },
        {
          title: "Operations",
          count: "approx. 1,170 employees",
          text: "Combines production, assembly, operational supply chain, quality and process management as well as plant management.",
        },
        {
          title: "Engineering & Product Development",
          count: "approx. 340 employees",
          text: "Owns technical development, product logic and system solution design.",
        },
        {
          title: "Sales, Marketing & Service",
          count: "approx. 560 employees",
          text: "Connects market position, customer requirements, service and after sales.",
        },
        {
          title: "Finance & Administration",
          count: "approx. 95 employees",
          text: "Reviews investments, risks, economic targets and administrative foundations.",
        },
        {
          title: "People & Transformation",
          count: "approx. 65 employees",
          text: "Supports leadership, culture, organization and change.",
        },
        {
          title: "IT & Digital Solutions",
          count: "approx. 160 employees",
          text: "Coordinates digitalization, data strategy and secure technology adoption.",
        },
        {
          title: "Other specialist and project roles",
          count: "approx. 57 employees",
          text: "Additional specialist and project roles within the company group.",
        },
      ],
      council: {
        title: "Works council",
        count: "20 elected members",
        text: "The works council is shown separately and is not counted in addition to the total headcount.",
      },
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Modules for integrated material flows",
      intro:
        "Kronberg develops, manufactures, installs and maintains components and systems for internal goods and material flows.",
      processTitle: "Experts for the entire process",
      process: [
        {
          title: "Understand",
          text: "Precisely capture customer processes, material flows and technical requirements.",
        },
        {
          title: "Develop",
          text: "Design components, control technology and system logic to fit the task.",
        },
        {
          title: "Implement",
          text: "Reliably manage production, assembly, installation and commissioning.",
        },
        {
          title: "Operate",
          text: "Secure service, maintenance, spare parts and digital transparency in operation.",
        },
      ],
      items: [
        {
          title: "Conveyors",
          text: "Conveyor technology for the continuous transport of products, parcels, components, containers or workpieces.",
          icon: PanelsTopLeft,
        },
        {
          title: "Roller conveyors",
          text: "Modular transport lines for internal goods and material flows.",
          icon: Layers3,
        },
        {
          title: "Sorting modules",
          text: "Modules for distribution, discharge and sorting within automated processes.",
          icon: SlidersHorizontal,
        },
        {
          title: "Scanner and sensor modules",
          text: "Technical modules for capturing, monitoring and controlling material flows.",
          icon: ScanLine,
        },
        {
          title: "Lifting stations",
          text: "System modules for transitions between levels and process sections.",
          icon: Activity,
        },
        {
          title: "Transfer modules",
          text: "Modules for defined transfers between conveyor lines, work areas and system sections.",
          icon: PackageCheck,
        },
        {
          title: "Control technology",
          text: "Control solutions for the interaction of components, sensor technology and system logic.",
          icon: CircuitBoard,
        },
        {
          title: "Digital monitoring solutions",
          text: "Systems for monitoring system conditions, faults and maintenance planning.",
          icon: MonitorCog,
        },
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "Material flow solutions for industrial and logistics environments",
      intro:
        "Kronberg's customers mainly come from industry, logistics, retail, e-commerce, mechanical engineering, automotive, pharma and food.",
      useCasesTitle: "Typical operating areas",
      useCases: [
        "Production halls",
        "Warehouses",
        "Shipping centers",
        "Spare parts logistics",
        "Automated picking",
      ],
      items: [
        {
          title: "Industry",
          text: "Internal transport, sorting and monitoring of products, components and workpieces.",
          icon: Factory,
        },
        {
          title: "Logistics",
          text: "Automated material flows in warehouse, handling and shipping processes.",
          icon: Warehouse,
        },
        {
          title: "Retail",
          text: "Systems for goods movements between warehouse, sorting and shipping.",
          icon: ShoppingCart,
        },
        {
          title: "E-commerce",
          text: "Conveyor, sorting and automation solutions for dynamic shipping environments.",
          icon: Boxes,
        },
        {
          title: "Mechanical engineering",
          text: "Material flow solutions for components, workpieces and coordinated production processes.",
          icon: Cog,
        },
        {
          title: "Automotive",
          text: "Conveyor and transfer solutions for components and industrial production workflows.",
          icon: Truck,
        },
        {
          title: "Pharma",
          text: "Technical material flows in regulated production, warehouse and shipping environments.",
          icon: Gauge,
        },
        {
          title: "Food",
          text: "Transport and sorting solutions for goods flows in production, warehouse and shipping.",
          icon: PackageCheck,
        },
      ],
    },
    service: {
      eyebrow: "Service",
      title: "Long-term support for systems in operation",
      intro:
        "In addition to classic conveyor technology, Kronberg provides service, maintenance, spare parts and digital solutions for system operation.",
      topicsTitle: "Core themes",
      topics: [
        {
          title: "Availability",
          text: "Service offerings support reliable operation of existing systems.",
          icon: Activity,
        },
        {
          title: "Transparency",
          text: "Digital solutions help identify system conditions and faults more clearly.",
          icon: BarChart3,
        },
        {
          title: "Optimization",
          text: "Maintenance, spare parts and support secure further development during operation.",
          icon: Wrench,
        },
      ],
      items: [
        {
          title: "Maintenance",
          text: "Planned support for systems and components during operation.",
          icon: Wrench,
        },
        {
          title: "Spare parts",
          text: "Supply of suitable parts for existing conveyor and automation solutions.",
          icon: PackageCheck,
        },
        {
          title: "On-site service",
          text: "Support directly at systems, production sites and operating locations.",
          icon: Users,
        },
        {
          title: "Remote support",
          text: "Support for technical questions and system conditions from a distance.",
          icon: MonitorCog,
        },
        {
          title: "Service contracts",
          text: "Agreed support for maintenance, service and long-term system care.",
          icon: ShieldCheck,
        },
        {
          title: "Training",
          text: "Qualification for working with systems, processes and service workflows.",
          icon: Building2,
        },
        {
          title: "Commissioning support",
          text: "Support during installation, ramp-up and transition into operation.",
          icon: Settings,
        },
        {
          title: "Digital condition and fault monitoring",
          text: "Systems for clearer visibility into system condition, faults and maintenance planning.",
          icon: BarChart3,
        },
      ],
    },
  },
} satisfies Record<Locale, object>;
