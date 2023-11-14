import {
  isAppInstalled,
  getInstallationLink,
  getRepositories,
} from '@/services/providers/github'
import RepositoryList from './RepositoryList'
import { mockRepositories } from '@/__mocks__/mockRepositories.mock'
import GithubInstallation from '../../../../../_components/AddRepository/_components/GithubInstallation'
import { Suspense } from 'react'
import { INSTALLATION_MESSAGE } from '../../../window/installed-callback/page'
import RealtimeSearch from '../../../../../_components/AddRepository/_components/RealtimeSearch'
import RealtimeRepositoryList from './RealtimeRepositoryList'
import WindowActionDetector from '@/app/(public)/_components/WindowActionDetector'
import { eventNames } from 'process'

const repositories = mockRepositories()

async function RepositoryListWrapper() {
  const repositories = await getRepositories('')

  return repositories.length ? (
    <RepositoryList repositories={repositories} />
  ) : (
    <div className="flex-1 flex items-center justify-center text-sm">
      <div className="text-foreground">No Results Found</div>
      <div className="text-muted-foreground"></div>
    </div>
  )
}

async function InstallationWrapper() {
  const url = await getInstallationLink()

  return <GithubInstallation url={url} />
}

export default async function GithubRepositoryList() {
  const appInstalled = await isAppInstalled()

  return (
    <WindowActionDetector eventName={INSTALLATION_MESSAGE}>
      <RealtimeSearch>
        {appInstalled ? (
          <RealtimeRepositoryList />
        ) : (
          <div className="rounded-md border ">
            <Suspense fallback={<GithubInstallation />}>
              {/* @ts-expect-error Server Component */}
              <InstallationWrapper />
            </Suspense>
          </div>
        )}
      </RealtimeSearch>
    </WindowActionDetector>
  )
}
