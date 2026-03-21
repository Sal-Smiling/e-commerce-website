import { NextRequest, NextResponse } from 'next/server'

// In a real app, this would be stored in a database
const subscribers: string[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    if (subscribers.includes(email)) {
      return NextResponse.json(
        { error: 'Already subscribed' },
        { status: 400 }
      )
    }

    subscribers.push(email)

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to newsletter!',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { count: subscribers.length },
    { status: 200 }
  )
}
