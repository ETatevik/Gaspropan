jQuery(document).ready(function() {
	if ($(window).width() < 1200 && $(window).width() > 400) {
		// Touch slider Counrty diskr----------------------------------
	    {
	    	jQuery("#content-slider-country").lightSlider({
	             loop:true,
	             keyPress:true,
	             item: 2,
	             pager: false,
	             controls: false,
	             slideMargin: 29
	         });
	    }
	}else if ($(window).width() < 400){
		// Touch slider Counrty diskr----------------------------------
	    {
	    	jQuery("#content-slider-country").lightSlider({
	             loop:true,
	             keyPress:true,
	             item: 1,
	             pager: false,
	             controls: false,
	             slideMargin: 29
	         });
	    }
	}
});