<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Vendroid Dashboard - Ultimate Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, '; ?>
<?php $description = 'Responsive Admin Template for multipurpose use'; ?>
<?php $page = 'login-page';   // To set active on the same id of primary menu ?>
<?php $id_page = 'login-page';   // To set active on the same id of primary menu ?>
<!-- End of Data -->
<?php $layout="middle-layout" ; 
	  $body_extra_class="remove-navbar front-layout"; 
	  $top_menu_extra_class="vd_bg-green"; 
	  $header="header-front";  
	  
	  $footer = "footer-4"; 
	  $bottom_extra_class = "vd_bg-dark-green pd-20"; 
	  $background = "background-login"; 
	  
	  $logo_path = 'img/logo-white.png'; 
      $specific_css[0] = 'css/animate.css';
			
	  ?>
<?php $navbar_left_config = 0; ?>
<?php $navbar_right_config = 0; ?>
<?php require_once('templates/headers/'.$header.'.tpl.php'); ?>

<div class="content">
<div id="front-1-banner" class="vd_banner vd_bg-dark-green clearfix slide-waypoint" data-waypoint="home" >
  <div class="container">
    <div class="vd_content vd_info-parent clearfix">
      <div class="word-header">
        <h1 class="font-semibold text-center vd_white"><strong>SUPER FLEXIBLE</strong> ADMIN THEME</h1>
      </div>
      <div class="word-subheader">
        <h3 class="text-center vd_white">Fast Deployment and 100% Full Control Admin Theme</h3>
      </div>
      <div class="icon-banner icon-1"><img alt="example image" src="img/banner/icon-1.png" /></div>
      <div class="icon-banner word-1"><img alt="example image" src="img/banner/word-1.png" /></div>
      <div class="icon-banner icon-2"><img alt="example image" src="img/banner/icon-2.png" /></div>
      <div class="icon-banner word-2"><img alt="example image" src="img/banner/word-2.png" /></div>
      <div class="icon-banner icon-3"><img alt="example image" src="img/banner/icon-3.png" /></div>
      <div class="icon-banner word-3"><img alt="example image" src="img/banner/word-3.png" /></div>
      <div class="icon-banner icon-4"><img alt="example image" src="img/banner/icon-4.png" /></div>
    </div>
  </div>
