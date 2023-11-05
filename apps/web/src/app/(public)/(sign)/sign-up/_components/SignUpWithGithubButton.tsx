'use client'
import { useRouter } from 'next/navigation'
import { useSignUp } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'
import GithubIcon from '@/app/_components/GithubIcon'

export default function GithubButton() {
  const router = useRouter()
  const { isLoaded, signUp, setActive } = useSignUp()

  // https://clerk.com/docs/custom-flows/oauth-connections
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await signUp.authenticateWithRedirect({
      strategy: 'oauth_github',
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/setup/profile',
    })
  }

  return (
    <form onClick={submit}>
      <Button className="h-12" variant="secondary" type="submit">
        <GithubIcon className="h-5 w-5 mr-2" />
        Continue with Github
      </Button>
    </form>
  )
}
