export function isValidRedirect(url: string | null) {
  if (!url) return false

  return url.startsWith('/') && !url.startsWith('//')
}