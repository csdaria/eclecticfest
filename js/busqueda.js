

//Función de búsqueda de horarios.html
document.addEventListener('DOMContentLoaded', function () {
    const artists = document.getElementsByClassName('artist_psa');
    const search = document.getElementById('search');
    const coincidencia = document.querySelector('.coincidences');

    // Asignar la función buscarArtista al evento change del input
    search.addEventListener('change', buscarArtista);

  
    function buscarArtista() {
        const str = search.value.toLowerCase();

        if (str === '') {
            coincidencia.innerHTML = '';
            eliminarSeleccion();
            return;
        }

        //Aquí se usa el filter como método de array para crear uno nuevo con las coincidencias, mejor que mapear los strings para buscar coincidencias, ya que este da problemas cuando dos términos se parecen mucho
        const matches = eventos.filter(evento => evento.matchesSearch(str));

        coincidencia.innerHTML = '';
        //Generación de los elementos de búsqueda con el DOM
        if (matches.length > 0) {
            const resultHTML = matches
            //y aquí con map se crea la nueva cadena HTML resultatne
                .map(match => `<li style="text-decoration:none; color: white"><a href="#" onclick="goToEvento('${match.getNombre()}')" style="text-decoration:none; color: white">${match.getNombre()}</a></li>`)
                .join('');
            coincidencia.innerHTML = `<ul>${resultHTML}</ul>`;
        }else{
            alert("Artista no encontrado");
        }

    }

    //Para que me reconozca la función he tenido que moverla fuera del bloque del DOMContentLoad con window porque si no, no me reconocía el EventoNombre
    window.goToEvento = function (eventoNombre)  {
        if (eventoNombre) {
            eliminarSeleccion();
            const eventoIndex = eventos.findIndex(
                evento => evento.getNombre().toLowerCase() === eventoNombre.toLowerCase()
            );
    
            if (eventoIndex !== -1) {
                const row = document.querySelectorAll('.act')[eventoIndex];
                row.classList.add('fila-js');
                row.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            console.error('Nombre del artista no proporcionado');
        }
    }

    function eliminarSeleccion() {
        Array.from(artists).forEach(artist => {
            const row = artist.closest('tr');
            if (row.classList.contains('fila-js')) {
                row.classList.remove('fila-js');
            }
        });
    }
});