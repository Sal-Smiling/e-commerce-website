'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Eye, Search, Download } from 'lucide-react'
import { useState } from 'react'

export default function AdminOrdersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const orders = [
    { id: 'ORD-001', customer: 'John Doe', email: 'john@example.com', amount: '$47.98', status: 'Processing', date: '2024-03-21', items: 2 },
    { id: 'ORD-002', customer: 'Jane Smith', email: 'jane@example.com', amount: '$73.97', status: 'Shipped', date: '2024-03-20', items: 3 },
    { id: 'ORD-003', customer: 'Alex Johnson', email: 'alex@example.com', amount: '$24.99', status: 'Delivered', date: '2024-03-19', items: 1 },
    { id: 'ORD-004', customer: 'Sarah Williams', email: 'sarah@example.com', amount: '$99.97', status: 'Processing', date: '2024-03-18', items: 4 },
    { id: 'ORD-005', customer: 'Mike Brown', email: 'mike@example.com', amount: '$49.98', status: 'Delivered', date: '2024-03-17', items: 2 },
  ]

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const statuses = ['all', 'Processing', 'Shipped', 'Delivered']

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-black">Admin Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/admin">Dashboard</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/admin/products">Products</Link>
            </Button>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black mb-2">Orders</h2>
            <p className="text-muted-foreground">{filteredOrders.length} orders found</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        {/* Filters */}
        <Card className="p-6 border-0 bg-card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by order ID, customer, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 rounded-lg bg-background border border-border font-medium"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Status' : status}
                </option>
              ))}
            </select>
          </div>
        </Card>

        {/* Orders Table */}
        <Card className="border-0 bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left py-4 px-6 font-semibold text-sm">Order ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Customer</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Email</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Items</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Amount</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Status</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Date</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                      <td className="py-4 px-6">
                        <p className="font-semibold text-accent">{order.id}</p>
                      </td>
                      <td className="py-4 px-6">
                        <p className="font-semibold">{order.customer}</p>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-sm text-muted-foreground">{order.email}</p>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-sm">{order.items} item{order.items !== 1 ? 's' : ''}</p>
                      </td>
                      <td className="py-4 px-6">
                        <p className="font-bold text-accent">{order.amount}</p>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'Delivered' ? 'bg-green-400/20 text-green-400' :
                          order.status === 'Shipped' ? 'bg-blue-400/20 text-blue-400' :
                          'bg-yellow-400/20 text-yellow-400'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </td>
                      <td className="py-4 px-6">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Eye className="h-4 w-4" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-muted-foreground">
                      No orders found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  )
}
