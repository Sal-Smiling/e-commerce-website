'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/navigation'
import { Package, ShoppingCart, Users, TrendingUp, LogOut, Plus } from 'lucide-react'
import { useState } from 'react'

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-black">Admin Dashboard</h1>
            <p className="text-muted-foreground">Sign in to access admin features</p>
            <Link href="/login">
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Sign In
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const stats = [
    { label: 'Total Revenue', value: '$12,450.50', change: '+12.5%', icon: TrendingUp },
    { label: 'Total Orders', value: '248', change: '+8.2%', icon: ShoppingCart },
    { label: 'Products', value: '48', change: '+3', icon: Package },
    { label: 'Customers', value: '1,240', change: '+5.3%', icon: Users },
  ]

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', amount: '$47.98', status: 'completed', date: 'Today' },
    { id: 'ORD-002', customer: 'Jane Smith', amount: '$73.97', status: 'pending', date: 'Yesterday' },
    { id: 'ORD-003', customer: 'Alex Johnson', amount: '$24.99', status: 'completed', date: '2 days ago' },
    { id: 'ORD-004', customer: 'Sarah Williams', amount: '$99.97', status: 'pending', date: '3 days ago' },
  ]

  const topProducts = [
    { id: 1, name: 'Neon Dream Tee', sales: 234, revenue: '$5,811.66' },
    { id: 2, name: 'Cyber Classic', sales: 189, revenue: '$4,345.11' },
    { id: 3, name: 'Electric Vibes', sales: 156, revenue: '$4,210.44' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-6 border-0 bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-black">{stat.value}</p>
                    <p className="text-xs text-green-400 font-semibold mt-2">{stat.change}</p>
                  </div>
                  <Icon className="h-10 w-10 text-accent opacity-50" />
                </div>
              </Card>
            )
          })}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Sales Overview */}
          <Card className="lg:col-span-2 p-6 border-0 bg-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Sales Overview</h2>
              <select className="px-3 py-2 rounded-lg bg-secondary border-0 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            
            {/* Simple Bar Chart */}
            <div className="space-y-4">
              {[
                { day: 'Mon', sales: 450 },
                { day: 'Tue', sales: 620 },
                { day: 'Wed', sales: 520 },
                { day: 'Thu', sales: 780 },
                { day: 'Fri', sales: 950 },
                { day: 'Sat', sales: 1240 },
                { day: 'Sun', sales: 870 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-12 text-sm font-semibold text-muted-foreground">{item.day}</span>
                  <div className="flex-1 h-8 bg-secondary rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent/70 transition-all"
                      style={{ width: `${(item.sales / 1240) * 100}%` }}
                    />
                  </div>
                  <span className="w-16 text-right text-sm font-semibold">${item.sales}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Stats */}
          <Card className="p-6 border-0 bg-card">
            <h2 className="text-xl font-bold mb-6">Quick Stats</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Avg Order Value</span>
                <span className="font-bold">$50.24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Conversion Rate</span>
                <span className="font-bold">3.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Return Rate</span>
                <span className="font-bold">2.1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Avg Rating</span>
                <span className="font-bold">4.6/5</span>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white mt-4">
                View Detailed Reports
              </Button>
            </div>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card className="p-6 border-0 bg-card mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Orders</h2>
            <Button variant="outline" asChild>
              <Link href="/admin/orders">View All</Link>
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-sm">Order ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-sm">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border/50 hover:bg-secondary/30">
                    <td className="py-3 px-4 font-semibold text-sm">{order.id}</td>
                    <td className="py-3 px-4 text-sm">{order.customer}</td>
                    <td className="py-3 px-4 text-sm font-bold text-accent">{order.amount}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'Delivered' ? 'bg-green-400/20 text-green-400' :
                        order.status === 'Shipped' ? 'bg-blue-400/20 text-blue-400' :
                        'bg-yellow-400/20 text-yellow-400'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Top Products */}
        <Card className="p-6 border-0 bg-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Top Products</h2>
            <Button variant="outline" asChild>
              <Link href="/admin/products">View All</Link>
            </Button>
          </div>
          <div className="space-y-4">
            {topProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/30">
                <div className="flex-1">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.sales} units sold</p>
                </div>
                <p className="font-bold text-accent">{product.revenue}</p>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
