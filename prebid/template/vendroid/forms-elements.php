<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Form Elements - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'Form Elements - Responsive Admin HTML Template'; ?>
<?php $page = 'forms';   // To set active on the same id of primary menu ?>
<?php $specific_css[0] = 'plugins/jquery-file-upload/css/jquery.fileupload.css'; 
	  $specific_css[1] = 'plugins/jquery-file-upload/css/jquery.fileupload-ui.css'; 
	  $specific_css[2] = 'plugins/bootstrap-wysiwyg/css/bootstrap-wysihtml5-0.0.2.css'; ?>

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
                <li class="active">Form Elements</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Form Elements</h1>
              <small class="subtitle">Form Basic, Form Advanced</small>
              <div class="vd_panel-menu"> 
                <div class="menu" data-action="click-trigger"> Go To <i class="fa fa-arrow-circle-o-right fa-fw"></i> </div>
                <div class="vd_mega-menu-content width-xs-3 left-xs" data-action="click-target">
                  <div class="child-menu">
                    <div class="content-list content-menu">
                      <ul id="goto-menu" class="list-wrapper pd-lr-10">
                        <li> <a href="#form-basic"> <span class="menu-icon"><i class=" fa fa-th-list"></i></span> <span class="menu-text">Form Basic</span> </a> </li>
                        <li> <a href="#advanced-input"> <span class="menu-icon"><i class=" fa  fa-files-o"></i></span> <span class="menu-text">Advanced Input</span> </a> </li>
                        <li> <a href="#auto-complete-input"> <span class="menu-icon"><i class=" fa  fa-list-alt"></i></span> <span class="menu-text">Auto Complete Input</span> </a> </li>
                        <li> <a href="#switch-input"> <span class="menu-icon"><i class=" fa  fa-adjust"></i></span> <span class="menu-text">Switch Input</span> </a> </li>
                        <li> <a href="#date-input"> <span class="menu-icon"><i class=" fa  fa-calendar"></i></span> <span class="menu-text">Date Input</span> </a> </li>
                        <li> <a href="#bootstrap-date"> <span class="menu-icon"><i class=" fa  fa-calendar-o"></i></span> <span class="menu-text">Bootstrap DateRange Picker</span> </a> </li>
                        <li> <a href="#bootstrap-time"> <span class="menu-icon"><i class=" fa  fa-clock-o"></i></span> <span class="menu-text">Bootstrap Time Picker</span> </a> </li>
                        <li> <a href="#color-pickers"> <span class="menu-icon"><i class=" fa  fa-flask"></i></span> <span class="menu-text">Color Picker</span> </a> </li>
                        <li> <a href="#ck-editor"> <span class="menu-icon"><i class="fa  fa fa-pencil"></i></span> <span class="menu-text">CK Editor</span> </a> </li>
                        <li> <a href="#html5-editor"> <span class="menu-icon"><i class="fa  fa-bolt"></i></span> <span class="menu-text">Wysiwyg HTML 5</span> </a> </li>
                        <li> <a href="#file-upload"> <span class="menu-icon"><i class=" fa  fa-cloud-upload"></i></span> <span class="menu-text">File Upload</span> </a> </li>
                      </ul>
                    </div>
                    <!-- content-list --> 
                  </div>
                  <!-- child-menu --> 
                </div>
                <!-- vd_mega-menu --> 
              </div>
            </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row" id="form-basic">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-bar-chart-o"></i> </span> Form Basic </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Input</label>
                        <div class="col-sm-7 controls">
                          <input type="text" placeholder="small">
                          <span class="help-inline">Some hint here</span> </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Input Width 50%</label>
                        <div class="col-sm-7 controls">
                          <input type="text" placeholder="Half Width" class="width-50">
                          <span class="help-inline">Some hint here</span> </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Input Border Bottom</label>
                        <div class="col-sm-7 controls">
                          <input type="text" placeholder="small" class="input-border-btm">
                          <span class="help-inline">Some hint here</span> </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Input Variation 2</label>
                        <div class="col-sm-7 controls">
                          <div class="vd_input-wrapper no-icon">
                              <input type="text" placeholder="input variation">
                           </div>
                            <span class="help-inline">Some hint here</span> 
                         </div>
                      </div>     
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Input Variation 2 With Icon</label>
                        <div class="col-sm-7 controls">
                          <div class="vd_input-wrapper">
                          	  <span class="menu-icon"> <i class="fa fa-envelope"></i> </span>
                              <input type="text" placeholder="input variation">
                           </div>
                            <span class="help-inline">Some hint here</span> 
                         </div>
                      </div> 
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Input Variation 2 Light Theme</label>
                        <div class="col-sm-7 controls">
                          <div class="vd_input-wrapper light-theme">
                          	  <span class="menu-icon"> <i class="fa fa-envelope"></i> </span>
                              <input type="text" placeholder="input variation">
                           </div>
                            <span class="help-inline">Some hint here</span> 
                         </div>
                      </div>                                                            
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Disabled Input</label>
                        <div class="col-sm-7 controls">
                          <input type="text" disabled="" placeholder="Disabled input here..." >
                          <span class="help-inline">Some hint here</span> </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Readonly Input</label>
                        <div class="col-sm-7 controls">
                          <input type="text" disabled=""  placeholder="Readonly input here..." readonly >
                          <span class="help-inline">Some hint here</span> </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Prepend Input</label>
                        <div class="col-sm-7 controls">
                          <div class="input-group"> <span class="input-group-addon  vd_bg-blue vd_white vd_bdt-blue">@</span>
                            <input type="text" placeholder="Username">
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Alternative Prepend Input</label>
                        <div class="col-sm-7 controls">
                          <div class="input-group input-border"> <span class="input-group-addon no-bd no-bg"><i class="fa fa-calendar"></i></span>
                            <input type="text" placeholder="Calendar" class="no-bd">
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Append Input</label>
                        <div class="col-sm-7 controls">
                          <div class="input-group">
                            <input type="text" placeholder="Price">
                            <span class="input-group-addon">.00</span> </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Alternative Append Input</label>
                        <div class="col-sm-7 controls">
                          <div class="input-group input-border">
                            <input type="text" placeholder="Time" class="no-bd">
                            <span class="input-group-addon no-bd no-bg"><i class="fa fa-clock-o"></i></span> </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Append and Prepend Input</label>
                        <div class="col-sm-7 controls">
                          <div class="input-group"> <span class="input-group-addon">$</span>
                            <input type="text" placeholder="Price">
                            <span class="input-group-addon">.00</span> </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Dropdown</label>
                        <div class="col-sm-7 controls">
                          <select>
                            <option>Choice 1</option>
                            <option>Choice 2</option>
                            <option>Choice 3</option>
                            <option>Choice 4</option>
                            <option>Choice 5</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Dropdown Width 40%</label>
                        <div class="col-sm-7 controls">
                          <select class="width-40">
                            <option>Choice 1</option>
                            <option>Choice 2</option>
                            <option>Choice 3</option>
                            <option>Choice 4</option>
                            <option>Choice 5</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Multiple Dropdown</label>
                        <div class="col-sm-7 controls">
                          <select multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Radio Buttons</label>
                        <div class="col-sm-7 controls">
                          <div class="vd_radio radio-success">
                            <input type="radio" value="yes" name="optionyes" id="yes">
                            <label for="yes">Option one is this and that&mdash;be sure to include why it's great</label>
                          </div>
                          <div class="vd_radio radio-success">
                            <input type="radio" checked="checked" value="no" name="optionyes" id="no">
                            <label for="no">Option two can be something else and selecting it will deselect option one</label>
                          </div>

                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Radio Buttons Inline</label>
                        <div class="col-sm-7 controls">
                          <div class="vd_radio radio-success">
                            <input type="radio" name="optionsRadios2" id="optionsRadios3" value="option3" checked>
                            <label  for="optionsRadios3"> 3 </label>
                            <input type="radio" name="optionsRadios2" id="optionsRadios4" value="option4">
                            <label  for="optionsRadios4"> 4 </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Checkbox</label>
                        <div class="col-sm-7 controls">
                          <div class="vd_checkbox checkbox-success">
                            <input type="checkbox" value="1" id="checkbox-1">
                            <label for="checkbox-1"> Option one is this and that—be sure to include why it's great </label>
                          </div>
                          <div class="vd_checkbox check-success">
                            <input type="checkbox" value="1" id="checkbox-2">
                            <label for="checkbox-2"> Option one is this and that—be sure to include why it's great </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Checkbox Inline</label>
                        <div class="col-sm-7 controls">
                          <div class="vd_checkbox checkbox-danger">
                            <input type="checkbox" value="1" id="checkbox-3">
                            <label for="checkbox-3"> 3 </label>
                            <input type="checkbox" value="2" id="checkbox-4">
                            <label for="checkbox-4"> 4 </label>
                            <input type="checkbox" value="3" id="checkbox-5">
                            <label for="checkbox-5"> 5 </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Default File Upload</label>
                        <div class="col-sm-7 controls">
                          <input type="file">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Textarea Width 10%</label>
                        <div class="col-sm-7 controls">
                          <textarea rows="3"  class="width-10"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Textarea Width 30%</label>
                        <div class="col-sm-7 controls">
                          <textarea rows="3" class="width-30"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Textarea Width 50%</label>
                        <div class="col-sm-7 controls">
                          <textarea rows="3" class="width-50"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Textarea Width 70%</label>
                        <div class="col-sm-7 controls">
                          <textarea rows="3" class="width-70"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-4 control-label">Textarea Width 90%</label>
                        <div class="col-sm-7 controls">
                          <textarea rows="3" class="width-90"></textarea>
                        </div>
                      </div>
                      <div class="form-group form-actions">
                        <div class="col-sm-4"> </div>
                        <div class="col-sm-7">
                          <button class="btn vd_btn vd_bg-green vd_white" type="submit"><i class="icon-ok"></i> Save</button>
                          <button class="btn vd_btn" type="button">Cancel</button>
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
            
            <div class="row" id="advanced-input">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-bar-chart-o"></i> </span> Advanced Input </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Input with Top Tooltip</label>
                        <div class="col-sm-7 controls">
                          <input class="width-70" type="text" placeholder="Input" data-toggle="tooltip" data-placement="top" data-original-title="Insert your input tips here">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Input with Right Tooltip</label>
                        <div class="col-sm-7 controls">
                          <input class="width-70" type="text" placeholder="Input" data-rel="tooltip-right" data-original-title="Insert your input tips here">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Action Left</label>
                        <div class="col-sm-5 controls">
                          <div class="input-group">
                            <div class="input-group-btn">
                              <button type="button" class="btn dropdown-toggle vd_bg-yellow vd_white" data-toggle="dropdown">Action <i class="fa fa-caret-down fa-fw"></i></button>
                              <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                              </ul>
                            </div>
                            <!-- /btn-group -->
                            <input type="text">
                          </div>
                          <!-- /input-group --> 
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Action Right</label>
                        <div class="col-sm-5 controls">
                          <div class="input-group">
                            <input type="text">
                            <div class="input-group-btn">
                              <button type="button" class="btn dropdown-toggle vd_bg-red vd_white" data-toggle="dropdown">Action <i class="fa fa-caret-down fa-fw"></i></button>
                              <ul class="dropdown-menu pull-right">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                              </ul>
                            </div>
                            <!-- /btn-group --> 
                          </div>
                          <!-- /input-group --> 
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Tags Input</label>
                        <div class="col-sm-7 controls">
                          <input  type="text" class="tags" data-rel="tags-input" value="foo,bar,baz,roffle" />
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
            
            <div class="row" id="auto-complete-input">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-bar-chart-o"></i> </span> Auto Complete Input </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Normal</label>
                        <div class="col-sm-7 controls">
                          <input class="width-70" type="text" placeholder="Try typing 'a'" id="normal-autocomplete">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Category</label>
                        <div class="col-sm-7 controls">
                          <input class="width-70" type="text" placeholder="Try typing 'a'" id="category-autocomplete">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">With Image</label>
                        <div class="col-sm-7 controls">
                          <input class="width-70" type="text" placeholder="Try typing 'a'" id="image-autocomplete">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Multiple Values</label>
                        <div class="col-sm-7 controls">
                          <input class="width-70" type="text" placeholder="Try typing 'a'" id="multiple-autocomplete">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Auto Complete Tags Input</label>
                        <div class="col-sm-7 controls">
                          <input id="input-autocomplete"  type="text" class="tags"  value="foo,bar,baz,roffle" />
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
            
            <div class="row" id="switch-input">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-adjust"></i> </span> Switch Input </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Switch Button Size</label>
                        <div class="col-sm-10 controls">

                          
	                        <input type="checkbox" data-rel="switch" data-size="mini" data-wrapper-class="yellow" checked>
	                        <input class="mgr-10"  type="checkbox" data-rel="switch" data-size="small" data-wrapper-class="blue" checked>
                        	<input class="mgr-10"  type="checkbox" data-rel="switch" checked>
                        	<input class="mgr-10"  type="checkbox" data-rel="switch" data-size="large" data-wrapper-class="red" checked>
           

                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Switch Button Inverse Color</label>
                        <div class="col-sm-10 controls">
							<input  type="checkbox" data-rel="switch" data-wrapper-class="inverse" checked>                        
                        	<input  type="checkbox" data-rel="switch" data-wrapper-class=["inverse","blue"]  checked>
							<input  type="checkbox" data-rel="switch" data-wrapper-class=["inverse","red"] checked>
							<input  type="checkbox" data-rel="switch" data-wrapper-class=["inverse","yellow"] checked>

                            
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Text Variation</label>
                        <div class="col-sm-10 controls">
                          <input  type="checkbox" data-rel="switch" data-wrapper-class="inverse" data-on-text="OK" data-off-text="NO"  checked>  
                          <input  type="checkbox" data-rel="switch" data-wrapper-class="inverse" data-on-text="<i class='fa fa-check'></i>" data-off-text="<i class='fa fa-times'></i>"  checked> 

                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Disabled</label>
                        <div class="col-sm-10 controls">
                          <input  type="checkbox" data-rel="switch" data-wrapper-class="inverse" data-on-text="OK" data-off-text="NO"  checked disabled> 
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
            
            <div class="row" id="date-input">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-calendar"></i> </span> Date Input </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Date Calendar</label>
                        <div class="col-sm-5 controls">
                          <input type="text" id="datepicker-normal" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Date Multiple</label>
                        <div class="col-sm-5 controls">
                          <input type="text" id="datepicker-multiple" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Date Range</label>
                        <div class="col-sm-2 controls">
                          <input type="text" id="datepicker-from" />
                        </div>
                        <div class="col-sm-1 controls text-center"> to </div>
                        <div class="col-sm-2 controls">
                          <input type="text" id="datepicker-to" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Icon Trigger</label>
                        <div class="col-sm-3 controls">
                          <div class="input-group">
                            <input type="text" placeholder="Date" id="datepicker-icon">
                            <span class="input-group-addon" id="datepicker-icon-trigger" data-datepicker="#datepicker-icon"><i class="fa fa-calendar"></i></span> </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Restrict Date Range</label>
                        <div class="col-sm-3 controls">
                          <input type="text" placeholder="Date" id="datepicker-restrict">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Date Widget</label>
                        <div class="col-sm-3 controls">
                          <div id="datepicker-widget"> </div>
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
            
            <div class="row" id="bootstrap-date">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-calendar"></i> </span> Bootstrap DateRangePicker </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Pre-defined Ranges</label>
                        <div class="col-sm-3 controls">
                          <input type="text" placeholder="Date" id="datepicker-daterangepicker">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Date & Time Picker </label>
                        <div class="col-sm-3 controls">
                          <input type="text" placeholder="Date" id="datepicker-datetime">
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
            
            <div class="row" id="bootstrap-time">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-clock-o"></i> </span> Bootstrap TimePicker </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Default TimePicker</label>
                        <div class="col-sm-3 controls">
                          <div class="input-group bootstrap-timepicker">
                            <input type="text" placeholder="Date" id="timepicker-default">
                            <span class="input-group-addon" id="timepicker-default-span"><i class="fa fa-clock-o"></i></span> </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">24 Hours TimePicker </label>
                        <div class="col-sm-3 controls">
                          <div class="input-group boostrap-timepicker input-border">
                            <input type="text" placeholder="time" id="timepicker-full" class="width-80 no-bd ">
                            <span id="timepicker-full-span" class="input-group-addon no-bd no-bg"><i class="fa fa-clock-o"></i></span> </div>
                          <span class="help-inline">Push up and down arrow.</span> </div>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 --> 
            </div>
            <!-- row -->
            
            <div class="row" id="color-pickers">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-flask"></i> </span> Color Pickers </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Colorpicker Hex</label>
                        <div class="col-sm-3 controls">
                          <div class="input-group">
                            <input type="text" placeholder="Color" id="colorpicker-hex">
                            <span class="input-group-addon color-input vd_hover"><i class="fa fa-square"></i></span> </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">Colorpicker RGB</label>
                        <div class="col-sm-3 controls">
                          <div class="input-group input-border">
                            <input type="text" placeholder="Color" id="colorpicker-rgba" class="no-bd">
                            <span class="input-group-addon color-input no-bd no-bg vd_hover"><i class="fa fa-square"></i></span> </div>
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
            
            <div class="row" id="ck-editor">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-pencil"></i> </span> CK Editor </h3>
                  </div>
                  <div class="panel-body-list">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="form-group">
                        <div class="col-sm-12 controls">
                          <textarea name="editor1" data-rel="ckeditor" rows="3" ></textarea>
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
            
            <div class="row" id="html5-editor">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-pencil"></i> </span> Wysiwyg HTML 5 Editor </h3>
                  </div>
                  <div class="panel-body">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="form-group">
                        <div class="col-sm-12 controls">
                          <textarea id="wysiwyghtml" class="width-100 form-control"  rows="15" placeholder="Write your message here"></textarea>
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
            
            <div class="row" id="file-upload">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-cloud-upload"></i> </span> File Upload </h3>
                  </div>
                  <div class="panel-body">
                    <h1>jQuery File Upload Demo</h1>
                    <h2 class="lead">Basic Plus version</h2>
                    <br>
                    <blockquote> File Upload widget with multiple file selection, drag&amp;drop support, progress bar, validation and preview images, audio and video for jQuery.<br>
                      Supports cross-domain, chunked and resumable file uploads and client-side image resizing.<br>
                      Works with any server-side platform (PHP, Python, Ruby on Rails, Java, Node.js, Go etc.) that supports standard HTML form file uploads. </blockquote>
                    <br>
                    <!-- The fileinput-button span is used to style the file input field as button --> 
                    <span class="btn vd_btn vd_bg-green fileinput-button"> <i class="glyphicon glyphicon-plus"></i> <span>Add files...</span> 
                    <!-- The file input field used as target for the file upload widget -->
                    <input id="fileupload" type="file" name="files[]" multiple>
                    </span> <br>
                    <br>
                    <!-- The global progress bar -->
                    <div id="progress" class="progress">
                      <div class="progress-bar progress-bar-success"></div>
                    </div>
                    <!-- The container for the uploaded files -->
                    <div id="files" class="files"></div>
                    <br>
                  </div>
                </div>
                <!-- Panel Widget -->
                
                <div class="panel panel-default">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title">Demo Notes</h3>
                  </div>
                  <div class="panel-body">
                    <ul>
                      <li>The maximum file size for uploads in this demo is <strong>5 MB</strong> (default file size is unlimited).</li>
                      <li>Only image files (<strong>JPG, GIF, PNG</strong>) are allowed in this demo (by default there is no file type restriction).</li>
                      <li>Uploaded files will be deleted automatically after <strong>5 minutes</strong> (demo setting).</li>
                      <li>You can <strong>drag &amp; drop</strong> files from your desktop on this webpage (see <a href="https://github.com/blueimp/jQuery-File-Upload/wiki/Browser-support">Browser support</a>).</li>
                      <li>Please refer to the <a href="https://github.com/blueimp/jQuery-File-Upload">project website</a> and <a href="https://github.com/blueimp/jQuery-File-Upload/wiki">documentation</a> for more information.</li>
                      <li>Built with Twitter's <a href="http://twitter.github.com/bootstrap/">Bootstrap</a> CSS framework and Icons from <a href="http://glyphicons.com/">Glyphicons</a>.</li>
                    </ul>
                  </div>
                </div>
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
<?php include('templates/scripts/forms-elements.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>