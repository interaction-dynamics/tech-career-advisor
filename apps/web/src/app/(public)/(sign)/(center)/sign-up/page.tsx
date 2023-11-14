import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import SignUpSetup from './_components/SignUpSetup'

export default function SignUpPage() {
  const { userId } = auth()

  if (userId) {
    redirect('/dashboard')
  }

  return <SignUpSetup />
}
