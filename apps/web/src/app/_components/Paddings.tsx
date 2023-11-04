import { cn } from '@/lib/utils'

export interface PaddingsProps {
  children: React.ReactNode
  className?: string
}

export default function Paddings({ children, className }: PaddingsProps) {
  return <div className={cn('px-3 md:px-10', className)}>{children}</div>
}
