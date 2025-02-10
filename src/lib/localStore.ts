import { browser } from "$app/environment"



export function saveToLocalStorage<T>(key: string, data: T) {
  if (browser) {
    window.localStorage.setItem(key, JSON.stringify(data))
  }
}

export function loadFromLocalStorage<T>(key: string) {
  if (browser) {
    const data = window.localStorage.getItem(key)
    if (data) {
      try {
        return JSON.parse(data) as T
      } catch {
        console.log(`Could not parse: ${data}`)
      }
    } else {
      return undefined
    }
  }
}