const d = document;

export default function slider() {
  const $slides = d.querySelectorAll(".slider-slide"),
    $btnPrev = d.querySelector(".slider-btn-prev"),
    $btnNext = d.querySelector(".slider-btn-next");
  let counter = 0;

  setInterval(() => {
    $slides[counter].classList.remove("active");
      counter--;
      if (counter < 0) {
        counter = $slides.length - 1;
      }
      $slides[counter].classList.add("active");
  }, 5000);

  d.addEventListener("click", (e) => {
    if (e.target === $btnPrev) {
      e.preventDefault();
      $slides[counter].classList.remove("active");
      counter--;
      if (counter < 0) {
        counter = $slides.length - 1;
      }
      $slides[counter].classList.add("active");
    }
    if (e.target === $btnNext) {
      e.preventDefault();
      $slides[counter].classList.remove("active");
      counter++;
      if (counter > $slides.length - 1) {
        counter = 0;
      }
      $slides[counter].classList.add("active");
    }
  });
}
