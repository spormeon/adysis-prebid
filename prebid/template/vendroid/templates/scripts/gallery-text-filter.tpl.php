<script type="text/javascript" language="javascript" src="plugins/isotope/isotope.pkgd.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	
	"use strict";


	  // init Isotope
	  var $container = $('.isotope').isotope({
		itemSelector: '.gallery-item',
		layoutMode: 'fitRows'
	  });

		
	// User types in search box - call our search function and supply lower-case keyword as argument
	$('#filter-text').bind('keyup', function() {

		var filterValue = this.value.toLowerCase();
		isotopeFilter();

	});
	
	var filterFns = function() {		 
	  var kwd = $('#filter-text').val().toLowerCase();
	  var re = new RegExp(kwd, "gi");
      var name = $(this).find('.filter-name').text();
      return name.match( re );		  
	}
	
	function isotopeFilter(){

		  $container.isotope({ filter: filterFns });	
	}


	
});
</script>