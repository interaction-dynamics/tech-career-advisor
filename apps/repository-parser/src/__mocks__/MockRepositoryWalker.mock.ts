import Repository from '../../types/Repository'
import RepositoryWalker from '../../types/RepositoryWalker'

export interface MemoryRepository extends Repository {
  files: string[]
  fileContents: { [key: string]: string }
}

export default class MockRepositoryWalker extends RepositoryWalker {
  files: string[]
  fileContents: { [key: string]: string }

  constructor(repository: MemoryRepository) {
    super(repository)
    this.files = repository.files
    this.fileContents = repository.fileContents
  }

  public listOfPackageJsonFiles() {
    return this.files.filter(file => file.endsWith('package.json'))
  }

  public getFileContent(filePath: string) {
    return this.fileContents[filePath]
  }
}
