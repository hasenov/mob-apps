$(function() {

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

});
