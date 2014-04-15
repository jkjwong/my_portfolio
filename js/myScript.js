// fade in divs
jQuery(document).ready(function() {
	jQuery('.fadein').hide().fadeIn(1000);

	jQuery(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      //console.log(jQuery(window).scrollTop())
    if (jQuery(window).scrollTop() > 200) {
      jQuery('#main-menu').addClass('navbar-fixed').addClass('menu-underline-ie');
			jQuery('.nav-push').show();
			jQuery('.goto-top').show();
    }
    if (jQuery(window).scrollTop() < 201) {
      jQuery('#main-menu').removeClass('navbar-fixed').removeClass('menu-underline-ie');
			jQuery('.nav-push').hide();
			jQuery('.goto-top').hide();
    }
  });

	jQuery('.goto-top').click(function(event){
		jQuery('html, body').animate( {scrollTop: "0px" }, 'slow');
		jQuery('.goto-top').hide();
		event.preventDefault();
		
	});

	/*jQuery('.viewport').mouseenter(function(e) {
        jQuery(this).children('a').children('img').animate({ height: '320', left: '0', top: '0', width: '420'}, 100);
        jQuery(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        jQuery(this).children('a').children('img').animate({ height: '303', left: '-20', top: '-20', width: '400'}, 100);
        jQuery(this).children('a').children('span').fadeOut(200);
    });*/

});
