import Repository from '@/types/Repository'
import RepositoryProviderIcon from '@/app/_components/RepositoryProviderIcon'
import ImportRepositoryButton from './ImportRepositoryButton'
import { Fragment } from 'react'
import { Separator } from '@/components/ui/separator'

export interface RepositoryListProps {
  repositories: Repository[]
}

export default function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="flex-1 flex flex-col items-stretch">
      {repositories.map((repository, index) => (
        <Fragment key={repository.url}>
          {index !== 0 && <Separator />}
          <div className="flex-1 flex items-center px-3 py-2">
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
