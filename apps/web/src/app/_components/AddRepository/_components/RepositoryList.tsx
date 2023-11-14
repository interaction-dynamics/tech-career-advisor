'use client'
import Repository from '@/types/Repository'
import RepositoryProviderIcon from '@/app/_components/RepositoryProviderIcon'
import ImportRepositoryButton from './ImportRepositoryButton'
import { Fragment, useContext } from 'react'
import { Separator } from '@/components/ui/separator'
import Spinner from '@/app/_components/Spinner'
import RealtimeSearchContext from '../_contexts/RealtimeSearchContext'

export default function RepositoryList() {
  const { repositories, isLoading } = useContext(RealtimeSearchContext)

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center text-sm text-muted-foreground">
        <div className="flex items-center">
          <Spinner className="h-5 w-5 text-white" />
          <div className="pl-2">loading results...</div>
        </div>
      </div>
    )
  }

  if (repositories.length === 0) {
    return (
      <div className="rounded-md border flex-1 flex items-center justify-center text-sm bg-input">
        <div className="text-foreground">No Results Found</div>
        <div className="text-muted-foreground"></div>
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      {repositories.map((repository, index) => (
        <Fragment key={repository.url}>
          {index !== 0 && <Separator />}
          <div className="h-[56px] flex items-center px-3 py-2">
            <RepositoryProviderIcon
              providerName={repository.provider}
              className="h-5 w-5"
            />
            <div className="pl-3 flex-1 text-sm font-normal">
              {repository.name}
            </div>
            <div>
              <div className="text-right">
                <ImportRepositoryButton />
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  )
}
