// src/app/api/gmail/route.ts
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import clerk from '@clerk/clerk-sdk-node'

// https://stackoverflow.com/questions/75977883/how-to-get-a-logged-in-users-google-access-token-when-using-clerk-for-auth
export async function GET(req: Request) {
  console.log('ok')
  try {
    const { userId } = auth()

    // this returns an array of OauthAccessToken objects I'm just getting the first one
    const [OauthAccessToken] = await clerk.users.getUserOauthAccessToken(
      userId || '',
      'oauth_google',
    )

    // this is the token I need to use to make requests to the gmail api
    // destructuring it here for clarity you can also just use OauthAccessToken.token below
    const { token } = OauthAccessToken

    if (!token) {
      return new NextResponse('Unauthorized NO TOKEN', { status: 401 })
    }

    return NextResponse.json({ token })

    console.log('token', token)
  } catch (error) {
    console.log('[GMAIL ERROR]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
