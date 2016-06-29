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

	$('.testimonials-carousel').owlCarousel({
		loop:true,
	    dots:true,
	    items:1
	});

	$('.menu a').click(function(event) {
		event.preventDefault();
		var all_links = $('.menu a');
		if (!$(this).hasClass('active-item')) {
			all_links.removeClass('active-item');
			$(this).addClass('active-item');
		}
	});

	$(".toggle_menu").click(onClickToggleMenu);

	function onClickToggleMenu() {
		if ($(".sandwich").is(":visible")) {
			if ($(".sandwich").is(".active_sw")) {
				$(".sandwich").removeClass("active_sw");
				$(".mobile-menu").slideUp(400);
			} else {
				$(".sandwich").addClass("active_sw");
				$(".mobile-menu").slideDown(400);
			};
		};
	};

  }); //end ready

}(jQuery));