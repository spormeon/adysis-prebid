<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'E-Commerce Dashboard - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, '; ?>
<?php $description = 'Responsive Admin Template for e-commerce dashboard'; ?>
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
                <li class="active">E-Commerce Dashboard</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>E-Commerce Dashboard</h1>
              <small class="subtitle">E-Commerce Dashboard Example</small>
              <?php include('templates/widgets/panel-menu-title-section-index.tpl.php'); ?> 
            </div>
            <!-- vd_panel-header --> 
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-sm-15">
                <?php include('templates/widgets/widget-status-total-visitor-2.tpl.php'); ?>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-sm-15">
                <?php include('templates/widgets/widget-status-new-order.tpl.php'); ?>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-xs-15">
                <?php include('templates/widgets/widget-status-new-review.tpl.php'); ?>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-xs-15">
                <?php include('templates/widgets/widget-status-new-user.tpl.php'); ?>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 mgbt-md-20 mgbt-lg-0">
                <?php include('templates/widgets/widget-interactive-chart.tpl.php'); ?>
              </div>
              <!-- col-md-8 -->
              <div class="col-md-4">
				<?php include('templates/widgets/widget-pie-transaction.tpl.php'); ?>
              </div>
              <!-- .col-md-4 --> 
            </div>
            <div class="row">
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-12">
                    <?php include('templates/widgets/widget-tabs.tpl.php'); ?>
                  </div>
                  <!-- col-md-12 --> 
                </div>
                <!-- row --> 
                
              </div>
              <!-- col-md-6 -->
              <div class="col-md-5">
                <div class="panel widget">
                  <div class="panel-body-list  table-responsive">
                    <table class="table no-head-border table-striped">
                      <thead class="vd_bg-blue vd_white">
                        <tr>
                          <th><i class="fa fa-search append-icon"></i>Last 5 Search Terms</th>
                          <th style="width:20px">Results</th>
                          <th style="width:140px">Number of Uses</th>
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
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="panel widget">
                  <div class="panel-body-list  table-responsive">
                    <table class="table no-head-border table-striped">
                      <thead class="vd_bg-blue vd_white">
                        <tr>
                          <th><i class="fa fa-search append-icon"></i>Top 5 Search Terms</th>
                          <th style="width:20px">Results</th>
                          <th style="width:140px">Number of Uses</th>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- col-md-6 --> 
              
            </div>
            <!-- .row --> 
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
</div>
<?php require_once('templates/footers/'.$footer.'.tpl.php'); ?>

<!-- Specific Page Scripts Put Here -->
<?php include('templates/scripts/index-ecommerce.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>