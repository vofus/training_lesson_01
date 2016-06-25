(function ($) {
  'use strict';

  $(document).ready(function () {

  	$('.header-carousel').owlCarousel({
	    loop:true,
	    nav:true,
	    dots:true,
	    items:1,
		navText: ["",""]
	});

	$('.menu a').click(function(event) {
		event.preventDefault();
		var all_links = $('.menu a');
		if (!$(this).hasClass('active-item')) {
			all_links.removeClass('active-item');
			$(this).addClass('active-item');
		}
	});



  }); //end ready

}(jQuery));