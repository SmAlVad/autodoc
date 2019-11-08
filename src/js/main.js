import '../sass/main.sass'

import 'slick-carousel'
import Inputmask from 'inputmask'

$(document).ready(function () {

  // Кнопка "Перезвонить мне" в навигации
  $('.call-me').on('click', function () {
    callMe()
  });

  // Кнопка "Перезвонить мне" в контактах
  $('.contact__call-me').on('click', function () {
    callMe()
  });

  // Кнопка "Перезвонить мне" в мобильном меню
  $('.mob-call-me').on('click', function () {
    callMe()
  });

  // Главный слайдер
  $('.main-slider').slick({
    slidesToShow: 1,
    centerPadding: 0,
    //autoplay: true,
    //autoplaySpeed: 5000,
    prevArrow: `<div class="arrow left-arrow"><img src="img/arrow.png" alt=""></div>`,
    nextArrow: `<div class="arrow right-arrow"><img src="img/arrow.png" alt=""></div>`
  });

  // Слайдер "Наши работы"
  // $('.our-work-slider').slick({
  //   slidesToShow: 1,
  //   prevArrow: `<div class="arrow left-arrow"><img src="img/arrow.png" alt=""></div>`,
  //   nextArrow: `<div class="arrow right-arrow"><img src="img/arrow.png" alt=""></div>`
  // });

  // Слайдер "Отзывы"
  // $('.testimonials-slider').slick({
  //   slidesToShow: 1,
  //   prevArrow: `<div class="arrow left-arrow"><img src="img/arrow.png" alt=""></div>`,
  //   nextArrow: `<div class="arrow right-arrow"><img src="img/arrow.png" alt=""></div>`
  // });

  // Мобильное меню
  $('.mob-menu').on('click', function (e) {
    $('.mob-nav').slideToggle();
  })

});

// Перезвоните мне
function callMe() {
  let formHtml = `
        <h3 style="margin-top: 0;">Заполните форму</h3>

        <div class="form-group">
          <label for="call-me-action-form-name">Имя</label>
          <input type="text" name="name" id="call-me-action-form-name" required>
        </div>

        <div class="form-group">
          <label for="call-me-action-form-phone">Телефон</label>
          <input type="text" name="phone" id="call-me-action-form-phone" required>
        </div>

        <div class="form-submit">
          <input type="submit" value="Перезвоните мне">
        </div>
  `;

  const imPhone = new Inputmask("+7 (999) 999-99-99");
  imPhone.mask($('#call-me-action-form-phone'));

  $('.call-me-action').fadeIn(300);

  $('.close').on('click', function () {
    $('.call-me-action').fadeOut(300)
  });

  // Отправка данных с формы
  $('#call-me-action-form').on('submit', function (e) {
    e.preventDefault();

    let data = $(this).serialize();
    let url = $(this).attr('action');

    $.ajax({
      url: url,
      async: true,
      dataType: "json",
      type: "POST",
      data: data,
      beforeSend: function () {
        $('.form-body').html('<p>секунду ...</p>');
      },
      success: function (data) {
        if(data.success === true) {
          $('.form-body').html(`<p>${data.message}</p>`);
        } else {
          $('.form-body').html(formHtml);
          $('.form-body h3').after(`<p style="color:#dc0910;">${data.message}</p>`);
        }
      },
      error: function (error) {
        $('.form-body').html('<p>Ошибка сети</p>');
        console.log(error)
      }
    });

  })
}
