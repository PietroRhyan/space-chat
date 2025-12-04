import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { authClient } from '@/lib/auth-client'
import { getAuthErrorMessage } from '@/shared/enums'
import { isValidRedirect } from '@/shared/utils/valid-redirect'
import { type SignInSchema, signInSchema } from '../schemas/sign-in'

export function useSignIn() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const callbackURL = searchParams.get('callbackUrl')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit: SubmitHandler<SignInSchema> = async ({ email, password }) => {
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
    })

    if (error) {
      toast.error('Credenciais Inválidas', {
        description: getAuthErrorMessage(error.message),
      })
      return
    }

    toast.success(`Login realizado com sucesso`, {
      description: `Seja Bem-Vindo(a), ${data.user.name}`,
    })

    if (callbackURL && isValidRedirect(callbackURL)) {
      router.push(callbackURL)
    } else {
      router.push('/')
    }
  }

  return {
    register,
    handleSubmit,
    isLoading: isSubmitting,
    onSubmit,
    errors,
  }
}
