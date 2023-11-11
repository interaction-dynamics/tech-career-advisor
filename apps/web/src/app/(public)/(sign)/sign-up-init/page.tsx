'use client'
import { useSignIn, useSignUp } from '@clerk/nextjs'

import { useEffect } from 'react'

export default function SignUpInitPage() {
  const { signUp } = useSignUp()

  useEffect(() => {
    const init = async () => {
      await signUp.authenticateWithRedirect({
        strategy: 'oauth_github',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/sign-up-callback',
      })
    }

    init().then(() => {})
  }, [signUp])

  return <div className="fixed inset-0 bg-background" />
}
