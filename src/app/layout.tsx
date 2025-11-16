import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeuraCue',
  description:
    'Policy and compliance pages for the NeuraCue Android app on Google Play. AI-powered geofenced reminders.',
  metadataBase: new URL('https://neuracue.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NeuraCue',
    description:
      'Policy and compliance pages for the NeuraCue Android app on Google Play. AI-powered geofenced reminders.',
    url: 'https://neuracue.com',
    siteName: 'NeuraCue',
    images: [
      {
        url: '/assets/images/logo.png',
        width: 800,
        height: 600,
        alt: 'NeuraCue Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuraCue',
    description:
      'Policy and compliance pages for the NeuraCue Android app on Google Play. AI-powered geofenced reminders.',
    images: ['/assets/images/logo.png'],
  },
  authors: [{ name: 'NeuraCue Inc.' }],
  other: {
    'http-equiv': 'Content-Language',
    content: 'en',
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NeuraCue',
              url: 'https://neuracue.com',
              logo: 'https://neuracue.com/assets/images/logo.png',
              description:
                'Policy and compliance pages for the NeuraCue Android app on Google Play. AI-powered geofenced reminders.',
            }),
          }}
        />
      </head>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}