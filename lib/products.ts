export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  category: 'Classic' | 'Graphic' | 'Limited'
  tags: string[]
  image: string
  description: string
  rating: number
  reviews: number
  inStock: boolean
  colors: string[]
  sizes: string[]
  material: string
  care: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Neon Dream Tee',
    price: 24.99,
    originalPrice: 34.99,
    category: 'Graphic',
    tags: ['new', 'bestseller'],
    image: 'bg-gradient-to-br from-pink-500 to-purple-600',
    description: 'Bold neon vibes meet classic comfort. This tee is designed for those who want to stand out.',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    colors: ['Pink', 'Purple', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 2,
    name: 'Cyber Classic',
    price: 22.99,
    originalPrice: 28.99,
    category: 'Classic',
    tags: ['bestseller', 'trending'],
    image: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    description: 'Timeless design with a digital twist. Perfect for everyday wear.',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    colors: ['Cyan', 'Blue', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 3,
    name: 'Electric Vibes',
    price: 26.99,
    category: 'Graphic',
    tags: ['trending', 'new'],
    image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    description: 'Electric energy captured in fabric. Stand out from the crowd.',
    rating: 4.7,
    reviews: 56,
    inStock: true,
    colors: ['Yellow', 'Orange', 'Gold'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 4,
    name: 'Midnight Glow',
    price: 24.99,
    category: 'Classic',
    tags: ['bestseller'],
    image: 'bg-gradient-to-br from-indigo-600 to-purple-700',
    description: 'Dark, mysterious, and absolutely stunning. For the night owls.',
    rating: 4.5,
    reviews: 72,
    inStock: true,
    colors: ['Indigo', 'Purple', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 5,
    name: 'Retro Pulse',
    price: 25.99,
    originalPrice: 35.99,
    category: 'Graphic',
    tags: ['sale', 'trending'],
    image: 'bg-gradient-to-br from-green-500 to-emerald-600',
    description: 'Retro vibes with a modern pulse. Nostalgia meets now.',
    rating: 4.6,
    reviews: 43,
    inStock: true,
    colors: ['Green', 'Emerald', 'Mint'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 6,
    name: 'Digital Dawn',
    price: 23.99,
    category: 'Classic',
    tags: ['new'],
    image: 'bg-gradient-to-br from-orange-400 to-red-600',
    description: 'Rise with the digital sun. Fresh start energy.',
    rating: 4.4,
    reviews: 38,
    inStock: true,
    colors: ['Orange', 'Red', 'Coral'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 7,
    name: 'Neon Nights',
    price: 27.99,
    category: 'Graphic',
    tags: ['trending', 'limited'],
    image: 'bg-gradient-to-br from-purple-500 to-pink-600',
    description: 'Dance through the night in neon. Limited run.',
    rating: 4.9,
    reviews: 91,
    inStock: true,
    colors: ['Purple', 'Pink', 'Magenta'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 8,
    name: 'Cyber Soul',
    price: 24.99,
    originalPrice: 32.99,
    category: 'Limited',
    tags: ['sale', 'limited'],
    image: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    description: 'Where soul meets circuit. Limited drop.',
    rating: 4.7,
    reviews: 67,
    inStock: true,
    colors: ['Blue', 'Cyan', 'Teal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 9,
    name: 'Neon Fusion',
    price: 28.99,
    category: 'Graphic',
    tags: ['new', 'trending'],
    image: 'bg-gradient-to-br from-pink-400 to-yellow-400',
    description: 'A fusion of neon colors. Impossible to miss.',
    rating: 4.8,
    reviews: 102,
    inStock: true,
    colors: ['Pink', 'Yellow', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 10,
    name: 'Shadow System',
    price: 22.99,
    originalPrice: 29.99,
    category: 'Classic',
    tags: ['sale'],
    image: 'bg-gradient-to-br from-gray-700 to-black',
    description: 'Minimalist design for maximum impact.',
    rating: 4.5,
    reviews: 45,
    inStock: true,
    colors: ['Black', 'Gray', 'Charcoal'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 11,
    name: 'Quantum Jump',
    price: 26.99,
    category: 'Limited',
    tags: ['new', 'limited'],
    image: 'bg-gradient-to-br from-violet-500 to-blue-600',
    description: 'Take a quantum leap in style. Ultra limited.',
    rating: 4.9,
    reviews: 28,
    inStock: true,
    colors: ['Violet', 'Blue', 'Purple'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
  {
    id: 12,
    name: 'Solar Flare',
    price: 25.99,
    originalPrice: 33.99,
    category: 'Graphic',
    tags: ['sale', 'trending'],
    image: 'bg-gradient-to-br from-yellow-300 to-orange-600',
    description: 'Explosive solar energy in tee form.',
    rating: 4.6,
    reviews: 54,
    inStock: false,
    colors: ['Yellow', 'Orange', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    material: '100% Organic Cotton',
    care: 'Machine wash cold, tumble dry low',
  },
]

export const categories = ['All', 'Classic', 'Graphic', 'Limited'] as const
export type Category = typeof categories[number]

export function getProducts(filters?: {
  category?: Category
  tags?: string[]
  search?: string
  sortBy?: 'featured' | 'price-low' | 'price-high' | 'newest'
}): Product[] {
  let filtered = [...products]

  if (filters?.search) {
    const search = filters.search.toLowerCase()
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search))
  }

  if (filters?.category && filters.category !== 'All') {
    filtered = filtered.filter(p => p.category === filters.category)
  }

  if (filters?.tags && filters.tags.length > 0) {
    filtered = filtered.filter(p =>
      filters.tags!.some(tag => p.tags.includes(tag))
    )
  }

  if (filters?.sortBy) {
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filtered = filtered.filter(p => p.tags.includes('new'))
        break
      default:
        break
    }
  }

  return filtered
}
