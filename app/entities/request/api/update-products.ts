import type { Product } from '~/entities/product/types'

export function updateProducts(id: number, products: Product[]) {
  return $fetch('/api/send', {
    method: 'POST',
    body: {
      id,
      products
    }
  })
}
