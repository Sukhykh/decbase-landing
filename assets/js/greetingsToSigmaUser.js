import { getCurrentDate } from "./getCurrentDate.js";

const modal = document.querySelector('.sigma-modal')
const date = document.querySelector('.sigma-modal__text-date')
const title = document.querySelector('.sigma-modal__text-hello')

export const greetingsToSigmaUser = name => {
    modal.classList.remove('sigma-modal--none');
    document.body.classList.add('body--none')
    date.innerHTML = getCurrentDate(false)
    title.innerHTML = `Congratulation ${name}!`

    const goBack = () => {
        modal.classList.add('sigma-modal--none');
        document.body.classList.remove('body--none')
        modal.removeEventListener('click', goBack)
    }

    modal.addEventListener('click', goBack)

    setTimeout(() => {
        goBack()
    }, 5000)
}