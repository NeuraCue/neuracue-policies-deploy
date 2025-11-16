import type { Metadata } from 'next';
import Link from 'next/link';
import CurrentDate from '@/components/CurrentDate';

export const metadata: Metadata = {
  title: 'Terms of Service - NeuraCue',
  description: 'Terms of Service for the NeuraCue Android application.',
  alternates: {
    canonical: 'https://neuracue.com/terms',
  },
  openGraph: {
    title: 'Terms of Service - NeuraCue',
    description: 'Terms of Service for the NeuraCue Android application.',
  },
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p>
        <strong>Effective date:</strong> <CurrentDate />
      </p>

      <section style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'left' }}>
        <h2 id="agreement" style={{ textAlign: 'center' }}>
          Agreement to Terms
        </h2>
        <p>
          By installing or using the NeuraCue Android application (the
          &quot;App&quot;), you agree to these Terms of Service
          (&quot;Terms&quot;). If you do not agree, do not use the App.
        </p>

        <h2 id="service" style={{ textAlign: 'center' }}>
          What NeuraCue Does
        </h2>
        <p>
          The App lets you create reminders that trigger when you arrive at or
          leave specific locations (&quot;geofences&quot;). The App may display
          your position on a map and send you notifications when a reminder
          triggers.
        </p>

        <h2 id="eligibility" style={{ textAlign: 'center' }}>
          Eligibility & Acceptable Use
        </h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <p>
            You are responsible for using the App safely and in compliance with
            law (e.g., do not interact with the App while driving).
          </p>
          <p>
            Do not misuse the App, interfere with its operation, attempt to
            access it by automated means, reverse-engineer, or circumvent
            technical protections.
          </p>
          <p>Do not use the App to harass, spam, or track others without consent.</p>
        </div>

        <h2 id="permissions" style={{ textAlign: 'center' }}>
          Permissions & Notifications
        </h2>
        <p>The App may request Android permissions to provide core features:</p>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <p>
            <strong>Location</strong> (approximate/precise; foreground and
            optionally background) to create and trigger geofences, and to show
            your position on the map.
          </p>
          <p>
            <strong>Notifications</strong> to alert you when reminders trigger.
          </p>
        </div>
        <p>
          You can manage or revoke permissions in Android Settings at any time.
          Some features may not work without the relevant permission.
        </p>

        <h2 id="third-party" style={{ textAlign: 'center' }}>
          Third-Party Services
        </h2>
        <p>
          The App may rely on third-party services such as Google Play services,
          Google Maps, analytics, and crash reporting. Your use of those
          services is subject to their terms and policies. Links are provided in
          our{' '}
          <Link href="/privacy" style={{ color: '#38bdf8' }}>
            Privacy Policy
          </Link>
          .
        </p>

        <h2 id="privacy" style={{ textAlign: 'center' }}>
          Privacy
        </h2>
        <p>
          How we collect, use, and share information is described in our{' '}
          <Link href="/privacy" style={{ color: '#38bdf8' }}>
            Privacy Policy
          </Link>
          . By using the App, you also agree to the Privacy Policy.
        </p>

        <h2 id="license" style={{ textAlign: 'center' }}>
          License & Intellectual Property
        </h2>
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable,
          revocable license to install and use the App on a device you own or
          control, solely for lawful, personal purposes. NeuraCue, the NeuraCue
          logo, and related marks are trademarks of NeuraCue Inc. Third-party
          marks are the property of their respective owners.
        </p>

        <h2 id="updates" style={{ textAlign: 'center' }}>
          Changes, Updates & Availability
        </h2>
        <p>
          We may modify the App (including adding or removing features) or these
          Terms at any time. If changes are material, we may notify you in-app
          or on this site. Continued use after changes means you accept the
          updated Terms. We do not guarantee uninterrupted operation, and the
          App may be unavailable during maintenance or outages.
        </p>

        <h2 id="disclaimer" style={{ textAlign: 'center' }}>
          Disclaimer of Warranties
        </h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, THE APP IS PROVIDED &quot;AS
          IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. We do
          not warrant that geofence triggers will occur in every circumstance or
          at exact locations, as accuracy depends on device sensors,
          connectivity, and platform services outside our control.
        </p>

        <h2 id="liability" style={{ textAlign: 'center' }}>
          Limitation of Liability
        </h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEURACUE INC. AND ITS
          OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
          DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR REVENUE, ARISING OUT OF OR
          RELATING TO YOUR USE OF (OR INABILITY TO USE) THE APP, EVEN IF ADVISED
          OF THE POSSIBILITY OF SUCH DAMAGES. To the extent any liability exists,
          our aggregate liability shall not exceed the greater of (a) the amount
          you paid (if any) for the App during the twelve (12) months preceding
          the event giving rise to the claim, or (b) USD $10.
        </p>

        <h2 id="termination" style={{ textAlign: 'center' }}>
          Suspension & Termination
        </h2>
        <p>
          We may suspend or terminate your access to the App at any time if
          required by law, platform rules, or if you violate these Terms. You
          may stop using and uninstall the App at any time.
        </p>

        <h2 id="law" style={{ textAlign: 'center' }}>
          Governing Law
        </h2>
        <p>
          These Terms are governed by the laws of the State of Washington, USA,
          without regard to conflict-of-laws rules. Where permitted by law, you
          agree to submit to the exclusive jurisdiction of the state and federal
          courts located in King County, Washington, for disputes arising out of
          these Terms or the App.
        </p>

        <h2 id="misc" style={{ textAlign: 'center' }}>
          Miscellaneous
        </h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <p>
            <strong>Severability:</strong> If any provision is found
            unenforceable, the remaining provisions remain in effect.
          </p>
          <p>
            <strong>No waiver:</strong> Failure to enforce a provision is not a
            waiver of our right to do so later.
          </p>
          <p>
            <strong>Assignment:</strong> You may not assign these Terms without
            our prior written consent.
          </p>
        </div>

        <h2 id="contact" style={{ textAlign: 'center' }}>
          Contact
        </h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
        >
          <p style={{ margin: 0 }}>
            Legal/Terms:{' '}
            <a href="mailto:support@neuracue.com" style={{ color: '#38bdf8' }}>
              support@neuracue.com
            </a>
          </p>
          <p style={{ margin: 0 }}>
            Privacy:{' '}
            <a href="mailto:privacy@neuracue.com" style={{ color: '#38bdf8' }}>
              privacy@neuracue.com
            </a>
          </p>
        </div>

        <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
          Last updated: <CurrentDate />
        </p>
      </section>
    </>
  );
}