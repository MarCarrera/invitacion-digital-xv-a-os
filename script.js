
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  //CANCION 

  const audio = document.getElementById('audio-player');
const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Manejar reproducción/pausa
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '&#10074;&#10074;'; // Cambiar a ícono de pausa
  } else {
    audio.pause();
    playBtn.innerHTML = '&#9654;'; // Cambiar a ícono de play
  }
});

// Opcional: agregar funcionalidad a los botones prev y next
prevBtn.addEventListener('click', () => {
  // Lógica para pista anterior (si tienes una lista de canciones)
  audio.currentTime = 0; // Reinicia la canción
});

nextBtn.addEventListener('click', () => {
  // Lógica para pista siguiente (si tienes una lista de canciones)
  console.log('Siguiente canción');
});

// Actualizar la barra de progreso
audio.addEventListener('timeupdate', () => {
  const progressBar = document.querySelector('.progress-bar');
  progressBar.value = (audio.currentTime / audio.duration) * 100;
});

// Cambiar el progreso manualmente
document.querySelector('.progress-bar').addEventListener('input', (e) => {
  audio.currentTime = (e.target.value / 100) * audio.duration;
});

//ANIMACION EN SCROLL
// Configuración del Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Si el elemento está en el viewport, añade la clase de animación
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp'); // Activa la animación
      observer.unobserve(entry.target); // Deja de observar para no reanimar
    }
  });
});

// Selecciona todos los elementos que deseas animar
document.querySelectorAll('.animate__animated').forEach((element) => {
  // Quita la clase de animación inicial para que no se ejecute de inmediato
  element.classList.remove('animate__fadeInUp');
  // Observa el elemento
  observer.observe(element);
});





  