import { useErrorHandler } from '~/shared/composables'

export function useProducts(requestId: number) {
  const { data, pending, error } = useFetch('/api/products', {
    method: 'get',
    query: {
      request: requestId
    },
    default: () => []
  })

  useErrorHandler(error)

  return {
    data,
    pending
  }
}
