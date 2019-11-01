<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Timeline Pages HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Timeline Pages - Responsive Admin HTML Template'; ?>
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
                <li><a href="pages-custom-product.php">Pages</a> </li>
                <li class="active">Timeline</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header no-subtitle">
              <h1>Timeline</h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-lg-8 col-md-9">
                <ul class="vd_timeline">
                  <li class="tl-item tl-item-year" >
                    <div class="tl-year">2014</div>
                  </li>
                  <li class="tl-item tl-item-date">
                    <div class="tl-date"> Today </div>
                  </li>
                  <li class="tl-item">
                    <div class="tl-icon success"> <i class="fa fa-comments"></i> </div>
                    <div class="tl-label panel widget light-widget panel-bd-left">
                    <div class="panel-body"> <img alt="example image" class="tl-img img-right img-circle  mgtp-5" src="img/avatar/avatar-5.jpg">
                      <h3 class="mgtp-10 mgbt-xs-5"> Rhonda William <em class="vd_soft-grey font-sm">via facebook</em> </h3>
                      <span class="vd_soft-grey">1.30 pm  -  near <a href="#">Los Angeles</a> - <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" data-original-title="Shared Globally" class=""><i class="fa fa-globe"></i></a></span>
                      <div class="clearfix mgbt-xs-10"></div>
                      <p class="mgbt-xs-20"> Hello <a href="#">Jason</a>, how are you, it's been a long time since we last met? I really miss you. And want to meet you soooooon.....</p>
                      <div class="tl-action"><a role="button" class="btn btn-sm mgr-10" href="javascript:void(0)"><i class="fa fa-thumbs-up fa-fw"></i> Like (10)</a> <a role="button" class="btn btn-sm btn-xs mgr-10" href="javascript:void(0)"><i class="fa fa-comment fa-fw"></i> Comment (2)</a> <a role="button" class="btn btn-sm " href="javascript:void(0)"><i class="fa fa-share fa-fw"></i> Share</a></div>
                      <hr class="mgtp-0"/>
                      <div class="comments">
                        <div class="content-list content-image">
                          <ul class="list-wrapper no-bd-btm">
                            <li>
                              <div class="menu-icon"><img src="img/avatar/avatar.jpg" alt="example image"></div>
                              <div class="menu-text"> Do you play or follow any sports?
                                <div class="menu-info"> <span class="menu-date">12 Minutes Ago </span> </div>
                              </div>
                            </li>
                            <li>
                              <div class="menu-icon"><img src="img/avatar/avatar-2.jpg" alt="example image"></div>
                              <div class="menu-text"> Good job mate !
                                <div class="menu-info"> <span class="menu-date">1 Hour 20 Minutes Ago </span> </div>
                              </div>
                            </li>
                            <li>
                              <div class="menu-icon"><img src="img/avatar/avatar.jpg" alt="example image"></div>
                              <div class="menu-text"> Do you play or follow any sports?
                                <div class="menu-info"> <span class="menu-date">12 Minutes Ago </span> </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <!-- content-list -->
                        <hr class="no-bd"/>
                        <div class="reply-comment">
                          <div class="content-list content-image">
                            <div class="list-wrapper">
                              <div>
                                <div class="menu-icon"><img src="img/avatar/avatar-5.jpg" alt="example image"></div>
                                <div class="menu-text">
                                  <textarea  rows="3" class="width-100" placeholder="Write a comment..."></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- reply-comment -->
                        </div>
                        <!-- comments --> 
                      </div>
                      <!-- panel-body --> 
                    </div>
                    <!-- panel --> 
                  </li>
                  <li class="tl-item">
                    <div class="tl-icon danger"> <i class="fa fa-picture-o"></i> </div>
                    <div class="tl-label panel widget light-widget panel-bd-left vd_bdl-red">
                      <div class="panel-body"> <img alt="example image" class="tl-img img-right img-circle  mgtp-5" src="img/avatar/avatar-5.jpg">
                        <h3 class="mgtp-10 mgbt-xs-5"> Rhonda William <em class="vd_soft-grey font-sm">@rhondawil</em> </h3>
                        <span class="vd_soft-grey">07.45 am  -  near <a href="#">Los Angeles</a> - <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" data-original-title="Shared Globally" class=""><i class="fa fa-globe"></i></a></span>
                        <div class="clearfix mgbt-xs-10"></div>
                        <p class="mgbt-xs-20"> Little hope on this little country</p>
                        <div class="tl-post-image mgbt-xs-20"> <a data-rel="prettyPhoto[2]" href="img/blog/01-large.jpg"> <img src="img/blog/01-large.jpg" alt="example image"> </a> </div>
                        <div class="tl-action"><a role="button" class="btn btn-sm mgr-10" href="javascript:void(0)"><i class="fa fa-thumbs-up fa-fw"></i> Like</a> <a role="button" class="btn btn-sm btn-xs mgr-10" href="javascript:void(0)"><i class="fa fa-comment fa-fw"></i> Comment</a> <a role="button" class="btn btn-sm " href="javascript:void(0)"><i class="fa fa-share fa-fw"></i> Share</a></div>
                      </div>
                      <!-- panel-body --> 
                    </div>
                    <!-- panel --> 
                  </li>
                  <li class="tl-item tl-item-date tl-separator">
                    <div class="tl-date  tl-date-2"> Yes<br/>
                      terday </div>
                  </li>
                  <li class="tl-item">
                    <div class="tl-icon warning"> <i class="fa fa-video-camera"></i> </div>
                    <div class="tl-label panel widget light-widget panel-bd-left vd_bdl-yellow">
                      <div class="panel-body"> <img alt="example image" class="tl-img img-right img-circle  mgtp-5" src="img/avatar/avatar-5.jpg">
                        <h3 class="mgtp-10 mgbt-xs-5"> Rhonda William <em class="vd_soft-grey font-sm">@rhondawil</em> </h3>
                        <span class="vd_soft-grey">07.45 am  -  near <a href="#">Los Angeles</a> - <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" data-original-title="Shared Globally" class=""><i class="fa fa-globe"></i></a></span>
                        <div class="clearfix mgbt-xs-10"></div>
                        <p class="mgbt-xs-20"> Gosh this is so funny...</p>
                         <div class="tl-post-video mgbt-xs-20"> <iframe style="width:100%; height:350px; border:none;" src="//www.youtube.com/embed/ASO_zypdnsQ" allowfullscreen></iframe></div>
                        <div class="tl-action"><a role="button" class="btn btn-sm mgr-10" href="javascript:void(0)"><i class="fa fa-thumbs-up fa-fw"></i> Like</a> <a role="button" class="btn btn-sm btn-xs mgr-10" href="javascript:void(0)"><i class="fa fa-comment fa-fw"></i> Comment</a> <a role="button" class="btn btn-sm " href="javascript:void(0)"><i class="fa fa-share fa-fw"></i> Share</a></div>
                      </div>
                      <!-- panel-body --> 
                    </div>
                    <!-- panel --> 
                  </li>
                  <li class="tl-item tl-item-year tl-separator" >
                    <div class="tl-year">2013</div>
                  </li>
                  <li class="tl-item tl-item-date tl-separator">
                    <div class="tl-date  tl-date-3"> <span class="tl-day">25</span><br/>
                      <span class="tl-month">NOV</span> </div>
                  </li>
                  <li class="tl-item">
                    <div class="tl-icon info entypo-icon"> <i class="icon-newspaper"></i> </div>
                    <div class="tl-label panel widget light-widget panel-bd-left vd_bdl-blue">
                      <div class="panel-body"> <img alt="example image" class="tl-img img-right img-circle  mgtp-5" src="img/avatar/avatar-5.jpg">
                        <h3 class="mgtp-10 mgbt-xs-5"> Rhonda William </h3>
                        <span class="vd_soft-grey">07.45 am  -  near <a href="#">Los Angeles</a> - <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" data-original-title="Shared Globally" class=""><i class="fa fa-globe"></i></a></span>
                        <div class="clearfix mgbt-xs-10"></div>
                        <p class="mgbt-xs-20"> <img src="img/blog/03.jpg" class="img-right" alt="example image">Ut sit amet dignissim libero. Integer scelerisque, eros interdum suscipit rhoncus, mauris felis eleifend libero, a adipiscing arcu sapien eu nisi. Proin vehicula lacus non lacus lobortis ultricies. Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla. Suspendisse convallis rutrum arcu nec rutrum. Pellentesque sed felis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. <br>
                          <br>
                          Integer scelerisque, eros interdum suscipit rhoncus, mauris felis eleifend libero, a adipiscing arcu sapien eu nisi. Proin vehicula lacus non lacus lobortis ultricies. Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla. Suspendisse convallis rutrum arcu nec rutrum. Pellentesque sed felis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. </p>
                        <div class="tl-action"><a role="button" class="btn btn-sm mgr-10" href="javascript:void(0)"><i class="fa fa-thumbs-up fa-fw"></i> Like</a> <a role="button" class="btn btn-sm btn-xs mgr-10" href="javascript:void(0)"><i class="fa fa-comment fa-fw"></i> Comment</a> <a role="button" class="btn btn-sm " href="javascript:void(0)"><i class="fa fa-share fa-fw"></i> Share</a></div>
                      </div>
                      <!-- panel-body --> 
                    </div>
                    <!-- panel --> 
                  </li>
                  <li class="tl-item">
                    <div class="tl-icon primary"> <i class="fa fa-users"></i> </div>
                    <div class="tl-label panel widget light-widget panel-bd-left vd_bdl-black">
                      <div class="panel-body"> <img alt="example image" class="tl-img img-right img-circle  mgtp-5" src="img/avatar/avatar-5.jpg">
                        <h3 class="mgtp-10 mgbt-xs-5"> Rhonda William </h3>
                        <span class="vd_soft-grey">07.45 am </span>
                        <div class="clearfix mgbt-xs-10"></div>
                        <p class="mgbt-xs-20 font-bold"> Added new friends</p>
                        <div class="tl-post-friends">
                          <div class="content-grid column-xs-3 column-sm-4 column-md-5 column-lg-6 height-xs-3">
                            <ul class="list-wrapper">
                              <li> <a href="#">
                                <div class="menu-icon"><img alt="example image" src="img/avatar/avatar.jpg"></div>
                                </a>
                                <div class="menu-text"> Gabriella Montagna
                                  <div class="menu-info">
                                    <div class="menu-date">San Diego</div>
                                  </div>
                                </div>
                              </li>
                              <li> <a href="#">
                                <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-2.jpg"></div>
                                </a>
                                <div class="menu-text"> Jonathan Fuzzy
                                  <div class="menu-info">
                                    <div class="menu-date">Seattle</div>
                                  </div>
                                </div>
                              </li>
                              <li> <a href="#">
                                <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-3.jpg"></div>
                                </a>
                                <div class="menu-text"> Sakura Hinata
                                  <div class="menu-info">
                                    <div class="menu-date">Hawaii</div>
                                  </div>
                                </div>
                              </li>
                              <li> <a href="#">
                                <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-4.jpg"></div>
                                </a>
                                <div class="menu-text"> Rikudou Sennin
                                  <div class="menu-info">
                                    <div class="menu-date">Las Vegas</div>
                                  </div>
                                </div>
                              </li>
                              <li> <a href="#">
                                <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-5.jpg"></div>
                                </a>
                                <div class="menu-text"> Kim Kardiosun
                                  <div class="menu-info">
                                    <div class="menu-date">New York</div>
                                  </div>
                                </div>
                              </li>
                              <li> <a href="#">
                                <div class="menu-icon"><img alt="example image" src="img/avatar/avatar-6.jpg"></div>
                                </a>
                                <div class="menu-text"> Brad Pita
                                  <div class="menu-info">
                                    <div class="menu-date">Seattle</div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>
                      <!-- panel-body --> 
                    </div>
                    <!-- panel --> 
                  </li>
                  <li class="tl-item tl-item-date">
                    <div class="tl-date tl-date-end"> END </div>
                  </li>
                </ul>
                <br/><br/>
              </div>
              <!-- col-md-x -->
              <div class="col-lg-4 col-md-3">
                <div class="panel widget light-widget">
                  <div class="panel-body">
                    <h2 class="mgbt-xs-20 mgtp-10"><strong>View</strong> <span class="font-light">Control</span></h2>
                    <div class="row mgbt-xs-0">
                      <div class="col-sm-12">
                        <div class="vd_checkbox checkbox-success">
                          <input type="checkbox" id="checkbox-year" value="1">
                          <label for="checkbox-year"> Hide Year </label>
                        </div>
                        <div class="vd_checkbox checkbox-success">
                          <input type="checkbox" id="checkbox-date" value="1">
                          <label for="checkbox-date"> Hide Date </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
<?php include('templates/scripts/pages-timeline.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>