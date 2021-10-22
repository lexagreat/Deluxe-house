function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

// Burger
const bodyElement = document.querySelector("body");
const menuBurger = document.querySelector(".menu-burger");
const headerMenu = document.querySelector(".menu-body");
menuBurger.addEventListener("click", function (event) {
   menuBurger.classList.toggle("active");
   headerMenu.classList.toggle("active");
   bodyElement.classList.toggle("lock");
});






//Menu-sublist
const menuSublistLink = document.querySelectorAll(".menu-list__item_submenu");

function menuSublistLinkActive() {
   if (menuSublistLink.length > 0) {
      for (let i = 0; i < menuSublistLink.length; i++) {
         let menuSublistLinkItem = menuSublistLink[i];
         menuSublistLinkItem.addEventListener("click", function () {
            menuSublistLinkItem.classList.toggle("_active")
         })
      }
   }
}
menuSublistLinkActive();


// Tabs
$(document).ready(function () {

   $('body').on('click', '.repair-deadlines__link', function () {
      $('.repair-deadlines__link').removeClass('active');
      $(this).addClass('active');
      var href = $(this).attr("href");
      $('.repair-deadlines__tab').removeClass('active');
      $(href).addClass('active');
      return false;
   });
})

$(document).ready(function () {

   $('body').on('click', '.about-weDid__link a', function () {
      $('.about-weDid__link a').removeClass('active');
      $(this).addClass('active');
      var href = $(this).attr("href");
      $('.about-weDid__image').removeClass('active');
      $(href).addClass('active');
      return false;
   });

})


// Spoilers
$(document).ready(function () {
   $('.faq-item__title').click(function (event) {
      $(this).toggleClass("active").next().slideToggle(300);
   })
})


// Slider

// new Swiper('.image-slider', {
//    //Стрелки
//    navigation: {
//       nextEl: '.swiper-button-next', // Назначение класса
//       prevEl: '.swiper-button-prev', // Назначение класса
//    },
//    pagination: {
//       el: '.swiper-pagination', // Назначение класса
//       type: 'bullets', // Значение по умолчанию
//       clickable: true,
//    },
//    slideToClickedSlide: true,
//    keyboard: {
//       enabled: true,
//       onlyInViewport: true, // Св-ва по умолчанию
//       pageUpDown: true,
//    },
//    autohigh: true, // Высота сладера подстраивается под высоту картинок
//    slidesPerView: 1, // Кол-во слайдов для показа
//    watchOverflow: true, // Вкл/Выкл функционала, если слайдеров меньше, чем нужно
//    spaceBetween: 30,
//    centeredSlides: true, // Активный слайд по центру
//    loop: true, // Бесконечный режим
//    speed: 400, // Скорость
// });