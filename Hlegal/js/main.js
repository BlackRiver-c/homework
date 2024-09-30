

exports.default = defaultTask

document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.header__burger');
  const navWrapper = document.querySelector('.header__nav-wr');

  burgerButton.addEventListener('click', function () {
    
    navWrapper.classList.toggle('active');
  });
});