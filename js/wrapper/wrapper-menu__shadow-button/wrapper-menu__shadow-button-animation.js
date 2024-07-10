const texts = document.querySelectorAll(".wrapper-menu__shadow-button-text");

let currentIndex = 0;
const intervalTime = 2000;

function animateText() {
  texts[currentIndex].classList.add("logo-title_lumen");

  setTimeout(() => {
    texts[currentIndex].classList.remove("logo-title_lumen");
    currentIndex = (currentIndex + 1) % texts.length;
    animateText();
  }, intervalTime);
}

// Запуск анимации
animateText();
