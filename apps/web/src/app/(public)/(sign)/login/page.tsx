import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import { title } from '@/app/_components/Logo'
import SignInWithGithubButton from './_components/SignInWithGithubButton'
import CenterScreen from '../_components/CenterScreen'

export default function LoginPage() {
  const { userId } = auth()

  if (userId) {
    redirect('/dashboard')
  }

  return (
    <CenterScreen title={`Log in to ${title}`}>
      <SignInWithGithubButton />
    </CenterScreen>
  )
}
