interface PackageJson {
  name: string
  version: string
  description: string
  main: string
  scripts: { [key: string]: string }
  keywords: string[]
  dependencies?: { [key: string]: string }
}

class PackageJsonBuilder {
  packageJson: PackageJson
  constructor() {
    this.packageJson = {
      name: 'foo',
      version: '1.0.0',
      description: 'foo',
      main: 'index.js',
      scripts: {
        test: 'jest',
      },
      keywords: [],
    }
  }

  withDependency(name: string, version: string) {
    this.packageJson['dependencies'] = {
      ...this.packageJson['dependencies'],
      [name]: version,
    }

    return this
  }

  build() {
    return this.packageJson
  }
}

export const mockPackageJson = () => new PackageJsonBuilder()
