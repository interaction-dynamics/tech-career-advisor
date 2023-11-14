'use client'
import { useSignUp } from '@clerk/nextjs'

import { useEffect } from 'react'

export default function SignUpInitPage() {
  const { signUp } = useSignUp()

  useEffect(() => {
    const init = async () => {
      await signUp.authenticateWithRedirect({
        strategy: 'oauth_github',
        redirectUrl: '/window/sso-callback',
        redirectUrlComplete: '/window/signed-up-callback',
      })
    }

    init().then(() => {})
  }, [signUp])

  return <div className="fixed inset-0 bg-background" />
}
