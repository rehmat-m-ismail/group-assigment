document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const col1 = document.querySelector('.col-1');

    menuToggle.addEventListener('click', () => {
        col1.classList.toggle('active'); // Toggle the visibility of the menu
    });
});
