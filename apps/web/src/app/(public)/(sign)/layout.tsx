import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default function SignLayout({ children }) {
  const { userId } = auth()

  if (userId) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center flex-col justify-center pt-20">
      {children}
    </div>
  )
}
