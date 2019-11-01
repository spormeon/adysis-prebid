
<script>

$(function () {
	"use strict";
	$('#checkbox-0').click(function() {
    if($(this).is(':checked'))
        $('.checkbox-group').prop('checked', true).closest("tr").addClass('row-warning');
    else
        $('.checkbox-group').prop('checked', false).closest("tr").removeClass('row-warning');
	});
	
	$('.checkbox-group').click(function() {
    if($(this).is(':checked'))
		$(this).closest("tr").addClass('row-warning');
    else
		$(this).closest("tr").removeClass('row-warning')        
	});	
});
</script>