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
	  $header="header-front-blog";  
	  
	  $footer = "footer-4"; 
	  $bottom_extra_class = "vd_bg-dark-green pd-20"; 
	  $background = "background-login"; 	  
	  	  
      $navbar_left_config = 0; 
	  $navbar_right_config = 0;
	  
	  $specific_css[0]="plugins/layerslider/css/layerslider.css";
      $specific_css[1] = 'css/animate.css';
	  	  
	  ?>
<?php require_once('templates/headers/'.$header.'.tpl.php'); ?>

<div class="content">
  <div class="clearfix pd-20" >
    <div class="container">
      <div class="vd_content clearfix">
        <div class="row mgtp-20">
          <div class="col-md-8">
            <div class="panel widget light-widget panel-bd-top">
              <div class="panel-heading no-title"> </div>
              <div class="panel-body">
                <h1 class="mgtp--5 font-bold"> Very Cool Blog Title</h1>
                <p class="vd_soft-grey">By: <a href="#">Vendroid Writer</a></p>
                <hr/>
                <div class="row blog-info">
                  <div class="col-sm-3 blog-date font-sm"><i class="icon-clock  append-icon"></i><span class="vd_soft-grey"> 13 Dec, 1984</span></div>
                  <div class="col-sm-3 blog-comments font-sm"><i class="fa fa-comments  append-icon"></i><span class="vd_soft-grey"> <a href="#">0 Comments</a></span></div>
                  <div class="col-sm-6 blog-tags font-sm"><i class="fa fa-tags append-icon"></i><span class="vd_soft-grey"> <a href="#">Vendroid</a>, <a href="#">Awesome</a></span></div>
                </div>
                <br/>
                <br/>
                <div class="row blog-content">
                  <div class="col-xs-12">
                    <p> <img src="img/blog/03.jpg" class="img-right" alt="example image">Ut sit amet dignissim libero. Integer scelerisque, eros interdum suscipit rhoncus, mauris felis eleifend libero, a adipiscing arcu sapien eu nisi. Proin vehicula lacus non lacus lobortis ultricies. Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla. Suspendisse convallis rutrum arcu nec rutrum. Pellentesque sed felis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. <br>
                      <br>
                      Integer scelerisque, eros interdum suscipit rhoncus, mauris felis eleifend libero, a adipiscing arcu sapien eu nisi. Proin vehicula lacus non lacus lobortis ultricies. Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla. Suspendisse convallis rutrum arcu nec rutrum. Pellentesque sed felis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. </p>
                    <br/>
                    <div class="well well-lg font-sm text-center"> "Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla." </div>
                    <br/>
                    <p>Integer scelerisque, eros interdum suscipit rhoncus, mauris felis eleifend libero, a adipiscing arcu sapien eu nisi. Proin vehicula lacus non lacus lobortis ultricies. Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla. Suspendisse convallis rutrum arcu nec rutrum. Pellentesque sed felis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. </p>
                  </div>
                </div>
                <br/>
                <br/>
                <div class="row blog-content">
                  <div class="col-xs-12">
                    <h2>Comments</h2>
                    <br/>
                    <div class="vd_comments">
                      <ul class="commentlist clearfix">
                        <li class="comment" id="li-comment-1">
                          <div id="comment-1" class="comment-wrap clearfix">
                            <div class="comment-meta">
                              <div class="comment-author"> <img src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="example image"> </div>
                            </div>
                            <div class="comment-content clearfix">
                              <div class="comment-author">John Doe</div>
                              <div class="comment-date"><a href="#" title="Permalink to this comment">April 24, 2012 at 10:46 am</a> </div>
                              <div class="comment-reply"><a class=" btn btn-small" href="#"><i class="fa fa-reply append-icon"></i>Reply</a></div>
                              <div class="comment-arrow"></div>
                              <p class="comment-word">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                            </div>
                            <div class="clear"></div>
                          </div>
                          <ul>
                            <li class="comment" id="li-comment-2">
                              <div id="comment-2" class="comment-wrap clearfix">
                                <div class="comment-meta">
                                  <div class="comment-author"> <img src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="example image"> </div>
                                </div>
                                <div class="comment-content clearfix">
                                  <div class="comment-author">John Doe</div>
                                  <div class="comment-date"><a href="#" title="Permalink to this comment">April 24, 2012 at 10:46 am</a> </div>
                                  <div class="comment-reply"><a class=" btn btn-small" href="#"><i class="fa fa-reply append-icon"></i>Reply</a></div>
                                  <div class="comment-arrow"></div>
                                  <p class="comment-word">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                                </div>
                                <div class="clear"></div>
                              </div>
                            </li>
                            <li class="comment" id="li-comment-3">
                              <div id="comment-3" class="comment-wrap clearfix">
                                <div class="comment-meta">
                                  <div class="comment-author"> <img src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="example image"> </div>
                                </div>
                                <div class="comment-content clearfix">
                                  <div class="comment-author">John Doe</div>
                                  <div class="comment-date"><a href="#" title="Permalink to this comment">April 24, 2012 at 10:46 am</a> </div>
                                  <div class="comment-reply"><a class=" btn btn-small" href="#"><i class="fa fa-reply append-icon"></i>Reply</a></div>
                                  <div class="comment-arrow"></div>
                                  <p class="comment-word">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                                </div>
                                <div class="clear"></div>
                              </div>
                              <ul>
                                <li class="comment" id="li-comment-4">
                                  <div id="comment-4" class="comment-wrap clearfix">
                                    <div class="comment-meta">
                                      <div class="comment-author"> <img src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="example image"> </div>
                                    </div>
                                    <div class="comment-content clearfix">
                                      <div class="comment-author">John Doe</div>
                                      <div class="comment-date"><a href="#" title="Permalink to this comment">April 24, 2012 at 10:46 am</a> </div>
                                      <div class="comment-reply"><a class=" btn btn-small" href="#"><i class="fa fa-reply append-icon"></i>Reply</a></div>
                                      <div class="comment-arrow"></div>
                                      <p class="comment-word">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                                    </div>
                                    <div class="clear"></div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li class="comment" id="li-comment-5">
                          <div id="comment-5" class="comment-wrap clearfix">
                            <div class="comment-meta">
                              <div class="comment-author"> <img src="http://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="example image"> </div>
                            </div>
                            <div class="comment-content clearfix">
                              <div class="comment-author">John Doe</div>
                              <div class="comment-date"><a href="#" title="Permalink to this comment">April 24, 2012 at 10:46 am</a> </div>
                              <div class="comment-reply"><a class=" btn btn-small" href="#"><i class="fa fa-reply append-icon"></i>Reply</a></div>
                              <div class="comment-arrow"></div>
                              <p class="comment-word">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                            </div>
                            <div class="clear"></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!-- vd_comments -->
                    
                    <div class="vd_comments-form clearfix">
                      <h3>Leave a <span>Comment</span></h3>
                      <form class="clearfix" action="#" method="post" id="commentform">
                        <div class="row">
                          <div class="col-md-7">
                            <div class="form-group">
                              <label for="author">Name <span class="vc_red">*</span></label>
                              <div class="controls">
                                <input type="text" name="author" id="author" value="" size="22" tabindex="1">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-7">
                            <div class="form-group">
                              <label for="author-email">Email <span class="vc_red">*</span> <small>(will not be published)</small></label>
                              <div class="controls">
                                <input type="text" name="author-email" id="author-email" value="" size="22" tabindex="2">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-7">
                            <div class="form-group">
                              <label for="url">Website</label>
                              <div class="controls">
                                <input type="text" name="url" id="url" value="" size="22" tabindex="3">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-9">
                            <div class="form-group">
                              <label for="comment">Comment</label>
                              <div class="controls">
                                <textarea id="comment" name="comment" cols="58" rows="10" tabindex="4"></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <button name="submit" type="submit" id="submit-button" tabindex="5" value="Submit" class="vd_btn btn vd_bg-green">Submit Comment</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
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
                <h2 class="mgtp--5">Popular Blogs</h2>
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
    </div>
  </div>
</div>
<!-- Middle Content End --> 

<!--
</div></div>-->

<?php require_once('templates/footers/'.$footer.'.tpl.php'); ?>

<!-- Specific Page Scripts Put Here --> 

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>
