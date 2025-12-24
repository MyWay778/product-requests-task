import { type Validator } from '~/shared/utils/validations'

type DataItemIndex = number
type ItemField = string
type Error = string

export function useValidate<Obj extends object, Keys extends keyof Obj>(
  data: MaybeRefOrGetter<Obj[]>,
  rulesSet: MaybeRefOrGetter<Record<Keys, Validator[]>>
) {
  const errors = reactive(new Map<DataItemIndex, Record<ItemField, Error>>())

  async function validate() {
    errors.clear()

    toValue(data).forEach((item, index) => {
      for (const [field, rules] of Object.entries(toValue(rulesSet))) {
        for (const rule of rules as Validator[]) {
          const error = rule(item[field as Keys])

          if (error) {
            if (errors.has(index)) {
              const errorsObj = errors.get(index)

              if (!errorsObj) return
              errorsObj[field] = error
            } else {
              errors.set(index, { [field]: error })
            }
            break
          }
        }
      }
    })

    return errors.size === 0
  }

  function clearFieldError(index: number, field: ItemField) {
    const errorFields = errors.get(index)

    if (errorFields) {
      delete errorFields[field]

      if (Object.keys(errorFields).length === 0) {
        errors.delete(index)
      }
    }
  }

  return {
    errors,
    validate,
    clearFieldError
  }
}
