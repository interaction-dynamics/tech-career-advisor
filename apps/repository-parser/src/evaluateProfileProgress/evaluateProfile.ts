import Feature from '../../types/Feature'
import Profile from '../../types/Profile'

const evaluateProfileProgress = (profile: Profile, features: Feature[]) => {
  return {
    progress: 0.2,
    uncertainty: 0.1,
  }
}

export default evaluateProfileProgress
