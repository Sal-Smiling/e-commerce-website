'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: Date
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  isLoggedIn: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      const saved = localStorage.getItem('auth_user')
      if (saved) {
        try {
          setUser(JSON.parse(saved))
        } catch (error) {
          localStorage.removeItem('auth_user')
        }
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    // Simulate API call
    if (!email || !password) {
      throw new Error('Email and password are required')
    }

    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      createdAt: new Date(),
    }

    setUser(mockUser)
    localStorage.setItem('auth_user', JSON.stringify(mockUser))
  }

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call
    if (!name || !email || !password) {
      throw new Error('All fields are required')
    }

    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
      createdAt: new Date(),
    }

    setUser(mockUser)
    localStorage.setItem('auth_user', JSON.stringify(mockUser))
  }

  const logout = async () => {
    setUser(null)
    localStorage.removeItem('auth_user')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
        isLoggedIn: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
