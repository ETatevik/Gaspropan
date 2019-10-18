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
});