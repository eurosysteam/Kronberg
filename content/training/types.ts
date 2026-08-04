export type TrainingArea = "leadership" | "intelligence";

export type TrainingSection = {
  title: string;
  body?: string[];
  items?: string[];
  callout?: string;
};

export type TrainingTaskContent = {
  area: TrainingArea;
  label: string;
  title: string;
  intro: string;
  breadcrumb: {
    training: string;
    current: string;
  };
  sections: TrainingSection[];
  support: {
    title: string;
    text: string;
    linkLabel: string;
    href: string;
    downloads?: Array<{
      label: string;
      href: string;
    }>;
  };
  reset: string;
};
