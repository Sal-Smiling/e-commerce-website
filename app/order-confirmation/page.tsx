import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Check, Package, Mail } from 'lucide-react'

export default function OrderConfirmationPage() {
  const orderNumber = 'SC-' + Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8 text-center">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <Check className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Message */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground">
              Thank you for shopping with Steav-calture
            </p>
          </div>

          {/* Order Number Card */}
          <Card className="p-6 border-0 bg-card text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <Package className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Order Number</p>
                  <p className="font-mono font-bold text-lg">{orderNumber}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Confirmation Email</p>
                  <p className="font-semibold">A confirmation has been sent to your email</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Estimated Delivery</p>
                <p className="font-semibold">3-5 business days</p>
              </div>
            </div>
          </Card>

          {/* Next Steps */}
          <Card className="p-6 border-0 bg-secondary/30">
            <h2 className="font-bold mb-4">What's Next?</h2>
            <ul className="text-left space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="text-accent font-bold">1.</span>
                <span>Check your email for order confirmation and tracking details</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2.</span>
                <span>Your order will be prepared and shipped within 1-2 business days</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">3.</span>
                <span>Track your package in real-time using the provided tracking link</span>
              </li>
            </ul>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Support */}
          <div className="text-sm text-muted-foreground">
            <p>Questions? <Link href="/contact" className="text-accent hover:underline">Contact our support team</Link></p>
          </div>
        </div>
      </main>
    </div>
  )
}
