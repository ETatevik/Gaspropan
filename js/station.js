jQuery(document).ready(function() {
	sliderCountrysmart();

	jQuery(window).resize(function(event) {
		if (jQuery(window).width() > 1200) {
			location.reload();
		}else{
			sliderCountrysmart();
		}
	});
});


function sliderCountrysmart(){
	if (jQuery(window).width() < 1200 && $(window).width() > 400) {
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
	}else if (jQuery(window).width() < 400){
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
}