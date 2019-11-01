<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'UI Elements Typography - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'UI Elements Typography - Responsive Admin HTML Template'; ?>
<?php $page = 'ui';   // To set active on the same id of primary menu ?>


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
                <li><a href="ui-panels.php">UI</a> </li>
                <li class="active">Typography</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <!-- vd_head-section -->
          
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Typography</h1>
              <small class="subtitle">Typography fit for theme</small> 
            </div>
          </div>
          <!-- vd_title-section -->
          
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-6">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="panel widget panel-bd-left light-widget">
                      <div class="panel-body">
                        <h2 class="font-light">Open Sans Light <em>Italic</em> </h2>
                        <h2>Open Sans Regular <strong>Bold</strong> <em>Italic</em></h2>                        
                        <h2 class="font-semi-bold"><strong>Semi Bold</strong> <em>Italic</em></h2>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading"> </div>
                  <div class="panel-body">
                    <h2 class="mgbt-xs-20"><span class="vd_grey">Font</span> <strong class="font-semibold">Color</strong></h2>
                    <h4 class="font-semibold"><span class="vd_red">Red</span> <span class="vd_green">Green</span> <span class="vd_yellow">Yellow</span> <span class="vd_blue">Blue</span> <span class="vd_grey">Grey</span> <span class="vd_soft-grey">SoftGrey</span> <span class="vd_black">Black</span> </h4>
                    <h3><strong class="font-semibold"><span class="vd_facebook">Facebook</span></strong> <span class="vd_twitter  font-semibold">Twitter</span> <em><span class="vd_linkedin">LinkedIn</span></em> <span class="vd_googleplus">Google Plus</span> </h3>
                  </div>
                </div>
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading"> </div>
                  <div class="panel-body">
                    <h3>Blockquote</h3>
                    <blockquote>
                      <p>Pellentesque tempor tellus eget pellentesque. </p>
                      <small>Someone famous <cite title="Source Title">Source Title</cite></small> </blockquote>
                    <br>
                    <h3>Blockquote Right</h3>
                    <div class="clearfix">
                      <blockquote class="pull-right">
                        <p>Pellentesque tempor tellus eget pellentesque. </p>
                        <small>Someone famous <cite title="Source Title">Source Title</cite></small> </blockquote>
                    </div>
                    <br>
                    <h3>Address</h3>
                    <address>
                    <strong>Twitter, Inc.</strong><br>
                    795 Folsom Ave, Suite 600<br>
                    San Francisco, CA 94107<br>
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                    <address>
                    <strong>Full Name</strong><br>
                    <a href="mailto:#">first.last@example.com</a>
                    </address>
                    <br/>
                    <h3>Abbreviation and Initialism</h3>
                    <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
                    <p><abbr class="initialism" title="HyperText Markup Language">HTML</abbr> is the best thing since sliced bread.</p>
                    <br/>
                    <h3>Well</h3>
                    <div class="well"> Look, I'm in a well! </div>
                    <div class="well well-lg"> Look, I'm in a large well! </div>
                    <div class="well well-sm"> Look, I'm in a small well! </div>
                    <br/>
                    <h3>Image Left</h3>
                    <p> <img alt="example image" class="img-left"  src="img/blog/02.jpg">Ut sit amet dignissim libero. Integer scelerisque, eros interdum suscipit rhoncus, mauris felis eleifend libero, a adipiscing arcu sapien eu nisi. Proin vehicula lacus non lacus lobortis ultricies. Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla. Suspendisse convallis rutrum arcu nec rutrum. Pellentesque sed felis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. <br/>
                      <br/>
                      Integer scelerisque, eros interdum suscipit rhoncus, mauris felis eleifend libero, a adipiscing arcu sapien eu nisi. Proin vehicula lacus non lacus lobortis ultricies. Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla. Suspendisse convallis rutrum arcu nec rutrum. Pellentesque sed felis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. </p>
                    <div class="clearfix"></div>
                    <br/>
                    <h3>Image Right</h3>
                    <p> <img alt="example image" class="img-right"  src="img/blog/03.jpg">Ut sit amet dignissim libero. Integer scelerisque, eros interdum suscipit rhoncus, mauris felis eleifend libero, a adipiscing arcu sapien eu nisi. Proin vehicula lacus non lacus lobortis ultricies. Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla. Suspendisse convallis rutrum arcu nec rutrum. Pellentesque sed felis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. <br/>
                      <br/>
                      Integer scelerisque, eros interdum suscipit rhoncus, mauris felis eleifend libero, a adipiscing arcu sapien eu nisi. Proin vehicula lacus non lacus lobortis ultricies. Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla. Suspendisse convallis rutrum arcu nec rutrum. Pellentesque sed felis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus. </p>
                    <div class="clearfix"></div>
                    <br/>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="panel widget panel-bd-left light-widget">
                  <div class="panel-heading">

                  </div>
                  <div class="panel-body">
                    <h1>H1 Header</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
                    <h2>H2 Header</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
                    <h3>H3 Header</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
                    <h4>H4 Header</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
                    <h5>H5 Header</h5>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
                    <h6>H6 Header</h6>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.</p>
                    <br>
                    <h3>Paragraph</h3>
                    <p>Integer scelerisque, eros interdum suscipit rhoncus, mauris felis eleifend libero, a adipiscing arcu sapien eu nisi. Proin vehicula lacus non lacus lobortis ultricies. Nulla dui metus, viverra in sodales a, rutrum sed metus. Cras blandit vehicula ligula et fringilla. Suspendisse convallis rutrum arcu nec rutrum. Pellentesque sed felis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et sem eu eros fringilla bibendum quis non quam. Nunc tempor sodales tempus.</p>
                    <p>Pellentesque tempor tellus<strong> eget pellentesque</strong>. usce lacllentesque eget tempor tellus ellentesque pelleinia tempor malesuada. Pellentesque pellentesque eget tempor tellus ellentesque pellentesque eget tempor tellus. Fusce <a href="#">lacinia tempor</a> malesuada. </p>
                    <br>
                    <h3>Separator</h3>
                    <hr>
                    <br/>
                    <h3>Ordered List</h3>
                    <ol>
                      <li>penatibus et magnis</li>
                      <li>um sociis natoque penatibus</li>
                      <li>tristique orci ac sem</li>
                      <li>penatibus et magnis</li>
                      <li>um sociis natoque penatibus</li>
                      <li>tristique orci ac sem</li>
                    </ol>
                    <br>
                    <h3>Unordered List</h3>
                    <ul>
                      <li>penatibus et magnis</li>
                      <li>um sociis natoque penatibus</li>
                      <li>tristique orci ac sem</li>
                      <li>penatibus et magnis</li>
                      <li>um sociis natoque penatibus</li>
                      <li>tristique orci ac sem</li>
                    </ul>
                    <br>
                    <h3>Unordered List None With Icon</h3>
                    <ul class="vd_li">
                      <li><i class="fa fa-circle-o fa-fw append-icon vd_green"></i>penatibus et magnis</li>
                      <li><i class="fa fa-circle-o fa-fw append-icon vd_green"></i>um sociis natoque penatibus</li>
                      <li><i class="fa fa-circle-o fa-fw append-icon vd_green"></i>tristique orci ac sem</li>
                      <li><i class="fa fa-circle-o fa-fw append-icon vd_green"></i>penatibus et magnis</li>
                      <li><i class="fa fa-circle-o fa-fw append-icon vd_green"></i>um sociis natoque penatibus</li>
                      <li><i class="fa fa-circle-o fa-fw append-icon vd_green"></i>tristique orci ac sem</li>
                    </ul>
                    <br/>
                    <h3>Supported Letters</h3>
                    <p>À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï Ð Ñ Ò Ó Ô Õ Ö Ù Ú Û Ü Ý Þ ß à á â ã ä å æ ç è é ê ë ì í î ï ð ñ ò ó ô õ ö ø ù ú û ü ý þ ÿ А Б В а б в я</p>
                    <br>
                    <div class="cl"></div>
                    <h3>Centered text</h3>
                    <h1 class="text-center">“Why does the big brown fox jumped over the lazy dog?”</h1>
                    <br>
                    <h1>Lorem ipsum dolor sit <strong class="font-semibold">amet</strong></h1>
                    <h4 class="mgbt-xs-20"> Sed pretium, ligula sollicitudin laoreet viverra</h4>
                    <h2>Sed Pretium Ligula <span class="font-semibold">Sollicitudin</span> <em>Laoreet</em></h2>
                    <p class="mgbt-xs-20">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.</p>
                    <h4>Sup Type: $ <strong  class="font-semibold">123<sup>00</sup></strong></h4>
                    <h4 class="mgbt-xs-20">Sub Type: $ <strong  class="font-semibold">456<sub>00</sub></strong></h4>
                  </div>
                </div>
                <!-- Panel Widget --> 
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

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>