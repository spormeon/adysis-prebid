<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'UI Elements Pricing Tables - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'UI Elements Pricing Tables - Responsive Admin HTML Template'; ?>
<?php $page = 'ui';   // To set active on the same id of primary menu ?>

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
                <li><a href="ui-panels.php">UI</a> </li>
                <li class="active">Pricing Tables</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Pricing Tables</h1>
              <small class="subtitle">Pricing Tables for Products Display</small> </div>
          </div>
          <div class="vd_content-section example-icon clearfix">
            <div class="row">
              <div class="vd_pricing-table">
                <div class="col-md-6 col-lg-3">
                  <div class="plan">
                    <div class="plan-header vd_bg-green vd_white text-center vd_info-parent">
                      <h3 class="pd-20 mgbt-xs-0">BASIC</h3>
                      <div class="price vd_bg-black-30"> <span class="main"><span class="font-light">$</span><span class="font-bold">10</span> </span> <span class="suffix">99</span> <span class="text">/month</span> </div>
                      <i class="caret-pos fa fa-caret-up vd_white"></i> </div>
                    <div class="features vd_bg-white font-sm content-list">
                      <ul class="list-wrapper">
                        <li><i class="glyphicon glyphicon-hdd mgr-10"></i> <b>10GB</b> Disk Space</li>
                        <li><i class="fa fa-signal mgr-10"></i> <b>100GB</b> Monthly Bandwidth</li>
                        <li><i class="fa fa-envelope mgr-10"></i> <b>20</b> Email Accounts</li>
                        <li><i class="fa fa-flask mgr-10"></i> <b>Unlimited</b> subdomains</li>
                      </ul>
                      <br/>
                      <div class="pd-20 text-center"> <a class="btn vd_btn vd_bg-green btn-lg" href="#">Get Started</a> </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 mgbt-xs-20 mgbt-md-0">
                  <div class="plan">
                    <div class="plan-header vd_bg-yellow vd_white text-center vd_info-parent">
                      <h3 class="pd-20 mgbt-xs-0">PERSONAL</h3>
                      <div class="price vd_bg-black-30"> <span class="main"><span class="font-light">$</span><span class="font-bold">30</span> </span> <span class="suffix">99</span> <span class="text">/month</span> </div>
                      <i class="caret-pos fa fa-caret-up vd_white"></i> </div>
                    <div class="features vd_bg-white font-sm content-list">
                      <ul class="list-wrapper">
                        <li><i class="glyphicon glyphicon-hdd mgr-10"></i> <b>10GB</b> Disk Space</li>
                        <li><i class="fa fa-signal mgr-10"></i> <b>100GB</b> Monthly Bandwidth</li>
                        <li><i class="fa fa-envelope mgr-10"></i> <b>20</b> Email Accounts</li>
                        <li><i class="fa fa-flask mgr-10"></i> <b>Unlimited</b> subdomains</li>
                      </ul>
                      <br/>
                      <div class="pd-20 text-center"> <a class="btn vd_btn vd_bg-yellow btn-lg" href="#">Get Started</a> </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="plan featured">
                    <div class="plan-header vd_bg-red vd_white text-center vd_info-parent">
                      <h3 class="pd-20 mgbt-xs-0">MODERATE</h3>
                      <div class="price vd_bg-black-30"> <span class="main"><span class="font-light">$</span><span class="font-bold">99</span> </span> <span class="suffix">99</span> <span class="text">/month</span> </div>
                      <i class="caret-pos fa fa-caret-up vd_white"></i> </div>
                    <div class="features vd_bg-white font-sm content-list">
                      <ul class="list-wrapper">
                        <li><i class="glyphicon glyphicon-hdd mgr-10"></i> <b>10GB</b> Disk Space</li>
                        <li><i class="fa fa-signal mgr-10"></i> <b>100GB</b> Monthly Bandwidth</li>
                        <li><i class="fa fa-envelope mgr-10"></i> <b>20</b> Email Accounts</li>
                        <li><i class="fa fa-flask mgr-10"></i> <b>Unlimited</b> subdomains</li>
                      </ul>
                      <br/>
                      <div class="pd-20 text-center"> <a class="btn vd_btn vd_bg-red btn-lg" href="#">Get Started</a> </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="plan">
                    <div class="plan-header vd_bg-blue vd_white text-center vd_info-parent">
                      <h3 class="pd-20 mgbt-xs-0">BUSINESS</h3>
                      <div class="price vd_bg-black-30"> <span class="main"><span class="font-light">$</span><span class="font-bold">199</span> </span> <span class="suffix">99</span> <span class="text">/month</span> </div>
                      <i class="caret-pos fa fa-caret-up vd_white"></i> </div>
                    <div class="features vd_bg-white font-sm content-list">
                      <ul class="list-wrapper">
                        <li><i class="glyphicon glyphicon-hdd mgr-10"></i> <b>10GB</b> Disk Space</li>
                        <li><i class="fa fa-signal mgr-10"></i> <b>100GB</b> Monthly Bandwidth</li>
                        <li><i class="fa fa-envelope mgr-10"></i> <b>20</b> Email Accounts</li>
                        <li><i class="fa fa-flask mgr-10"></i> <b>Unlimited</b> subdomains</li>
                      </ul>
                      <br/>
                      <div class="pd-20 text-center"> <a class="btn vd_btn vd_bg-blue btn-lg" href="#">Get Started</a> </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- vd_pricing-table --> 
              
            </div>
            <!-- row --> 
            <br/><br/><br/>
            <div class="row">
              <div class="vd_pricing-table">
                <div class="col-md-6 col-lg-3">
                  <div class="plan">
                    <div class="plan-header vd_bg-dark-blue vd_green text-center vd_info-parent">
                      <h3 class="pd-20 mgbt-xs-0">BASIC</h3>
                      <div class="price vd_bg-black-30"> <span class="main"><span class="font-light">$</span><span class="font-bold">10</span> </span> <span class="suffix">99</span> <span class="text vd_bdt-green">/month</span> </div>
                      <i class="caret-pos fa fa-caret-up vd_white"></i> </div>
                    <div class="features vd_bg-white font-sm content-list">
                      <ul class="list-wrapper">
                        <li><i class="glyphicon glyphicon-hdd mgr-10"></i> <b>10GB</b> Disk Space</li>
                        <li><i class="fa fa-signal mgr-10"></i> <b>100GB</b> Monthly Bandwidth</li>
                        <li><i class="fa fa-envelope mgr-10"></i> <b>20</b> Email Accounts</li>
                        <li><i class="fa fa-flask mgr-10"></i> <b>Unlimited</b> subdomains</li>
                      </ul>
                      <br/>
                      <div class="pd-20 text-center"> <a class="btn vd_btn vd_bg-green btn-lg" href="#">Get Started</a> </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3 mgbt-xs-20 mgbt-md-0">
                  <div class="plan">
                    <div class="plan-header vd_bg-dark-blue vd_yellow text-center vd_info-parent">
                      <h3 class="pd-20 mgbt-xs-0">PERSONAL</h3>
                      <div class="price vd_bg-black-30"> <span class="main"><span class="font-light">$</span><span class="font-bold">30</span> </span> <span class="suffix">99</span> <span class="text vd_bdt-yellow">/month</span> </div>
                      <i class="caret-pos fa fa-caret-up vd_white"></i> </div>
                    <div class="features vd_bg-white font-sm content-list">
                      <ul class="list-wrapper">
                        <li><i class="glyphicon glyphicon-hdd mgr-10"></i> <b>10GB</b> Disk Space</li>
                        <li><i class="fa fa-signal mgr-10"></i> <b>100GB</b> Monthly Bandwidth</li>
                        <li><i class="fa fa-envelope mgr-10"></i> <b>20</b> Email Accounts</li>
                        <li><i class="fa fa-flask mgr-10"></i> <b>Unlimited</b> subdomains</li>
                      </ul>
                      <br/>
                      <div class="pd-20 text-center"> <a class="btn vd_btn vd_bg-yellow btn-lg" href="#">Get Started</a> </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="plan featured">
                    <div class="plan-header vd_bg-red vd_white text-center vd_info-parent">
                      <h3 class="pd-20 mgbt-xs-0">MODERATE</h3>
                      <div class="price vd_bg-black-30"> <span class="main"><span class="font-light">$</span><span class="font-bold">99</span> </span> <span class="suffix">99</span> <span class="text">/month</span> </div>
                      <i class="caret-pos fa fa-caret-up vd_white"></i> </div>
                    <div class="features vd_bg-white font-sm content-list">
                      <ul class="list-wrapper">
                        <li><i class="glyphicon glyphicon-hdd mgr-10"></i> <b>10GB</b> Disk Space</li>
                        <li><i class="fa fa-signal mgr-10"></i> <b>100GB</b> Monthly Bandwidth</li>
                        <li><i class="fa fa-envelope mgr-10"></i> <b>20</b> Email Accounts</li>
                        <li><i class="fa fa-flask mgr-10"></i> <b>Unlimited</b> subdomains</li>
                      </ul>
                      <br/>
                      <div class="pd-20 text-center"> <a class="btn vd_btn vd_bg-red btn-lg" href="#">Get Started</a> </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="plan">
                    <div class="plan-header vd_bg-dark-blue vd_blue  text-center vd_info-parent">
                      <h3 class="pd-20 mgbt-xs-0">BUSINESS</h3>
                      <div class="price vd_bg-black-30"> <span class="main"><span class="font-light">$</span><span class="font-bold">199</span> </span> <span class="suffix">99</span> <span class="text vd_bdt-blue">/month</span> </div>
                      <i class="caret-pos fa fa-caret-up vd_white"></i> </div>
                    <div class="features vd_bg-white font-sm content-list">
                      <ul class="list-wrapper">
                        <li><i class="glyphicon glyphicon-hdd mgr-10"></i> <b>10GB</b> Disk Space</li>
                        <li><i class="fa fa-signal mgr-10"></i> <b>100GB</b> Monthly Bandwidth</li>
                        <li><i class="fa fa-envelope mgr-10"></i> <b>20</b> Email Accounts</li>
                        <li><i class="fa fa-flask mgr-10"></i> <b>Unlimited</b> subdomains</li>
                      </ul>
                      <br/>
                      <div class="pd-20 text-center"> <a class="btn vd_btn vd_bg-blue btn-lg" href="#">Get Started</a> </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- vd_pricing-table --> 
              
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

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>