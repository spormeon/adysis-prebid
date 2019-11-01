<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = '404 Error Pages HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = '404 Error Pages - Responsive Admin HTML Template'; ?>
<?php $page = 'pages';   // To set active on the same id of primary menu ?>
<?php 
	// Specific Configuration
	$header = 'header-empty'; 
	$body_extra_class="remove-navbar login-layout";  
	$footer = "footer-2"; 
	$background = "background-login"; 
	$navbar_left_config = 0;
	$navbar_right_config = 0; 
?>

<!-- End of Data -->

<?php require_once('templates/headers/'.$header.'.tpl.php'); ?>

<div class="content">
  <div class="container"> 
    
    <!-- Middle Content Start -->
    
    <div class="vd_content-wrapper">
      <div class="vd_container">
        <div class="vd_content clearfix">
          <div class="vd_content-section clearfix">
            <div class="vd_register-page">
              <div class="heading clearfix">
                <div class="logo">
                  <h2 ><img src="img/logo.png" alt="logo"></h2>
                </div>
              </div>
              <div class="panel widget">
                <div class="panel-body">
                  <div class="login-icon"> <i class="fa fa-cog"></i> </div>
                  <h1 class="font-semibold text-center" style="font-size:52px">505 ERROR</h1>
                  <form class="form-horizontal" action="#" role="form">
                    <div class="form-group">
                      <div class="col-md-12">
                        <h4 class="text-center mgbt-xs-20">The website cannot display the page</h4>
                        <p class="text-center"> Please <a href="index.php">click here</a> to go back to our home page or use the search form below</p>
                        <div class="vd_input-wrapper" id="email-input-wrapper"> <span class="menu-icon"> <i class="fa fa-search"></i> </span>
                          <input type="text" placeholder="Search Here" class="width-80">
                        </div>
                      </div>
                    </div>
                    <div id="vd_login-error" class="alert alert-danger hidden"><i class="fa fa-exclamation-circle fa-fw"></i> Please fill the necessary field </div>
                  </form>
                </div>
              </div>
              <!-- Panel Widget -->
              <div class="register-panel text-center font-semibold"> <a href="#">Home</a> <span class="mgl-10 mgr-10 vd_soft-grey">|</span> <a href="#">About</a> <span class="mgl-10 mgr-10 vd_soft-grey">|</span> <a href="#">FAQ</a> <span class="mgl-10 mgr-10 vd_soft-grey">|</span> <a href="#">Contact</a> </div>
            </div>
            <!-- vd_login-page --> 
            
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
<?php include('templates/scripts/forms-elements.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>