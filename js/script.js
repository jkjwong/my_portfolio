// fade in divs
$(document).ready(function() {
	$('.fadein').hide().fadeIn(1000);

	$(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 220) {
      $('#main-menu').addClass('navbar-fixed');
			$('.nav-push').show();
			$('.goto-top').show();
    }
    if ($(window).scrollTop() < 221) {
      $('#main-menu').removeClass('navbar-fixed');
			$('.nav-push').hide();
			$('.goto-top').hide();
    }
  });

	$('.goto-top').click(function(event){
		$('html, body').animate( {scrollTop: "0px" }, 'slow');
		$('.goto-top').hide();
		event.preventDefault();
		
	});

});
