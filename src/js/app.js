const menuMobile = document.querySelector('.menu-mobile')
const menuHamburger = document.querySelector('.menu-hamburger')
const links = document.querySelectorAll('.nav-link-mobile')

function scrollHeader () {
    const nav = document.getElementById('header')

    if(this.scrollY >= 50) {
        nav.classList.add('active-header')
    } else {
        nav.classList.remove('active-header')
    }
};

addEventListener('scroll', scrollHeader);


const showMenu = (changeClassId, menuId) => {
    const changeClass = document.getElementById(changeClassId)
    const menu = document.getElementById(menuId)

    if (changeClass && menu) {
        changeClass.addEventListener('click', () => {
            menu.classList.toggle('active-menu-mobile')
            changeClass.classList.toggle('active-menu-hamburger')
            
        })
    }
};

showMenu('menu-hamburger', 'menu-mobile');

links.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.toggle('active-menu-mobile')
        menuHamburger.classList.toggle('active-menu-hamburger')        
    })
})