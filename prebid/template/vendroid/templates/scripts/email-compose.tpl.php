<script type="text/javascript" src="plugins/bootstrap-wysiwyg/js/wysihtml5-0.3.0.min.js"></script>
<script type="text/javascript" src="plugins/bootstrap-wysiwyg/js/bootstrap-wysihtml5-0.0.2.js"></script>
<script type="text/javascript" language="javascript" src="plugins/isotope/isotope.pkgd.min.js"></script>


<script type="text/javascript">

$(function () {
	"use strict";
	
	$('#message').wysihtml5();
	


	  // init Isotope
	  var $container = $('.isotope').isotope({
		itemSelector: '.isotope .email-item',
		layoutMode: 'vertical'
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
	
	
	$('#check-all').click(function() {
        $('.email-item input').prop('checked', true);
	});
	$('#uncheck-all').click(function() {
        $('.email-item input').prop('checked', false);
	});	


		
	$('#insert-email-btn').click(function(e) {
          e.preventDefault();
		  var emails='';
		  emails=$('.email-item input:checked').map(function(n){  //map all the checked value to tempValue with `,` seperated
            	return  this.value;
   		  }).get().join(' , ');
		  var comma = $('#email-input').val() ? ' , ' : '';		
		  if (emails)  {
		  	$('#email-input').val($('#email-input').val() + comma + emails);
		  }
    });
		
});
</script>