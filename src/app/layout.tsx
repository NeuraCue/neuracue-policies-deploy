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
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #191970;
            color: #fff;
            margin: 0;
            padding: 0;
          }
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 2rem;
          }
          h1 {
            font-size: 2.5rem;
            margin: 1rem 0;
          }
          h2 {
            margin: 1.5rem 0 1rem 0;
          }
          p {
            max-width: 600px;
            text-align: center;
            margin: 0.5rem 0;
          }
          a {
            color: #38bdf8;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        `}</style>
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