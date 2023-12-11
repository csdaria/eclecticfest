function confirmarEnvio() {
    if (confirm('¿Está seguro de que desea enviar el formulario?')) {
        return validarForm();
    } else {
        return false;
    }
}

function validarForm() {
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('messageError').innerHTML = '';

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '') {
        document.getElementById('nameError').innerHTML = 'El nombre es obligatorio.';
        return false;
    }

    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '' || !emailValido.test(email)) {
        document.getElementById('emailError').innerHTML = 'Ingrese un correo electrónico válido.';
        return false;
    }

    if (message.trim() === '') {
        document.getElementById('messageError').innerHTML = 'El mensaje es obligatorio.';
        return false;
    }

    alert('Formulario enviado con éxito!');
    return true;
}

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


