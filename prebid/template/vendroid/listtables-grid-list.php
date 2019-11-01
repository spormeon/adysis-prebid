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
                <li class="active">Grid List</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Grid List</h1>
              <small class="subtitle">Grid List is tile like list responsively adapt to screen size</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-xs-12">
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h2 class="mgtp--5"> <span class="font-semibold">Content List &amp; Content Grid</span> Class </h2>
                    <p> Using our <strong>"content-list"</strong> combination with <strong>"content-grid"</strong> class you can easily create a grid list with custom width, custom height, and custom column size responsive effect that fit perfectly with bootstrap responsive value. Below is table for responsive explanation and class.</p>
                    <br/>
                    <h3>Width Responsive Table (used for megamenu width)</h3>
                    <div class="table-responsive">
                      <table class="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Column Width</th>
                            <th> Extra small devices <small>Phones (&lt;768px)</small> </th>
                            <th> Small devices <small>Tablets (≥768px)</small> </th>
                            <th> Medium devices <small>Desktops (≥992px)</small> </th>
                            <th> Large devices <small>Desktops (≥1200px)</small> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>60px</th>
                            <td><code>width-xs-1</code></td>
                            <td><code>width-sm-1</code></td>
                            <td><code>width-md-1</code></td>
                            <td><code>width-lg-1</code></td>
                          </tr>
                          <tr>
                            <th>180px</th>
                            <td><code>width-xs-2</code></td>
                            <td><code>width-sm-2</code></td>
                            <td><code>width-md-2</code></td>
                            <td><code>width-lg-2</code></td>
                          </tr>
                          <tr>
                            <th>240px</th>
                            <td><code>width-xs-3</code></td>
                            <td><code>width-sm-3</code></td>
                            <td><code>width-md-3</code></td>
                            <td><code>width-lg-3</code></td>
                          </tr>
                          <tr>
                            <th>320px</th>
                            <td><code>width-xs-4</code></td>
                            <td><code>width-sm-4</code></td>
                            <td><code>width-md-4</code></td>
                            <td><code>width-lg-4</code></td>
                          </tr>
                          <tr>
                            <th>480px</th>
                            <td><code>width-xs-5</code></td>
                            <td><code>width-sm-5</code></td>
                            <td><code>width-md-5</code></td>
                            <td><code>width-lg-5</code></td>
                          </tr>
                          <tr>
                            <th>720px</th>
                            <td><code>width-xs-6</code></td>
                            <td><code>width-sm-6</code></td>
                            <td><code>width-md-6</code></td>
                            <td><code>width-lg-6</code></td>
                          </tr>
                          <tr>
                            <th>1130px / full-width</th>
                            <td><code>width-xs-full</code></td>
                            <td><code>width-sm-full</code></td>
                            <td><code>width-md-full</code></td>
                            <td><code>width-lg-full</code></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <br/>
                    <h3>Height Responsive Table</h3>
                    <div class="table-responsive">
                      <table class="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Column height</th>
                            <th> Extra small devices <small>Phones (&lt;768px)</small> </th>
                            <th> Small devices <small>Tablets (≥768px)</small> </th>
                            <th> Medium devices <small>Desktops (≥992px)</small> </th>
                            <th> Large devices <small>Desktops (≥1200px)</small> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>60px</th>
                            <td><code>height-xs-1</code></td>
                            <td><code>height-sm-1</code></td>
                            <td><code>height-md-1</code></td>
                            <td><code>height-lg-1</code></td>
                          </tr>
                          <tr>
                            <th>180px</th>
                            <td><code>height-xs-2</code></td>
                            <td><code>height-sm-2</code></td>
                            <td><code>height-md-2</code></td>
                            <td><code>height-lg-2</code></td>
                          </tr>
                          <tr>
                            <th>240px</th>
                            <td><code>height-xs-3</code></td>
                            <td><code>height-sm-3</code></td>
                            <td><code>height-md-3</code></td>
                            <td><code>height-lg-3</code></td>
                          </tr>
                          <tr>
                            <th>320px</th>
                            <td><code>height-xs-4</code></td>
                            <td><code>height-sm-4</code></td>
                            <td><code>height-md-4</code></td>
                            <td><code>height-lg-4</code></td>
                          </tr>
                          <tr>
                            <th>480px</th>
                            <td><code>height-xs-5</code></td>
                            <td><code>height-sm-5</code></td>
                            <td><code>height-md-5</code></td>
                            <td><code>height-lg-5</code></td>
                          </tr>
                          <tr>
                            <th>720px</th>
                            <td><code>height-xs-6</code></td>
                            <td><code>height-sm-6</code></td>
                            <td><code>height-md-6</code></td>
                            <td><code>height-lg-6</code></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <br/>
                    <h3>Column Responsive Table</h3>
                    <div class="table-responsive">
                      <table class="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Column Total</th>
                            <th> Extra small devices <small>Phones (&lt;768px)</small> </th>
                            <th> Small devices <small>Tablets (≥768px)</small> </th>
                            <th> Medium devices <small>Desktops (≥992px)</small> </th>
                            <th> Large devices <small>Desktops (≥1200px)</small> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1 Column</th>
                            <td><code>column-xs-1</code></td>
                            <td><code>column-sm-1</code></td>
                            <td><code>column-md-1</code></td>
                            <td><code>column-lg-1</code></td>
                          </tr>
                          <tr>
                            <th>2 Columns</th>
                            <td><code>column-xs-2</code></td>
                            <td><code>column-sm-2</code></td>
                            <td><code>column-md-2</code></td>
                            <td><code>column-lg-2</code></td>
                          </tr>
                          <tr>
                            <th>3 Columns</th>
                            <td><code>column-xs-3</code></td>
                            <td><code>column-sm-3</code></td>
                            <td><code>column-md-3</code></td>
                            <td><code>column-lg-3</code></td>
                          </tr>
                          <tr>
                            <th>4 Columns</th>
                            <td><code>column-xs-4</code></td>
                            <td><code>column-sm-4</code></td>
                            <td><code>column-md-4</code></td>
                            <td><code>column-lg-4</code></td>
                          </tr>
                          <tr>
                            <th>5 Columns</th>
                            <td><code>column-xs-5</code></td>
                            <td><code>column-sm-5</code></td>
                            <td><code>column-md-5</code></td>
                            <td><code>column-lg-5</code></td>
                          </tr>
                          <tr>
                            <th>6 Columns</th>
                            <td><code>column-xs-6</code></td>
                            <td><code>column-sm-6</code></td>
                            <td><code>column-md-6</code></td>
                            <td><code>column-lg-6</code></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-xs-12 --> 
            </div>
            <!-- row -->
            <div class="row">
              <div class="col-md-8">
                <div class="panel widget light-widget panel-bd-top">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> Example Column Total From 6(lg) to 5(md) to 4(sm) to 3(xs)</h3>
                    <div class="content-grid column-xs-3 column-sm-4 column-md-5 column-lg-6 height-xs-4">
                      <ul class="list-wrapper">
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Gabriella Montagna
                            <div class="menu-info">
                              <div class="menu-date">San Diego</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li class="warning"> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-2.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Jonathan Fuzzy
                            <div class="menu-info">
                              <div class="menu-date">Seattle</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-3.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Sakura Hinata
                            <div class="menu-info">
                              <div class="menu-date">Hawaii</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-4.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Rikudou Sennin
                            <div class="menu-info">
                              <div class="menu-date">Las Vegas</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-5.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Kim Kardiosun
                            <div class="menu-info">
                              <div class="menu-date">New York</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-6.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Brad Pita
                            <div class="menu-info">
                              <div class="menu-date">Seattle</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-7.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Celline Dior
                            <div class="menu-info">
                              <div class="menu-date">Los Angeles</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-8.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Goerge Bruno Marz
                            <div class="menu-info">
                              <div class="menu-date">Las Vegas</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!-- content-grid --> 
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-md-4 -->
              
              <div class="col-md-4">
                <div class="panel widget light-widget panel-bd-top vd_bdt-yellow">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> 3(lg) 2(md) to 3(sm) to 1(xs) </h3>
                    <div class="content-grid column-xs-1 column-sm-3 column-md-2 column-lg-3  height-xs-4">
                      <ul class="list-wrapper">
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Gabriella Montagna
                            <div class="menu-info">
                              <div class="menu-date">San Diego</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li class="warning"> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-2.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Jonathan Fuzzy
                            <div class="menu-info">
                              <div class="menu-date">Seattle</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-3.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Sakura Hinata
                            <div class="menu-info">
                              <div class="menu-date">Hawaii</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-4.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Rikudou Sennin
                            <div class="menu-info">
                              <div class="menu-date">Las Vegas</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-5.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Kim Kardiosun
                            <div class="menu-info">
                              <div class="menu-date">New York</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-6.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Brad Pita
                            <div class="menu-info">
                              <div class="menu-date">Seattle</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-7.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Celline Dior
                            <div class="menu-info">
                              <div class="menu-date">Los Angeles</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/avatar/avatar-8.jpg" alt="example image"></div>
                          </a>
                          <div class="menu-text"> Goerge Bruno Marz
                            <div class="menu-info">
                              <div class="menu-date">Las Vegas</div>
                              <div class="menu-action"> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Approve" class="menu-action-icon vd_green vd_bd-green"> <i class="fa fa-check"></i> </span> <span data-placement="bottom" data-toggle="tooltip" data-original-title="Reject" class="menu-action-icon vd_red vd_bd-red"> <i class="fa fa-times"></i> </span> </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!-- content-grid --> 
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
