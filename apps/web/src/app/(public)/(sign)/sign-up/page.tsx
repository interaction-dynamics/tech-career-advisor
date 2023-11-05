import { title } from '@/app/_components/Logo'
import SignUpWithGithubButton from './_components/SignUpWithGithubButton'
import CenterScreen from '../_components/CenterScreen'

export default function LoginPage() {
  return (
    <CenterScreen title={`Sign up to ${title}`}>
      <SignUpWithGithubButton />
    </CenterScreen>
  )
}
