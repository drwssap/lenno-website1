import "./../styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lenno | Agence web Saint-Hippolyte | Precision Web Presence",
  description:
    "Lenno, agence web à Saint-Hippolyte, spécialisée dans la création de sites web modernes et sur mesure pour entreprises locales, construction et aménagement paysager.",
  keywords: [
    "Lenno",
    "agence web",
    "Saint-Hippolyte",
    "création site web",
    "Laurentides",
    "entreprise locale",
    "site web sur mesure",
    "développement web",
    "web agency",
    "local business",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Lenno | Agence web Saint-Hippolyte",
    description:
      "Création de sites web sur mesure pour entreprises à Saint-Hippolyte et Laurentides.",
    url: "https://lenno.ca/",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lenno Agence Web Saint-Hippolyte",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* LocalBusiness structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Lenno",
              "image": "https://lenno.ca/images/og-image.jpg",
              "telephone": "+1 (514) 916-1799",
              "email": "info@lenno.ca",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Saint-Hippolyte",
                "addressRegion": "QC",
                "addressCountry": "CA"
              },
              "url": "https://lenno.ca/",
              "description": "Agence web à Saint-Hippolyte spécialisée dans la création de sites web modernes et sur mesure."
            }
          `,
          }}
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
