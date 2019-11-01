<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'UI Elements Buttons - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'UI Elements Buttons - Responsive Admin HTML Template'; ?>
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
                <li class="active">Buttons</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Buttons</h1>
              <small class="subtitle">Button Variations</small> </div>
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
                        <h3> Bootstrap <span class="font-semibold">Button</span> </h3>
                        <p> Original Bootstrap button<br/>
                          <br/>
                        </p>
                        <div class="mgbt-xs-10"> 
                          <!-- Standard gray button with gradient -->
                          <button class="btn btn-default" type="button">Default</button>
                          <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
                          <button class="btn btn-primary" type="button">Primary</button>
                          <!-- Indicates a successful or positive action -->
                          <button class="btn btn-success" type="button">Success</button>
                          <!-- Contextual button for informational alert messages --> 
                        </div>
                        <div class="mgbt-xs-10">
                          <button class="btn btn-info" type="button">Info</button>
                          <!-- Indicates caution should be taken with this action -->
                          <button class="btn btn-warning" type="button">Warning</button>
                          <!-- Indicates a dangerous or potentially negative action -->
                          <button class="btn btn-danger" type="button">Danger</button>
                        </div>
                        <div class="mgbt-xs-10"> 
                          <!-- Indicates a dangerous or potentially negative action -->
                          <button class="btn btn-white" type="button">White</button>
                          <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
                          <button class="btn btn-link" type="button">Link</button>
                        </div>
                        <br/>
                        <h3 class="mgbt-xs-20"> 3D <span class="font-semibold">Button</span> </h3>
                        <p>Add class <code>vd_btn-bevel</code> to <code>vd_btn</code> class</p>
                        <div class="mgbt-xs-10"> 
                          <a class="btn vd_btn vd_btn-bevel vd_bg-green font-semibold" href="pages-register.php">Register</a>
                          <a class="btn vd_btn vd_btn-bevel vd_bg-yellow font-semibold" href="pages-register.php">Login</a>
                        </div>  
                        <div class="mgbt-xs-10"> 
                          <a class="btn vd_btn vd_btn-bevel vd_bg-red font-semibold" href="pages-register.php">Forget Password</a>
                          <a class="btn vd_btn vd_btn-bevel vd_bg-blue font-semibold" href="pages-register.php">Email Us</a>                      
                        </div>  
                        
                      </div>
                      <div class="col-sm-4">
                        <h3> Vendroid <span class="font-semibold">Button</span> </h3>
                        <p> Bootstrap button with slight modification to fit vendroid theme.<br/>
                          <br/>
                        </p>
                        <div class="mgbt-xs-10"> 
                          <!-- Standard gray button with gradient -->
                          <button class="btn vd_btn vd_bg-green" type="button">Green</button>
                          <button class="btn vd_btn vd_bg-yellow" type="button">Yellow</button>
                          <button class="btn vd_btn vd_bg-red" type="button">Red</button>
                        </div>
                        <div class="mgbt-xs-10">
                          <button class="btn vd_btn vd_bg-blue" type="button">Blue</button>
                          <button class="btn vd_btn vd_bg-grey" type="button">Grey</button>
                          <button class="btn vd_btn vd_bg-black" type="button">Black</button>
                        </div>                        
                        <div class="mgbt-xs-20">
                          <button class="btn vd_btn vd_bg-facebook" type="button">Facebook</button>
                          <button class="btn vd_btn vd_bg-twitter" type="button">Twitter</button>
                          <button class="btn vd_btn vd_bg-linkedin" type="button">LinkedIn</button>
                          <button class="btn vd_btn vd_bg-googleplus" type="button">Googleplus</button>
                        </div>
                        <br/>
                        <h3 class="mgbt-xs-20"> Circle <span class="font-semibold">Button</span> </h3>
 						<div class="mgbt-xs-10">
                        	<div class="mgbt-xs-10">
                                <a class="btn vd_btn vd_round-btn btn-xs vd_bg-facebook mgr-10"><i class="fa fa-facebook fa-fw "></i></a>
                                <a class="btn vd_btn vd_round-btn btn-sm vd_bg-googleplus mgr-10"><i class="fa fa-google-plus fa-fw"></i></a>
                                <a class="btn vd_btn vd_round-btn vd_bg-twitter mgr-10"><i class="fa fa-twitter fa-fw "></i></a> 
                                <a class="btn vd_btn vd_round-btn btn-lg vd_bg-linkedin mgr-10"><i class="fa fa-linkedin fa-fw "></i></a> 
                            </div>
                            <div>
                                <a class="btn vd_btn vd_round-btn vd_bg-red mgr-10"><i class="fa fa-picture-o fa-fw "></i></a>
                                <a class="btn vd_btn vd_round-btn vd_bg-green mgr-10"><i class="fa fa-plus fa-fw"></i></a>
                                <a class="btn vd_btn vd_round-btn vd_bg-blue mgr-10"><i class="fa fa-map-marker fa-fw "></i></a> 
                                <a class="btn vd_btn vd_round-btn vd_bg-yellow mgr-10"><i class="fa  fa-shopping-cart fa-fw "></i></a> 
                                <a class="btn vd_btn vd_round-btn vd_bg-grey mgr-10"><i class="fa  fa-headphones fa-fw "></i></a>
                                <a class="btn vd_btn vd_round-btn vd_bg-black mgr-10"><i class="fa  fa-cloud-download fa-fw "></i></a>
                                                                                                                           
                            </div>                   
                		</div>                       
                      </div>
                      <div class="col-sm-4">
                        <h3> Button <span class="font-semibold">Disabled</span> </h3>
                        <p>Add the <code>disabled</code> attribute to <code>&lt;button&gt;</code> buttons.<br />
                          <br />
                        </p>
                        <div class="mgbt-xs-10"> 
                          <!-- Standard gray button with gradient -->
                          <button class="btn vd_btn vd_bg-green disabled" type="button">Green</button>
                          <button class="btn vd_btn vd_bg-yellow disabled" type="button">Yellow</button>
                          <button class="btn vd_btn vd_bg-red disabled" type="button">Red</button>
                        </div>
                        <div class="mgbt-xs-10">
                          <button class="btn vd_btn vd_bg-blue disabled" type="button">Blue</button>
                          <button class="btn vd_btn vd_bg-grey disabled" type="button">Grey</button>
                          <button class="btn vd_btn vd_bg-black disabled" type="button">Black</button>
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
              <div class="col-sm-6">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <h3> Button <span class="font-semibold">Size</span> </h3>
                    <p>Fancy larger or smaller buttons? Add <code>.btn-lg</code>, <code>.btn-sm</code>, or <code>.btn-xs</code> for additional sizes.</p>
                    <div class="mgbt-xs-10">
                      <button type="button" class="btn vd_btn vd_bg-green btn-lg">Large Button</button>
                    </div>
                    <div class="mgbt-xs-10">
                      <button type="button" class="btn vd_btn vd_bg-green">Medium Button</button>
                    </div>
                    <div class="mgbt-xs-10">
                      <button type="button" class="btn vd_btn vd_bg-green btn-sm">Small Button</button>
                    </div>
                    <div class="mgbt-xs-10">
                      <button type="button" class="btn vd_btn vd_bg-green btn-xs">XS Button</button>
                    </div>
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel --> 
              </div>
              <div class="col-sm-6">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <h3> Button <span class="font-semibold">Block</span> </h3>
                    <p> Button with variation of sizes. </p>
                    <div class="mgbt-xs-10">
                      <button type="button" class="btn vd_btn vd_bg-green btn-lg btn-block">Large Button</button>
                    </div>
                    <div class="mgbt-xs-10">
                      <button type="button" class="btn vd_btn vd_bg-facebook btn-block"><span class="append-icon"><i class="fa fa-facebook fa-fw"></i></span>Log in using Facebook</button>
                    </div>
                    <div class="mgbt-xs-10">
                      <button type="button" class="btn vd_btn vd_bg-twitter btn-sm btn-block"><span class="append-icon"><i class="fa fa-twitter fa-fw"></i></span>or using Twitter</button>
                    </div>
                    <div class="mgbt-xs-10">
                      <button type="button" class="btn vd_btn vd_bg-red btn-xs btn-block">XS Button</button>
                    </div>
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel --> 
              </div>
            </div>
            <!-- row -->
            
            <div class="row">
              <div class="col-sm-4">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <h3> Single Button <span class="font-semibold">Dropdown</span> </h3>
                    <p> Button with dropdown function </p>
                    <div class="btn-group">
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> Action <i class="fa fa-caret-down prepend-icon"></i> </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <div class="btn-group">
                      <button type="button" class="btn vd_btn vd_bg-red dropdown-toggle" data-toggle="dropdown"> Action <i class="fa fa-caret-down prepend-icon"></i> </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <div class="btn-group">
                      <button type="button" class="btn vd_btn vd_bg-green dropdown-toggle" data-toggle="dropdown"> Action <i class="fa fa-caret-down prepend-icon"></i> </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel --> 
              </div>
              <div class="col-sm-4">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <h3> Separate Button <span class="font-semibold">Dropdown</span> </h3>
                    <p> Dropdown button with separation. </p>
                    <div class="btn-group">
                      <button type="button" class="btn btn-default">Default</button>
                      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <!-- /btn-group -->
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary">Primary</button>
                      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <!-- /btn-group -->
                    <div class="btn-group">
                      <button type="button" class="btn vd_btn vd_bg-green">Info</button>
                      <button type="button" class="btn vd_btn vd_bg-green dropdown-toggle" data-toggle="dropdown"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <!-- /btn-group --> 
                    
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel --> 
              </div>
              <div class="col-sm-4">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <h3> Button <span class="font-semibold">Dropup</span> </h3>
                    <p> Dropdown button variation: dropup. </p>
                    <div class="btn-group dropup">
                      <button type="button" class="btn btn-warning">Default</button>
                      <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <!-- /btn-group -->
                    <div class="btn-group dropup">
                      <button type="button" class="btn btn-danger">Primary</button>
                      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <!-- /btn-group -->
                    <div class="btn-group dropup">
                      <button type="button" class="btn vd_btn vd_bg-black">Info</button>
                      <button type="button" class="btn vd_btn vd_bg-black dropdown-toggle" data-toggle="dropdown"> <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span> </button>
                      <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <!-- /btn-group --> 
                    
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel --> 
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?>  
                  </div>
                  <div class="panel-body">
                    <h3> Button <span class="font-semibold">Group</span> </h3>
                    <p>Group a series of buttons together on a single line with the button group.</p>
                    <div class="btn-group btn-group-lg mgbt-xs-5">
                      <button type="button" class="btn btn-default">Left</button>
                      <button type="button" class="btn btn-default">Middle</button>
                      <button type="button" class="btn btn-default">Right</button>
                    </div>
                    <br/>
                    <div class="btn-group mgbt-xs-5">
                      <button type="button" class="btn vd_btn vd_bg-green"><i class="fa fa-align-left"></i></button>
                      <button type="button" class="btn vd_btn vd_bg-grey"><i class="fa fa-align-center"></i></button>
                      <button type="button" class="btn vd_btn vd_bg-green"><i class="fa fa-align-right"></i></button>
                    </div>
                    <br/>
                    <div class="btn-group btn-group-sm  mgbt-xs-5">
                      <button type="button" class="btn btn-default">1</button>
                      <button type="button" class="btn btn-default">2</button>
                      <button type="button" class="btn btn-default">3</button>
                    </div>
                    <br/>
                    <div class="btn-group btn-group-xs">
                      <button type="button" class="btn btn-default">A</button>
                      <button type="button" class="btn btn-default">B</button>
                      <div class="btn-group  btn-group-xs">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"> Dropdown <span class="caret"></span> </button>
                        <ul class="dropdown-menu">
                          <li><a href="#">Dropdown link</a></li>
                          <li><a href="#">Dropdown link</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel --> 
              </div>
              <div class="col-sm-4">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <h3> Vertical <span class="font-semibold">Group Button</span> </h3>
                    <p>Make a set of buttons appear vertically stacked rather than horizontally.</p>
                    <div class="btn-group-vertical">
                      <button class="btn btn-default" type="button">Button</button>
                      <button class="btn btn-default" type="button">Button</button>
                      <div class="btn-group">
                        <button data-toggle="dropdown" class="btn btn-default dropdown-toggle" type="button" id="btnGroupVerticalDrop1"> Dropdown <span class="caret"></span> </button>
                        <ul aria-labelledby="btnGroupVerticalDrop1" role="menu" class="dropdown-menu">
                          <li><a href="#">Dropdown link</a></li>
                          <li><a href="#">Dropdown link</a></li>
                        </ul>
                      </div>
                      <button class="btn btn-default" type="button">Button</button>
                      <button class="btn btn-default" type="button">Button</button>
                      <div class="btn-group">
                        <button data-toggle="dropdown" class="btn btn-default dropdown-toggle" type="button" id="btnGroupVerticalDrop2"> Dropdown <span class="caret"></span> </button>
                        <ul aria-labelledby="btnGroupVerticalDrop2" role="menu" class="dropdown-menu">
                          <li><a href="#">Dropdown link</a></li>
                          <li><a href="#">Dropdown link</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel --> 
              </div>
              <div class="col-sm-4">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?>  
                  </div>
                  <div class="panel-body">
                    <h3> Justified Link <span class="font-semibold">Variation</span> </h3>
                    <p>Make a group of buttons stretch at the same size to span the entire width of its parent. Also works with button dropdowns within the button group.</p>
                    <div class="btn-group btn-group-justified mgbt-xs-20"> <a role="button" class="btn btn-default">Left</a> <a role="button" class="btn btn-default">Middle</a> <a role="button" class="btn btn-default">Right</a> </div>
                    <br/>
                    <h3> Button <span class="font-semibold">Toolbar</span> </h3>
                    <p>Combine sets of <code>&lt;div class="btn-group"&gt;</code> into a <code>&lt;div class="btn-toolbar"&gt;</code> for more complex components.</p>
                    <div  role="toolbar" class="btn-toolbar mgbt-xs-20">
                      <div class="btn-group">
                        <button class="btn btn-default" type="button">1</button>
                        <button class="btn btn-default" type="button">2</button>
                        <button class="btn btn-default" type="button">3</button>
                        <button class="btn btn-default" type="button">4</button>
                      </div>
                      <div class="btn-group">
                        <button class="btn btn-default" type="button">5</button>
                        <button class="btn btn-default" type="button">6</button>
                        <button class="btn btn-default" type="button">7</button>
                      </div>
                      <div class="btn-group">
                        <button class="btn btn-default" type="button">8</button>
                      </div>
                    </div>
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- panel --> 
              </div>
            </div>
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