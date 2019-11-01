<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Layouts Simple HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Layouts Medium Profile - Responsive Admin HTML Template'; ?>
<?php $page = 'layouts';   // To set active on the same id of primary menu ?>
<?php 

	// Specific Configuration for Simple Layouts
	$footer  = 'footer-2';   // Navigation Footer Clean Style 
    $header  = 'header-4';   // Navigation Footer Clean Style
	$medium_nav_toggle = 0; // 1= visible, 0 = none
	$small_nav_toggle = 0; // 1= visible, 0 = none
	$navbar_right_config = 0; // no navbar right
	$layout = 'middle-layout'; // 'full-layout', 'middle-layout', 'boxed-layout'
	$background = "vd_bg-soft-grey"; // No Responsive
	$responsive = 0; // No Responsive
		
	
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
                <li class="active">Layout Middle No Responsive</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Layout Middle No Responsive</h1>
              <small class="subtitle">Middle Content Layout with no responsive features</small> </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
          

            <p>Just by configuring our config.php, you can change whatever style you want. Also can do in html files just by adding specific class, all described in documentation.<br/><br/></p>
            <pre class="prettyprint pd-20">// Specific Configuration for Simple Layouts
$footer  = 'footer-2';   // Navigation Footer Clean Style 
$header  = 'header-4';   // Navigation Footer Clean Style
$medium_nav_toggle = 0; // 1= visible, 0 = none
$small_nav_toggle = 0; // 1= visible, 0 = none
$navbar_right_config = 0; // no navbar right
$layout = 'middle-layout'; // 'full-layout', 'middle-layout', 'boxed-layout'
$responsive = 0; // No Responsive</pre>
			<br/>
            <div class="row">
              <div class="col-sm-6">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-red">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="icon-pie"></i> </span> Testing Panel </h3>
                    <?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem <a href="#">ipsum dolor</a> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco.</p>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <div class="col-sm-6">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-yellow">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="icon-pie"></i> </span> Testing Panel </h3>
                    <?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem <a href="#">ipsum dolor</a> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco.</p>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-sm-6 --> 
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
<?php include('templates/scripts/prettyprint.tpl.php'); ?>


<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>