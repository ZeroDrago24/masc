let index = 0;
const slides = document.querySelectorAll('.carousel img');

function nextSlide() {
  slides[index].style.display = 'none';
  index = (index + 1) % slides.length;
  slides[index].style.display = 'block';
}

setInterval(nextSlide, 3000);
