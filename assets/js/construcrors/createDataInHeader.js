export const createDataInHeader = (title, string) => {
    const wrapper = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    wrapper.classList.add('api-bar__content');
    h2.classList.add('api-bar__title');
    p.classList.add('api-bar__text');
    h2.innerText = title
    p.innerText = string
    wrapper.append(h2)
    wrapper.append(p)
    return wrapper
}