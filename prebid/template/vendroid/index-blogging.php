<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Blogging Dashboard - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Responsive Admin Template for blogging dashboard'; ?>
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
                <li class="active">Dashboard</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Dashboard Blogging</h1>
              <small class="subtitle">Blogging Dashboard Example</small>
              <?php include('templates/widgets/panel-menu-title-section-index.tpl.php'); ?> 
            </div>
            <!-- vd_panel-header --> 
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-sm-15">
                <?php include('templates/widgets/widget-status-comment-total.tpl.php'); ?>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-sm-15">
                <?php include('templates/widgets/widget-status-comment-approved.tpl.php'); ?>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-xs-15">
                <?php include('templates/widgets/widget-status-comment-pending.tpl.php'); ?>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-xs-15">
                <?php include('templates/widgets/widget-status-comment-spam.tpl.php'); ?>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mgbt-md-20 mgbt-lg-0">
                <?php include('templates/widgets/widget-quick-press.tpl.php'); ?>
              </div>
              <div class="col-md-6">
                <?php include('templates/widgets/widget-tabs.tpl.php'); ?>
              </div>
              <!-- .col-md-6 --> 
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="panel vd_map-widget light-widget widget  panel-bd-left">
                  <div class="panel-body-list">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                    
                    <div class="pd-20">
                      <h5 class="mgbt-xs-20 mgtp-20"><span class="menu-icon append-icon"><i class="icon-graph"></i></span> <strong>VISITOR GRAPH</strong> (January 2014) </h5>
                      <div id="visitor-line-chart" style="height:326px; "></div>
                    </div>
                  </div>
                  <!-- panel-body-list --> 
                </div>
                <!-- Panel Widget --> 
              </div>
              <!--col-md-4 -->
              <div class="col-md-4">
                <div class="panel light-widget widget panel-bd-left">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body  table-responsive">
                    <h2 class="mgtp--5"> Last 10 Search Keyword </h2>
                    <table class="table table-condensed table-striped">
                      <thead>
                        <tr>
                          <th>Search Terms</th>
                          <th style="width:20px;">Results</th>
                          <th style="width:120px;">Number of Uses</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Pan</td>
                          <td class="text-center">4</td>
                          <td class="text-center">20</td>
                        </tr>
                        <tr>
                          <td>Fork</td>
                          <td class="text-center">1</td>
                          <td class="text-center">5</td>
                        </tr>
                        <tr>
                          <td>Big Bowl</td>
                          <td class="text-center">7</td>
                          <td class="text-center">23</td>
                        </tr>
                        <tr>
                          <td>Cooking Utensils</td>
                          <td class="text-center">2</td>
                          <td class="text-center">1</td>
                        </tr>
                        <tr>
                          <td>Ketchup Bottle</td>
                          <td class="text-center">3</td>
                          <td class="text-center">12</td>
                        </tr>
                        <tr>
                          <td>Pan</td>
                          <td class="text-center">4</td>
                          <td class="text-center">20</td>
                        </tr>
                        <tr>
                          <td>Fork</td>
                          <td class="text-center">1</td>
                          <td class="text-center">5</td>
                        </tr>
                        <tr>
                          <td>Big Bowl</td>
                          <td class="text-center">7</td>
                          <td class="text-center">23</td>
                        </tr>
                        <tr>
                          <td>Cooking Utensils</td>
                          <td class="text-center">2</td>
                          <td class="text-center">1</td>
                        </tr>
                        <tr>
                          <td>Ketchup Bottle</td>
                          <td class="text-center">3</td>
                          <td class="text-center">12</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="panel light-widget widget panel-bd-left">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body  table-responsive">
                    <h2 class="mgtp--5"> Blog Data </h2>
                    <table class="table table-condensed table-striped">
                      <thead>
                        <tr>
                          <th>Content</th>
                          <th class="text-center">Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Posts</td>
                          <td class="text-center"><a href="#">46</a></td>
                        </tr>
                        <tr>
                          <td>Pages</td>
                          <td class="text-center"><a href="#">11</a></td>
                        </tr>
                        <tr>
                          <td>Categories</td>
                          <td class="text-center"><a href="#">70</a></td>
                        </tr>
                        <tr>
                          <td>Tags</td>
                          <td class="text-center"><a href="#">131</a></td>
                        </tr>
                        <tr>
                          <td>Users</td>
                          <td class="text-center"><a href="#">34</a></td>
                        </tr>
                        <tr>
                          <td>Admin Users</td>
                          <td class="text-center"><a href="#">3</a></td>
                        </tr>
                        <tr>
                          <td>Subscribe Users</td>
                          <td class="text-center"><a href="#">324</a></td>
                        </tr>
                        <tr>
                          <td>Comments</td>
                          <td class="text-center"><a href="#">431</a></td>
                        </tr>
                        <tr>
                          <td>Theme</td>
                          <td class="text-center"><a href="#">Vendroid</a></td>
                        </tr>
                        <tr>
                          <td>CMS Version</td>
                          <td class="text-center"><a href="#">1.0</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
<?php include('templates/scripts/index-blogging.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>