import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { authClient } from '@/lib/auth-client'
import { getAuthErrorMessage } from '@/shared/enums'
import { Routes } from '@/shared/routes'
import { isValidRedirect } from '@/shared/utils/valid-redirect'
import { type SignUpSchema, signUpSchema } from '../schemas/sign-up'

export function useSignUp() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const callbackUrl = searchParams.get('callbackUrl')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit: SubmitHandler<SignUpSchema> = async ({
    name,
    email,
    password,
  }) => {
    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
    })

    if (error) {
      toast.error('Ocorreu um erro', {
        description: getAuthErrorMessage(error.message),
      })
      return
    }

    toast.success(`Conta cadastrada com sucesso`, {
      description: `Sua conta foi criada com sucesso, ${data.user.name}`,
    })

    if (callbackUrl && isValidRedirect(callbackUrl)) {
      router.push(callbackUrl)
    } else {
      router.push(Routes.Home)
    }
  }

  const signInRoute = () => {
    if (callbackUrl && isValidRedirect(callbackUrl)) {
      return `${Routes.SignIn}?callbackUrl=${callbackUrl}`
    } else {
      return `${Routes.SignIn}`
    }
  }

  return {
    register,
    handleSubmit,
    isLoading: isSubmitting,
    signInRoute,
    onSubmit,
    errors,
  }
}
