'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/cart-context'
import { useRouter } from 'next/navigation'
import { ArrowLeft, CreditCard, Smartphone } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const router = useRouter()
  const { toast } = useToast()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-black">Checkout</h1>
            <p className="text-muted-foreground">Your cart is empty</p>
            <Link href="/shop">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const finalTotal = total * 1.1

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
      toast({
        description: 'Please fill in all required fields',
        variant: 'destructive',
      })
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    clearCart()
    toast({
      description: 'Order placed successfully!',
    })
    router.push('/order-confirmation')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Info */}
              <Card className="p-6 border-0 bg-card">
                <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">First Name</label>
                    <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="bg-background border-border" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">Last Name</label>
                    <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="bg-background border-border" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-sm font-semibold">Email</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="bg-background border-border" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-sm font-semibold">Phone</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="bg-background border-border" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-sm font-semibold">Address</label>
                    <Input name="address" value={formData.address} onChange={handleChange} placeholder="123 Main St" className="bg-background border-border" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">City</label>
                    <Input name="city" value={formData.city} onChange={handleChange} placeholder="New York" className="bg-background border-border" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">State/Province</label>
                    <Input name="state" value={formData.state} onChange={handleChange} placeholder="NY" className="bg-background border-border" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold">ZIP/Postal Code</label>
                    <Input name="zip" value={formData.zip} onChange={handleChange} placeholder="10001" className="bg-background border-border" />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-sm font-semibold">Country</label>
                    <select name="country" value={formData.country} onChange={handleChange} className="px-3 py-2 bg-background border border-border rounded-lg">
                      <option>Select a country</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </Card>

              {/* Payment Method Selection */}
              <Card className="p-6 border-0 bg-card">
                <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                <div className="space-y-3">
                  <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'card' ? 'border-accent bg-accent/5' : 'border-border hover:border-accent'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <CreditCard className="h-5 w-5" />
                    <span className="font-semibold">Credit/Debit Card</span>
                  </label>

                  <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'bakong' ? 'border-accent bg-accent/5' : 'border-border hover:border-accent'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="bakong"
                      checked={paymentMethod === 'bakong'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <Smartphone className="h-5 w-5" />
                    <span className="font-semibold">Bakong Mobile Wallet</span>
                  </label>

                  <label className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    paymentMethod === 'aba' ? 'border-accent bg-accent/5' : 'border-border hover:border-accent'
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="aba"
                      checked={paymentMethod === 'aba'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4"
                    />
                    <Smartphone className="h-5 w-5" />
                    <span className="font-semibold">ABA Pay</span>
                  </label>
                </div>
              </Card>

              {/* Card Payment Fields */}
              {paymentMethod === 'card' && (
                <Card className="p-6 border-0 bg-card">
                  <h3 className="font-bold mb-4">Card Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-sm font-semibold">Cardholder Name</label>
                      <Input name="cardName" value={formData.cardName} onChange={handleChange} placeholder="John Doe" className="bg-background border-border" />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-sm font-semibold">Card Number</label>
                      <Input name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="4111 1111 1111 1111" className="bg-background border-border" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold">Expiry Date</label>
                      <Input name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" className="bg-background border-border" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold">CVV</label>
                      <Input name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" className="bg-background border-border" />
                    </div>
                  </div>
                </Card>
              )}

              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-semibold disabled:opacity-50"
              >
                {isProcessing ? 'Processing...' : 'Complete Order'}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-0 bg-card sticky top-20">
              <h3 className="font-bold text-lg mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-border max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex justify-between text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-accent font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (10%)</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-accent">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
