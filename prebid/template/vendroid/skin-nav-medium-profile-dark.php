<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Skin Dark Medium HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Responsive Admin Template for blogging dashboard'; ?>
<?php $page = 'skin';   // To set active on the same id of primary menu ?>
<?php 
		// Specific Configuration for Nav Medium Profile Dark
		$navbar_left_start_width = 'nav-left-medium';  
		$navbar_left = 'navbar-tabs-profile'; 
		$navbar_left_extra_class = 'vd_navbar-style-2 background-1';
		$background='background-3';
		$layout='boxed-layout';
		$top_menu_extra_class='vd_bg-dark-blue  menu-search-style-2';
		$remove_navbar = 0; // Remove Navbar Toggle Button, 1 = show, 0 = hide
		$remove_header = 0; // Remove Header Toggle Button, 1 = show, 0 = hide
		$fullscreen = 0; // Full Screen Toggle Button, 1 = show, 0 = hide
		$boxedtofull = 1; // Boxed to Full Layout Toggle Button, 1 = show, 0 = hide			
		$medium_nav_toggle = 0 ;
		$enlarge_left_to_medium = 1 ;
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
                <li class="active">Dark Medium Navbar</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Dark Medium Navbar</h1>
              <small class="subtitle">Dark Color Medium Width Navigation with Profile Tab</small> </div>
          </div>
          <!-- vd_title-section -->
          
          
          <div class="vd_content-section clearfix">
            <p>Playing around with the skin to make it clean minimalist look</p>
            <pre class="prettyprint pd-20">
// Specific Configuration for Nav Medium Profile Dark
$navbar_left_start_width = 'nav-left-medium';  
$navbar_left = 'navbar-tabs-profile'; 
$navbar_left_extra_class = 'vd_navbar-style-2 background-1';
$background='background-3';
$layout='boxed-layout';
$top_menu_extra_class='vd_bg-dark-blue  menu-search-style-2';
$medium_nav_toggle = 0 ;
$enlarge_left_to_medium = 1 ;            
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