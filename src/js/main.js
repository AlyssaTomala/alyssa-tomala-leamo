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

function changeBg() {
  var navbar = document.getElementById("navbar");
  var scrollValue = window.scrollY;
  if (scrollValue < 150) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}

window.addEventListener("scroll", changeBg);

var burger = document.querySelector(".burger-test");
var navigation = document.querySelector(".burger-nav");
var openNavigation = function (event) {
  event.preventDefault();
  navigation.classList.toggle("is-open");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", openNavigation);

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
