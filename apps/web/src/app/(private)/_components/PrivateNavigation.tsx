'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Repositories',
    href: '/repositories',
  },
  {
    name: 'Settings',
    href: '/settings',
  },
]

export default function PrivateNavigation() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-10 ml-20">
      {links.map(link => (
        <Link
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === link.href ? 'text-foreground' : 'text-foreground/60',
          )}
          href={link.href}
          key={link.href}
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}
