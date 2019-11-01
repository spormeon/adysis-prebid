<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Vendroid Dashboard - Ultimate Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Metro Slider, Elegant HTML5 Theme'; ?>
<?php $description = 'Multipurpose Responsive HTML5 Themes with Animated Metro Slider - Vencorp'; ?>
<?php $page = 'login-page';   // To set active on the same id of primary menu ?>
<?php $id_page = 'login-page';   // To set active on the same id of primary menu ?>
<!-- End of Data -->
<?php $layout="middle-layout" ; 
	  $body_extra_class="remove-navbar front-layout"; 
	  $top_menu_extra_class="vd_bg-white light-top-menu"; 
	  $header="header-front-2";  
	  
	  $footer = "footer-4"; 
	  $bottom_extra_class = "vd_bg-dark-green pd-20"; 
	  $background = "background-login"; 	  
	  	  
      $navbar_left_config = 0; 
	  $navbar_right_config = 0;
	  
	  $specific_css[0]="plugins/layerslider/css/layerslider.css";
      $specific_css[1] ="css/animate.css";
	  	  
	  ?>

<?php require_once('templates/headers/'.$header.'.tpl.php'); ?>

<div class="content">
<div id="front-1-banner" class="vd_banner vd_bg-white clearfix slide-waypoint" data-waypoint="home" >
		<div id="layerslider" style="width:100%;height:500px;">
			<div class="ls-slide" data-ls="slidedelay:7500;transition2d:8;">
                <img src="img/banner/fw-1.jpg" class="ls-bg" alt="Slide background"/>
                <p class="ls-l font-sm" style="top:80px; left:190px;"  data-ls="offsetyin:-100; offsetxin:0;">introducing...</p>
                <img alt="example image" src="img/banner/banner-front-2-page-1-logo--only.png" class="ls-l" style="top:130px; left:110px;" data-ls="delayin: 1200;easingin:easeOutQuart; offsetyin:-0; offsetxin:0; rotateyin:-60;" />
                <img alt="example image" src="img/banner/banner-front-2-page-1-logo-word.png" class="ls-l" style="top:320px; left:110px;" data-ls="delayin: 1600;easingin:easeOutQuint; offsetyin:100; offsetxin:0;" />  
                <p class="ls-l" style="top:365px; left:157px;  font-size:24px;" data-ls="delayin: 1700;easingin:easeOutQuint; offsetyin:200; offsetxin:0;">  ADMIN THEME </p>
                
                
				<p class="ls-l" style="top:60px;left:500px;font-weight: 300;height:40px;padding-right:10px;padding-left:10px;font-size:24px;line-height:37px;color:#ffffff;background:#fa6b4b;border-radius:4px;white-space: nowrap;" data-ls="durationin:1500;delayin:2200;rotatein:20;rotatexin:30;scalexin:3;scaleyin:3;transformoriginin:left 50% 0;durationout:750;rotateout:20;rotatexout:-30;scalexout:0;scaleyout:0;transformoriginout:left 50% 0;">
					RICH FUNCTIONALITY
				</p>
				<p class="ls-l" style="top:100px;left:500px;font-weight: 300;font-size:18px;color:#333;white-space: nowrap;" data-ls="offsetxin:0;durationin:1500;delayin:2600;rotateyin:90;skewxin:60;transformoriginin:25% 50% 0;offsetxout:100;durationout:750;skewxout:60;">
					minimize, fullscreen, ajax loading, and many more..
				</p>
				<p class="ls-l" style="top:160px;left:500px;font-weight: 300;height:40px;padding-right:10px;padding-left:10px;font-size:24px;line-height:37px;color:#ffffff;background:#fa6b4b;border-radius:4px;white-space: nowrap;" data-ls="durationin:1500;delayin:2900;rotatein:20;rotatexin:30;scalexin:1.5;scaleyin:1.5;transformoriginin:left 50% 0;durationout:750;rotateout:20;rotatexout:-30;scalexout:0;scaleyout:0;transformoriginout:left 50% 0;">
					READY TO USE PAGES &amp; WIDGETS
				</p>
				<p class="ls-l" style="top:200px;left:500px;font-weight: 300;font-size:18px;color:#333;white-space: nowrap;" data-ls="offsetxin:0;durationin:1500;delayin:3300;rotateyin:90;skewxin:60;transformoriginin:25% 50% 0;offsetxout:100;durationout:750;skewxout:60;">
					90+ Pages and A lot of Widget examples
				</p>
				<p class="ls-l" style="top:260px;left:500px;font-weight: 300;height:40px;padding-right:10px;padding-left:10px;font-size:24px;line-height:37px;color:#ffffff;background:#fa6b4b;border-radius:4px;white-space: nowrap;" data-ls="durationin:1500;delayin:3600;rotatein:20;rotatexin:30;scalexin:1.5;scaleyin:1.5;transformoriginin:left 50% 0;durationout:750;rotateout:20;rotatexout:-30;scalexout:0;scaleyout:0;transformoriginout:left 50% 0;">
					FAST CODING
				</p>
				<p class="ls-l" style="top:300px;left:499px;font-weight: 300;font-size:18px;color:#333;white-space: nowrap;" data-ls="offsetxin:0;durationin:1500;delayin:4000;rotateyin:90;skewxin:60;transformoriginin:25% 50% 0;offsetxout:100;durationout:750;skewxout:60;">
					Latest bootstrap and custom css class for rapid editting
				</p>
				<p class="ls-l" style="top:360px;left:500px;font-weight: 300;height:40px;padding-right:10px;padding-left:10px;font-size:24px;line-height:37px;color:#ffffff;background:#fa6b4b;border-radius:4px;white-space: nowrap;" data-ls="durationin:1500;delayin:4300;rotatein:20;rotatexin:30;scalexin:1.5;scaleyin:1.5;transformoriginin:left 50% 0;durationout:750;rotateout:20;rotatexout:-30;scalexout:0;scaleyout:0;transformoriginout:left 50% 0;">
					SUPER FLEXIBLE LAYOUT
				</p>
				<p class="ls-l" style="top:400px;left:499px;font-weight: 300;font-size:18px;color:#333;white-space: nowrap;" data-ls="offsetxin:0;durationin:1500;delayin:4600;rotateyin:90;skewxin:60;transformoriginin:25% 50% 0;offsetxout:100;durationout:750;skewxout:60;">
					Unlimited Combination of Layout
				</p>   
                <a href="index.php" class="ls-l"  style="top:220px;left:1000px;" data-ls="durationin:1500;delayin:5000;rotatein:20;rotatexin:30;scalexin:1.5;scaleyin:1.5;transformoriginin:left 50% 0;durationout:750;rotateout:20;rotatexout:-30;scalexout:0;scaleyout:0;transformoriginout:left 50% 0;">  
				<img alt="example image" src="img/banner/take-quick-tour-image.png"  >
                </a>
 <!--               	<span class="font-sm vd_black mgbt-xs-5">Take a quick tour..</span><br/>
                	<a class="btn vd_btn btn-lg vd_bg-green" href="index.php">
						LIVE PREVIEW <i class="fa fa-angle-double-right prepend-icon"></i>
                    </a>
				</p>    -->             
                               
				<img alt="example image" class="ls-l ls-linkto-3" style="top:410px;left:200px;white-space: nowrap;" data-ls="offsetxin:-50;delayin:5000;offsetxout:-50;" src="img/banner/left.png" ><img alt="example image" class="ls-l ls-linkto-2" style="top:410px;left:250px;white-space: nowrap;" data-ls="offsetxin:50;delayin:5000;offsetxout:50;" src="img/banner/right.png" >           
                

			</div>
                   
			<div class="ls-slide" data-ls="transition2d:8; slidedelay:9000;">
                <img src="img/banner/fw-1.jpg" class="ls-bg" alt="Slide background"/>            
                <img alt="example image" src="img/banner/banner-front-2-page-2-logo-center-macbook.png" class="ls-l" style="top:165px; left:670px;" data-ls="delayin: 5600;easingin:easeOutQuart; offsetyin:-50; offsetxin:0; durationin:2000;" />             
                <img alt="example image" src="img/banner/banner-front-2-page-2-logo-center-desktop.png" class="ls-l" style="top:40px; left:425px;" data-ls="delayin: 200;easingin:easeOutQuart; offsetyin:-200; offsetxin:0; durationin:2000;" />
                <img alt="example image" src="img/banner/banner-front-2-page-2-logo-right-desktop.png" class="ls-l" style="top:40px; left:800px;" data-ls="delayin: 800;easingin:easeOutQuart; offsetyin:-0; offsetxin:0; rotateyin:-90; durationin:2000; showuntil:1200; offsetyout:210; offsetxout:360; durationout:620; easingout:linear; scaleyout:1.5; scalexout:1.5;" />       
                <img alt="example image" src="img/banner/banner-front-2-page-2-logo-left-desktop.png" class="ls-l" style="top:40px; left:50px;" data-ls="delayin: 800; easingin:easeOutQuart; offsetyin:-0; offsetxin:0; rotateyin:90; durationin:2000; showuntil:1200; offsetyout:210; offsetxout:-400; durationout:600; easingout:linear; scaleyout:1.5; scalexout:1.5;" />                 
                <p class="ls-l font-semibold" style="top:420px;left:540px;font-weight: 300;font-size:18px;color:#666;white-space: nowrap;" data-ls="offsetxin:0; durationin:1500; offsetyin: 120; delayin:800;offsetxout:400;durationout:100;skewxout:60; showuntil:1000;">
                    Perfect View on Desktop
                </p> 
                <p class="ls-l font-semibold" style="top:420px;left:540px;font-weight: 300;font-size:18px;color:#666;white-space: nowrap;" data-ls="offsetxin:0; durationin:1500; offsetyin: 120; delayin:2800; offsetxout:400;durationout:100;skewxout:60; showuntil:1000;">
                    also..
                </p> 
                <p class="ls-l font-semibold" style="top:420px;left:540px;font-weight: 300;font-size:18px;color:#666;white-space: nowrap;" data-ls="offsetxin:0; durationin:1500; offsetyin: 120; delayin:2800; offsetxout:400;durationout:100;skewxout:60; showuntil:1000;">
                    also..
                </p>       
                    <p class="ls-l" style="top:420px;left:420px;font-weight: 300;height:40px;padding-right:10px;padding-left:10px;font-size:30px;line-height:37px;color:#ffffff;background:#1FAE66;border-radius:3px;white-space: nowrap;" data-ls="offsetxin:0;durationin:2000;delayin:5800;easingin:easeOutElastic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:-200;durationout:1000;">
                        FULLY RESPONSIVE
                    </p> 
                    <p class="ls-l" style="top:420px;left:705px;font-weight: 300;height:40px;padding-right:10px;padding-left:10px;font-size:30px;line-height:37px;white-space: nowrap;" data-ls="offsetxin:100;durationin:2000;delayin:5800;easingin:easeOutElastic;offsetxout:-200;durationout:1000;">
                        in all devices
                    </p>                                             
                <img alt="example image" src="img/banner/banner-front-2-page-2-logo-right-desktop-big.png" class="ls-l" style="top:150px; left:1100px;" data-ls="delayin: 4000;easingin:easeOutQuart; offsetyin:-220; offsetxin:-450;  durationin:2000; scalexin:.5; scaleyin:.5;" /> 
                <img alt="example image" src="img/banner/banner-front-2-page-2-logo-left-desktop-big.png" class="ls-l" style="top:150px; left:-500px;" data-ls="delayin: 4000;easingin:easeOutQuart; offsetyin:-220; offsetxin:450;  durationin:2000; scalexin:.5; scaleyin:.5;" />   
                <img alt="example image" src="img/banner/banner-front-2-page-2-logo-center-tab.png" class="ls-l" style="top:185px; left:345px;" data-ls="delayin: 5800;easingin:easeOutQuart; offsetyin:-50; offsetxin:0; durationin:2000;" />  
                <img alt="example image" src="img/banner/banner-front-2-page-2-logo-center-phone.png" class="ls-l" style="top:262px; left:460px;" data-ls="delayin: 6000;easingin:easeOutQuart; offsetyin:-50; offsetxin:0; durationin:2000;" /> 
				<img alt="example image" class="ls-l ls-linkto-1" style="top:40px;left:600px;white-space: nowrap;" data-ls="offsetxin:-50;delayin:6500;offsetxout:-50;" src="img/banner/left.png" ><img alt="example image" class="ls-l ls-linkto-3" style="top:40px;left:650px;white-space: nowrap;" data-ls="offsetxin:50;delayin:6500;offsetxout:50;" src="img/banner/right.png">                 
            
			</div>

			<div class="ls-slide" data-ls="transition2d:8; slidedelay:9000;">
				<img src="img/banner/fw-1.jpg" class="ls-bg" alt="Slide background"/>
                <img alt="example image" class="ls-l" style="top:50px;left:500px;white-space: nowrap;" data-ls="offsetxin:0; offsetyin: 100; durationin:1500; delayin:800; offsetxout:-300;parallaxlevel:-10;" src="img/banner/banner-front-2-page-3-desktop-1.png">
                <img alt="example image" class="ls-l" style="top:130px;left:600px;white-space: nowrap;" data-ls="offsetxin:0; offsetyin: 100; durationin:1500; delayin:1300; offsetxout:-300;parallaxlevel:1;" src="img/banner/banner-front-2-page-3-desktop-2.png">   
                <img alt="example image" class="ls-l" style="top:220px;left:700px;white-space: nowrap;" data-ls="offsetxin:0; offsetyin: 100; durationin:1500; delayin:1800; offsetxout:-300;parallaxlevel:10;" src="img/banner/banner-front-2-page-3-desktop-3.png">                                
				<p class="ls-l vd_red" style="top:70px;left:80px;font-weight: 300;height:40px;padding-right:10px;padding-left:10px;font-size:26px;line-height:28px;white-space: nowrap;" data-ls="offsetxin:-50;durationin:1000;delayin:200;easingin:easeOutCubic;offsetxout:-200;durationout:1000;">
					PREMADE
				</p>
				<p class="ls-l vd_red" style="top:100px;left:80px;font-weight: 300;height:40px;padding-right:10px;padding-left:10px;font-size:26px;line-height:28px;white-space: nowrap;" data-ls="offsetxin:50;durationin:1000;delayin:200;easingin:easeOutCubic;offsetxout:-200;durationout:1000;">
                    <strong class="font-semibold">DASHBOARDS READY</strong>
				</p>                
				<p class="ls-l" style="top:150px;left:90px;font-size:18px;white-space: nowrap;" data-ls="offsetxin:-20;durationin:1500;delayin:2500;easingin:easeOutCubic;offsetxout:-400;">
					<i class="fa fa-check vd_green"></i>
				</p>
				<p class="ls-l" style="top:150px;left:120px;font-size:18px;white-space: nowrap;" data-ls="offsetxin:20;durationin:1500;delayin:2500;easingin:easeOutCubic;offsetxout:-400;">
					blogs
				</p>  
				<p class="ls-l" style="top:180px;left:90px;font-size:18px;white-space: nowrap;" data-ls="offsetxin:-20;durationin:1500;delayin:3000;easingin:easeOutCubic;offsetxout:-400;">
					<i class="fa fa-check vd_green"></i>
				</p>
				<p class="ls-l" style="top:180px;left:120px;font-size:18px;white-space: nowrap;" data-ls="offsetxin:20;durationin:1500;delayin:3000;easingin:easeOutCubic;offsetxout:-400;">
					analytics
				</p>  
				<p class="ls-l" style="top:210px;left:90px;font-size:18px;white-space: nowrap;" data-ls="offsetxin:-20;durationin:1500;delayin:3500;easingin:easeOutCubic;offsetxout:-400;">
					<i class="fa fa-check vd_green"></i>
				</p>
				<p class="ls-l" style="top:210px;left:120px;font-size:18px;white-space: nowrap;" data-ls="offsetxin:20;durationin:1500;delayin:3500;easingin:easeOutCubic;offsetxout:-400;">
					all purpose
				</p>   
				<p class="ls-l" style="top:240px;left:90px;font-size:18px;white-space: nowrap;" data-ls="offsetxin:-20;durationin:1500;delayin:4000;easingin:easeOutCubic;offsetxout:-400;">
					<i class="fa fa-check vd_green"></i>
				</p>
				<p class="ls-l" style="top:240px;left:120px;font-size:18px;white-space: nowrap;" data-ls="offsetxin:20;durationin:1500;delayin:4000;easingin:easeOutCubic;offsetxout:-400;">
					e-commerce
				</p>  
				<p class="ls-l" style="top:270px;left:90px;font-size:18px;white-space: nowrap;" data-ls="offsetxin:-20;durationin:1500;delayin:4500;easingin:easeOutCubic;offsetxout:-400;">
					<i class="fa fa-check vd_green"></i>
				</p>
				<p class="ls-l" style="top:270px;left:120px;font-size:18px;white-space: nowrap;" data-ls="offsetxin:20;durationin:1500;delayin:4500;easingin:easeOutCubic;offsetxout:-400;">
					and many more..
				</p>                                                                          
				<a class="ls-l btn vd_btn btn-lg vd_bg-red" style="top:320px;left:90px; font-weight:300; white-space: nowrap;" data-ls="offsetxin:0;durationin:2000;delayin:5200;easingin:easeOutCubic;rotatexin:-90;transformoriginin:50% top 0;offsetxout:-200;durationout:1000;" href="http://themeforest.net/item/vendroid-super-flexible-multipurpose-admin-theme/7717536?ref=Venmond">
					BUY NOW
				</a>               
				<img alt="example image" class="ls-l ls-linkto-2" style="top:410px;left:100px;white-space: nowrap;" data-ls="offsetxin:-50;delayin:5200;offsetxout:-50;" src="img/banner/left.png" ><img alt="example image" class="ls-l ls-linkto-1" style="top:410px;left:150px;white-space: nowrap;" data-ls="offsetxin:50;delayin:5200;offsetxout:50;" src="img/banner/right.png" >
			</div>            
            

		</div>
