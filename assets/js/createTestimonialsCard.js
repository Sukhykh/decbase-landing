export const createTestimonialsCard = data => {
    const testimonialsCard = document.createElement('div');
    const outer = document.createElement('div');
    const imgWrapper = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('div');
    const person = document.createElement('h3');
    const name = document.createElement('span');
    const post = document.createElement('span');
    const quote = document.createElement('div');
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    const text = document.createElement('p');
    testimonialsCard.classList.add('testimonials__card');
    testimonialsCard.classList.add('testimonials-card');
    outer.classList.add('testimonials-card__outer');
    imgWrapper.classList.add('testimonials-card__img-wrapper');
    img.classList.add('testimonials-card__img');
    title.classList.add('testimonials-card__title');
    person.classList.add('testimonials-card__person');
    name.classList.add('testimonials-card__name');
    post.classList.add('testimonials-card__post');
    quote.classList.add('testimonials-card__quote');
    svg.classList.add('testimonials-card__svg');
    use.classList.add('testimonials-card__icon');
    text.classList.add('testimonials-card__text');
    img.setAttribute('width', 131);
    img.setAttribute('height', 131);
    img.setAttribute('src', `assets/images/${data.img}`);
    img.setAttribute('alt', data.img);
    use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'assets/images/sprite.svg#quote');
    name.innerText = `${data.name}`;
    post.innerText = `${data.post}`;
    text.innerText = `${data.text}`;
    svg.append(use)
    quote.append(svg)
    person.append(name)
    person.append(post)
    title.append(person)
    title.append(quote)
    imgWrapper.append(img);
    outer.append(imgWrapper);
    outer.append(title);
    outer.append(text);
    testimonialsCard.append(outer);
    return testimonialsCard;
}