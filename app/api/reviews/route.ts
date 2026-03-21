import { NextRequest, NextResponse } from 'next/server'

export interface Review {
  id: string
  productId: number
  userId: string
  rating: number
  title: string
  content: string
  verified: boolean
  helpful: number
  createdAt: Date
}

// In a real app, this would be stored in a database
const reviews: Review[] = [
  {
    id: '1',
    productId: 1,
    userId: 'user1',
    rating: 5,
    title: 'Amazing design!',
    content: 'Love the neon colors. Quality is great!',
    verified: true,
    helpful: 12,
    createdAt: new Date('2024-03-01'),
  },
  {
    id: '2',
    productId: 1,
    userId: 'user2',
    rating: 4,
    title: 'Good but slightly different',
    content: 'Colors are slightly different than expected but still looks great.',
    verified: true,
    helpful: 8,
    createdAt: new Date('2024-02-28'),
  },
]

export async function GET(request: NextRequest) {
  const productId = request.nextUrl.searchParams.get('productId')

  if (!productId) {
    return NextResponse.json(
      { error: 'productId is required' },
      { status: 400 }
    )
  }

  const productReviews = reviews.filter(
    review => review.productId === parseInt(productId)
  )

  const averageRating =
    productReviews.length > 0
      ? productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length
      : 0

  return NextResponse.json(
    {
      productId: parseInt(productId),
      reviews: productReviews,
      count: productReviews.length,
      averageRating: Math.round(averageRating * 10) / 10,
    },
    { status: 200 }
  )
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { productId, userId, rating, title, content } = body

    if (!productId || !userId || !rating || !title || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    const review: Review = {
      id: Date.now().toString(),
      productId,
      userId,
      rating,
      title,
      content,
      verified: true,
      helpful: 0,
      createdAt: new Date(),
    }

    reviews.push(review)

    return NextResponse.json(
      {
        success: true,
        review,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating review:', error)
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 }
    )
  }
}
