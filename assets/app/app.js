// swiper side scrolling container
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// navbar toggle
const hamBtn = document.querySelector(".hamburger-icon");
const navBar = document.querySelector(".navigation");
const allNavLink = document.querySelectorAll(".nav__link");

hamBtn.addEventListener("click", () => {
  navBar.classList.toggle("hamTog");
  hamBtn.classList.toggle("hamburger-icon-hover");
});

allNavLink.forEach((ele) => {
  ele.addEventListener("click", () => {
    navBar.classList.toggle("hamTog");
    hamBtn.classList.toggle("hamburger-icon-hover");
  });
});
