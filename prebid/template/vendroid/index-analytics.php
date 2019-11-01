<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Analytics Dashboard - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, '; ?>
<?php $description = 'Responsive Admin Template for analytics dashboard'; ?>
<?php $page = 'dashboard';   // To set active on the same id of primary menu ?>
<?php 
 	  // Additional Specific CSS 
	  $specific_css[0] = 'plugins/introjs/css/introjs.min.css';	
?>

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
                <li class="active">Analytics Dashboard</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Analytics Dashboard</h1>
              <small class="subtitle">Analytics Dashboard Example</small>
              <?php include('templates/widgets/panel-menu-title-section-index.tpl.php'); ?> 
            </div>
            <!-- vd_panel-header --> 
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-4">
                <div class="row">
                  <div class="col-md-12 col-sm-6">
                    <div class="panel widget">
                      <div class="panel-heading vd_bg-red">
                        <h3 class="panel-title"><span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Visits</h3>
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
                  <div class="col-md-12 col-sm-6">
                    <div class="panel widget">
                      <div class="panel-heading vd_bg-blue">
                        <h3 class="panel-title"><span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Bounce Rate</h3>
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
                  <div class="col-md-12 col-sm-6">
                    <div class="panel widget">
                      <div class="panel-heading vd_bg-green">
                        <h3 class="panel-title"><span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> SEO per Visit Value</h3>
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
                  <div class="col-md-12 col-sm-6">
                    <div class="panel widget">
                      <div class="panel-heading vd_bg-yellow">
                        <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> RPC</h3>
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
                  <div class="col-md-12 col-sm-12">
                    <div class="panel widget">
                      <div class="panel-heading vd_bg-grey">
                        <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Keywords Visits and Convertion </h3>
                        <?php include('templates/widgets/panel-menu-widget-config.tpl.php'); ?>  
                      </div>
                      <div class="panel-body  table-responsive">
                        <table class="table table-condensed table-striped">
                          <thead>
                            <tr>
                              <th>Keywords</th>
                              <th class="text-center" style="width:60px;">Visits</th>
                              <th class="text-center" style="width:120px;">Convertion Rate</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Pan</td>
                              <td class="text-center">4,123</td>
                              <td class="text-center">20%</td>
                            </tr>
                            <tr>
                              <td>Fork</td>
                              <td class="text-center">123</td>
                              <td class="text-center">5%</td>
                            </tr>
                            <tr>
                              <td>Big Bowl</td>
                              <td class="text-center">789</td>
                              <td class="text-center">23%</td>
                            </tr>
                            <tr>
                              <td>Cooking Utensils</td>
                              <td class="text-center">224</td>
                              <td class="text-center">1%</td>
                            </tr>
                            <tr>
                              <td>Ketchup Bottle</td>
                              <td class="text-center">3,294</td>
                              <td class="text-center">12%</td>
                            </tr>
                            <tr>
                              <td>Pan</td>
                              <td class="text-center">4,123</td>
                              <td class="text-center">20%</td>
                            </tr>
                            <tr>
                              <td>Fork</td>
                              <td class="text-center">123</td>
                              <td class="text-center">5%</td>
                            </tr>
                            <tr>
                              <td>Big Bowl</td>
                              <td class="text-center">789</td>
                              <td class="text-center">23%</td>
                            </tr>
                            <tr>
                              <td>Cooking Utensils</td>
                              <td class="text-center">224</td>
                              <td class="text-center">1%</td>
                            </tr>
                            <tr>
                              <td>Ketchup Bottle</td>
                              <td class="text-center">3,294</td>
                              <td class="text-center">12%</td>
                            </tr>
                            <tr>
                              <td>Pan</td>
                              <td class="text-center">4,123</td>
                              <td class="text-center">20%</td>
                            </tr>
                            <tr>
                              <td>Fork</td>
                              <td class="text-center">123</td>
                              <td class="text-center">5%</td>
                            </tr>
                            <tr>
                              <td>Big Bowl</td>
                              <td class="text-center">789</td>
                              <td class="text-center">23%</td>
                            </tr>
                            <tr>
                              <td>Cooking Utensils</td>
                              <td class="text-center">224</td>
                              <td class="text-center">1%</td>
                            </tr>
                            <tr>
                              <td>Ketchup Bottle</td>
                              <td class="text-center">3,294</td>
                              <td class="text-center">12%</td>
                            </tr>
                            <tr>
                              <td>Big Bowl</td>
                              <td class="text-center">789</td>
                              <td class="text-center">23%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- col-md-3 -->
              <div class="col-md-5">
                <?php include('templates/widgets/widget-double-chart.tpl.php'); ?>
                <?php include('templates/widgets/widget-double-chart-2.tpl.php'); ?>
                <div class="panel map-widget widget">
                  <div class="panel-heading vd_bg-yellow">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="glyphicon glyphicon-map-marker"></i> </span> <span class="menu-text">Visitor Map</span> </h3>
                    <?php include('templates/widgets/panel-menu-widget-config.tpl.php'); ?>  
                  </div>
                  <div class="panel-body-list">
                    <div id="map1" style="height: 348px;"></div>
                    <div class="vd_info br" >
                      <h5 class="text-right font-semibold"><strong>TOTAL VISITS</strong></h5>
                      <h3 class="text-right  vd_red"><span class="append-icon"><i class="fa fa-map-marker"></i></span>3,546,456</h3>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <div class="col-md-3">
                <div class="panel vd_map-widget widget">
                  <div class="panel-heading vd_bg-red">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="icon-pie"></i> </span> Web Browser Sources </h3>
                    <?php include('templates/widgets/panel-menu-widget-config.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <div id="pie-chart" class="pie-chart" style="height:250px;"></div>
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel-->
                
                <div class="panel vd_map-widget widget">
                  <div class="panel-heading vd_bg-blue">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="icon-pie"></i> </span> New Vs Returning Visitors </h3>
                    <?php include('templates/widgets/panel-menu-widget-config.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <div id="donut-chart" class="donut-chart" style="height:253px;"></div>
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel-->
                
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"><i class="icon-mobile"></i></span> Visit By Device Type </h3>
                    <?php include('templates/widgets/panel-menu-widget-config.tpl.php'); ?>  
                  </div>
                  <div class="panel-body  table-responsive">
                    <table class="table table-condensed table-striped">
                      <thead>
                        <tr>
                          <th>Device</th>
                          <th class="text-center" style="width:60px;">Visits</th>
                          <th class="text-center" style="width:120px;">Convertion Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>iPhone 5</td>
                          <td class="text-center">4,123</td>
                          <td class="text-center">20%</td>
                        </tr>
                        <tr>
                          <td>iPad</td>
                          <td class="text-center">123</td>
                          <td class="text-center">5%</td>
                        </tr>
                        <tr>
                          <td>PC Desktop</td>
                          <td class="text-center">789</td>
                          <td class="text-center">23%</td>
                        </tr>
                        <tr>
                          <td>iMac</td>
                          <td class="text-center">224</td>
                          <td class="text-center">1%</td>
                        </tr>
                        <tr>
                          <td>GT 5100</td>
                          <td class="text-center">3,294</td>
                          <td class="text-center">12%</td>
                        </tr>
                        <tr>
                          <td>iPod Touch</td>
                          <td class="text-center">4,123</td>
                          <td class="text-center">20%</td>
                        </tr>
                        <tr>
                          <td>Desire</td>
                          <td class="text-center">123</td>
                          <td class="text-center">5%</td>
                        </tr>
                        <tr>
                          <td>(not set)</td>
                          <td class="text-center">789</td>
                          <td class="text-center">23%</td>
                        </tr>
                        <tr>
                          <td>GT-I9000</td>
                          <td class="text-center">224</td>
                          <td class="text-center">1%</td>
                        </tr>
                        <tr>
                          <td>Desire</td>
                          <td class="text-center">3,294</td>
                          <td class="text-center">12%</td>
                        </tr>
                        <tr>
                          <td>Nokia Z Series</td>
                          <td class="text-center">4,123</td>
                          <td class="text-center">20%</td>
                        </tr>
                        <tr>
                          <td>Laptop</td>
                          <td class="text-center">123</td>
                          <td class="text-center">5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- panel-body --> 
                </div>
                <!--panel --> 
              </div>
            </div>
            <!-- row --> 
            
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
<?php include('templates/scripts/index-analytics.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>