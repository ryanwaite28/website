// New Script //

$('head').append('<link rel="stylesheet" type="text/css" href="css/font-awesome.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="https://kenwheeler.github.io/slick/slick/slick.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="https://kenwheeler.github.io/slick/slick/slick-theme.css">');
$('head').append('<script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>');

/* ---------------------------- */

$(document).ready(function() {

	window.ck_name = /^[A-Za-z0-9 ]{3,20}$/
	window.ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	window.ck_username = /^[A-Za-z0-9-_]{1,20}$/

	window.cImg = $("#c-img");
	window.mainCollapse = $('#main-collapse')
	window.dropArrow = $("#drop-arrow");
	window.bioChev = $("#bio-chev");
	window.currentImage = 0;
	window.mainLinks = $("#main-links");
	window.sba = false;
	window.bta = $('#bta');
	window.images = [
		"https://i.imgur.com/ziHj1qj.png",
		"https://i.imgur.com/7Kr2nKz.jpg",
	];

	mainLinks.append('<li><a title="Home Page" href="index.html"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>');
	mainLinks.append('<li><a title="Audio Engineer Page" href="audio.html"><i class="fa fa-headphones" aria-hidden="true"></i> Audio Engineer</a></li>');
	mainLinks.append('<li><a title="Music Producer Page" href="music.html"><i class="fa fa-music" aria-hidden="true"></i> Music Production</a></li>');
	mainLinks.append('<li><a title="Social Page" href="social.html"><i class="fa fa-comment" aria-hidden="true"></i> Social</a></li>');
	mainLinks.append('<li><a title="Contact Page" href="contact.html"><i class="fa fa-envelope" aria-hidden="true"></i> Contact</a></li>');

	$('li').addClass('transition');
	$('li a').addClass('transition');

	dropArrow.click(function(){
		$(this).toggleClass('rotate');
	})
	bioChev.click(function(){
		$(this).toggleClass('rotate');
	})

	if( $(window).width() > 925 ) {
		mainCollapse.addClass('in');
	}
	else {
		mainCollapse.removeClass('in');
	}

	$(window).resize(function(){
		var width = $(window).width();
		if( width > 925 ) {
			mainCollapse.addClass('in');
		}
		else {
			mainCollapse.removeClass('in');
		}
	})

		$('#contents').scroll(function(){

			var top = $('#contents').scrollTop();
			if( top >= 100 ) {
				bta.removeClass('rotate');
			}
			else {
				bta.addClass('rotate');
			}

		})

	  bta.click(function(){
	      $('#contents').animate({
	          scrollTop: 0 // $("#sdl").offset().top
	      }, 1000);
	  });

		//

		$('#send-form-btn').click(function(){

			var name = $('#f-name').val();
			var email = $('#f-email').val();
			var subject = $('#f-subject').val();
			var message = $('#f-message').val();

			if(name == '') {
				alert('Name Field Is Required.');
				return;
			}
			if(email == '') {
				alert('Email Field Is Required.');
				return;
			}
			if(!ck_email.test(email)) {
				alert('Bad Email Input.');
				return;
			}
			if(subject == '' || subject.length <= 3) {
				alert('Subject Is Required And Should Be Descriptive.');
				return;
			}
			if(message == '' || message.length <= 10) {
				alert('Message Field Is Required And Should Be Descriptive.');
				return;
			}

			var obj = {
				name: name,
				email: email,
				subject: subject,
				message: message
			}

			console.log(obj);
			return;

			$.ajax({
				url: '',
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify(obj),
				success: function(data) {
					console.log(data);
					$('#form').hide();
					$('#msg').text('Message Sent!');
				}
			})

		});

});

/* ---------------------------- */

// Main Angular Application
var App = angular.module("myApp", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {

	window.scope = $scope;

});
