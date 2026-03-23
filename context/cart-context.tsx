'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  size: string
  color: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number, size: string, color: string) => void
  updateQuantity: (id: number, size: string, color: string, quantity: number) => void
  clearCart: () => void
  total: number
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount - only on client
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const saved = localStorage.getItem('cart')
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load cart:', e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage whenever items change
  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items, isLoaded])

  const addItem = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
      )
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      }
      return [...prev, newItem]
    })
  }

  const removeItem = (id: number, size: string, color: string) => {
    setItems((prev) => prev.filter((item) => !(item.id === id && item.size === size && item.color === color)))
  }

  const updateQuantity = (id: number, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, size, color)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size && item.color === color ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