</div>
<div class="vd_banner vd_bg-white clearfix pd-20" >
  <div class="container">
    <div class="vd_content clearfix">
      <div class="row">
        <div class="col-md-4 mgbt-sm-10 mgbt-md-0">
          <div class="highlight-word appear">
            <div class="font-semibold font-md"><strong>CREATE AN ACCOUNT</strong></div>
            <div class="font-md deploy-word" >Deploy in 1 minute</div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row  highlight-form appear">
            <div class="col-sm-4">
              <input class="mgtp-5 input-lg vd_white vd_bg-black-80" type="email" placeholder="email">
            </div>
            <div class="col-sm-4 mgbt-xs-10 mgbt-sm-0 ">
              <input class="mgtp-5 input-lg vd_white vd_bg-black-80" type="password" placeholder="password">
            </div>
            <div class="col-sm-4  mgbt-xs-10"> <a class="btn vd_btn btn-lg vd_btn-bevel vd_bg-green">Get Started !</a> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="front-1-services" class="vd_section clearfix slide-waypoint" data-waypoint="services">
  <div class="container">
    <div class="vd_content clearfix">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="vd_visitor-counter">
            <div class="item-row">
              <div class="item  vd_green break hidden-xs"> <i class="fa fa-minus"></i> </div>
              <div class="item vd_bg-green break"> 1
                <div class="line"></div>
              </div>
              <div class="item vd_bg-green"> 2
                <div class="line"></div>
              </div>
              <div class="item vd_bg-green"> 3
                <div class="line"></div>
              </div>
              <div class="item vd_bg-green break"> 4
                <div class="line"></div>
              </div>
              <div class="item vd_bg-green"> 2
                <div class="line"></div>
              </div>
              <div class="item vd_bg-green"> 3
                <div class="line"></div>
              </div>
              <div class="item vd_bg-green break"> 4
                <div class="line"></div>
              </div>
              <div class="item  vd_green hidden-xs"> <i class="fa fa-minus"></i> </div>
            </div>
            <!-- item-row --> 
          </div>
          <!-- vd_visitor-counter -->
          <div class="text-center mgtp-20 visitor-word appear">
            <h2>Happy Customers and Still Counting...</h2>
          </div>
        </div>
        <!-- col-md-12 --> 
      </div>
      <!-- row --> 
      <br />
      <br />
      <br />
      <div class="row mgtp-20">
        <div class="col-md-4 mgbt-sm-20">
          <div class="text-center clearfix feature-1">
            <p class="mgbt-xs-20"><img alt="example image" src="img/icons/RoundIcons-Free-Set-13.png" /></p>
            <h2 class="font-semibold mgbt-xs-15">Super Flexible Layout</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti </p>
          </div>
        </div>
        <div class="col-md-4 mgbt-sm-20">
          <div class="text-center clearfix feature-2">
            <p class="mgbt-xs-20"><img alt="example image" src="img/icons/RoundIcons-Free-Set-20.png" /></p>
            <h2 class="font-semibold mgbt-xs-15">100% Responsive</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti </p>
          </div>
        </div>
        <div class="col-md-4 mgbt-sm-20">
          <div class="text-center clearfix feature-3">
            <p class="mgbt-xs-20"><img alt="example image" src="img/icons/RoundIcons-Free-Set-26.png" /></p>
            <h2 class="font-semibold mgbt-xs-15">Fast Deployment</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="front-1-features" class="vd_section vd_banner vd_bg-white clearfix slide-waypoint" data-waypoint="features" >
  <div class="container">
    <div class="vd_content clearfix">
      <div class="row">
        <div class="col-md-5 mgbt-xs-20">
          <h2 class="h1"><strong>Why</strong> <span class="font-light">Us?</span></h2>
          <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
          <br/>
          <p><a class="btn vd_btn vd_btn-bevel vd_bg-green btn-lg" href="http://themeforest.net/item/vendroid-super-flexible-multipurpose-admin-theme/7717536?ref=Venmond">Buy Theme Now</a></p>
          <br/>
        </div>
        <div class="col-md-6 col-md-offset-1">
          <div class="text-center"> <iframe src="//player.vimeo.com/video/50920812?title=0&amp;byline=0&amp;portrait=0&amp;color=f0001c" width="500" height="281" class="no-bd"  allowfullscreen></iframe>  </div>
        </div>
      </div>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
      <div class="row">
        <div class="col-md-5 mgbt-xs-20">
          <div class="text-center"> <img alt="example image" src="img/banner/responsive-device.png" /> </div>
        </div>
        <div class="col-md-7">
          <h2 class="h1"><strong>Responsive</strong> <span class="font-light">In All Devices</span></h2>
          <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
          <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
        </div>
      </div>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
      <div class="row">
        <div class="col-md-12 text-center mgbt-xs-20">
           <div class="btn vd_btn vd_bg-white vd_round-btn  vd_bd-green vd_green btn-lg  mgbt-xs-15"><i class="fa  fa-camera fa-fw"></i></div>
          <h2 class="font-semibold"> Vendroid Screen Shot </h2><br/>
        </div>
        <div class="vd_gallery">
          <div class="col-lg-4 col-md-6 col-sm-6 mgbt-xs-15">
            <div class="gallery-item full-width gallery-1"> <a href="img/screenshot/vendroid-01.jpg"> <img alt="example image" src="img/screenshot/vendroid-01-thumbs.jpg" />
              <div class="bg-cover"></div>
              </a>
              <div class="vd_info">
                <h3 class="mgbt-xs-15"><span class="font-semibold">Stunning</span> Dashboard</h3>
                <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/screenshot/vendroid-01.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-link"></i></a> </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mgbt-xs-15">
            <div class="gallery-item full-width gallery-2"> <a href="img/screenshot/vendroid-02.jpg"> <img alt="example image" src="img/screenshot/vendroid-02-thumbs.jpg" />
              <div class="bg-cover"></div>
              </a>
              <div class="vd_info">
                <h3 class="mgbt-xs-15"><span class="font-semibold">A Lot of</span> premade Pages</h3>
                <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/screenshot/vendroid-02.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-link"></i></a> </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mgbt-xs-15">
            <div class="gallery-item full-width gallery-3"> <a href="img/screenshot/vendroid-03.jpg"> <img alt="example image" src="img/screenshot/vendroid-03-thumbs.jpg" />
              <div class="bg-cover"></div>
              </a>
              <div class="vd_info">
                <h3 class="mgbt-xs-15"><span class="font-semibold">Dashboard </span>Examples</h3>
                <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/screenshot/vendroid-03.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-link"></i></a> </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mgbt-xs-15">
            <div class="gallery-item full-width gallery-4"> <a href="img/screenshot/vendroid-04.jpg"> <img alt="example image" src="img/screenshot/vendroid-04-thumbs.jpg" />
              <div class="bg-cover"></div>
              </a>
              <div class="vd_info">
                <h3 class="mgbt-xs-15"><span class="font-semibold">A lot of Skin and Functionality</span> to Choose</h3>
                <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/screenshot/vendroid-04.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-link"></i></a> </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mgbt-xs-15">
            <div class="gallery-item full-width gallery-5"> <a href="img/screenshot/vendroid-05.jpg"> <img alt="example image" src="img/screenshot/vendroid-05-thumbs.jpg" />
              <div class="bg-cover"></div>
              </a>
              <div class="vd_info">
                <h3 class="mgbt-xs-15"><span class="font-semibold">Neat </span> Invoice</h3>
                <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/screenshot/vendroid-05.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-link"></i></a> </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mgbt-xs-15">
            <div class="gallery-item full-width gallery-6"> <a href="img/screenshot/vendroid-06.jpg"> <img alt="example image" src="img/screenshot/vendroid-06-thumbs.jpg" />
              <div class="bg-cover"></div>
              </a>
              <div class="vd_info">
                <h3 class="mgbt-xs-15"><span class="font-semibold">Email</span> Ready Page</h3>
                <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/screenshot/vendroid-06.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-link"></i></a> </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mgbt-xs-15">
            <div class="gallery-item full-width gallery-7"> <a href="img/screenshot/vendroid-07.jpg"> <img alt="example image" src="img/screenshot/vendroid-07-thumbs.jpg" />
              <div class="bg-cover"></div>
              </a>
              <div class="vd_info">
                <h3 class="mgbt-xs-15"><span class="font-semibold">Website Layout Tour Guide</span> Ready Examples</h3>
                <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/screenshot/vendroid-07.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-link"></i></a> </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mgbt-xs-15">
            <div class="gallery-item full-width gallery-8"> <a href="img/screenshot/vendroid-08.jpg"> <img alt="example image" src="img/screenshot/vendroid-08-thumbs.jpg" />
              <div class="bg-cover"></div>
              </a>
              <div class="vd_info">
                <h3 class="mgbt-xs-15"><span class="font-semibold">Registration, Login, Error</span> and many example form</h3>
                <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/screenshot/vendroid-08.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-link"></i></a> </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mgbt-xs-15">
            <div class="gallery-item full-width gallery-9"> <a href="img/screenshot/vendroid-09.jpg"> <img alt="example image" src="img/screenshot/vendroid-09-thumbs.jpg" />
              <div class="bg-cover"></div>
              </a>
              <div class="vd_info">
                <h3 class="mgbt-xs-15"><span class="font-semibold">User Profile</span> Page</h3>
                <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="img/screenshot/vendroid-09.jpg"  data-rel="prettyPhoto[1]"><i class="fa fa-search"></i></a> <a class="vd_bg-green vd_white mgr-10 btn vd_round-btn btn-xs" role="button" href="#"><i class="fa fa-link"></i></a> </div>
            </div>
          </div>
        </div>
        <!-- vd_gallery -->
        
      </div>
    </div>
  </div>
