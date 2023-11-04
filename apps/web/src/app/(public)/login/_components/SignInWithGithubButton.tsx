'use client'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import GithubIcon from '@/app/_components/GithubIcon'

export default function GithubButton() {
  const router = useRouter()

  return (
    <Button
      className="h-12"
      variant="secondary"
      onClick={() => router.push('/setup/profile')}
    >
      <GithubIcon className="h-5 w-5 mr-2" />
      Continue with Github
    </Button>
  )
}
