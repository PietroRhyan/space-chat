export const authResponseCodes: Record<string, string> = {
  INVALID_EMAIL_OR_PASSWORD: 'E-mail ou senha inválidos. Por favor, tente novamente',
  INVALID_TOKEN: 'Não autorizado. Verifique se você está logado na sua sessão e tente novamente',
  VALIDATION_ERROR: 'Campos obrigatórios não foram preenchidos ou são inválidos',
  ACCOUNT_NOT_FOUND: 'Conta não encontrada. Tente novamente mais tarde'
} as const

const GENERIC_AUTH_ERROR = 'Ocorreu um erro inesperado. Tente novamente mais tarde'

export function getAuthErrorMessage(errorCode: string | undefined | null): string {
  if (!errorCode) return GENERIC_AUTH_ERROR;

  const message = authResponseCodes[errorCode as keyof typeof authResponseCodes];

  return message || GENERIC_AUTH_ERROR;
}