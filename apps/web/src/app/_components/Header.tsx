'use client'
import { Separator } from '@/components/ui/separator'

import Logo from '@/app/_components/Logo'
import { cn } from '@/lib/utils'
import Paddings from './Paddings'

export interface HeaderProps {
  navigation?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

export default function Header({
  navigation,
  actions,
  className,
}: HeaderProps) {
  return (
    <div>
      <header className="py-4 px-5">
        <Paddings className={cn('flex', className)}>
          <Logo />
          {navigation}
          <div className="flex-1" />
          {actions}
        </Paddings>
      </header>
      <Separator />
    </div>
  )
}
