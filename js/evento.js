class Evento {
    #nombre;
    #fecha;
    #hora;
    #lugar;
    #imagen;

    constructor(nombre, fecha, hora, lugar, imagen) {
        this.#nombre = nombre;
        this.#fecha = fecha;
        this.#hora = hora;
        this.#lugar = lugar;
        this.#imagen = imagen;

    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getFecha() {
        return this.#fecha;
    }

    setFecha(fecha) {
        this.#fecha = fecha;
    }

    getHora() {
        return this.#hora;
    }

    setHora(hora) {
        this.#hora = hora;
    }

    getLugar() {
        return this.#lugar;
    }

    setLugar(lugar) {
        this.#lugar = lugar;
    }

    getImagen() {
        return this.#imagen;
    }

    setImagen(imagen) {
        return this.#imagen=imagen;
    }

    getInfo() {
        return `Nombre: ${this.#nombre}, Fecha: ${this.#fecha}, Hora: ${this.#hora}, Lugar: ${this.#lugar}, Imagen: ${this.#imagen}`;
    }

    //Para la función de búsqueda de horarios.js
    matchesSearch(query) {
        const artistLower = this.#nombre.toLowerCase();
        return artistLower.includes(query);
    }
}

//array con todos los eventos
const eventos = [
    new Evento("Descubre a nuestros artistas", "19 y 20 de Enero", "Apertura de puertas: 15:00", "Estadio Gran Canaria", "../assets/img/bannersmall.jpg"),
    new Evento("Flying Lotus", "19/01/2024", "17:00-18:15", "Estadio Gran Canaria", "../assets/artistas/flying_lotus.jpg"),
    new Evento("The Hics", "19/01/2024", "18:45-20:00", "Estadio Gran Canaria", "../assets/artistas/hics.jpg"),
    new Evento("Little Simz", "19/01/2024", "20:30-21:45", "Estadio Gran Canaria", "../assets/artistas/littlesimz.webp"),
    new Evento("Nick Hakim", "19/01/2024", "22:15-23:30", "Estadio Gran Canaria", "../assets/artistas/nick_hakim.jpeg" ),
    new Evento("The Kid Laroi", "19/01/2024", "00:00-01:30", "Estadio Gran Canaria", "../assets/artistas/kid.jpg"),
    new Evento("Cruz Cafuné", "19/01/2024", "02:00-03:15", "Estadio Gran Canaria", "../assets/artistas/cruzi.webp" ),
    new Evento("Hiatus Kaiyote", "20/01/2024", "17:00-18:15", "Estadio Gran Canaria", "../assets/artistas/hiatus_kaiyote.jpg"),
    new Evento("Quevedo", "20/01/2024", "18:45-20:00", "Estadio Gran Canaria", "../assets/artistas/quevedo.webp"),
    new Evento("Maroon 5", "20/01/2024", "20:30-21:45", "Estadio Gran Canaria", "../assets/artistas/maroon5.jpg"),
    new Evento("Kendrick Lamar", "20/01/2024", "22:15-23:30", "Estadio Gran Canaria", "../assets/artistas/kendrick.jpg"),
    new Evento("Erykah Badu", "20/01/2024", "02:00-03:15", "Estadio Gran Canaria", "../assets/artistas/erykah.jpg"),
    new Evento("Yaeji", "20/01/2024", "02:00-03:15", "Estadio Gran Canaria", "../assets/artistas/yaeji.webp" ),    
];

const prevButton = document.getElementById('left-arrow');
const nextButton = document.getElementById('right-arrow');
const slides = document.getElementsByClassName('img_player');
const artists = document.getElementsByClassName('nombre')[0];
const date = document.getElementsByClassName('fecha')[0];
const time = document.getElementsByClassName('hora')[0];
const place = document.getElementsByClassName('lugar')[0];
const imgPlayers = document.getElementsByClassName('img_player');
const imgPlayer = imgPlayers[0];


let currentSlideIndex = 0;
function updateSliderVisibility() {
    const currentEvento = eventos[currentSlideIndex];

    if (!currentEvento) {
        console.error('currentEvento es undefined');
        return;
    }

    artists.innerText = currentEvento.getNombre();
    date.innerText = currentEvento.getFecha();
    time.innerText = currentEvento.getHora();
    place.innerText = currentEvento.getLugar();

    imgPlayer.src = currentEvento.getImagen();

    prevButton.disabled = currentSlideIndex === 0;
    nextButton.disabled = currentSlideIndex === eventos.length - 1;
}

function nextStep() {
    if (currentSlideIndex < eventos.length - 1) {
        currentSlideIndex++;
    }
    updateSliderVisibility();
}

function prevStep() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    }
    updateSliderVisibility();
}

prevButton.addEventListener('click', prevStep);
nextButton.addEventListener('click', nextStep);

// Necesario para mostrar el primer evento al cargar la página
updateSliderVisibility()


function validarEmail(email) {
    // Expresión regular para validar una dirección de correo electrónico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function suscribirse() {
    // Obtención del valor del campo de correo electrónico
    const email = document.getElementById('newsletter_link').value;

    // Validación de la dirección de correo electrónico
    if (validarEmail(email)) {
        // Confirmación de suscripción
        alert('¡Gracias por suscribirte!');
    } else {
        //Alerta de error
        alert('Por favor, introduce una dirección de correo electrónico válida.');
    }
}