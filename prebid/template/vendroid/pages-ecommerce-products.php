<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Ecommerce Products HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Ecommerce Products - Responsive Admin HTML Template'; ?>
<?php $page = 'pages';   // To set active on the same id of primary menu ?>
<?php
	 // Specific Data Tables CSS
	 $specific_css[0] = 'plugins/dataTables/css/jquery.dataTables.min.css';   // Data Table CSS
	 $specific_css[1] = 'plugins/dataTables/css/dataTables.bootstrap.css';   // Data Table CSS
	 $page_css ='
				  #product-table thead .heading th, #product-table thead .filter th{border-bottom:none; }
				  #product-table thead .heading th {font-size: 14px; text-transform:uppercase; color:#FFF;} 
				  #product-table thead .filter th{
					  background :#FFF;
					  border-top:none;
					  padding-top: 10px;
					  padding-bottom:10px;
					 
				  }
				  div.dataTables_length label{margin-bottom:0;}
				  .dataTables_wrapper .dataTables_length{display:inline; margin-right:10px; float:none;}
				  .dataTables_wrapper .dataTables_info{display: inline-block; padding-top: 2px; float:none;}	 
	 ';
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
                <li><a href="pages-custom-product.php">Pages</a> </li>
                <li class="active">Ecommerce Products</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Ecommerce Products</h1>
              <small class="subtitle">Ecommerce Pages: Products List</small>
              <div class="vd_panel-menu  hidden-xs">
                <div class="menu">
                  <div data-action="click-trigger"> <span class="menu-icon mgr-10"><i class="fa fa-bars"></i></span>Menu <i class="fa fa-angle-down"></i> </div>
                  <div data-action="click-target" class="vd_mega-menu-content width-xs-2 left-xs" style="display: none;">
                    <div class="child-menu">
                      <div class="content-list content-menu">
                        <ul class="list-wrapper pd-lr-10">
                          <li> <a href="pages-ecommerce-products.php">
                            <div class="menu-icon"><i class=" fa fa-cubes"></i></div>
                            <div class="menu-text">Product List</div>
                            </a> </li>
                          <li> <a href="pages-ecommerce-product-add.php">
                            <div class="menu-icon"><i class="fa fa-plus"></i></div>
                            <div class="menu-text">Add Product</div>
                            </a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- menu --> 
              </div>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-sm-15">
                <div class="vd_status-widget vd_bg-green widget">
                  <div class="vd_panel-menu">
                    <div class=" menu entypo-icon smaller-font" data-rel="tooltip" data-original-title="Refresh" data-action="refresh"> <i class="icon-cycle"></i> </div>
                  </div>
                  <!-- vd_panel-menu --> 
                  
                  <a href="#" class="panel-body">
                  <div class="clearfix"> <span class="menu-icon"> <i class="fa fa-cube"></i> </span> <span class="menu-value"> 75% </span> </div>
                  <div class="menu-text clearfix"> Items in Stock </div>
                  </a> </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-sm-15">
                <div class="vd_status-widget vd_bg-red  widget">
                  <div class="vd_panel-menu">
                    <div class=" menu entypo-icon smaller-font" data-rel="tooltip" data-original-title="Refresh" data-action="refresh"> <i class="icon-cycle"></i> </div>
                  </div>
                  <!-- vd_panel-menu --> 
                  
                  <a href="#" class="panel-body">
                  <div class="clearfix"> <span class="menu-icon"> <i class="icon-bars"></i> </span> <span class="menu-value"> 10% </span> </div>
                  <div class="menu-text clearfix"> Average Gross Margin </div>
                  </a> </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-xs-15">
                <div class="vd_status-widget vd_bg-blue widget">
                  <div class="vd_panel-menu">
                    <div class=" menu entypo-icon smaller-font" data-rel="tooltip" data-original-title="Refresh" data-action="refresh"> <i class="icon-cycle"></i> </div>
                  </div>
                  <!-- vd_panel-menu --> 
                  
                  <a href="#" class="panel-body">
                  <div class="clearfix"> <span class="menu-icon"> <i class="fa fa-comments"></i> </span> <span class="menu-value"> 108 </span> </div>
                  <div class="menu-text clearfix"> Product Reviews </div>
                  </a> </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6 mgbt-xs-15">
                <div class="vd_status-widget vd_bg-yellow widget">
                  <div class="vd_panel-menu">
                    <div class=" menu entypo-icon smaller-font" data-rel="tooltip" data-original-title="Refresh" data-action="refresh"> <i class="icon-cycle"></i> </div>
                  </div>
                  <!-- vd_panel-menu --> 
                  
                  <a href="#" class="panel-body">
                  <div class="clearfix"> <span class="menu-icon"> <i class="fa fa-power-off"></i> </span> <span class="menu-value"> 10 </span> </div>
                  <div class="menu-text clearfix"> Disabled Products </div>
                  </a> </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-refresh.tpl.php'); ?>
                  </div>
                  <div  class="panel-body">
                    <div class="clearfix">
                      <h2 class="pull-left"> Products </h2>
                      <div class="btn-group mgl-15 mgtp-5">
                      <button data-toggle="dropdown" class="btn vd_btn vd_bg-grey btn-xs dropdown-toggle mgl-10" type="button"> Tools<i class="fa fa-caret-down prepend-icon"></i> </button>
                      <ul role="menu" class="dropdown-menu">
                        <li><a href="#">Export to XLS</a></li>
                        <li><a href="#">Import from XLS</a></li>
                        <li><a href="#">Print</a></li>
                      </ul>
                      </div> </div>
                    <br/>
                    <table id="product-table" class="table table-striped table-hover table-responsive">
                      <thead class="vd_bg-dark-blue">
                        <tr class="heading">
                          <th><div class="vd_checkbox">
                              <input type="checkbox" id="checkbox-0">
                              <label for="checkbox-0"></label>
                            </div>
                          </th>
                          <th>ID</th>
                          <th>Photo</th>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                        <tr class="filter">
                          <th><div class="vd_checkbox">
                              <input type="checkbox" id="checkbox-1">
                              <label for="checkbox-1"></label>
                            </div>
                          </th>
                          <th>ID</th>
                          <th>Photo</th>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                      </thead>
                    </table>
                  </div>
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
<?php include('templates/scripts/pages-ecommerce-products.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>