import { getRequests } from '../model/dataStore'
import { sleep } from '../utils/sleep'

export default defineEventHandler(async () => {
  await sleep()
  return await getRequests()
})
