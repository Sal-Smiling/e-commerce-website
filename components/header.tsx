'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Moon, Sun, ShoppingCart, User, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/navigation'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { itemCount } = useCart()
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleLogout = () => {
    logout()
    router.push('/')
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <span className="hidden sm:inline">Steav-calture</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-sm font-medium hover:text-accent transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {isMounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden sm:flex"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}

            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount > 9 ? '9+' : itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {user ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                title="Sign out"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="ghost" size="icon" title="Sign in">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4 space-y-2">
            <Link
              href="/shop"
              className="block px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
            >
              Contact
            </Link>
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
                setIsOpen(false)
              }}
              className="w-full text-left px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium flex items-center gap-2"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            {user && (
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium flex items-center gap-2 text-accent"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            )}
            {!user && (
              <>
                <Link
                  href="/login"
                  className="block px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium text-accent font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}
