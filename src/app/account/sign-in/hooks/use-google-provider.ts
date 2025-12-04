import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { authClient } from '@/lib/auth-client'
import { Routes } from '@/shared/routes'
import { isValidRedirect } from '@/shared/utils/valid-redirect'

export function useGoogleProvider() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const callbackUrl = searchParams.get('callbackUrl')

  const [isProviderLoading, setIsProviderLoading] = useState(false)

  const googleAuth = async () => {
    setIsProviderLoading(true)

    const { error } = await authClient.signIn
      .social({
        provider: 'google',
      })
      .finally(() => setIsProviderLoading(false))

    if (error) {
      toast.error('Credenciais Inválidas', {
        description:
          'Ocorreu um erro durante o login social via Google. Por favor, tente novamente',
      })
      console.error(error.message)
      return
    }

    toast.success('Login realizado com sucesso')

    if (callbackUrl && isValidRedirect(callbackUrl)) {
      router.push(callbackUrl)
    } else {
      router.push(Routes.Home)
    }
  }

  return {
    isProviderLoading,
    googleAuth,
  }
}
