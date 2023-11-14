'use client'
import { useClerk, useSignIn, useSignUp } from '@clerk/clerk-react'
import AuthenticateWithRedirectCallbackComponent from './_components/AuthenticateWithRedirectCallbackComponent'
import { useEffect } from 'react'

// https://clerk.com/docs/custom-flows/oauth-connections#o-auth-account-transfer-flow
const useTransferFlow = (signUp: ReturnType<typeof useSignUp>['signUp']) => {
  const { signIn } = useSignIn()

  const { setActive } = useClerk()

  useEffect(() => {
    // If the user has an account in your application, but does not yet
    // have an oauth account connected, you can use the transfer method to
    // forward that information.
    const callback = async () => {
      const userExistsButNeedsToSignIn =
        signUp?.verifications?.externalAccount?.status === 'transferable' &&
        signUp?.verifications?.externalAccount?.error?.code ===
          'external_account_exists'

      if (userExistsButNeedsToSignIn) {
        const res = await signIn.create({ transfer: true })
        if (res.status === 'complete') {
          setActive({ session: res.createdSessionId })
        }
      }

      // If the user has an existing oauth account but does not yet exist as
      // a user in your app, you can use the transfer method to forward that
      // information.

      const userNeedsToBeCreated =
        signIn.firstFactorVerification.status === 'transferable'

      if (userNeedsToBeCreated) {
        const res = await signUp.create({
          transfer: true,
        })
        if (res.status === 'complete') {
          setActive({ session: res.createdSessionId })
        }
      }
    }

    callback().then(() => {})
  }, [signUp?.verifications, setActive, signIn, signUp])
}

export default async function SSOCallback() {
  // Get sign-in and sign-up objects in the OAuth callback page
  const { signUp } = useSignUp()

  useTransferFlow(signUp)

  if (!signUp?.verifications) {
    return <></>
  }
  // Handle the redirect flow by rendering the
  // prebuilt AuthenticateWithRedirectCallback component.
  // This is the final step in the custom OAuth flow
  return <AuthenticateWithRedirectCallbackComponent />
}
