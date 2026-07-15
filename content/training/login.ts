import type { Locale } from "@/messages/home";

export const trainingLoginContent = {
  de: {
    eyebrow: "Training",
    title: "Trainingszugang",
    intro:
      "Geben Sie Ihr Trainingspasswort ein, um die freigeschaltete Aufgabenstellung zu öffnen.",
    password: "Passwort",
    submit: "Training öffnen",
    submitting: "Wird geprüft",
    error:
      "Der Trainingszugang konnte nicht geöffnet werden. Bitte prüfen Sie Ihre Eingabe.",
  },
  en: {
    eyebrow: "Training",
    title: "Training access",
    intro: "Enter your training password to open the enabled task.",
    password: "Password",
    submit: "Open training",
    submitting: "Checking",
    error: "The training area could not be opened. Please check your entry.",
  },
} satisfies Record<Locale, object>;
