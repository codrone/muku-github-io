$('.testimonials').owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 1000,
  navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right" ></i>'],
  items: 1
});
/* testimonials Slider Active
=============================*/
$('.screen-slider').owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 1000,
  navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right" ></i>'],
  items: 1,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  center: true,
});
/* testimonials Slider Active
=============================*/
$('.clients').owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 1000,
  navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right" ></i>'],
  responsive: {
      0: {
          items: 3,
      },
      600: {
          items: 4
      },
      1000: {
          items: 6
      }
  }
});