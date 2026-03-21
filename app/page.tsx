import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Zap } from 'lucide-react'

const featuredProducts = [
  {
    id: 1,
    name: 'Neon Dream Tee',
    price: '$24.99',
    image: 'bg-gradient-to-br from-pink-500 to-purple-600',
    badge: 'New',
  },
  {
    id: 2,
    name: 'Cyber Classic',
    price: '$22.99',
    image: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    badge: 'Best Seller',
  },
  {
    id: 3,
    name: 'Electric Vibes',
    price: '$26.99',
    image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    badge: 'Trending',
  },
  {
    id: 4,
    name: 'Midnight Glow',
    price: '$24.99',
    image: 'bg-gradient-to-br from-indigo-600 to-purple-700',
    badge: null,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-xs md:text-sm font-semibold text-accent">Drop Season One Now Live</span>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="text-white">Fresh Drops.</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                  Gen Z Approved.
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                Bold tees designed for those who culture hard. Limited drops, unlimited vibes. Join the movement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/shop">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white gap-2">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-col gap-3 pt-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Trusted by Gen Z Culture
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-cyan-400 flex-shrink-0"
                  />
                ))}
                <span className="text-xs text-muted-foreground">+15K Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-cyan-400/20 blur-3xl rounded-full" />
              <div className="relative w-full h-full bg-gradient-to-br from-accent via-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl border border-accent/30">
                <div className="text-center">
                  <div className="text-6xl font-black text-white">S</div>
                  <p className="text-white/60 text-sm font-semibold mt-2">Steav-calture</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl md:text-4xl font-black">Featured Drops</h2>
              <p className="text-muted-foreground max-w-lg">
                Curated collection of our hottest pieces. Limited quantities, unlimited style.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/shop/${product.id}`}>
                  <Card className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="relative overflow-hidden">
                      <div className={`${product.image} aspect-square flex items-center justify-center relative`}>
                        {product.badge && (
                          <div className="absolute top-3 right-3 px-3 py-1 bg-black/70 backdrop-blur rounded-full text-xs font-bold text-white">
                            {product.badge}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-2">
                      <h3 className="font-bold text-sm md:text-base group-hover:text-accent transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-accent font-bold text-sm md:text-base">{product.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href="/shop">
                <Button size="lg" variant="outline" className="gap-2">
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="rounded-2xl bg-gradient-to-r from-accent/10 to-cyan-400/10 border border-accent/20 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col gap-6 items-center text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black max-w-2xl">
                Ready to express your culture?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                Join our community and stay updated on fresh drops, exclusive deals, and limited releases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm flex-1 sm:flex-initial"
                />
                <Button className="bg-accent hover:bg-accent/90 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 md:mt-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold">Shop</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li><Link href="/shop" className="hover:text-foreground transition-colors">All Products</Link></li>
                <li><Link href="/shop?filter=new" className="hover:text-foreground transition-colors">New Drops</Link></li>
                <li><Link href="/shop?filter=sale" className="hover:text-foreground transition-colors">On Sale</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold">Company</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold">Legal</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="/shipping" className="hover:text-foreground transition-colors">Shipping</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold">Follow</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; 2024 Steav-calture. All rights reserved.</p>
            <p>Designed for those who culture hard.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
