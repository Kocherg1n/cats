const hamburgerButtonOpen = document.querySelector(`.hamburger`)
const hamburgerMenu = document.querySelector(`.hamburger-menu`)
const hamburgerButtonClose = document.querySelector(`.hamburger-menu__close`)

// hamburger menu close/open
hamburgerButtonOpen.addEventListener(`click`, () => {
    hamburgerMenu.style.display = `flex`
    document.body.style.overflow = `hidden`
})

hamburgerButtonClose.addEventListener(`click`, () => {
    hamburgerMenu.style.display = `none`
    document.body.style.overflow = `visible`
})

// fixed header
window.onscroll = () => {
    const header = document.querySelector(`.header`)
    const filter = document.querySelector(`.filter`)

    window.pageYOffset > 100 ? header.classList.add(`header__fixed`) : header.classList.remove(`header__fixed`)
    window.pageYOffset > 170 && window.innerWidth >= 1366 && window.innerHeight >= 900 ? filter.classList.add(`filter__fixed`) : filter.classList.remove(`filter__fixed`)
}