</div>

<div class="vd_banner vd_bg-red clearfix pd-20" >
  <div class="container">
    <div class="vd_content clearfix">
      <div class="row">
        <div class="col-lg-8 col-md-9 mgbt-sm-10 mgbt-md-0">
          <div class="font-semibold font-md vd_white"><strong>Interactive Design, Made the imposible, Possible !                 </strong></div>
          <div class="font-md deploy-word vd_white" >Deploy in couple of minutes</div>
        </div>

        <div class="col-lg-4 col-md-3 mgbt-sm-10 mgbt-md-0"> 
			<a class="btn vd_btn btn-lg vd_btn-bevel vd_bg-green">Get Started !</a> 
        
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
			<h1 class="font-lg">Features of <span class="font-semibold vd_green">Vendroid Theme</span></h1>
            <h3>Ut venenatis eleifend pharetra. Etiam nec interdum urna. Ut sed laoreet lacus, ac bibendum quam. Aenean porta velit mauris</h3>
        </div>
        <!-- col-md-12 --> 
      </div>
      <!-- row -->
       
      <br />
      <br />
      <br />
      <div class="row">
        <div class="col-md-6 mgbt-xs-15">
        	<div class="content-list content-blog-small clearfix">
            	<div class="list-wrapper feature-item feature-1">
                    <div class="menu-icon">
                        <i class="fa fa-laptop font-lg"></i>
                    </div>
                    <div class="menu-text">
                    	<h3 class="font-semibold mgbt-xs-10">100% Fully Responsive </h3>
                        <p>Praesent tincidunt rhoncus lobortis. Mauris porttitor, mi nec blandit commodo, lectus libero porttitor lorem, eu pharetra odio massa id odio.</p>
                    </div>
                </div>

            </div>
        </div>
        <!-- col-xs-6 -->
        <div class="col-md-6 mgbt-xs-15">
        	<div class="content-list content-blog-small clearfix">
            	<div class="list-wrapper feature-item feature-2">
                <div class="menu-icon">
                	<i class="fa fa-cog font-lg"></i>
                </div>
                <div class="menu-text">
                <h3 class="font-semibold mgbt-xs-10">Powerful Functionality </h3>
                    <p>Praesent tincidunt rhoncus lobortis. Mauris porttitor, mi nec blandit commodo, lectus libero porttitor lorem, eu pharetra odio massa id odio.</p>
                </div>
                </div>
            </div>
        </div>
        <!-- col-xs-6 -->        

      </div>
      <!-- row -->

      <div class="row">
        <div class="col-md-6 mgbt-xs-15">
        	<div class="content-list content-blog-small clearfix">
            	<div class="list-wrapper feature-item feature-3">
                <div class="menu-icon">
                	<i class="fa fa-rocket font-lg"></i>
                </div>
                <div class="menu-text">
                <h3 class="font-semibold mgbt-xs-10">Fast Editing </h3>
                    <p>Praesent tincidunt rhoncus lobortis. Mauris porttitor, mi nec blandit commodo, lectus libero porttitor lorem, eu pharetra odio massa id odio.</p>
                </div>
                </div>

            </div>
        </div>
        <!-- col-xs-6 -->
        <div class="col-md-6 mgbt-xs-15">
        	<div class="content-list content-blog-small clearfix">
            	<div class="list-wrapper feature-item feature-4">
                <div class="menu-icon">
                	<i class="fa fa-dashboard font-lg"></i>
                </div>
                <div class="menu-text">
                <h3 class="font-semibold mgbt-xs-10">4 Awesome Dashboards Ready &amp; Still Increasing.. </h3>
                    <p>Praesent tincidunt rhoncus lobortis. Mauris porttitor, mi nec blandit commodo, lectus libero porttitor lorem, eu pharetra odio massa id odio.</p>
                </div>
                </div>
            </div>
        </div>
        <!-- col-xs-6 -->        

      </div>
      <!-- row -->

      <div class="row">
        <div class="col-md-6 mgbt-xs-15">
        	<div class="content-list content-blog-small clearfix">
            	<div class="list-wrapper feature-item feature-5">
                <div class="menu-icon">
                	<i class="fa fa-plus-circle font-lg"></i>
                </div>
                <div class="menu-text">
                <h3 class="font-semibold mgbt-xs-10">90+ HTML Pages, 30+ Widgets</h3>
                    <p>Praesent tincidunt rhoncus lobortis. Mauris porttitor, mi nec blandit commodo, lectus libero porttitor lorem, eu pharetra odio massa id odio.</p>
                </div>
                </div>

            </div>
        </div>
        <!-- col-xs-6 -->
        <div class="col-md-6 mgbt-xs-15">
        	<div class="content-list content-blog-small">
            	<div class="list-wrapper feature-item feature-6">
                <div class="menu-icon">
                	<i class="fa fa-wrench font-lg"></i>
                </div>
                <div class="menu-text">
                <h3 class="font-semibold mgbt-xs-10">Flexible Layouts</h3>
                    <p>Praesent tincidunt rhoncus lobortis. Mauris porttitor, mi nec blandit commodo, lectus libero porttitor lorem, eu pharetra odio massa id odio.</p>
                </div>
                </div>
            </div>
        </div>
        <!-- col-xs-6 -->        

      </div>
      <!-- row -->
    </div>
  </div>
