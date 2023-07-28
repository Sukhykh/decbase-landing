const content = document.querySelector('.what-we-do__content')

const imgPath = {
    1: 'interiorIcon.png',
    2: 'architectureIcon.png',
    3: 'planningIcon.png'
}

export const createWhatWeDoCard = data => {
    content.innerHTML = ''
    data.forEach(element => {
        const { body, id, title, userId } = element
        const newTitle = title.charAt(0).toUpperCase() + title.slice(1);
        const newBody = body.charAt(0).toUpperCase() + body.slice(1);
        const card = document.createElement('div')
        const imgWrapper = document.createElement('div')
        const img = document.createElement('img')
        const textWrapper = document.createElement('div')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        card.classList.add('what-we-do__card')
        if (userId === 2) card.classList.add('what-we-do__card--colored')
        imgWrapper.classList.add('what-we-do__card-img-wrapper')
        img.classList.add('what-we-do__card-img')
        img.setAttribute('width', 45);
        img.setAttribute('height', 64);
        img.setAttribute('src', `assets/images/${imgPath[userId]}`);
        img.setAttribute('alt', imgPath[userId]);
        textWrapper.classList.add('what-we-do__card-text-wrapper')
        h3.classList.add('what-we-do__card-title')
        if (userId === 2) h3.classList.add('what-we-do__card-title--colored')
        p.classList.add('what-we-do__card-text')
        if (userId === 2) p.classList.add('what-we-do__card-text--colored')
        h3.innerText = newTitle
        p.innerText = newBody
        textWrapper.appendChild(h3)
        textWrapper.appendChild(p)
        imgWrapper.appendChild(img)
        card.appendChild(imgWrapper)
        card.appendChild(textWrapper)
        content.appendChild(card)     
    })
}