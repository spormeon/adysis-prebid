<!-- Google Map -->
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script> 
<script type="text/javascript" src="js/jquery.gmap.min.js"></script> 


<script type="text/javascript">
$(document).ready(function() { 

	"use strict";

	$('#map').gMap({
		
		 address: 'Los Angeles, United States',
		 maptype: 'ROADMAP',
		 zoom: 14,
		 markers: [
			{
				address: "Los Angeles, United States",
				html: '<div style="width: 300px; padding:10px;"><h3 style="padding-bottom: 5px;"  class="vc_main-color">Our Headquarter</h3><p>Our mission is to help people to <strong>earn</strong> and to <strong>learn</strong> online. We operate <strong>marketplaces</strong> where hundreds of thousands of people buy and sell digital goods every day, and a network of educational blogs where millions learn <strong>creative skills</strong>.<br/></p></div>',
				icon: {
					image: "img/blue.png",
					iconsize: [42, 51],
					iconanchor: [21,51]
				},						
			}
		 ],
		 doubleclickzoom: false,
		 controls: {
			 panControl: true,
			 zoomControl: true,
			 mapTypeControl: true,
			 scaleControl: false,
			 streetViewControl: false,
			 overviewMapControl: false
		 },            
	});
	
	$('#filters a').click(function(){
		var filter = $(this).data('filter');
		var lat= 0;
		var long = 0;
		switch(filter)
		{
		case "US":
		  lat = 40;
		  long = -100;
		  break;
		case "CN":
		  lat = 35;
		  long = 103;
		  break;
		case "ID":
		  lat = 0;
		  long = 117;
		  break;
		case "FR":
		  lat = 47;
		  long = 2;		  
		  break;
		}
		$('#map').gMap('centerAt',
			{
				latitude:lat,
				longitude: long,
				zoom: 5
			}
		);
		
	
	});	
});
</script>