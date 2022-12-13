window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-list'),
    menuItem = document.querySelectorAll('.nav-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('nav-list-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('nav-list-active');
        })
    })
})