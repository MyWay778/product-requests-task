import { useErrorHandler } from '~/shared/composables'

export function useFieldOptions(productCode: number, field: string) {
  const response = useFetch(`/api/product-options`, {
    method: 'get',
    query: {
      code: productCode,
      field
    },
    dedupe: 'defer'
  })

  useErrorHandler(response.error)

  return response
}
