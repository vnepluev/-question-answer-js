/**
 * Формируем вопрос
 * <- возвращаем div с вопросами
 */
import createElement from './createElement.js'

// checkbox
const createCheckbox = (currentTestData) => {
  const arrRadioButtons = []
  const ul = createElement('ul', {
    className: 'options',
  })

  currentTestData.options.forEach((el) => {
    const li = createElement('li', {
      className: 'options__item',
    })
    const inputRadio = createElement('input', {
      id: 'r' + el.id,
      type: 'radio',
      name: 'radio',
      value: '',
    })
    const labelRadio = createElement('label', {
      htmlFor: 'r' + el.id,
      textContent: el.title,
    })

    li.append(inputRadio, labelRadio)
    arrRadioButtons.push(li)
  })

  ul.append(...arrRadioButtons)
  return ul
}
// radio
const createRadio = (currentTestData) => {}
// textarea
const createTextarea = (currentTestData) => {}

// форма с ответами
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

export default function (faqNum = 0, testData) {
  const faq = createElement('div', {})
  const h3 = createElement('h3', {
    className: 'h3',
  })
  h3.textContent = `Задание ${faqNum + 1} из ${testData.length}`

  const question = createElement('p', {
    className: 'question mt-15',
  })
  question.textContent = testData[faqNum].title //вопрос

  const variants = createQuestion(testData[faqNum])

  faq.append(h3, question, variants)
  return { faq, faqNum }
}
