

<script type="text/javascript">
$(window).load(function() 
{
	"use strict";
	function checkView(){
		if ($("#checkbox-year").is(':checked')){
			$(".tl-item-year").addClass('hidden');
		} else{
			$(".tl-item-year").removeClass('hidden');
		}
		if ($("#checkbox-date").is(':checked')){
			$(".tl-item-date").addClass('hidden');
		} else{
			$(".tl-item-date").removeClass('hidden');
		}		
	}
	$('#checkbox-year, #checkbox-date').prop('checked', false)
	$( "#checkbox-year, #checkbox-date" ).click(function(e) {
        checkView();
    });




	
})
</script>