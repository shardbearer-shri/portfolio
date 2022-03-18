// swiper side scrolling container
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // mousewheel: true,
  keyboard: true,
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

// navbar highlight
const sections = document.querySelectorAll(".section-marker");
function highLight() {
  let scrollY = window.scrollY;

  sections.forEach((ele, ind) => {
    const sectionHeight = ele.offsetHeight;
    const sectionTop = ele.offsetTop - 100;
    let inde = ele.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navigation a[href*=" + inde + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navigation a[href*=" + inde + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", highLight);
