'use client'
import WindowActionEmitter from '@/app/(public)/_components/WindowActionEmitter'

export const INSTALLATION_MESSAGE = 'provider:installed'

export default function InstallCallbackPage() {
  return <WindowActionEmitter eventName={INSTALLATION_MESSAGE} />
}
