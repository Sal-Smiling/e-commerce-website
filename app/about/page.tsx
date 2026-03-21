import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Zap, Users, Heart, Sparkles } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="flex flex-col gap-6 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="text-white">We Design For Those Who</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                Culture Hard
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Steav-calture is more than just a t-shirt brand—it's a movement for Gen Z creators, artists, and culture-makers who refuse to blend in.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-black">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower Gen Z to express their culture through bold, premium apparel. Every tee we create is designed to spark conversations and celebrate individuality.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe fashion should be inclusive, sustainable, and unapologetically authentic.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-cyan-400/20 rounded-2xl p-12 h-80 flex items-center justify-center border border-accent/20">
              <div className="text-6xl">🎨</div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="flex flex-col gap-12">
            <h2 className="text-4xl font-black">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 border-0 bg-card hover:shadow-lg transition-all">
                <Zap className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Bold Expression</h3>
                <p className="text-muted-foreground">
                  We celebrate individuality and self-expression. Your style should make a statement.
                </p>
              </Card>
              <Card className="p-8 border-0 bg-card hover:shadow-lg transition-all">
                <Heart className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Quality Commitment</h3>
                <p className="text-muted-foreground">
                  Premium organic cotton, ethical production, and designs that last beyond the season.
                </p>
              </Card>
              <Card className="p-8 border-0 bg-card hover:shadow-lg transition-all">
                <Users className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  We listen to our community and co-create with our customers on new designs.
                </p>
              </Card>
              <Card className="p-8 border-0 bg-card hover:shadow-lg transition-all">
                <Sparkles className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  Eco-friendly practices in every step, from production to packaging and shipping.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="rounded-2xl bg-gradient-to-r from-accent/10 to-cyan-400/10 border border-accent/20 p-8 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Join the Movement?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our latest drops and express your culture through Steav-calture.
            </p>
            <Link href="/shop">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Shop Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
