'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import RadioButton from './RadioButton'
import Link from 'next/link'

const profiles = [
  {
    path: 'frontend/junior',
    name: 'Junior frontend developer',
    description:
      'A junior front-end web developer is an entry-level employee that works with other developers to improve the appearance of a website. Some of the elements they must review thoroughly include text, imagery and the implementation of the design.',
  },
  {
    path: 'frontend/middle',
    name: 'Middle-level frontend developer',
    description:
      'Front end developers implement the visual and audio elements of a web design and include them in a web format. They build web products and develop user experiences. Typically, these professionals work in office settings with back end developers, who implement the elements of web products that cannot be seen by users.',
  },
  {
    path: 'frontend/senior',
    name: 'Senior frontend developer',
    description:
      'Senior front-end developers work on building the user interface of a mobile application or website. They take over the entire development workflow process by composing terms of references and technical specifications. Likewise, seniors are also counted on for defining calculated risks with projects, especially those with a high budget.',
  },
]

export default function ProfileSelector() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const select = searchParams.get('select')

  return (
    <div>
      <div className="flex flex-col items-stretch gap-3">
        <div className="flex-[1_1_100%] flex flex-col items-stretch gap-3">
          {profiles.map(profile => (
            <Button
              variant={profile.path === select ? 'secondary' : 'outline'}
              className="flex-1 min-h-[5rem] py-5 px-4 outline-none"
              key={profile.path}
              onClick={() => router.push(`${pathname}?select=${profile.path}`)}
              asChild
            >
              <div>
                <div className="flex items-start">
                  <div className="flex-auto pr-3 pt-3">
                    <RadioButton checked={profile.path === select} />
                  </div>

                  <div>
                    <div className="text-left text-xl">{profile.name}</div>
                    <div className="text-left text-sm text-foreground/60 whitespace-break-spaces pt-2">
                      {profile.description}
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
      <div className="pt-5 flex justify-end h-20">
        {select && (
          <Button asChild>
            <Link href="/setup/repositories">Confirm</Link>
          </Button>
        )}
      </div>
    </div>
  )
}
