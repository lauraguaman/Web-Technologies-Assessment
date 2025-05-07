//homepagehomepagehomepage
// Carrusel automático + flechas
let currentSlide = 0;
const slides = document.querySelectorAll('.home-carousel-slide');
const totalSlides = slides.length;

// Mostrar slide actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Siguiente slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Carrusel automático cada 5 segundos
let autoSlide = setInterval(nextSlide, 5000);

// Pausar el carrusel cuando se pasa el mouse por encima (opcional)
const carousel = document.querySelector('.home-carousel-images');
carousel.addEventListener('mouseover', () => clearInterval(autoSlide));
carousel.addEventListener('mouseout', () => autoSlide = setInterval(nextSlide, 5000));

// Mostrar primer slide al cargar
showSlide(currentSlide);




// Mostrar texto de Vision y Mision
function showVision() {
    document.getElementById("visionText").style.display = "block";
    document.getElementById("missionText").style.display = "none";
  }
  
  function showMission() {
    document.getElementById("missionText").style.display = "block";
    document.getElementById("visionText").style.display = "none";
  }
  
  // Mostrar valor al hacer clic en una imagen
  function showValue(element, valueText) {
    // Ocultar todos los textos de valor
    let boxes = document.querySelectorAll(".gallery-box");
    boxes.forEach(box => {
      box.classList.remove("active");
    });
  
    // Mostrar solo el texto del box clicado
    element.classList.add("active");
    element.querySelector(".value-text").textContent = valueText;
  }
  
//faqfaqfaqfaqfaqfaqfaq

// Obtén todas las preguntas
const faqQuestions = document.querySelectorAll('.faq-question');

// Añade un evento de clic a cada pregunta
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Alterna la clase 'active' para mostrar u ocultar la respuesta
    question.classList.toggle('active');
  });
});





  

