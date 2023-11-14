'use client'
import { useSignIn } from '@clerk/nextjs'

import { useEffect } from 'react'

export default function LoginInitPage() {
  const { signIn } = useSignIn()

  useEffect(() => {
    const init = async () => {
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_github',
        redirectUrl: '/window/sso-callback',
        redirectUrlComplete: '/window/logged-in-callback',
      })
    }

    init().then(() => {})
  }, [signIn])

  return <div className="fixed inset-0 bg-background" />
}
