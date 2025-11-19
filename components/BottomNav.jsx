'use client'

import { Home, Search, ShoppingBag, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const BottomNav = () => {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', icon: <Home size={24} />, href: '/' },
    { label: 'Shop', icon: <ShoppingBag size={24} />, href: '/shop' },
    { label: 'Cart', icon: <ShoppingCart size={24} />, href: '/cart' },
    { label: 'Account', icon: <User size={24} />, href: '/account' },
  ]

  return (
    <div className="fixed bottom-0 left-0 w-full sm:hidden z-50 bg-white border-t border-gray-200 shadow-xl">
      <div className="flex justify-around items-center py-3 px-2 relative">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href

          return (
            <Link key={index} href={item.href} className="flex flex-col items-center relative w-16">
              
              {/* Animated Background */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-bg"
                    className="absolute -top-2 w-12 h-12 rounded-full bg-green-100 shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <motion.div
                animate={{ y: isActive ? -4 : 0, scale: isActive ? 1.2 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full`}
              >
                <div className={`${isActive ? 'text-green-600' : 'text-gray-500'}`}>
                  {item.icon}
                </div>
              </motion.div>

              {/* Label */}
              <span className={`mt-1 text-xs font-medium ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default BottomNav
