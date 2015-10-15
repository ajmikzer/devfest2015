$(document).ready(function(){

 	"use strict";	

 	$(window).load(function() {

 		// Preloader
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');

		
		// filter items on button click
		$('.portfolio-filter').on( 'click', 'a', function(e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$container.isotope({ filter: filterValue });

			$('.portfolio-filter a').removeClass('active');
			$(this).closest('a').addClass('active');

		});

	

		// Trigger Resize
		$(window).trigger("resize");

	});


	// Text Rotator
	$(".rotate").textrotator({
		animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
		separator: ",",
		speed: 3000 
	});


	// Video Full Height	    
	$(window).trigger("resize");	
	$(window).resize(function(){
	    
	    container_full_height_init();
	    
	});


	// jQuery Sticky menu
    $(window).scroll(function(){
	    if(window.scrollY > 10){
	        $('.main-nav').addClass("sticky");
	    }else{
	        $('.main-nav').removeClass("sticky");
	    }
	});
	

	// Off-screen Navigation
 	$('.navbar-toggle, nav').click(function(){
        $('.navbar-toggle').toggleClass('navbar-on');
        $('nav').fadeToggle();
        $('nav').removeClass('nav-hide');
    });


    // Smooth Scroll Navigation
    $('.local-scroll').localScroll({offset: {top: -70},duration: 1500,easing:'easeInOutExpo'});


	// Counters
	$('.statistic').appear(function() {
		$('.timer').countTo({
			speed: 4000,
			refreshInterval: 60,
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			}
		});
	});


	// Progress Bars
	var $section = $('#animated-skills').appear(function() {
    
	    function loadDaBars() {
	        var bar = $('.progress-bar');
	        var bar_width = $(this);
			$(function(){
			  $(bar).each(function(){
			    bar_width = $(this).attr('aria-valuenow');
			    $(this).width(bar_width + '%');
			  });
			});
	    }
	    loadDaBars();
    });


    // Owl Carousel

    var owl = $("#owl-partners");
	owl.owlCarousel({

	    autoPlay: 3000,
	    pagination: false,
	    itemsCustom: [
	      [0, 2],      
	      [450, 2],
	      [700, 3],
	      [1000, 3],
	      [1200, 4],
	      [1400, 5],
	      [1600, 6]
	    ],

	})

	// Testimonials
    var owl = $("#owl-testimonials");
    owl.owlCarousel({

	  items: 2,
	  itemsDesktop: [1199,2],
	  itemsDesktopSmall: [979,1],
	  itemsTablet: [768,1],
	  itemsTabletSmall: false,
	  itemsMobile: [479,1],
	  slideSpeed: 300,
      paginationSpeed: 200,
      pagination: false

	});

	// Custom Navigation Events
	$(".next").on('click',function(){
		owl.trigger('owl.next');
	})
	$(".prev").on('click',function(){
		owl.trigger('owl.prev');
	});


	// Gallery Post
	$("#owl-slider-small-img, #owl-slider-one-img").owlCarousel({
 
      navigation: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
 
 	});


	// Wow Animations
	new WOW().init();


	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */

	var submitContact = $('#submit-message'),
		message = $('#msg');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this);
		
		$.ajax({
			type: "POST",
			url: 'contact.php',
			dataType: 'json',
			cache: false,
			data: $('#contact-form').serialize(),
			success: function(data) {

				if(data.info !== 'error'){
					$this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
					message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				} else {
					message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
				}
			}
		});
	});

});


// Scroll to Top

(function() {
	"use strict";

	var docElem = document.documentElement,
		didScroll = false,
		changeHeaderOn = 550;
		document.querySelector( '#back-to-top' );
	function init() {
		window.addEventListener( 'scroll', function() {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 50 );
			}
		}, false );
	}
	
})();

$(window).scroll(function(event){
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
	    $("#back-to-top").addClass("show");
	} else {
	    $("#back-to-top").removeClass("show");
	}
});

$('a[href="#top"]').on('click',function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
    return false;
});


// Container Full Height

function container_full_height_init(){
    (function($){
        $(".container-full-height").height($(window).height());
    })(jQuery);
}
