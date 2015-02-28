$(function(){
	if ('ontouchstart' in window){
		$('.menuButton').bind('touchstart', function(){
			$(this).toggleClass('menuButtonAnimation');
			$(this).next().slideToggle('fast');
		});
	} else {
		$('.menuButton').click( function() {
			$(this).toggleClass('menuButtonAnimation');
			$(this).next().slideToggle('fast');
		});
	}
});