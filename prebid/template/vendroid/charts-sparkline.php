<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Sparkline Chart HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Sparkline Chart - Responsive Admin HTML Template'; ?>
<?php $page = 'charts';   // To set active on the same id of primary menu ?>
<?php $start_nav_width = '';  ?>

<!-- End of Data -->

<?php require_once('templates/headers/'.$header.'.tpl.php'); ?>

<div class="content">
  <div class="container">
    <?php if ($navbar_left_config != 0) { $current_navbar="vd_navbar-left"; require('templates/navbars/'.$navbar_left.'.tpl.php'); }?>
    <?php if ($navbar_right_config != 0) { $current_navbar="vd_navbar-right"; require('templates/navbars/'.$navbar_right.'.tpl.php'); }?>
    
    <!-- Middle Content Start -->
    
    <div class="vd_content-wrapper">
      <div class="vd_container">
        <div class="vd_content clearfix">
          <div class="vd_head-section clearfix">
            <div class="vd_panel-header">
              <ul class="breadcrumb">
                <li><a href="index.php">Home</a> </li>
                <li><a href="charts-morris.php">Charts</a> </li>
                <li class="active">Sparkline Chart</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header no-subtitle">
              <h1>Sparkline Chart</h1>
            </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-xs-12">
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h2 class="mgtp--5"> <span class="font-semibold">Sparkline</span> Chart </h2>
                    <p> This jQuery plugin generates sparklines (small inline charts) directly in the browser using data supplied either inline in the HTML, or via javascript.<br/>
                      The plugin is compatible with most modern browsers and has been tested with Firefox 2+, Safari 3+, Opera 9, Google Chrome and Internet Explorer 6, 7, 8, 9 & 10 as well as iOS and Android. <br/>
                      <br/>
                      More information go <a href="http://omnipotent.net/jquery.sparkline/">http://omnipotent.net/jquery.sparkline/</a></p>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-red">
                    <h3 class="panel-title"><span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Line Chart</h3>
                    <?php include('templates/widgets/panel-menu-widget-config.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <div class="row mgbt-xs-0">
                      <div class="col-xs-8">
                        <h2 class="vd_red mgbt-xs-0">157,303</h2>
                        <div class="vd_grey">% of Total: 100.00% (1,201)</div>
                      </div>
                      <div class="col-xs-4">
                        <div id="total-sparkline" class="mgtp-15 mgr-10 text-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-blue">
                    <h3 class="panel-title"><span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Bar Chart</h3>
                    <?php include('templates/widgets/panel-menu-widget-config.tpl.php'); ?>
                  </div>
                  <div class="panel-body">
                    <div class="row mgbt-xs-0">
                      <div class="col-xs-8">
                        <h2 class="vd_blue mgbt-xs-0">85.76%</h2>
                        <div class="vd_grey">Site Avg: 85.76% (0.00%)</div>
                      </div>
                      <div class="col-xs-4">
                        <div id="bounce-sparkline" class="mgtp-15 mgr-10 text-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-green">
                    <h3 class="panel-title"><span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Pie Chart</h3>
                    <?php include('templates/widgets/panel-menu-widget-config.tpl.php'); ?>
                  </div>
                  <div class="panel-body">
                    <div class="row mgbt-xs-0">
                      <div class="col-xs-8">
                        <h2 class="vd_green mgbt-xs-0"><i class="fa fa-usd"></i> 85.76</h2>
                        <div class="vd_grey">SEO Value: $85.76 </div>
                      </div>
                      <div class="col-xs-4">
                        <div id="seo-sparkline" class="mgtp-15 mgr-10 text-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-yellow">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Discrete Chart</h3>
                    <?php include('templates/widgets/panel-menu-widget-config.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <div class="row mgbt-xs-0">
                      <div class="col-xs-8">
                        <h2 class="vd_yellow mgbt-xs-0"><i class="fa fa-usd"></i> 8.23</h2>
                        <div class="vd_grey">Site Avg: $8.23 </div>
                      </div>
                      <div class="col-xs-4">
                        <div id="rpc-sparkline" class="mgtp-15 mgr-10 text-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--panel --> 
              </div>
            </div>
            <!-- row -->
            
            <div class="row">
              <div class="col-md-6">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Chart In Table </h3>
                  </div>
                  <div class="panel-body table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Company</th>
                          <th>Contact</th>
                          <th>Country</th>
                          <th>Status</th>
                          <th>Revenue Trend</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>NASDAQ</td>
                          <td class="center">Johann Un</td>
                          <td class="center">United States</td>
                          <td class="center"><span class="label label-success">BUY</span></td>
                          <td><div class="chart-1"></div></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Bold Bike</td>
                          <td class="center">Petrus Dar</td>
                          <td class="center">JAPAN</td>
                          <td class="center"><span class="label label-danger">SELL</span></td>
                          <td><div class="chart-2"></div></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>TECH CRUNCH, Ltd.</td>
                          <td class="center">Zeibsein Gunchineer</td>
                          <td class="center">UNITED STATES</td>
                          <td class="center"><span class="label label-warning">Normal</span></td>
                          <td><div class="chart-3"></div></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Sol Air, Inc.</td>
                          <td class="center">Gracia Mardon</td>
                          <td class="center">England</td>
                          <td class="center"><span class="label label-success">BUY</span></td>
                          <td><div class="chart-4"></div></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Electrify Co Ltd.</td>
                          <td class="center">Tresshold Compe</td>
                          <td class="center">Philipine</td>
                          <td class="center"><span class="label label-success">BUY</span></td>
                          <td><div class="chart-5"></div></td>
                        </tr>
                      </tbody>
                    </table>
                    <ul class="pagination">
                      <li><a href="#">«</a></li>
                      <li class="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">»</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 -->
              
              <div class="col-md-6">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Chart In Table </h3>
                  </div>
                  <div class="panel-body table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Team</th>
                          <th>W</th>
                          <th>L</th>
                          <th>History</th>
                          <th>Percent</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Manchester United</td>
                          <td>9</td>
                          <td>1</td>
                          <td><div class="win-lose-1"></div></td>
                          <td>90%</td>
                        </tr>
                        <tr>
                          <td>Chelsea</td>
                          <td>4</td>
                          <td>2</td>
                          <td><div class="win-lose-2"></div></td>
                          <td>87%</td>
                        </tr>
                        <tr>
                          <td>Arsenal</td>
                          <td>3</td>
                          <td>5</td>
                          <td><div class="win-lose-3"></div></td>
                          <td>75%</td>
                        </tr>
                        <tr>
                          <td>Liverpool</td>
                          <td>8</td>
                          <td>2</td>
                          <td><div class="win-lose-4"></div></td>
                          <td>69%</td>
                        </tr>
                        <tr>
                          <td>Everton</td>
                          <td>7</td>
                          <td>1</td>
                          <td><div class="win-lose-5"></div></td>
                          <td>65%</td>
                        </tr>
                      </tbody>
                    </table>
                    <ul class="pagination">
                      <li><a href="#">«</a></li>
                      <li class="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">»</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 --> 
            </div>
          </div>
          <!-- .vd_content-section --> 
          
        </div>
        <!-- .vd_content --> 
      </div>
      <!-- .vd_container --> 
    </div>
    <!-- .vd_content-wrapper --> 
    
    <!-- Middle Content End --> 
    
  </div>
  <!-- .container --> 
</div>
<!-- .content -->

<?php require_once('templates/footers/'.$footer.'.tpl.php'); ?>

<!-- Specific Page Scripts Put Here -->
<?php include('templates/scripts/charts-sparkline.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>