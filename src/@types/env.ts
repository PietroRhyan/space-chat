import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SERVER_URL: z.url(),
  NEXT_PUBLIC_CLIENT_URL: z.url(),
})

export const env = envSchema.parse({
  NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  NEXT_PUBLIC_CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
})
