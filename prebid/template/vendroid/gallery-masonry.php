<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Gallery Masonry Pages HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Gallery Masonry  Pages - Responsive Admin HTML Template'; ?>
<?php $page = 'pages';   // To set active on the same id of primary menu ?>
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
                <li><a href="gallery-page.php">Gallery</a> </li>
                <li class="active">Gallery Masonry</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Gallery Masonry</h1>
              <small class="subtitle">Gallery with isotope plugins masonry style</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="panel widget light-widget">
              <div class="panel-heading no-title"> </div>
              <div class="panel-body">
                <h2 class="mgtp--5"> <span class="font-semibold">Isotope</span> Masonry </h2>
                <p>Masonry works by placing elements in optimal position based on available vertical space, sort of like a mason fitting stones in a wall. More information here: <a href="http://isotope.metafizzy.co/beta/layout-modes/masonry.html">http://isotope.metafizzy.co/beta/layout-modes/masonry.html</a></p>
              </div>
            </div>
            <div class="isotope js-isotope vd_gallery" data-isotope-options='{ "itemSelector": ".gallery-item", "masonry": { "columnWidth": 200 } }'>
              <div class="gallery-item width2"> <a href="img/photos/01.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/01.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/01.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item height2 width2"> <a href="img/photos/03.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/03.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info  text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/03.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item"> <a href="img/photos/08.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/08.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info  text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/08.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item"> <a href="img/photos/15.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/15.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/15.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item width2 height2"> <a href="img/photos/02.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/02.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/02.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item width2"> <a href="img/photos/06.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/06.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/06.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item width2"> <a href="img/photos/08.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/08.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/08.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item width2 height2"> <a href="img/photos/04.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/04.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/04.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item"> <a href="img/photos/10.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/10.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/10.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item  width2"> <a href="img/photos/09.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/09.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/09.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item width2 height2"> <a href="img/photos/01.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/01.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/01.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item"> <a href="img/photos/11.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/11.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/11.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item width2"> <a href="img/photos/12.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/12.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/12.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item"> <a href="img/photos/13.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/13.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/13.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
              <div class="gallery-item"> <a href="img/photos/14.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/14.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info text-center pd-0"> <a class="vd_bg-green vd_btn btn vd_round-btn" role="button" href="img/photos/14.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <br/>
            <ul class="pagination">
              <li><a href="#">«</a></li>
              <li class="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">»</a></li>
            </ul>
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
<?php include('templates/scripts/gallery-masonry.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>