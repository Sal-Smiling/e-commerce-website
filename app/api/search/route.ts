import { NextRequest, NextResponse } from 'next/server'
import { products } from '@/lib/products'

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')
  const category = request.nextUrl.searchParams.get('category')
  const minPrice = request.nextUrl.searchParams.get('minPrice')
  const maxPrice = request.nextUrl.searchParams.get('maxPrice')
  const sortBy = request.nextUrl.searchParams.get('sortBy')

  if (!query) {
    return NextResponse.json(
      { error: 'Search query is required' },
      { status: 400 }
    )
  }

  let results = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  )

  // Apply category filter
  if (category && category !== 'All') {
    results = results.filter(p => p.category === category)
  }

  // Apply price filter
  if (minPrice) {
    const min = parseFloat(minPrice)
    results = results.filter(p => p.price >= min)
  }

  if (maxPrice) {
    const max = parseFloat(maxPrice)
    results = results.filter(p => p.price <= max)
  }

  // Apply sorting
  if (sortBy === 'price-low') {
    results.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    results.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'rating') {
    results.sort((a, b) => b.rating - a.rating)
  }

  return NextResponse.json(
    {
      query,
      count: results.length,
      results,
    },
    { status: 200 }
  )
}
