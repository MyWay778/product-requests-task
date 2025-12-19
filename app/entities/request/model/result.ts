type Result = 'processing' | 'unsaved' | 'completed' | 'canceled'

const resultMap = new Map<Result, string>([
  ['processing', 'В обработке'],
  ['unsaved', 'Не сохранена'],
  ['completed', 'Выполнена'],
  ['canceled', 'Отменена']
])

export function getResult(result: string) {
  const displayResult = resultMap.get(result as Result)
  if (!displayResult) {
    console.warn('getResult: unknown result:', result)
  }
  return displayResult ?? 'unknown'
}
