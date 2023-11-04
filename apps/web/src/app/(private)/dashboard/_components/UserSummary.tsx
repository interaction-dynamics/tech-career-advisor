import CircularProgressBar from '@/app/(private)/dashboard/_components/CircularProgressBar'
import { Separator } from '@/components/ui/separator'
import MaxWidthContainer from '../../_components/MaxWidthContainer'

export default function UserSummary() {
  return (
    <div className="py-10">
      <MaxWidthContainer>
        <div className="flex items-center pb-5">
          <div className="flex-1">
            <h2 className="font-semibold text-4xl text-foreground">
              Thibault Friedrich
            </h2>
            <h2 className="font-normal text-xl text-muted-foreground">
              Junior Frontend Developer
            </h2>
          </div>
          <CircularProgressBar percent={20} className="w-32 h-32" />
        </div>
      </MaxWidthContainer>
      <Separator />
    </div>
  )
}
