<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'UI Elements Tabs and Accordion - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'UI Elements Tabs and Accordion - Responsive Admin HTML Template'; ?>
<?php $page = 'ui';   // To set active on the same id of primary menu ?>
<?php $specific_css[0] = 'plugins/tabdrop/css/tabdrop.css';   ?>


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
                <li class="active">Tabs &amp; Accordion</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>UI Tabs &amp; Accordion</h1>
              <small class="subtitle">Tabs &amp; Accordion Variations</small> </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-6">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-magic"></i> </span> UI Tab </h3>
                  </div>
                  <div class="panel-body">
                    <h2>Nav <span class="font-semibold">Tabs</span></h2>
                    <ul class="nav nav-tabs">
                      <li class="active"><a href="#tab1" data-toggle="tab">Home</a></li>
                      <li><a href="#tab2" data-toggle="tab">Profile</a></li>
                      <li><a href="#tab3" data-toggle="tab">Messages</a></li>
                      <li class="dropdown"> <a href="#" data-toggle="dropdown" class="dropdown-toggle"> Dropdown <span class="caret"></span> </a>
                        <ul role="menu" class="dropdown-menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li class="divider"></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>
                      </li>
                      <li class="disabled"><a>Disabled</a></li>
                    </ul>     
                    <br/>               
                    <div class="tab-content mgbt-xs-20">
                      <div class="tab-pane active" id="tab1"> Tab 1 </div>
                      <div class="tab-pane" id="tab2"> Tab 2 </div>
                      <div class="tab-pane" id="tab3"> Tab 3 </div>
                      <div class="tab-pane" id="tab4"> Tab 4 </div>
                      <div class="tab-pane" id="tab5"> Tab 5 </div>
                    </div>
                    <br/><br/>
                    
                    
                    
                    <h2>Nav Tabs <span class="font-semibold">Justified</span></h2>
                    <ul class="nav nav-tabs nav-justified">
                      <li class="active"><a href="#tab21" data-toggle="tab">Home</a></li>
                      <li><a href="#tab22" data-toggle="tab">Profile</a></li>
                      <li><a href="#tab23" data-toggle="tab">Messages</a></li>
                      <li class="dropdown"> <a href="#" data-toggle="dropdown" class="dropdown-toggle"> Dropdown <span class="caret"></span> </a>
                        <ul role="menu" class="dropdown-menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li class="divider"></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>
                      </li>
                      <li class="disabled"><a>Disabled</a></li>
                    </ul>
                    <br/>
                    <div class="tab-content  mgbt-xs-20">
                      <div class="tab-pane active" id="tab21"> Tab 1 </div>
                      <div class="tab-pane" id="tab22"> Tab 2 </div>
                      <div class="tab-pane" id="tab23"> Tab 3 </div>
                      <div class="tab-pane" id="tab24"> Tab 4 </div>
                      <div class="tab-pane" id="tab25"> Tab 5 </div>
                    </div>
                    <br/><br/>
                    
                    
                    
                    <h2>Nav <span class="font-semibold">Pills</span></h2>
                    <ul class="nav nav-pills">
                      <li class="active"><a href="#tab31" data-toggle="tab">Home</a></li>
                      <li><a href="#tab32" data-toggle="tab">Profile</a></li>
                      <li><a href="#tab33" data-toggle="tab">Messages</a></li>
                      <li class="dropdown"> <a href="#" data-toggle="dropdown" class="dropdown-toggle"> Dropdown <span class="caret"></span> </a>
                        <ul role="menu" class="dropdown-menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li class="divider"></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>
                      </li>
                      <li class="disabled"><a>Disabled</a></li>
                    </ul>
                    <br/>
                    <div class="tab-content  mgbt-xs-20">
                      <div class="tab-pane active" id="tab31"> Tab 1 </div>
                      <div class="tab-pane" id="tab32"> Tab 2 </div>
                      <div class="tab-pane" id="tab33"> Tab 3 </div>
                      <div class="tab-pane" id="tab34"> Tab 4 </div>
                      <div class="tab-pane" id="tab35"> Tab 5 </div>
                    </div>
                    <br/><br/>
                    
                    
                    
                    <h2>Nav Pills <span class="font-semibold">Justified</span></h2>
                    <ul class="nav nav-pills nav-justified">
                      <li class="active"><a href="#tab41" data-toggle="tab">Home</a></li>
                      <li><a href="#tab42" data-toggle="tab">Profile</a></li>
                      <li><a href="#tab43" data-toggle="tab">Messages</a></li>
                      <li class="dropdown"> <a href="#" data-toggle="dropdown" class="dropdown-toggle"> Dropdown <span class="caret"></span> </a>
                        <ul role="menu" class="dropdown-menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li class="divider"></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>
                      </li>
                      <li class="disabled"><a>Disabled</a></li>
                    </ul>
                    <br/>
                    <div class="tab-content  mgbt-xs-20">
                      <div class="tab-pane active" id="tab41"> Tab 1 </div>
                      <div class="tab-pane" id="tab42"> Tab 2 </div>
                      <div class="tab-pane" id="tab43"> Tab 3 </div>
                      <div class="tab-pane" id="tab44"> Tab 4 </div>
                      <div class="tab-pane" id="tab45"> Tab 5 </div>
                    </div>
                    <br/><br/>
                    
                    
                    
                    <h2>Nav Pills <span class="font-semibold">Vertical</span></h2>
                    <div class="row">
                      <div class="col-sm-3">
                        <ul class="nav nav-pills nav-stacked">
                          <li class="active"><a href="#tab51" data-toggle="tab">Home</a></li>
                          <li><a href="#tab52" data-toggle="tab">Profile</a></li>
                          <li><a href="#tab53" data-toggle="tab">Messages</a></li>
                          <li class="dropdown"> <a href="#" data-toggle="dropdown" class="dropdown-toggle"> Dropdown <span class="caret"></span> </a>
                            <ul role="menu" class="dropdown-menu">
                              <li><a href="#">Action</a></li>
                              <li><a href="#">Another action</a></li>
                              <li><a href="#">Something else here</a></li>
                              <li class="divider"></li>
                              <li><a href="#">Separated link</a></li>
                            </ul>
                          </li>
                          <li class="disabled"><a>Disabled</a></li>
                        </ul>
                      </div>                      
                      <div class="col-sm-9">
                        <div class="tab-content  mgbt-xs-20">
                          <div class="tab-pane active" id="tab51"> Tab 1 </div>
                          <div class="tab-pane" id="tab52"> Tab 2 </div>
                          <div class="tab-pane" id="tab53"> Tab 3 </div>
                          <div class="tab-pane" id="tab54"> Tab 4 </div>
                          <div class="tab-pane" id="tab55"> Tab 5 </div>
                        </div>
                      </div>
                    </div>
                    <br/><br/>
                    
                    <h2>Nav Tab <span class="font-semibold">Alternative</span></h2>
                    <div class="tabs">
                      <ul class="nav nav-tabs widget">
                        <li class="active"> <a href="#home-tab" data-toggle="tab"> <span class="menu-icon"><i class="fa fa-comments"></i></span> Recent Reviews <span class="menu-active"><i class="fa fa-caret-up"></i></span> </a></li>
                        <li> <a href="#posts-tab" data-toggle="tab"> <span class="menu-icon"><i class="fa fa-rocket"></i></span> Activities <span class="menu-active"><i class="fa fa-caret-up"></i></span> </a></li>
                        <li> <a href="#list-tab" data-toggle="tab"> <span class="menu-icon"><i class="fa fa-user"></i></span> New Users <span class="menu-active"><i class="fa fa-caret-up"></i></span> </a></li>
                      </ul>
                      <div class="tab-content  mgbt-xs-20">
                        <div class="tab-pane active" id="home-tab"> Tab 1 </div>
                        <div class="tab-pane" id="posts-tab"> Tab 2 </div>
                        <div class="tab-pane" id="list-tab"> Tab 3 </div>
                      </div>
                    </div>
                    <br/><br/>
                    
                    <h2>Using <span class="font-semibold">TabDrop Plugins</span></h2>
                    <ul id="tabdrop" class="nav nav-pills">
                      <li class="active"><a href="#tabdrop1" data-toggle="tab">Section 1</a></li>
                      <li><a href="#tabdrop2" data-toggle="tab">Section 2</a></li>
                      <li><a href="#tabdrop3" data-toggle="tab">Section 3</a></li>
                      <li><a href="#tabdrop4" data-toggle="tab">Section 4</a></li>
                      <li><a href="#tabdrop5" data-toggle="tab">Section 5</a></li>
                      <li><a href="#tabdrop6" data-toggle="tab">Section 6</a></li>
                      <li><a href="#tabdrop7" data-toggle="tab">Section 7</a></li>
                      <li><a href="#tabdrop8" data-toggle="tab">Section 8</a></li>
                      <li><a href="#tabdrop9" data-toggle="tab">Section 9</a></li>
                      <li><a href="#tabdrop10" data-toggle="tab">Section 10</a></li>
                                                                                                                                                          
                    </ul>
                    <br/>
                    <div class="tab-content  mgbt-xs-20">
                      <div class="tab-pane active" id="tabdrop1"> Tab 1 </div>
                      <div class="tab-pane" id="tabdrop2"> Tab 2 </div>
                      <div class="tab-pane" id="tabdrop3"> Tab 3 </div>
                      <div class="tab-pane" id="tabdrop4"> Tab 4 </div>
                      <div class="tab-pane" id="tabdrop5"> Tab 5 </div>
                      <div class="tab-pane" id="tabdrop6"> Tab 6 </div>
                      <div class="tab-pane" id="tabdrop7"> Tab 7 </div>
                      <div class="tab-pane" id="tabdrop8"> Tab 8 </div>
                      <div class="tab-pane" id="tabdrop9"> Tab 9 </div>
                      <div class="tab-pane" id="tabdrop10"> Tab 10 </div>
                                            
                    </div>
                    <br/><br/>                    
                    
                  </div>
                </div>
                <!-- Panel Widget -->
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-magic"></i> </span> UI Accordion </h3>
                  </div>
                  <div class="panel-body">
                    <div class="panel-group" id="accordion">
                      <div class="panel panel-default">
                        <div class="panel-heading vd_bg-green vd_bd-green">
                          <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"> Collapsible Group Item #1 </a> </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in">
                          <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading vd_bg-yellow">
                          <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"> Collapsible Group Item #2 </a> </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                          <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                        </div>
                      </div>
                      <div class="panel panel-default">
                        <div class="panel-heading vd_bg-blue">
                          <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"> Collapsible Group Item #3 </a> </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse">
                          <div class="panel-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- col-md-6 -->
              <div class="col-md-6">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-magic"></i> </span> Wizard Tab </h3>
                  </div>
                  <div class="panel-body">
                    <div class="form-wizard mgbt-xs-20">
                      <h2> Wizard <span class="font-semibold">Tab </span></h2>
                      <ul class="nav nav-pills nav-justified">
                        <li class="active"><a data-toggle="tab" href="#tab61">
                          <div class="menu-icon"> 1 </div>
                          User Profile </a></li>
                        <li><a data-toggle="tab" href="#tab62">
                          <div class="menu-icon"> 2 </div>
                          Address Information </a></li>
                        <li><a data-toggle="tab" href="#tab63">
                          <div class="menu-icon"> 3 </div>
                          Contact Detail </a></li>
                        <li><a data-toggle="tab" href="#tab64">
                          <div class="menu-icon"> 4 </div>
                          Billing Information </a></li>
                        <li><a data-toggle="tab" href="#tab65">
                          <div class="menu-icon"> 5 </div>
                          Confirm </a></li>
                      </ul>
                      <div class="tab-content  mgbt-xs-20">
                        <div class="tab-pane active" id="tab61"> Tab 1 </div>
                        <div class="tab-pane" id="tab62"> Tab 2 </div>
                        <div class="tab-pane" id="tab63"> Tab 3 </div>
                        <div class="tab-pane" id="tab64"> Tab 4 </div>
                        <div class="tab-pane" id="tab65"> Tab 5 </div>
                      </div>
                    </div>
                    <br/><br/>
                    <div class="form-wizard condensed">
                      <h2> Wizard Condensed <span class="font-semibold">Tab </span></h2>
                      <ul class="nav nav-pills nav-justified">
                        <li class="active"><a data-toggle="tab" href="#tab71">
                          <div class="menu-icon"> 1 </div>
                          User Profile </a></li>
                        <li><a data-toggle="tab" href="#tab72">
                          <div class="menu-icon"> 2 </div>
                          Address Information </a></li>
                        <li><a data-toggle="tab" href="#tab73">
                          <div class="menu-icon"> 3 </div>
                          Contact Detail </a></li>
                        <li><a data-toggle="tab" href="#tab74">
                          <div class="menu-icon"> 4 </div>
                          Billing Information </a></li>
                        <li><a data-toggle="tab" href="#tab75">
                          <div class="menu-icon"> 5 </div>
                          Confirm </a></li>
                      </ul>
                      <div class="tab-content no-bd mgbt-xs-20">
                        <div class="tab-pane active" id="tab71"> Tab 1 </div>
                        <div class="tab-pane" id="tab72"> Tab 2 </div>
                        <div class="tab-pane" id="tab73"> Tab 3 </div>
                        <div class="tab-pane" id="tab74"> Tab 4 </div>
                        <div class="tab-pane" id="tab75"> Tab 5 </div>
                      </div>
                    </div>
                    <br/><br/>
                    <div class="form-wizard condensed mgbt-xs-20">
                      <h2> Wizard Condensed <span class="font-semibold"> Vertical Tab </span></h2>
                      <div class="row">
                        <div class="col-md-3">
                          <ul class="nav nav-tabs nav-stacked">
                            <li class="active"><a data-toggle="tab" href="#tab81">
                              <div class="menu-icon"> 1 </div>
                              User Profile </a></li>
                            <li><a data-toggle="tab" href="#tab82">
                              <div class="menu-icon"> 2 </div>
                              Address Information </a></li>
                            <li><a data-toggle="tab" href="#tab83">
                              <div class="menu-icon"> 3 </div>
                              Contact Detail </a></li>
                            <li><a data-toggle="tab" href="#tab84">
                              <div class="menu-icon"> 4 </div>
                              Billing Information </a></li>
                            <li><a data-toggle="tab" href="#tab85">
                              <div class="menu-icon"> 5 </div>
                              Confirm </a></li>
                          </ul>
                        </div>
                        <div class="col-md-9">
                          <div class="tab-content no-bd mgbt-xs-20">
                            <div class="tab-pane active" id="tab81"> Tab 1 </div>
                            <div class="tab-pane" id="tab82"> Tab 2 </div>
                            <div class="tab-pane" id="tab83"> Tab 3 </div>
                            <div class="tab-pane" id="tab84"> Tab 4 </div>
                            <div class="tab-pane" id="tab85"> Tab 5 </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br/><br/>
                    <div class="form-wizard  mgbt-xs-20">
                      <h2> Wizard <span class="font-semibold"> Vertical Tab </span></h2>
                      <div class="row">
                        <div class="col-md-3">
                          <ul class="nav nav-tabs nav-stacked">
                            <li class="active"><a data-toggle="tab" href="#tab91">
                              <div class="menu-icon"> 1 </div>
                              User Profile </a></li>
                            <li><a data-toggle="tab" href="#tab92">
                              <div class="menu-icon"> 2 </div>
                              Address Information </a></li>
                            <li><a data-toggle="tab" href="#tab93">
                              <div class="menu-icon"> 3 </div>
                              Contact Detail </a></li>
                            <li><a data-toggle="tab" href="#tab94">
                              <div class="menu-icon"> 4 </div>
                              Billing Information </a></li>
                            <li><a data-toggle="tab" href="#tab95">
                              <div class="menu-icon"> 5 </div>
                              Confirm </a></li>
                          </ul>
                        </div>
                        <div class="col-md-9">
                          <div class="tab-content no-bd mgbt-xs-20">
                            <div class="tab-pane active" id="tab91"> Tab 1 </div>
                            <div class="tab-pane" id="tab92"> Tab 2 </div>
                            <div class="tab-pane" id="tab93"> Tab 3 </div>
                            <div class="tab-pane" id="tab94"> Tab 4 </div>
                            <div class="tab-pane" id="tab95"> Tab 5 </div>
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
<script type="text/javascript" src="plugins/tabdrop/js/bootstrap-tabdrop.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	"use strict";
	$("#tabdrop").tabdrop({text: "<i class='icon-list2 font-sm'></i>"});
	
});
</script>
<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>