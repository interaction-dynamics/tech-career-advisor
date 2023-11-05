import Link from 'next/link'

import Paddings from '@/app/_components/Paddings'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="pt-20 min-h-screen">
      <Paddings className="m-auto max-w-screen-lg">
        <Button asChild>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </Paddings>
    </div>
  )
}
