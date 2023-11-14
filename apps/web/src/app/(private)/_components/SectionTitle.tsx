import Paddings from '@/app/_components/Paddings'
import { Separator } from '@/components/ui/separator'

export interface Props {
  title: string
  children?: React.ReactNode
}

export default function SectionTitle({ title, children }: Props) {
  return (
    <div>
      <Paddings className="m-auto max-w-screen-xl">
        <div className="flex items-center pt-5 pb-10">
          <div className="flex-1">
            <h2 className="font-semibold text-4xl text-foreground">{title}</h2>
          </div>
          {children}
        </div>
      </Paddings>
      <Separator />
    </div>
  )
}
