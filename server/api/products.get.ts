import { getProducts } from '../model/dataStore'
import { sleep } from '../utils/sleep'

export default defineEventHandler(async event => {
  const { request } = getQuery(event)
  if (!request) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: request query param is required'
    })
  }
  const products = await getProducts(Number(request))

  if (!products) {
    throw createError({
      statusCode: 404,
      statusMessage: `Not Found: products for request ${request} not found`
    })
  }

  await sleep()

  return products
})
