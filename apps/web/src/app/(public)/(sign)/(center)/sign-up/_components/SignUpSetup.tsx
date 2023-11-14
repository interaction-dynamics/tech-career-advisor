'use client'

import { useState } from 'react'
import CreateAccount from './CreateAccount'
import ConnectGitProvider from './ConnectGitProvider'

export default function SignUpSetup() {
  const [selectedProfilePath, setSelectedProfilePath] = useState('')

  return (
    <div>
      <div className="max-w-lg m-auto">
        {selectedProfilePath ? (
          <ConnectGitProvider />
        ) : (
          <CreateAccount onClick={setSelectedProfilePath} />
        )}
      </div>
    </div>
  )
}
