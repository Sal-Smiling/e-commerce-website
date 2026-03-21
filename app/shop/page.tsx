'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { Filter, Search, X, Heart } from 'lucide-react'
import { useWishlist } from '@/context/wishlist-context'
import { useToast } from '@/hooks/use-toast'

const products = [
  { id: 1, name: 'Neon Dream Tee', price: 24.99, category: 'Premium', tag: 'new', image: 'bg-gradient-to-br from-pink-500 to-purple-600' },
  { id: 2, name: 'Cyber Classic', price: 22.99, category: 'Essential', tag: 'bestseller', image: 'bg-gradient-to-br from-cyan-500 to-blue-600' },
  { id: 3, name: 'Electric Vibes', price: 26.99, category: 'Premium', tag: 'trending', image: 'bg-gradient-to-br from-yellow-400 to-orange-500' },
  { id: 4, name: 'Midnight Glow', price: 24.99, category: 'Essential', tag: null, image: 'bg-gradient-to-br from-indigo-600 to-purple-700' },
  { id: 5, name: 'Retro Pulse', price: 25.99, category: 'Premium', tag: 'sale', image: 'bg-gradient-to-br from-green-500 to-emerald-600' },
  { id: 6, name: 'Digital Dawn', price: 23.99, category: 'Essential', tag: 'new', image: 'bg-gradient-to-br from-orange-400 to-red-600' },
  { id: 7, name: 'Neon Nights', price: 27.99, category: 'Premium', tag: 'trending', image: 'bg-gradient-to-br from-purple-500 to-pink-600' },
  { id: 8, name: 'Cyber Soul', price: 24.99, category: 'Essential', tag: 'sale', image: 'bg-gradient-to-br from-blue-500 to-cyan-600' },
]

export default function ShopPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { toast } = useToast()

  const categories = ['Essential', 'Premium']
  const tags = ['new', 'bestseller', 'trending', 'sale']

  const filteredProducts = useMemo(() => {
    let result = products

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (selectedTags.length > 0) {
      result = result.filter((p) => p.tag && selectedTags.includes(p.tag))
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [search, selectedCategory, selectedTags, sortBy])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const handleWishlist = (e: React.MouseEvent, product: any) => {
    e.preventDefault()
    e.stopPropagation()

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast({
        description: `Removed from wishlist`,
      })
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
      toast({
        description: `Added to wishlist`,
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black">Shop All</h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-lg bg-card border border-border text-sm font-medium"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Filters and Products */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <div
              className={`md:col-span-1 ${
                showFilters ? 'block' : 'hidden'
              } md:block space-y-6 p-4 md:p-0 border border-border md:border-0 rounded-lg md:rounded-none`}
            >
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 bg-background border-border"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-3 top-3"
                  >
                    <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="space-y-3">
                <h3 className="font-bold text-sm">Category</h3>
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategory === cat}
                      onChange={() =>
                        setSelectedCategory(selectedCategory === cat ? null : cat)
                      }
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm">{cat}</span>
                  </label>
                ))}
              </div>

              {/* Tags/Filters */}
              <div className="space-y-3">
                <h3 className="font-bold text-sm">Collections</h3>
                {tags.map((tag) => (
                  <label key={tag} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => toggleTag(tag)}
                      className="w-4 h-4 rounded"
                    />
                    <span className="text-sm capitalize">{tag}</span>
                  </label>
                ))}
              </div>

              {/* Clear Filters */}
              {(search || selectedCategory || selectedTags.length > 0) && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearch('')
                    setSelectedCategory(null)
                    setSelectedTags([])
                  }}
                  className="w-full"
                >
                  Clear All
                </Button>
              )}
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/shop/${product.id}`}>
                      <Card className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-lg transition-all duration-300 hover:scale-105 relative">
                        <div className="relative">
                          <div className={`${product.image} aspect-square flex items-center justify-center`} />
                          {product.tag && (
                            <div className="absolute top-2 left-2 px-2 py-1 bg-black/70 backdrop-blur rounded text-xs font-bold text-white capitalize">
                              {product.tag}
                            </div>
                          )}
                          <button
                            onClick={(e) => handleWishlist(e, product)}
                            className="absolute top-2 right-2 p-2 rounded-full bg-black/70 backdrop-blur hover:bg-black/90 transition-colors"
                          >
                            <Heart
                              className={`h-4 w-4 ${
                                isInWishlist(product.id)
                                  ? 'fill-red-500 text-red-500'
                                  : 'text-white'
                              }`}
                            />
                          </button>
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                          <h3 className="font-bold text-sm md:text-base group-hover:text-accent transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-accent font-bold text-sm md:text-base">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="col-span-3 flex flex-col items-center justify-center py-16 text-center">
                  <p className="text-lg text-muted-foreground mb-4">No products found</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearch('')
                      setSelectedCategory(null)
                      setSelectedTags([])
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
