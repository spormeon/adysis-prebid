<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Custom Product Form HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Custom Product Form - Responsive Admin HTML Template'; ?>
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
                <li class="active">Custom Products Form</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Custom Product Form</h1>
              <small class="subtitle">Form for input any custom product, suited for hosting and custom pc/laptop ,etc.</small> </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-8">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-green">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-magic"></i> </span> Select Custom Products </h3>
                  </div>
                  <div id="wizard-1" class="panel-body vd_custom-product form-wizard">
                    <form class="form-horizontal" action="#" role="form">
                      <ul>
                        <li><a href="#tab1" data-toggle="tab">
                          <div class="menu-icon"> 1 </div>
                          Server Spec </a></li>
                        <li><a href="#tab2" data-toggle="tab">
                          <div class="menu-icon"> 2 </div>
                          Software </a></li>
                        <li><a href="#tab3" data-toggle="tab">
                          <div class="menu-icon"> 3 </div>
                          Services </a></li>
                        <li><a href="#tab4" data-toggle="tab">
                          <div class="menu-icon"> 4 </div>
                          Management </a></li>
                        <li><a href="#tab5" data-toggle="tab">
                          <div class="menu-icon"> 5 </div>
                          Finalize </a></li>
                      </ul>
                      <div class="progress progress-striped active">
                        <div class="progress-bar vd_bg-green" > </div>
                      </div>
                      <div class="tab-content no-bd">
                        <div id="tab1" class="tab-pane">
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="glyphicon glyphicon-globe"></i> </div>
                            <div class="menu-text">
                              <h3>Datacenter</h3>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios1" id="optionsRadios1" value="option1" checked="" type="radio">
                                  Los Angeles </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios1" id="optionsRadios2" value="option2" type="radio">
                                  Chicago </label>
                              </div>
                            </div>
                          </div>
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="fa fa-cogs"></i> </div>
                            <div class="menu-text">
                              <h3>Processor</h3>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios2" id="optionsRadios3" value="option1" checked="" type="radio">
                                  AMD Athlon II X4 631 Quad-Core <span class="badge vd_bg-red">NEW</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios2" id="optionsRadios4" value="option2" type="radio">
                                  Intel Core i7 980 @ 3.33GHz </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios2" id="optionsRadios5" value="option2" type="radio">
                                  Intel Core i7-3920XM @ 2.90GHz </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios2" id="optionsRadios6" value="option2" type="radio">
                                  Intel Core2 Duo E6700 @ 2.66GHz </label>
                              </div>
                            </div>
                          </div>
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="glyphicon glyphicon-hdd"></i> </div>
                            <div class="menu-text">
                              <h3>Hard Drive</h3>
                              <p class="help-inline">You can choose up to two hard drive. Lorem ipsum doler sit amet lone torenim gonsolas midake gracias ono corazon.<br />
                                <br />
                              </p>
                              <h5>Hard Drive 1</h5>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios3" id="optionsRadios7" value="option1" checked="" type="radio">
                                  500 GB SATA (7200 RPM) </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios3" id="optionsRadios8" value="option2" type="radio">
                                  1 TB SATA Drive (7200 RPM) <span class="vd_red">[Add $15.00] </span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios3" id="optionsRadios9" value="option2" type="radio">
                                  3 TB SATA Drive (7200 RPM) <span class="vd_red">[Add $25.00] </span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios3" id="optionsRadios10" value="option2" type="radio">
                                  4 TB SATA Drive (7200 RPM) <span class="vd_red">[Add $35.00]</span> </label>
                              </div>
                              <br/>
                              <br/>
                              <h5>Hard Drive 2</h5>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios4" id="optionsRadios11" value="option1" checked="" type="radio">
                                  500 GB SATA (7200 RPM) </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios4" id="optionsRadios12" value="option2" type="radio">
                                  1 TB SATA Drive (7200 RPM) <span class="vd_red">[Add $15.00] </span> <span class="badge vd_bg-red">HOT</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios4" id="optionsRadios13" value="option2" type="radio">
                                  3 TB SATA Drive (7200 RPM) <span class="vd_red">[Add $25.00] </span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios4" id="optionsRadios14" value="option2" type="radio">
                                  4 TB SATA Drive (7200 RPM) <span class="vd_red">[Add $35.00]</span> </label>
                              </div>
                            </div>
                          </div>
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="glyphicon glyphicon-inbox"></i> </div>
                            <div class="menu-text">
                              <h3>RAM</h3>
                              <p class="help-inline">You can choose only one RAM. Lorem ipsum doler sit amet lone torenim gonsolas midake gracias ono corazon.</p>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios5" id="optionsRadios15" value="option1" checked="" type="radio">
                                  8 GB DDR3 1333MHZ ECC </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios5" id="optionsRadios16" value="option2" type="radio">
                                  16 GB DDR3 1333MHZ ECC <span class="vd_red">[Add $20.00]</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios5" id="optionsRadios17" value="option2" type="radio">
                                  24 GB DDR3 1333MHZ ECC <span class="vd_red">[Add $40.00]</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios5" id="optionsRadios18" value="option2" type="radio">
                                  32 GB DDR3 1333MHZ ECC <span class="vd_red">[Add $80.00] </span> </label>
                              </div>
                            </div>
                          </div>
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="fa fa-dashboard"></i> </div>
                            <div class="menu-text">
                              <h3>Bandwidth</h3>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios6" id="optionsRadios19" value="option1" checked="" type="radio">
                                  10 TB Bandwidth </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios6" id="optionsRadios20" value="option2" type="radio">
                                  11 TB Bandwidth <span class="vd_red">[Add $10.00]</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios6" id="optionsRadios21" value="option2" type="radio">
                                  12 TB Bandwidth <span class="vd_red">[Add $11.00] </span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios6" id="optionsRadios22" value="option2" type="radio">
                                  13 TB Bandwidth <span class="vd_red">[Add $12.00] </span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios6" id="optionsRadios23" value="option2" type="radio">
                                  14 TB Bandwidth <span class="vd_red">[Add $13.00] </span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios6" id="optionsRadios24" value="option2" type="radio">
                                  15 TB Bandwidth <span class="vd_red">[Add $14.00] </span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios6" id="optionsRadios25" value="option2" type="radio">
                                  16 TB Bandwidth <span class="vd_red">[Add $15.00] </span> </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- #tab-1 -->
                        <div id="tab2" class="tab-pane">
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="fa fa-linux"></i> </div>
                            <div class="menu-text">
                              <h3>Operating System</h3>
                              <p class="help-inline">Please select your operating systems below:</p>
                              <h5><strong>Linux</strong></h5>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios26" value="option1" checked="" type="radio">
                                  Cent OS 5.8 </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios27" value="option2" type="radio">
                                  Cent OS 6.2 </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios28" value="option2" type="radio">
                                  Ubuntu Server 8.04 </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios29" value="option2" type="radio">
                                  Ubuntu Server 11.10 </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios30" value="option2" type="radio">
                                  Debian 6 (Squeeze) </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios31" value="option2" type="radio">
                                  Open SUSE Linux 11.1 </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios32" value="option2" type="radio">
                                  Ubuntu Server 10.04 </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios33" value="option2" type="radio">
                                  Debian 5 (Lenny) </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios34" value="option2" type="radio">
                                  Open SUSE Linux 12.1 </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios35" value="option2" type="radio">
                                  Red Hat Enterprise Linux 5.6 <span class="vd_red">[Add $30.00] </span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios7" id="optionsRadios36" value="option2" type="radio">
                                  Red Hat Enterprise Linux 6.2 <span class="vd_red">[Add $30.00]</span> </label>
                              </div>
                            </div>
                            <div class="menu-icon"> <i class="fa fa-windows"></i> </div>
                            <div class="menu-text"> <br />
                              <h5><strong>Windows</strong></h5>
                              <p class="help-inline">Lorem ipsum doler windows genuine.</p>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios8" id="optionsRadios37" value="option1" type="radio">
                                  Windows Server 2008 - Standard Edition <span class="vd_red">[Add $20.00] </span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios8" id="optionsRadios38" value="option2" type="radio">
                                  Windows Server 2008 - Enterprise Edition <span class="vd_red">[Add $60.00]</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios8" id="optionsRadios39" value="option2" type="radio">
                                  Windows Server 2008 - Data Center Edition <span class="vd_red">[Add $70.00] </span> </label>
                              </div>
                            </div>
                          </div>
                          <!-- form-group -->
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="fa fa-cog"></i> </div>
                            <div class="menu-text">
                              <h3>Operating System Version</h3>
                              <p class="help-inline">Please select your operating systems version below:</p>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios9" id="optionsRadios40" value="option1" checked="" type="radio">
                                  32 bit </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios9" id="optionsRadios41" value="option1" checked="" type="radio">
                                  64 bit </label>
                              </div>
                            </div>
                            <!-- menu-text --> 
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="fa fa-cogs"></i> </div>
                            <div class="menu-text">
                              <h3>Control Panel</h3>
                              <p class="help-inline">Please select your control panel below:</p>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios10" id="optionsRadios42" value="option1" checked="" type="radio">
                                  No Control Panel </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios10" id="optionsRadios43" value="option1" checked="" type="radio">
                                  Cpanel </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios10" id="optionsRadios44" value="option1" checked="" type="radio">
                                  Plesk </label>
                              </div>
                            </div>
                            <!-- menu-text --> 
                          </div>
                          <!-- form-group --> 
                        </div>
                        <!-- #tab2 -->
                        <div id="tab3" class="tab-pane">
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="fa fa-cloud-upload"></i> </div>
                            <div class="menu-text">
                              <h3>Backup Services</h3>
                              <p class="help-inline">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios11" id="optionsRadios45" value="option1" checked="" type="radio">
                                  No Backup </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios11" id="optionsRadios46" value="option2" type="radio">
                                  10 GB Backup per week <span class="vd_red">[Add $10.00]</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios11" id="optionsRadios47" value="option2" type="radio">
                                  20 GB Backup per week <span class="vd_red">[Add $20.00]</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios11" id="optionsRadios48" value="option2" type="radio">
                                  30 GB Backup per week <span class="vd_red">[Add $30.00]</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios11" id="optionsRadios49" value="option2" type="radio">
                                  40 GB Backup per week <span class="vd_red">[Add $40.00]</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios11" id="optionsRadios50" value="option2" type="radio">
                                  50 GB Backup per week <span class="vd_red">[Add $50.00]</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios11" id="optionsRadios51" value="option2" type="radio">
                                  60 GB Backup per week <span class="vd_red">[Add $60.00]</span> </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios11" id="optionsRadios52" value="option2" type="radio">
                                  100 GB Backup per week <span class="vd_red">[Add $100.00]</span> </label>
                              </div>
                            </div>
                          </div>
                          <!-- form-group -->
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="fa fa-fire"></i> </div>
                            <div class="menu-text">
                              <h3>Firewall</h3>
                              <p class="help-inline">Please select your firewall below:</p>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios12" id="optionsRadios53" value="option1" checked="" type="radio">
                                  No Firewall </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios12" id="optionsRadios54" value="option1" type="radio">
                                  Super Firewall </label>
                              </div>
                            </div>
                            <!-- menu-text --> 
                          </div>
                          <!-- form-group --> 
                          
                        </div>
                        <!-- #tab3 -->
                        <div id="tab4" class="tab-pane">
                          <div class="form-group content-list">
                            <div class="menu-icon"> <i class="fa fa-cloud-upload"></i> </div>
                            <div class="menu-text">
                              <h3>Management</h3>
                              <p class="help-inline">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios13" id="optionsRadios55" value="option1" checked="" type="radio">
                                  No Management </label>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios13" id="optionsRadios56" value="option2" type="radio">
                                  Just Management <span class="vd_red">[Add $10.00]</span> </label>
                                <div class="help-inline">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                                <ul class="help-inline">
                                  <li>Service 1</li>
                                  <li>Service 2</li>
                                  <li>Service 3</li>
                                  <li>Service 4</li>
                                </ul>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios13" id="optionsRadios57" value="option2" type="radio">
                                  Super Management <span class="vd_red">[Add $20.00]</span> </label>
                                <div class="help-inline">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                                <ul class="help-inline">
                                  <li>Service 1</li>
                                  <li>Service 2</li>
                                  <li>Service 3</li>
                                  <li>Service 4</li>
                                  <li>Service 5</li>
                                  <li>Service 6</li>
                                </ul>
                              </div>
                              <div class="radio">
                                <label>
                                  <input name="optionsRadios13" id="optionsRadios58" value="option2" type="radio">
                                  Extreme Management <span class="vd_red">[Add $30.00]</span> </label>
                                <div class="help-inline">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                                <ul class="help-inline">
                                  <li>Service 1</li>
                                  <li>Service 2</li>
                                  <li>Service 3</li>
                                  <li>Service 4</li>
                                  <li>Service 5</li>
                                  <li>Service 6</li>
                                  <li>Service 7</li>
                                  <li>Service 8</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <!-- form-group --> 
                          
                        </div>
                        <!-- #tab4 -->
                        
                        <div id="tab5" class="tab-pane">
                          <div class="row mgbt-xs-5">
                            <div class="col-xs-9"> <span class="product-title"><strong>Datacenter</strong><br/>
                              Los Angeles </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$0</span> </div>
                          </div>
                          <div class="row mgbt-xs-5">
                            <div class="col-xs-9"> <span class="product-title"><strong>Processor</strong><br/>
                              AMD Athlon II X4 631 Quad-Core </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$30</span> </div>
                          </div>
                          <div class="row mgbt-xs-5">
                            <div class="col-xs-9"> <span class="product-title"><strong>Hard Drive 1</strong><br/>
                              500 GB SATA (7200 RPM) </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$30</span> </div>
                          </div>
                          <div class="row mgbt-xs-5">
                            <div class="col-xs-9"> <span class="product-title"><strong>Hard Drive 2</strong><br/>
                              1 TB SATA (7200 RPM) </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$40</span> </div>
                          </div>
                          <div class="row mgbt-xs-5">
                            <div class="col-xs-9"> <span class="product-title"><strong>RAM</strong><br/>
                              8 GB DDR3 1333MHZ ECC </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$20</span> </div>
                          </div>
                          <div class="row mgbt-xs-5">
                            <div class="col-xs-9"> <span class="product-title"><strong>Bandiwidth</strong><br/>
                              10 TB Bandwidth </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$20</span> </div>
                          </div>
                          <div class="row mgbt-xs-5">
                            <div class="col-xs-9"> <span class="product-title"><strong>Operating System</strong><br/>
                              CentOS 6.2 - 64 bit </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$0</span> </div>
                          </div>
                          <div class="row mgbt-xs-5">
                            <div class="col-xs-9"> <span class="product-title"><strong>Control Panel</strong><br/>
                              No Control Panel </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$20</span> </div>
                          </div>
                          <div class="row mgbt-xs-5">
                            <div class="col-xs-9"> <span class="product-title"><strong>Backup Services</strong><br/>
                              No Backup Services </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$20</span> </div>
                          </div>
                          <div class="row mgbt-xs-5">
                            <div class="col-xs-9"> <span class="product-title"><strong>Firewall</strong><br/>
                              No Firewall </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$20</span> </div>
                          </div>
                          <div class="row mgbt-xs-5 ">
                            <div class="col-xs-9"> <span class="product-title"><strong>Management</strong><br/>
                              Extreme Management </span> </div>
                            <div class="col-xs-3  text-right"> <span class="price">$30</span> </div>
                          </div>
                          <div class="row mgbt-xs-0">
                            <div class="col-xs-8">
                              <h3 class="total-title font-semibold text-right">Total</h3>
                            </div>
                            <div class="col-xs-4  text-right">
                              <h3 class="font-semibold  mgbt-xs-0">$250</h3>
                              <span class="help-inline">monthly</span> </div>
                          </div>
                        </div>
                        <!-- #tab5 --> 
                        
                      </div>
                      <!-- tab-content -->
                      <div class="form-actions-condensed wizard text-right"> <a class="btn vd_btn prev" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-left"></i></span> Previous</a> <a class="btn vd_btn next" href="javascript:void(0);">Next <span class="menu-icon"><i class="fa fa-fw fa-chevron-circle-right"></i></span></a> <a class="btn vd_btn vd_bg-green finish" href="javascript:void(0);"><span class="menu-icon"><i class="fa fa-fw fa-check"></i></span> Finish</a> </div>
                    </form>
                  </div>
                  <!-- panel-body --> 
                  
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-sm-8 -->
              
              <div class="col-sm-4 sidebar-affix">
                <div class="panel widget vd_summary-panel">
                  <div class="panel-heading vd_bg-yellow">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-usd"></i> </span> Summary </h3>
                  </div>
                  <div class="panel-body-list">
                    <form class="form-horizontal" action="#" role="form">
                      <div class="content-list menu-action-right" >
                        <div data-rel="scroll">
                          <ul class="list-wrapper pd-lr-15">
                            <li> <span class="product-title"><strong>Datacenter</strong><br/>
                              Los Angeles </span>
                              <div class="menu-action"> $0 </div>
                            </li>
                            <li> <span class="product-title"><strong>Processor</strong><br/>
                              AMD Athlon II X4 631 Quad-Core </span> 
                              <div class="menu-action"> $30 </div>
                            </li>
                            <li> <span class="product-title"><strong>Hard Drive 1</strong><br/>
                              500 GB SATA (7200 RPM)  </span>
                              <div class="menu-action"> $30 </div>
                            </li>
                            <li> <span class="product-title"><strong>Hard Drive 2</strong><br/>
                              1 TB SATA (7200 RPM)  </span> 
                              <div class="menu-action"> $40 </div>
                            </li>
                            <li> <span class="product-title"><strong>RAM</strong><br/>
                              8 GB DDR3 1333MHZ ECC  </span>
                              <div class="menu-action"> $20 </div>
                            </li>
                            <li> <span class="product-title"><strong>Bandiwidth</strong><br/>
                              10 TB Bandwidth  </span> 
                              <div class="menu-action"> $20 </div>
                            </li>
                            <li> <span class="product-title"><strong>Operating System</strong><br/>
                              CentOS 6.2 - 64 bit  </span>
                              <div class="menu-action"> $0 </div>
                            </li>
                            <li> <span class="product-title"><strong>Control Panel</strong><br/>
                              No Control Panel  </span> 
                              <div class="menu-action"> $20 </div>
                            </li>
                            <li> <span class="product-title"><strong>Backup Services</strong><br/>
                              No Backup Services   </span>
                              <div class="menu-action"> $20 </div>
                            </li>
                            <li> <span class="product-title"><strong>Firewall</strong><br/>
                              No Firewall </span> 
                              <div class="menu-action"> $20 </div>
                            </li>        
                            <li> <span class="product-title"><strong>Management</strong><br/>
                              Extreme Management  </span> 
                              <div class="menu-action"> $30 </div>
                            </li>                                                 
                          </ul>
                        </div>
                      </div>
                      <div style="" class="closing text-right pd-15">
                        <h3 class="font-semibold  mgbt-xs-0"> <span class="mgr-10">Total Price: </span><span>$ 250</span><br/><span class="font-normal font-xs">per month</span> </h3>
                      </div>
                    </form>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-sm-8 --> 
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
<?php include('templates/scripts/pages-custom-product.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>