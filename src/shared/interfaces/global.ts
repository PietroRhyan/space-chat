export interface IActionResponse {
  errors?: Record<string, string[]>
  data?: unknown
  success: boolean
  details?: {
    status?: number
    message?: string
  }
}