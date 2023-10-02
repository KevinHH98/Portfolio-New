// ####### scroll ######

// navbar

// toggle Btn
const navbarList = document.querySelector(".navbar-list");
const toggleBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", () => {
  navbarList.classList.toggle("toggle");
});

// scroll links

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    const sectionHeight = section.offsetTop;
    const navbarHeight = navbar.getBoundingClientRect().height;

    if (navbarList.classList.contains("toggle")) {
      navbarList.classList.remove("toggle");
    }

    window.scrollTo({
      left: 0,
      top: sectionHeight - navbarHeight,
    });
  });
});

// ###### projekt slides ######

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".card");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  carusel();
});
prevBtn.addEventListener("click", () => {
  counter--;
  carusel();
});
console.log(slides.length - 1);
function carusel() {
  if (counter > 0) {
    prevBtn.style.visibility = "visible";
  } else {
    prevBtn.style.visibility = "hidden";
  }
  if (counter < slides.length - 1) {
    nextBtn.style.visibility = "visible";
  } else {
    nextBtn.style.visibility = "hidden";
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.visibility = "hidden";
