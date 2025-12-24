type Id = string | number

export const storageKeys = {
  init: (id: Id) => `products-init-${id}`,
  edit: (id: Id) => `products-edit-${id}`,
  saved: (id: Id) => `products-saved-${id}`
}
