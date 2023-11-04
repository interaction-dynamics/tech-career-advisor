import Profile from '../types/Profile'
import RepositoryWalker from '../types/RepositoryWalker'
import allRules from './rules'
import evaluateProfileProgress from './evaluateProfileProgress'

export const parse = async (
  profile: Profile,
  repositoryWalker: RepositoryWalker,
) => {
  const profileName = profile.name as keyof typeof allRules
  const rules = allRules[profileName]

  const featuresByRule = await Promise.all(
    rules?.map(rule => rule(repositoryWalker)) ?? [],
  )

  const features = featuresByRule.flatMap(p => p)

  const { progress, uncertainty } = evaluateProfileProgress(profile, features)

  return {
    features,
    progress,
    uncertainty,
  }
}
