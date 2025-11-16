import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NeuraCue',
  description:
    'Policy and compliance pages for the NeuraCue Android app on Google Play. AI-powered geofenced reminders.',
  alternates: {
    canonical: 'https://neuracue.com/',
  },
  openGraph: {
    images: [
      {
        url: 'https://neuracue.com/assets/images/logo.png',
        width: 800,
        height: 600,
        alt: 'NeuraCue Logo',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <h1>Welcome to NeuraCue</h1>
      <Image
        src="/assets/images/logo_orange_768.png"
        alt="NeuraCue logo"
        width={180}
        height={180}
        style={{
          display: 'block',
          margin: '1rem auto',
          width: '180px',
          height: 'auto',
          borderRadius: '16px',
        }}
        unoptimized
      />
      <p>AI-powered geo-fenced reminders for Android on Google Play Store.</p>
      <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
        This site hosts required policy and compliance pages for the NeuraCue
        Android app on Google Play.
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.6rem',
        }}
      >
        <Link href="/privacy" style={{ color: '#38bdf8' }}>
          Privacy Policy
        </Link>
        <Link href="/terms" style={{ color: '#38bdf8' }}>
          Terms of Use
        </Link>
      </div>
    </>
  );
}