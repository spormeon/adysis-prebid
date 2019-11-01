<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Form Wizards - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'Form Wizards - Responsive Admin HTML Template'; ?>
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
                <li class="active">Form Wizard</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Form Wizard</h1>
              <small class="subtitle">Form wizard with multiple files</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-magic"></i> </span> Wizard Basic </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div id="wizard-1" class="form-wizard">
                        <ul>
                          <li><a href="#tab1" data-toggle="tab">
                            <div class="menu-icon"> 1 </div>
                            User Profile </a></li>
                          <li><a href="#tab2" data-toggle="tab">
                            <div class="menu-icon"> 2 </div>
                            Address Information </a></li>
                          <li><a href="#tab3" data-toggle="tab">
                            <div class="menu-icon"> 3 </div>
                            Contact Detail </a></li>
                          <li><a href="#tab4" data-toggle="tab">
                            <div class="menu-icon"> 4 </div>
                            Billing Information </a></li>
                          <li><a href="#tab5" data-toggle="tab">
                            <div class="menu-icon"> 5 </div>
                            Confirm </a></li>
                        </ul>
                        <div class="tab-content">
                          <div class="tab-pane" id="tab1">
                            <div class="row">
                              <div class="col-sm-4">
                                <div class="form-label">First Name</div>
                                <input type="text" class="mgbt-xs-20 mgbt-sm-0">
                              </div>
                              <div class="col-sm-4">
                                <div class="form-label">Last Name</div>
                                <input type="text"  class="">
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-2">
                                <div class="form-label">User Name</div>
                                <input type="text"  class="mgbt-xs-20  mgbt-sm-0">
                              </div>
                              <div class="col-sm-6">
                                <div class="form-label">Email</div>
                                <input type="email"  class="">
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-sm-4">
                                <div class="form-label">Password</div>
                                <input type="password"  class="mgbt-xs-20  mgbt-sm-0">
                              </div>
                              <div class="col-sm-4">
                                <div class="form-label">Confirm Password</div>
                                <input type="password"  class="">
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab2">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Address</label>
                              <div class="col-sm-7 controls">
                                <input type="text">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">City</label>
                              <div class="col-sm-7 controls">
                                <input type="text">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Country</label>
                              <div class="col-sm-2 controls">
                                <select >
                                  <option>USA</option>
                                  <option>Canada</option>
                                  <option>UK</option>
                                  <option>Thailand</option>
                                  <option>Indonesia</option>
                                </select>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Post Code</label>
                              <div class="col-sm-1 controls">
                                <input type="text"  maxlength="5">
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab3">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Homephone</label>
                              <div class="col-sm-10 controls">
                                <select class="width-10">
                                  <option>+1</option>
                                  <option>+60</option>
                                  <option>+61</option>
                                  <option>+62</option>
                                  <option>+63</option>
                                </select>
                                <input type="text" class="width-30">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Handphone</label>
                              <div class="col-sm-10 controls">
                                <select class="width-10">
                                  <option>+1</option>
                                  <option>+60</option>
                                  <option>+61</option>
                                  <option>+62</option>
                                  <option>+63</option>
                                </select>
                                <input type="text" class="width-30">
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab4">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">CC Number</label>
                              <div class="col-sm-5 controls">
                                <input type="text" class="">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">CVV</label>
                              <div class="col-sm-10 controls">
                                <input type="text" class="width-10" maxlength="3">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Expired Date</label>
                              <div class="col-sm-10 controls">
                                <select class="width-10">
                                  <option>January</option>
                                  <option>February</option>
                                  <option>March</option>
                                  <option>April</option>
                                  <option>May</option>
                                </select>
                                <select class="width-10">
                                  <option>2013</option>
                                  <option>2014</option>
                                  <option>2015</option>
                                  <option>2016</option>
                                  <option>2017</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab5">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">First Name</label>
                              <div class="col-sm-5 controls">
                                <div class="control-value"> John </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Last Name</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> Doe </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Address</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> Address Examples Here </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">City</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> Los Angeles </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Country</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> USA </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-actions-condensed wizard"> <a class="btn vd_btn prev" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-left"></i></span> Previous</a> <a class="btn vd_btn next" href="javascript:void(0);">Next <span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-right"></i></span></a> <a class="btn vd_btn vd_bg-green finish" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-check"></i></span> Finish</a> </div>
                        </div>
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
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-magic"></i> </span> Wizard With Progress and No Tab Click </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div id="wizard-2" class="form-wizard">
                        <ul>
                          <li><a href="#tab21" data-toggle="tab">
                            <div class="menu-icon"> 1 </div>
                            User Profile </a></li>
                          <li><a href="#tab22" data-toggle="tab">
                            <div class="menu-icon"> 2 </div>
                            Address Information </a></li>
                          <li><a href="#tab23" data-toggle="tab">
                            <div class="menu-icon"> 3 </div>
                            Contact Detail </a></li>
                          <li><a href="#tab24" data-toggle="tab">
                            <div class="menu-icon"> 4 </div>
                            Billing Information </a></li>
                          <li><a href="#tab25" data-toggle="tab">
                            <div class="menu-icon"> 5 </div>
                            Confirm </a></li>
                        </ul>
                        <div class="progress progress-striped active">
                          <div class="progress-bar progress-bar-info" > </div>
                        </div>
                        <div class="tab-content no-bd pd-25">
                          <div class="tab-pane" id="tab21">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">First Name</label>
                              <div class="col-sm-3 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                              <label class="col-sm-2 control-label">Last Name</label>
                              <div class="col-sm-3 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">User Name</label>
                              <div class="col-sm-3 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                              <label class="col-sm-2 control-label">Email</label>
                              <div class="col-sm-3 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Password</label>
                              <div class="col-sm-3 controls">
                                <input type="password" class="input-border-btm">
                              </div>
                              <label class="col-sm-2 control-label">Confirm Password</label>
                              <div class="col-sm-3 controls">
                                <input type="password" class="input-border-btm">
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab22">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Address</label>
                              <div class="col-sm-7 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">City</label>
                              <div class="col-sm-7 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Country</label>
                              <div class="col-sm-2 controls">
                                <select class="input-border-btm">
                                  <option>USA</option>
                                  <option>Canada</option>
                                  <option>UK</option>
                                  <option>Thailand</option>
                                  <option>Indonesia</option>
                                </select>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Post Code</label>
                              <div class="col-sm-1 controls">
                                <input type="text" class="input-border-btm" maxlength="5">
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab23">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Homephone</label>
                              <div class="col-sm-10 controls">
                                <select class="width-10  input-border-bottom">
                                  <option>+1</option>
                                  <option>+60</option>
                                  <option>+61</option>
                                  <option>+62</option>
                                  <option>+63</option>
                                </select>
                                <input type="text" class="width-30  input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Handphone</label>
                              <div class="col-sm-10 controls">
                                <select class="width-10  input-border-bottom">
                                  <option>+1</option>
                                  <option>+60</option>
                                  <option>+61</option>
                                  <option>+62</option>
                                  <option>+63</option>
                                </select>
                                <input type="text" class="width-30  input-border-btm">
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab24">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Credit Card Number</label>
                              <div class="col-sm-5 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">CVV</label>
                              <div class="col-sm-10 controls">
                                <input type="text" class="width-10  input-border-btm" maxlength="3">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Expired Date</label>
                              <div class="col-sm-10 controls">
                                <select class="width-20  input-border-btm">
                                  <option>January</option>
                                  <option>February</option>
                                  <option>March</option>
                                  <option>April</option>
                                  <option>May</option>
                                </select>
                                <select class="width-10  input-border-btm">
                                  <option>2013</option>
                                  <option>2014</option>
                                  <option>2015</option>
                                  <option>2016</option>
                                  <option>2017</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab25">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">First Name</label>
                              <div class="col-sm-5 controls">
                                <div class="control-value"> John </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Last Name</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> Doe </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Address</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> Address Examples Here </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">City</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> Los Angeles </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Country</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> USA </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-actions-condensed wizard">
                            <div class="row mgbt-xs-0">
                              <div class="col-sm-9 col-sm-offset-2"> <a class="btn vd_btn prev" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-left"></i></span> Previous</a> <a class="btn vd_btn next" href="javascript:void(0);">Next <span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-right"></i></span></a> <a class="btn vd_btn vd_bg-green finish" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-check"></i></span> Finish</a> </div>
                            </div>
                          </div>
                        </div>
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
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-magic"></i> </span> Wizard Condensed </h3>
                  </div>
                  <div class="panel-body-list">
                    <form class="form-horizontal" action="#" role="form">
                      <div id="wizard-3" class="form-wizard condensed">
                        <ul class="nav nav-pills nav-justified">
                          <li><a href="#tab31" data-toggle="tab">
                            <div class="menu-icon"> 1 </div>
                            User Profile </a></li>
                          <li><a href="#tab32" data-toggle="tab">
                            <div class="menu-icon"> 2 </div>
                            Address Information </a></li>
                          <li><a href="#tab33" data-toggle="tab">
                            <div class="menu-icon"> 3 </div>
                            Contact Detail </a></li>
                          <li><a href="#tab34" data-toggle="tab">
                            <div class="menu-icon"> 4 </div>
                            Billing Information </a></li>
                          <li><a href="#tab35" data-toggle="tab">
                            <div class="menu-icon"> 5 </div>
                            Confirm </a></li>
                        </ul>
                        <div class="tab-content no-bd pd-25">
                          <div class="tab-pane" id="tab31">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">First Name</label>
                              <div class="col-sm-3 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                              <label class="col-sm-2 control-label">Last Name</label>
                              <div class="col-sm-3 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">User Name</label>
                              <div class="col-sm-3 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                              <label class="col-sm-2 control-label">Email</label>
                              <div class="col-sm-3 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Password</label>
                              <div class="col-sm-3 controls">
                                <input type="password" class="input-border-btm">
                              </div>
                              <label class="col-sm-2 control-label">Confirm Password</label>
                              <div class="col-sm-3 controls">
                                <input type="password" class="input-border-btm">
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab32">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Address</label>
                              <div class="col-sm-7 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">City</label>
                              <div class="col-sm-7 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Country</label>
                              <div class="col-sm-2 controls">
                                <select class="input-border-btm">
                                  <option>USA</option>
                                  <option>Canada</option>
                                  <option>UK</option>
                                  <option>Thailand</option>
                                  <option>Indonesia</option>
                                </select>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Post Code</label>
                              <div class="col-sm-1 controls">
                                <input type="text" class="input-border-btm" maxlength="5">
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab33">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Homephone</label>
                              <div class="col-sm-10 controls">
                                <select class="width-10  input-border-bottom">
                                  <option>+1</option>
                                  <option>+60</option>
                                  <option>+61</option>
                                  <option>+62</option>
                                  <option>+63</option>
                                </select>
                                <input type="text" class="width-30  input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Handphone</label>
                              <div class="col-sm-10 controls">
                                <select class="width-10  input-border-bottom">
                                  <option>+1</option>
                                  <option>+60</option>
                                  <option>+61</option>
                                  <option>+62</option>
                                  <option>+63</option>
                                </select>
                                <input type="text" class="width-30  input-border-btm">
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab34">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Credit Card Number</label>
                              <div class="col-sm-5 controls">
                                <input type="text" class="input-border-btm">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">CVV</label>
                              <div class="col-sm-10 controls">
                                <input type="text" class="width-10  input-border-btm" maxlength="3">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Expired Date</label>
                              <div class="col-sm-10 controls">
                                <select class="width-20  input-border-btm">
                                  <option>January</option>
                                  <option>February</option>
                                  <option>March</option>
                                  <option>April</option>
                                  <option>May</option>
                                </select>
                                <select class="width-10  input-border-btm">
                                  <option>2013</option>
                                  <option>2014</option>
                                  <option>2015</option>
                                  <option>2016</option>
                                  <option>2017</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="tab-pane" id="tab35">
                            <div class="form-group">
                              <label class="col-sm-2 control-label">First Name</label>
                              <div class="col-sm-5 controls">
                                <div class="control-value"> John </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Last Name</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> Doe </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Address</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> Address Examples Here </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">City</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> Los Angeles </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-2 control-label">Country</label>
                              <div class="col-sm-10 controls">
                                <div class="control-value"> USA </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-actions wizard mgtp-20">
                            <div class="row mgbt-xs-0">
                              <div class="col-xs-6"> <a class="btn vd_btn prev" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-left"></i></span> Previous</a> </div>
                              <div class="col-xs-6 text-right"> <a class="btn vd_btn next" href="javascript:void(0);">Next <span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-right"></i></span></a> <a class="btn vd_btn vd_bg-green finish" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-check"></i></span> Finish</a> </div>
                            </div>
                          </div>
                        </div>
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
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-magic"></i> </span> Vertical Wizard Condensed </h3>
                  </div>
                  <div class="panel-body-list">
                    <form class="form-horizontal" action="#" role="form">
                      <div id="wizard-4" class="form-wizard condensed">
                        <div class="row mgbt-xs-0">
                          <div class="col-sm-3">
                            <ul>
                              <li><a href="#tab41" data-toggle="tab">
                                <div class="menu-icon"> 1 </div>
                                User Profile </a></li>
                              <li><a href="#tab42" data-toggle="tab">
                                <div class="menu-icon"> 2 </div>
                                Address Information </a></li>
                              <li><a href="#tab43" data-toggle="tab">
                                <div class="menu-icon"> 3 </div>
                                Contact Detail </a></li>
                              <li><a href="#tab44" data-toggle="tab">
                                <div class="menu-icon"> 4 </div>
                                Billing Information </a></li>
                              <li><a href="#tab45" data-toggle="tab">
                                <div class="menu-icon"> 5 </div>
                                Confirm </a></li>
                            </ul>
                          </div>
                          <div class="col-sm-9">
                            <div class="tab-content no-bd pd-15">
                              <div class="tab-pane" id="tab41">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">First Name</label>
                                  <div class="col-sm-3 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                  <label class="col-sm-2 control-label">Last Name</label>
                                  <div class="col-sm-3 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">User Name</label>
                                  <div class="col-sm-3 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                  <label class="col-sm-2 control-label">Email</label>
                                  <div class="col-sm-3 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Password</label>
                                  <div class="col-sm-3 controls">
                                    <input type="password" class="input-border-btm">
                                  </div>
                                  <label class="col-sm-2 control-label">Confirm Password</label>
                                  <div class="col-sm-3 controls">
                                    <input type="password" class="input-border-btm">
                                  </div>
                                </div>
                              </div>
                              <div class="tab-pane" id="tab42">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Address</label>
                                  <div class="col-sm-7 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">City</label>
                                  <div class="col-sm-7 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Country</label>
                                  <div class="col-sm-2 controls">
                                    <select class="input-border-btm">
                                      <option>USA</option>
                                      <option>Canada</option>
                                      <option>UK</option>
                                      <option>Thailand</option>
                                      <option>Indonesia</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Post Code</label>
                                  <div class="col-sm-1 controls">
                                    <input type="text" class="input-border-btm" maxlength="5">
                                  </div>
                                </div>
                              </div>
                              <div class="tab-pane" id="tab43">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Homephone</label>
                                  <div class="col-sm-10 controls">
                                    <select class="width-10  input-border-bottom">
                                      <option>+1</option>
                                      <option>+60</option>
                                      <option>+61</option>
                                      <option>+62</option>
                                      <option>+63</option>
                                    </select>
                                    <input type="text" class="width-30  input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Handphone</label>
                                  <div class="col-sm-10 controls">
                                    <select class="width-10  input-border-bottom">
                                      <option>+1</option>
                                      <option>+60</option>
                                      <option>+61</option>
                                      <option>+62</option>
                                      <option>+63</option>
                                    </select>
                                    <input type="text" class="width-30  input-border-btm">
                                  </div>
                                </div>
                              </div>
                              <div class="tab-pane" id="tab44">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Credit Card Number</label>
                                  <div class="col-sm-5 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">CVV</label>
                                  <div class="col-sm-10 controls">
                                    <input type="text" class="width-10  input-border-btm" maxlength="3">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Expired Date</label>
                                  <div class="col-sm-10 controls">
                                    <select class="width-20  input-border-btm">
                                      <option>January</option>
                                      <option>February</option>
                                      <option>March</option>
                                      <option>April</option>
                                      <option>May</option>
                                    </select>
                                    <select class="width-10  input-border-btm">
                                      <option>2013</option>
                                      <option>2014</option>
                                      <option>2015</option>
                                      <option>2016</option>
                                      <option>2017</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="tab-pane" id="tab45">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">First Name</label>
                                  <div class="col-sm-5 controls">
                                    <div class="control-value"> John </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Last Name</label>
                                  <div class="col-sm-10 controls">
                                    <div class="control-value"> Doe </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Address</label>
                                  <div class="col-sm-10 controls">
                                    <div class="control-value"> Address Examples Here </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">City</label>
                                  <div class="col-sm-10 controls">
                                    <div class="control-value"> Los Angeles </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Country</label>
                                  <div class="col-sm-10 controls">
                                    <div class="control-value"> USA </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-actions-condensed wizard text-right"> <a class="btn vd_btn prev" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-left"></i></span> Previous</a> <a class="btn vd_btn next" href="javascript:void(0);">Next <span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-right"></i></span></a> <a class="btn vd_btn vd_bg-green finish" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-check"></i></span> Finish</a> </div>
                            </div>
                          </div>
                        </div>
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
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-magic"></i> </span> Vertical Wizard </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div id="wizard-5" class="form-wizard">
                        <div class="row mgbt-xs-0">
                          <div class="col-sm-3">
                            <ul>
                              <li><a href="#tab51" data-toggle="tab">
                                <div class="menu-icon"> 1 </div>
                                User Profile </a></li>
                              <li><a href="#tab52" data-toggle="tab">
                                <div class="menu-icon"> 2 </div>
                                Address Information </a></li>
                              <li><a href="#tab53" data-toggle="tab">
                                <div class="menu-icon"> 3 </div>
                                Contact Detail </a></li>
                              <li><a href="#tab54" data-toggle="tab">
                                <div class="menu-icon"> 4 </div>
                                Billing Information </a></li>
                              <li><a href="#tab55" data-toggle="tab">
                                <div class="menu-icon"> 5 </div>
                                Confirm </a></li>
                            </ul>
                          </div>
                          <div class="col-sm-9">
                            <div class="tab-content no-bd pd-15">
                              <div class="tab-pane" id="tab51">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">First Name</label>
                                  <div class="col-sm-3 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                  <label class="col-sm-2 control-label">Last Name</label>
                                  <div class="col-sm-3 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">User Name</label>
                                  <div class="col-sm-3 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                  <label class="col-sm-2 control-label">Email</label>
                                  <div class="col-sm-3 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Password</label>
                                  <div class="col-sm-3 controls">
                                    <input type="password" class="input-border-btm">
                                  </div>
                                  <label class="col-sm-2 control-label">Confirm Password</label>
                                  <div class="col-sm-3 controls">
                                    <input type="password" class="input-border-btm">
                                  </div>
                                </div>
                              </div>
                              <div class="tab-pane" id="tab52">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Address</label>
                                  <div class="col-sm-7 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">City</label>
                                  <div class="col-sm-7 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Country</label>
                                  <div class="col-sm-2 controls">
                                    <select class="input-border-btm">
                                      <option>USA</option>
                                      <option>Canada</option>
                                      <option>UK</option>
                                      <option>Thailand</option>
                                      <option>Indonesia</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Post Code</label>
                                  <div class="col-sm-1 controls">
                                    <input type="text" class="input-border-btm" maxlength="5">
                                  </div>
                                </div>
                              </div>
                              <div class="tab-pane" id="tab53">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Homephone</label>
                                  <div class="col-sm-10 controls">
                                    <select class="width-10  input-border-bottom">
                                      <option>+1</option>
                                      <option>+60</option>
                                      <option>+61</option>
                                      <option>+62</option>
                                      <option>+63</option>
                                    </select>
                                    <input type="text" class="width-30  input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Handphone</label>
                                  <div class="col-sm-10 controls">
                                    <select class="width-10  input-border-bottom">
                                      <option>+1</option>
                                      <option>+60</option>
                                      <option>+61</option>
                                      <option>+62</option>
                                      <option>+63</option>
                                    </select>
                                    <input type="text" class="width-30  input-border-btm">
                                  </div>
                                </div>
                              </div>
                              <div class="tab-pane" id="tab54">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Credit Card Number</label>
                                  <div class="col-sm-5 controls">
                                    <input type="text" class="input-border-btm">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">CVV</label>
                                  <div class="col-sm-10 controls">
                                    <input type="text" class="width-10  input-border-btm" maxlength="3">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Expired Date</label>
                                  <div class="col-sm-10 controls">
                                    <select class="width-20  input-border-btm">
                                      <option>January</option>
                                      <option>February</option>
                                      <option>March</option>
                                      <option>April</option>
                                      <option>May</option>
                                    </select>
                                    <select class="width-10  input-border-btm">
                                      <option>2013</option>
                                      <option>2014</option>
                                      <option>2015</option>
                                      <option>2016</option>
                                      <option>2017</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="tab-pane" id="tab55">
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">First Name</label>
                                  <div class="col-sm-5 controls">
                                    <div class="control-value"> John </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Last Name</label>
                                  <div class="col-sm-10 controls">
                                    <div class="control-value"> Doe </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Address</label>
                                  <div class="col-sm-10 controls">
                                    <div class="control-value"> Address Examples Here </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">City</label>
                                  <div class="col-sm-10 controls">
                                    <div class="control-value"> Los Angeles </div>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label class="col-sm-2 control-label">Country</label>
                                  <div class="col-sm-10 controls">
                                    <div class="control-value"> USA </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-actions-condensed wizard text-right"> <a class="btn vd_btn prev" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-left"></i></span> Previous</a> <a class="btn vd_btn next" href="javascript:void(0);">Next <span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-right"></i></span></a> <a class="btn vd_btn vd_bg-green finish" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-check"></i></span> Finish</a> </div>
                            </div>
                          </div>
                        </div>
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
<?php include('templates/scripts/forms-wizard.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>