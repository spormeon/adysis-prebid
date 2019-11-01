<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Email Pages - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Responsive Admin Template for blogging dashboard'; ?>
<?php $page = 'email';   // To set active on the same id of primary menu ?>


<?php
	  // Specific Configuration for Email Layouts
	  $start_nav_width = '';
	  $medium_nav_toggle=0 ;
	  $small_nav_toggle=0; 
	  $navbar_left_extra_class='vd_navbar-style-2'; 
	  $navbar_left = 'navbar-email'; 
	  $navbar_right = 'navbar-tabs-menu-right'; 
	  $navbar_right_start_width = 'nav-right-small'; 
	  $navbar_right_config = 1; 
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
                <li class="active">Email</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
            <!-- vd_panel-header -->
          </div>
          <!-- vd_panel-head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Email</h1>
              <small class="subtitle">Email templates</small> 
              <?php include('templates/widgets/panel-menu-title-section-email.tpl.php'); ?>   
            </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="panel widget light-widget">
            
              <div class="panel-heading no-title">
                      <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
              </div>
              <!-- vd_panel-heading -->
              
              <div class="panel-body">
                <h2 class="mgtp--10"> Inbox </h2>
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th> <div class="vd_checkbox">
                          <input type="checkbox" id="checkbox-0">
                          <label for="checkbox-0" ></label>
                        </div>
                      </th>
                      <th> </th>
                      <th colspan="3"> 
                      <div class="mgr-20 menu-btn"><a role="button"><i class="icon-trash append-icon vd_green"></i> Delete</a></div> 
                      <div class="mgr-20 menu-btn"><a role="button"><i class="fa fa-shield append-icon vd_green"></i> Spam</a></div> 
                      <div class="mgr-20 menu-btn"><a role="button"><i class="icon-folder append-icon vd_green"></i>Move</a></div> 
                      <div class="mgr-20 menu-btn"><a data-toggle="dropdown" role="button"><i class="fa fa-ellipsis-h append-icon vd_green"></i>More</a>
                        <ul class="dropdown-menu pull-right">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li class="divider"></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>
                        </div> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="width:20px"><div class="vd_checkbox">
                          <input type="checkbox" id="checkbox-1" class="checkbox-group">
                          <label for="checkbox-1" ></label>
                        </div></td>
                      <td style="width:40px"><div class="vd_star">
                          <input type="checkbox" id="checkstar-1">
                          <label for="checkstar-1"></label>
                        </div></td>
                      <td>Johann Un</td>
                      <td><span class="label vd_bg-green append-icon">Work</span> <strong>Issue #68: ThemeForest Chart Toppers, 2013 Wrap Up</strong> <span class="prepend-icon append-icon"><i class="icon-dot"></i></span> Marketplaces Monthly- Issue #68 -ThemeForest Chart Toppers of 2013</td>
                      <td style="width:80px" class="text-right"><strong>Dec 17</strong></td>
                    </tr>
                    <tr>
                      <td><div class="vd_checkbox">
                          <input type="checkbox"  id="checkbox-2" class="checkbox-group">
                          <label for="checkbox-2" ></label>
                        </div></td>
                      <td><div class="vd_star">
                          <input type="checkbox" checked="" value="1" id="checkstar-2">
                          <label for="checkstar-2"></label>
                        </div></td>
                      <td>Crescend Moon</td>
                      <td><span class="label vd_bg-red append-icon">Important</span> <strong>Issue #68: ThemeForest Chart Toppers, 2013 Wrap Up</strong> <span class="prepend-icon append-icon"><i class="icon-dot"></i></span> Marketplaces Monthly- Issue #68 -ThemeForest Chart Toppers of 2013</td>
                      <td class="text-right"><strong>Dec 17</strong></td>
                    </tr>
                    <tr>
                      <td><div class="vd_checkbox">
                          <input type="checkbox" id="checkbox-3" class="checkbox-group">
                          <label for="checkbox-3" ></label>
                        </div></td>
                      <td><div class="vd_star">
                          <input type="checkbox" id="checkstar-3">
                          <label for="checkstar-3"></label>
                        </div></td>
                      <td>Theme Forest</td>
                      <td><span class="label vd_bg-yellow append-icon">Home</span> <strong>Issue #68: ThemeForest Chart Toppers, 2013 Wrap Up</strong> <span class="prepend-icon append-icon"><i class="icon-dot"></i></span> Marketplaces Monthly- Issue #68 -ThemeForest Chart Toppers of 2013</td>
                      <td class="text-right"><strong>Dec 17</strong></td>
                    </tr>
                    <tr>
                      <td><div class="vd_checkbox">
                          <input type="checkbox" id="checkbox-4" class="checkbox-group">
                          <label for="checkbox-4" ></label>
                        </div></td>
                      <td><div class="vd_star">
                          <input type="checkbox" id="checkstar-4">
                          <label for="checkstar-4"></label>
                        </div></td>
                      <td>Envato Marketplace</td>
                      <td><strong>Issue #68: ThemeForest Chart Toppers, 2013 Wrap Up</strong> <span class="prepend-icon append-icon"><i class="icon-dot"></i></span> Marketplaces Monthly- Issue #68 -ThemeForest Chart Toppers of 2013</td>
                      <td class="text-right"><strong>Dec 17</strong></td>
                    </tr>
                    <tr>
                      <td><div class="vd_checkbox">
                          <input type="checkbox" id="checkbox-5" class="checkbox-group">
                          <label for="checkbox-5" ></label>
                        </div></td>
                      <td><div class="vd_star">
                          <input type="checkbox" checked="" value="1" id="checkstar-5">
                          <label for="checkstar-5"></label>
                        </div></td>
                      <td>Microlancer</td>
                      <td><strong>Issue #68: ThemeForest Chart Toppers, 2013 Wrap Up</strong> <span class="prepend-icon append-icon"><i class="icon-dot"></i></span> Marketplaces Monthly- Issue #68 -ThemeForest Chart Toppers of 2013</td>
                      <td class="text-right"><strong>Dec 17</strong></td>
                    </tr>
                    <tr>
                      <td><div class="vd_checkbox">
                          <input type="checkbox" id="checkbox-6" class="checkbox-group">
                          <label for="checkbox-6" ></label>
                        </div></td>
                      <td><div class="vd_star">
                          <input type="checkbox" checked="" value="1" id="checkstar-6">
                          <label for="checkstar-6"></label>
                        </div></td>
                      <td>Wordpress Newsletter</td>
                      <td><span class="label vd_bg-blue append-icon">Part Time</span> <strong>Issue #68: ThemeForest Chart Toppers, 2013 Wrap Up</strong> <span class="prepend-icon append-icon"><i class="icon-dot"></i></span> Marketplaces Monthly- Issue #68 -ThemeForest Chart Toppers of 2013</td>
                      <td class="text-right"><strong>Dec 17</strong></td>
                    </tr>
                    <tr>
                      <td><div class="vd_checkbox">
                          <input type="checkbox" id="checkbox-7" class="checkbox-group">
                          <label for="checkbox-7" ></label>
                        </div></td>
                      <td><div class="vd_star">
                          <input type="checkbox" id="checkstar-7">
                          <label for="checkstar-7"></label>
                        </div></td>
                      <td>Venmond, Inc.</td>
                      <td><span class="label vd_bg-green append-icon">Work</span> <strong>Issue #68: ThemeForest Chart Toppers, 2013 Wrap Up</strong> <span class="prepend-icon append-icon"><i class="icon-dot"></i></span> Marketplaces Monthly- Issue #68 -ThemeForest Chart Toppers of 2013</td>
                      <td class="text-right"><strong>Dec 17</strong></td>
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
              <!-- panel-body  -->
              
            </div>
          <!-- panel --> 
          
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
<?php include('templates/scripts/email.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>