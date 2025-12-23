import { useErrorHandler } from '~/shared/composables'

export function useRequests() {
  const { data, pending, error } = useFetch('/api/table-data', {
    method: 'get',
    default: () => []
  })

  useErrorHandler(error)

  return {
    data,
    pending
  }
}
