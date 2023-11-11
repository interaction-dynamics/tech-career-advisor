import {
  isAppInstalled,
  getInstallationLink,
} from '@/services/providers/github'
import RepositoryList from './RepositoryList'
import { mockRepositories } from '@/__mocks__/mockRepositories.mock'
import GithubInstallation from './GithubInstallation'
import { Suspense } from 'react'
import { INSTALLATION_MESSAGE } from '../../install-callback/page'
import WindowActionDetector from '@/app/(public)/_components/WindowActionDetector'

const repositories = mockRepositories()

async function InstallationWrapper() {
  const url = await getInstallationLink()

  return <GithubInstallation url={url} />
}

async function GithubRepositoryList() {
  const appInstalled = await isAppInstalled()

  console.log('rendering GithubRepositoryList', appInstalled)

  return (
    <>
      {appInstalled ? (
        <RepositoryList repositories={repositories} />
      ) : (
        <Suspense fallback={<GithubInstallation />}>
          {/* @ts-expect-error Server Component */}
          <InstallationWrapper />
        </Suspense>
      )}
    </>
  )
}

export default async function ActualizedGithubRepositoryList() {
  return (
    <WindowActionDetector eventName={INSTALLATION_MESSAGE}>
      {/* @ts-expect-error Server Component */}
      <GithubRepositoryList />
    </WindowActionDetector>
  )
}
