<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Flot Chart HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Flot Chart - Responsive Admin HTML Template'; ?>
<?php $page = 'charts';   // To set active on the same id of primary menu ?>



<!-- End of Data -->

<?php require_once('templates/headers/'.$header.'.tpl.php'); ?>

<div class="content"><div class="container">
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
                      <li><a href="charts-morris.php">Charts</a> </li>                                             
                      <li class="active">Flot Chart</li>
                    </ul>    
                    <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
                </div>                            
            </div>
            <!-- vd_head-section -->
            
            <div class="vd_title-section clearfix">
            	<div class="vd_panel-header no-subtitle">
                    <h1>Flot Chart</h1>
                </div>
            </div>         
            <!-- vd_title-section -->
                   
            <div class="vd_content-section clearfix">   
            	<div class="row">
                	<div class="col-xs-12">
                        <div class="panel widget light-widget">
                        	<div class="panel-heading no-title">
                                                
                            </div>
                            <div class="panel-body">                          
                                 <h2 class="mgtp--5">
                                 	<span class="font-semibold">Flot</span>  Chart
                                 </h2>   
                                 <p>
                                 Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks and interactive features.<br/>
<em>Works with Internet Explorer 6+, Chrome, Firefox 2+, Safari 3+ and Opera 9.5+</em><br/><br/>
More about flot chart go to <a href="http://www.flotcharts.org/">flot chart website</a>.
                                 </p>

                            </div>

                        </div> <!-- Panel Widget -->                         	
                    </div>
                </div>    
				<div class="row">
                	<div class="col-sm-8">	
                 		<?php include('templates/widgets/widget-interactive-chart.tpl.php'); ?>                                  
                    </div>
                	<div class="col-sm-4">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-red">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="icon-pie"></i> </span> Pie Chart </h3>
                    <?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?> 
                  </div>  
                  <div class="panel-body-list pd-15">
                    <div id="pie-chart" class="pie-chart" style="height:318px;"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mgbt-xs-20 mgbt-md-0">

                <div class="panel widget">
                  <div class="panel-heading vd_bg-yellow">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="icon-graph"></i> </span> Type of Chart Example </h3>
                    <?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?> 
                  </div>
                  <div class="panel-body-list pd-15">
                    <div id="example-chart" class="realtime-chart" style="height:318px;"></div>
                  </div>
                </div>
                <!-- Panel Widget --> 
             
              </div>
              <div class="col-md-6  mgbt-xs-20 mgbt-md-0">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-blue">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="icon-graph"></i> </span> Server Load </h3>
                    <?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?> 
                  </div>
                  <div class="panel-body-list pd-15">
                    <div id="realtime-chart" class="realtime-chart" style="height:318px;"></div>
                  </div>
                </div>
                <!-- Panel Widget -->          
                    
                    </div>   <!-- col-sm-6 -->                                 
                </div>  <!-- row --> 
                
            <div class="row">
              <div class="col-md-4 mgbt-xs-20 mgbt-md-0">
              
                <div class="panel widget">
                  <div class="panel-heading vd_bg-yellow">
                    <h3 class="panel-title no-title"> <span class="menu-icon"> <i class="icon-graph"></i> </span> Full Color Chart </h3>
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body-list pd-25 vd_bg-yellow">
                    <div id="example-chart-white" class="example-chart-white" style="height:318px;"></div>
                  </div>
                </div>
                <!-- Panel Widget -->              		
              
              
              </div>   <!-- col-sm-4 -->  
              
              <div class="col-md-4 mgbt-xs-20 mgbt-md-0">
              
                <div class="panel widget">
                  <div class="panel-heading vd_bg-red">
                    <h3 class="panel-title no-title"> <span class="menu-icon"> <i class="icon-graph"></i> </span> Full Color Bar </h3>
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body-list pd-25 vd_bg-red">
                    <div id="example-bar-white" class="example-bar-white" style="height:318px;"></div>
                  </div>
                </div>
                <!-- Panel Widget -->              		
              
              
              </div>   <!-- col-sm-4 -->      
              
              
              <div class="col-md-4 mgbt-xs-20 mgbt-md-0">
              
                <div class="panel widget">
                  <div class="panel-heading vd_bg-green">
                    <h3 class="panel-title no-title"> <span class="menu-icon"> <i class="icon-graph"></i> </span> Full Color Pie </h3>
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body-list pd-25 vd_bg-green">
                    <div id="example-pie-white" class="example-pie-white" style="height:318px;"></div>
                  </div>
                </div>
                <!-- Panel Widget -->              		
              
              
              </div>   <!-- col-sm-4 -->                           
                                             
            </div>  <!-- row -->               
              
              	     
                                          
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
<?php include('templates/scripts/charts-flot.tpl.php'); ?>



<!-- Specific Page Scripts END -->



<?php require_once('templates/footers/closing.tpl.php'); ?>