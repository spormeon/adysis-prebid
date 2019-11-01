<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'UI Elements Panels - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'UI Elements Panels - Responsive Admin HTML Template'; ?>
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
                <li class="active">Panels</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Panels</h1>
              <small class="subtitle">Panel Variations</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-6">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-red">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="icon-pie"></i> </span> Panel Title Background </h3>
                    <?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <h2> Content<span class="font-semibold">Title</span> <em class="vd_soft-grey">examples</em> </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem <a href="#">ipsum dolor</a> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco.</p>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <div class="col-sm-6">
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?>
                  </div>
                  <div class="panel-body">
                    <h2 class="mgtp--5"> Minimalist<span class="font-semibold">Panel</span> <em class="vd_soft-grey">examples</em> </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem <a href="#">ipsum dolor</a> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco.</p>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-sm-6 --> 
            </div>
            <!-- row -->
            
            <div class="row">
              <div class="col-sm-6">
                <div class="panel widget dark-widget  vd_bg-blue">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?>
                  </div>
                  <div class="panel-body  vd_bg-blue">
                    <h2 class="mgtp--5"> Dark<span class="font-semibold">Panel</span> <em class="vd_soft-grey">examples</em> </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem <a href="#">ipsum dolor</a> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </p>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <div class="col-sm-6">
                <div class="panel widget light-widget panel-bd-left">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?>
                  </div>
                  <div class="panel-body">
                    <h2 class="mgtp--5"> Border <strong>Minimalist</strong> <em class="vd_soft-grey">panels</em> </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem <a href="#">ipsum dolor</a> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco.</p>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-sm-6 --> 
            </div>
            <!-- row -->
            
            <div class="row">
              <div class="col-sm-6">
                <div class="panel widget dark-widget  vd_bg-yellow">
                  <div class="panel-heading bordered">
                    <h3 class="panel-title">Dark Panel</h3>
                    <?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?>
                  </div>
                  <div class="panel-body  vd_bg-yellow">
                    <h2> Dark<span class="font-semibold">Panel</span> <em >examples</em> </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem <a href="#">ipsum dolor</a> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </p>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <div class="col-sm-6">
                <div class="panel widget light-widget panel-bd-top">
                  <div class="panel-heading bordered">
                    <h3 class="panel-title">Panel Border</h3>
                    <?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?>
                  </div>
                  <div class="panel-body">
                    <h2> Border <strong>Minimalist</strong> <em class="vd_soft-grey">panels</em> </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem <a href="#">ipsum dolor</a> sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco.</p>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-sm-6 --> 
            </div>
            <!-- row -->
            <div class="row">
              <div class="col-sm-6">
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title">
                    <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body-list">
                    <h2 class="pd-15 mgtp--5"> No <strong>Padding</strong> <em class="vd_soft-grey">panel body</em> </h2>
                    <div class="content-list content-image menu-action-right">
                      <div  data-rel="scroll"	>
                        <ul class="list-wrapper pd-lr-15">
                          <li>
                            <div class="menu-icon"><a href="#"><img alt="example image" src="img/avatar/avatar.jpg"></a></div>
                            <div class="menu-text"> This product is so good that i manage to buy it 1 for me and 3 for my families. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco laboris nisi ut aliquip ex tris. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Samsung Galaxy S4</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">LG G2</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-3.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Sony Experia Z10</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-4.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Ipsum dolor sit amet, consectetur adipisicing elit !!! </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Nokia Lumia</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-5.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Samsung Galaxy Note 8</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-6.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">LG L3</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-7.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit xorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Motorola Moto-X</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-8.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit xorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Monitor Asus</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="closing text-center"> <a href="#">See All Recent Reviews <i class="fa fa-angle-double-right"></i></a> </div>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <div class="col-sm-6">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-yellow">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="icon-pie"></i> </span> No Padding Panel Body </h3>
                    <?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?>
                  </div>
                  <div class="panel-body-list">
                    <div class="content-list content-image menu-action-right">
                      <div  data-rel="scroll"	>
                        <ul class="list-wrapper pd-lr-15">
                          <li>
                            <div class="menu-icon"><a href="#"><img alt="example image" src="img/avatar/avatar.jpg"></a></div>
                            <div class="menu-text"> This product is so good that i manage to buy it 1 for me and 3 for my families. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco laboris nisi ut aliquip ex tris. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Samsung Galaxy S4</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">LG G2</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-3.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Consectetur adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Sony Experia Z10</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-4.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidtation ullamco. Ipsum dolor sit amet, consectetur adipisicing elit !!! </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Nokia Lumia</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-5.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Samsung Galaxy Note 8</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-6.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">LG L3</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-7.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit xorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Motorola Moto-X</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                          <li>
                            <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-8.jpg"></div>
                            <div class="menu-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit xorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
                            <div class="menu-text">
                              <div class="menu-info"> in <a href="#">Monitor Asus</a> - <span class="menu-date">12 Minutes Ago </span> - <span class="menu-rating vd_yellow"><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i></span> </div>
                            </div>
                            <div class="menu-action">
                              <div class="menu-action-icon vd_green"  data-original-title="Approve" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-check"></i> </div>
                              <div class="menu-action-icon vd_red"   data-original-title="Reject" data-toggle="tooltip" data-placement="bottom"> <i class="fa fa-times"></i> </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="closing text-center"> <a href="#">See All Recent Reviews <i class="fa fa-angle-double-right"></i></a> </div>
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

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>