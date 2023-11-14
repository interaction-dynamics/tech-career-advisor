'use client'

import { Button } from '@/components/ui/button'
import RadioButton from './RadioButton'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const profiles = [
  {
    path: 'frontend/junior',
    name: 'Junior frontend developer',
    description:
      'Entry-level developer that works to improve the appearance of a website.',
  },
  {
    path: 'frontend/middle',
    name: 'Middle-level frontend developer',
    description: 'Autonomous developer who can work on a project from A to Z.',
  },
  {
    path: 'frontend/senior',
    name: 'Senior frontend developer',
    description:
      'Highly experienced developer in charge of architecture decision, guarantor of good practices and who helps other developers.',
  },
]

export interface Props {
  onClick: (path: string) => void
}

export default function SelectProfile({ onClick }: Props) {
  const [selectedProfilePath, setSelectedProfilePath] = useState('')

  return (
    <div>
      <div className="flex flex-col items-stretch gap-3">
        <div className="flex-[1_1_100%] flex flex-col items-stretch gap-3">
          {profiles.map(profile => (
            <Button
              variant="outline"
              className={cn(
                'flex-1 min-h-[5rem] py-4 px-4 outline-none cursor-pointer',
                selectedProfilePath === profile.path
                  ? 'border-blue-600/60'
                  : 'border-input',
              )}
              key={profile.path}
              onClick={() =>
                selectedProfilePath === profile.path
                  ? setSelectedProfilePath('')
                  : setSelectedProfilePath(profile.path)
              }
              asChild
            >
              <div>
                <div className="w-full flex-[1_1_100%] flex items-center select-none">
                  <div className="flex-[1_1_100%] text-left font-light text-md">
                    <div className="font-normal">{profile.name}</div>
                    <div className="text-foreground/60 whitespace-break-spaces pt-1">
                      {profile.description}
                    </div>
                  </div>
                  <div className="flex-auto pl-3">
                    <RadioButton
                      checked={profile.path === selectedProfilePath}
                    />
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
      <div className="pt-10 flex flex-col items-stretch">
        <Button
          className={cn(
            'py-5',
            selectedProfilePath ? '' : 'cursor-auto opacity-80',
          )}
          variant={selectedProfilePath ? 'default' : 'disabled'}
          disabled={!selectedProfilePath}
          onClick={() => selectedProfilePath && onClick(selectedProfilePath)}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
