<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Calendar Pages HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Calendar Pages - Responsive Admin HTML Template'; ?>
<?php $page = 'pages';   // To set active on the same id of primary menu ?>
<?php
	// Additional Specific CSS 
	$specific_css[0] = 'plugins/fullcalendar/fullcalendar.css';
	$specific_css[1] = 'plugins/fullcalendar/fullcalendar.print.css';
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
                <li><a href="pages-custom-product.php">Pages</a> </li>
                <li class="active">Calendar</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header no-menu">
              <h1>Calendar</h1>
              <small class="subtitle">Calendar page with drag and drop events. See <a href="http://arshaw.com/fullcalendar/">fullcalendar</a> for detail</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-9">
                <div class="panel widget light-widget panel-bd-top">
                  <div class="panel-body">
                    <div id="fullcalendar" class="mgtp-10"> </div>
                  </div>
                </div>
              </div>
              <!-- col-sm-9-->
              <div class="col-sm-3">
                <div class="panel widget light-widget panel-bd-top">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h2 class="mgtp--5 mgbt-xs-20"> <strong>Draggable</strong> <span class="font-light">Events</span> </h2>
                    <div id="external-events">
                      <form class="inline-form">
                        <div class="input-group">
                          <input type="text" id="event-title" placeholder="Event Title..." value="">
                          <div class="input-group-btn">
                            <button class="btn dropdown-toggle vd_bg-red vd_white" type="button" id="event-add"><i class="fa fa-plus fa-fw"></i></button>
                          </div>
                          <!-- /btn-group --> 
                        </div>
                      </form>
                      <br/>
                      <div id="events"> </div>
                      <br/>
                      <div class="vd_checkbox checkbox-success">
                        <input type="checkbox"  id="drop-remove">
                        <label for="drop-remove"> Remove after drop </label>
                      </div>
                    </div>
                    <!-- #external-events --> 
                    
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel --> 
              </div>
              <!-- col-sm-3 --> 
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
<?php include('templates/scripts/pages-calendar.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>