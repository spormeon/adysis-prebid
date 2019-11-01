<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Navigation Medium Size Profile Tab - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Navigation Medium Size Profile Tab - Responsive Admin HTML Template'; ?>
<?php $page = 'nav';   // To set active on the same id of primary menu ?>

<?php
	 // Specific Configuration
	 $navbar_left_start_width = 'nav-left-medium';  // Navigation Left Medium Size
	 $navbar_left = 'navbar-tabs-tab'; // Tabs Tab
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
                <li><a href="nav-side-large-menu-tab.php">Nav Variations</a> </li>
                <li><a href="nav-side-large-menu-tab.php">Side Navigation</a> </li >
                <li class="active">Medium Tabs Tab</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Medium Tabs Tab</h1>
              <small class="subtitle">Medium Size Navigation with Tabs Tab</small> </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <p>Just by configuring our config.php, you can change whatever style you want. Also can do in html files just by adding specific class, all described in documentation.<br/>
              <br/>
            </p>
            <pre class="prettyprint pd-20">
	 // Specific Configuration
	 $navbar_left_start_width = 'nav-left-medium';  // Navigation Left Medium Size
	 $navbar_left = 'navbar-tabs-tab'; // Tabs Tab     
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