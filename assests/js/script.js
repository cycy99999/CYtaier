/*
Template Name: Shuruwat - Software/Marketing Agency HTML Template
Author: Askbootstrap
Author URI: https://www.templatemonster.com/vendors/Askbootstrap
Version: 1.0
*/

(function($) {
  "use strict"; // Start of use strict

// Category Owl Carousel
  const objowlcarousel = $('.owl-carousel');
  if (objowlcarousel.length > 0) {
    objowlcarousel.owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      nav: true,
      dots: true,
      paginationSpeed : 400,
      singleItem:true,
      loop:true,
      items : 1,
      itemsDesktop : false,
      goToFirst:true,
      autoplay:true,
    });
  }

})(jQuery); // End of use strict
