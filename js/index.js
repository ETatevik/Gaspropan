jQuery(document).ready(function() {

	// for safari
	{
		if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {  
			$('#loginGasP').css('minHeight', $(window).height()+'px');
		}
	}

	// submit form check all inputs
	{
		var testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		var flag;
		jQuery('#loginIndex').submit(function(event) {
			$('.invalidInfo').css('display', 'none');

			if (!$('#emailGS').val()) {
				$('#emailGS').parent('label').next('.invalidInfo').css('display', 'block').html('*Չկա մուտքագրում');
				flagSubmit = false;
			}else if (!testEmail.test($('#emailGS').val())) {
				$('#emailGS').parent('label').next('.invalidInfo').css('display', 'block').html('*Սխալ մուտքագրում');
				flagSubmit = false;
			}else if (!$('#passGS').val()) {
				$('#passGS').parent('label').next('.invalidInfo').css('display', 'block').html('*Չկա մուտքագրում');
				flagSubmit = false;
			}else{
				flagSubmit = true;
			}

			return flagSubmit;
		});
	}
});