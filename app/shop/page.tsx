'use client'

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { Filter, Search, X, Star } from 'lucide-react'
import { products, categories, getProducts, type Category } from '@/lib/products'

export default function ShopPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])

  const tags = ['new', 'bestseller', 'trending', 'sale', 'limited']

  const filteredProducts = useMemo(() => {
    const filtered = getProducts({
      category: selectedCategory,
      tags: selectedTags.length > 0 ? selectedTags : undefined,
      search: search || undefined,
      sortBy: sortBy as any,
    })

    return filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )
  }, [search, selectedCategory, selectedTags, sortBy, priceRange])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const maxPrice = Math.max(...products.map(p => p.price))
  const minPrice = Math.min(...products.map(p => p.price))

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-black">Shop All Drops</h1>
              <p className="text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} available
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
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search products by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {/* Filters Sidebar */}
            <div className={`${showFilters ? 'block' : 'hidden'} md:block md:col-span-1`}>
              <div className="sticky top-24 space-y-6">
                {/* Category Filter */}
                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold mb-4 flex items-center justify-between">
                    Category
                    {selectedCategory !== 'All' && (
                      <button
                        onClick={() => setSelectedCategory('All')}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        Clear
                      </button>
                    )}
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="w-4 h-4 rounded-full accent-accent"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold mb-4 flex items-center justify-between">
                    Price Range
                    {(priceRange[0] !== minPrice || priceRange[1] !== maxPrice) && (
                      <button
                        onClick={() => setPriceRange([minPrice, maxPrice])}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        Reset
                      </button>
                    )}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>${priceRange[0].toFixed(2)}</span>
                      <span>${priceRange[1].toFixed(2)}</span>
                    </div>
                    <input
                      type="range"
                      min={minPrice}
                      max={maxPrice}
                      step="1"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseFloat(e.target.value), priceRange[1]])}
                      className="w-full accent-accent"
                    />
                    <input
                      type="range"
                      min={minPrice}
                      max={maxPrice}
                      step="1"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
                      className="w-full accent-accent"
                    />
                  </div>
                </div>

                {/* Tags Filter */}
                <div className="border border-border rounded-lg p-4 bg-card">
                  <h3 className="font-semibold mb-4 flex items-center justify-between">
                    Collections
                    {selectedTags.length > 0 && (
                      <button
                        onClick={() => setSelectedTags([])}
                        className="text-xs text-muted-foreground hover:text-foreground"
                      >
                        Clear
                      </button>
                    )}
                  </h3>
                  <div className="space-y-2">
                    {tags.map((tag) => (
                      <label key={tag} className="flex items-center gap-3 cursor-pointer hover:text-accent transition-colors">
                        <input
                          type="checkbox"
                          checked={selectedTags.includes(tag)}
                          onChange={() => toggleTag(tag)}
                          className="w-4 h-4 rounded accent-accent"
                        />
                        <span className="text-sm capitalize">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/shop/${product.id}`}>
                      <Card className="group cursor-pointer overflow-hidden border-0 bg-card hover:shadow-lg transition-all duration-300 hover:scale-105">
                        <div className="relative">
                          <div className={`${product.image} aspect-square flex items-center justify-center relative`}>
                            {!product.inStock && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="text-white font-bold">Out of Stock</span>
                              </div>
                            )}
                          </div>
                          {product.tags.length > 0 && (
                            <div className="absolute top-2 right-2 flex flex-col gap-1">
                              {product.tags.slice(0, 2).map((tag) => (
                                <div key={tag} className="px-2 py-1 bg-black/70 backdrop-blur rounded text-xs font-bold text-white capitalize">
                                  {tag}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="p-4 flex flex-col gap-3">
                          <div className="flex items-center gap-1">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < Math.floor(product.rating)
                                      ? 'fill-accent text-accent'
                                      : 'text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">({product.reviews})</span>
                          </div>
                          <h3 className="font-bold text-sm md:text-base group-hover:text-accent transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <p className="text-accent font-bold text-sm md:text-base">
                              ${product.price.toFixed(2)}
                            </p>
                            {product.originalPrice && (
                              <p className="text-muted-foreground line-through text-xs">
                                ${product.originalPrice.toFixed(2)}
                              </p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="col-span-3 flex flex-col items-center justify-center py-16 text-center">
                  <p className="text-lg text-muted-foreground mb-4">No products match your filters</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearch('')
                      setSelectedCategory('All')
                      setSelectedTags([])
                      setPriceRange([minPrice, maxPrice])
                    }}
                  >
                    Clear All Filters
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
