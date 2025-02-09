document.addEventListener("DOMContentLoaded", function () {
  //tiny slider
 var slider = tns({
    container: ".my-slider", // Selecciona tu contenedor
    items: 6, // Número de elementos visibles 
    slideBy: "page", // Desplazar por página o por elemento
    loop: true, // Hace que recorra el carrusel
    autoplay: true, // Activar autoplay
    controls: false, // Ocultar flechas de control
    nav: false, // Ocultar las bolitas de navegación
    autoplayButtonOutput: true, // Quita el botón de autoplay
    mouseDrag: true,
    speed: 3000,
    responsive: {
        // Configuración adaptable
    300: { 
            items: 3,
          },
      640: {
        items: 2,
      },
      900: {
        items: 6,
      },
    },
  }); 

  //efecto subrayado
  const textos = document.querySelectorAll(".texto-subrayado");

  function mostrarSubrayado() {
    textos.forEach(texto => {
      const posicion = texto.getBoundingClientRect().top;
      const alturaPantalla = window.innerHeight;

      if (posicion < alturaPantalla * 0.8) { // Activa antes de que esté completamente visible
        texto.classList.add("activo");
      }
    });
  }

  window.addEventListener("scroll", mostrarSubrayado);

  //script fancy box
  Fancybox.bind("[data-fancybox]", {});

 
 
});
