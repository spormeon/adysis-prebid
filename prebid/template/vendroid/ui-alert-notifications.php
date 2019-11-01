<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'UI Elements Alerts and Notifications - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'UI Elements Alerts and Notifications - Responsive Admin HTML Template'; ?>
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
              <li class="active">Alert and Notifications</li>
            </ul>
            <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
          </div>
        </div>
        <div class="vd_title-section clearfix">
          <div class="vd_panel-header no-subtitle">
            <h1>Alert and Notifications</h1>
          </div>
        </div>
        <div class="vd_content-section clearfix">
          <div class="row">
            <div class="col-sm-12">
              <div class="panel widget panel-bd-left light-widget">
                <div class="panel-heading no-title">
                  <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                </div>
                <div class="panel-body">
                  <div class="row">
                    <div class="col-sm-6">
                      <h3> Alert <span class="font-semibold">with Links</span> </h3>
                      <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>
                      <div class="alert alert-success"> <span class="vd_alert-icon"><i class="fa fa-check-circle vd_green"></i></span><strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>. </div>
                      <div class="alert alert-info"> <span class="vd_alert-icon"><i class="fa fa-info-circle vd_blue"></i></span><strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important. </div>
                      <div class="alert alert-warning"> <span class="vd_alert-icon"><i class="fa fa-exclamation-triangle vd_yellow"></i></span><strong>Warning!</strong> Best check yo self, you're <a href="#" class="alert-link">not looking too good</a>. </div>
                      <div class="alert alert-danger"> <span class="vd_alert-icon"><i class="fa fa-exclamation-circle vd_red"></i></span><strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again. </div>
                    </div>
                    <div class="col-sm-6">
                      <h3> Dismissable <span class="font-semibold">Alerts</span> </h3>
                      <p>Build on any alert by adding an optional <code>.alert-dismissable</code> and close button.</p>
                      <div class="alert alert-success alert-dismissable">
                        <button aria-hidden="true" data-dismiss="alert" class="close" type="button"><i class="icon-cross"></i></button>
                        <i class="fa fa-check-circle append-icon"></i><strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>. </div>
                      <div class="alert alert-info alert-dismissable">
                        <button aria-hidden="true" data-dismiss="alert" class="close" type="button"><i class="icon-cross"></i></button>
                        <i class="fa fa-info-circle append-icon"></i><strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important. </div>
                      <h3> Alert <span class="font-semibold">Condensed</span> </h3>
                      <div class="alert alert-warning alert-dismissable alert-condensed">
                        <button aria-hidden="true" data-dismiss="alert" class="close" type="button"><i class="icon-cross"></i></button>
                        <i class="fa fa-exclamation-triangle append-icon"></i><strong>Warning!</strong> Best check yo self, you're <a href="#" class="alert-link">not looking too good</a>. </div>
                      <div class="alert alert-danger alert-dismissable alert-condensed">
                        <button aria-hidden="true" data-dismiss="alert" class="close" type="button"><i class="icon-cross"></i></button>
                        <i class="fa fa-exclamation-circle append-icon"></i><strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again. </div>
                    </div>
                    <!-- col-sm-6 --> 
                    
                  </div>
                  <!-- row --> 
                </div>
                <!-- panel-body --> 
              </div>
              <!-- Panel Widget -->
              
              <div class="panel widget panel-bd-left vd_bdl-yellow light-widget">
                <div class="panel-heading no-title">
                  <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?>  
                </div>
                <div class="panel-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h3> Notification <span class="font-semibold">Top Right with Title</span> </h3>
                      <p>Notification with title on top right position. <strong>Click to preview.</strong></p>
                      <p>
                        <button type="button" class="btn vd_btn vd_bg-grey mgr-10" id="top-right-notif"><i class="fa fa-exclamation-triangle append-icon"></i>Notify</button>
                        <button type="button" class="btn vd_btn vd_bg-green" id="top-right-success"><i class="fa fa-check-circle append-icon"></i>Success</button>
                      </p>
                      <p>
                        <button type="button" class="btn vd_btn vd_bg-blue mgr-10" id="top-right-info"><i class="fa fa-info-circle append-icon"></i>Info</button>
                        <button type="button" class="btn vd_btn vd_bg-red" id="top-right-error"><i class="fa fa-exclamation-circle append-icon"></i>Error</button>
                      </p>
                    </div>
                    <!-- col-sm-3 -->
                    <div class="col-sm-3">
                      <h3> Notification <span class="font-semibold">Top Left No Title</span> </h3>
                      <p>Notification without title on top left position. <strong>Click to preview.</strong></p>
                      <p>
                        <button type="button" class="btn vd_btn vd_bg-grey mgr-10" id="top-left-notif"><i class="fa fa-exclamation-triangle append-icon"></i>Notify</button>
                        <button type="button" class="btn vd_btn vd_bg-green" id="top-left-success"><i class="fa fa-check-circle append-icon"></i>Success</button>
                      </p>
                      <p>
                        <button type="button" class="btn vd_btn vd_bg-blue mgr-10" id="top-left-info"><i class="fa fa-info-circle append-icon"></i>Info</button>
                        <button type="button" class="btn vd_btn vd_bg-red" id="top-left-error"><i class="fa fa-exclamation-circle append-icon"></i>Error</button>
                      </p>
                    </div>
                    <!-- col-sm-3 -->
                    <div class="col-sm-3">
                      <h3> Notification <span class="font-semibold">Bottom Right with Title</span> </h3>
                      <p>Notification with title on bottom right position. <strong>Click to preview.</strong></p>
                      <p>
                        <button type="button" class="btn vd_btn vd_bg-grey mgr-10" id="bottom-right-notif"><i class="fa fa-exclamation-triangle append-icon"></i>Notify</button>
                        <button type="button" class="btn vd_btn vd_bg-green" id="bottom-right-success"><i class="fa fa-check-circle append-icon"></i>Success</button>
                      </p>
                      <p>
                        <button type="button" class="btn vd_btn vd_bg-blue mgr-10" id="bottom-right-info"><i class="fa fa-info-circle append-icon"></i>Info</button>
                        <button type="button" class="btn vd_btn vd_bg-red" id="bottom-right-error"><i class="fa fa-exclamation-circle append-icon"></i>Error</button>
                      </p>
                    </div>
                    <!-- col-sm-3 -->
                    <div class="col-sm-3">
                      <h3> Notification <span class="font-semibold">Bottom Left No Title</span> </h3>
                      <p>Notification without title on bottom left position. <strong>Click to preview.</strong></p>
                      <p>
                        <button type="button" class="btn vd_btn vd_bg-grey mgr-10" id="bottom-left-notif"><i class="fa fa-exclamation-triangle append-icon"></i>Notify</button>
                        <button type="button" class="btn vd_btn vd_bg-green" id="bottom-left-success"><i class="fa fa-check-circle append-icon"></i>Success</button>
                      </p>
                      <p>
                        <button type="button" class="btn vd_btn vd_bg-blue mgr-10" id="bottom-left-info"><i class="fa fa-info-circle append-icon"></i>Info</button>
                        <button type="button" class="btn vd_btn vd_bg-red" id="bottom-left-error"><i class="fa fa-exclamation-circle append-icon"></i>Error</button>
                      </p>
                    </div>
                    <!-- col-sm-3 --> 
                  </div>
                  <!-- row --> 
                </div>
                <!-- panel-body --> 
              </div>
              <!-- Panel Widget --> 
              
            </div>
          </div>
          <!-- row -->
          
          <div class="row">
            <div class="col-sm-4">
              <div class="panel widget light-widget panel-bd-left vd_bdl-red">
                <div class="panel-heading no-title">
                  <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                </div>
                <div class="panel-body">
                  <h2 class="mgtp--5"> Modals </h2>
                  <p>Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults. Toggle a modal via JavaScript by clicking the button below. It will slide down and fade in from the top of the page.</p>
                  <!-- Button trigger modal -->
                  <p>
                    <button class="btn btn-primary " data-toggle="modal" data-target="#myModal"> Launch demo modal </button>
                    <br/>
                    <br/>
                  </p>
                  <div class="well well-sm">
                    <h5 class="mgtp-5 font-semibold">Overlapping modals not supported</h5>
                    <p>Be sure not to open a modal while another is still visible. Showing more than one modal at a time requires custom code.</p>
                  </div>
                  <!-- Modal -->
                  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header vd_bg-blue vd_white">
                          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
                          <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body"> 
                        	<form class="form-horizontal">
                            <div class="form-group">
                              <label class="col-sm-4 control-label">First Name</label>
                              <div class="col-sm-7 controls">
                                <input class="input-border-btm" type="text">
                              </div>

                            </div>
                            <div class="form-group">
                              <label class="col-sm-4 control-label">User Name</label>
                              <div class="col-sm-7 controls">
                                <input class="input-border-btm" type="text">
                              </div>

                            </div>
                            <div class="form-group">
                              <label class="col-sm-4 control-label">Password</label>
                              <div class="col-sm-7 controls">
                                <input class="input-border-btm" type="password">
                              </div>

                            </div>
                            
                            
                          </form>
                        
                        </div>
                        <div class="modal-footer background-login">
                          <button type="button" class="btn vd_btn vd_bg-grey" data-dismiss="modal">Close</button>
                          <button type="button" class="btn vd_btn vd_bg-green">Save changes</button>
                        </div>
                      </div>
                      <!-- /.modal-content --> 
                    </div>
                    <!-- /.modal-dialog --> 
                  </div>
                  <!-- /.modal --> 
                  
                </div>
              </div>
              <!-- panel --> 
            </div>
            <div class="col-sm-4">
              <div class="panel widget light-widget panel-bd-left vd_bdl-red">
                <div class="panel-heading no-title">
                  <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                </div>
                <div class="panel-body">
                  <h2 class="mgtp--5"> Popover </h2>
                  <p> Add small overlays of content, like those on the iPad, to any element for housing secondary information. Four options are available: top, right, bottom, and left aligned. Toggle a popover via JavaScript by clicking the button below.<br/>
                    <br/>
                  </p>
                  <div class="bs-example-tooltips">
                    <div class="mgbt-xs-10">
                      <button data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-placement="left" data-toggle="popover" data-container="body" class="btn vd_btn vd_bg-green" type="button" data-original-title="" title=""> Popover on left </button>
                      <button data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-placement="top" data-toggle="popover" data-container="body" class="btn vd_btn vd_bg-blue" type="button" data-original-title="" title=""> Popover on top </button>
                    </div>
                    <div class="mgbt-xs-20">
                      <button data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-placement="bottom" data-toggle="popover" data-container="body" class="btn vd_btn vd_bg-yellow" type="button" data-original-title="" title=""> Popover on bottom </button>
                      <button data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-placement="right" data-toggle="popover" data-container="body" class="btn vd_btn vd_bg-red" type="button" data-original-title="" title=""> Popover on right </button>
                    </div>
                    <div class="mgbt-xs-20 mgtp-5"> <a role="button" data-content="And here's some amazing content. It's very engaging. right?" title="" data-toggle="popover" class="btn vd_btn vd_bg-green btn-lg " data-original-title="A Title">With Title</a> </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="panel widget light-widget panel-bd-left vd_bdl-red">
                <div class="panel-heading no-title">
                  <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                </div>
                <!-- panel-heading -->
                
                <div class="panel-body">
                  <h2 class="mgtp--5"> Tooltip </h2>
                  <p> Tooltip make it easier to help user obtain more information by hovering on the selected items. Hover on the links in paragraph below to see tooltip: </p>
                  <p class="font-semibold">Tight pants next level keffiyeh <a title="" data-toggle="tooltip" href="#" data-original-title="Default tooltip">you probably</a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a title="Another tooltip" data-toggle="tooltip" href="#">have a</a> terry richardson vinyl chambray.<br/>
                    <br/>
                  </p>
                  <div class="bs-example-tooltips">
                    <div class="mgbt-xs-10">
                      <button title="" data-placement="left" data-toggle="tooltip" class="btn vd_btn vd_bg-green" type="button" data-original-title="Tooltip on left">Tooltip on left</button>
                      <button title="" data-placement="top" data-toggle="tooltip" class="btn vd_btn vd_bg-blue" type="button" data-original-title="Tooltip on top">Tooltip on top</button>
                    </div>
                    <div class="mgbt-xs-20">
                      <button title="Tooltip on bottom" data-placement="bottom" data-toggle="tooltip" class="btn  vd_btn vd_bg-yellow" type="button">Tooltip on bottom</button>
                      <button title="Tooltip on right" data-placement="right" data-toggle="tooltip" class="btn  vd_btn vd_bg-red" type="button">Tooltip on right</button>
                    </div>
                  </div>
                </div>
                <!-- panel-body --> 
                
              </div>
              <!-- panel --> 
              
            </div>
            <!-- col-sm-4 --> 
          </div>
          <!-- row -->
          
          <div class="row">
            <div class="col-sm-8">
              <div class="panel widget light-widget panel-bd-left vd_bdl-blue">
                <div class="panel-heading no-title">
                  <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                </div>
                <div class="panel-body">
                  <h2 class="mgtp--5"> Progress Bars </h2>
                  <p> Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.<br/>
                    <br/>
                  </p>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="progress  progress-xs">
                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40% Complete (success)</span> </div>
                      </div>
                      <div class="progress  progress-sm">
                        <div class="progress-bar progress-bar-info " role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"> <span class="sr-only">20% Complete</span> </div>
                      </div>
                      <div class="progress">
                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span class="sr-only">60% Complete (warning)</span> </div>
                      </div>
                      <div class="progress  progress-lg">
                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span class="sr-only">80% Complete</span> </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="progress">
                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span>40%</span> </div>
                      </div>
                      <div class="progress progress-striped">
                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"> <span class="sr-only">20% Complete</span> </div>
                      </div>
                      <div class="progress progress-striped active">
                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span class="sr-only">60% Complete (warning)</span> </div>
                      </div>
                      <div class="progress">
                        <div class="progress-bar progress-bar-success" style="width: 35%"> <span class="sr-only">35% Complete (success)</span> </div>
                        <div class="progress-bar progress-bar-warning" style="width: 20%"> <span class="sr-only">20% Complete (warning)</span> </div>
                        <div class="progress-bar progress-bar-danger" style="width: 10%"> <span class="sr-only">10% Complete (danger)</span> </div>
                      </div>
                    </div>
                    <!-- col-sm-6--> 
                    
                  </div>
                  <!-- row --> 
                </div>
                <!-- panel-body --> 
                
              </div>
              <!-- panel --> 
              
            </div>
            <!-- col-sm-8 --> 
            
            <div class="col-sm-4">
              <div class="panel widget light-widget panel-bd-left vd_bdl-blue">
                <div class="panel-heading no-title">
                  <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                </div>
                <!-- panel-heading -->
                
                <div class="panel-body">
                  <h2 class="mgtp--5"> Labels </h2>
                  <p> <span class="label label-default">Default</span>
                        <span class="label label-primary">Primary</span>
                        <span class="label label-success">Success</span>
                        <span class="label label-info">Info</span>
                        <span class="label label-warning">Warning</span>
                        <span class="label label-danger">Danger</span>
                  </p>
                  <p> <span class="label vd_bg-grey">Grey</span>
                        <span class="label vd_bg-black">Black</span>
                        <span class="label vd_bg-green">Green</span>
                        <span class="label vd_bg-blue">Blue</span>
                        <span class="label vd_bg-yellow">Yellow</span>
                        <span class="label vd_bg-red">Red</span>
                  </p>                  
                  <h2 class="mgbt-xs-10 mgtp-20"> Badges </h2>
                  <p>
					<a class="mgr-10" href="#">Inbox <span class="badge">42</span></a>
					<a class="mgr-10" href="#">Inbox <span class="badge vd_bg-black">42</span></a>
					<a class="mgr-10" href="#">Inbox <span class="badge vd_bg-green">42</span></a>                    
                  </p>  
                  <p class="mgbt-xs-20">
					<a class="mgr-10" href="#">Inbox <span class="badge vd_bg-red">42</span></a>
					<a class="mgr-10" href="#">Inbox <span class="badge vd_bg-blue">42</span></a>
					<a class="mgr-10" href="#">Inbox <span class="badge vd_bg-yellow">42</span></a>                    
                  </p>
                    <ul class="nav nav-pills">
                            <li class="active"><a href="#">Home <span class="badge">42</span></a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Messages <span class="badge">3</span></a></li>
                          </ul>                                                     
                </div>
                <!-- panel-body --> 
                
              </div>
              <!-- panel --> 
              
            </div>
            <!-- col-sm-4 -->             
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
<?php include('templates/scripts/ui-alert-notifications.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>
