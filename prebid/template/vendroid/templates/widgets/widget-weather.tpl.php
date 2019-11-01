
<div class="panel widget vd_weather-widget">
  <div class="panel-heading no-title vd_bg-yellow">
	<?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
  </div>
  <div class="panel-body vd_bg-yellow vd_white">
    <h1 class="weather-degree">25&deg;</h1>
    <h4 class="weather-description mgbt-xs-5">Sunny Day</h4>
    <h4 class="weather-degree-2">15&deg; / 20&deg;</h4>
    <div class="weather-icon">
      <canvas id="clear-day" width="80" height="80"> </canvas>
    </div>
  </div>
  <div class="panel-body-list weather-info">
    <div class="col-xs-6 bdr-soft-grey">
      <h1 class="font-semibold vd_yellow weather-subinfo humid value" ><span>
        <canvas id="rain" width="36" height="36"></canvas>
        </span> 46%</h1>
    </div>
    <div class="col-xs-6">
      <h1 class="vd_yellow weather-subinfo" ><span class="append-icon">
        <canvas id="wind" width="36" height="36"></canvas>
        </span><span class="font-semibold prepend-icon wind-value">1</span><span class="wind-text">m/s</span></h1>
    </div>
  </div>
</div>
<!-- Panel Widget --> 