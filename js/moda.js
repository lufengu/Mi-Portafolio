// Typed

const typed = new Typed('.typed', {
    strings: ['Ingeniera informática...','Programación...', 'Lufengu...', 'Pixel-art...', 'Deportista...'],
    typeSpeed:45,
    backSpeed:60,
    loop: true
});


// Obtener todas las imágenes del portafolio
const imagenesPortafolio = document.getElementsByClassName("imagen-port");

// Agregar un evento clic a cada imagen
for (let i = 0; i < imagenesPortafolio.length; i++) {
    imagenesPortafolio[i].addEventListener("click", () => {
        // Obtener la imagen específica que se hizo clic
        const imagen = imagenesPortafolio[i].querySelector("img");
        
        // Obtener el modal y la imagen dentro del modal
        const modal = document.getElementById("modal-img");
        const imagenModal = modal.querySelector("img");
        
        // Asignar la imagen específica al modal
        imagenModal.src = imagen.src;
        
        // Mostrar el modal ayudaaaaaaaaaaa :''V
        modal.style.display = "block";
    });
}

// Agregar evento clic al área de pantalla del modal para cerrarlo
document.getElementById("screen-modal").addEventListener("click", () => {
    document.getElementById("modal-img").style.display = "none";
});
