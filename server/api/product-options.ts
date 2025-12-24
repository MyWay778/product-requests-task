import { getOptions } from '../model/dataStore'

export default defineEventHandler(async event => {
  const { code, field } = getQuery(event) // product code, and field

  if (!code || !field) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request: code and field query param is required'
    })
  }
  const options = await getOptions(Number(code), field as string)

  if (!options) {
    throw createError({
      statusCode: 404,
      statusMessage: `Not Found: Products not found for code ${code} or field ${field}`
    })
  }

  return options
})
