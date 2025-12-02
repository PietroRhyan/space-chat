'use server'

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

  return {
    success: true,
    details: {
      message: 'Requisição bem sucedida',
    },
  }
}
