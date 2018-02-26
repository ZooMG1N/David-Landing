let burger = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
    this.classList.toggle('open');

    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
});

if (window.innerWidth > 900) {
    burger.style.display = 'none';
}



