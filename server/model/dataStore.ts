import * as data from './mockData'

export async function getRequests() {
  return data.requests
}

export async function getProducts(requestId: number) {
  const entry = data.products.find(product => product.requestId === requestId)

  if (!entry) return null

  return entry.products
}

export async function getOptions(productCode: number, property: string) {
  const entry = data.productOptions.find(entry => entry.productCode === productCode)
  if (!entry) return null

  const propEntry = entry.properties.find(prop => prop.property === property)
  if (!propEntry) return null

  return propEntry.options
}

export async function changeProducts(requestId: number, products: (typeof data.products)[number]['products']) {
  const entry = data.products.find(product => product.requestId === requestId)
  if (!entry) return null

  entry.products = products
  return entry.products
}
