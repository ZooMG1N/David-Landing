let burger = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');

burger.addEventListener('click', function () {
    this.classList.toggle('open');

    if (burger.classList.contains('open')) {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }

    for (let elem of menuItem)  {
        elem.addEventListener('click', function () {
            if (burger.classList.contains('open')) {
                burger.classList.remove('open');
                menu.style.display = 'none';
            }
        })
    }
});

if (window.innerWidth > 900) {
    burger.style.display = 'none';
}





