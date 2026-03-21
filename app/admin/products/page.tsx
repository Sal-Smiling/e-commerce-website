'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { products } from '@/lib/products'
import { Edit, Trash2, Plus, Search } from 'lucide-react'
import { useState } from 'react'

export default function AdminProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
              <Link href="/admin/orders">Orders</Link>
            </Button>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black mb-2">Products</h2>
            <p className="text-muted-foreground">{filteredProducts.length} products in catalog</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-white gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Search */}
        <Card className="p-6 border-0 bg-card mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background border-border"
            />
          </div>
        </Card>

        {/* Products Table */}
        <Card className="border-0 bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/30">
                  <th className="text-left py-4 px-6 font-semibold text-sm">Product Name</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Category</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Price</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Stock</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Rating</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Reviews</th>
                  <th className="text-left py-4 px-6 font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-border/50 hover:bg-secondary/20 transition-colors">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-semibold">{product.name}</p>
                        <p className="text-xs text-muted-foreground">ID: {product.id}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary">
                        {product.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-accent">${product.price.toFixed(2)}</p>
                      {product.originalPrice && (
                        <p className="text-xs text-muted-foreground line-through">
                          ${product.originalPrice.toFixed(2)}
                        </p>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.inStock
                          ? 'bg-green-400/20 text-green-400'
                          : 'bg-red-400/20 text-red-400'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-semibold">{product.rating.toFixed(1)}/5</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-muted-foreground">{product.reviews} reviews</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Edit className="h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1 text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  )
}
