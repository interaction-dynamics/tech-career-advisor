import Feature from '../../../../types/Feature'
import RepositoryWalker from '../../../../types/RepositoryWalker'

import librariesList from './librariesList'

const simpleLibrariesList = Object.values(librariesList).flat()

const findLibrary = (
  libraryName: string,
  libraryVersion: string,
  filename: string,
): Feature | null => {
  const library = librariesList.find(l => l.name === libraryName)

  if (!library) return null

  return {
    type: 'library',
    name: libraryName,
    score: 3,
    path: 'frontend',
    source: filename,
    metadata: {
      libraryType: library.type,
      version: libraryVersion,
    },
  }
}

const findLibraryInPackageJson = async (
  filename: string,
  content: string,
): Promise<Feature[]> => {
  const json = JSON.parse(content)

  const dependencies: Array<[string, string]> = Object.entries({
    ...json.dependencies,
    ...json.devDependencies,
  })

  return dependencies
    .map(([libraryName, libraryVersion]) =>
      findLibrary(libraryName, libraryVersion, filename),
    )
    .filter(Boolean)
    .map(f => f as Feature)
}

const findLibraries = async (
  repositoryWalker: RepositoryWalker,
): Promise<Feature[]> => {
  const features = repositoryWalker
    .listOfPackageJsonFiles()
    .map(async filename =>
      findLibraryInPackageJson(
        filename,
        await repositoryWalker.getFileContent(filename),
      ),
    )

  return (await Promise.all(features)).flatMap(p => p)
}

export default findLibraries
