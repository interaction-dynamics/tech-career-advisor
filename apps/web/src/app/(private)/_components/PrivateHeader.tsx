'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Header from '@/app/_components/Header'
import UserAvatar from '@/app/_components/UserAvatar'

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

export interface PrivateHeaderProps {
  className?: string
}

export default function PrivateHeader({ className }: PrivateHeaderProps) {
  const pathname = usePathname()

  return (
    <div className="bg-background">
      <Header
        className="m-auto max-w-screen-2xl"
        actions={<UserAvatar />}
        navigation={
          <div className="flex gap-10 ml-20">
            {links.map(link => (
              <Link
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === link.href
                    ? 'text-foreground'
                    : 'text-foreground/60',
                )}
                href={link.href}
                key={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        }
      />
    </div>
  )
}
