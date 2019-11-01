<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Layout Double Side Nav HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Layout Double Side Nav - Responsive Admin HTML Template '; ?>
<?php $page = 'layouts';   // To set active on the same id of primary menu ?>
<?php 

	// Specific Configuration for Simple Layouts
	$footer  = 'footer-3';   // Navigation Footer Centered Text with Menu Link 
	$header  = 'header-1';   // Navigation Header With Search

	$medium_nav_toggle = 0; // 1= visible, 0 = none
	
	$navbar_right_config = 1; // 1 = Available Start Visible
    $navbar_right = 'navbar-no-tab';	 // navbar with email content on the right side
    $navbar_right_extra_class = 'vd_bg-grey';
	$navbar_right_start_width = 'nav-right-small';	
	
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
                <li class="active">Layout Double Side Nav</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Layout Double Side Nav</h1>
              <small class="subtitle">Double Navigation Bar with Search on Header</small> </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
          

            <p>Just by configuring our config.php, you can change whatever style you want. Also can do in html files just by adding specific class, all described in documentation.<br/><br/></p>
            <pre class="prettyprint pd-20">// Specific Configuration for Simple Layouts
$footer  = 'footer-3';   // Navigation Footer Centered Text with Menu Link  
$header  = 'header-1';   // Navigation Header With Search

$medium_nav_toggle = 0; // 1= visible, 0 = none
	
$navbar_right_config = 1; // 1 = Available Start Visible
$navbar_right = 'navbar-no-tab';	 // navbar with email content on the right side
$navbar_right_extra_class = 'vd_bg-grey';
$navbar_right_start_width = 'nav-right-small';</pre>

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