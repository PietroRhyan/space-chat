import { createAuthClient } from 'better-auth/react'
import { env } from '@/@types/env'

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_SERVER_URL,
})
