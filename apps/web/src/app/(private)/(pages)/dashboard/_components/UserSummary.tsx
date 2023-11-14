import CircularProgressBar from '@/app/(private)/(pages)/dashboard/_components/CircularProgressBar'
import { Separator } from '@/components/ui/separator'
import MaxWidthContainer from '../../../_components/MaxWidthContainer'

export default function UserSummary() {
  return (
    <div className="">
      <MaxWidthContainer>
        <div className="flex items-center pt-5 pb-10">
          <div className="flex-1">
            <h2 className="font-semibold text-4xl text-foreground">
              Thibault Friedrich
            </h2>
            <h3 className="font-normal text-xl text-muted-foreground">
              Junior Frontend Developer
            </h3>
          </div>
          <CircularProgressBar percent={20} className="w-32 h-32" />
        </div>
      </MaxWidthContainer>
      <Separator />
    </div>
  )
}
