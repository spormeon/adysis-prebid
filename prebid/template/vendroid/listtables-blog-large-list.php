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
                <li class="active">Blog Large List</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Blog Large List</h1>
              <small class="subtitle">List with large image on left suited for blog with landscape picture.</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-xs-12">
                <div class="panel widget light-widget">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h2 class="mgtp--5"> <span class="font-semibold">Content List</span> Class </h2>
                    <p> Using our "content-list" combination with "content-blog-large" class you can easily create a list with responsive effect under 480px screen.</p>
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
                    <h3 class="mgtp--5"> Example Blog Large List</h3>
                    <div class="content-list content-blog-large">
                      <ul class="list-wrapper">
                        <li>
                          <div class="menu-icon"> <img alt="example image" src="img/blog/01.jpg"> </div>
                          <div class="menu-text">
                            <h2 class="blog-title font-bold letter-xs"><a href="#"> Some Significant Blog Title </a></h2>
                            <div class="menu-info">
                              <div class="menu-date font-xs">January 10th, 1987 </div>
                            </div>
                            <div class="menu-tags  mgbt-xs-15"> Tags: <a href="#"><span class="label vd_bg-yellow">Sports</span></a> <a href="#"><span class="label vd_bg-yellow">Hobby</span></a> <a href="#"><span class="label vd_bg-yellow">Blogs</span></a> <a href="#"><span class="label vd_bg-yellow">Journal</span></a> </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore...</p>
                            <a class="btn vd_btn vd_bg-green btn-sm" href="#">Read More</a> </div>
                        </li>
                        <li>
                          <div class="menu-icon"> <img alt="example image" src="img/blog/02.jpg"> </div>
                          <div class="menu-text">
                            <h2 class="blog-title font-bold letter-xs"><a href="#"> Cool Obligation </a></h2>
                            <div class="menu-info">
                              <div class="menu-date font-xs">February 19th, 2017 </div>
                            </div>
                            <div class="menu-tags  mgbt-xs-15"> Tags: <a href="#"><span class="label vd_bg-yellow">Sports</span></a> <a href="#"><span class="label vd_bg-yellow">Hobby</span></a> <a href="#"><span class="label vd_bg-yellow">Blogs</span></a> <a href="#"><span class="label vd_bg-yellow">Journal</span></a> </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore...</p>
                            <a class="btn vd_btn vd_bg-green btn-sm" href="#">Read More</a> </div>
                        </li>
                        <li>
                          <div class="menu-icon"> <img alt="example image" src="img/blog/03.jpg"> </div>
                          <div class="menu-text">
                            <h2 class="blog-title font-bold letter-xs"><a href="#"> Get What You Want </a></h2>
                            <div class="menu-info">
                              <div class="menu-date font-xs">March 24th, 2014 </div>
                            </div>
                            <div class="menu-tags  mgbt-xs-15"> Tags: <a href="#"><span class="label vd_bg-yellow">Sports</span></a> <a href="#"><span class="label vd_bg-yellow">Hobby</span></a> <a href="#"><span class="label vd_bg-yellow">Blogs</span></a> <a href="#"><span class="label vd_bg-yellow">Journal</span></a> </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore...</p>
                            <a class="btn vd_btn vd_bg-green btn-sm" href="#">Read More</a> </div>
                        </li>
                        <li>
                          <div class="menu-icon"> <img alt="example image" src="img/blog/01.jpg"> </div>
                          <div class="menu-text">
                            <h2 class="blog-title font-bold letter-xs"><a href="#"> Excelent in Every Step </a></h2>
                            <div class="menu-info">
                              <div class="menu-date font-xs">November 1st, 2011 </div>
                            </div>
                            <div class="menu-tags  mgbt-xs-15"> Tags: <a href="#"><span class="label vd_bg-yellow">Sports</span></a> <a href="#"><span class="label vd_bg-yellow">Hobby</span></a> <a href="#"><span class="label vd_bg-yellow">Blogs</span></a> <a href="#"><span class="label vd_bg-yellow">Journal</span></a> </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore...</p>
                            <a class="btn vd_btn vd_bg-green btn-sm" href="#">Read More</a> </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- Panel Widget --> 
                
              </div>
              <!-- col-md-4 -->
              
              <div class="col-md-4">
                <div class="panel widget light-widget panel-bd-top vd_bdt-yellow">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <h3 class="mgtp--5"> Medium Size for Sidebar</h3>
                    <div class="content-list content-image">
                      <ul class="list-wrapper no-bd-btm">
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/blog/01-square.jpg" alt="example image"></div>
                          <div class="menu-text pd-5">
                            <h5 class="mgbt-xs-0">Blog Sidebar Title</h5>
                            <div class="menu-info">
                              <div class="menu-date font-xs">Posted: January 10th, 1987 </div>
                            </div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/blog/02-square.jpg" alt="example image"></div>
                          <div class="menu-text pd-5">
                            <h5 class="mgbt-xs-0">Cool Obligation</h5>
                            <div class="menu-info">
                              <div class="menu-date font-xs">Posted: February 19th, 2017 </div>
                            </div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/blog/03-square.jpg" alt="example image"></div>
                          <div class="menu-text pd-5">
                            <h5 class="mgbt-xs-0">Get What You Want</h5>
                            <div class="menu-info">
                              <div class="menu-date font-xs">Posted: March 24th, 2014 </div>
                            </div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/blog/01-square.jpg" alt="example image"></div>
                          <div class="menu-text pd-5">
                            <h5 class="mgbt-xs-0">Excelent in Every Step</h5>
                            <div class="menu-info">
                              <div class="menu-date font-xs">Posted: November 1st, 2011 </div>
                            </div>
                          </div>
                          </a> </li>
                        <li> <a href="#">
                          <div class="menu-icon"><img src="img/blog/02-square.jpg" alt="example image"></div>
                          <div class="menu-text pd-5">
                            <h5 class="mgbt-xs-0">True Skill Leads Nowhere</h5>
                            <div class="menu-info">
                              <div class="menu-date font-xs">Posted: December 10th, 2014 </div>
                            </div>
                          </div>
                          </a> </li>
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
