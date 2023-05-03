const sliders = document.querySelectorAll(".slider");
sliders.forEach((slider) => {
  const slides = slider.querySelectorAll(".slide");

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
  });

  const nextSlide = slider.querySelector(".btn-next");

  let curSlide = 0;

  let maxSlide = slides.length - 1;

  nextSlide.addEventListener("click", function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });

  const prevSlide = slider.querySelector(".btn-previous");

  prevSlide.addEventListener("click", function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  });
});
