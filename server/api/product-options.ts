import { getOptions } from '../model/dataStore'

export default defineEventHandler(async event => {
  const { code, property } = getQuery(event)

  if (!code || !property) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: code and property query param is required'
    })
  }
  const options = await getOptions(Number(code), property as string)

  if (!options) {
    throw createError({
      statusCode: 404,
      statusMessage: `Not Found: Products not found for code ${code} or property ${property}`
    })
  }

  return options
})
