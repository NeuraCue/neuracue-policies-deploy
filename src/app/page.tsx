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
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="mb-6">Welcome to NeuraCue</h1>
      <Image
        src="/assets/images/logo_orange_768.png"
        alt="NeuraCue logo"
        width={180}
        height={180}
        className="block mx-auto my-4 w-36 sm:w-44 h-auto rounded-2xl"
        unoptimized
      />
      <p className="text-lg sm:text-xl mb-4 max-w-2xl">
        AI-powered geo-fenced reminders for Android on Google Play Store.
      </p>
      <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-xl">
        This site hosts required policy and compliance pages for the NeuraCue
        Android app on Google Play.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <Link
          href="/privacy"
          className="text-neuracue-link hover:underline text-lg font-medium transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-neuracue-link hover:underline text-lg font-medium transition-colors"
        >
          Terms of Use
        </Link>
      </div>
    </div>
  );
}