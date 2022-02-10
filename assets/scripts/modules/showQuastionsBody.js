/**
 * Формируем вопрос
 * <- возвращаем div с вопросами
 */
import createElement from './createElement.js'

// общая функция по созданию элементов в вопросе
const createBaseFaq = (elemType, el) => {
  const li = createElement('li', {
    className: 'options__item',
  })
  const inputType = createElement('input', {
    id: 'v' + el.id,
    type: elemType,
    name: elemType,
    value: '',
  })
  const labelType = createElement('label', {
    htmlFor: 'v' + el.id,
    textContent: el.title,
  })

  li.append(inputType, labelType)
  return li
}

// radio btn
const createRadio = (currentTestData) => {
  const arrRadioButtons = []
  const ul = createElement('ul', {
    className: 'options',
  })

  currentTestData.options.forEach((el) => {
    const li = createBaseFaq('radio', el)
    arrRadioButtons.push(li)
  })

  ul.append(...arrRadioButtons)
  return ul
}

// checkbox btn
const createCheckbox = (currentTestData) => {
  const arrCheckbox = []
  const ul = createElement('ul', {
    className: 'options',
  })

  currentTestData.options.forEach((el) => {
    const li = createBaseFaq('checkbox', el)
    arrCheckbox.push(li)
  })

  ul.append(...arrCheckbox)
  return ul
}

// textarea
const createTextarea = (currentTestData) => {
  const li = createElement('textarea', {
    id: 'v',
    name: 'v',
    placeholder: 'Введите свой ответ',
    rows: 10,
    cols: 50,
    className: 'mt-15',
  })
  return li
}

/**
 * форма с ответами
 */
const createQuestion = (currentTestData) => {
  let el = ''
  switch (currentTestData.type) {
    case 'checkbox':
      el = createCheckbox(currentTestData)
      break
    case 'radio':
      el = createRadio(currentTestData)
      break
    case 'textarea':
      el = createTextarea(currentTestData)
      break
  }
  return el
}

export default function (testData, faqNum = 0) {
  // форма с вопросами
  const faq = createElement('form', {
    id: 'faq-form',
  })
  const h3 = createElement('h3', {
    className: 'h3',
  })
  h3.textContent = `Задание ${faqNum + 1} из ${testData.length}`

  const question = createElement('p', {
    className: 'question mt-15',
  })
  question.textContent = testData[faqNum].title // вопрос

  const variants = createQuestion(testData[faqNum]) // варианты ответа

  faq.append(h3, question, variants)
  return { faq }
}
