import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import { title } from '@/app/_components/Logo'
import SignUpWithGithubButton from './_components/SignUpWithGithubButton'
import CenterScreen from '../_components/CenterScreen'

export default function SignUpPage() {
  const { userId } = auth()

  if (userId) {
    redirect('/dashboard')
  }

  return (
    <CenterScreen title={`Sign up to ${title}`}>
      <SignUpWithGithubButton />
    </CenterScreen>
  )
}
