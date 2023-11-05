'use client'
import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react'

function SSOCallback() {
  // Handle the redirect flow by rendering the
  // prebuilt AuthenticateWithRedirectCallback component.
  // This is the final step in the custom OAuth flow
  return <AuthenticateWithRedirectCallback />
}
