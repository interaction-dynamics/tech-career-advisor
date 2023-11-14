'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function ImportRepositoryButton() {
  const router = useRouter()
  return (
    <Button
      className="py-0.5 h-8 px-3"
      onClick={() => router.push('/dashboard')}
    >
      Import
    </Button>
  )
}
