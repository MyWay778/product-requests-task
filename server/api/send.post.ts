import { changeProducts } from '../model/dataStore'
import { sleep } from '../utils/sleep'

export default defineEventHandler(async event => {
  const { id, products } = (await readBody(event)) ?? {}

  if (!id || !products) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: Missing id or products in request body'
    })
  }

  const changed = await changeProducts(Number(id), products)
  if (!changed) {
    throw createError({
      statusCode: 404,
      statusMessage: `Not Found: Request ${id} not found`
    })
  }

  await sleep()
  return products
})