</div>

<div id="front-1-features" class="vd_section vd_banner vd_bg-white clearfix slide-waypoint" data-waypoint="features">
  <div class="container">
    <div class="vd_content clearfix">
      <div class="row">
        <div class="col-md-5 mgbt-xs-20">
          <h2 class="h1"><strong>Why</strong> <span class="font-light">Us?</span></h2>
          <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
          <br/>
          <p><a class="btn vd_btn vd_btn-bevel vd_bg-green btn-lg" href="http://themeforest.net/item/vendroid-super-flexible-multipurpose-admin-theme/7717536?ref=Venmond">Buy Theme Now</a> <br/></p>
        </div>
        <div class="col-md-6 col-md-offset-1">
          <div class="text-center"> <iframe src="//player.vimeo.com/video/50920812?title=0&amp;byline=0&amp;portrait=0&amp;color=f0001c" width="500" height="281" class="no-bd" allowfullscreen></iframe> </div>
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
          <p>Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p><p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
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

                   <div class="vd_carousel-control"> 
                    <a href="#"> <i class="fa fa-chevron-left"></i></a> <a href="#"><i class="fa fa-chevron-right"></i></a> 
                  </div>                        
                      
    				<div class="vd_carousel">
                        <div class="vd_carousel-column">                  
                            <div class="content-list content-large">
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
                                <div class="testimonial-word font-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " </div>
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
                                <div class="caret-icon">  </div>
                                <div class="testimonial-word font-sm"> Ut enim  !!! Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi... " </div>
                              </div>
                            </div>
                            
                        </div>                 
                        
                        <div class="vd_carousel-column">                  
                            <div class="content-list content-large">
                              <div class="menu-icon"> <img alt="example image" class="img-circle" src="img/avatar/avatar-3.jpg" /> </div>
                              <div class="menu-text"> <br/>
                                <br/>
                                <h4 class="vd_black font-semibold mgbt-xs-0"><strong>Angela Brudsey</strong></h4>
                                <p class="vd_black font-semibold">Director of Microhard</p>
                              </div>
                            </div>
                            <div class="clearfix mgtp-20">
                              <div class="testimonial-word-wrapper">
                                <div class="caret-icon">  </div>
                                <div class="testimonial-word font-sm"> Ut enim  !!! Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi... " </div>
                              </div>
                            </div>
                            
                        </div>                         
                        
                        <div class="vd_carousel-column">                  
                            <div class="content-list content-large">
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
                                <div class="testimonial-word font-sm"> Ut enim  !!! Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi... " </div>
                              </div>
                            </div>
                            
                        </div>                         
                                                     
                               
                    </div> <!-- vd_carousel -->
   
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
                  <div id="success" class="alert alert-success hidden"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>We have <strong>successfully</strong> received your Message and will get Back to you as soon as possible.</div>
                  <div id="error" class="alert alert-danger hidden"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button> </div>
                  <div id="empty" class="alert alert-danger hidden"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>Please <strong>Fill up</strong> all the Fields and Try Again.</div>
                  <div id="unexpected" class="alert alert-danger hidden"><button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="icon-cross"></i></button>An <strong>unexpected error</strong> occured. Please Try Again later.</div>                 
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
                                <input id="contact-form-email" name="contact-form-email"  type="email" required placeholder="" class="no-bd">
                              </div>
                        </div>               
                        <div class="col-md-12 mgbt-xs-15">
                              <label class="control-label vd_white">Message</label>
                              <div class="controls">
                                <textarea id="contact-form-message" name="contact-form-message" rows="4" required class="no-bd"></textarea >
                              </div>
                        </div>   
                        <div class="col-md-12 mgbt-xs-10">
                        	<button class="btn vd_btn vd_btn-bevel vd_bg-yellow font-semibold" id="contact-form-submit"><i class="append-icon fa fa-envelope"></i>SEND MESSAGE</button>
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
<?php include('templates/scripts/front-2.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>
