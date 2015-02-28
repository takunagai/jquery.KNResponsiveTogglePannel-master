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
			var startX ,startY, endX, endY;
			$(this).bind('touchstart', function(){
				startX = 0;
				startY = 0;
				startX = event.changedTouches[0].pageX;
				startY = event.changedTouches[0].pageY;
			});
			$(this).bind('touchend', function(){
				endX = event.changedTouches[0].pageX;
				endY = event.changedTouches[0].pageY;
				var xxx = endX - startX;
				var yyy = endX - startY;
				if ( Math.abs(xxx) > 5 || Math.abd(yyy) > 5 ) {
					return;
				}
				KNToggleMenu($(this), setting.position);
				endX = 0;
				endY = 0;
			});		
		} else {
			$(this).click( function() {
				KNToggleMenu($(this), setting.position);
			});
		}
        
        return(this);
    };
})(jQuery);