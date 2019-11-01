<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Gallery Pages HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Gallery Pages - Responsive Admin HTML Template'; ?>
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
                <li class="active">Gallery Page</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Gallery</h1>
              <small class="subtitle">gallery with isotope plugins using filter</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <ul id="filters" class="nav nav-pills">
              <li class="active"><a  href="#photos-1" data-filter="*">All</a></li>
              <li><a  href="#photos-2" data-filter=".filter-1">Photos of You</a></li>
              <li><a  href="#photos-3" data-filter=".filter-2">Scenery</a></li>
              <li><a  href="#photos-4" data-filter=".filter-3">Vacation</a></li>
            </ul>
            <br/>
            <div class="isotope js-isotope vd_gallery">
              <div class="gallery-item width2 filter-1"> <a href="img/photos/01.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/01.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Felicious</span> de louis amigos</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/01.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-2"> <a href="img/photos/03.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/03.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Sola</span> Aprecios</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/03.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-2"> <a href="img/photos/08.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/08.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Lorem</span> ipsum</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/08.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-3"> <a href="img/photos/15.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/15.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Doler</span> sit amet</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/15.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-1"> <a href="img/photos/02.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/02.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Gracias</span> mundo</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/02.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-2"> <a href="img/photos/06.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/06.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Solero</span> dorona</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/06.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-3"> <a href="img/photos/08.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/08.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Weinto</span> grametto</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/08.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-2"> <a href="img/photos/04.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/04.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Sara</span> he yaso</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/04.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-1"> <a href="img/photos/10.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/10.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Numero</span> uno</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/10.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item  width2 filter-3"> <a href="img/photos/09.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/09.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Beon</span> dukim</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/09.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-2"> <a href="img/photos/01.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/01.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Gretia</span> de louis amigos</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/01.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-1"> <a href="img/photos/11.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/11.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Title</span> de koko</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/11.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-1"> <a href="img/photos/12.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/12.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Some</span> random text</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/12.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-3"> <a href="img/photos/13.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/13.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Soleram</span> drago</h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/13.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
              <div class="gallery-item width2 filter-2"> <a href="img/photos/14.jpg" data-rel="prettyPhoto[2]"> <img alt="example image" src="img/photos/14.jpg">
                <div class="bg-cover"></div>
                </a>
                <div class="vd_info">
                  <h3 class="mgbt-xs-15"><span class="font-semibold">Gretia</span> de louis </h3>
                  <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/photos/14.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-thumbs-up"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-comments"></i></a> </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <br/>
            <br/>
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
<?php include('templates/scripts/gallery-page.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>