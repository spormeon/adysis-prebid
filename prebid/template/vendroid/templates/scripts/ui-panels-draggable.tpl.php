<script type="text/javascript">
$(document).ready(function() {
	"use strict";
	
	 $( '[data-rel^="sortable"]' ).sortable({
            connectWith: '[data-rel^="sortable"]',
            items: 'div.widget',
            opacity: 0.8,	
            placeholder: 'ui-drop-placeholder panel widget',
            forcePlaceholderSize: true,								
            iframeFix: false,
            tolerance: 'pointer',			
            helper: 'original',
            revert: true,
            forceHelperSize: true,

	}).disableSelection();	
});
</script>