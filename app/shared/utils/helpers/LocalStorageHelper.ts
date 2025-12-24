export class LocalStorageHelper {
  private key: string

  constructor(key: string) {
    if (!key) {
      throw new Error('A localStorage key is required')
    }

    this.key = key
  }

  set(value: unknown) {
    try {
      localStorage.setItem(this.key, JSON.stringify(value))
    } catch (e) {
      console.warn(`Error saving "${this.key}" to localStorage:`, e)
    }
  }

  get(defaultValue = null) {
    try {
      const item = localStorage.getItem(this.key)
      return item !== null ? JSON.parse(item) : defaultValue
    } catch (e) {
      console.warn(`Error reading "${this.key}" from localStorage:`, e)
      return defaultValue
    }
  }

  remove() {
    try {
      localStorage.removeItem(this.key)
    } catch (e) {
      console.warn(`Error removing "${this.key}" from localStorage:`, e)
    }
  }

  exists() {
    return localStorage.getItem(this.key) !== null
  }

  clear() {
    this.remove()
  }
}
