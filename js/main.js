const menuButton = document.querySelector('#menuOpener');

menuButton.addEventListener('click', () => {
    const menu = document.querySelector('.side_menu_wrapper');
    menu.classList.toggle('opened');
});