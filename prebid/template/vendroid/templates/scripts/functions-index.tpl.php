
<script>

$(function () {
	"use strict";
	
	$('#touch-test').click(function() {
		alert(isTouch() == 1 ? "Your device is touch device" : "Your device is not touch device");     
	});	
	$('#mobile-test').click(function() {
		alert(isMobile() == 1 ? "Your device is mobile device" : "Your device is not mobile device");     
	});	
	$('#phone-test').click(function() {
		alert(isPhone() == 1 ? "Your device is phone device" : "Your device is not phone device");     
	});	
	$('#tablet-test').click(function() {
		alert(isTablet() == 1 ? "Your device is tablet device" : "Your device is not tablet device");     
	});	
	
	$('#notification-test').click(function(){notification("topright","notify","fa fa-exclamation-triangle vd_yellow","Notification","Hello this is your notification using custom theme. Cool right?");});
	
	$('#scrollto-test').click(function(){scrollTo('.vd_content-section',-60)});			
	
});
</script>