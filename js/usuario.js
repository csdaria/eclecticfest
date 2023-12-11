class Usuario {
    #nombre;
    #email;
    #password;

    constructor(nombre, email, password) {
        this.#nombre = nombre;
        this.#email = email;
        this.#password = password;
    }

    //Sin esto, problemas, no se toca

    toJSON() {
        return {
            nombre: this.#nombre,
            email: this.#email,
            password: this.#password,
        };
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(newNombre) {
        this.#nombre = newNombre;
    }

    get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }

    get password() {
        return this.#password;
    }

    set password(newPassword) {
        this.#password = newPassword;
    }
}
  
  let currentUser = null;
  
  function registro() {
    const nombre = document.getElementById('registroNombre').value;
    const email = document.getElementById('registroEmail').value;
    const password = document.getElementById('registroPassword').value;

    if (nombre && email && password) {
        const newUsuario = new Usuario(nombre, email, password);
        localStorage.setItem('user', JSON.stringify(newUsuario.toJSON()));

        alert('¡Registro exitoso!');
        document.getElementById('registroForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Se recupera el usuario almacenado en localStorage
    const storedUsuario = localStorage.getItem('user');
    console.log('Stored User:', storedUsuario);

    // Se verifican si el usuario existe y las credenciales son correctas
    if (storedUsuario) {
        const userData = JSON.parse(storedUsuario);
        const user = new Usuario(userData.nombre, userData.email, userData.password);
        console.log('User from localStorage:', user);
        console.log('Input Email:', email);
        console.log('Input Password:', password);

        if (email === user.email && password === user.password) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            alert('¡Inicio de sesión exitoso!');
            window.location.href = "../tickets.html"; // Redirigir a la página de tickets (no funciona)
        } else {
            alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
        }
    } else {
        alert('No hay usuarios registrados. Regístrate primero.');
        localStorage.clear();
    }
}

function buyTicket(eventName) {
    const storedUsuario = localStorage.getItem('currentUser');
    const currentUsuario = storedUsuario ? JSON.parse(storedUsuario) : null;

    if (currentUsuario) {
        // Se solicita la cantidad de entradas mediante un prompt
        let ticketQuantity = prompt(`¿Cuántas entradas deseas comprar para ${eventName}? Ingrese un número entre 1 y 4.`);

        // Para convertir la entrada del usuario a un número
        ticketQuantity = parseInt(ticketQuantity, 10);
        console.log(ticketQuantity);

        // Validar que la cantidad esté dentro del rango permitido
        if (!isNaN(ticketQuantity) && ticketQuantity > 0 && ticketQuantity <= 4) {
            alert(`¡Compra de ${ticketQuantity} entradas para ${eventName} realizada con éxito!`);
        } else {
            alert('Por favor, ingresa una cantidad válida de entradas (entre 1 y 4).');
        }
    } else {
        // Para redirigir al usuario a la página de registro/inicio de sesión si no ha iniciado sesión
        window.location.href = "./usuario.html";
        alert('Inicia sesión primero para comprar entradas.');
      
    }

    console.log('control after');
}

