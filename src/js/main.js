import '../sass/main.sass'

import 'slick-carousel'

$(document).ready(function () {

  $('.call-me').on('click', function () {
    callMe()
  });

  $('.contact__call-me').on('click', function () {
    callMe()
  });

  // Main slider
  $('.main-slider').slick({
    slidesToShow: 1,
    //autoplay: true,
    //autoplaySpeed: 5000,
    prevArrow: `<div class="arrow left-arrow"><img src="img/arrow.png" alt=""></div>`,
    nextArrow: `<div class="arrow right-arrow"><img src="img/arrow.png" alt=""></div>`
  });

  // Slider 'Our work'
  $('.our-work-slider').slick({
    slidesToShow: 1,
    prevArrow: `<div class="arrow left-arrow"><img src="img/arrow.png" alt=""></div>`,
    nextArrow: `<div class="arrow right-arrow"><img src="img/arrow.png" alt=""></div>`
  });

  // Slider 'Testimonials'
  $('.testimonials-slider').slick({
    slidesToShow: 1,
    prevArrow: `<div class="arrow left-arrow"><img src="img/arrow.png" alt=""></div>`,
    nextArrow: `<div class="arrow right-arrow"><img src="img/arrow.png" alt=""></div>`
  })

});

// Call me Pop-up
function callMe() {
  $('.call-me-action').show();

  $('.close').on('click', function () {
    $('.call-me-action').hide()
  });

  $('#call-me-action-form').on('submit', function (e) {
    e.preventDefault();
  })
}
