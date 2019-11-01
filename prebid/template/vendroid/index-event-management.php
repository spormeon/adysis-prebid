<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Event Management Dashboard - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, '; ?>
<?php $description = 'Responsive Admin Template for event management dashboard'; ?>
<?php $page = 'dashboard';   // To set active on the same id of primary menu ?>
<?php  
 	  // Additional Specific CSS 
	  $specific_css[0] = 'plugins/introjs/css/introjs.min.css';	
	  
	  $page_css = '  
	  				.vd_ticket .vd_ticket-data{
						margin-bottom:-25px;
					}
	  				.vd_ticket-data .item-left{
		  				border-top:1px solid #EAEAEA; margin-left:-25px; margin-right:-25px; padding-left:25px; padding-right:25px; border-right:1px solid #EAEAEA;
	  					}
					.vd_ticket-data .item-right{
		  				border-top:1px solid #EAEAEA; margin-left:-25px; margin-right:-25px; padding-left:25px; padding-right:0;
	  				}	  
					.vd_ticket-info .badge{
						height:15px;
					}
					.vd_ticket-data #map1{
						 margin-left:-5px;
					}
	  
	  				';
	  $page_responsive_css = '
	  
	  				@media (max-width: 767px) {
						.vd_ticket .vd_ticket-data{
							margin-bottom:0;
						}
						.vd_ticket-data #map1{
							margin-left:0;
						}
						.vd_ticket-data .item-right{
							padding-left:0;
						}
						
					}
	  
	  ';
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
                <li class="active">Event Management Dashboard</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Event Management Dashboard</h1>
              <small class="subtitle">Event Management Dashboard Example</small>
              <?php include('templates/widgets/panel-menu-title-section-index.tpl.php'); ?>
            </div>
            <!-- vd_panel-header --> 
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-lg-4 col-md-12 mgbt-xs-15  mgbt-md-0">
                <div class="panel widget light-widget">
                  <div class="panel-heading"> </div>
                  <div class="panel-body">
                    <h3 class="mgbt-xs-20">Event Detail</h3>
                    <div class="row mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Event Name:</strong> </div>
                      <div class="col-xs-8"> Michael Baltan Concert </div>
                    </div>
                    <div class="row mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Status:</strong> </div>
                      <div class="col-xs-8"> <span class="badge vd_bg-green">Ongoing</span> </div>
                    </div>
                    <div class="row  mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Event Date:</strong> </div>
                      <div class="col-xs-8"> 08 July 2014 - 30 January 2015 </div>
                    </div>
                    <div class="row  mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Show Date:</strong> </div>
                      <div class="col-xs-8"> 25 January 2015 </div>
                    </div>
                    <div class="row  mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Venue:</strong> </div>
                      <div class="col-xs-8"> Southpark Station, Hamelton, CA 20145 </div>
                    </div>
                    <div class="row  mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Total Vendor:</strong> </div>
                      <div class="col-xs-8"> <a href="#">10</a></div>
                    </div>
                    <div class="row  mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Total Tickets:</strong> </div>
                      <div class="col-xs-8"> <a href="#">1000</a> </div>
                    </div>
                    <div class="row  mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Total Crew:</strong> </div>
                      <div class="col-xs-8"> <a href="#">200</a> </div>
                    </div>
                    <hr/>
                    <div class="row  mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Total Revenue:</strong> </div>
                      <div class="col-xs-8">$10.405,00 </div>
                    </div>
                    <div class="row  mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Total Exhibitor:</strong> </div>
                      <div class="col-xs-8"> <a href="#">5</a></div>
                    </div>
                    <div class="row  mgbt-xs-10">
                      <div class="col-xs-4 text-right"> <strong>Total Invitation:</strong> </div>
                      <div class="col-xs-8"> <a href="#">200</a> </div>
                    </div>
                  </div>
                </div>
                <!-- panel --> 
              </div>
              <div class="col-lg-8 col-md-12">
                <div class="panel widget  light-widget vd_ticket">
                  <div class="panel-heading"> </div>
                  <div class="panel-body" style="padding-bottom:0;">
                    <h5 class="vd_grey"><span class="font-bold vd_black">5,500 TICKET SOLD / 10,000 </span></h5>
                    <div class="row mgbt-xs-0">
                      <div class="col-md-12">
                        <div class="progress progress-xs progress-striped">
                          <div style="width: 45%" class="progress-bar  progress-bar-success"> <span class="sr-only">45% Sold</span> </div>
                          <div style="width: 10%" class="progress-bar  progress-bar-warning"> <span class="sr-only">10% Free</span> </div>
                        </div>
                      </div>
                    </div>
                    <div class="row vd_ticket-info">
                      <div class="col-xs-4"> <span class="badge progress-bar-success no-br mgr-10">&nbsp;</span> <span class="vd_grey">Sold (4500)</span> </div>
                      <div class="col-xs-4"> <span class="badge progress-bar-warning no-br mgr-10">&nbsp;</span> <span class="vd_grey">Free (1000) </span> </div>
                    </div>
                    <div class="row vd_ticket-data">
                      <div class="col-sm-6">
                        <div class="item-left">
                          <h5 class="mgbt-xs-20 mgtp-20"><span class="menu-icon append-icon"> <i class="icon-pie"></i> </span> <strong>TICKET SOLD BY METHOD</strong></h5>
                          <div id="pie-chart" class="pie-chart" style="height:388px;"></div>
                          <div class="vd_info br" >
                            <h5 class="text-right font-semibold"><strong>TOTAL TRANSACTION</strong></h5>
                            <h3 class="text-right  vd_red"><span class="append-icon"><i class="fa fa-usd"></i></span>546,456</h3>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="item-right">
                          <h5 class="mgbt-xs-20 mgtp-20 mgl-20"><span class="menu-icon append-icon"> <i class="fa fa-globe"></i> </span> <strong>TICKET SOLD BY MAP</strong></h5>
                          <div id="map1" style="height: 388px;"></div>
                          <div class="vd_info br" >
                            <h5 class="text-right font-semibold"><strong>TOTAL SOLD</strong></h5>
                            <h3 class="text-right  vd_red"><span class="append-icon"><i class="fa fa-map-marker"></i></span>4,500</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- panel --> 
                
              </div>
            </div>
            <!-- row -->
            
            <div class="row">
              <div class="col-md-4  mgbt-xs-15 mgbt-md-0">
                <div class="panel vd_interactive-widget light-widget widget  panel-bd-top vd_bdt-red">
                  <div class="panel-body-list">
                    <div class="pd-20">
                      <h5 class="mgbt-xs-20 mgtp-20"><span class="menu-icon append-icon"><i class="icon-graph"></i></span> <strong>Revenue Vs Cost Graph</strong> (November) </h5>
                      <div id="revenue-line-chart" style="height:255px; "></div>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <div class="col-md-4  mgbt-xs-15  mgbt-md-0">
                <div class="mgbt-xs-20">
                  <div class="panel widget panel-bd-top vd_bdt-yellow  light-widget">
                    <div class="panel-heading"> </div>
                    <div class="panel-body">
                      <h3>Contact Person</h3>
                      <div class="content-list content-image">
                      <div data-rel="scroll" data-scrollheight="259">
                        <ul class="list-wrapper pd-lr-10">
                          <li>
                            <div class="menu-icon"><img src="img/avatar/avatar-6.jpg" alt="example image"></div>
                            <div class="menu-text"> <strong>Operation Manager:</strong> Mr. Lui
                              <div class="menu-info"> <span class="menu-date">+1 1800-1234</span> <span class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Call" class="menu-action-icon"> <i class="fa fa-phone"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Email" class="menu-action-icon"> <i class="fa fa-envelope"></i> </span></span> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img src="img/avatar/avatar.jpg" alt="example image"></div>
                            <div class="menu-text"> <strong>Finance Manager:</strong> Mrs. Sandra Bullock
                              <div class="menu-info"> <span class="menu-date">+1 1800-2452</span> <span class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Call" class="menu-action-icon"> <i class="fa fa-phone"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Email" class="menu-action-icon"> <i class="fa fa-envelope"></i> </span> </span> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img src="img/avatar/avatar-3.jpg" alt="example image"></div>
                            <div class="menu-text"><strong>Artist Manager:</strong> Mrs. Gymnasium
                              <div class="menu-info"> <span class="menu-date">+1 1800-4563</span> <span class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Call" class="menu-action-icon"> <i class="fa fa-phone"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Email" class="menu-action-icon"> <i class="fa fa-envelope"></i> </span> </span> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img src="img/avatar/avatar-7.jpg" alt="example image"></div>
                            <div class="menu-text"> <strong>Catering:</strong> Mrs. Sophie
                              <div class="menu-info"> <span class="menu-date">+1 1800-1234</span> <span class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Call" class="menu-action-icon"> <i class="fa fa-phone"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Email" class="menu-action-icon"> <i class="fa fa-envelope"></i> </span></span>  </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img src="img/avatar/avatar-8.jpg" alt="example image"></div>
                            <div class="menu-text"> <strong>Cleaning Service:</strong> Mr. Nate
                              <div class="menu-info"> <span class="menu-date">+1 1800-1234</span> <span class="menu-action"> <span data-placement="top" data-toggle="tooltip" data-original-title="Call" class="menu-action-icon"> <i class="fa fa-phone"></i> </span> <span data-placement="top" data-toggle="tooltip" data-original-title="Email" class="menu-action-icon"> <i class="fa fa-envelope"></i> </span></span> </div>
                            </div>
                          </li>                          
                        </ul>
                       </div>
                      </div>
                      <!-- content-list --> 
                    </div>
                  </div>
                  <!-- panel --> 
                  
                </div>
              </div>
              <div class="col-md-4">
                <div class="panel widget panel-bd-top vd_todo-widget light-widget">
                  <div class="panel-heading"> </div>
                  <div class="panel-body">
                    <h3 class="mgbt-xs-20"> <span class="append-icon"> <i class="fa fa-check-circle-o vd_green"></i> </span> Todo List</h3>
                    <div class="input-group mgbt-xs-15">
                      <input type="text">
                      <div class="input-group-btn">
                        <button type="button" class="btn dropdown-toggle vd_bg-green vd_white" data-toggle="dropdown"><i class="fa fa-plus fa-fw"></i></button>
                      </div>
                      <!-- /btn-group --> 
                    </div>
                    <div class="controls">
                      <div class="vd_checkbox checkbox-done">
                        <input type="checkbox" value="1" id="checkbox-1">
                        <label for="checkbox-1"> Print Brochure </label>
                      </div>
                      <div class="vd_checkbox  checkbox-done">
                        <input type="checkbox" value="1" id="checkbox-2">
                        <label for="checkbox-2"> Meeting with Vendor</label>
                      </div>
                      <div class="vd_checkbox  checkbox-done">
                        <input type="checkbox" value="1" id="checkbox-3">
                        <label for="checkbox-3"> Call directors</label>
                      </div>
                      <div class="vd_checkbox  checkbox-done">
                        <input type="checkbox" value="1" id="checkbox-4">
                        <label for="checkbox-4"> Performance Rehearsal</label>
                      </div>
                      <div class="row mgtp-15 mgbt-xs-0">
                        <div class="col-xs-6"> <a class="btn vd_btn vd_bg-green" href="#" role="button">Save</a> </div>
                        <div class="col-xs-6 text-right"> <a class="btn vd_btn vd_bg-grey" href="#" role="button"><i class="icon-trash"></i></a> </div>
                      </div>
                    </div>
                  </div>
                </div>
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
</div>
<?php require_once('templates/footers/'.$footer.'.tpl.php'); ?>

<!-- Specific Page Scripts Put Here -->
<?php include('templates/scripts/index-event-management.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>