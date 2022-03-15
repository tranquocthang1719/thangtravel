// JavaScript Document
$(document).ready(function(){
  $("#banner").owlCarousel({
	loop:true,
	items:1,
    nav:true,
	autoplay:true,
  });

  $("#w-ca").owlCarousel({
	loop:true,
	items:4,
	  margin:50,
	autoplay:true,
  });
$("#cnhan").owlCarousel({
	loop:true,
	items:1,
	autoplay:true,
    smartSpeed:2000,
	autoplayTimeout:5000,
  });
	
});