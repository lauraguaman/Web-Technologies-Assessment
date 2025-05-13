//homepagehomepagehomepage
// Carrusel automático + flechas
let currentSlide = 0;
const slides = document.querySelectorAll(".home-carousel-slide");
const totalSlides = slides.length;

// Mostrar slide actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
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
const carousel = document.querySelector(".home-carousel-images");
carousel.addEventListener("mouseover", () => clearInterval(autoSlide));
carousel.addEventListener(
  "mouseout",
  () => (autoSlide = setInterval(nextSlide, 5000))
);

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
  boxes.forEach((box) => {
    box.classList.remove("active");
  });

  // Mostrar solo el texto del box clicado
  element.classList.add("active");
  element.querySelector(".value-text").textContent = valueText;
}

//faqfaqfaqfaqfaqfaqfaq

// Obtén todas las preguntas
const faqQuestions = document.querySelectorAll(".faq-question");

// Añade un evento de clic a cada pregunta
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    // Alterna la clase 'active' para mostrar u ocultar la respuesta
    question.classList.toggle("active");
  });
});

/**
 * quiz
 */
document.getElementById("submitQuiz").addEventListener("click", function () {
  document.getElementById("quizThankYou").classList.remove("hidden");
});
/**
 * quiz
 */
function checkQuiz() {
  let score = 0;
  const correctAnswers = {
    q1: "red",
    q2: "photoshop",
    q3: "expressing",
  };

  // Comprobamos cada pregunta
  for (let q in correctAnswers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === correctAnswers[q]) {
      score++;
    }
  }

  // Oculta el formulario del quiz
  document.getElementById("quiz-form").style.display = "none";

  // Muestra el resultado
  const result = document.getElementById("quiz-result");
  result.textContent = `Good job! Your score is ${score}/3`;
  result.classList.remove("hidden");
}

// Mostrar mensaje tras enviar el formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que recargue la página

    // Oculta el formulario
    form.style.display = "none";

    // Muestra el mensaje de agradecimiento
    document.getElementById("formThankYou").classList.remove("hidden");
  });
});

function checkQuiz() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');

  if (!q1 || !q2 || !q3) {
    document.getElementById("quiz-result").textContent =
      "Please answer all the questions.";
    return;
  }

  let score = 0;
  if (q1.value === "red") score++;
  if (q2.value === "photoshop") score++;
  if (q3.value === "expressing") score++;

  let resultText = "";
  if (score === 3) {
    resultText = "Excellent! You're a perfect fit for Solent Art!";
  } else if (score === 2) {
    resultText = "Nice! You're on the right track.";
  } else {
    resultText = "Don't worry! Solent Art will help you grow.";
  }

  document.getElementById("quiz-result").textContent = resultText;
}

/**
 * quiz
 */
document.getElementById("submitQuiz").addEventListener("click", function () {
  document.getElementById("quizThankYou").classList.remove("hidden");
});
/**
 * quiz
 */
function checkQuiz() {
  let score = 0;
  const correctAnswers = {
    q1: "red",
    q2: "photoshop",
    q3: "expressing",
  };

  // Comprobamos cada pregunta
  for (let q in correctAnswers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === correctAnswers[q]) {
      score++;
    }
  }

  // Oculta el formulario del quiz
  document.getElementById("quiz-form").style.display = "none";

  // Muestra el resultado
  const result = document.getElementById("quiz-result");
  result.textContent = `Good job! Your score is ${score}/3`;
  result.classList.remove("hidden");
}

// Mostrar mensaje tras enviar el formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que recargue la página

    // Oculta el formulario
    form.style.display = "none";

    // Muestra el mensaje de agradecimiento
    document.getElementById("formThankYou").classList.remove("hidden");
  });
});
