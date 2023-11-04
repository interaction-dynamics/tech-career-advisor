import { parse } from '../parser'
import MockRepositoryWalker from '@/__mocks__/MockRepositoryWalker.mock'
import { mockProfile } from '@/__mocks__/mockProfile.mock'
import { mockRepository } from '@/__mocks__/mockRepository.mock'
import { mockPackageJson } from '@/rules/frontend/libraries/__mocks__/mockPackageJson'

describe('parse', () => {
  describe('features', () => {
    it('should return empty array', async () => {
      const profile = mockProfile()
      const repository = mockRepository().build()
      const repositoryWalker = new MockRepositoryWalker(repository)

      const { features } = await parse(profile, repositoryWalker)

      expect(features).toEqual([])
    })

    it('should return including react', async () => {
      const profile = mockProfile()
      const packageJson = mockPackageJson()
        .withDependency('next', '16.13.1')
        .withDependency('react', '^13.4.7')
        .build()
      const repository = mockRepository()
        .withFile('package.json', JSON.stringify(packageJson))
        .build()

      const repositoryWalker = new MockRepositoryWalker(repository)

      const { features } = await parse(profile, repositoryWalker)

      expect(features).toEqual([
        {
          metadata: {
            libraryType: 'ssr',
            version: '16.13.1',
          },
          name: 'next',
          path: 'frontend',
          score: 3,
          source: 'package.json',
          type: 'library',
        },
        {
          metadata: {
            libraryType: 'frameworks',
            version: '^13.4.7',
          },
          type: 'library',
          name: 'react',
          score: 3,
          path: 'frontend',
          source: 'package.json',
        },
      ])
    })
  })
})
