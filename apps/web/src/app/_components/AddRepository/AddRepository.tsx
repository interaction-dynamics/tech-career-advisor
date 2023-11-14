import { Suspense } from 'react'
import RealtimeSearch from '../../_components/AddRepository/_components/RealtimeSearch'

import {
  isAppInstalled,
  getInstallationLink,
} from '@/services/providers/github'
import GithubInstallation from '../../_components/AddRepository/_components/GithubInstallation'
import RepositoryList from '../../_components/AddRepository/_components/RepositoryList'

async function InstallationWrapper() {
  const url = await getInstallationLink()

  return <GithubInstallation url={url} />
}

export default async function AddRepostory() {
  const appInstalled = await isAppInstalled()

  return (
    <RealtimeSearch>
      {appInstalled ? (
        <RepositoryList />
      ) : (
        <Suspense fallback={<GithubInstallation />}>
          {/* @ts-expect-error Server Component */}
          <InstallationWrapper />
        </Suspense>
      )}
    </RealtimeSearch>
  )
}
