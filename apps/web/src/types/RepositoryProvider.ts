interface IRepositoryProvider {
  name: string
}

interface GithubProvider extends IRepositoryProvider {
  name: 'github'
}

type RepositoryProvider = GithubProvider

export default RepositoryProvider
