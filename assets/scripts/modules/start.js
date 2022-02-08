import createElement from './createElement.js'

/**
 * создаем форму `введите имя фамилию`
 */
const loginForm = () => {
  const container = createElement('div', {
    className: 'main-form',
  })

  const h2 = createElement('h2', {
    className: 'h2',
    textContent: 'Представьтесь пожалуйста',
  })

  const div = createElement('div', {
    className: 'fields-container',
  })

  const inp1 = createElement('input', {
    id: 'firstName',
    className: 'input',
    type: 'text',
    placeholder: 'Введите имя',
    maxLength: 25,
    minlength: 2,
  })

  const inp2 = createElement('input', {
    id: 'lastName',
    className: 'input mt-15',
    type: 'text',
    placeholder: 'Введите фамилию',
    maxLength: 25,
    minlength: 2,
  })

  const submit = createElement('input', {
    type: 'submit',
    className: 'btn mt-15',
    textContent: 'Начать тест',
  })

  div.append(inp1, inp2, submit)

  container.append(h2, div)

  return container
}

const start = (app) => {
  // background
  const main = createElement('div', {
    className: 'main',
  })

  // h1
  const h1 = createElement('h1', {
    className: 'h1',
    textContent: 'МетаШкола',
  })

  const createLogin = loginForm()

  app.append(main, h1, createLogin)
}

export default start
