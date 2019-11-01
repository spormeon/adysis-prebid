<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'UI Elements Sliders - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'UI Elements Sliders - Responsive Admin HTML Template'; ?>
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
                <li><a href="forms-elements.php">Forms</a> </li>
                <li class="active">Sliders</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Sliders</h1>
              <small class="subtitle">Slider Variations</small> </div>
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
                      <div class="col-sm-4">
                        <h3> Default <span class="font-semibold">Slider</span> </h3>
                        <br/>
                        <div class="mgbt-xs-10">
                          <div class="normal-slider ui-slider-primary"></div>
                          <br/>
                          <br/>
                          <div class="normal-slider ui-slider-info"></div>
                          <br/>
                          <br/>
                          <div class="normal-slider ui-slider-danger"></div>
                          <br/>
                          <br/>
                          <div class="normal-slider ui-slider-warning"></div>
                          <br/>
                          <br/>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <h3> Horizontal <span class="font-semibold">Slider</span> </h3>
                        <br/>
                        <div class="mgbt-xs-10">
                          <div class="horizontal-slider-1 ui-slider-primary"></div>
                          <br/>
                          <br/>
                          <div class="horizontal-slider-2 ui-slider-info"></div>
                          <br/>
                          <br/>
                          <div class="horizontal-slider-3 ui-slider-danger"></div>
                          <br/>
                          <br/>
                          <div class="horizontal-slider-4 ui-slider-warning"></div>
                          <br/>
                          <br/>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <h3> Vertical <span class="font-semibold">Slider</span> </h3>
                        <br/>
                        <div class="mgbt-xs-10">
                          <div class="pull-left" style="margin-right: 80px; margin-left:20px;">
                            <div class="vertical-slider-1 ui-slider-primary" style="height: 180px;"></div>
                          </div>
                          <div class="pull-left" style="margin-right: 80px;">
                            <div class="vertical-slider-2 ui-slider-info pull-left" style="height: 180px;"></div>
                          </div>
                          <div class="pull-left" style="margin-right: 80px;">
                            <div class="vertical-slider-3 ui-slider-danger pull-left" style="height: 180px;"></div>
                          </div>
                          <div class="pull-left" style="margin-right: 80px;">
                            <div class="vertical-slider-4 ui-slider-warning pull-left" style="height: 180px;"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
            </div>
            <!-- row -->
            
            <div class="row">
              <div class="col-sm-12">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?>
                  </div>
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-sm-4 form-horizontal">
                        <h3> Range <span class="font-semibold">Slider</span> </h3>
                        <br/>
                        <div class="form-group">
                          <label for="slider-range-amount" class="col-sm-3 control-label">Price range:</label>
                          <div class="col-sm-9 controls">
                            <input type="text" class="slider-range-amount width-40">
                          </div>
                        </div>
                        <br/>
                        <br/>
                        <div class="slider-range ui-slider-primary"></div>
                        <br/><br/><br/>
                      </div>
                      <div class="col-sm-4 form-horizontal">
                        <h3> Range <span class="font-semibold">with Fixed Max</span> </h3>
                        <br/>
                        <div class="form-group">
                          <label for="slider-range-max-amount" class="col-sm-4 control-label">Minimum Number of Bedroom:</label>
                          <div class="col-sm-8 controls">
                            <input type="text" class="slider-range-max-amount width-40">
                          </div>
                        </div>
                        <br/>
                        <br/>
                        <div class="slider-range-max ui-slider-warning"></div>
                        <br/><br/><br/>
                      </div>
                      <div class="col-sm-4 form-horizontal">
                        <h3> Range <span class="font-semibold">with Fixed Min</span> </h3>
                        <br/>
                        <div class="form-group">
                          <label for="slider-range-min-amount" class="col-sm-4 control-label">Minimum Price:</label>
                          <div class="col-sm-8 controls">
                            <input type="text" class="slider-range-min-amount width-40">
                          </div>
                        </div>
                        <br/>
                        <br/>
                        <div class="slider-range-min ui-slider-danger"></div>
                        <br/><br/><br/>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
            </div>
            <!-- row -->
            
            <div class="row">
              <div class="col-sm-12">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?>
                  </div>
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-sm-6 form-horizontal">
                        <h3> Vertical <span class="font-semibold">Range Slider</span> </h3>
                        <br/>                      
                      	<div class="row">
                        	<div class="col-xs-2 text-center">
                            	<div class="vertical-range-slider ui-slider-primary" style="height: 250px; margin-left:auto; margin-right:auto;"></div>
                            </div>
                            <div class="col-xs-10">
                            	<div class="form-group">
                                  <br/><br/><br/><br/>
                                  <label for="vertical-range-slider-amount" class="col-xs-2 control-label">Value:</label>
                                  <div class="col-xs-10 controls">
                                    <input type="text" class="vertical-range-slider-amount width-40">
                                  </div>                                
                                </div>
                            </div>
                            
                        </div>
                        <br/><br/><br/>

                      </div>                    
                      <div class="col-sm-6 form-horizontal">
                        <h3> Slider <span class="font-semibold">bond to select</span> </h3>
                        <br/>
                        <div class="form-group">
                          <label for="min-beds" class="col-sm-3 control-label">Price range:</label>
                          <div class="col-sm-9 controls">
                            <select name="min-beds" id="min-beds" class="width-20">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                            </select>
                          </div>
                        </div>
                        <br/>
                        <br/>
                        <div class="blank"></div>
                        <br/>
                        <br/>
                        <h3> Snap<span class="font-semibold"> to Increment</span> </h3>
                        <br/>
                        <div class="form-group">
                          <label for="slider-increment-amount" class="col-sm-4 control-label">Donation amount ($50 increments):</label>
                          <div class="col-sm-8 controls">
                            <input type="text" class="slider-increment-amount width-40">
                          </div>
                        </div>
                        <br/>
                        <br/>
                        <div class="slider-increment ui-slider-primary"></div>                        
                      </div>

                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
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
<?php include('templates/scripts/forms-sliders.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>