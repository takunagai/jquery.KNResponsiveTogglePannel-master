(function($) {
    $.fn.KNResponsiveMenu = function(options){
        
        // setup options
        var defaults = {
            position : 'next'
        };
        var setting = $.extend(defaults, options);
        
        if ( setting.position == 'next' ) {
	        $(this).next().hide();
        } else if ( setting.position == 'prev' ) {
	       $(this).prev().hide();
        } else if ( setting.position == 'children' ) {
	       $(this).children().hide();
        }
        
        function KNToggleMenu(element, position) {
			switch (position){
				case 'next':
					element.next().slideToggle('fast');
					break;
				case 'prev':
					element.prev().slideToggle('fast');
					break;
				case 'children':
					element.children().slideToggle('fast');
				default:
					break;
			}
		}

		if ('ontouchstart' in window){
			var touchX, touchX2 = 0;
			var touchY, touchY2 = 0;
			$(this).bind('touchstart', function(){
				touchX = event.changedTouches[0].pageX;
				touchY = event.changedTouches[0].pageY;
			});
			$(this).bind('touchend', function(){
				touchX2 = event.changedTouches[0].pageX;
				touchY2 = event.changedTouches[0].pageY;
				if ( touchX != touchX2 || touchY != touchY2 ) {
					return;
				}
				KNToggleMenu($(this), setting.position);
			});		
		} else {
			$(this).click( function() {
				KNToggleMenu($(this), setting.position);
			});
		}
        
        return(this);
    };
})(jQuery);