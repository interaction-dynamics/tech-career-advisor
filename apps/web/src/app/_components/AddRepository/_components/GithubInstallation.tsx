'use client'
import { Button } from '@/components/ui/button'
import GithubIcon from '@/app/_components/GithubIcon'
import openWindow from '@/app/(public)/_utils/openWindow'

export interface Props {
  url?: string
}

export default function GithubInstallation({ url }: Props) {
  return (
    <div className="rounded-md border flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="text-sm mb-8">
          Install the GitHub application for the accounts you wish to Import
          from to continue
        </p>
        <Button
          onClick={() => openWindow({ url, title: 'Install Github App' })}
        >
          <GithubIcon className="h-5 w-5 mr-2" />
          Install
        </Button>
      </div>
    </div>
  )
}
