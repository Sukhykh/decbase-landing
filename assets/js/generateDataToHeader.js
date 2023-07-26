import { getDataFromRandomApi } from "./getDataFromRandomApi.js"
import { createDataInHeader } from "./createDataInHeader.js";

const section = document.querySelector('.api-bar__wrapper');
const URL_LINK = [ 
    {
        title: 'advice',
        url: 'https://api.adviceslip.com/advice'
    },
    {
        title: 'joke',
        url: 'https://v2.jokeapi.dev/joke/Programming?type=single'
    },
    {
        title: 'fact',
        url: 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'
    }
]

const getAdvice = data => {
    return data.slip.advice
}
const getJoke = data => {
    return data.joke
}
const getFact = data => {
    return data.text
}

export const generateDataToHeader = () => {
    const dataType = Math.round(Math.random() * 2)
    const { title, url } = URL_LINK[dataType]
    getDataFromRandomApi(url)
        .then(data => {
            if (title === 'advice') return getAdvice(data)
            if (title === 'joke') return getJoke(data)
            if (title === 'fact') return getFact(data)
        })
        .then(string => {
            const bar = createDataInHeader(title, string)
            section.innerHTML = ''
            section.append(bar)
        })
        .catch(err => console.log(err))
}