</div>
<div id="front-1-clients" class="vd_section vd_bg-soft-yellow clearfix slide-waypoint" data-waypoint="clients">
  <div class="container">
    <div class="vd_content clearfix">
      <div class="row">
        <div class="col-md-offset-2 col-md-8">
          <h1 class="font-semibold mgbt-xs-20 vd_white"><strong>What Do</strong> People Say?</h1>
          <div class="vd_testimonial clearfix">
            <div class="vd_carousel-control"> <a href="#"> <i class="fa fa-chevron-left"></i></a> <a href="#"><i class="fa fa-chevron-right"></i></a> </div>
            <div class="vd_carousel">
              <div class="vd_carousel-column">
                <div class="content-list  content-large">
                  <div class="menu-icon"> <img alt="example image" class="img-circle" src="img/avatar/avatar.jpg" /> </div>
                  <div class="menu-text"> <br/>
                    <br/>
                    <h4 class="vd_black font-semibold mgbt-xs-0"><strong>Angela Deborah</strong></h4>
                    <p class="vd_black font-semibold">CEO of Vendroid, Inc.</p>
                  </div>
                </div>
                <div class="clearfix mgtp-20">
                  <div class="testimonial-word-wrapper">
                    <div class="caret-icon"> </div>
                    <div class="testimonial-word font-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " </div>
                  </div>
                </div>
              </div>
              <div class="vd_carousel-column">
                <div class="content-list  content-large">
                  <div class="menu-icon"> <img alt="example image" class="img-circle" src="img/avatar/avatar-2.jpg" /> </div>
                  <div class="menu-text"> <br/>
                    <br/>
                    <h4 class="vd_black font-semibold mgbt-xs-0"><strong>Brad Dominican</strong></h4>
                    <p class="vd_black font-semibold">IT Director of My Company Ltd.</p>
                  </div>
                </div>
                <div class="clearfix mgtp-20">
                  <div class="testimonial-word-wrapper">
                    <div class="caret-icon"> </div>
                    <div class="testimonial-word font-sm"> Ut enim  !!! Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi... " </div>
                  </div>
                </div>
              </div>
              <div class="vd_carousel-column">
                <div class="content-list  content-large">
                  <div class="menu-icon"> <img alt="example image" class="img-circle" src="img/avatar/avatar-3.jpg" /> </div>
                  <div class="menu-text"> <br/>
                    <br/>
                    <h4 class="vd_black font-semibold mgbt-xs-0"><strong>Angela Brudsey</strong></h4>
                    <p class="vd_black font-semibold">Director of Microhard</p>
                  </div>
                </div>
                <div class="clearfix mgtp-20">
                  <div class="testimonial-word-wrapper">
                    <div class="caret-icon"> </div>
                    <div class="testimonial-word font-sm"> Ut enim  !!! Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi... " </div>
                  </div>
                </div>
              </div>
              <div class="vd_carousel-column">
                <div class="content-list  content-large">
                  <div class="menu-icon"> <img alt="example image" class="img-circle" src="img/avatar/avatar-4.jpg" /> </div>
                  <div class="menu-text"> <br/>
                    <br/>
                    <h4 class="vd_black font-semibold mgbt-xs-0"><strong>Gregory Spam</strong></h4>
                    <p class="vd_black font-semibold">Staff of Technica Holdings</p>
                  </div>
                </div>
                <div class="clearfix mgtp-20">
                  <div class="testimonial-word-wrapper">
                    <div class="caret-icon"> </div>
                    <div class="testimonial-word font-sm"> Ut enim  !!! Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi... " </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- vd_carousel --> 
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="front-1-contacts" class="vd_section vd_bg-dark-green clearfix slide-waypoint" data-waypoint="contact">
  <div class="container">
    <div class="vd_content clearfix">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center vd_white"> What are you waiting for? </h1>
          <br/>
          <br/>
          <div class="text-center"> <a class="btn vd_btn vd_btn-bevel vd_bg-red btn-lg font-semibold" href="http://themeforest.net/item/vendroid-super-flexible-multipurpose-admin-theme/7717536?ref=Venmond">BUY THIS THEME</a> </div>
          <br/>
          <br/>
          <h1 class="text-center vd_white"> or... </h1>
          <br/>
          <br/>
          <br/>
          <h2 class="text-center vd_white font-semibold mgbt-xs-20"> CONTACT US </h2>
        </div>
        <div class="col-md-offset-3 col-sm-offset-2 col-md-6 col-sm-8">
          <div class="panel">
            <div class="panel-body vd_bg-green radius-10" >
              <div id="contact-form-result">
                <div id="success" class="alert alert-success hidden">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                  We have <strong>successfully</strong> received your Message and will get Back to you as soon as possible.</div>
                <div id="error" class="alert alert-danger hidden">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                </div>
                <div id="empty" class="alert alert-danger hidden">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                  Please <strong>Fill up</strong> all the Fields and Try Again.</div>
                <div id="unexpected" class="alert alert-danger hidden">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>
                  An <strong>unexpected error</strong> occured. Please Try Again later.</div>
              </div>
              <form role="form" action="functions/contact.php" id="contact-form-widget" class="form-horizontal">
                <input type="hidden" id="admin-email" name="admin-email" value="info@venmond.com">
                <input type="hidden" id="admin-name" name="admin-name" value="Venmond, Inc.">
                <div class="row">
                  <div class="col-md-12 mgbt-xs-10">
                    <label class="control-label vd_white">Name</label>
                    <div class="controls">
                      <input id="contact-form-name" name="contact-form-name" type="text" required placeholder="" class="no-bd">
                    </div>
                  </div>
                  <div class="col-md-12 mgbt-xs-10">
                    <label class="control-label vd_white">Email</label>
                    <div class="controls">
                      <input id="contact-form-email" name="contact-form-email"  type="email" required placeholder=""  class="no-bd">
                    </div>
                  </div>
                  <div class="col-md-12 mgbt-xs-15">
                    <label class="control-label vd_white">Message</label>
                    <div class="controls">
                      <textarea id="contact-form-message" name="contact-form-message" rows="4" required  class="no-bd"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12 mgbt-xs-10">
                    <button class="btn vd_btn vd_btn-bevel vd_bg-yellow font-semibold" id="contact-form-submit" name="contact-form-submit"><i class="append-icon fa fa-envelope"></i>SEND MESSAGE</button>
                  </div>
                </div>
              </form>
            </div>
			<!-- panel-body -->
          </div>
		  <!-- panel -->
        </div>
		<!-- col-md-offset-3 -->
		
      </div>
	  <!-- row -->
    </div>
	<!-- vd_content -->
  </div>
  <!-- container -->
</div>
<!-- front-1-contacts -->

</div>
<!-- content -->

<!-- Middle Content End --> 


<?php require_once('templates/footers/'.$footer.'.tpl.php'); ?>

<!-- Specific Page Scripts Put Here -->
<?php include('templates/scripts/front-1.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>
