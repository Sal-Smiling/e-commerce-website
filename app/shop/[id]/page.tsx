'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/cart-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Heart, Share2, Check } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface ProductPageProps {
  params: {
    id: string
  }
}

const products: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Neon Dream Tee',
    price: 24.99,
    originalPrice: 34.99,
    image: 'bg-gradient-to-br from-pink-500 to-purple-600',
    description: 'Bold neon vibes meet classic comfort. This tee is designed for those who want to stand out.',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Pink', 'Purple', 'Black'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
    shipping: 'Free shipping on orders over $50',
  },
  '2': {
    id: 2,
    name: 'Cyber Classic',
    price: 22.99,
    originalPrice: 28.99,
    image: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    description: 'Timeless design with a digital twist. Perfect for everyday wear.',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cyan', 'Blue', 'White'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
    shipping: 'Free shipping on orders over $50',
  },
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.id] || products['1']
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()
  const router = useRouter()

  const handleAddToCart = () => {
    if (!selectedSize) return

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      size: selectedSize,
      color: selectedColor,
    })

    setIsAdded(true)
    toast({
      description: `${product.name} added to cart!`,
      action: {
        label: 'View Cart',
        onClick: () => router.push('/cart'),
      },
    })

    setTimeout(() => setIsAdded(false), 2000)
  }

  const relatedProducts = [
    { id: 3, name: 'Electric Vibes', price: '$26.99', image: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
    { id: 4, name: 'Midnight Glow', price: '$24.99', image: 'bg-gradient-to-br from-indigo-600 to-purple-700' },
    { id: 5, name: 'Retro Pulse', price: '$25.99', image: 'bg-gradient-to-br from-green-500 to-emerald-600' },
    { id: 6, name: 'Digital Dawn', price: '$23.99', image: 'bg-gradient-to-br from-orange-400 to-red-600' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <div className={`${product.image} aspect-square rounded-lg w-full flex items-center justify-center shadow-lg`} />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`${product.image} aspect-square rounded-lg w-20 h-20 flex-shrink-0 cursor-pointer hover:ring-2 ring-accent transition-all`} />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-black mb-2">{product.name}</h1>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? 'text-accent' : 'text-muted'}>★</span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-accent">${product.price.toFixed(2)}</span>
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Options */}
            <div className="flex flex-col gap-6">
              {/* Color Selection */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">Color: <span className="text-accent">{selectedColor}</span></label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedColor === color
                          ? 'border-accent bg-accent/10'
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">Size: <span className="text-accent">{selectedSize || 'Select size'}</span></label>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 rounded-lg border-2 font-semibold transition-all ${
                        selectedSize === size
                          ? 'border-accent bg-accent text-white'
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">Quantity</label>
                <div className="flex items-center border border-border rounded-lg w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-l border-r border-border bg-transparent py-2 font-semibold"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`flex-1 gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                  isAdded
                    ? 'bg-green-600 hover:bg-green-600'
                    : 'bg-accent hover:bg-accent/90'
                } text-white`}
              >
                {isAdded ? (
                  <>
                    <Check className="h-4 w-4" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={isWishlisted ? 'bg-accent/10 border-accent' : ''}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-accent text-accent' : ''}`} />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Info */}
            <div className="border-t border-border pt-6 flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Material</span>
                <span className="font-semibold">{product.material}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Care</span>
                <span className="font-semibold text-right">{product.care}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-semibold text-accent">{product.shipping}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="border-t border-border pt-16">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-black">You might also like</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/shop/${p.id}`}>
                  <Card className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className={`${p.image} aspect-square flex items-center justify-center`} />
                    <div className="p-4 flex flex-col gap-2">
                      <h3 className="font-bold text-sm md:text-base group-hover:text-accent transition-colors">{p.name}</h3>
                      <p className="text-accent font-bold text-sm md:text-base">{p.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
