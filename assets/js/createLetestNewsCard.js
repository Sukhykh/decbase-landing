export const createLatestNewsCard = (data, index) => {
    const newsCard = document.createElement('div')
    const pictureMain = document.createElement('div')
    const picWrap = document.createElement('div')
    const picture = document.createElement('picture')
    const source1 = document.createElement('source')
    const source2 = document.createElement('source')
    const img = document.createElement('img')
    const descr = document.createElement('div')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const a = document.createElement('a')
    newsCard.id = `card-${index}`
    descr.id = `card-descr-${index}`
    newsCard.classList.add('letest-news__card')
    newsCard.classList.add('news-card')
    pictureMain.classList.add('news-card__picture')
    picWrap.classList.add('news-card__picture-wrapper')
    img.classList.add('news-card__picture-img')
    descr.classList.add('news-card__descr')
    descr.classList.add('news-card__descr--none')
    h3.classList.add('news-card__title')
    p.classList.add('news-card__text')
    a.classList.add('news-card__btn')
    h3.innerText = data.title
    p.innerText = data.text
    a.innerText = 'continue reading...'
    source1.setAttribute('srcset', `assets/images/${data.imgWebp}`);
    source1.setAttribute('type', 'image/webp');
    source1.setAttribute('media', '(min-width: 500px)');
    source2.setAttribute('srcset', `assets/images/${data.imgWebp05}`);
    source2.setAttribute('type', 'image/webp');
    source2.setAttribute('media', '(max-width: 500px)');
    img.setAttribute('width', 555);
    img.setAttribute('height', 388);
    img.setAttribute('src', `assets/images/${data.imgFull}`);
    img.setAttribute('alt', data.imgFull);
    a.setAttribute('href', "#");
    a.addEventListener('click', e => e.preventDefault())
    newsCard.addEventListener('click', (event) => {
        descr.classList.contains('news-card__descr--none') ?
        descr.classList.remove('news-card__descr--none') :
        descr.classList.add('news-card__descr--none')
    })
    newsCard.addEventListener('mouseover', () => {
        if (descr.classList.contains('news-card__descr--none')) descr.classList.remove('news-card__descr--none')
    })
    newsCard.addEventListener('mouseout', () => {
        if (!descr.classList.contains('news-card__descr--none')) descr.classList.add('news-card__descr--none')
    })
    descr.append(h3)
    descr.append(p)
    descr.append(a)
    picture.append(source1)
    picture.append(source2)
    picture.append(img)
    picWrap.append(picture)
    pictureMain.append(picWrap)
    newsCard.append(pictureMain)
    newsCard.append(descr)
    return newsCard
}