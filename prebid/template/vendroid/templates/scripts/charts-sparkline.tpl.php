<!-- Sparkline -->
<script type="text/javascript" src='plugins/sparkline/jquery.sparkline.min.js'></script>


<script type="text/javascript">
$(window).load(function() {
	"use strict";
	$("#total-sparkline").sparkline([1,4,6,2,0,5,6,4], {
		type: 'line',
		height: '30px',
		width: '70px',
		lineColor: '#F85D2C',
		fillColor: '#f9b099'});
	$("#bounce-sparkline").sparkline([3,7,2,4,1,6,8,5],{
		type: 'bar',
		height: '30px',
		barWidth: 6,
		barSpacing: 2,		
		barColor: '#23709E',
		negBarColor: '#83badb'});		

	$("#seo-sparkline").sparkline([2,4,5], {
		type: 'pie',
		height: '30px',
		sliceColors: ['#2e8258','#4abc96','#1FAE66']
		});	
			

		
	$("#rpc-sparkline").sparkline([4,6,7,7,4,3,2,1,4,4,4,6,7,7,4,3], {
		type: 'discrete',
		height: '30px',
		lineColor: '#f89c2c',
		lineHeight: 10,});			

	for (var i = 0; i<5; i ++){
		var element= ".chart-"+(i+1);	
		var data=[];
		for (var j = 0; j<16; j ++){
			data.push([j, Math.floor(Math.random()*600+300)]) 
		}
		$(element).sparkline(data, {
			type: 'line',
			height: '20px',
			width: '70px',
			lineColor: '#F85D2C',
			fillColor: '#f9b099'});		
	}
	for (var i = 0; i<5; i ++){
		var element= ".win-lose-"+(i+1);	
		var data=[];
		for (var j = 0; j<12; j ++){
			data.push([Math.floor(Math.random() *3 -1 )]) 
		}
		$(element).sparkline(data, {
			type: 'tristate',
			height: '18',
			posBarColor: '#1fae66',
			negBarColor: '#f85d2c',
			zeroBarColor: '#cccccc',
			barWidth: 8});		

	}

});
</script>