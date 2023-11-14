'use client'
import { ChangeEvent, useRef } from 'react'
import { Input } from '@/components/ui/input'

export interface Props {
  onChange: (query: string) => void
}

export default function FilterRepositoryInput({ onChange }: Props) {
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  const onRealtimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      onChange(event.target.value)
    }, 500)
  }

  return <Input placeholder="Search..." onChange={onRealtimeChange} />
}
