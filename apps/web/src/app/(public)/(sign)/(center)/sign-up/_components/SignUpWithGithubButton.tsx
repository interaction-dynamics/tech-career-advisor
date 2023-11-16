'use client'
import { useClerk } from '@clerk/clerk-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import GithubIcon from '@/app/_components/GithubIcon'
import openWindow from '@/app/_utils/openWindow'
import { useMessages } from '@/lib/tabsMessages'
import { SIGN_UP_MESSAGE } from '../../../window/signed-up-callback/page'

export default function SignUpWithGithubButton() {
  // https://clerk.com/docs/custom-flows/oauth-connections
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    openWindow({ url: '/window/init/sign-up', title: 'Sign Up' })
  }

  const { client } = useClerk()
  const router = useRouter()

  useMessages(SIGN_UP_MESSAGE, () => {
    client.clearCache()
    setTimeout(() => {
      router.push('/setup/repositories')
    }, 500)
  })

  return (
    <form onClick={submit}>
      <Button className="h-12 w-full" variant="secondary" type="submit">
        <GithubIcon className="h-5 w-5 mr-2" />
        Continue with Github
      </Button>
    </form>
  )
}
