// New Script //

$('head').append('<link rel="stylesheet" type="text/css" href="https://fontawesome.io/assets/font-awesome/css/font-awesome.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="https://kenwheeler.github.io/slick/slick/slick.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="https://kenwheeler.github.io/slick/slick/slick-theme.css">');
$('head').append('<script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>');
$('head').append('<script src="https://kenwheeler.github.io/slick/slick/slick.js"></script>');

/* ---------------------------- */

$(document).ready(function() {

	window.cImg = $("#c-img");
	window.dropArrow = $("#drop-arrow");
	window.currentImage = 0;
	window.mainLinks = $("#main-links");
	window.images = [
		"https://i.imgur.com/ziHj1qj.png",
		"https://i.imgur.com/7Kr2nKz.jpg",
	];

	/* cImg.attr('src', images[currentImage]);
	currentImage++;

	setInterval(function(){
		cImg.attr('src', images[currentImage]);
		if( currentImage == images.length ) {
			currentImage = 0;
		}
		else {
			currentImage++;
		}
	} , 3000)*/

	setTimeout(function(){
		$('.autoplay').slick({
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
		});
	} , 1000)

	mainLinks.append('<li><a title="" href="">Home</a></li>');
	mainLinks.append('<li><a title="" href="">Audio Engineer</a></li>');
	mainLinks.append('<li><a title="" href="">Music Production</a></li>');
	mainLinks.append('<li><a title="" href="">Contact</a></li>');

	$('li').addClass('transition');
	$('li a').addClass('transition');

	dropArrow.click(function(){
		$(this).toggleClass('rotate');
	})

});

/* ---------------------------- */

// Main Angular Application
var App = angular.module("myApp", []);

// Master Angular Controller
App.controller('masterCtrl', function($scope) {

	window.scope = $scope;

});
