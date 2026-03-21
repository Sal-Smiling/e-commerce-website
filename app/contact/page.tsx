import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black">Get in Touch</h1>
            <p className="text-muted-foreground">Have questions? We'd love to hear from you.</p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Name</label>
              <Input placeholder="Your name" className="bg-card border-border" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Email</label>
              <Input type="email" placeholder="your@email.com" className="bg-card border-border" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Message</label>
              <Textarea placeholder="Tell us what's on your mind..." className="bg-card border-border min-h-32" />
            </div>

            <Button className="bg-accent hover:bg-accent/90 text-white w-full">
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
