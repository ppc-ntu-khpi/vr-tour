    
	var menu = 0; // menu action now
	
	$(document).ready(function () {

		$('.slides').slick({
        });
		
		$('#menu').click(function() {
			$('.nav_wrapper ul').slideToggle();
		});
		
    });