import { getDataFromRandomApi } from "./getDataFromRandomApi.js"
import { createWhatWeDoCard } from "./createWhatWeDoCard.js"

const URL_LINK = 'https://jsonplaceholder.typicode.com/posts'
const filterBar = document.querySelectorAll('.what-we-do__btn')

export const whatWoDoController = target => {
    const id = target.id.split('-')[1];
    const idArr = Array
                    .from(filterBar)
                    .map(el => el.id.split('-')[1])
                    .filter(el => el !== 'all')
                    .map(el => Number(el))
    getDataFromRandomApi(URL_LINK)
        .then(data => {
            if (id !== 'all') {
                return data.filter(item => item.userId === Number(id)).slice(0, 5);
            } else {
                const dataToRender = []
                idArr.forEach(el => dataToRender.push(data.find(element => element.userId === el)))
                return dataToRender
            }
        })
        .then(toRender => createWhatWeDoCard(toRender))
        .then(() => filterBar.forEach(el => el.classList.remove('what-we-do__btn--active')))
        .then(() => filterBar.forEach(el => el.id === target.id ? el.classList.add('what-we-do__btn--active') : el ))
            
}