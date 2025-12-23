import { reactive, computed } from 'vue'

type Rule = 'required' | 'number'

type Rules = Record<string, Rule[]>
type Errors = Record<string, string | null>

export function useFormValidation(form: Record<string, unknown>, rules: Rules) {
  const errors = reactive<Errors>({})

  function validateField(field: string) {
    errors[field] = null
    const value = form[field]
    const fieldRules = rules[field] || []

    for (const rule of fieldRules) {
      // Required
      if (rule === 'required') {
        if (value === null || value === undefined || value === '') {
          errors[field] = 'Обязательное поле'
          return false
        }
      }

      // Number (digits + dot)
      if (rule === 'number') {
        if (value !== null && value !== '' && !/^\d*\.?\d+$/.test(String(value))) {
          errors[field] = 'Возможен ввод только цифр'
          return false
        }
      }
    }

    return true
  }

  function validateForm() {
    let valid = true

    for (const field in rules) {
      if (!validateField(field)) {
        valid = false
      }
    }

    return valid
  }

  const isValid = computed(() => Object.values(errors).every(e => !e))

  return {
    errors,
    validateField,
    validateForm,
    isValid
  }
}
