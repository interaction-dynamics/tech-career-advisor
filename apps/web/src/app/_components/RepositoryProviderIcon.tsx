import RepositoryProvider from '@/types/RepositoryProvider'

import Github from './GithubIcon'

export interface RepositoryProviderIconProps {
  className?: string
  providerName: RepositoryProvider['name']
}

const providerIcons = {
  ['github']: Github,
}

export default function RepositoryProviderIcon({
  providerName,
  className,
}: RepositoryProviderIconProps) {
  const Icon = providerIcons[providerName]
  return <Icon className={className} />
}
