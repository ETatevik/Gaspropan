jQuery(document).ready(function() {

	// for safari
	{
		if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {  
			jQuery('#loginGasP').css('minHeight', jQuery(window).height()+'px');
		}
	}

	// submit form check all inputs
	{
		var testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		var flag;
		jQuery('#loginIndex').submit(function(event) {
			jQuery('.invalidInfo').css('display', 'none');

			if (!$('#emailGS').val()) {
				jQuery('#emailGS').parent('label').next('.invalidInfo').css('display', 'block').html('*Չկա մուտքագրում');
				flagSubmit = false;
			}else if (!testEmail.test($('#emailGS').val())) {
				jQuery('#emailGS').parent('label').next('.invalidInfo').css('display', 'block').html('*Սխալ մուտքագրում');
				flagSubmit = false;
			}else if (!jQuery('#passGS').val()) {
				jQuery('#passGS').parent('label').next('.invalidInfo').css('display', 'block').html('*Չկա մուտքագրում');
				flagSubmit = false;
			}else{
				flagSubmit = true;
			}

			return flagSubmit;
		});
	}
});