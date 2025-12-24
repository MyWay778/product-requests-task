export const requests = [
  {
    id: 1,
    number: '25-135443',
    status: 'active',
    result: 'processing',
    date: '2025-08-16'
  },
  {
    id: 2,
    number: '25-135444',
    status: 'active',
    result: 'processing',
    date: '2025-08-13'
  },
  {
    id: 3,
    number: '25-135445',
    status: 'active',
    result: 'processing',
    date: '2025-08-12'
  },
  {
    id: 4,
    number: '25-135446',
    status: 'active',
    result: 'processing',
    date: '2025-08-11'
  }
]

export const products = [
  {
    id: 1,
    requestId: 1,
    products: [
      {
        id: 1,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 1,
        price: 100000,
        color: 'black'
      },
      {
        id: 2,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 3,
        price: 120000,
        color: 'red'
      },
      {
        id: 3,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 5,
        price: 100000,
        color: 'white'
      }
    ]
  },
  {
    id: 2,
    requestId: 2,
    products: [
      {
        id: 4,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 2,
        price: 110000,
        color: 'black'
      },
      {
        id: 5,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 5,
        price: 105000,
        color: 'red'
      },
      {
        id: 6,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 4,
        price: 100500,
        color: 'white'
      }
    ]
  },
  {
    id: 3,
    requestId: 3,
    products: [
      {
        id: 7,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 1,
        price: 130000,
        color: 'black'
      },
      {
        id: 8,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 7,
        price: 125000,
        color: 'red'
      },
      {
        id: 9,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 5,
        price: 101500,
        color: 'white'
      }
    ]
  },
  {
    id: 4,
    requestId: 4,
    products: [
      {
        id: 7,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 2,
        price: 110000,
        color: 'black'
      },
      {
        id: 8,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 3,
        price: 120000,
        color: 'red'
      },
      {
        id: 9,
        productCode: 1,
        name: 'iPhone 16 Pro Max 256',
        quantity: 9,
        price: 102000,
        color: 'white'
      }
    ]
  }
]

export const productOptions = [
  {
    id: 1,
    productCode: 1,
    properties: [
      {
        id: 1,
        property: 'color',
        options: [
          {
            label: 'Белый',
            value: 'white'
          },
          {
            label: 'Черный',
            value: 'black'
          },
          {
            label: 'Синий',
            value: 'blue'
          },
          {
            label: 'Красный',
            value: 'red'
          },
          {
            label: 'Зеленый',
            value: 'green'
          },
          {
            label: 'Желтый',
            value: 'yellow'
          }
        ]
      }
    ]
  }
]
