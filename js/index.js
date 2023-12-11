const prevButton = document.getElementById('left-arrow');
    const nextButton = document.getElementById('right-arrow');
    const slides = document.getElementsByClassName('img_player');
    const artists = document.getElementsByClassName('nombre');
    const date=document.getElementsByClassName('date');
    
    let currentSlideIndex = 0;

    updateSliderVisibility();

    function nextStep() {
        if (currentSlideIndex < slides.length - 1) {
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

    function updateSliderVisibility() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = i === currentSlideIndex ? 'block' : 'none';
        }

        for (let i = 0; i < artists.length; i++) {
            artists[i].classList.add('hidden');
            
        }

        for (let i = 0; i < date.length; i++) {
            date[i].classList.add('hidden');
            
        }

        artists[currentSlideIndex].classList.remove('hidden');
        date[currentSlideIndex].classList.remove('hidden');

    
        const currentArtist = artists[currentSlideIndex].innerText;
        const currentDate = date[currentSlideIndex].innerText;

        // Activar o desactivar en función de los que pongan
        prevButton.disabled = currentSlideIndex === 0;
        nextButton.disabled = currentSlideIndex === slides.length - 1;
    }

    prevButton.addEventListener('click', prevStep);
    nextButton.addEventListener('click', nextStep);

    function validarEmail(email) {
        // Expresión regular para validar una dirección de correo electrónico
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    function suscribirse() {
        // Obtención del valor del campo de correo electrónico
        const email = document.getElementById('newsletter_email').value;

        // Validación de la dirección de correo electrónico
        if (validarEmail(email)) {
            // Confirmación de suscripción
            alert('¡Gracias por suscribirte!');
        } else {
            //Alerta de error
            alert('Por favor, introduce una dirección de correo electrónico válida.');
        }
    }
