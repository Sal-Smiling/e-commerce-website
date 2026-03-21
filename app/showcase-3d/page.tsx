'use client'

import { Header } from '@/components/header'
import { ProductCard3D } from '@/components/product-card-3d'

export default function Showcase3DPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-white">Experience</span>
            <br />
            <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
              3D Product View
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hover and flip our exclusive Steav-culture collection in stunning 3D. Move your mouse to rotate the card and see the product from every angle.
          </p>
        </div>

        {/* 3D Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Featured Product */}
          <div className="md:col-span-2">
            <div className="h-[600px]">
              <ProductCard3D
                id={1}
                name="Steav-Culture 2024 Limited Edition"
                price={34.99}
                originalPrice={49.99}
                frontDesign="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sVb4c3RFNtXpUQVX4Ra6OsU5SncOVH.png"
                backDesign="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sVb4c3RFNtXpUQVX4Ra6OsU5SncOVH.png"
                rating={5}
                reviews={128}
                inStock={true}
              />
            </div>
          </div>

          {/* Additional Cards */}
          <div className="h-[600px]">
            <ProductCard3D
              id={2}
              name="Neon Dream Tee"
              price={24.99}
              frontDesign="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sVb4c3RFNtXpUQVX4Ra6OsU5SncOVH.png"
              backDesign="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sVb4c3RFNtXpUQVX4Ra6OsU5SncOVH.png"
              rating={4.5}
              reviews={89}
              inStock={true}
            />
          </div>

          <div className="h-[600px]">
            <ProductCard3D
              id={3}
              name="Cyber Classic"
              price={22.99}
              frontDesign="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sVb4c3RFNtXpUQVX4Ra6OsU5SncOVH.png"
              backDesign="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sVb4c3RFNtXpUQVX4Ra6OsU5SncOVH.png"
              rating={4.8}
              reviews={156}
              inStock={true}
            />
          </div>
        </div>

        {/* Feature Section */}
        <div className="mt-20 pt-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-12 text-center">3D Card Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-bold text-xl mb-3">Mouse Tracking</h3>
              <p className="text-muted-foreground">
                Move your mouse over the card to see realistic 3D perspective rotation that follows your cursor movement.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-bold text-xl mb-3">Flip Animation</h3>
              <p className="text-muted-foreground">
                Click the card or use the Flip button to smoothly transition between front and back designs with hardware-accelerated 3D.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-bold text-xl mb-3">Hover Effects</h3>
              <p className="text-muted-foreground">
                Watch the card scale up and reveal depth shadows when you hover over it, creating an interactive visual experience.
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-16 p-8 rounded-lg bg-secondary/50 border border-border text-center">
          <h3 className="text-xl font-bold mb-2">How to Interact</h3>
          <ul className="text-muted-foreground space-y-2 max-w-2xl mx-auto">
            <li>✦ <strong>Hover</strong> your mouse over any card to see 3D rotation effects</li>
            <li>✦ <strong>Move</strong> your cursor around the card for dynamic perspective</li>
            <li>✦ <strong>Click</strong> the card or press the Flip button to see the back design</li>
            <li>✦ <strong>Add to Cart</strong> to purchase your favorite Steav-culture tee</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
