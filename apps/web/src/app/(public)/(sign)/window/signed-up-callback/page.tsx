'use client'
import WindowActionEmitter from '@/app/(public)/_components/WindowActionEmitter'

export const SIGN_UP_MESSAGE = 'user:signed-up'

export default function LoginCallbackPage() {
  return <WindowActionEmitter eventName={SIGN_UP_MESSAGE} />
}
