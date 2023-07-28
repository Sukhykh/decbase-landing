import { createTestimonialsCard } from '../construcrors/createTestimonialsCard.js'

const slider = document.querySelector('.testimonials__content')

export const sliderController = (data, page) => {
    const toShow = page * 2
    const slides = data.slice(toShow - 2, toShow)
    slider.innerHTML = '';
    slides.forEach(element => {
        const card = createTestimonialsCard(element)
        slider.append(card)
    });
}