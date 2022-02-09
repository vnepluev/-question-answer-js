/**
 * Выводим вопросы
 */
import createElement from './createElement.js'
import showQuastionsTemplate from './showQuastionsTemplate.js'
import showQuastionsBody from './showQuastionsBody.js'

let faqNum = 0

export const showQuastions = (app, fio, testData) => {
  const { wrapper, container, nav, footer, btnNext, btnAbort } =
    showQuastionsTemplate(fio)

  const { faq } = showQuastionsBody(faqNum, testData) // формируем вопрос
  container.append(faq)

  wrapper.append(container, nav, footer)
  app.append(wrapper)

  return { btnAbort }
}
