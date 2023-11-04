'use client'
import { Separator } from '@/components/ui/separator'

import { usePathname } from 'next/navigation'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import Logo from '@/app/_components/Logo'

const links = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  // {
  //   name: 'Repositories',
  //   href: '/repositories',
  // },
]

export interface PublicHeaderProps {
  navigation?: React.ReactNode
  actions?: React.ReactNode
}

export default function PublicHeader({
  navigation,
  actions,
}: PublicHeaderProps) {
  const pathname = usePathname()

  return (
    <div>
      <header className="py-4 px-5">
        <MaxWidthContainer className="max-w-screen-2xl flex">
          <Logo />
          {navigation}
          <div className="flex-1" />
          {actions}
        </MaxWidthContainer>
      </header>
      <Separator />
    </div>
  )
}
