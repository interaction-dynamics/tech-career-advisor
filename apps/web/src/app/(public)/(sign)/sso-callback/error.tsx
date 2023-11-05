'use client'

import CenterScreen from '../_components/CenterScreen'

export default function SsoCallbackErrorPage() {
  return (
    <CenterScreen title="Error">
      It seems you tried to sign up while you already have an account or to sign
      in without any account.
    </CenterScreen>
  )
}
