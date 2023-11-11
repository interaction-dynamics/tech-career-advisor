'use client'
import { useEffect } from 'react'
import { sendMessage } from '@/lib/tabsMessages'

interface Props {
  eventName: string
}

export default function WindowActionEmitter({ eventName }: Props) {
  useEffect(() => {
    sendMessage(eventName)
    window.close()
  }, [eventName])

  return <div className="fixed inset-0 bg-background" />
}
