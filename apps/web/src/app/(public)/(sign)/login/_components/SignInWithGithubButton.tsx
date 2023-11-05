'use client'
import { useRouter } from 'next/navigation'
import { useSignIn } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import GithubIcon from '@/app/_components/GithubIcon'

export default function GithubButton() {
  const router = useRouter()
  const { isLoaded, signIn, setActive } = useSignIn()

  // https://clerk.com/docs/custom-flows/oauth-connections
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await signIn.authenticateWithRedirect({
      strategy: 'oauth_github',
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/dashboard',
    })
  }

  return (
    <form onClick={submit} onSubmit={submit}>
      <Button className="h-12" variant="secondary">
        <GithubIcon className="h-5 w-5 mr-2" />
        Continue with Github
      </Button>
    </form>
  )
}
