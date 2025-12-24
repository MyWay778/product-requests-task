export function formatDate(isoDate: string) {
  const date = new Date(isoDate)
  const output = date.toLocaleDateString('ru-RU')
  if (output === 'Invalid Date') {
    console.warn('Invalid date format:', isoDate)
  }
  return output
}
