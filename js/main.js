const menuButton = document.querySelector('#menuOpener');

menuButton.addEventListener('click', () => {
    const menu = document.querySelector('.side_menu_wrapper');
    menu.classList.toggle('opened');
});

function updateLabel() {
    const labelText = document.getElementById('user_name');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        labelText.textContent = "Mi Cuenta";
    } else {
        labelText.textContent = "Juan R Gómez";
    }
}

window.addEventListener('resize', updateLabel);

window.onload = updateLabel;