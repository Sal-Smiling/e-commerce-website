import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'
import { Truck, MapPin, Clock } from 'lucide-react'

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black">Shipping Information</h1>
            <p className="text-lg text-muted-foreground">
              Fast and reliable shipping to get your Steav-calture tees to you quickly.
            </p>
          </div>

          {/* Shipping Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-0 bg-card">
              <Truck className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Standard Shipping</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Delivery in 5-7 business days
              </p>
              <p className="font-bold text-accent">Free over $50</p>
            </Card>

            <Card className="p-6 border-0 bg-card">
              <Truck className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Express Shipping</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Delivery in 2-3 business days
              </p>
              <p className="font-bold text-accent">$12.99</p>
            </Card>

            <Card className="p-6 border-0 bg-card">
              <Truck className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Overnight Shipping</h3>
              <p className="text-muted-foreground text-sm mb-3">
                Delivery next business day
              </p>
              <p className="font-bold text-accent">$24.99</p>
            </Card>
          </div>

          {/* Shipping Details */}
          <Card className="p-8 border-0 bg-card">
            <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Shipping Locations</h3>
                  <p className="text-muted-foreground">
                    We currently ship to all 50 US states and Canada. International shipping coming soon!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Processing Time</h3>
                  <p className="text-muted-foreground">
                    All orders are processed within 1-2 business days. Orders placed on weekends or holidays
                    will be processed the next business day.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Truck className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Tracking</h3>
                  <p className="text-muted-foreground">
                    Once your order ships, you'll receive an email with a tracking number so you can monitor
                    your package every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* FAQ Section */}
          <Card className="p-8 border-0 bg-card">
            <h2 className="text-2xl font-bold mb-6">Shipping FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Can I change my shipping address?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Contact us within 24 hours of placing your order and we can update your address before it ships.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">What if my package arrives damaged?</h3>
                <p className="text-muted-foreground text-sm">
                  We stand behind our products. If your package arrives damaged, contact us immediately and we'll send
                  a replacement or provide a full refund.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Do you offer free shipping?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! Free standard shipping on all orders over $50. Orders under $50 incur a $8.99 shipping fee.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Can I use a PO Box?</h3>
                <p className="text-muted-foreground text-sm">
                  Standard and Express shipping can be delivered to PO Boxes. Overnight shipping requires a physical address.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
