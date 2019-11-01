<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Form Validation - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid, Form Validation '; ?>
<?php $description = 'Form Validation  - Responsive Admin HTML Template'; ?>
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
                <li class="active">Form Validation </li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Form Validation </h1>
              <small class="subtitle">Form validation using jQuery Validation: <a href="http://jqueryvalidation.org/">http://jqueryvalidation.org</a>/</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="panel widget light-widget">
              <div class="panel-heading no-title"> </div>
              <div class="panel-body">
                <h2 class="mgbt-xs-20">Form Type 1</h2>
                <form class="form-horizontal"  action="#" role="form" id="register-form">
                  <div class="alert alert-danger vd_hidden">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                    <span class="vd_alert-icon"><i class="fa fa-exclamation-circle vd_red"></i></span><strong>Oh snap!</strong> Change a few things up and try submitting again. </div>
                  <div class="alert alert-success vd_hidden">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                    <span class="vd_alert-icon"><i class="fa fa-check-circle vd_green"></i></span><strong>Well done!</strong>. </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label class="control-label  col-sm-2">First Name <span class="vd_red">*</span></label>
                      <div id="first-name-input-wrapper"  class="controls col-sm-6">
                        <input type="text" placeholder="John" class="width-60 required" name="name" id="name" required >
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label class="control-label  col-sm-2">Company Name <span class="vd_red">*</span></label>
                      <div id="company-input-wrapper" class="controls col-sm-6">
                        <input type="text" placeholder="Your Company Co, Ltd." class="width-60 required" required  name="company" id="company">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label class="control-label col-sm-2">Website</label>
                      <div id="website-input-wrapper"  class="controls col-sm-6">
                        <input type="text" placeholder="http://www.yourcompany.com" class="width-60"  name="website" id="website">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label class="control-label col-sm-2" >Email <span class="vd_red">*</span></label>
                      <div id="email-input-wrapper"  class="controls col-sm-6">
                        <input type="email" placeholder="Email" class="width-60 required" required  name="email" id="email">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label class="control-label col-sm-2" >Member Type <span class="vd_red">*</span></label>
                      <div id="email-input-wrapper"  class="controls col-sm-6">
                        <div class="vd_radio radio-success">
                          <input type="radio" checked value="personal" id="optionsRadios3" name="member">
                          <label for="optionsRadios3"> Personal </label>
                          <input type="radio" value="business" id="optionsRadios4" name="member">
                          <label for="optionsRadios4"> Business </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label class="control-label col-sm-2">Password <span class="vd_red">*</span></label>
                      <div id="password-input-wrapper"  class="controls col-sm-6">
                        <input type="password" placeholder="Password" class="width-40 required" required  name="password" id="password">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <label class="control-label col-sm-2">Confirm Password <span class="vd_red">*</span></label>
                      <div id="confirm-password-input-wrapper" class="controls col-sm-6">
                        <input type="password" placeholder="Password" class="width-40 required" required  name="confirmpass" id="confirmpass">
                      </div>
                    </div>
                  </div>
                  <div id="vd_login-error" class="alert alert-danger hidden"><i class="fa fa-exclamation-circle fa-fw"></i> Please fill the necessary field </div>
                  <div class="form-group">
                    <div class="col-sm-2"></div>
                    <div class="col-md-6 mgbt-xs-10 mgtp-20">
                      <div class="vd_checkbox  checkbox-success">
                        <input type="checkbox" id="checkbox-3" value="1">
                        <label for="checkbox-3"> Send me newsletter about the latest update</label>
                      </div>
                      <div class="vd_checkbox checkbox-success">
                        <input type="checkbox" id="checkbox-4" value="1" required name="checkbox-4">
                        <label for="checkbox-4"> I agree with <a href="#">terms of service</a></label>
                      </div>
                      <div class="mgtp-10">
                        <button class="btn vd_bg-green vd_white" type="submit" id="submit-register" name="submit-register">Register</button>
                      </div>
                    </div>
                    <div class="col-md-12 mgbt-xs-5"> </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- Panel Widget -->
            
            <div class="panel widget light-widget">
              <div class="panel-heading no-title"> </div>
              <div class="panel-body">
                <h2 class="mgbt-xs-20">Form Type 2</h2>
                <form class="form-horizontal"  action="#" role="form" id="register-form-2">
                  <div class="alert alert-danger vd_hidden">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                    <span class="vd_alert-icon"><i class="fa fa-exclamation-circle vd_red"></i></span><strong>Oh snap!</strong> Change a few things up and try submitting again. </div>
                  <div class="alert alert-success vd_hidden">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                    <span class="vd_alert-icon"><i class="fa fa-check-circle vd_green"></i></span><strong>Well done!</strong>. </div>
                  <div class="form-group">
                    <div class="col-md-6">
                      <div class="label-wrapper">
                        <label class="control-label">First Name <span class="vd_red">*</span></label>
                      </div>
                      <div class="vd_input-wrapper" id="first-name-input-wrapper"> <span class="menu-icon"> <i class="fa fa-user"></i> </span>
                        <input type="text" placeholder="John" class="required" required name="firstname" id="firstname">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="label-wrapper">
                        <label class="control-label">Last Name <span class="vd_red">*</span></label>
                      </div>
                      <div class="vd_input-wrapper" id="last-name-input-wrapper"> <span class="menu-icon"> <i class="fa fa-user"></i> </span>
                        <input type="text" placeholder="Doe" class="required" required name="lastname" id="lastname">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <div class="label-wrapper">
                        <label class="control-label">Company Name <span class="vd_red">*</span></label>
                      </div>
                      <div class="vd_input-wrapper" id="company-input-wrapper"> <span class="menu-icon"> <i class="fa fa-briefcase"></i> </span>
                        <input type="text" placeholder="Your Company Co, Ltd." class="required" required  name="company" id="company">
                      </div>
                    </div>
                  </div>
                  <div class="form-group ">
                    <div class="col-md-3">
                      <div class="label-wrapper">
                        <label class="control-label">Phone <span class="vd_red">*</span></label>
                      </div>
                      <div class="vd_input-wrapper" id="country-code-input-wrapper"> <span class="menu-icon"> <i class="fa fa-plus"></i> </span>
                        <input type="number" placeholder="Country" class="required" required  name="country" id="country">
                      </div>
                    </div>
                    <div class="col-md-9">
                      <div class="label-wrapper">
                        <label class="control-label">&nbsp;</label>
                      </div>
                      <div class="vd_input-wrapper no-icon" id="phone-input-wrapper">
                        <input type="number" placeholder="Phone Number" class="required" required  name="phone" id="phone">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <div class="label-wrapper">
                        <label class="control-label">Website</label>
                      </div>
                      <div class="vd_input-wrapper" id="website-input-wrapper"> <span class="menu-icon"> <i class="fa fa-globe"></i> </span>
                        <input type="text" placeholder="http://www.yourcompany.com" class=""  name="website" id="website">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <div class="label-wrapper">
                        <label class="control-label">Email <span class="vd_red">*</span></label>
                      </div>
                      <div class="vd_input-wrapper" id="email-input-wrapper"> <span class="menu-icon"> <i class="fa fa-envelope"></i> </span>
                        <input type="email" placeholder="Email" class="required" required  name="email" id="email">
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-6">
                      <div class="label-wrapper">
                        <label class="control-label">Password <span class="vd_red">*</span></label>
                      </div>
                      <div class="vd_input-wrapper" id="password-input-wrapper"> <span class="menu-icon"> <i class="fa fa-lock"></i> </span>
                        <input type="password" placeholder="Password" class="required" required  name="password" id="password">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="label-wrapper">
                        <label class="control-label">Confirm Password <span class="vd_red">*</span></label>
                      </div>
                      <div class="vd_input-wrapper" id="confirm-password-input-wrapper"> <span class="menu-icon"> <i class="fa fa-lock"></i> </span>
                        <input type="password" placeholder="Password" class="required" required  name="confirmpass" id="confirmpass">
                      </div>
                    </div>
                  </div>
                  <div id="vd_login-error" class="alert alert-danger hidden"><i class="fa fa-exclamation-circle fa-fw"></i> Please fill the necessary field </div>
                  <div class="form-group">
                    <div class="col-md-12 mgbt-xs-10 mgtp-20">
                      <div class="vd_checkbox">
                        <input type="checkbox" id="checkbox-1" value="1">
                        <label for="checkbox-1"> Send me newsletter about the latest update</label>
                      </div>
                      <div class="vd_checkbox">
                        <input type="checkbox" id="checkbox-2" value="1" required name="checkbox-2">
                        <label for="checkbox-2"> I agree with <a href="#">terms of service</a></label>
                      </div>
                    </div>
                    <div class="col-md-12 mgbt-xs-5">
                      <button class="btn vd_bg-green vd_white" type="submit" id="submit-register" name="submit-register">Register</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- Panel Widget --> 
            
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
<?php include('templates/scripts/forms-validation.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>