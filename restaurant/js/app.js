var imgsize = function() {
	var imgwidth = $('.gal').width();
	$('.gal').css({'height':imgwidth+'px'});
};

var mgbt = function() {
	var hgt = $('.span_1').height();
	hgt += 180;
	console.log(hgt);
	$('.gallery').css({'margin-bottom':hgt+'px'});
};

var menu = function() {
	$('.btn').click(function() {
		$('.mobile').toggleClass('hidden');
	});
};

$(document).ready(imgsize);

$(document).ready(mgbt);

$(document).ready(menu);


$(window).resize(imgsize);
$(window).resize(mgbt);