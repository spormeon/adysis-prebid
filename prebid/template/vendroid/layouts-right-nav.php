<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Layouts Right Navigation HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Layouts Right Navigation - Responsive Admin HTML Template'; ?>
<?php $page = 'layouts';   // To set active on the same id of primary menu ?>
<?php 

	// Specific Configuration for Simple Layouts
 	$footer  = 'footer-2';   // Navigation Footer Clean Style 
	$header  = 'header-5';   // // Navigation Header Clean Style

	$medium_nav_toggle = 0; // 1= visible, 0 = none
	$small_nav_toggle = 0; // 1= visible, 0 = none
	$navbar_left_config = 0; // 1 = Available Start Visible
	$navbar_right_config = 1; // 1 = Available Start Visible		
    $navbar_right = 'navbar-tabs-menu-right';	 // navbar right = navbar with menu tabs and menu for the right side
	
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
                <li class="active">Layout Right Nav</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Layout Right Navigation</h1>
              <small class="subtitle">Simple Layouts with Right Navigation</small> </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
          

            <p>Just by configuring our config.php, you can change whatever style you want. Also can do in html files just by adding specific class, all described in documentation.<br/><br/></p>
            <pre class="prettyprint pd-20">// Specific Configuration for Simple Layouts
$footer  = 'footer-2';   // Navigation Footer Clean Style 
$header  = 'header-5';   // // Navigation Header Clean Style

$medium_nav_toggle = 0; // 1= visible, 0 = none
$small_nav_toggle = 0; // 1= visible, 0 = none
$navbar_left_config = 0; // 1 = Available Start Visible
$navbar_right_config = 1; // 1 = Available Start Visible		
$navbar_right = 'navbar-tabs-menu';	 // navbar right = navbar with menu tabs and menu</pre>

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