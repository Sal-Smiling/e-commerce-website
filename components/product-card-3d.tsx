'use client'

import { useState, useRef, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Zap } from 'lucide-react'

export function ProductCard3D({
  id,
  name,
  price,
  originalPrice,
  image,
  frontDesign,
  backDesign,
  rating,
  reviews,
  inStock = true,
}: {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  frontDesign: string
  backDesign: string
  rating: number
  reviews: number
  inStock?: boolean
}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotationX = (y - centerY) / 10
    const rotationY = (centerX - x) / 10

    setRotation({ x: rotationX, y: rotationY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative w-full h-full perspective"
      style={{
        perspective: '1200px',
        minHeight: '500px',
      }}
    >
      {/* 3D Container */}
      <div
        className="relative w-full h-full transition-transform duration-300"
        style={{
          transformStyle: 'preserve-3d',
          transform: `
            rotateX(${rotation.x}deg) 
            rotateY(${rotation.y}deg)
            ${isFlipped ? 'rotateY(180deg)' : ''}
            scale(${isHovered ? 1.05 : 1})
          `,
        }}
      >
        {/* Front of Card */}
        <Card
          className="absolute inset-0 border-0 bg-card overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="h-full flex flex-col p-0">
            {/* Product Image */}
            <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center">
              <img
                src={frontDesign}
                alt={`${name} - Front`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              {!inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Out of Stock</span>
                </div>
              )}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur rounded-lg px-3 py-1">
                <span className="text-xs font-bold text-accent">Front View</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-3 bg-card border-t border-border">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg line-clamp-1">{name}</h3>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(rating)
                          ? 'text-accent'
                          : 'text-muted-foreground'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({reviews})</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-accent">
                  ${price.toFixed(2)}
                </span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button
                  className="flex-1 bg-accent hover:bg-accent/90 text-white gap-2"
                  disabled={!inStock}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">Add</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="gap-2"
                >
                  <Zap className="h-4 w-4" />
                  Flip
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Click card to see back design
              </p>
            </div>
          </div>
        </Card>

        {/* Back of Card */}
        <Card
          className="absolute inset-0 border-0 bg-card overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(0)',
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="h-full flex flex-col p-0">
            {/* Back Design */}
            <div className="relative flex-1 overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
              <img
                src={backDesign}
                alt={`${name} - Back`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur rounded-lg px-3 py-1">
                <span className="text-xs font-bold text-accent">Back View</span>
              </div>
            </div>

            {/* Back Info */}
            <div className="p-6 space-y-3 bg-card border-t border-border">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg line-clamp-1">{name}</h3>
              </div>

              <p className="text-sm text-muted-foreground">
                Premium organic cotton tee with bold distressed back print. Perfect for making a statement.
              </p>

              {/* Details */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Material:</span>
                  <span className="font-semibold">100% Organic Cotton</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weight:</span>
                  <span className="font-semibold">180 GSM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fit:</span>
                  <span className="font-semibold">Unisex Oversized</span>
                </div>
              </div>

              {/* Actions */}
              <Button
                variant="outline"
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full gap-2"
              >
                <Zap className="h-4 w-4" />
                Back to Front
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Click card or use Flip button
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
