'use server'

import { signInSchema } from "../schemas/sign-in";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signInUser(_initalState: any, formData: FormData) {
  const validatedFields = signInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    }
  }

  console.log(validatedFields.data)

  return {
    message: 'Sucesso'
  }
}