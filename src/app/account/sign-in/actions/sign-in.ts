'use server'

import { authClient } from '@/lib/auth-client'
import type { IActionResponse } from '@/shared/interfaces'
import { signInSchema } from '../schemas/sign-in'

export async function signInUser(
  _prevState: IActionResponse,
  formData: FormData,
): Promise<IActionResponse> {
  const validatedFields = signInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { email, password } = validatedFields.data

  const { data, error } = await authClient.signIn.email({
    email,
    password,
    rememberMe: true,
  })

  if (error) {
    return {
      success: false,
      details: {
        message: error.code,
        status: error.status,
      },
    }
  }

  return {
    success: true,
    data,
    details: {
      message: 'Requisição bem sucedida',
    },
  }
}
