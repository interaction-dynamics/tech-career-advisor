import CenterScreen from '../../../_components/CenterScreen'
import SignUpWithGithubButton from './SignUpWithGithubButton'

export default function ConnectGitProvider() {
  return (
    <CenterScreen
      title={
        <>
          Connect your
          <br />
          Git provider
        </>
      }
    >
      <div>
        <div className="flex flex-col items-stretch">
          <SignUpWithGithubButton />
        </div>
      </div>
    </CenterScreen>
  )
}
