// pages/privacy-policy.js

import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Privacy Policy - Instaproperty</title>
      </Head>
      <main className="max-w-4xl mx-auto p-6 sm:p-12">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="text-lg mb-4">
          Welcome to Instaproperty, an app by Noether Tech. Your privacy is important to us, and we are committed to protecting it. This Privacy Policy outlines how we handle your personal data and your rights regarding this information.
        </p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
          <p className="text-lg">
            All user data is strictly encrypted in transit using industry-standard encryption protocols. We do not share your data with any third-party providers or advertisers under any circumstances.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Content Policies</h2>
          <p className="text-lg">
            Instaproperty does not promote violence, sexual abuse, child pornography, or data theft. We have strict policies to ensure that our platform remains safe and respectful for all users.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Protection of Minors</h2>
          <p className="text-lg">
            Protecting children is of utmost importance to us. Users under the age of 13 are not permitted to use Instaproperty. We do not collect personal data from children under 13. Our platform strictly prohibits any form of child abuse, child pornography, or any content that could be harmful to minors.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Protection Against Abuse</h2>
          <p className="text-lg">
            Instaproperty has a zero-tolerance policy for abuse, whether it is against women, children, or any other individuals. Any form of audio-visual violence, abuse, or harassment is strictly banned. We have robust reporting mechanisms in place to address any violations of these policies.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p className="text-lg">
            You have the right to access, correct, and delete your personal data. If you have any questions about our Privacy Policy or your data, please contact us at noethertechnologies@gmail.com
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
          <p className="text-lg">
            We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it regularly.
          </p>
        </section>
        <p className="text-lg">
          Thank you for trusting Instaproperty. Your privacy and safety are our top priorities.
        </p>
      </main>
    </div>
  );
}
