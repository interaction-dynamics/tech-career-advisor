'use client'
import WindowActionEmitter from '@/app/(public)/_components/WindowActionEmitter'

export const LOGIN_MESSAGE = 'user:logged-in'

export default function LoginCallbackPage() {
  return <WindowActionEmitter eventName={LOGIN_MESSAGE} />
}
