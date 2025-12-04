import z from "zod";

export const signOnSchema = z.object({
  name: z.string()
    .min(3, 'Deve conter no mínimo 3 caracteres')
    .max(80, 'Deve conter no máximo 80 caracteres')
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, 'Deve conter apenas letras')
    .trim(),
  email: z.email({ message: 'E-mail inválido' }),
  password: z.string()
    .min(8, 'Senha precisa conter no mínimo 8 caractéres')
    .max(128, 'Senha inválida, muito longa')
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W_]+$/, 'Precisa conter uma letra e um número')
})

export type SignOnSchema = z.infer<typeof signOnSchema>