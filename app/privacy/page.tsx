import { Header } from '@/components/header'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
          
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information you provide directly, including your name, email, address, and payment information.
                We also automatically collect information about your interactions with our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use your information to process orders, send updates, improve our services, and communicate with you about
                new products and special offers. We never sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">3. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information. All payment processing
                is handled by secure, PCI-compliant payment processors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">4. Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies to enhance your experience on our website. You can control cookie settings through your
                browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, update, or delete your personal information at any time. Contact us at
                privacy@steavculture.com to exercise these rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">6. Contact Us</h2>
              <p className="text-muted-foreground">
                For privacy inquiries, please contact us at privacy@steavculture.com or visit our contact page.
              </p>
            </div>

            <p className="text-sm text-muted-foreground pt-8">
              Last updated: March 2024
            </p>
          </section>
        </article>
      </main>
    </div>
  )
}
