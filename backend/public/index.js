document.addEventListener("DOMContentLoaded", function () {
  // --------- Home Carousel ----------
  let currentSlide = 0;
  const slides = document.querySelectorAll(".home-carousel-slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  const carousel = document.querySelector(".home-carousel-images");
  if (carousel) {
    let autoSlide = setInterval(nextSlide, 5000);
    carousel.addEventListener("mouseover", () => clearInterval(autoSlide));
    carousel.addEventListener("mouseout", () => {
      autoSlide = setInterval(nextSlide, 5000);
    });
    showSlide(currentSlide);
  }

  // --------- Vision/Mission Buttons ----------
  window.showVision = function () {
    document.getElementById("visionText").style.display = "block";
    document.getElementById("missionText").style.display = "none";
  };

  window.showMission = function () {
    document.getElementById("missionText").style.display = "block";
    document.getElementById("visionText").style.display = "none";
  };

  // --------- Gallery Box Text ----------
  window.showValue = function (element, value) {
    const box = element.closest(".gallery-box");
    const overlay = box.querySelector(".overlay-text");
    overlay.textContent = value;
    overlay.classList.add("visible");
  };

  window.hideValue = function (element) {
    const box = element.closest(".gallery-box");
    const overlay = box.querySelector(".overlay-text");
    overlay.classList.remove("visible");
  };

  // --------- join events page ----------
  // Join Our Events card links to /events
  const joinEventsBox = document.getElementById("join-events-box");
  if (joinEventsBox) {
    joinEventsBox.addEventListener("click", function () {
      window.location.href = "/events";
    });
  }

  // --------- arttrade join our open days events----------
  window.confirmAttendance = function () {
    const container = document.getElementById("attendance-section");
    container.innerHTML = `
      <p class="attend-confirmation">
        -Thanks for your interest! We look forward to seeing you at the event.
      </p>
    `;
  };

  // --------- join simulation botton  ----------
  const registerButtons = document.querySelectorAll(".event-button");

  registerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.style.display = "none";
      const message = button.nextElementSibling;
      if (message) {
        message.style.display = "inline";
      }
    });
  });

  // --------- FAQ Toggle ----------
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      if (answer) {
        answer.classList.toggle("active");
        answer.classList.toggle("hidden");
      }
    });
  });

  // --------- Quiz Logic ----------
  const btn = document.getElementById("quizSimpleBtn");
  const result = document.getElementById("quizSimpleResult");
  const form = document.getElementById("easyQuizForm");

  if (btn && result && form) {
    btn.addEventListener("click", () => {
      const q1 = document.querySelector('input[name="q1"]:checked');
      const q2 = document.querySelector('input[name="q2"]:checked');
      const q3 = document.querySelector('input[name="q3"]:checked');

      if (!q1 || !q2 || !q3) {
        result.textContent = "Please answer all the questions.";
        result.classList.remove("hidden");
        return;
      }

      let score = 0;
      if (q1.value === "red") score++;
      if (q2.value === "photoshop") score++;
      if (q3.value === "expressing") score++;

      form.classList.add("hidden");
      result.innerHTML = `- Your score is ${score}/3.<br><br> Don’t worry about the score—Solent Art is here to help you grow your artistic career!`;
      result.classList.remove("hidden");
    });
  }

  // --------- Contact Form ----------
  // FORMULARIO
  // Contact form handler
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Evita recargar la página

      const formData = new FormData(contactForm);

      try {
        const response = await fetch("/information", {
          method: "POST",
          body: new URLSearchParams(formData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        if (response.ok) {
          contactForm.style.display = "none";
          successMessage.style.display = "block";
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Network error. Please try again.");
      }
    });
  }
});
