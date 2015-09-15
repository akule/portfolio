var main = function() {
	$('.this').hover(function() {
		$(this).toggleClass('hovered');
		$('.that').toggleClass('hovered');
	});
	$('.that').hover(function() {
		$(this).toggleClass('hovered');
		$('.this').toggleClass('hovered');
	});

	$('.this1').hover(function() {
		$(this).toggleClass('hovered');
		$('.that1').toggleClass('hovered');
	});
	$('.that1').hover(function() {
		$(this).toggleClass('hovered');
		$('.this1').toggleClass('hovered');
	});
}

$(document).ready(main);