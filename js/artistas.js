
//Funciones flecha del menú hamburguesa

const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const menuItems = document.getElementById('menu-items');

menuIcon.addEventListener('click', () => {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
     menuItems.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    menuItems.classList.remove('active');
});

