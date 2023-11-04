import Paddings from '@/app/_components/Paddings'

export interface MaxWidthContainerProps {
  children: React.ReactNode
}

export default function MaxWidthContainer({
  children,
}: MaxWidthContainerProps) {
  return <Paddings className="m-auto max-w-screen-xl">{children}</Paddings>
}
