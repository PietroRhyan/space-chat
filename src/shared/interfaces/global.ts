export interface IActionResponse {
  errors?: Record<string, string[]>
  success: boolean
  details?: {
    status?: number
    message?: string
  }
}