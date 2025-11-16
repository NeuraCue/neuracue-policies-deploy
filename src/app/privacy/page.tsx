import type { Metadata } from 'next';
import CurrentDate from '@/components/CurrentDate';

export const metadata: Metadata = {
  title: 'Privacy Policy - NeuraCue',
  description:
    "NeuraCue's privacy policy for the Android app on Google Play, covering location data, analytics, crash reports, user controls, and contact information.",
  alternates: {
    canonical: 'https://neuracue.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - NeuraCue',
    description:
      "NeuraCue's privacy policy for the Android app on Google Play, covering location data, analytics, crash reports, user controls, and contact information.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective date:</strong> <CurrentDate />
      </p>

      <section style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ textAlign: 'center' }}>Who we are</h2>
        <p>
          NeuraCue provides an Android app that lets you create AI-assisted,
          geofenced reminders.
        </p>

        <h2 style={{ textAlign: 'center' }}>Scope</h2>
        <p>
          This policy covers the NeuraCue Android app distributed via Google
          Play and this website (neuracue.com).
        </p>

        <h2 style={{ textAlign: 'center' }}>Data we collect</h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <p>
            <strong>Location data (optional, permission-based)</strong>
            <br />
            <em>Types:</em> approximate or precise, foreground and (if enabled)
            background.
            <br />
            <em>Use:</em> trigger reminders, show your current location on the
            map, and improve geofence accuracy.
            <br />
            <em>Control:</em> you can deny or revoke in Android Settings at any
            time.
          </p>
          <p>
            <strong>Device &amp; app info</strong> (OS version, app
            version/code, device model) for diagnostics and compatibility.
          </p>
          <p>
            <strong>Analytics</strong> (anonymous/aggregated event data such as
            feature usage, session info) to improve reliability and UX.
          </p>
          <p>
            <strong>Crash reports</strong> (e.g., stack traces, device state at
            crash) to fix stability issues.
          </p>
          <p>
            <strong>Contact data you provide</strong> when you email us (email
            address, message contents).
          </p>
        </div>

        <h2 style={{ textAlign: 'center' }}>How we use data</h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <p>Provide core features (geofenced reminders, map, search).</p>
          <p>
            Operate, protect, and improve the app (performance, debugging,
            analytics).
          </p>
          <p>Communicate support responses you request.</p>
          <p>Comply with legal obligations and platform policies.</p>
        </div>

        <h2 style={{ textAlign: 'center' }}>Processing &amp; sharing</h2>
        <p>
          We process data as described above. We do <strong>not</strong> sell
          personal data. We may share data with service providers strictly to
          operate the app (e.g., Google Play services, mapping SDKs,
          analytics/crash tooling) under appropriate agreements.
        </p>

        <h2 style={{ textAlign: 'center' }}>Retention</h2>
        <p>
          We retain data only as long as necessary for the purposes described or
          as required by law or platform rules. Crash and analytics data is
          retained according to the respective provider&apos;s policies.
        </p>

        <h2 style={{ textAlign: 'center' }}>Your choices &amp; controls</h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <p>
            <strong>Permissions:</strong> Grant or revoke Location
            (precise/approximate; foreground/background) in Android Settings →
            Apps → NeuraCue → Permissions.
          </p>
          <p>
            <strong>Data deletion:</strong> You can request deletion of support
            email threads by contacting us. App-side data (e.g., locally stored
            reminders) can be deleted by uninstalling the app; cloud-synced data
            (if enabled) can be removed via request.
          </p>
          <p>
            <strong>Opt-out of analytics:</strong> Contact us to request opt-out
            instructions where supported, or use system-level ad/analytics
            controls.
          </p>
        </div>

        <h2 style={{ textAlign: 'center' }}>Children</h2>
        <p>
          NeuraCue is not directed to children under 13. If you believe a child
          provided data, contact us to remove it.
        </p>

        <h2 style={{ textAlign: 'center' }}>Regional rights</h2>
        <p>
          Depending on your region (e.g., EEA/UK under GDPR, California under
          CCPA/CPRA), you may have rights to access, correct, delete, or
          restrict processing of your personal data. Contact us to exercise
          these rights; we will verify and respond as required.
        </p>

        <h2 style={{ textAlign: 'center' }}>Changes to this policy</h2>
        <p>
          We may update this policy to reflect changes in the app, services, or
          laws. We will post the new version here with a new effective date.
          Significant changes may also be highlighted in-app.
        </p>

        <h2 style={{ textAlign: 'center' }}>Contact us</h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
        >
          <p style={{ margin: 0 }}>
            Privacy:{' '}
            <a href="mailto:privacy@neuracue.com" style={{ color: '#38bdf8' }}>
              privacy@neuracue.com
            </a>
          </p>
          <p style={{ margin: 0 }}>
            Support:{' '}
            <a href="mailto:support@neuracue.com" style={{ color: '#38bdf8' }}>
              support@neuracue.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}