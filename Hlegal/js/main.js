const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
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








