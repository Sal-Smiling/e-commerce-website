'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load user from localStorage on mount - only on client
  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsLoading(false)
      return
    }
    
    const saved = localStorage.getItem('user')
    if (saved) {
      try {
        setUser(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load user:', e)
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      firstName: email.split('@')[0],
      lastName: 'User',
    }

    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const signup = async (email: string, password: string, firstName: string, lastName: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      firstName,
      lastName,
    }

    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
