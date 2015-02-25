$(function(){
	if ('ontouchstart' in window){
		$('.menuButton').bind('touchstart', function(e){
			$(this).next().slideToggle();
			e.preventDefault();
		});
	} else {
		$('.menuButton').click( function() {
		});
	}
});