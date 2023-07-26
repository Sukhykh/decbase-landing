const burger = 950
export const checkBurgerMenu = element => {
    const width = window.innerWidth
    if (width > burger) element.classList.remove('mobile')
    if (width <= burger) element.classList.add('mobile')
}

export const isOpenedBurgerMenu = (burger, menu) => {
    const isOpened = burger.classList.contains('opened')
    isOpened ? burger.classList.remove('opened') : burger.classList.add('opened')
    isOpened ? menu.classList.remove('mobile-menu') : menu.classList.add('mobile-menu')
}

export const closeBurgerMenu = (burger, menu) => {
    const isOpened = menu.classList.contains('mobile-menu')
    if (isOpened) {
        burger.classList.remove('opened')
        menu.classList.remove('mobile-menu')
    }
}