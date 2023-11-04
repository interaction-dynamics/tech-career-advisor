import { title } from '@/app/_components/Logo'
import SignInWithGithubButton from './_components/SignInWithGithubButton'

export default function LoginPage() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center leading-relaxed	">
        Log in to {title}
      </h2>
      <div className="pt-15 flex flex-col items-stretch">
        <SignInWithGithubButton />
      </div>
    </>
  )
}
