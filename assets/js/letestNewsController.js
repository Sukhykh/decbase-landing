import { createLatestNewsCard } from "./createLetestNewsCard.js"

const letestNews = document.querySelector('.letest-news__content')

export const letestNewsController = data => {
    data.forEach((element, index) => {
        setTimeout(() => {
            const card = createLatestNewsCard(element, index);
            letestNews.append(card);
        }, index * 1000);
    });
}