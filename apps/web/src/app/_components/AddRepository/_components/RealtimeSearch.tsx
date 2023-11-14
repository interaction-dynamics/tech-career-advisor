'use client'
import { useState } from 'react'
import useSWR from 'swr'

import FilterRepositoryInput from './FilterRepositoryInput'
import RealtimeSearchContext from '../_contexts/RealtimeSearchContext'

const fetcher = url => fetch(url).then(r => r.json())

export default function RealtimeSearch({ children }) {
  const [query, setQuery] = useState('')

  const {
    data: repositories,
    error,
    isLoading,
  } = useSWR(`/api/provider-repositories?filter=${query}`, fetcher)

  return (
    <RealtimeSearchContext.Provider
      value={{ repositories: repositories ?? [], isLoading }}
    >
      <div className="flex gap-3 items-stretch">
        <FilterRepositoryInput onChange={setQuery} />
      </div>
      <div className="h-72 flex flex-col mt-3 items-stretch justify-stretch">
        {children}
      </div>
    </RealtimeSearchContext.Provider>
  )
}
