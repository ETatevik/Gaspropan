jQuery(document).ready(function() {
	// menu dropdown when window small 1200px-------------------------------------------------
	// if ($(window).width() < 1200) {
	// 	$('.menu-btns li').not('.menu-btns li.active').slideUp(0);
	// 	$('.menu-btns li.active').css('display', 'block');
	// }
	$('.menu-btns .active').on('click', function(event) {
		if ($(window).width() < 1200) {
	        event.preventDefault();
	        $('.menu-btns li').not(this).slideToggle(200); 
		}
    });

    // LogOut-----------------------------------------
    {
    	$('#logout').click(function(event) {
    		location.href = "index.html";
    	});
    }

    // Modal Open and Close
    {
    	jQuery('.modal').fadeOut('500');

    	jQuery('#openModal').click(function(event) {
    		jQuery('#densityInput').next('.invalidInfo').css('display', 'none');
            jQuery('#densityInput').val('');
    		jQuery('.modal:first-child').fadeIn('500');
    	});
    	jQuery('#closeModal').click(function(event) {

			if (!jQuery('#densityInput').val()) {
				jQuery('#densityInput').next('.invalidInfo').css('display', 'block');
			}else{
				jQuery('.modal:first-child').fadeOut(500);
			}
    	});
        jQuery('.modal-box, .modal').click(function(event) {
            if ($(event.target).hasClass('modal-box')
                || $(event.target).hasClass('modal')) {
                jQuery('.modal').fadeOut(500);
            }
        });
    }
});