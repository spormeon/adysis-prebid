<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Google Maps HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid, google maps'; ?>
<?php $description = 'Google Maps - Responsive Admin HTML Template'; ?>
<?php $page = 'maps';   // To set active on the same id of primary menu ?>

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
                <li><a href="maps-vector.php">Maps</a> </li>
                <li class="active">Google Maps</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Google Maps</h1>
              <small class="subtitle">Google Maps Implementation, more information: <a href="http://labs.mario.ec/jquery-gmap/" rel="nofollow">http://labs.mario.ec/jquery-gmap/</a></small>
              <div class="vd_panel-menu" id="filters">
                <div class="menu">
                  <div data-action="click-trigger"> <span class="menu-icon mgr-10"><i class="fa fa-filter"></i></span>Focus On <i class="fa fa-angle-down"></i> </div>
                  <div class="vd_mega-menu-content width-xs-2 left-xs" data-action="click-target">
                    <div class="child-menu">
                      <div class="content-list content-menu">
                        <ul class="list-wrapper pd-lr-10">
                          <li> <a href="#" data-filter="US"> <span class="menu-icon"><i class=" fa fa-map-marker"></i></span> <span class="menu-text">United States</span> </a> </li>
                          <li> <a href="#" data-filter="CN"> <span class="menu-icon"><i class=" fa fa-map-marker"></i></span> <span class="menu-text">China</span> </a> </li>
                          <li> <a href="#" data-filter="ID"> <span class="menu-icon"><i class=" fa fa-map-marker"></i></span> <span class="menu-text">Indonesia</span> </a> </li>
                          <li> <a href="#" data-filter="FR"> <span class="menu-icon"><i class=" fa fa-map-marker"></i></span> <span class="menu-text">France</span> </a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- vd_mega-menu-content --> 
                </div>
                <!-- menu --> 
              </div>
              <!-- vd_panel-menu --> 
            </div>
            <!-- vd_panel-header --> 
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section pd-0 clearfix">
            <div id="map" style="height:1000px; width:100%;"></div>
            <div class="vd_info br" >
              <h5 class="text-right font-semibold"><strong>TOTAL VISITS</strong></h5>
              <h3 class="text-right  vd_red"><span class="append-icon"><i class="fa fa-map-marker"></i></span>3,546,456</h3>
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
<?php include('templates/scripts/maps-google.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>