(function($){
    "use strict";

	$(document).ready(function(){
	    jQuery('.tp-banner').revolution({
			delay:12000,
			startwidth:1170,
			startheight:680,
			hideThumbs:10,

			parallax:"scroll",
			parallaxBgFreeze:"on",
			parallaxLevels:[10,20,30,40,50,60,70,80,90,100],

			fullWidth:"off",
			fullScreen:"on",
			fullScreenOffsetContainer: "",
			fullScreenAlignForce:"on",

			navigationType:"off",							
			navigationStyle:"preview1",

			hideArrowsOnMobile:"on",
			
			touchenabled:"on",
			onHoverStop:"off",
			spinner:"spinner4"
		});
	});
	
})(jQuery);