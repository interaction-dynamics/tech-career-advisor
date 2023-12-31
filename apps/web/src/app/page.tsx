import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import HomePage from './(public)/home/page'
import Layout from './(public)/layout'

export default function Web() {
  const { userId } = auth()

  if (userId) {
    redirect('/dashboard')
  }

  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}
