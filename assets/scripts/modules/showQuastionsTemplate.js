/**
 * Рисуем страницу вопросов (без вывода json данных)
 * -> принимаем fio - имя ученика
 * <- возвращаем шаблон документа, container - блок для вопросов
 * `btnNext`, `btnAbort` - кнопки навигации
 */
import createElement from './createElement.js'

export default function (fio) {
  const wrapper = createElement('div', {
    className: 'wrapper',
  })
  // background
  const main = createElement('div', {
    className: 'main',
  })

  // имя ученика
  const h4 = createElement('h4', {
    className: 'h4',
    textContent: fio,
  })

  // форма с вопросом
  const container = createElement('div', {
    className: 'main-form',
  })

  // навигация
  const nav = createElement('div', {
    className: 'nav',
  })

  const btnNext = createElement('button', {
    id: 'btnNext',
    className: 'btn',
    textContent: 'Дальше',
  })

  const btnAbort = createElement('button', {
    id: 'btnAbort',
    className: 'btn btn--danger',
    textContent: 'Прервать тест',
  })

  nav.append(btnNext, btnAbort)

  // копирайт школы
  const footer = createElement('h4', {
    className: 'h4 mt-15',
    innerHTML: '&copy;МетаШкола, 2022',
  })

  wrapper.append(main, h4)
  return { wrapper, container, nav, footer, btnNext, btnAbort }
}
