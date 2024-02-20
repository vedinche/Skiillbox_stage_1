document.addEventListener("DOMContentLoaded", function () {
  // burger
  let burgerBtn = document.querySelector(".burger__btn");
  let burgerMenu = document.querySelector(".burger__menu");

  function toggleMenu() {
    burgerBtn.classList.toggle("open");
    burgerMenu.classList.toggle("open");
  }

  burgerBtn.addEventListener("click", toggleMenu);
  burgerMenu.addEventListener("click", toggleMenu);

  // slider
  const swiper = new Swiper(".hero__container", {
    slidesPerView: 1,
    loop: true,
    speed: 600,

    // пагинация
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 3000,
    },
  });
});
