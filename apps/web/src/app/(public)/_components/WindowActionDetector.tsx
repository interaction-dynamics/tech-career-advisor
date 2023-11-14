'use client'
import { useState } from 'react'
import { useMessages } from '@/lib/tabsMessages'
import { useRouter } from 'next/navigation'
import { useClerk } from '@clerk/clerk-react'

export interface Props {
  children: React.ReactNode
  eventName: string
}

export default function WindowActionDetector({ eventName, children }) {
  const [isActionDetected, setIsActionDetected] = useState(false)
  const router = useRouter()

  const { client } = useClerk()

  useMessages(eventName, () => {
    client.clearCache()
    router.refresh()
    setIsActionDetected(true)
  })

  return children
}
