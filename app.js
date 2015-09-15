var main = function() {
    $('.menu-open, .menu-close').click(function() {
        var left = $('.menu').offset().left;
        
        if (left < 0 ) {
            $('.menu').animate({ left: 0 }, 200);
            $('.menu-open').animate({ left: 285 }, 200);
        } else {
            $('.menu').animate({ left: -285 }, 200);
            $('.menu-open').animate({ left: 0 }, 200);
        }
    });
};

var scr = function() {
    var height = $('.full').height();
    move = 0 - height;
    $('.to_about').click(function() {
        var height = $('.full').height();
        move = 0 - height;
        $('body').animate({top:move});
    });
    $('.to_work').click(function() {
        var height = $('.full').height();
        move = 0 - height;
        var height = $('.full').height();
        move = 0 - height;
        move *= 2;
        $('body').animate({top:move});
    });
    $('.to_home').click(function() {
        $('body').animate({top:0});
    });
};

var fadeOut = function() {
    $('.alert').delay(2000).fadeOut(1000, 'swing');
};

$(document).ready(main);
$(document).ready(scr);
$(document).ready(fadeOut);