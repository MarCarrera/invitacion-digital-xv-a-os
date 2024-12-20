
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

//EFECTO AUTOMATICO SLIDER
// Código para iniciar el Swiper después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', function () {
  // Inicializar el Swiper con la clase correcta
  var TrandingSlider = new Swiper('.tranding-slider', {
      effect: 'coverflow', // Efecto de coverflow
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
      },
      autoplay: {
          delay: 1500, // Cambia las imágenes cada 2 segundos
          disableOnInteraction: false, // No se desactiva el autoplay cuando se interactúa
      }
  });

  // Función para la animación en el scroll
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate__fadeInUp');
              observer.unobserve(entry.target); // Deja de observar para no reanimar
          }
      });
  });

  // Seleccionar y animar los elementos observables
  document.querySelectorAll('.animate__animated').forEach((element) => {
      element.classList.remove('animate__fadeInUp');
      observer.observe(element);
  });

  // Función adicional para la canción, progreso, etc.
  // Aquí iría tu código para manejar la canción, la barra de progreso, etc.
});


//------------------------------------------------------------

const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');

let currentIndex = 0;
let slideInterval;

// Crear paginación
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.addEventListener('click', () => goToSlide(index));
    pagination.appendChild(dot);
});

const updatePagination = () => {
    const dots = document.querySelectorAll('.pagination div');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

const goToSlide = (index) => {
    currentIndex = index;
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePagination();
};

const startSlider = () => {
    slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }, 1500);
};

const stopSlider = () => {
    clearInterval(slideInterval);
};

// Inicialización
updatePagination();
startSlider();

// Pausar slider al pasar el mouse por encima
sliderWrapper.addEventListener('mouseenter', stopSlider);
sliderWrapper.addEventListener('mouseleave', startSlider);









  