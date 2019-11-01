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
                <li class="active">Tables Variation</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Tables Variation</h1>
              <small class="subtitle">List of table variation</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Table Basic with Hover </h3>
                  </div>
                  <div class="panel-body table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Username</th>
                          <th>Date registered</th>
                          <th>Role</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Johann Un</td>
                          <td class="center">2010/02/03</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Petrus Dar</td>
                          <td class="center">2012/01/15</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-danger">Banned</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Zeibsein Gunchineer</td>
                          <td class="center">2013/02/01</td>
                          <td class="center">Admin</td>
                          <td class="center"><span class="label label-default">Inactive</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Goergia Zullivan</td>
                          <td class="center">2013/06/20</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-warning">Pending</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Tresshold Compe</td>
                          <td class="center">2011/02/13</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                      </tbody>
                    </table>
                    <ul class="pagination">
                      <li><a href="#">&laquo;</a></li>
                      <li class="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&raquo;</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 --> 
            </div>
            <!-- row -->
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Table No Padding &amp; Rounded Icon </h3>
                  </div>
                  <div class="panel-body-list  table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Username</th>
                          <th>Date registered</th>
                          <th>Role</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Johann Un</td>
                          <td class="center">2010/02/03</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Petrus Dar</td>
                          <td class="center">2012/01/15</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-danger">Banned</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Zeibsein Gunchineer</td>
                          <td class="center">2013/02/01</td>
                          <td class="center">Admin</td>
                          <td class="center"><span class="label label-default">Inactive</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Goergia Zullivan</td>
                          <td class="center">2013/06/20</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-warning">Pending</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Tresshold Compe</td>
                          <td class="center">2011/02/13</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- Panel Widget -->
                <ul class="pagination">
                  <li><a href="#">&laquo;</a></li>
                  <li class="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&raquo;</a></li>
                </ul>
              </div>
              <!-- col-md-12 --> 
            </div>
            <!-- row -->
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Table Bordered &amp; Solid Icon </h3>
                  </div>
                  <div class="panel-body  table-responsive">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Username</th>
                          <th>Date registered</th>
                          <th>Role</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Johann Un</td>
                          <td class="center">2010/02/03</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Petrus Dar</td>
                          <td class="center">2012/01/15</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-danger">Banned</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Zeibsein Gunchineer</td>
                          <td class="center">2013/02/01</td>
                          <td class="center">Admin</td>
                          <td class="center"><span class="label label-default">Inactive</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Goergia Zullivan</td>
                          <td class="center">2013/06/20</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-warning">Pending</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Tresshold Compe</td>
                          <td class="center">2011/02/13</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                      </tbody>
                    </table>
                    <ul class="pagination">
                      <li><a href="#">&laquo;</a></li>
                      <li class="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&raquo;</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 --> 
            </div>
            <!-- row -->
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Table Condensed &amp; Striped &amp; Borderless Icon </h3>
                  </div>
                  <div class="panel-body  table-responsive">
                    <table class="table table-condensed table-striped">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Username</th>
                          <th>Date registered</th>
                          <th>Role</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Johann Un</td>
                          <td class="center">2010/02/03</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Petrus Dar</td>
                          <td class="center">2012/01/15</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-danger">Banned</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Zeibsein Gunchineer</td>
                          <td class="center">2013/02/01</td>
                          <td class="center">Admin</td>
                          <td class="center"><span class="label label-default">Inactive</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Goergia Zullivan</td>
                          <td class="center">2013/06/20</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-warning">Pending</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Tresshold Compe</td>
                          <td class="center">2011/02/13</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                      </tbody>
                    </table>
                    <ul class="pagination">
                      <li><a href="#">&laquo;</a></li>
                      <li class="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&raquo;</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 --> 
            </div>
            <!-- row -->
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Table Striped &amp; Hover &amp; Rounded Solid Icon </h3>
                  </div>
                  <div class="panel-body  table-responsive">
                    <table class="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Username</th>
                          <th>Date registered</th>
                          <th>Role</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Johann Un</td>
                          <td class="center">2010/02/03</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Petrus Dar</td>
                          <td class="center">2012/01/15</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-danger">Banned</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Zeibsein Gunchineer</td>
                          <td class="center">2013/02/01</td>
                          <td class="center">Admin</td>
                          <td class="center"><span class="label label-default">Inactive</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Goergia Zullivan</td>
                          <td class="center">2013/06/20</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-warning">Pending</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Tresshold Compe</td>
                          <td class="center">2011/02/13</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-green"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-yellow"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-red"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                      </tbody>
                    </table>
                    <ul class="pagination">
                      <li><a href="#">&laquo;</a></li>
                      <li class="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#">&raquo;</a></li>
                    </ul>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 --> 
            </div>
            <!-- row -->
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Table Background Head Color </h3>
                  </div>
                  <div class="panel-body-list  table-responsive">
                    <table class="table table-striped table-hover no-head-border">
                      <thead class="vd_bg-green vd_white">
                        <tr>
                          <th>#</th>
                          <th>Username</th>
                          <th>Date registered</th>
                          <th>Role</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Johann Un</td>
                          <td class="center">2010/02/03</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Petrus Dar</td>
                          <td class="center">2012/01/15</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-danger">Banned</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Zeibsein Gunchineer</td>
                          <td class="center">2013/02/01</td>
                          <td class="center">Admin</td>
                          <td class="center"><span class="label label-default">Inactive</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Goergia Zullivan</td>
                          <td class="center">2013/06/20</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-warning">Pending</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Tresshold Compe</td>
                          <td class="center">2011/02/13</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action rounded-btn"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bg-grey"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- Panel Widget -->
                <ul class="pagination">
                  <li><a href="#">&laquo;</a></li>
                  <li class="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&raquo;</a></li>
                </ul>
              </div>
              <!-- col-md-12 --> 
            </div>
            <!-- row -->
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading">
                    <h3 class="panel-title  vd_black"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Combination With no Background Panel Heading </h3>
                  </div>
                  <div class="panel-body-list  table-responsive">
                    <table class="table table-striped table-hover no-head-border">
                      <thead class="vd_bg-green vd_white">
                        <tr>
                          <th>#</th>
                          <th>Username</th>
                          <th>Date registered</th>
                          <th>Role</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Johann Un</td>
                          <td class="center">2010/02/03</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-grey vd_grey"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Petrus Dar</td>
                          <td class="center">2012/01/15</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-danger">Banned</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Zeibsein Gunchineer</td>
                          <td class="center">2013/02/01</td>
                          <td class="center">Admin</td>
                          <td class="center"><span class="label label-default">Inactive</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Goergia Zullivan</td>
                          <td class="center">2013/06/20</td>
                          <td class="center">Member</td>
                          <td class="center"><span class="label label-warning">Pending</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Tresshold Compe</td>
                          <td class="center">2011/02/13</td>
                          <td class="center">Staff</td>
                          <td class="center"><span class="label label-success">Active</span></td>
                          <td class="menu-action"><a data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-eye"></i> </a> <a data-original-title="edit" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-pencil"></i> </a> <a data-original-title="delete" data-toggle="tooltip" data-placement="top" class="btn menu-icon  vd_bd-grey vd_grey"> <i class="fa fa-times"></i> </a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- Panel Widget -->
                <ul class="pagination">
                  <li><a href="#">&laquo;</a></li>
                  <li class="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&raquo;</a></li>
                </ul>
              </div>
              <!-- col-md-12 --> 
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
