/**
 * Main JS file for Casper behaviours
 */
var $post = $('.post'), 
	$first = $('.post.first'), 
	$last = $('.post.last'), 
	$fnav = $('.fixed-nav'),
	$postholder = $('.post-holder'),
	$postafter = $('.post-after'),
	$sitehead = $('#site-head');

/*globals jQuery, document */
(function ($) {
    "use strict";
    function srcTo (el) {
    	$('html, body').animate({
			scrollTop: el.offset().top
		}, 1000);
    }
    $(document).ready(function(){
     
        $('.btn.first').click( function () {
        	srcTo ($first)
        })
        $('.btn.last').click( function () {
        	srcTo ($last)
        })
        $('#header-arrow').click(function () {
            srcTo ($first)
        })

        $('.post-title').each(function () {
        	var t = $(this).text();
        	$fnav.append("<a class='fn-item' item='"+t+"'>"+t+"</a>")

        	$('.fn-item').click(function () {
        		var i = $(this).attr('item'),
        			s = $(".post[item='"+i+"']")

        		$('html, body').animate({
					scrollTop: s.offset().top
				}, 400);

        	})
        })

        $('.post.last').next('.post-after').hide();
        $(window).scroll( function () {
        	var w = $(window).scrollTop(),
        		g = $sitehead.offset().top,
        		h = $sitehead.offset().top + $(this).height()-100;

        	if(w >= g && w<=h) {
        		$('.fixed-nav').fadeOut('fast')
        	} else {
                if($(window).width()>500)
        		  $('.fixed-nav').fadeIn('fast')
        	}

        	$post.each(function () {
        		var f = $(this).offset().top,
        			b = $(this).offset().top + $(this).height(),
        		 	t = $(this).find('.post-title').text(),
        		 	i = $(".fn-item[item='"+t+"']"),
        		 	a = $(this).parent('.post-holder').prev('.post-holder').find('.post-after');

        		 $(this).attr('item', t)

        		if(w >= f && w<=b) {

        			i.addClass('active');
        			a.fadeOut('slow')
        		} else {
        			i.removeClass('active');
        			a.fadeIn('slow')
        		}
        	})
        });
        $('li').before('<span class="bult icon-asterisk"></span>')
        $('blockquote p').prepend('<span class="quo icon-quote-left"></span>')
            .append('<span class="quo icon-quote-right"></span>')

    });

}(jQuery));