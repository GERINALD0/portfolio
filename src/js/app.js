const downloadCV = document.querySelector('.download-CV')

function scrollHeaser () {
    const nav = document.getElementById('header')

    if(this.scrollY >= 50) {
        nav.classList.add('active-header')
    } else {
        nav.classList.remove('active-header')
    }
};

addEventListener('scroll', scrollHeaser);


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