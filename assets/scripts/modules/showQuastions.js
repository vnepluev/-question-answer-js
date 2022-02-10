/**
 * Выводим вопросы
 */
import showQuastionsTemplate from './showQuastionsTemplate.js'
import showQuastionsBody from './showQuastionsBody.js'

let faqNum // текущий номер вопроса
const userVariants = [] // ответы пользователя

export const showQuastions = (app, fio, testData) => {
  const { wrapper, container, nav, footer, btnNext, btnAbort } =
    showQuastionsTemplate(fio)

  faqNum = 0
  userVariants.length = 0

  const { faq } = showQuastionsBody(testData, faqNum) // формируем первый вопрос
  container.append(faq)

  wrapper.append(container, nav, footer)
  app.append(wrapper)

  // кнопка следующий вопрос
  btnNext.addEventListener('click', () => {
    const faqForm = document.querySelector('#faq-form')
    const mainForm = document.querySelector('.main-form')
    const arrResult = []

    if (
      faqForm.elements[0]?.checked === undefined &&
      faqForm.elements[0]?.value.length > 0
    ) {
      arrResult.push(faqForm.elements[0].value)
    } else {
      for (const element of faqForm.elements) {
        if (element.checked) arrResult.push(element.id)
      }
    }

    if (arrResult.length < 1) return // если данные не заполнены - ничего не делать

    // сохраняем варианты ответа
    userVariants.push({
      faqNum: faqNum,
      variants: arrResult,
    })

    // вызываем форму по отрисовке следующего вопроса
    if (testData.length === faqNum + 1) {
      // вопросы закончились
      console.log(userVariants)
      return
    }

    faqNum++
    mainForm.innerHTML = '' // очищаем вопросы для новых

    const newFaq = showQuastionsBody(testData, faqNum)
    mainForm.append(newFaq.faq)
  })

  return { btnAbort, faqNum }
}
