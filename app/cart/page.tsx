'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useCart } from '@/context/cart-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Trash2, ArrowRight } from 'lucide-react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()
  const router = useRouter()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-black">Shopping Cart</h1>

            <div className="flex flex-col items-center justify-center py-16 border border-border rounded-lg bg-secondary/30">
              <p className="text-lg text-muted-foreground mb-6">Your cart is empty</p>
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-black">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={`${item.id}-${item.size}-${item.color}`} className="p-6 border-0 bg-card">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-accent to-cyan-400 flex-shrink-0" />

                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <div className="text-sm text-muted-foreground space-y-1 mt-2">
                            <p>Size: <span className="font-semibold text-foreground">{item.size}</span></p>
                            <p>Color: <span className="font-semibold text-foreground">{item.color}</span></p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.size, item.color)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border rounded-lg w-fit">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-secondary transition-colors"
                          >
                            −
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, item.size, item.color, Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-12 text-center border-l border-r border-border bg-transparent py-1 font-semibold"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-secondary transition-colors"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Subtotal</p>
                          <p className="text-xl font-bold text-accent">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 border-0 bg-card sticky top-24">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Order Summary</h2>

                  <div className="border-t border-border pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span className="text-accent font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>${(total * 0.1).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">Total</span>
                      <span className="text-2xl font-black text-accent">
                        ${(total * 1.1).toFixed(2)}
                      </span>
                    </div>

                    <Button
                      onClick={() => router.push('/checkout')}
                      className="w-full bg-accent hover:bg-accent/90 text-white gap-2 mb-2"
                    >
                      Proceed to Checkout
                      <ArrowRight className="h-4 w-4" />
                    </Button>

                    <Link href="/shop" className="block">
                      <Button variant="outline" className="w-full">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  <button
                    onClick={clearCart}
                    className="w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors pt-2"
                  >
                    Clear Cart
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
