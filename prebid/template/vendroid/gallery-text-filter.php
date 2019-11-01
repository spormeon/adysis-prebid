<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Gallery Pages HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Gallery Pages - Responsive Admin HTML Template'; ?>
<?php $page = 'pages';   // To set active on the same id of primary menu ?>
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
                <li><a href="gallery-page.php">Gallery</a> </li>
                <li class="active">Gallery Page</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Gallery Text Filter</h1>
              <small class="subtitle">Use text field on the right to use filter</small> 


              <div class="vd_panel-menu" style="top:5px;"> 
              
              <span class="no-pd no-bg"> <label class="control-label mgr-10" for="filter-text">Filter:</label> <input type="text" placeholder="write some text" id="filter-text" name="filter-text" class="width-80 input-lg">
              </span> 
              <!-- menu --> 
            </div>

              
            </div>

              
       
          </div>
          <div class="vd_content-section clearfix">

            <div class="isotope js-isotope vd_gallery text-center">
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-adjust"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Adjust</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-archive"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Archive</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-bar-chart-o"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Chart</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-bug"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Bug Reports</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-calendar"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Calendar</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-camera"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Camera</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa  fa-cloud"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Cloud App</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-cog"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Settings</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-credit-card"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Payments</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-dashboard"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Dashboard</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>              
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-comments"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Comments</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-desktop"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Desktop</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa  fa-envelope"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Email Setting</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-flask"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Color</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-globe"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Live Preview</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa  fa-map-marker"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Map</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa  fa-power-off"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Shut Down</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>
              <div class="gallery-item">
                <a href="#"> 
                	<div class="btn vd_round-btn vd_bg-black-20 vd_white btn-lg mgtp-15"><i class="fa fa-tags"></i></div>
                    <h3 class="filter-name mgtp-10 mgbt-xs-5 vd_grey font-semibold">Tags</h3>
                    <p class="vd_grey pdlr-10" >some tiny winy description here</p>
                    <div class="bg-cover light"></div>                    
                </a>
              </div>              

            </div>
            <!-- isotope -->
            <div class="clearfix"></div>
            <br/>
            <br/>
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
<?php include('templates/scripts/gallery-text-filter.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>