(function($) {
    $.fn.KNResponsiveTogglePanel = function(options){

        // setup options
        var defaults = {
            position : 'next',
            closeLabel : '',
            openLabel : ''
        };
        var setting = $.extend(defaults, options);

        if ( setting.position == 'next' ) {
	        $(this).next().hide();
        } else if ( setting.position == 'prev' ) {
	       $(this).prev().hide();
        } else if ( setting.position == 'children' ) {
	       $(this).children().hide();
        }

        if (setting.openLabel.length > 0) {
	        $(this).html(setting.openLabel);
        }

        function updateLabel(element) {
	        if ( element.html() == setting.closeLabel && setting.closeLabel.length > 0 ) {
		        element.html(setting.openLabel);
	        } else if ( element.html() == setting.openLabel && setting.openLabel.length > 0 ) {
		        element.html(setting.closeLabel);
	        } else {
	        }
        }

        function KNTogglePanel(element, position) {
					switch (position){
						case 'next':
							element.next().slideToggle('fast', updateLabel(element));
							break;
						case 'prev':
							element.prev().slideToggle('fast', updateLabel(element));
							break;
						case 'children':
							element.children().slideToggle('fast', updateLabel(element));
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
						var diffX = endX - startX;
						var diffY = endY - startY;
						if ( Math.abs(diffX) > 5 ) {
							return;
						}
						if ( Math.abs(diffY) > 5 ) {
							return;
						}
						endX = 0;
						endY = 0;

						KNTogglePanel($(this), setting.position);
					});
				} else {
					$(this).click( function() {
						KNTogglePanel($(this), setting.position);
					});
				}

        return(this);
    };
})(jQuery);
