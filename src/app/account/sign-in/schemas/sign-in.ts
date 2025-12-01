import z from "zod";

export const signInSchema = z.object({
  email: z.email({ message: 'E-mail inválido' }),
  password: z.string()
    .min(8, 'Senha precisa conter no mínimo 8 caractéres')
    .max(128, 'Senha inválida, muito longa')
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W_]+$/, 'Precisa conter uma letra e um número')
})

export type SignInSchema = z.infer<typeof signInSchema>