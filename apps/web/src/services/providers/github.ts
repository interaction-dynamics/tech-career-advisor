import { auth, currentUser } from '@clerk/nextjs'
import clerk from '@clerk/clerk-sdk-node'
import { Octokit } from '@octokit/rest'
import { createAppAuth } from '@octokit/auth-app'
import { App, createNodeMiddleware } from '@octokit/app'
import githubAppJwt from 'universal-github-app-jwt'
import crypto from 'node:crypto'
import Repository from '@/types/Repository'

// https://stackoverflow.com/questions/75977883/how-to-get-a-logged-in-users-google-access-token-when-using-clerk-for-auth
export const getToken = async () => {
  const { userId } = auth()

  // this returns an array of OauthAccessToken objects I'm just getting the first one
  const [OauthAccessToken] = await clerk.users.getUserOauthAccessToken(
    userId || '',
    'oauth_github',
  )

  const user = await clerk.users.getUser(userId || '')

  if (!OauthAccessToken) {
    return null
  }

  // this is the token I need to use to make requests to the gmail api
  // destructuring it here for clarity you can also just use OauthAccessToken.token below
  const { token } = OauthAccessToken

  return token
}

const privateKeyPkcs8 = crypto
  .createPrivateKey(process.env.GITHUB_APP_PRIVATE_KEY)
  .export({
    type: 'pkcs8',
    format: 'pem',
  })
  .toString()

const convertToRepository = (repository: any): Repository => ({
  id: repository.id,
  name: repository.name,
  url: repository.html_url,
  provider: 'github',
  createdAt: repository.created_at,
  updatedAt: repository.updated_at,
})

const sortByDate = (repositoryA: Repository, repositoryB: Repository) =>
  new Date(repositoryB.createdAt).getTime() -
  new Date(repositoryA.createdAt).getTime()

export const getRepositories = async (query: string = '') => {
  const token = await getToken()

  const app = new App({
    privateKey: privateKeyPkcs8,
    appId: parseInt(process.env.GITHUB_APP_ID, 10),
    token,
  })

  const repositories = []

  for await (const { octokit, repository } of app.eachRepository.iterator()) {
    repositories.push(repository)
  }

  return repositories
    .filter(r => (query ? r.name.includes(query) : true))
    .map(convertToRepository)
    .reverse()
    .slice(0, 5)
}

// https://github.com/octokit/app.js/#appgetinstallationoctokit
export const isAppInstalled = async () => {
  const token = await getToken()

  const app = new App({
    privateKey: privateKeyPkcs8,
    appId: parseInt(process.env.GITHUB_APP_ID, 10),
    token,
  })

  let installationCount = 0

  for await (const {
    octokit,
    installation,
  } of app.eachInstallation.iterator()) {
    installationCount++
  }

  return installationCount > 0
}

export const getInstallationLink = async () => {
  const user = await currentUser()

  const id = user?.externalAccounts.find(
    account => account.provider === 'oauth_github',
  ).externalId

  return `https://github.com/apps/${process.env.GITHUB_APP_NAME}/installations/new/permissions?target_id=${id}`
}
