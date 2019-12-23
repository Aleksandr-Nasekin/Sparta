$(document).ready(function(){
	$('.reviews__slider').slick({
		speed: 1200,
		adaptiveHeight: true,
		slidesToShow: 1,  
		slidesToScroll: 1,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 771,
				settings: {
					arrows: false
				}
			}
		]
	});	

	//========== Modal =====================//

	$('[data-modal=challenge]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
		$('body').addClass('no-scroll');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation').fadeOut('slow');
		$('body').removeClass('no-scroll');
	});
	$('.overlay').on('click', function() {
		$('.overlay, #consultation').fadeOut('slow');
		$('body').removeClass('no-scroll');
	});

    $(".modal").on("click", function(event) {
        event.stopPropagation();
    });  

	// ====== Smooth scroll and page up ===============
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1300) {
			$('.pageup').fadeIn();
		}	else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href=#up]").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	// ====== Validation ===============

	function valideForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required"
			},
			messages: {
				name: {
					required: "Пожалуйста, введите своё имя",
					minlength: jQuery.validator.format("Введите не менее {0} символов")
				},
	    		phone: "Пожалуйста, введите свой номер телефона"
	  		}
		});		
	};

	valideForms('#consultation-form');
	valideForms('#order form');

	// ====== Phone mask ===============

	$('input[name=phone]').mask("+7 (999) 999-99-99");

	// ====== Slider ===============

	$('.review-trigger').each(function() {
		$(this).on('click', function() {
			$('.review-read-more').each(function() {
				if ($(this).attr("checked") != 'checked') {
					$(".slick-list.draggable").css('height', 'inherit !important');
					} else {
					    $(".slick-list.draggable").css('height', 'auto');
					}
			});
		});
	});

	$('.slick-dots').on('click', function() {
		$("input:checkbox").removeAttr("checked");
	});

	$('.slick-arrow').on('click', function() {
		$("input:checkbox").removeAttr("checked");
	});
});	

