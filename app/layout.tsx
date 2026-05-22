import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ES Hospital | Multi-Specialty Hospital in Perumbakkam, Chennai',
  description: 'Advanced multi-specialty hospital in Perumbakkam, Chennai with 500+ beds, expert doctors, emergency care, surgery, diagnostics. Book appointment now!',
  keywords: 'hospital, multi-specialty, surgery, emergency, diagnostics, Perumbakkam, Chennai, healthcare',
  authors: [{ name: 'ES Hospital' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://eshospital.com',
    title: 'ES Hospital',
    description: 'Advanced healthcare facility in Perumbakkam, Chennai',
    siteName: 'ES Hospital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ES Hospital',
    description: 'Multi-specialty hospital with expert care',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');`}
        </script>

        {/* Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Hospital",
            "name": "ES Hospital",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No. B, First Floor, Josen Towers, Nookampalayam Road",
              "addressLocality": "Perumbakkam",
              "addressRegion": "Chennai",
              "postalCode": "600100",
              "addressCountry": "IN"
            },
            "telephone": "+917305127365",
            "url": "https://eshospital.com",
            "areaServed": "Chennai",
            "availableService": ["General Surgery", "Orthopedics", "Pediatrics", "Obstetrics", "Internal Medicine", "Diagnostics"],
            "beds": 500,
            "emergencyService": true
          }`}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}