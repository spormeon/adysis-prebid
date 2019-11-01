<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Form Layouts - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'Form Layouts - Responsive Admin HTML Template'; ?>
<?php $page = 'forms';   // To set active on the same id of primary menu ?>
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
                <li class="active">Form Layouts</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Form Layouts</h1>
              <small class="subtitle">Form with different grid layout</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-bar-chart-o"></i> </span> Label on Top </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="row">
                        <div class="col-md-2">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-2">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-2">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-2">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-2">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-2">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-9">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-8">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-8">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <label class="control-label">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="form-actions-condensed row mgbt-xs-0">
                        <div class="col-sm-12"> <a class="btn vd_btn vd_bg-green vd_white" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-check-circle"></i></span> Submit</a> </div>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 --> 
            </div>
            <!-- row -->
            
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-bar-chart-o"></i> </span> Inline Label </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="row">
                        <div class="col-md-4">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9">
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9" >
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9" >
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9">
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9" >
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9" >
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9" >
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9">
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9" >
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9">
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                        <div class="col-md-8">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9">
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-8">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9">
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9">
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <label class="col-xs-3 control-label">Input</label>
                          <div class="controls col-xs-9">
                            <input type="text" placeholder="small" class="input-border-btm">
                          </div>
                        </div>
                      </div>
                      <div class="form-actions row ">
                        <div class="col-sm-9 col-sm-offset-3"> <a class="btn vd_btn vd_bg-green vd_white" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-check-circle"></i></span> Submit</a> <a class="btn vd_btn vd_black" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-times-circle"></i></span> Cancel</a> </div>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 --> 
            </div>
            <!-- row -->
            
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-bar-chart-o"></i> </span> No Label </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="row">
                        <div class="col-md-2">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-2">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-2">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-2">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-2">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-2">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-3">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-9">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-8">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-8">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <label class="control-label sr-only">Input</label>
                          <div class="controls">
                            <input type="text" placeholder="small">
                          </div>
                        </div>
                      </div>
                      <div class="form-actions-condensed row mgbt-xs-0 text-right">
                        <div class="col-sm-12"> <a class="btn vd_btn vd_black" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-times-circle"></i></span> Cancel</a> <a class="btn vd_btn vd_bg-green vd_white" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-check-circle"></i></span> Submit</a> </div>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 --> 
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