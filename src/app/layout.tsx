import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sel & Miel | Restaurant à Bruxelles",
  description: "Sel & Miel, deux établissements de caractère à Bruxelles. Grillades de précision, toastés gourmet, desserts d'exception. Découvrez notre carte en 3D et réalité augmentée.",
  keywords: ["Restaurant Bruxelles", "Sel & Miel", "Grillades Bruxelles", "Menu 3D", "Restaurant Gastronomique"],
  openGraph: {
    title: "Sel & Miel | Restaurant à Bruxelles",
    description: "Une expérience gastronomique unique où chaque détail est une signature.",
    type: "website",
    locale: "fr_BE",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
