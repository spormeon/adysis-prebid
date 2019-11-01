<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Table Variations HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Table Variations - Responsive Admin HTML Template'; ?>
<?php $page = 'tables';   // To set active on the same id of primary menu ?>
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
                <li><a href="listtables-tables-variation.php">List &amp; Tables</a> </li>
                <li class="active">Small List</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Small List</h1>
              <small class="subtitle">List with small image on left</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-xs-12">
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h2 class="mgtp--5"> <span class="font-semibold">Content List</span> Class </h2>
                    <p> Using our "content-list" class you can easily create a list without any responsive effect, also great combined with mega menu.</p>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-xs-12 --> 
            </div>
            <!-- row -->
            <div class="row">
              <div class="col-md-3">
                <div class="panel widget light-widget panel-bd-top">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> Example Block Click</h3>
                    <div class="content-list">
                      <ul  class="list-wrapper">
                        <li> <a href="#">
                          <div class="menu-icon vd_yellow"><i class="fa fa-suitcase"></i></div>
                          <div class="menu-text"> Someone has give you a surprise
                            <div class="menu-info"><span class="menu-date">12 Minutes Ago</span></div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon vd_blue"><i class=" fa fa-user"></i></div>
                          <div class="menu-text"> Change your user profile details
                            <div class="menu-info"><span class="menu-date">1 Hour 20 Minutes Ago</span></div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon vd_red"><i class=" fa fa-cogs"></i></div>
                          <div class="menu-text"> Your setting is updated
                            <div class="menu-info"><span class="menu-date">12 Days Ago</span></div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon vd_green"><i class=" fa fa-book"></i></div>
                          <div class="menu-text"> Added new article
                            <div class="menu-info"><span class="menu-date">19 Days Ago</span></div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon vd_green"><img alt="example image" src="img/avatar/avatar.jpg"></div>
                          <div class="menu-text"> Change Profile Pic
                            <div class="menu-info"><span class="menu-date">20 Days Ago</span></div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon vd_red"><i class=" fa fa-cogs"></i></div>
                          <div class="menu-text"> Your setting is updated
                            <div class="menu-info"><span class="menu-date">12 Days Ago</span></div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon vd_green"><i class=" fa fa-book"></i></div>
                          <div class="menu-text"> Added new article
                            <div class="menu-info"><span class="menu-date">19 Days Ago</span></div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon vd_green"><img alt="example image" src="img/avatar/avatar.jpg"></div>
                          <div class="menu-text"> Change Profile Pic
                            <div class="menu-info"><span class="menu-date">20 Days Ago</span></div>
                          </div>
                          </a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-md-4 -->
              <div class="col-md-3">
                <div class="panel widget light-widget panel-bd-top vd_bdt-yellow">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> With Menu Action</h3>
                    <div class="content-list">
                      <ul  class="list-wrapper wrap-25">
                        <li>
                          <div class="menu-icon vd_yellow"><i class="fa fa-suitcase"></i></div>
                          <div class="menu-text"> Someone has give you a surprise
                            <div class="menu-info"><span class="menu-date">12 Minutes Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_blue"><i class=" fa fa-user"></i></div>
                          <div class="menu-text"> Change your user profile details
                            <div class="menu-info"><span class="menu-date">1 Hour 20 Minutes Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_red"><i class=" fa fa-cogs"></i></div>
                          <div class="menu-text"> Your setting is updated
                            <div class="menu-info"><span class="menu-date">12 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_green"><i class=" fa fa-book"></i></div>
                          <div class="menu-text"> Added new article
                            <div class="menu-info"><span class="menu-date">19 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_green"><img alt="example image" src="img/avatar/avatar.jpg"></div>
                          <div class="menu-text"> Change Profile Pic
                            <div class="menu-info"><span class="menu-date">20 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_red"><i class=" fa fa-cogs"></i></div>
                          <div class="menu-text"> Your setting is updated
                            <div class="menu-info"><span class="menu-date">12 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_green"><i class=" fa fa-book"></i></div>
                          <div class="menu-text"> Added new article
                            <div class="menu-info"><span class="menu-date">19 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_green"><img alt="example image" src="img/avatar/avatar.jpg"></div>
                          <div class="menu-text"> Change Profile Pic
                            <div class="menu-info"><span class="menu-date">20 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-md-4 -->
              
              <div class="col-md-3">
                <div class="panel widget light-widget panel-bd-top vd_bdt-red">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> Align Right Wrap Border</h3>
                    <div class="content-list">
                      <ul  class="list-wrapper wrap-25">
                        <li class="align-right">
                          <div class="menu-icon vd_yellow"><i class="fa fa-suitcase"></i></div>
                          <div class="menu-text"> Someone has give you a surprise
                            <div class="menu-info"><span class="menu-date">12 Minutes Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li class="align-right">
                          <div class="menu-icon vd_blue"><i class=" fa fa-user"></i></div>
                          <div class="menu-text"> Change your user profile details
                            <div class="menu-info"><span class="menu-date">1 Hour 20 Minutes Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li class="align-right">
                          <div class="menu-icon vd_red"><i class=" fa fa-cogs"></i></div>
                          <div class="menu-text"> Your setting is updated
                            <div class="menu-info"><span class="menu-date">12 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li class="align-right">
                          <div class="menu-icon vd_green"><i class=" fa fa-book"></i></div>
                          <div class="menu-text"> Added new article
                            <div class="menu-info"><span class="menu-date">19 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li class="align-right">
                          <div class="menu-icon vd_green"><img alt="example image" src="img/avatar/avatar.jpg"></div>
                          <div class="menu-text"> Change Profile Pic
                            <div class="menu-info"><span class="menu-date">20 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li class="align-right">
                          <div class="menu-icon vd_red"><i class=" fa fa-cogs"></i></div>
                          <div class="menu-text"> Your setting is updated
                            <div class="menu-info"><span class="menu-date">12 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li class="align-right">
                          <div class="menu-icon vd_green"><i class=" fa fa-book"></i></div>
                          <div class="menu-text"> Added new article
                            <div class="menu-info"><span class="menu-date">19 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                        <li class="align-right">
                          <div class="menu-icon vd_green"><img alt="example image" src="img/avatar/avatar.jpg"></div>
                          <div class="menu-text"> Change Profile Pic
                            <div class="menu-info"><span class="menu-date">20 Days Ago</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-eye"></i> </span> </span></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-md-4 -->
              
              <div class="col-md-3">
                <div class="panel widget light-widget panel-bd-top vd_bdt-blue">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> No Border</h3>
                    <div class="content-list content-menu">
                      <ul  class="list-wrapper wrap-25">
                        <li> <a href="#">
                          <div class="menu-icon vd_yellow"><i class="fa fa-suitcase"></i></div>
                          <div class="menu-text"> Someone has give you a surprise
                            <div class="menu-info"><span class="menu-date">12 Minutes Ago</span></div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon vd_blue"><i class=" fa fa-user"></i></div>
                          <div class="menu-text"> Change your user profile details
                            <div class="menu-info"><span class="menu-date">1 Hour 20 Minutes Ago</span></div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon vd_red"><i class=" fa fa-cogs"></i></div>
                          <div class="menu-text"> Your setting is updated
                            <div class="menu-info"><span class="menu-date">12 Days Ago</span></div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon vd_green"><i class=" fa fa-book"></i></div>
                          <div class="menu-text"> Added new article
                            <div class="menu-info"><span class="menu-date">19 Days Ago</span></div>
                          </div>
                          </a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget -->
                
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5">Or.. Just Simple Menu</h3>
                    <div class="content-list content-menu">
                      <ul class="list-wrapper">
                        <li> <a href="#"> <div class="menu-icon vd_grey"><i class=" fa fa-user"></i></div> <div class="menu-text">Edit Profile</div> </a> </li>
                        <li> <a href="#"> <div class="menu-icon vd_grey"><i class=" fa fa-envelope"></i></div> <div class="menu-text">Messages</div><div class="menu-badge"><div class="badge vd_bg-red">10</div></div> </a> </li>
                        <li class="line"></li>
                        <li> <a href="#"> <div class="menu-icon vd_grey"><i class=" fa fa-lock"></i></div> <div class="menu-text">Privacy</div> </a> </li>
                        <li> <a href="#"> <div class="menu-icon vd_grey"><i class=" fa fa-cogs"></i></div> <div class="menu-text">Settings</div> </a> </li>
                        <li> <a href="#"> <div class="menu-icon vd_grey"><i class="  fa fa-key"></i></div> <div class="menu-text">Lock</div> </a> </li>
                        <li class="line"></li>
                        <li> <a href="#"> <div class="menu-icon vd_grey"><i class=" glyphicon glyphicon-bullhorn"></i></div> <div class="menu-text">Report a Problem</div> </a> </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-md-4 --> 
            </div>
            <!--row --> 
            
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
