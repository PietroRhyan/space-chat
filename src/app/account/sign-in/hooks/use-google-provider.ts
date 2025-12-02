import { useState } from 'react'
import { env } from '@/@types/env'
import { authClient } from '@/lib/auth-client'

export function useGoogleProvider() {
  const [isProviderLoading, setIsProviderLoading] = useState(false)

  const googleAuth = async () => {
    setIsProviderLoading(true)

    await authClient.signIn
      .social({
        provider: 'google',
        callbackURL: env.NEXT_PUBLIC_CLIENT_URL,
      })
      .finally(() => setIsProviderLoading(false))
  }

  return {
    isProviderLoading,
    googleAuth,
  }
}
