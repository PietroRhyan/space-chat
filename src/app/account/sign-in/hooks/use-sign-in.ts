import { zodResolver } from '@hookform/resolvers/zod'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { env } from '@/@types/env'
import { authClient } from '@/lib/auth-client'
import { getAuthErrorMessage } from '@/shared/enums'
import { type SignInSchema, signInSchema } from '../schemas/sign-in'

export function useSignIn() {
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
      callbackURL: env.NEXT_PUBLIC_CLIENT_URL,
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
  }

  return {
    register,
    handleSubmit,
    isLoading: isSubmitting,
    onSubmit,
    errors,
  }
}
