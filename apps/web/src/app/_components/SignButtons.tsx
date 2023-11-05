'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SignButtons() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-3">
      {pathname !== '/login' && (
        <Button variant="outline" asChild>
          <Link href="/login">Log in</Link>
        </Button>
      )}
      {pathname !== '/sign-up' && (
        <Button variant={pathname === '/login' ? 'outline' : 'default'}>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      )}
    </div>
  )
}
