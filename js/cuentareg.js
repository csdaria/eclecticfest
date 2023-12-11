    // Establecer la fecha meta, que es 19 de enero de 2024 a las 3:00 PM, coincidiendo con la apertura de puertas
    const fechaObjetivo = new Date('January 19, 2024 15:00:00').getTime();

    // Actualizar la cuenta regresiva cada segundo
    const cuentaRegresiva = setInterval(function() {
        // Obtener la fecha y hora actual
        const ahora = new Date().getTime();

        // Calcular la diferencia entre la fecha objetivo y la fecha actual
        const diferencia = fechaObjetivo - ahora;

        // Calcular días, horas, minutos y segundos restantes
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Mostrar la cuenta regresiva en el formato DD:HH:MM:SS
        const elementoCuentaRegresiva = document.getElementById('cuentaReg');
        elementoCuentaRegresiva.innerHTML = `Faltan ${dias} días ${horas} horas ${minutos} minutos y ${segundos} segundos.<br> ¡No te quedes sin tu entrada!`;

        // Si el tiempo ha pasado, se muestra el mensaje
        if (diferencia < 0) {
            clearInterval(cuentaRegresiva);
            elementoCuentaRegresiva.innerHTML = '¡Ya ha llegado!';
        }
    }, 1000);