import { useErrorHandler } from '~/shared/composables'

export function useProducts(requestId: number) {
  const response = useFetch('/api/products', {
    method: 'get',
    query: {
      request: requestId
    },
    server: false,
    immediate: false,
    default: () => []
  })

  useErrorHandler(response.error)

  return response
}
