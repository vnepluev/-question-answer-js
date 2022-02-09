import start from './modules/start.js'

const init = (selectorApp) => {
  const app = document.querySelector(selectorApp)
  const form = start(app)
  let fio = '' // имя фамилия студента

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    // валидация имени и фамилии
    let firstName = event.target.firstName.value.toLowerCase().trim()
    let lastName = event.target.lastName.value.toLowerCase().trim()

    if (firstName.length < 2 || lastName < 2) return

    firstName = firstName[0].toUpperCase() + firstName.slice(1)
    lastName = lastName[0].toUpperCase() + lastName.slice(1)

    fio = firstName + ' ' + lastName
    // end

    // если проверка имени пройдена
    app.innerHTML = ''
  })
}

init('#app')
