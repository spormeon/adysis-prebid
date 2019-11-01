<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Skin Clean Minialist HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Responsive Admin Template for blogging dashboard'; ?>
<?php $page = 'skin';   // To set active on the same id of primary menu ?>
<?php 
    // Specific Configuration for Skin Minimalist Layouts
	$header= 'header-3';
	$footer= 'footer-2';
	$body_extra_class = 'content-style-2';
	
	$navbar_left = 'navbar-no-tab'; 
	$navbar_left_extra_class = 'vd_navbar-style-2'; 
	$medium_nav_toggle = 0;
	$top_menu_extra_class='vd_bg-white light-top-menu menu-search-style-2';
	$logo_container_extra_class='vd_bg-white panel-menu-style-2';
	$logo_path = 'img/logo.png'; 
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
                <li><a href="skin-clean-minimalist.php">Skin Playground</a> </li>
                <li class="active">Clean Minimalist Nav</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Clean Minimalist Skin</h1>
              <small class="subtitle">Light Color Background Top Menu</small> </div>              
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <p>Playing around with the skin to make it clean minimalist look</p>
            <pre class="prettyprint pd-20">
// Specific Configuration for Skin Minimalist Layouts
    
$header= 'header-3';
$footer= 'footer-2';
$body_extra_class = 'content-style-2';
	
$navbar_left = 'navbar-no-tab'; 
$navbar_left_extra_class = 'vd_navbar-style-2'; 
$medium_nav_toggle = 0;
$top_menu_extra_class='vd_bg-white light-top-menu menu-search-style-2';
$logo_container_extra_class='vd_bg-white panel-menu-style-2';
$logo_path = 'img/logo.png';            
            </pre>
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