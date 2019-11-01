<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'User Profile Pages HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'User Profile Pages - Responsive Admin HTML Template'; ?>
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
                <li><a href="pages-custom-product.php">Pages</a> </li>
                <li class="active">User Profile Pages</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header no-subtitle">
              <h1>User Profile Page</h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-3">
                <div class="panel widget light-widget panel-bd-top">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <div class="text-center vd_info-parent"> <img alt="example image" src="img/avatar/big.jpg"> </div>
                    <div class="row">
                      <div class="col-xs-12"> <a class="btn vd_btn vd_bg-green btn-xs btn-block no-br"><i class="fa fa-check-circle append-icon" ></i>Friends</a> </div>
                      <div class="col-xs-12"> <a class="btn vd_btn vd_bg-grey btn-xs btn-block no-br"><i class="fa fa-envelope append-icon"></i>Send Message</a> </div>
                    </div>
                    <h2 class="font-semibold mgbt-xs-5">Mariah Caraiban</h2>
                    <h4>Owner at Our Company, Inc.</h4>
                    <p>Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <div class="mgtp-20">
                      <table class="table table-striped table-hover">
                        <tbody>
                          <tr>
                            <td style="width:60%;">Status</td>
                            <td><span class="label label-success">Active</span></td>
                          </tr>
                          <tr>
                            <td>User Rating</td>
                            <td><i class="fa fa-star vd_yellow fa-fw"></i><i class="fa fa-star vd_yellow fa-fw"></i><i class="fa fa-star vd_yellow fa-fw"></i><i class="fa fa-star vd_yellow fa-fw"></i><i class="fa fa-star vd_yellow fa-fw"></i></td>
                          </tr>
                          <tr>
                            <td>Member Since</td>
                            <td> Jan 07, 2014 </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- panel widget -->
                
                <div class="panel widget light-widget">
                  <div class="panel-body-list">
                    <h3 class="pd-20 mgbt-xs-0"><i class="fa fa-users mgr-10"></i>Friends</h3>
                    <div class="content-grid column-xs-2 column-sm-3 height-xs-auto mgbt-xs-20">
                      <div>
                        <ul class="list-wrapper">
                          <li> <a href="#"> <span class="menu-icon"><img alt="example image" src="img/avatar/avatar.jpg"></span> </a> </li>
                          <li class="warning"> <a href="#"> <span class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></span> </a> </li>
                          <li> <a href="#"> <span class="menu-icon"><img alt="example image" src="img/avatar/avatar-3.jpg"></span> </a> </li>
                          <li> <a href="#"> <span class="menu-icon"><img alt="example image" src="img/avatar/avatar-4.jpg"></span> </a> </li>
                          <li> <a href="#"> <span class="menu-icon"><img alt="example image" src="img/avatar/avatar-5.jpg"></span> </a> </li>
                          <li> <a href="#"> <span class="menu-icon"><img alt="example image" src="img/avatar/avatar-6.jpg"></span> </a> </li>
                          <li> <a href="#"> <span class="menu-icon"><img alt="example image" src="img/avatar/avatar-7.jpg"></span> </a> </li>
                          <li> <a href="#"> <span class="menu-icon"><img alt="example image" src="img/avatar/avatar-8.jpg"></span> </a> </li>
                        </ul>
                      </div>
                    </div>
                    <div class="closing text-center" style=""> <a href="#">See All Friends<i class="fa fa-angle-double-right prepend-icon"></i></a> </div>
                  </div>
                </div>
                <!-- panel widget --> 
              </div>
              <div class="col-sm-9">
                <?php  include('templates/widgets/widget-profile-tabs.tpl.php'); ?>
              </div>
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
<?php include('templates/scripts/pages-user-profile.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>