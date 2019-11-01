<div class="vd_navbar vd_nav-width navbar-1 <?php if (isset($current_navbar)) {echo($current_navbar);} ?> <?php if (isset($navbar_style)) {echo($navbar_style);} ?>">
	<div class="navbar-tabs-menu clearfix">
			<span class="expand-menu" data-action="expand-navbar-tabs-menu">
            	<span class="menu-icon menu-icon-left">
            		<i class="fa fa-ellipsis-h"></i>
                    <span class="badge vd_bg-red">
                        20
                    </span>                    
                </span>
            	<span class="menu-icon menu-icon-right">
            		<i class="fa fa-ellipsis-h"></i>
                    <span class="badge vd_bg-red">
                        20
                    </span>                    
                </span>                
            </span>
            <div class="menu-container">
            	<div class="vd_mega-menu-wrapper">
                	<div class="vd_mega-menu">
        				<?php include("templates/navbars/navbar-tabs-menu.tpl.php") ?>                    	
                    </div>                
                </div>
            </div>                                                   
    </div>
	<div class="navbar-menu clearfix">
        <div class="vd_panel-menu hidden-xs">
            <span data-original-title="Expand All" data-toggle="tooltip" data-placement="bottom" data-action="expand-all" class="menu">
                <i class="fa fa-sort-amount-asc"></i>
            </span>                   
        </div>
    	<h3 class="menu-title">UI Features</h3>
        <div class="vd_menu">
        	<?php include("templates/navbars/navbar-menu-".$navbar_menu.".tpl.php") ?>
        </div>             
    </div>
    <div class="navbar-spacing clearfix">
    </div>
</div>