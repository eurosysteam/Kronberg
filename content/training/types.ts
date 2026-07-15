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
  source: string;
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
  };
  reset: string;
};
