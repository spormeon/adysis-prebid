<script type="text/javascript">
$(document).ready(function() {
	
	"use strict";
	
	$( ".normal-slider" ).slider();
	 $( ".horizontal-slider-1" ).slider({
		value: Math.floor((Math.random()*80)+10) ,
		orientation: "horizontal",
		range: "min",
		animate: true
	});
	 $( ".horizontal-slider-2" ).slider({
		value: Math.floor((Math.random()*80)+10) ,
		orientation: "horizontal",
		range: "min",
		animate: true
	});
	 $( ".horizontal-slider-3" ).slider({
		value: Math.floor((Math.random()*80)+10) ,
		orientation: "horizontal",
		range: "min",
		animate: true
	});
	 $( ".horizontal-slider-4" ).slider({
		value: Math.floor((Math.random()*80)+10) ,
		orientation: "horizontal",
		range: "min",
		animate: true
	});
	 $( ".vertical-slider-1" ).slider({
		value: Math.floor((Math.random()*80)+10) ,
		orientation: "vertical",
		range: "min",
		animate: true
	});	
	 $( ".vertical-slider-2" ).slider({
		value: Math.floor((Math.random()*80)+10) ,
		orientation: "vertical",
		range: "min",
		animate: true
	});	
	 $( ".vertical-slider-3" ).slider({
		value: Math.floor((Math.random()*80)+10) ,
		orientation: "vertical",
		range: "min",
		animate: true
	});	
	 $( ".vertical-slider-4" ).slider({
		value: Math.floor((Math.random()*80)+10) ,
		orientation: "vertical",
		range: "min",
		animate: true
	});		
	 $( ".slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
		$( ".slider-range-amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});	
 	$( ".slider-range-amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
" - $" + $( ".slider-range" ).slider( "values", 1 ) );	

	$( ".slider-range-max" ).slider({
			range: "max",
			min: 1,
			max: 10,
			value: 2,
			slide: function( event, ui ) {
			$( ".slider-range-max-amount" ).val( ui.value );
			}
	});
	$( ".slider-range-max-amount" ).val( $( ".slider-range-max" ).slider( "value" ) );			
	
	$( ".slider-range-min" ).slider({
		range: "min",
		value: 37,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
		$( ".slider-range-min-amount" ).val( "$" + ui.value );
		}
	});
	$( ".slider-range-min-amount" ).val( "$" + $( ".slider-range-min" ).slider( "value" ) );			


	var select = $( "#min-beds" );
	var slider = $( "<div class='slider-bond ui-slider-info'></div>" ).insertAfter($( ".blank" ) ).slider({
		min: 1,
		max: 6,
		range: "min",
		value: select[ 0 ].selectedIndex + 1,
		slide: function( event, ui ) {
		select[ 0 ].selectedIndex = ui.value - 1;
		}
	});
	$( "#min-beds" ).change(function() {
		slider.slider( "value", this.selectedIndex + 1 );
	});
	
	$( ".slider-increment" ).slider({
		value:100,
		min: 0,
		max: 500,
		step: 50,
		slide: function( event, ui ) {
		$( ".slider-increment-amount" ).val( "$" + ui.value );
		}
	});
	$( ".slider-increment-amount" ).val( "$" + $( ".slider-increment" ).slider( "value" ) );


	$( ".vertical-range-slider" ).slider({
		orientation: "vertical",
		range: true,
		values: [ 17, 67 ],
		slide: function( event, ui ) {
		$( ".vertical-range-slider-amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( ".vertical-range-slider-amount" ).val( "$" + $( ".vertical-range-slider" ).slider( "values", 0 ) +
" - $" + $( ".vertical-range-slider" ).slider( "values", 1 ) );
		
});
</script> 