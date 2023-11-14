import Repository from '@/types/Repository'
import { createContext } from 'react'

export interface RealtimeSearchContextType {
  repositories: Repository[]
  isLoading: boolean
}

export default createContext<RealtimeSearchContextType>({
  repositories: [],
  isLoading: true,
})
