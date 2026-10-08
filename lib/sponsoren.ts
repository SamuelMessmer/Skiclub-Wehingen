/**
 * Sponsoren des MTB-Trails.
 *
 * Neue Sponsoren einfach unten in das Array `sponsoren` eintragen. Die
 * Reihenfolge innerhalb einer Stufe bestimmt die Reihenfolge auf der Seite.
 *
 * logo:    optional, Pfad zu einer Datei unter /public,
 *          z.B. "/mtb/sponsoren/musterfirma.png". Ohne Logo wird der Name
 *          als Schriftzug dargestellt.
 * website: optional, mit "https://" beginnend.
 */

export type SponsorLevel = "top" | "partner" | "pate";

export interface Sponsor {
  name: string;
  level: SponsorLevel;
  logo?: string;
  website?: string;
}

export const sponsorLevel: {
  key: SponsorLevel;
  title: string;
  description: string;
}[] = [
  {
    key: "top",
    title: "Top Trail Partner",
    description: "Prägen den Trail und genießen maximale Sichtbarkeit.",
  },
  {
    key: "partner",
    title: "Trail Partner",
    description: "Bringen den Trail voran und gestalten ihn sichtbar mit.",
  },
  {
    key: "pate",
    title: "Trail Paten",
    description: "Sind dabei und unterstützen als wichtige Basis den Trailbau.",
  },
];

export const sponsoren: Sponsor[] = [
  // Beispiel:
  // {
  //   name: "Musterfirma GmbH",
  //   level: "top",
  //   logo: "/mtb/sponsoren/musterfirma.png",
  //   website: "https://www.musterfirma.de",
  // },
];

export const sponsorenByLevel = (level: SponsorLevel): Sponsor[] =>
  sponsoren.filter((sponsor) => sponsor.level === level);
