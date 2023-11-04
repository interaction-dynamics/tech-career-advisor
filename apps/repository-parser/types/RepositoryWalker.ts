import Repository from './Repository'

export default class RepositoryWalker {
  repository: Repository

  constructor(repository: Repository) {
    this.repository = repository
  }

  public listOfPackageJsonFiles(): string[] {
    return []
  }

  public getFileContent(filePath: string) {
    return ''
  }
}
