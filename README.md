# Kronberg Fördertechnik Website

Fiktive zweisprachige Unternehmenswebsite für die Kronberg Fördertechnik Gruppe.

Die Anwendung basiert auf Next.js App Router, TypeScript und Tailwind CSS. Sie enthält öffentliche Unternehmensseiten, ein Demo-Kontaktformular und einen passwortgeschützten Trainingsbereich.

## Voraussetzungen

- Node.js
- npm
- Git

## Installation

```bash
npm install
```

## Lokaler Start

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Environment Variables

Für den Trainingsbereich werden serverseitige Umgebungsvariablen benötigt:

```bash
TRAINING_PASSWORD_LEADERSHIP=
TRAINING_PASSWORD_INTELLIGENCE=
SESSION_SECRET=
```

Die Datei `.env.example` enthält nur leere Platzhalter. Lokale Werte gehören in `.env.local`; diese Datei wird nicht ins Repository aufgenommen.

`SESSION_SECRET` sollte ein ausreichend langer zufälliger Wert sein. Die Trainingspasswörter werden ausschließlich serverseitig gelesen.

## Inhalte und Bilder

Die Website nutzt strukturierte Inhalte unter `content/`. Die Originaldokumente im lokalen Ordner `documents/` sind nicht Teil des öffentlichen Repositorys und werden zur Laufzeit nicht benötigt.

Bilder aus `pictures/` werden statisch in die Next.js-Anwendung importiert. Nicht ersetzte Bildflächen bleiben als technische Platzhalter erhalten.

## Kontaktformular

Das Kontaktformular ist eine Demo-Funktion. Es validiert Eingaben client- und serverseitig, versendet keine E-Mail, speichert keine Daten dauerhaft und überträgt keine Daten an externe Dienste.

## Trainingszugang

Der Trainingszugang setzt einen signierten, sitzungsbezogenen Cookie. Der Cookie ist `httpOnly`, verwendet `sameSite=lax`, ist in Produktion `secure` und enthält kein Klartextpasswort.

## Vercel Hobby Deployment

1. GitHub-Import in Vercel

   - In Vercel ein neues Projekt erstellen.
   - Das GitHub-Repository `luispb32/KronbergWebsite` importieren.
   - Framework Preset: Next.js.

2. Environment Variables eintragen

   In den Vercel Project Settings unter Environment Variables eintragen:

   - `TRAINING_PASSWORD_LEADERSHIP`
   - `TRAINING_PASSWORD_INTELLIGENCE`
   - `SESSION_SECRET`

   Die Werte nicht in GitHub committen.

3. Deployment starten

   - Vercel verwendet standardmäßig `npm install` und `npm run build`.
   - Nach erfolgreichem Build wird eine Production Deployment URL erzeugt.

4. Automatische Deployments

   Nach dem GitHub-Import erstellt Vercel bei jedem Push auf den verbundenen Branch automatisch ein neues Deployment. Pull Requests erhalten Preview Deployments.

## Indexierung

Die Demo-Website ist bewusst auf `noindex` gesetzt:

- globale Next.js Metadata mit `robots: { index: false, follow: false }`
- `app/robots.ts` blockiert alle Crawler für die gesamte Website

## Bekannte Demo-Einschränkungen

- Keine Datenbank
- Kein echter E-Mail-Versand
- Keine Nutzerkonten
- Keine Lernfortschritte
- Keine Analyse- oder Trackingdienste
