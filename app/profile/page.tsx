'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, User, Heart, ShoppingBag } from 'lucide-react'

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-black">Your Profile</h1>

            <div className="border border-border rounded-lg p-8 text-center space-y-4">
              <p className="text-lg text-muted-foreground">Sign in to view your profile, orders, and saved items.</p>
              <Link href="/login">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  Sign In
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-black">Your Profile</h1>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="p-6 border-0 bg-card space-y-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6 space-y-3">
                  <Link href="/wishlist">
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Wishlist
                    </button>
                  </Link>
                  <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Order History
                  </button>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 border-0 bg-card">
                <h2 className="text-xl font-bold mb-6">Account Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-semibold">Email Address</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-semibold">Password</p>
                      <p className="text-sm text-muted-foreground">Change your password</p>
                    </div>
                    <Button variant="outline" size="sm">Change</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-semibold">Notifications</p>
                      <p className="text-sm text-muted-foreground">Manage email preferences</p>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 bg-card">
                <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
                <div className="text-center py-12">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">No orders yet</p>
                  <Link href="/shop">
                    <Button className="bg-accent hover:bg-accent/90 text-white">
                      Start Shopping
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
