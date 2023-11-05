import { title } from '@/app/_components/Logo'
import SignInWithGithubButton from './_components/SignInWithGithubButton'
import CenterScreen from '../_components/CenterScreen'

export default function LoginPage() {
  return (
    <CenterScreen title={`Log in to ${title}`}>
      <SignInWithGithubButton />
    </CenterScreen>
  )
}
