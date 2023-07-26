import { getCurrentDate } from "./getCurrentDate.js";

const year = document.querySelector('.copyright__year')

export const setYearToCopyright = () => {
    const curentYear = getCurrentDate(true)
    const toInput = curentYear === 2023 ? '2023' : `2023 - ${curentYear}`
    year.innerText = toInput
}