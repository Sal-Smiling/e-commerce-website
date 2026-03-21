'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useWishlist } from '@/context/wishlist-context'
import { useCart } from '@/context/cart-context'
import Link from 'next/link'
import { Heart, ShoppingCart, Trash2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    })
    toast({
      description: `${item.name} added to cart`,
    })
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col gap-8 text-center">
            <h1 className="text-4xl font-black">Your Wishlist</h1>

            <div className="flex flex-col items-center gap-6 py-16">
              <Heart className="h-16 w-16 text-muted-foreground" />
              <div>
                <p className="text-lg text-muted-foreground mb-4">Your wishlist is empty</p>
                <p className="text-sm text-muted-foreground mb-8">Save your favorite items for later</p>
              </div>
              <Link href="/shop">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-black mb-2">Your Wishlist</h1>
            <p className="text-muted-foreground">{items.length} item{items.length !== 1 ? 's' : ''} saved</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden border-0 bg-card hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-secondary relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                <div className="p-4 space-y-4">
                  <div>
                    <h2 className="font-bold text-lg line-clamp-2 mb-1">{item.name}</h2>
                    <p className="text-accent font-bold text-xl">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-accent hover:bg-accent/90 text-white gap-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button
                      onClick={() => removeFromWishlist(item.id)}
                      variant="outline"
                      size="icon"
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
