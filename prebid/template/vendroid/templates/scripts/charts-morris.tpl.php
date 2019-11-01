<script type="text/javascript" src="plugins/raphael/raphael.min.js"></script>
<script type="text/javascript" src="plugins/morris/morris.min.js"></script>


<script type="text/javascript">
$(window).load(function() 
	{
	"use strict";

	  Morris.Area({
		element: 'chart-placeholder',
		data: [
		  {period: '2010 Q1', iphone: 2666, ipad: null, itouch: 2647},
		  {period: '2010 Q2', iphone: 2778, ipad: 2294, itouch: 2441},
		  {period: '2010 Q3', iphone: 4912, ipad: 1969, itouch: 2501},
		  {period: '2010 Q4', iphone: 3767, ipad: 3597, itouch: 5689},
		  {period: '2011 Q1', iphone: 6810, ipad: 1914, itouch: 2293},
		  {period: '2011 Q2', iphone: 5670, ipad: 4293, itouch: 1881},
		  {period: '2011 Q3', iphone: 4820, ipad: 3795, itouch: 1588},
		  {period: '2011 Q4', iphone: 15073, ipad: 5967, itouch: 5175},
		  {period: '2012 Q1', iphone: 10687, ipad: 4460, itouch: 2028},
		  {period: '2012 Q2', iphone: 8432, ipad: 5713, itouch: 1791}
		],
		xkey: 'period',
		ykeys: ['iphone', 'ipad', 'itouch'],
		labels: ['iPhone', 'iPad', 'iPod Touch'],
		pointSize: 0,
		hideHover: 'auto',
		pointFillColors: ["#4abc96","#1FAE66","#2e8258"],
		lineColors: ["#4abc96","#1FAE66","#2e8258"],
		lineWidth: 0
	  });
  		

	Morris.Line({
	  element: 'line-placeholder',
	  data: [
		{ y: '2006', a: 15,  },
		{ y: '2007', a: 55,   },
		{ y: '2008', a: 35,   },
		{ y: '2009', a: 65,  },
		{ y: '2010', a: 50,  },
		{ y: '2011', a: 60,   },
		{ y: '2012', a: 100, }
	  ],
	  xkey: 'y',
	  ykeys: ['a', ],
	  labels: ['Series A', ],
	  lineColors: ['#F85D2C']
	});
		
	Morris.Bar({
	  element: 'bar-placeholder',
	  data: [
		{ y: '2006', a: 100, b: 90 },
		{ y: '2007', a: 75,  b: 65 },
		{ y: '2008', a: 50,  b: 40 },
		{ y: '2009', a: 75,  b: 65 },
		{ y: '2010', a: 50,  b: 40 },
		{ y: '2011', a: 75,  b: 65 },
		{ y: '2012', a: 100, b: 90 }
	  ],
	  xkey: 'y',
	  ykeys: ['a', 'b'],
	  labels: ['Series A', 'Series B'],
	  barColors: ["#23709E","#39515f"]
	});

	
	Morris.Donut({
	  element: 'donut-placeholder',
	  data: [
		{label: "Download Sales", value: 12},
		{label: "In-Store Sales", value: 30},
		{label: "Mail-Order Sales", value: 20}
	  ],
	  colors: ["#f2be3e","#F89C2C", "#7f684d"]
	});




});
</script>