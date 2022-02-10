const arr = [
  {
    id: 1,
    title: 'Сколько будет в консоле?',
    descr: '2 + "2"',
    options: [
      { id: 1, title: '4' },
      { id: 2, title: '44' },
      { id: 3, title: '8' },
    ],
    type: 'checkbox', // radio, checkbox, textarea
  },
  {
    id: 2,
    title: 'Сколько будет?',
    descr: '4 + "4"',
    options: [
      { id: 4, title: '88' },
      { id: 5, title: '44' },
      { id: 6, title: '8' },
      { id: 7, title: '11' },
    ],
    type: 'radio',
  },
  {
    id: 3,
    title: 'Объясните своими словами почему так?',
    descr: '4 + "4"',
    options: [],
    type: 'textarea',
  },
]

export default arr
