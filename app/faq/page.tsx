'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What sizes do you offer?',
    answer: 'We offer sizes XS through XXL. Each size is available in the color options shown on the product page.',
  },
  {
    question: 'What material are your tees made from?',
    answer: '100% organic cotton. We use premium, ethically-sourced cotton for comfort and sustainability.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we ship to the United States and Canada. International shipping is coming soon!',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy. If you\'re not satisfied, return your items for a full refund.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available for an additional fee.',
  },
  {
    question: 'Are your tees unisex?',
    answer: 'Yes! Our tees are designed to fit all body types. Check the size chart for specific measurements.',
  },
  {
    question: 'Do you have a loyalty program?',
    answer: 'Yes! Sign up for our newsletter to get 10% off your first order and exclusive early access to new drops.',
  },
  {
    question: 'How do I care for my tee?',
    answer: 'Machine wash cold, tumble dry low. We recommend turning your tee inside out to preserve the design.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-5xl font-black">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">Everything you need to know about Steav-calture</p>
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 bg-card overflow-hidden hover:shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-lg text-left">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-accent transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-border pt-4 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground mb-4">
              Didn't find what you're looking for?
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Contact Us
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
