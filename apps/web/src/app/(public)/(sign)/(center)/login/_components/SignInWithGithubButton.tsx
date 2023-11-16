'use client'

import { Button } from '@/components/ui/button'
import GithubIcon from '@/app/_components/GithubIcon'
import openWindow from '@/app/_utils/openWindow'
import { useMessages } from '@/lib/tabsMessages'
import { LOGIN_MESSAGE } from '../../../window/logged-in-callback/page'
import { useClerk } from '@clerk/clerk-react'
import { useRouter } from 'next/navigation'

export default function GithubButton() {
  // https://clerk.com/docs/custom-flows/oauth-connections
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    openWindow({ url: '/window/init/login', title: 'Login' })
  }

  const { client } = useClerk()
  const router = useRouter()

  useMessages(LOGIN_MESSAGE, () => {
    client.clearCache()
    setTimeout(() => {
      router.push('/dashboard')
    }, 500)
  })

  return (
    <form onClick={submit} onSubmit={submit}>
      <Button className="h-12 w-full" variant="secondary">
        <GithubIcon className="h-5 w-5 mr-2" />
        Continue with Github
      </Button>
    </form>
  )
}
