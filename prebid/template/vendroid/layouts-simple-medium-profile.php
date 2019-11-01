<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Layouts Medium Profile HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Layouts Medium Profile - Responsive Admin HTML Template'; ?>
<?php $page = 'layouts';   // To set active on the same id of primary menu ?>
<?php 
	
	// Specific Configuration for Skin Minimalist Layouts
	$footer  = 'footer-empty';   // No Footer 
	$header  = 'header-4';   // Navigation Footer Clean Style

	$medium_nav_toggle = 0; // 1= visible, 0 = none
	$enlarge_left_to_medium = '1'; // if small_nav_toggle clicked, enlarge nav to '1' = medium, '0' default/large; 
	$navbar_left_start_width = 'nav-left-medium'; // '' = default width, 'nav-left-medium' = medium width, 'nav-left-small' = small width	
	$navbar_left = 'navbar-tabs-profile'; // 'navbar-tabs-menu' or 'navbar-tabs-profile' or 'navbar-tabs-tab' or 'navbar-chat' or 'navbar-email' or 'navbar-no-tab' or 'navbar-skin-tabs-profile'		
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
                <li class="active">Layout Simple Medium Profile</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Layouts Simple Medium Profile</h1>
              <small class="subtitle">Simple with Medium Profile</small> </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
          
          
          
          
            <p>Just by configuring our config.php, you can change whatever style you want. Also can do in html files just by adding specific class, all described in documentation.<br/><br/></p>
            <pre class="prettyprint pd-20">// Specific Configuration for Skin Minimalist Layouts
$footer  = 'footer-empty';   // No Footer 
$header  = 'header-4';   // Navigation Footer Clean Style

$medium_nav_toggle = 0; // 1= visible, 0 = none
$enlarge_left_to_medium = '1'; // if small_nav_toggle clicked, enlarge nav to '1' = medium, '0' default/large; 
$navbar_left_start_width = 'nav-left-medium'; // '' = default width, 'nav-left-medium' = medium width, 'nav-left-small' = small width	
$navbar_left = 'navbar-tabs-profile'; // 'navbar-tabs-menu' or 'navbar-tabs-profile' or 'navbar-tabs-tab' or 'navbar-chat' or 'navbar-email' or 'navbar-no-tab' or 'navbar-skin-tabs-profile'		
$navbar_right_config = 0; // no navbar right</pre>
            
            
            
            
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