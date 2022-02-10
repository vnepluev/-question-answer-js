import start from './modules/start.js'
import testData from '../data/questions.js'
import { showQuastions } from './modules/showQuastions.js'

// валидация имени и фамилии
const login = (event) => {
  event.preventDefault()

  let currentFaqNum = 0
  let firstName = event.target.firstName.value.toLowerCase().trim()
  let lastName = event.target.lastName.value.toLowerCase().trim()

  if (firstName.length < 2 || lastName < 2) return

  firstName = firstName[0].toUpperCase() + firstName.slice(1)
  lastName = lastName[0].toUpperCase() + lastName.slice(1)

  const fio = firstName + ' ' + lastName

  // если проверка имени пройдена, выводим вопросы
  app.innerHTML = ''
  const { btnAbort, faqNum } = showQuastions(app, fio, testData)
  currentFaqNum = faqNum

  // если нажали прервать тест - перезапускаем
  btnAbort.addEventListener('click', (event) => {
    init('#app')
  })
}

/**
 * Основная логика
 */
const init = (selectorApp) => {
  const app = document.querySelector(selectorApp)
  app.innerHTML = ''
  const form = start(app)
  form.addEventListener('submit', login)
}

init('#app')
