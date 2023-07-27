'use strict'
import { updateProgressBar } from "./assets/js/updateProgressBar.js";
import { checkBurgerMenu, isOpenedBurgerMenu, closeBurgerMenu } from "./assets/js/burgerMenu.js";
import { getLocalJson } from "./assets/js/getLocalJson.js";
import { sliderController } from "./assets/js/sliderController.js";
import { letestNewsController } from "./assets/js/letestNewsController.js";
import { formValidation } from "./assets/js/formValidation.js";
import { setYearToCopyright } from "./assets/js/setYearToCopyright.js";
import { generateDataToHeader } from "./assets/js/generateDataToHeader.js";
import { whatWoDoController } from "./assets/js/whatWoDoController.js";

document.addEventListener("DOMContentLoaded", function() {
    /* elements */
    const preloader = document.querySelector('.preloader')
    const apiBar = document.querySelector('.api-bar')
    const navigation = document.querySelector(".navigation");
    const navigationMenu = document.querySelector(".navigation__menu")
    const burger = document.querySelector(".burger")
    const progressBar = document.querySelector(".header__progressbar-inner");
    const whatWeDo = document.querySelector('.what-we-do__btn-bar')
    const letestNewsBar = document.querySelector('.letest-news__content')
    const footer = document.querySelector('.footer')
    const submitBtn = document.getElementById('formBtn')
    const left = document.getElementById('left')
    const right = document.getElementById('right')
    const allBtn = document.getElementById('user-all')
    const aboutUsBtn = document.getElementById('aboutUsBtn')
    const twentyYearsBtn  = document.getElementById('twentyYearsBtn')
    
    /* state */
    const testimonials = [];
    const letestNews = [];
    let totalPages = 1;
    let sliderPages = 1;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    updateProgressBar(progressBar, totalHeight)
    checkBurgerMenu(navigation)
    setYearToCopyright()
    generateDataToHeader()
    whatWoDoController(allBtn)

    /* intervals ant timeouts */
    const headerData = window.setInterval(generateDataToHeader, 20000)
    setTimeout(() => {
        preloader.classList.add('preloader--none')
        document.body.classList.remove('body--none')
    }, 5000)

    /* fetch */
    getLocalJson('testimonials')
        .then(data => {
            data.forEach(element => {
                testimonials.push(element)
            });
            totalPages = Math.ceil(testimonials.length / 2)
            return totalPages
        })
        .then(() => {
            sliderController(testimonials, sliderPages)
        })
    getLocalJson('letestNews')
        .then(data => {
            data.forEach(element => {
                letestNews.push(element);
            });
        })
    
    /* lazy loading */
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                letestNewsController(letestNews);
            } else {
                entry.target.innerHTML = "";
            }
        });
    });
    observer.observe(letestNewsBar);

    /* listeners */
    window.addEventListener('resize', () => checkBurgerMenu(navigation))
    window.addEventListener('scroll', () => updateProgressBar(progressBar, totalHeight))
    apiBar.addEventListener('click', generateDataToHeader)
    footer.addEventListener('click', event => {
        if (event.target.classList.contains('footer__menu-link')) event.preventDefault()
    })
    aboutUsBtn.addEventListener('click', event => event.preventDefault())
    twentyYearsBtn.addEventListener('click', event => event.preventDefault())
    burger.addEventListener('click', () => isOpenedBurgerMenu(burger, navigationMenu))
    navigationMenu.addEventListener('click', () => closeBurgerMenu(burger, navigationMenu))
    whatWeDo.addEventListener('click', event => {
        if (event.target.classList.contains('what-we-do__btn')) {
            event.preventDefault()
            whatWoDoController(event.target)
        }
    })
    left.addEventListener('click', event =>  {
        event.preventDefault()
        sliderPages = sliderPages - 1
        if (sliderPages < 1 ) sliderPages = totalPages
        sliderController(testimonials, sliderPages, totalPages)
    })
    right.addEventListener('click', event =>  {
        event.preventDefault()
        sliderPages = sliderPages + 1
        if (sliderPages > totalPages) sliderPages = 1
        sliderController(testimonials, sliderPages)
    })
    submitBtn.addEventListener('click', event => {
        event.preventDefault()
        formValidation()
    })
});




