import { Parsing } from './Parsing'
import RepositoryProvider from './RepositoryProvider'

export default interface Repository {
  id: string
  name: string
  url: string
  createdAt: string
  updatedAt: string
  provider: RepositoryProvider['name']
}

export interface ParsedRepository extends Repository {
  parsing: Parsing
}
