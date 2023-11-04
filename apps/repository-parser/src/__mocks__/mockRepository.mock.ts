import { MemoryRepository } from './MockRepositoryWalker.mock'

class RepositoryMocker {
  repository: MemoryRepository
  constructor(repository: MemoryRepository) {
    this.repository = repository
  }

  withFile(filename: string, content: string) {
    this.repository.files.push(filename)
    this.repository.fileContents[filename] = content
    return this
  }

  build() {
    return this.repository
  }
}

export const mockEmptyRepository = (): MemoryRepository => ({
  name: 'foo',
  url: 'http://foo.com',
  files: [],
  fileContents: {},
})

export const mockRepository = () => new RepositoryMocker(mockEmptyRepository())
