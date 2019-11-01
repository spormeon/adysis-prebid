<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Compose New Email - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Responsive Admin Template for blogging dashboard'; ?>
<?php $page = 'email';   // To set active on the same id of primary menu ?>
<?php
	  // Specific Configuration for Email Layouts
	  $start_nav_width = '';
	  $medium_nav_toggle=0 ;
	  $small_nav_toggle=0; 
	  $navbar_left_extra_class='vd_navbar-style-2'; 
	  $navbar_left = 'navbar-email'; 
	  $navbar_right = 'navbar-tabs-menu-right'; 
	  $navbar_right_start_width = 'nav-right-small'; 
	  $navbar_right_config = 1; 
	  $specific_css[0]="plugins/bootstrap-wysiwyg/css/bootstrap-wysihtml5-0.0.2.css";
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
                <li><a href="email.php">Email</a></li>
                <li class="active">Email Compose</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
            <!-- vd_panel-header --> 
          </div>
          <!-- vd_panel-head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Email Compose</h1>
              <small class="subtitle">Compose email page with address book filter</small>
              <?php include('templates/widgets/panel-menu-title-section-email.tpl.php'); ?>
            </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-9">
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title"> </div>
                  <!-- vd_panel-heading -->
                  
                  <div class="panel-body">
                    <h2 class="mgtp--10"><i class="icon-feather mgr-10 vd_green"></i> Compose New Email </h2>
                    <br/>
                    <form class="form-horizontal" role="form" action="#">
                      <div class="form-group clearfix">
                        <label class="col-sm-2 control-label">To</label>
                        <div class="col-sm-10 controls">
                          <input id="email-input" type="text" class="input-border-btm" placeholder="someone@example.com"  >
                        </div>
                      </div>
                      <div class="form-group  clearfix">
                        <label class="col-sm-2 control-label">Subject</label>
                        <div class="col-sm-10 controls">
                          <input type="text" id="subject-input" class="input-border-btm" placeholder="Subject Title">
                        </div>
                      </div>
                      <br/>
                      <div class="form-group  clearfix">
                        <label class="col-sm-12 control-label sr-only">Message</label>
                        <div class="col-sm-12 controls">
                          <textarea id="message" class="width-100 form-control"  rows="15" placeholder="Write your message here"></textarea>
                        </div>
                      </div>
                      <div class="form-group form-actions">
                        <div class="col-sm-12">
                          <button type="submit" class="btn vd_btn vd_bg-green vd_white"><i class="fa fa-envelope append-icon"></i> SEND</button>
                          <button type="submit" class="btn vd_btn vd_bg-yellow vd_white"><i class="fa fa-archive append-icon"></i> SAVE TO DRAFT</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!-- panel-body  --> 
                  
                </div>
                <!-- panel --> 
              </div>
              <!-- col-md-8 -->
              
              <div class="col-md-3">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-yellow">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="glyphicon glyphicon-book"></i> </span> Address Book </h3>
                  </div>
                  <!-- vd_panel-heading -->
                  
                  <div class="panel-body">
                    <div class="form-group clearfix mgtp-10">
                      <div class="vd_input-wrapper light-theme"> <span class="menu-icon"> <i class="fa fa-filter"></i> </span>
                        <input type="text" id="filter-text" placeholder="Name Filter">
                      </div>
                    </div>
                    <br/>
                    <form class="form-horizontal" role="form" action="#">


                           
                          <a href="#" id="check-all">Check All</a> <span class="mgl-10 mgr-10">/</span> <a href="#" id="uncheck-all">Uncheck All</a>  
     
                          <hr class="mgtp-5"/>                   
                          <div class="form-group clearfix" style="height: 250px; overflow-y:scroll;">
                              <div class="col-md-12">
                                <div class="content-list content-menu" id="email-list">
                                  <div class="list-wrapper wrap-25 isotope">
                                    <div class="email-item">
                                      <div class="vd_checkbox checkbox-success">
                                        <input type="checkbox" id="checkbox-1" value="brad@pitt.com">
                                        <label class="filter-name" for="checkbox-1"> Brad Pitt - <em class="font-normal">brad@pitt.com</em> </label>
                                      </div>
                                    </div>
                                    <div  class="email-item">
                                      <div class="vd_checkbox checkbox-success">
                                        <input type="checkbox" id="checkbox-2" value="angelina@jolie.com">
                                        <label class="filter-name" for="checkbox-2"> Angelina Jolie - <em class="font-normal">angelina@jolie.com</em> </label>
                                      </div>
                                    </div>
                                    <div class="email-item">
                                      <div class="vd_checkbox checkbox-success"> <input type="checkbox" id="checkbox-3" value="adam@sandler.com">
                                  
                                        <label class="filter-name" for="checkbox-3"> Adam Sandler - <em class="font-normal">adam@sandler.com</em> </label>
                                      </div>
                                    </div>
                                    <div  class="email-item">
                                      <div class="vd_checkbox checkbox-success">
                                        <input type="checkbox" id="checkbox-4" value="christina@aguilera.com">
                                        <label class="filter-name" for="checkbox-4"> Chirstina Aguilera - <em class="font-normal">christina@aguilera.com</em> </label>
                                      </div>
                                    </div>
                                    <div class="email-item">
                                      <div class="vd_checkbox checkbox-success">
                                        <input type="checkbox" id="checkbox-5" value="tom@cruise.com">
                                        <label class="filter-name" for="checkbox-5"> Tom Cruise - <em class="font-normal">tom@cruise.com</em> </label>
                                      </div>
                                    </div>
                                    <div  class="email-item">
                                      <div class="vd_checkbox checkbox-success">
                                        <input type="checkbox" id="checkbox-6" value="dominicus@soddley.com">
                                        <label class="filter-name" for="checkbox-6"> Dominicus Soddley - <em class="font-normal">dominicus@soddley.com</em> </label>
                                      </div>
                                    </div>
                                    <div class="email-item">
                                      <div class="vd_checkbox checkbox-success">
                                        <input type="checkbox" id="checkbox-7" value="web@designer.com">
                                        <label class="filter-name" for="checkbox-7"> Web Designer - <em class="font-normal">web@designer.com</em> </label>
                                      </div>
                                    </div>
                                    <div  class="email-item">
                                      <div class="vd_checkbox checkbox-success">
                                        <input type="checkbox" id="checkbox-8" value="web@templatecompany.com">
                                        <label class="filter-name" for="checkbox-8"> Web Template Company - <em class="font-normal">web@templatecompany.com</em> </label>
                                      </div>
                                    </div>
                                    <div class="email-item">
                                      <div class="vd_checkbox checkbox-success">
                                        <input type="checkbox" id="checkbox-9" value="round@live.com">
                                        <label class="filter-name" for="checkbox-9"> Round Live - <em class="font-normal">round@live.com</em> </label>
                                      </div>
                                    </div>
                                    <div  class="email-item">
                                      <div class="vd_checkbox checkbox-success">
                                        <input type="checkbox" id="checkbox-10" value="chrisitan@bautista.com">
                                        <label class="filter-name" for="checkbox-10"> Chrisitan Bautista - <em class="font-normal">chrisitan@bautista.com</em> </label>
                                      </div>
                                    </div>
                                    <div  class="email-item">
                                      <div class="vd_checkbox checkbox-success">
                                        <input type="checkbox" id="checkbox-11" value="admin@template.com">
                                        <label class="filter-name" for="checkbox-11"> Admin Template - <em class="font-normal">admin@template.com</em> </label>
                                      </div>
                                    </div>
                                  </div>
                                  <!-- list-wrapper --> 
                                </div>
                                <!-- content-list --> 
                              </div>
                              <!-- col-md-12 --> 
                            </div>
                            <!-- form-group -->
                            
                        
                      <hr/>
                      <div class="form-group form-actions">
                        <div class="col-sm-12">
                          <button type="button" id="insert-email-btn" class="btn vd_btn vd_bg-blue vd_white"><i class="fa fa-angle-double-left append-icon"></i> INSERT ADDRESS</button>
                          <button type="button" class="btn vd_btn vd_bg-grey vd_white"><i class="fa fa-plus append-icon"></i> ADD NEW</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!-- panel-body  --> 
                  
                </div>
                <!-- panel --> 
              </div>
              <!-- col-md-8 --> 
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
<?php include('templates/scripts/email-compose.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>