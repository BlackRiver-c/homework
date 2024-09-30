const achievementsSwiper = new Swiper('.achievements-swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
   850: {
      slidesPerView: 4, 
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

const newsSwiper = new Swiper('.news-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.header__burger');
  const navWrapper = document.querySelector('.header__nav-wr');

  if (burgerButton && navWrapper) {
    burgerButton.addEventListener('click', function () {
      navWrapper.classList.toggle('active');
    });
  } else {
    console.error('One or both elements not found: .header__burger or .header__nav-wr');
  }
});








