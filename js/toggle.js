// Obtenemos una referencia al botón
const modoOscuroBtn = document.getElementById('modoOscuroBtn');

// Agregamos un evento de clic al botón
modoOscuroBtn.addEventListener('click', () => {
    // Toggleamos la clase 'dark-mode' en el cuerpo del documento
    document.body.classList.toggle('dark-mode');
});