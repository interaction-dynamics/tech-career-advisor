import { NextRequest, NextResponse } from 'next/server'
import { getRepositories } from '@/services/providers/github'

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('filter')

  const repositories = await getRepositories(query)
  return NextResponse.json(repositories)
}
