import CenterScreen from '../../../_components/CenterScreen'
import SelectProfile from './SelectProfile'

export interface Props {
  onClick: (path: string) => void
}

export default function CreateAccount({ onClick }: Props) {
  return (
    <CenterScreen
      title={
        <>
          Create your
          <br />
          Account
        </>
      }
    >
      <h3 className="text-md font-semibold">Select your target role</h3>
      <p className="pb-5 text-sm font-light text-foreground/60">
        Your code will be analyzed to check if it matches the role you are
        targeting.
      </p>
      <SelectProfile onClick={onClick} />
    </CenterScreen>
  )
}
