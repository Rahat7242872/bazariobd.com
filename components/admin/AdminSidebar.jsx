'use client'

import { usePathname } from "next/navigation"
import {
  HomeIcon,
  ListIcon,
  ListOrderedIcon,
  PersonStandingIcon,
  ShieldCheckIcon,
  ShoppingCart,
  Store,
  StoreIcon,
  TicketPercentIcon
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { assets } from "@/assets/assets"
import { motion } from "framer-motion"

const AdminSidebar = () => {

  const pathname = usePathname()

  const sidebarLinks = [
    { name: 'Dashboard', href: '/admin', icon: HomeIcon },
    { name: 'Orders', href: '/admin/orders', icon: ListOrderedIcon },
    { name: 'Products', href: '/admin/products', icon: ShoppingCart },
    { name: 'Customers', href: '/admin/customer', icon: PersonStandingIcon },
    { name: 'Categories', href: '/admin/categoris', icon: ListIcon },
    { name: 'Stores', href: '/admin/stores', icon: StoreIcon },
    { name: 'Store Management', href: '/admin/stores/manage', icon: Store },
    { name: 'Reports', href: '/admin/reports', icon: Store },
    { name: 'Approve Store', href: '/admin/approve', icon: ShieldCheckIcon },
    { name: 'Coupons', href: '/admin/coupons', icon: TicketPercentIcon },
  ]

  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: .4, ease: "easeOut" }}
      className="inline-flex h-full flex-col gap-5 border-r border-slate-200 bg-white shadow-sm sm:min-w-60"
    >

      {/* Logo & User */}
      <div className="flex flex-col gap-3 justify-center items-center pt-8 max-sm:hidden">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: .1, duration: .3 }}
        >
          <Image
            className="w-14 h-14 rounded-full shadow"
            src={assets.gs_logo}
            alt=""
            width={80}
            height={80}
          />
        </motion.div>
        <p className="text-slate-700 font-medium">Hi, GreatStack</p>
      </div>

      {/* Sidebar Links */}
      <div className="mt-4 mb-4">
        {
          sidebarLinks.map((link, index) => {
            const isActive = pathname === link.href

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  href={link.href}
                  className={`
                      group relative flex items-center gap-3 px-4 py-2.5 my-1
                      rounded-md transition-all duration-200
                      text-sm font-medium
                      ${isActive ? "bg-green-50 text-green-700" : "text-slate-600 hover:bg-slate-50"}
                    `}
                >
                  <link.icon
                    size={18}
                    className={`min-w-5 transition
                      ${isActive ? "text-green-600" : "text-slate-500 group-hover:text-slate-700"}
                    `}
                  />

                  <p className="max-sm:hidden">{link.name}</p>

                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.span
                      layoutId="sidebar-active"
                      className="absolute right-0 top-1 bottom-1 w-1.5 bg-green-500 rounded-l-full"
                    />
                  )}
                </Link>
              </motion.div>
            )
          })
        }
      </div>

    </motion.div>
  )
}

export default AdminSidebar
