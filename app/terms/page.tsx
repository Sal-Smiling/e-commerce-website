import { Header } from '@/components/header'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-black mb-8">Terms & Conditions</h1>
          
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using Steav-calture, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">2. Use License</h2>
              <p className="text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory
                viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on Steav-calture are provided on an 'as is' basis. Steav-calture makes no warranties, expressed
                or implied, and hereby disclaims and negates all other warranties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">4. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall Steav-calture or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground">
                The materials appearing on Steav-calture could include technical, typographical, or photographic errors.
                Steav-calture does not warrant that any of the materials are accurate, complete, or current.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">6. Links</h2>
              <p className="text-muted-foreground">
                Steav-calture has not reviewed all of the sites linked to its website and is not responsible for the contents
                of any such linked site. The inclusion of any link does not imply endorsement by Steav-calture.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">7. Modifications</h2>
              <p className="text-muted-foreground">
                Steav-calture may revise these terms of service for our website at any time without notice. By using this website,
                you are agreeing to be bound by the then current version of these terms of service.
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
