$(function() {

	svg4everybody();

	$('.slider-projects__js').slick({
		slidesToShow: 1,
		arrows: true,
		prevArrow: '.slider-projects__nav--prev',
		nextArrow: '.slider-projects__nav--next',
		dots: true,
		customPaging: function() {
			return '<span class="slider-projects__dot slider__dot"></span>';
		},
		appendDots: '.slider-projects__dots',
		speed: 350
	});

	$(".tab").not(":first").hide();
	$(".tabs .tab-btn").click(function() {
		$(".tabs .tab-btn").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.popup-form-link').magnificPopup({
		type: 'inline',
		preloader: false,
		removalDelay: 300,
  	mainClass: 'mfp-fade'
	});

	$('.popup-privacy-link').magnificPopup({
		type: 'inline',
		preloader: false,
		removalDelay: 300,
  	mainClass: 'mfp-fade'
	});

});
