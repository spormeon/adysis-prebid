<?php require_once('templates/headers/head.tpl.php'); ?>

<!-- Header Start -->
  <header class="header-3" id="header">
      <div class="vd_top-menu-wrapper">
        <div class="container <?php if (isset($top_menu_extra_class)) { echo($top_menu_extra_class);}?>">
          <div class="vd_top-nav vd_nav-width  <?php if (isset($logo_container_extra_class)) { echo($logo_container_extra_class);}?>">
          <div class="vd_panel-header">
          	<div class="logo">
            	<a href="index.php"><img alt="logo" src="<?php if (isset($logo_path)) { echo($logo_path);}?>"></a>
            </div>
            <!-- logo -->
            <div class="vd_panel-menu  hidden-sm hidden-xs">
            		<?php if ($medium_nav_toggle) {?>
                	<span class="nav-medium-button menu" data-toggle="tooltip" data-placement="bottom" data-original-title="Medium Nav Toggle" data-action="nav-left-medium">
	                    <i class="fa fa-bars"></i>
                    </span>
                    <?php } ?>
            		<?php if ($small_nav_toggle) {?>                    
                	<span class="nav-small-button menu" data-toggle="tooltip" data-placement="bottom" data-original-title="Small Nav Toggle" data-action="nav-left-small">
	                    <i class="fa fa-ellipsis-v"></i>
                    </span> 
                    <?php } ?>                   
            </div>
            <div class="vd_panel-menu left-pos visible-sm visible-xs">
                    <?php if ($navbar_left_config != 0){   ?> 
                        <span class="menu" data-action="toggle-navbar-left">
                            <i class="fa fa-ellipsis-v"></i>
                        </span>  
                    <?php } ?>                  
            </div>
            <div class="vd_panel-menu visible-sm visible-xs">
                	<span class="menu visible-xs" data-action="submenu">
	                    <i class="fa fa-bars"></i>
                    </span>  
                    <?php if ($navbar_right_config != 0){   ?>             
                        <span class="menu visible-sm visible-xs" data-action="toggle-navbar-right">
                            <i class="fa fa-comments"></i>
                        </span>                   
                    <?php } ?> 
            </div>                                     
            <!-- vd_panel-menu -->
          </div>
          <!-- vd_panel-header -->
            
          </div>    
          <div class="vd_container">
          	<div class="row">
            	<div class="col-sm-5 col-xs-12">
            		<?php include_once("menu-search.tpl.php"); ?>
                </div>
                <div class="col-sm-7 col-xs-12">
              		<div class="vd_mega-menu-wrapper">
                    	<div class="vd_mega-menu pull-right">
            				<?php include("menu-status-2.tpl.php"); ?>                        
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </div>
        <!-- container --> 
      </div>
      <!-- vd_primary-menu-wrapper --> 

  </header>
  <!-- Header Ends --> 