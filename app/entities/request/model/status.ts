type RequestStatuses = 'active' | 'paused' | 'inactive'

const requestStatusesMap = new Map<RequestStatuses, string>([
  ['active', 'Активна'],
  ['paused', 'Приостановлена'],
  ['inactive', 'Неактивна']
])

export function getStatus(status: string) {
  const requestStatus = requestStatusesMap.get(status as RequestStatuses)
  if (!requestStatus) {
    console.warn('getStatus: Unknown status:', status)
  }
  return requestStatus ?? 'unknown'
}

const requestStatusColorsMap = new Map<RequestStatuses, 'green' | 'yellow' | 'red'>([
  ['active', 'green'],
  ['paused', 'yellow'],
  ['inactive', 'red']
])

export function getStatusColor(status: string) {
  return requestStatusColorsMap.get(status as RequestStatuses) ?? 'gray'
}
