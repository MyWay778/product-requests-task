export type Validator = (value: unknown) => string | null

function hasValue(value: unknown) {
  return value !== null && value !== undefined && value !== ''
}

export function required(value: unknown) {
  if (!hasValue(value)) {
    return 'Обязательное поле'
  }
  return null
}

export function isNumber(value: unknown): string | null {
  if (!hasValue(value)) {
    return null
  }

  if (typeof value === 'number' && !Number.isNaN(value)) {
    return null
  }

  if (typeof value === 'string' && !Number.isNaN(Number(value))) {
    return null
  }

  return 'Значение должно быть числом'
}

export function inRange(min: number, max: number) {
  return (value: unknown): string | null => {
    if (!hasValue(value)) {
      return null
    }

    const num = Number(value)

    if (Number.isNaN(num)) {
      return null
    }

    if (num < min) {
      return `Минимальное значение ${min}`
    }

    if (num > max) {
      return `Максимальное значение ${max}`
    }

    return null
  }
}
