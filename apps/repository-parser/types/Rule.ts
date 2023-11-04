import RepositoryWalker from './RepositoryWalker'
import Feature from './Feature'

type Rule = (repositoryWalker: RepositoryWalker) => Promise<Feature[]>

export default Rule
