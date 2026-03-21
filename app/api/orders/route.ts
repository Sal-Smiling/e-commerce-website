import { NextRequest, NextResponse } from 'next/server'

export interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
  size: string
  color: string
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  shippingAddress: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
    country: string
  }
  paymentMethod: string
  createdAt: Date
  updatedAt: Date
}

// In a real application, this would save to a database
const orders: Order[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, shippingAddress, paymentMethod, subtotal, shipping, tax, total, userId } = body

    if (!items || !shippingAddress || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const order: Order = {
      id: `ORD-${Date.now()}`,
      userId: userId || 'guest',
      items,
      subtotal,
      shipping,
      tax,
      total,
      status: 'processing',
      shippingAddress,
      paymentMethod,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    orders.push(order)

    // Return success response
    return NextResponse.json(
      {
        success: true,
        orderId: order.id,
        message: 'Order created successfully',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get('userId')

  if (!userId) {
    return NextResponse.json(
      { error: 'userId is required' },
      { status: 400 }
    )
  }

  const userOrders = orders.filter(order => order.userId === userId)

  return NextResponse.json({ orders: userOrders }, { status: 200 })
}
