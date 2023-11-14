import { Parsing } from '@/types/Parsing'
import { ParsedRepository } from '@/types/Repository'

const randomParsing = (index: number): Parsing => {
  if (index % 3 === 0) {
    return {
      lastRun: '2023-03-03T03:03:03Z',
      status: 'success',
    }
  }

  if (index % 3 === 1) {
    return {
      lastRun: '2023-03-03T03:03:03Z',
      status: 'error',
    }
  }

  return {
    lastRun: '2023-03-03T03:03:03Z',
    status: 'pending',
  }
}

export const mockParsedRepositories = (): ParsedRepository[] =>
  mockRepositories().map((r, index) => ({
    ...r,
    parsing: randomParsing(index),
  }))

export const mockRepositories = (): ParsedRepository[] => [
  {
    id: 'foo',
    provider: 'github',
    name: 'react-composition',
    createdAt: '2023-03-03T03:03:03Z',
    updatedAt: '2023-03-03T03:03:03Z',
    parsing: {
      lastRun: '2023-03-03T03:03:03Z',
      status: 'success',
    },
    url: 'friedrith/react-composition',
  },
  {
    id: 'foo2',
    provider: 'github',
    name: 'node-wifi',
    createdAt: '2023-03-03T03:03:03Z',
    updatedAt: '2023-03-03T03:03:03Z',
    parsing: {
      lastRun: '2023-03-03T03:03:03Z',
      status: 'error',
    },
    url: 'friedrith/react-composition',
  },
  {
    id: 'foo3',
    provider: 'github',
    name: 'react-composition2',
    createdAt: '2023-03-03T03:03:03Z',
    updatedAt: '2023-03-03T03:03:03Z',
    parsing: {
      lastRun: '2023-03-03T03:03:03Z',
      status: 'pending',
    },
    url: 'friedrith/react-composition2',
  },
]
