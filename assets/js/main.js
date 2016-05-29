
//send message
$("form").submit(function(e){
    e.preventDefault();
    var user_name = document.getElementById('contact-name').value;
    var user_email = document.getElementById('contact-email').value;
    var user_message = document.getElementById('contact-message').value;
    var details = {
    	name: user_name,
    	email: user_email,
    	text: user_message
    };
    Stamplay.Object('message').save(details).then(function(res){
    	toastr.success('Message Sent!');
    	document.getElementById('contact-name').value = "";
    	document.getElementById('contact-email').value = "";
    	document.getElementById('contact-message').value = "";
    })
});

//validate form
$("#register-form").validate({
  	rules: {
        name: "required",
        email: {
           	required: true,
            email: true
        },
        messages: {
            name: "Please enter your firstname",
            email: "Please enter a valid email address",
        },
        submitHandler: function(form) {
            form.submit();
        }
    }
});


//smooth scroll
$(document).ready(function() {
	$('a[rel="relativeanchor"]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 1000);
	    return false;
	}); 
});

//responsive settings
(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			// $('#nav > ul').dropotron({
			// 	mode: 'fade',
			// 	noOpenerFade: true,
			// 	alignment: 'center',
			// 	detach: false
			// });

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);
