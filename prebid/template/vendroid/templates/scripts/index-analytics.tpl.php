<!-- Flot Chart  -->
<script type="text/javascript" src="plugins/flot/jquery.flot.min.js"></script>
<script type="text/javascript" src="plugins/flot/jquery.flot.resize.js"></script>
<script type="text/javascript" src="plugins/flot/jquery.flot.pie.min.js"></script>
<script type="text/javascript" src="plugins/flot/jquery.flot.categories.min.js"></script>

<!-- Vector Map -->
<script type="text/javascript" src="plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script type="text/javascript" src="plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>

<!-- Sparkline -->
<script type="text/javascript" src='plugins/sparkline/jquery.sparkline.min.js'></script>

<!-- Intro JS (Tour) -->
<script type="text/javascript" src='plugins/introjs/js/intro.min.js'></script>
<script type="text/javascript">
$(window).load(function() 
	{
	"use strict";
		
		$(window).on("resize", function(){
			plot.resize();
			plot.setupGrid();
			plot.draw();
		});
		
	$("#total-sparkline").sparkline([1,4,6,2,0,5,6,4], {
		type: 'line',
		height: '30px',
		width: '70px',
		lineColor: '#F85D2C',
		fillColor: '#f9b099'});
	$("#bounce-sparkline").sparkline([3,7,2,4,1,6,8,5],{
		type: 'line',
		height: '30px',
		width: '70px',
		lineColor: '#23709E',
		fillColor: '#83badb'});		

	$("#seo-sparkline").sparkline([1,4,6,2,0,5,6,4], {
		type: 'bar',
		height: '30px',
		barWidth: 6,
		barSpacing: 2,
		barColor: '#1FAE66',
		negBarColor: '#1FAE66'});	
			
	$("#rpc-sparkline").sparkline([3,6,4,7,6,2,9,3], {
		type: 'bar',
		height: '30px',
		barWidth: 6,
		barSpacing: 2,
		barColor: '#F89C2C',
		negBarColor: '#F89C2C'});			
		

				

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


/* DOUBLE CHART */

		var data =[];
		for (var i = 1; i < 8; i += 1) {
			data.push([i, Math.random()*600+300])
		}	
		var data_2 =[];
		for (var i = 1; i < 8; i += 1) {
			data_2.push([i, Math.random()*200+100])
		}	
			
		//		var data = [ [1, 200], [2, 320], [3, 220], [4, 480], [5, 340], [6, 560], [7, 700], [8, 400], [9, 520], [10, 320], [11, 80], [12, 340], [13, 640], [14, 400], [15, 250], [16, 100], [17, 280], [18, 670], [19, 350], [20, 800] ];
		
		var bgcolor = $('#double-chart').parent().css('background-color');
		var plot = $.plot("#double-chart", [
		{
			data: data, 
			label: "Sum of Visits",
			color: '#F85D2C',
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
				fillColor: "#F85D2C",
				radius: 4,

			},
			grid:{				
				hoverable: false,
				clickable: false,},
			lines:false	,
			legend: { show: false }
		},

		
		{
			data:data_2,
			label: 	"Sum of Non Paid Visits",
			lines: {fill: true, lineWidth: 0},
			points: {
				show: false,
				fill: false,
				lineWidth: 3,
				fillColor: "#f35958",
				radius: 6,

			},			
			color:"#f35958"					
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
					fillColor: "#f35958",
					radius: 6,
	
				},				
			},

			grid: {
    			backgroundColor: { colors: [bgcolor, bgcolor] },			
				hoverable: true,
				clickable: true,
				borderWidth: false,
				borderColor:"#f0f0f0",
				axisMargin: 10,
				labelMargin: 15,
				autoHighlight: true,
				margin: 0,
				mouseActiveRadius: 10				
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
		

 		$("#double-chart").UseTooltip();		



/* DOUBLE CHART 2 */

		var data =[];
		for (var i = 1; i < 31; i += 1) {
			data.push([i, Math.random()*700+200])
		}	
		var data_2 =[];
		for (var i = 1; i < 31; i += 1) {
			data_2.push([i, Math.random()*300+100])
		}	
			
		//		var data = [ [1, 200], [2, 320], [3, 220], [4, 480], [5, 340], [6, 560], [7, 700], [8, 400], [9, 520], [10, 320], [11, 80], [12, 340], [13, 640], [14, 400], [15, 250], [16, 100], [17, 280], [18, 670], [19, 350], [20, 800] ];
		
		var bgcolor = $('#double-chart-2').parent().css('background-color');
		var plot = $.plot("#double-chart-2", [
		{
			data: data, 
			label: "Sum of Visits",
			color: '#23709E',
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
				fillColor: "#23709E",
				radius: 4,

			},
			grid:{				hoverable: false,
				clickable: false,},
			lines:false	,
			legend: { show: false }
		},

		
		{
			data:data_2,
			label: 	"Sum of Non Paid Visits",
			lines: {fill: true, lineWidth: 0},
			points: {
				show: false,
				fill: false,
				lineWidth: 3,
				fillColor: "#23709E",
				radius: 6,

			},			
			color:"#23709E"					
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
					fillColor: "#23709E",
					radius: 6,
	
				},				
			},

			grid: {
    			backgroundColor: { colors: [bgcolor, bgcolor] },			
				hoverable: true,
				clickable: true,
				borderWidth: false,
				borderColor:"#f0f0f0",
				axisMargin: 10,
				labelMargin: 15,
				autoHighlight: true,
				margin: 0,
				mouseActiveRadius: 10				
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
		

 		$("#double-chart-2").UseTooltip();




/* PIE CHART */

		var pie_placeholder = $("#pie-chart");

		var pie_data = [];
		
		pie_data[0] = {
			label: "IE",
			data: 10
		}
		pie_data[1] = {
			label: "Safari",
			data: 8
		}	
		pie_data[2] = {
			label: "Opera",
			data: 8
		}				
		pie_data[3] = {
			label: "Chrome",
			data: 13
		}	
		pie_data[4] = {
			label: "Firefox",
			data: 17
		}	
		pie_data[5] = {
			label: "Other",
			data: 3
		}					
		var plot_1 = $.plot(pie_placeholder, pie_data, {
			series: {
				pie: { 
					show: true,
					label:{
						show: true,
						radius: .5,
						innerRadius: 0,
						formatter: labelFormatter,
						background: {
							opacity: 0
						}
					},

				}
			},
			grid: {
				hoverable: true,
				clickable: true
			},
			colors: ["#FCB660", "#ce91db", "#56A2CF", "#52D793", "#FC8660", "#CCCCCC"]
		});

		pie_placeholder.bind("plothover", function(event, pos, obj) {
			if (!obj) {
				return;
			}
			var percent = parseFloat(obj.series.percent).toFixed(2);
			$("#hover").html("<span style='font-weight:bold; color:" + obj.series.color + "'>" + obj.series.label + " (" + percent + "%)</span>");
		});

		pie_placeholder.bind("plotclick", function(event, pos, obj) {
			if (!obj) {
				return;
			}
			percent = parseFloat(obj.series.percent).toFixed(2);
			alert(""  + obj.series.label + ": " + percent + "%");
		});

	function labelFormatter(label, series) {
		return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
	}
		
/* DONUT CHART */
		var data_donut = [],
			series = 3;
		var data_donut = [
			{ label: "35% New Visitor",  data: 35},
			{ label: "65% Returning Visitor",  data: 65}
		];
		var revenue_donut_chart = $("#donut-chart");
		
		$("#donut-chart").bind("plotclick", function (event, pos, item) {
			if (item) {
				$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
				plot.highlight(item.series, item.datapoint);
			}
		});
		var plot_2 = $.plot(revenue_donut_chart, data_donut, {
			series: {
				pie: { 
					radius: 0.7,
					innerRadius: 0.4,
					show: true
				}
			},
			grid: {
				hoverable: true,
				clickable: true,
			},
			colors: ["#1FAE66", "#F85D2C "]				
		});



var cityAreaData = [
        500.70,
        410.16,
        210.69,
        120.17,
        64.31,
        150.35,
        130.22,
        120.71,
        100.32
      ]
$('#map1').vectorMap({
   map: 'world_mill_en',
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    focusOn:{
		  x: 5,
		  y: 0.56,
		  scale: 1.7
	},
	zoomOnScroll:false,
	zoomMin:0.85,
    hoverColor: false,
	regionStyle:{
		  initial: {
			fill: '#abe7c8',
			"fill-opacity": 1,
			stroke: '#abe7c8',
			"stroke-width": 0,
			"stroke-opacity": 0
		  },
		  hover: {
			"fill-opacity": 0.8
		  },
		  selected: {
			fill: 'yellow'
		  },
		  selectedHover: {
		  }
		},
    markerStyle: {
		  initial: {
			fill: '#F85D2C',
			stroke: '#F85D2C',
			"fill-opacity": 0.9,
			"stroke-width": 10,
			"stroke-opacity": 0.5,
			r: 3
		  },
		  hover: {
			stroke: '#F85D2C',
			"stroke-width": 14
		  },
		  selected: {
			fill: 'blue'
		  },
		  selectedHover: {
		  }
		},
    backgroundColor: '#ffffff',
     markers :[
  		{latLng: [50, 0], name: 'France - 43145 views'},	 
  		{latLng: [0, 120], name: 'Indonesia - 145 views'},
  		{latLng: [-25, 130], name: 'Australia - 486 views'},	
  		{latLng: [0, 20], name: 'Africa - 12 views'},	
  		{latLng: [35, 100], name: 'China - 7890 views'},	
  		{latLng: [46, 105], name: 'Mongolia - 2123 views'},	
  		{latLng: [40, 70], name: 'Kyrgiztan - 87456 views'},	
  		{latLng: [58, 50], name: 'Russia - 4905 views'},
		{latLng: [35, 135], name: 'Japan - 87456 views'}																		
      ],
	series: {
      markers: [{
        attribute: 'r',
        scale: [3, 7],
        values: cityAreaData
      }]
    },
  });	  


/* REAL TIME CHART */



		

// Notification
	  setTimeout(function() { notification("topright","notify","fa fa-exclamation-triangle vd_yellow","Welcome to Vendroid","Click on <i class='fa fa-question-circle vd_red'></i> Question Mark beside filter to take a view layout tour guide"); },1500)	 ; 

});
</script>