$(function() {
	$('a').click(function(event) {
		event.preventDefault();
		
		$('html body').animate({
			scrollTop: $( this.hash ).offset().top - 50
		}, 500);
	});
});