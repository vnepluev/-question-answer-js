import start from './modules/start.js'

const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp)
  start(app)
}

init('#app', 'Начало теста')
