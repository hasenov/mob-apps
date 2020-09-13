$(function() {

	svg4everybody();

	$(window).scroll(function() {
		if($(window).scrollTop() > 0) {
			$('.header').addClass('sticky');
			$('.section-showcase').css('paddingTop', $('.header').outerHeight());
		} else {
			$('.header').removeClass('sticky');
			$('.section-showcase').css('paddingTop', 0);
		}
	});

	$('.menu a').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top - 100
				},
				800
			);
			$('.menu__list').removeClass('active');
			$('.menu__hamburger').removeClass('is-active');
			$('html').removeClass('lock');
		}
	});

	$('.phone').mask('+7 (000) 000-00-00', { selectOnFocus: true });

	$('.form-callback__control').on('input', function() {
		if($(this).val()) {
			$(this).addClass('has-value');
		} else {
			$(this).removeClass('has-value');
		}
	});

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
		speed: 350,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			},
		]
	});

	$('.menu__hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.menu__list').toggleClass('active');
		$('html').toggleClass('lock');
	})

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
		mainClass: 'mfp-fade',
	});

	// Длительность анимации чисел
	var options = {
		duration: 3
	}

	var numAnimEl1 = document.getElementById('countup-1');
	var numAnim = new countUp.CountUp(numAnimEl1, numAnimEl1.textContent, options);
	numAnim.start();

	var numAnimEl2 = document.getElementById('countup-2');
	var numAnim2 = new countUp.CountUp(numAnimEl2, numAnimEl2.textContent, options);
	numAnim2.start();
	
	var numAnimEl3 = document.getElementById('countup-3');
	var numAnim3 = new countUp.CountUp(numAnimEl3, numAnimEl3.textContent, options);
	numAnim3.start();
});
