<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'User Profile Form HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'User Profile Form - Responsive Admin HTML Template'; ?>
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
                <li class="active">User Profile Form</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>User Profile Form</h1>
              <small class="subtitle">Form for user profile</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-12">
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title"> </div>
                  <form class="form-horizontal" action="#" role="form">
                    <div  class="panel-body">
                      <h2 class="mgbt-xs-20"> Profile: <span class="font-semibold">Mariah Carayban</span> </h2>
                      <br/>
                      <div class="row">
                        <div class="col-sm-3 mgbt-xs-20">
                          <div class="form-group">
                            <div class="col-xs-12">
                              <div class="form-img text-center mgbt-xs-15"> <img alt="example image" src="img/avatar/big.jpg"> </div>
                              <div class="form-img-action text-center mgbt-xs-20"> <a class="btn vd_btn  vd_bg-blue" href="javascript:void(0);"><i class="fa fa-cloud-upload append-icon"></i> Upload</a> </div>
                              <br/>
                              <div>
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
                        </div>
                        <div class="col-sm-9">
                          <h3 class="mgbt-xs-15">Account Setting</h3>
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Email</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="email"  placeholder="email@yourcompany.com">
                                </div>
                                <!-- col-xs-12 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon  dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-globe fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Username</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="text"  placeholder="username">
                                </div>
                                <!-- col-xs-9 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-globe fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                  
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Password</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="password" class="width-40"  placeholder="password">
                                </div>
                                <!-- col-xs-12 --> 
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Confirm Password</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="password" class="width-40"  placeholder="password">
                                </div>
                                <!-- col-xs-12 --> 
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <hr />
                          <h3 class="mgbt-xs-15">Profile Setting</h3>
                          <div class="form-group">
                            <label class="col-sm-3 control-label">First Name</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="text"  placeholder="first name">
                                </div>
                                <!-- col-xs-9 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-globe fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Last Name</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="text" placeholder="last name">
                                </div>
                                <!-- col-xs-9 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-lock fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Gender</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <span class="vd_radio radio-info">
                                    <input type="radio" checked="" value="option3" id="optionsRadios3" name="optionsRadios2">
                                    <label for="optionsRadios3"> Male </label>
                                  </span>
                                  <span class="vd_radio  radio-danger" > 
                                    
                                    <input type="radio" value="option4" id="optionsRadios4" name="optionsRadios2">
                                    <label for="optionsRadios4"> Female </label>
                                  </span> 
                                    
                                  
                                </div>
                                <!-- col-xs-9 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-lock fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Birthday</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="text" id="datepicker-normal" class="width-40" />
                                </div>
                                <!-- col-xs-12 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-user fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Marital Status</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <select class="width-40">
                                    <option>Single</option>
                                    <option>Married</option>
                                  </select>
                                </div>
                                <!-- col-xs-9 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-user fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Position</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <select class="width-40">
                                    <option>CEO</option>
                                    <option>Director</option>
                                    <option>Manager</option>
                                    <option>Staff</option>
                                    <option>Office Boy</option>
                                  </select>
                                </div>
                                <!-- col-xs-12 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-user fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">About</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <textarea rows="3"></textarea>
                                </div>
                                <!-- col-xs-12 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-user fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <hr/>
                          <h3 class="mgbt-xs-15">Contact Setting</h3>
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Mobile Phone</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="text"  placeholder="mobile phone">
                                </div>
                                <!-- col-xs-12 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-globe fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Website</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="text"  placeholder="website">
                                </div>
                                <!-- col-xs-9 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-globe fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Facebook</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="text"  placeholder="facebook">
                                </div>
                                <!-- col-xs-9 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-globe fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label class="col-sm-3 control-label">Twitter</label>
                            <div class="col-sm-9 controls">
                              <div class="row mgbt-xs-0">
                                <div class="col-xs-9">
                                  <input type="text" placeholder="twitter">
                                </div>
                                <!-- col-xs-9 -->
                                <div class="col-xs-2">
                                  <div class="btn-action">
                                    <button data-toggle="dropdown" class="btn btn-icon dropdown-toggle vd_bg-yellow vd_white" type="button"><i class="fa fa-globe fa-fw"></i></button>
                                    <ul class="dropdown-menu pull-right">
                                      <li><a href="#"><i class="fa fa-globe fa-fw"></i> Public</a></li>
                                      <li><a href="#"><i class="fa fa-user fa-fw"></i> Friends</a></li>
                                      <li><a href="#"><i class="fa fa-lock fa-fw"></i> Only Me</a></li>
                                    </ul>
                                  </div>
                                  <!-- btn-action col-sm-10 --> 
                                </div>
                              </div>
                              <!-- row --> 
                            </div>
                            <!-- col-sm-10 --> 
                          </div>
                          <!-- form-group --> 
                          
                        </div>
                        <!-- col-sm-12 --> 
                      </div>
                      <!-- row --> 
                      
                    </div>
                    <!-- panel-body -->
                    <div class="pd-20">
                      <button class="btn vd_btn vd_bg-green col-md-offset-3"><span class="menu-icon"><i class="fa fa-fw fa-check"></i></span> Finish</button>
                    </div>
                  </form>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-sm-12--> 
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
<?php include('templates/scripts/pages-user-profile-form.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>