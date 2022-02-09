/**
 * Выводим вопросы
 */
import createElement from './createElement.js'
import showQuastionsTemplate from './showQuastionsTemplate.js'

export const showQuastions = (app, fio, testData) => {
  const { wrapper, container, btnNext, btnAbort } = showQuastionsTemplate(fio)

  app.append(wrapper)

  return { btnAbort }
}
