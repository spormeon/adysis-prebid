
<!-- CK Editor  -->
<script type="text/javascript" src='plugins/ckeditor/ckeditor.js'></script>
<script type="text/javascript" src='plugins/ckeditor/adapters/jquery.js'></script>

<!-- Flot Chart  -->
<script type="text/javascript" src="plugins/flot/jquery.flot.min.js"></script>
<script type="text/javascript" src="plugins/flot/jquery.flot.resize.js"></script>
<script type="text/javascript" src="plugins/flot/jquery.flot.pie.min.js"></script>
<script type="text/javascript" src="plugins/flot/jquery.flot.categories.min.js"></script>



<!-- Intro JS (Tour) -->
<script type="text/javascript" src='plugins/introjs/js/intro.min.js'></script>

<script type="text/javascript">
$(window).load(function() 
	{
	"use strict";	
		
	//CKEDITOR.replace( $('[data-rel^="ckeditor"]') );
	$( '[data-rel^="ckeditor"]' ).ckeditor();
	
		
	var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
	];
	
	$( "#input-autocomplete" ).autocomplete({
		source: availableTags
	});	



	/* Multiple Values */
	function split( val ) {
		return val.split( /,\s*/ );
	}
	function extractLast( term ) {
		return split( term ).pop();
	}
	$( "#multiple-autocomplete" )
	// don't navigate away from the field on tab when selecting an item
	.bind( "keydown", function( event ) {
		if ( event.keyCode === $.ui.keyCode.TAB &&
		$( this ).data( "ui-autocomplete" ).menu.active ) {
		event.preventDefault();
	}
	})
	.autocomplete({
		minLength: 0,
		source: function( request, response ) {
		// delegate back to autocomplete, but extract the last term
		response( $.ui.autocomplete.filter(
		availableTags, extractLast( request.term ) ) );
		},
		focus: function() {
		// prevent value inserted on focus
		return false;
		},
		select: function( event, ui ) {
		var terms = split( this.value );
		// remove the current input
		terms.pop();
		// add the selected item
		terms.push( ui.item.value );
		// add placeholder to get the comma-and-space at the end
		terms.push( "" );
		this.value = terms.join( ", " );
		return false;
		}
	});	
		
		$(window).on("resize", function(){
			plot.resize();
			plot.setupGrid();
			plot.draw();
		});
				

		$.fn.UseTooltip = function () {
			var previousPoint = null;
			 
			$(this).bind("plothover", function (event, pos, item) {        
					if (item) {
						if (previousPoint != item.dataIndex) {
		
							previousPoint = item.dataIndex;
		
							$("#tooltip").remove();
							var x = item.datapoint[0].toFixed(2),
							y = item.datapoint[1].toFixed(2);
		
							showTooltip(item.pageX, item.pageY,
								"<p class='vd_bg-green'><strong class='mgr-10 mgl-10'>" + Math.round(x)  + " NOV 2013 </strong></p>" +
								"<div style='padding: 0 10px 10px;'>" +
								"<div>" + item.series.label +": <strong>"+ Math.round(y)  +"</strong></div>" +
								"<div> Profit: <strong>$"+ Math.round(y)*7  +"</strong></div>" +
								"</div>"
							);
						}
					} else {
						$("#tooltip").remove();
						previousPoint = null;            
					}
			});
		};
		 
		function showTooltip(x, y, contents) {
			$('<div id="tooltip">' + contents + '</div>').css({
				position: 'absolute',
				display: 'none',
				top: y + 5,
				left: x + 20,    
				size: '10',  
//				'border-top' : '3px solid #1FAE66',
				'background-color': '#111111',
				color: "#FFFFFF",
				opacity: 0.85
			}).appendTo("body").fadeIn(200);
		}


/* VISITOR LINE CHART */

		var data =[];
		for (var i = 1; i < 8; i += 1) {
			data.push([i, Math.random()*700+200])
		}		
		//		var data = [ [1, 200], [2, 320], [3, 220], [4, 480], [5, 340], [6, 560], [7, 700], [8, 400], [9, 520], [10, 320], [11, 80], [12, 340], [13, 640], [14, 400], [15, 250], [16, 100], [17, 280], [18, 670], [19, 350], [20, 800] ];
		
		var bgcolor = $('#visitor-line-chart').parent().css('background-color');
		var plot = $.plot("#visitor-line-chart", [		{
			data: data, 
			label: "Sum of Visits",
			color: '#1FAE66',
			animator: {steps: 60, duration: 1000, start:0}, 
			shadowSize: 0,	
			points: {
				show: true,
				fill: true,
				lineWidth: 0,
				fillColor: "#FFFFFF",
				radius: 8,

			},									
		}, 		
		{ 
			data: data, 
			label: "Sum of Visits",
			color: '#FFFFFF',
			animator: {steps: 60, duration: 1000, start:0}, 
			shadowSize: 0,	
			points: {
				show: true,
				fill: true,
				lineWidth: 0,
				fillColor: "#1FAE66",
				radius: 4,

			},
			grid:{				
				hoverable: false,
				clickable: false,},
			lines:false	,
			legend: { show: false }
		}], {
			data: data,
            shadowSize: 0,
			series: {
				lines: {
					show: true,
					fill: false,				
				},
				points: {
					show: true,
					fill: true,
					lineWidth: 3,
					fillColor: "#1FAE66",
					radius: 6,
	
				},				
			},
			grid: {
    			backgroundColor: { colors: [bgcolor, bgcolor] },			
				hoverable: true,
				clickable: true,
				borderWidth: false,
				axisMargin: 10,
				labelMargin: 15,
				autoHighlight: true,
				margin: 0,
				mouseActiveRadius: 50				
//				color: "#FFF",
			},
			xaxis: {
				autoscaleMargin: "1",
				tickDecimals: null,
				min:1,
				max:7,
				tickLength: 0,				
				show:true,
			},
			yaxis: {
				show:true,
				min: 0,
				max: 1000,
				reserveSpace: true,
				color: "#EAEAEA",
					
			},
			legend: {
				show: false, 
			},			
//			highlightColor: "#37b7f3"		
		});
		

 		$("#visitor-line-chart").UseTooltip();		


// Notification
	  setTimeout(function() { notification("topright","notify","fa fa-exclamation-triangle vd_yellow","Welcome to Vendroid","Click on <i class='fa fa-question-circle vd_red'></i> Question Mark beside filter to take a view layout tour guide"); },1500)	 ; 

});
</script>