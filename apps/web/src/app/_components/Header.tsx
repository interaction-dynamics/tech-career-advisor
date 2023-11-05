import { auth } from '@clerk/nextjs'

import { Separator } from '@/components/ui/separator'

import Logo from '@/app/_components/Logo'
import { cn } from '@/lib/utils'
import Paddings from './Paddings'
import UserAvatar from './UserAvatar'
import { Suspense } from 'react'
import SignButtons from './SignButtons'

export interface HeaderProps {
  navigation?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

async function HeaderActions() {
  const { userId } = auth()

  if (userId) {
    // Query DB for user specific information or display assets only to logged in users
  }
  return userId ? <UserAvatar /> : <SignButtons />
}

export default function Header({
  navigation,
  actions,
  className,
}: HeaderProps) {
  return (
    <div>
      <header className="py-4 px-5">
        <Paddings className={cn('flex items-center', className)}>
          <Logo />
          {navigation}
          <div className="flex-1" />
          {actions}
          <Suspense fallback={<>loading...</>}>
            {/* @ts-expect-error Server Component */}
            <HeaderActions />
          </Suspense>
        </Paddings>
      </header>
      <Separator />
    </div>
  )
}
