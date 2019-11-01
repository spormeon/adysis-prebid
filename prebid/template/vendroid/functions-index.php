<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Vendroid Custom Functions - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Vendroid Custom Functions - Responsive Admin HTML Template'; ?>
<?php $page = 'nav';   // To set active on the same id of primary menu ?>
<?php 
		$navbar_left = 'navbar-tabs-profile';
		$navbar_right_config = 1;
		$navbar_right = 'navbar-tabs-menu-right';
		$navbar_right_start_width = 'nav-right-medium';
		$navbar_right_extra_class ='vd_bg-black-60';	
?>

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
                <li class="active">Custom Functions</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Vendroid Custom Functions</h1>
              <small class="subtitle">Custom functions to help build the themes</small> </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Data-* Function </h3> 
					<?php include('templates/widgets/panel-menu-widget-all.tpl.php'); ?>
                  </div>
                  <div class="panel-body table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Data</th>
                          <th>Description</th>
                          <th>HTML Tags</th>
                          <th>Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td><code>data-rel="tags-input"</code></td>
                          <td>Modify input into tags</td>
                          <td><code>&lt;input  type=&quot;text&quot;&gt;</code></td>
                          <td><input  type="text" class="tags" data-rel="tags-input" value="foo,bar,baz,roffle" /></td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td><code>data-rel="switch"</code></td>
                          <td>Modify checkbox into switch</td>
                          <td><code>&lt;input type=&quot;checkbox&quot;&gt;</code></td>
                          <td><input type="checkbox" data-rel="switch" data-size="mini" data-wrapper-class="yellow" checked></td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td><code>data-toggle="tooltip"</code></td>
                          <td>Create a tooltip</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-original-title="left" data-toggle="tooltip" data-placement="left" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a> <a data-original-title="top" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-eye"></i></a> <a data-original-title="bottom" data-toggle="tooltip" data-placement="bottom" class="btn menu-icon vd_bd-blue vd_blue"> <i class="fa fa-eye"></i></a> <a data-original-title="right" data-toggle="tooltip" data-placement="right" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-eye"></i></a></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td><code>data-toggle="popover"</code></td>
                          <td>Create a popover</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-toggle="popover" data-placement="left" data-content="Open on left. Click again to close" data-original-title="Left" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a> <a data-toggle="popover" data-placement="top" data-content="Open on top. Click again to close" data-original-title="Top" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-eye"></i></a> <a data-toggle="popover" data-placement="bottom" data-content="Open on bottom. Click again to close" data-original-title="Bottom" class="btn menu-icon vd_bd-blue vd_blue"> <i class="fa fa-eye"></i></a> <a data-toggle="popover" data-placement="right" data-content="Open on right. Click again to close" data-original-title="Right" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-eye"></i></a></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td><code>data-rel="prettyPhoto"</code></td>
                          <td>Create a prettyphoto over on image</td>
                          <td><code>&lt;a&gt;</code></td>
                          <td class="menu-action"><a href="img/screenshot/vendroid-01.jpg"  data-rel="prettyPhoto[1]" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a> <a href="img/screenshot/vendroid-02.jpg"  data-rel="prettyPhoto[1]" class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-eye"></i></a> <a href="img/screenshot/vendroid-03.jpg"  data-rel="prettyPhoto[1]" class="btn menu-icon vd_bd-blue vd_blue"> <i class="fa fa-eye"></i></a> <a href="img/screenshot/vendroid-04.jpg"  data-rel="prettyPhoto[1]" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-eye"></i></a></td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td><code>data-rel="scroll"</code><br/>
                            <code>data-scrollheight="200"</code></td>
                          <td>Create vertical scroll content with specific height</td>
                          <td><code>&lt;div&gt;</code></td>
                          <td class="menu-action"><div class="content-list  content-image">
                              <div data-rel="scroll" data-scrollHeight="60">
                                <ul class="list-wrapper">
                                  <li> <a href="#">
                                    <div class="menu-icon"><img src="img/avatar/avatar.jpg" alt="example image"></div>
                                    <div class="menu-text">Jessylin
                                      <div class="menu-info"> <span class="menu-date">Administrator </span> </div>
                                    </div>
                                    <div class="menu-badge"><span class="badge status vd_bg-green">&nbsp;</span></div>
                                    </a> </li>
                                  <li> <a href="#">
                                    <div class="menu-icon"><img src="img/avatar/avatar-2.jpg" alt="example image"></div>
                                    <div class="menu-text">Rodney Mc.Cardo
                                      <div class="menu-info"> <span class="menu-date">Designer </span> </div>
                                    </div>
                                    <div class="menu-badge"><span class="badge status vd_bg-grey">&nbsp;</span></div>
                                    </a> </li>
                                  <li> <a href="#">
                                    <div class="menu-icon"><img src="img/avatar/avatar-3.jpg" alt="example image"></div>
                                    <div class="menu-text">Theresia Minoque
                                      <div class="menu-info"> <span class="menu-date">Engineering </span> </div>
                                    </div>
                                    <div class="menu-badge"><span class="badge status vd_bg-green">&nbsp;</span></div>
                                    </a> </li>
                                  <li> <a href="#">
                                    <div class="menu-icon"><img src="img/avatar/avatar-4.jpg" alt="example image"></div>
                                    <div class="menu-text">Greg Grog
                                      <div class="menu-info"> <span class="menu-date">Developer </span> </div>
                                    </div>
                                    <div class="menu-badge"><span class="badge status vd_bg-grey">&nbsp;</span></div>
                                    </a> </li>
                                </ul>
                              </div>
                            </div></td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td><code>data-action="click-trigger"</code><br/>
                            <code>data-action="click-target"</code></td>
                          <td>Open on click modified dropdown list with tags next to it</td>
                          <td><code>&lt;any data-action=&quot;click-trigger&quot;&gt;</code> <code>&lt;any data-action=&quot;click-target&quot;&gt;</code></td>
                          <td class="menu-action"><div class="pull-left append-icon vd_info-parent"><a href="javascript:void(0);"  data-action="click-trigger" class="btn menu-icon vd_bd-green vd_green mgbt-xs-10"> <i class="fa fa-eye"></i></a>
                              <div class="vd_mega-menu-content  width-xs-3  center-xs-3" style="left:-113px;" data-action="click-target">
                                <div class="child-menu">
                                  <div class="content-list content-menu">
                                    <ul class="list-wrapper pd-lr-10">
                                      <li> <a href="#">
                                        <div>Open Bottom</div>
                                        </a> </li>
                                      <li class="line"></li>
                                      <li> <a href="#">
                                        <div>Help</div>
                                        </a> </li>
                                      <li> <a href="#">
                                        <div>Report a Problem</div>
                                        </a> </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="pull-left append-icon vd_info-parent"><a href="javascript:void(0);"  data-action="click-trigger" class="btn menu-icon vd_bd-yellow vd_yellow mgbt-xs-10"> <i class="fa fa-eye"></i></a>
                              <div class="vd_mega-menu-content  width-xs-3  center-xs-3 open-top" style="left:-113px;" data-action="click-target">
                                <div class="child-menu">
                                  <div class="content-list content-menu">
                                    <ul class="list-wrapper pd-lr-10">
                                      <li> <a href="#">
                                        <div>Open Top</div>
                                        </a> </li>

                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div></td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td><code>data-action="minimize"</code></td>
                          <td>Minimize Closest Widget</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="minimize" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr> 
                        <tr>
                          <td>9</td>
                          <td><code>data-action="refresh"</code></td>
                          <td>Refresh Closest Widget, must edit with your own ajax code</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="refresh" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td><code>data-action="close"</code></td>
                          <td>Close Closest Widget</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="close" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr> 
                        <tr>
                          <td>11</td>
                          <td><code>data-action="expand-all"</code></td>
                          <td>Expand all menu in closest navbar</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action">Click on <i class="fa fa-sort-amount-asc append-icon prepend-icon"></i> icon on sidebar menu</td>
                        </tr>  
                        <tr>
                          <td>12</td>
                          <td><code>data-action="nav-left-medium"</code></td>
                          <td>Toggle navbar left to medium size</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="nav-left-medium" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr>     
                        <tr>
                          <td>13</td>
                          <td><code>data-action="nav-left-small"</code></td>
                          <td>Toggle navbar left to small size</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="nav-left-small" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr> 
                        <tr>
                          <td>14</td>
                          <td><code>data-action="nav-right-medium"</code></td>
                          <td>Toggle navbar right to medium size</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="nav-right-medium" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr>     
                        <tr>
                          <td>15</td>
                          <td><code>data-action="nav-right-small"</code></td>
                          <td>Toggle navbar right to small size</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="nav-right-small" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr>                                                                                                                                
                        <tr>
                          <td>16</td>
                          <td><code>data-action="remove-navbar"</code></td>
                          <td>Remove left and right navbar</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="remove-navbar" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr>     
                        <tr>
                          <td>17</td>
                          <td><code>data-action="remove-header"</code></td>
                          <td>Remove Header</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="remove-header" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr> 
                        <tr>
                          <td>18</td>
                          <td><code>data-action="fullscreen"</code></td>
                          <td>Remove left and right navbar and header</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="fullscreen" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr>   
                        <tr>
                          <td>19</td>
                          <td><code>data-action="boxedtofull"</code></td>
                          <td>Toggle Between boxed and full width</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action">Go to <a href="layouts-boxed.php">layouts-boxed.php</a> click on <i class="fa fa-expand prepend-icon append-icon"></i> icon</td>
                        </tr>                         

                        <tr>
                          <td>19</td>
                          <td><code>data-action="notification"</code><br/>
                          <code>data-type="success  / notify /<br/> info / error"</code><br/>
                          <code>data-title="Title"</code><br/>
                          <code>data-message="Messages"</code><br/>
                          <code>data-position="topleft / topright /<br/> bottomleft / bottomright"</code>
                          
                          
                          </td>
                          <td>Set notification in a button</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action">
                          
                          <a data-action="notification" data-type="success" data-title="Notification" data-icon="fa fa-check-circle vd_green" data-message="Hello this is your notification using custom theme. Cool right?" data-position="topleft" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a> 
                          
                          <a data-action="notification" data-type="notify" data-title="Notification" data-icon="fa fa-exclamation-triangle vd_yellow" data-message="Hello this is your notification using custom theme. Cool right?" data-position="topright"  class="btn menu-icon vd_bd-yellow vd_yellow"> <i class="fa fa-eye"></i></a> 
                          
                          <a data-action="notification" data-type="info" data-title="Notification" data-icon="fa fa-info-circle vd_blue" data-message="Hello this is your notification using custom theme. Cool right?" data-position="bottomright" class="btn menu-icon vd_bd-blue vd_blue"> <i class="fa fa-eye"></i></a> 
                          
                          <a data-action="notification" data-type="error" data-title="Notification" data-icon="fa fa-exclamation-circle vd_red" data-message="Hello this is your notification using custom theme. Cool right?" data-position="bottomleft" class="btn menu-icon vd_bd-red vd_red"> <i class="fa fa-eye"></i></a></td>
                        </tr> 
                        <tr>
                          <td>20</td>
                          <td><code>data-action="backtop"</code></td>
                          <td>Go to Top</td>
                          <td><code>&lt;any&gt;</code></td>
                          <td class="menu-action"><a data-action="backtop" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i></a></td>
                        </tr>                                                                                                                   
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-6 -->
              <div class="col-md-12">
                <div class="panel widget">
                  <div class="panel-heading vd_bg-grey">
                    <h3 class="panel-title"> <span class="menu-icon"> <i class="fa fa-dot-circle-o"></i> </span> Javascript Function Helper </h3>
                  </div>
                  <div class="panel-body table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Function Name</th>
                          <th>Description</th>
                          <th>Example</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td><code>isTouch()</code></td>
                          <td>Determine if the device has touch capability</td>
                          <td class="menu-action"><a id="touch-test" data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td><code>isMobile()</code></td>
                          <td>Determine your device is a mobile device</td>
                          <td class="menu-action"><a id="mobile-test" data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td><code>isPhone()</code></td>
                          <td>Determine if your device is phone device</td>
                          <td class="menu-action"><a id="phone-test" data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td><code>isTablet()</code></td>
                          <td>Determine if your device is tablet device</td>
                          <td class="menu-action"><a id="tablet-test" data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td><code>notification(position, notif_type,icon_class,notif_title,notif_text)</code></td>
                          <td>Set Notification via script function</td>
                          <td class="menu-action"><a id="notification-test" data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td><code>scrollTo(element,offset)</code></td>
                          <td>Scroll to element with offset</td>
                          <td class="menu-action"><a id="scrollto-test" data-original-title="view" data-toggle="tooltip" data-placement="top" class="btn menu-icon vd_bd-green vd_green"> <i class="fa fa-eye"></i> </a> </td>
                        </tr>                                                                                                                          

                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-6 --> 
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
<?php include('templates/scripts/functions-index.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>