
$(window).load(function() {

	// Start Pretty Print 
	prettyPrint();
	
		
	/* Pretty Photo. 
	   Used: - For Grouping:  <a data-rel="prettyPhoto[portfolio-group]"> 
			 - For Single Image: <a data-rel="prettyPhoto"> 
	*/
	$('a[data-rel^="prettyPhoto"]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});
	$("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square'});		

			
	slide = $('.slide-waypoint');
	calHeight = 120;
	htmlbody = $('html,body');	
	
	
    //Setup waypoints plugin
    slide.waypoint(function(direction) {

        dataslide = $(this).attr('data-waypoint');

		if (direction === 'down') {	
			resetActive();
            $('.menu  ul li a[data-waypoint="' + dataslide + '"]').parent().addClass('active');		
		}
		else {
			resetActive();
            $('.menu  ul li a[data-waypoint="' + dataslide + '"]').parent().prev().addClass('active');						
		}
		

    },{offset:calHeight+60});


	
    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
           scrollTop: $('.slide-waypoint[data-waypoint="' + dataslide + '"]').offset().top -calHeight
        }, 1500, 'easeInOutQuint');
    }

	function resetActive(){
		$('.menu  ul li').removeClass('active');	
	}
    //When the user clicks on the navigation links, get the data-waypoint attribute value of the link and pass that variable to the goToByScroll function
	
    $('.menu  ul li a[data-waypoint="home"]').click(function (e) {		
        e.preventDefault();
		htmlbody.animate({scrollTop:0},1500, 'easeInOutQuint');
    });	
    $('.menu   ul  li  a[data-waypoint]').click(function (e) {		
        e.preventDefault();		
        dataslide = $(this).attr('data-waypoint');
		goToByScroll(dataslide);		
    });
	
	
	var desktop_width = 751;
	
	checkResize();
	
	$(window).on("resize", function(){
			checkResize();
	});	
	
	function checkResize(){
		if ($(window).width() >= desktop_width){ /* Remove Collapse On width > desktop_width */		
			$('.menu').removeClass('in collapse').removeAttr('style');
		}	else{
			$('.menu').addClass('collapse');
		}		
};
});
