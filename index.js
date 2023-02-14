export const isBrowser = () => typeof window !== 'undefined'

export const sleep = (seconds) => {
  return new Promise<void>((resolve) => setTimeout(resolve, seconds * 1000))
}

export const isUrl = (str) => {
  return /^https?:\/\//gi.test(str)
}
