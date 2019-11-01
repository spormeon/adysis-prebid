<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Layouts Without Subtitle HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Layouts Without Subtitle - Responsive Admin HTML Template'; ?>
<?php $page = 'layouts';   // To set active on the same id of primary menu ?>
<?php 

	// Specific Configuration for Simple Layouts
	$footer  = 'footer-2';   // Navigation Footer Clean Style 
    $header  = 'header-5';   // Navigation Footer Clean Style
	$medium_nav_toggle = 0; // 1= visible, 0 = none
	$small_nav_toggle = 1; // 1= visible, 0 = none
	$navbar_right_config = 0; // no navbar right
	
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
                <li><a href="layouts-simple.php">Layouts</a> </li>
                <li class="active">Layout Without Subtitle</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header no-subtitle">
              <h1>Title Without Subtitle</h1>
              <div class="vd_panel-menu">
                <div class="menu">
                  <div data-action="click-trigger" class="open"> <span class="menu-icon mgr-10"><i class="fa fa-filter"></i></span>Filter <i class="fa fa-angle-down"></i> </div>
                  <div data-action="click-target" class="vd_mega-menu-content width-xs-2 left-xs" style="display: block;">
                    <div class="child-menu">
                      <div class="content-list content-menu">
                        <ul class="list-wrapper pd-lr-10">
                          <li> <a href="#">
                            <div class="menu-icon"><i class=" fa fa-user"></i></div>
                            <div class="menu-text">Filter User</div>
                            </a> </li>
                          <li> <a href="#">
                            <div class="menu-icon"><i class=" fa fa-calendar"></i></div>
                            <div class="menu-text">Filter Date</div>
                            </a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- menu --> 
              </div>
            </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <p>Just by adding class &quot;<strong>no-subtitle</strong>&quot; next to vd_panel-header and remove the subtitle<br/>
              <br/>
            </p>
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
<?php include('templates/scripts/prettyprint.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>