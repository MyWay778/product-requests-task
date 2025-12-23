import { useErrorHandler } from '~/shared/composables'

export function useRequests() {
  const response = useFetch('/api/table-data', {
    method: 'get',
    server: false,
    immediate: false,
    default: () => []
  })

  useErrorHandler(response.error)

  return response
}
