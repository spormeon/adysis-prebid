<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Table Variations HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Table Variations - Responsive Admin HTML Template'; ?>
<?php $page = 'tables';   // To set active on the same id of primary menu ?>
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
                <li><a href="listtables-tables-variation.php">List &amp; Tables</a> </li>
                <li class="active">Medium List</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Medium List</h1>
              <small class="subtitle">List with medium image on left suited for chat &amp; tasks.</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-xs-12">
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h2 class="mgtp--5"> <span class="font-semibold">Content List</span> Class </h2>
                    <p> Using our "content-list" combination with "content-image" class you can easily create a list without any responsive effect, also great combined with mega menu.</p>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-xs-12 --> 
            </div>
            <!-- row -->
            <div class="row">
              <div class="col-md-3">
                <div class="panel widget light-widget panel-bd-top">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> Example Medium Size</h3>
                    <div class="content-list content-image">
                      <ul class="list-wrapper pd-lr-10">
                        <li>
                          <div class="menu-icon vd_blue"><i class="fa fa-bolt"></i></div>
                          <div class="menu-text"> Electricity Problem
                            <div class="menu-info">
                              <div class="progress progress-sm">
                                <div style="width:85%" class="progress-bar progress-bar-info"> 85% </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_yellow"><i class="fa fa-code"></i></div>
                          <div class="menu-text"> Finish coding jquery plugin
                            <div class="menu-info">
                              <div class="progress progress-sm">
                                <div style="width:20%" class="progress-bar progress-bar-danger"> 20% </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-3.jpg"></div>
                          <div class="menu-text"> Client: Zoe Project
                            <div class="menu-info"> <span class="menu-date">Make a call</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Call" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-phone"></i> </span> </span> </div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon"><i class=" fa fa-magic"></i></div>
                          <div class="menu-text"> Final error check on new templates
                            <div class="menu-info">
                              <div class="progress progress-sm">
                                <div style="width:95%" class="progress-bar progress-bar-success"> 95% </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_green"><i class=" fa fa-camera"></i></div>
                          <div class="menu-text"> Update product image
                            <div class="menu-info">
                              <div class="progress progress-sm">
                                <div style="width:50%" class="progress-bar progress-bar-warning"> 50% </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_blue"><i class="fa fa-bolt"></i></div>
                          <div class="menu-text"> Electricity Problem
                            <div class="menu-info">
                              <div class="progress progress-sm">
                                <div style="width:85%" class="progress-bar progress-bar-info"> 85% </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon vd_yellow"><i class=" fa fa-code"></i></div>
                          <div class="menu-text"> Finish coding jquery plugin
                            <div class="menu-info">
                              <div class="progress progress-sm">
                                <div style="width:20%" class="progress-bar progress-bar-danger"> 20% </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-3.jpg"></div>
                          <div class="menu-text"> Client: Zoe Project
                            <div class="menu-info"> <span class="menu-date">Make a call</span> <span class="menu-action"> <span class="menu-action-icon" data-original-title="Call" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-phone"></i> </span> </span> </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!-- content-list --> 
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-md-4 -->
              <div class="col-md-3">
                <div class="panel widget light-widget panel-bd-top vd_bdt-yellow">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> Chat Box Example</h3>
                    <div class="content-list  content-image">
                      <ul class="list-wrapper wrap-25">
                    <li> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar.jpg"></div> 
                            <div class="menu-text"> Do you play or follow any sports?
                            	<div class="menu-info">
                                    <span class="menu-date">12 Minutes Ago </span>                                                                                                        
                            	</div>
                            </div> 
                     </li>
                    <li class="align-right"> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div>  
                            <div class="menu-text">  Good job mate !
                            	<div class="menu-info">
                                    <span class="menu-date">1 Hour 20 Minutes Ago </span>                                                                         
                              
                            	</div>                            
                            </div> 
                     </li>    
                    <li> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar.jpg"></div> 
                            <div class="menu-text">  Just calm down babe, everything will work out.
                            	<div class="menu-info">
                                    <span class="menu-date">12 Days Ago</span>                                                                         
                               
                            	</div>                                                     
                            </div> 
                     </li>                                     
                    <li  class="align-right"> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div> 
                            <div class="menu-text">  Euuh so gross....
                            	<div class="menu-info">
                                    <span class="menu-date">19 Days Ago</span>                                                                         
                               
                            	</div>                                                        
                            </div> 
                     </li> 
                    <li> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar.jpg"></div>  
                            <div class="menu-text">  That's the way.. I like it :D
                            	<div class="menu-info">
                                    <span class="menu-date">20 Days Ago</span>                                                                         
                               
                            	</div>                                                          
                            </div> 
                     </li>
                    <li class="align-right"> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div> 
                            <div class="menu-text">  Oooh don't be shy ;P
                            	<div class="menu-info">
                                    <span class="menu-date">21 Days Ago</span>                                                                                                       
                            	</div>                             
                            </div> 
                     </li>                                     
                    <li> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar.jpg"></div> 
                            <div class="menu-text">  Hello, please call my number..
                            	<div class="menu-info">
                                    <span class="menu-date">24 Days Ago</span>                                                                         
                               
                            	</div>                              
                            </div> 
                     </li> 
                    <li class="align-right"> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div> 
                            <div class="menu-text">  Don't go anywhere, i will be coming soon
                            	<div class="menu-info">
                                    <span class="menu-date">1 Month 2 days Ago</span>                                                                                                      
                            	</div>                              
                            </div> 
                     </li>    
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-md-4 -->
              
              <div class="col-md-3">
                <div class="panel widget light-widget panel-bd-top vd_bdt-red">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> Chat Box No Border</h3>
                    <div class="content-list  content-image">
                      <ul class="list-wrapper no-bd-btm">
                    <li> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar.jpg"></div> 
                            <div class="menu-text"> Do you play or follow any sports?
                            	<div class="menu-info">
                                    <span class="menu-date">12 Minutes Ago </span>                                                                                                        
                            	</div>
                            </div> 
                     </li>
                    <li class="align-right"> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div>  
                            <div class="menu-text">  Good job mate !
                            	<div class="menu-info">
                                    <span class="menu-date">1 Hour 20 Minutes Ago </span>                                                                         
                              
                            	</div>                            
                            </div> 
                     </li>    
                    <li> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar.jpg"></div> 
                            <div class="menu-text">  Just calm down babe, everything will work out.
                            	<div class="menu-info">
                                    <span class="menu-date">12 Days Ago</span>                                                                         
                               
                            	</div>                                                     
                            </div> 
                     </li>                                     
                    <li  class="align-right"> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div> 
                            <div class="menu-text">  Euuh so gross....
                            	<div class="menu-info">
                                    <span class="menu-date">19 Days Ago</span>                                                                         
                               
                            	</div>                                                        
                            </div> 
                     </li> 
                    <li> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar.jpg"></div>  
                            <div class="menu-text">  That's the way.. I like it :D
                            	<div class="menu-info">
                                    <span class="menu-date">20 Days Ago</span>                                                                         
                               
                            	</div>                                                          
                            </div> 
                     </li>
                    <li class="align-right"> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div> 
                            <div class="menu-text">  Oooh don't be shy ;P
                            	<div class="menu-info">
                                    <span class="menu-date">21 Days Ago</span>                                                                                                       
                            	</div>                             
                            </div> 
                     </li>                                     
                    <li> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar.jpg"></div> 
                            <div class="menu-text">  Hello, please call my number..
                            	<div class="menu-info">
                                    <span class="menu-date">24 Days Ago</span>                                                                         
                               
                            	</div>                              
                            </div> 
                     </li> 
                    <li class="align-right"> 
                    		<div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div> 
                            <div class="menu-text">  Don't go anywhere, i will be coming soon
                            	<div class="menu-info">
                                    <span class="menu-date">1 Month 2 days Ago</span>                                                                                                      
                            	</div>                              
                            </div> 
                     </li> 
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-md-4 -->
              
              <div class="col-md-3">
                <div class="panel widget light-widget panel-bd-top vd_bdt-blue">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> Chat List</h3>
                    <div class="content-list content-image">
                      <ul class="list-wrapper no-bd-btm">
                <li class="group-heading">FAVORITE</li>
                <li>  
                    <a href="#"> 
                            <div class="menu-icon"><img src="img/avatar/avatar.jpg" alt="example image"></div> 
                            <div class="menu-text">Jessylin
                                <div class="menu-info">
                                    <span class="menu-date">Administrator </span>                                                         
                                </div>
                            </div>
                            <div class="menu-badge"><span class="badge status vd_bg-green">&nbsp;</span></div> 
                    </a>
                </li>
                <li>  
                    <a href="#"> 
                            <div class="menu-icon"><img src="img/avatar/avatar-2.jpg" alt="example image"></div> 
                            <div class="menu-text">Rodney Mc.Cardo
                                <div class="menu-info">
                                    <span class="menu-date">Designer </span>                                                         
                                </div>
                            </div>
                            <div class="menu-badge"><span class="badge status vd_bg-grey">&nbsp;</span></div> 
                    </a>
                </li>
                <li>  
                    <a href="#"> 
                            <div class="menu-icon"><img src="img/avatar/avatar-3.jpg" alt="example image"></div> 
                            <div class="menu-text">Theresia Minoque
                                <div class="menu-info">
                                    <span class="menu-date">Engineering </span>                                                         
                                </div>
                            </div>
                            <div class="menu-badge"><span class="badge status vd_bg-green">&nbsp;</span></div> 
                    </a>
                </li>
                <li class="group-heading">FRIENDS</li>                                                                                                                                 
                <li>  
                    <a href="#"> 
                            <div class="menu-icon"><img src="img/avatar/avatar-4.jpg" alt="example image"></div> 
                            <div class="menu-text">Greg Grog
                                <div class="menu-info">
                                    <span class="menu-date">Developer </span>                                                         
                                </div>
                            </div>
                            <div class="menu-badge"><span class="badge status vd_bg-grey">&nbsp;</span></div> 
                    </a>
                </li> 
                <li>  
                    <a href="#"> 
                            <div class="menu-icon"><img src="img/avatar/avatar-5.jpg" alt="example image"></div> 
                            <div class="menu-text">Stefanie Imburgh
                                <div class="menu-info">
                                    <span class="menu-date">Dancer</span>                                                         
                                </div>
                            </div>
                            <div class="menu-badge"><span class="vd_grey font-sm"><i class="fa fa-mobile"></i></span></div> 
                    </a>
                </li> 
                <li>  
                    <a href="#"> 
                            <div class="menu-icon"><img src="img/avatar/avatar-6.jpg" alt="example image"></div> 
                            <div class="menu-text">Matt Demon
                                <div class="menu-info">
                                    <span class="menu-date">Musician </span>                                                         
                                </div>
                            </div>
                            <div class="menu-badge"><span class="vd_grey font-sm"><i class="fa fa-mobile"></i></span></div> 
                    </a>
                </li>
                <li>  
                    <a href="#"> 
                            <div class="menu-icon"><img src="img/avatar/avatar-7.jpg" alt="example image"></div> 
                            <div class="menu-text">Jeniffer Anastasia
                                <div class="menu-info">
                                    <span class="menu-date">Senior Developer </span>                                                         
                                </div>
                            </div>
                            <div class="menu-badge"><span class="badge status vd_bg-green">&nbsp;</span></div> 
                    </a>
                </li>                    
                <li>  
                    <a href="#"> 
                            <div class="menu-icon"><img src="img/avatar/avatar-8.jpg" alt="example image"></div> 
                            <div class="menu-text">Daniel Dreamon
                                <div class="menu-info">
                                    <span class="menu-date">Sales Executive </span>                                                         
                                </div>
                            </div>
                            <div class="menu-badge"><span class="badge status vd_bg-green">&nbsp;</span></div> 
                    </a>
                </li> 
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-md-4 --> 
            </div>
            <!--row --> 
            
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
