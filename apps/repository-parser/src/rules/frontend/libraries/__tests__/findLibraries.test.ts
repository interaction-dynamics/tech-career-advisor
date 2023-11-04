import findLibraries from '../findLibraries'
import MockRepositoryWalker from '@/__mocks__/MockRepositoryWalker.mock'
import { mockProfile } from '@/__mocks__/mockProfile.mock'
import { mockRepository } from '@/__mocks__/mockRepository.mock'
import { mockPackageJson } from '../__mocks__/mockPackageJson'

describe('findLibraries', () => {
  it('should return empty array', async () => {
    const profile = mockProfile()
    const repository = mockRepository().build()
    const repositoryWalker = new MockRepositoryWalker(repository)

    const libraries = await findLibraries(repositoryWalker)

    expect(libraries).toEqual([])
  })

  it('should return react library', async () => {
    const packageJson = mockPackageJson()
      .withDependency('react', '16.13.1')
      .build()
    const repository = mockRepository()
      .withFile('package.json', JSON.stringify(packageJson))
      .build()
    const repositoryWalker = new MockRepositoryWalker(repository)

    const libraries = await findLibraries(repositoryWalker)

    expect(libraries).toEqual([
      {
        name: 'react',
        path: 'frontend',
        metadata: {
          libraryType: 'frameworks',
          version: '16.13.1',
        },
        score: 3,
        type: 'library',
        source: 'package.json',
      },
    ])
  })

  it('should return next library', async () => {
    const packageJson = mockPackageJson()
      .withDependency('next', '16.13.1')
      .build()
    const repository = mockRepository()
      .withFile('package.json', JSON.stringify(packageJson))
      .build()
    const repositoryWalker = new MockRepositoryWalker(repository)

    const libraries = await findLibraries(repositoryWalker)

    expect(libraries).toEqual([
      {
        name: 'next',
        path: 'frontend',
        score: 3,
        type: 'library',
        source: 'package.json',
        metadata: {
          libraryType: 'ssr',
          version: '16.13.1',
        },
      },
    ])
  })
})
