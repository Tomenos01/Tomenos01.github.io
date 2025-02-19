// Función que cambia la imagen al pasar el ratón sobre ella
function changeImage(element) {
    const img = element.querySelector('img');
    const newImageSrc = img.getAttribute('data-hover');
    img.setAttribute('data-original', img.src); // Guardamos la imagen original
    img.src = newImageSrc; // Cambiamos a la imagen del hover
}

// Función que restaura la imagen original cuando el ratón sale
function resetImage(element) {
    const img = element.querySelector('img');
    const originalImageSrc = img.getAttribute('data-original'); // Recuperamos la imagen original
    img.src = originalImageSrc; // Restauramos la imagen original
}

// Función para cargar el contenido cuando se hace clic
function loadFauna() {
    // Ocultar la galería
    document.getElementById('gallery').style.display = 'none';

    // Mostrar el contenido de flora
    document.getElementById('fauna-section').style.display = 'block';

    // Mostrar el botón de regreso para Flora
    document.getElementById('back-button-fauna').style.display = 'block';  // Asegúrate de que el id del botón sea diferente
}

function goBackFauna() {
    // Mostrar nuevamente la galería
    document.getElementById('gallery').style.display = 'flex';

    // Ocultar el contenido de flora
    document.getElementById('fauna-section').style.display = 'none';

    // Ocultar el botón de regreso para Flora
    document.getElementById('back-button-fauna').style.display = 'none';
}


function loadFlora() {
    // Ocultar la galería
    document.getElementById('gallery').style.display = 'none';

    // Mostrar el contenido de flora
    document.getElementById('flora-section').style.display = 'block';

    // Mostrar el botón de regreso para Flora
    document.getElementById('back-button-flora').style.display = 'block';  // Asegúrate de que el id del botón sea diferente
}

function goBackFlora() {
    // Mostrar nuevamente la galería
    document.getElementById('gallery').style.display = 'flex';

    // Ocultar el contenido de flora
    document.getElementById('flora-section').style.display = 'none';

    // Ocultar el botón de regreso para Flora
    document.getElementById('back-button-flora').style.display = 'none';
}

function loadConservacion() {
    // Ocultar la galería
    document.getElementById('gallery').style.display = 'none';

    // Mostrar el contenido de conservación
    document.getElementById('conservacion-section').style.display = 'block';

    // Mostrar el botón de regreso para Conservación
    document.getElementById('back-button-conservacion').style.display = 'block';  // Asegúrate de que el id del botón sea diferente
}

function goBackConservacion() {
    // Mostrar nuevamente la galería
    document.getElementById('gallery').style.display = 'flex';

    // Ocultar el contenido de conservación
    document.getElementById('conservacion-section').style.display = 'none';

    // Ocultar el botón de regreso para Conservación
    document.getElementById('back-button-conservacion').style.display = 'none';
}



