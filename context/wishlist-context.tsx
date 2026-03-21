'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface WishlistItem {
  id: number
  name: string
  price: number
  image: string
}

interface WishlistContextType {
  items: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: number) => void
  isInWishlist: (id: number) => boolean
  itemCount: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([])

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wishlist')
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load wishlist:', e)
      }
    }
  }, [])

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items))
  }, [items])

  const addToWishlist = (item: WishlistItem) => {
    if (!items.find((i) => i.id === item.id)) {
      setItems([...items, item])
    }
  }

  const removeFromWishlist = (id: number) => {
    setItems(items.filter((i) => i.id !== id))
  }

  const isInWishlist = (id: number) => {
    return items.some((i) => i.id === id)
  }

  return (
    <WishlistContext.Provider
      value={{ items, addToWishlist, removeFromWishlist, isInWishlist, itemCount: items.length }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider')
  }
  return context
}
