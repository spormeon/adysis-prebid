<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Form Inline Editing - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'Form Inline Editing - Responsive Admin HTML Template'; ?>
<?php $page = 'forms';   // To set active on the same id of primary menu ?>

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
                <li><a href="forms-elements.php">Forms</a> </li>
                <li class="active">Form Inline Editing</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?>
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header">
              <h1>Form Inline Editing</h1>
              <small class="subtitle">Click on the text to live edit the text</small> </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-md-12">
                <div class="panel light-widget widget">
                  <div class="panel-heading no-title"> </div>
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-md-6">
                        <h2 id="sampleTitle" class="text-right font-bold"  style="text-transform:uppercase;
	font-size:36px;" contenteditable="true"> CKEditor<br>
                          Goes Inline! </h2>
                        <h3 class="text-right vd_grey" contenteditable="true"> Lorem ipsum dolor sit amet dolor duis blandit vestibulum faucibus a, tortor. </h3>
                      </div>
                      <!-- col-md-6-->
                      <div class="col-md-6">
                        <div contenteditable="true">
                          <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.</p>
                          <p> Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.</p>
                        </div>
                      </div>
                      <!-- col-md-6--> 
                    </div>
                    <!-- row -->
                    <div class="row">
                      <div class="col-md-4">
                        <div contenteditable="true">
                          <h3> Fusce vitae porttitor </h3>
                          <p> <strong> Lorem ipsum dolor sit amet dolor. Duis blandit vestibulum faucibus a, tortor. </strong> </p>
                          <p> Proin nunc justo felis mollis tincidunt, risus risus pede, posuere cubilia Curae, Nullam euismod, enim. Etiam nibh ultricies dolor ac dignissim erat volutpat. Vivamus fermentum <a href="http://ckeditor.com/">nisl nulla sem in</a> metus. Maecenas wisi. Donec nec erat volutpat. </p>
                          <blockquote>
                            <p> Fusce vitae porttitor a, euismod convallis nisl, blandit risus tortor, pretium.
                              Vehicula vitae, imperdiet vel, ornare enim vel sodales rutrum </p>
                          </blockquote>
                          <blockquote>
                            <p> Libero nunc, rhoncus ante ipsum non ipsum. Nunc eleifend pede turpis id sollicitudin fringilla. Phasellus ultrices, velit ac arcu. </p>
                          </blockquote>
                          <p>Pellentesque nunc. Donec suscipit erat. Pellentesque habitant morbi tristique ullamcorper.</p>
                          <p><s>Mauris mattis feugiat lectus nec mauris. Nullam vitae ante.</s></p>
                        </div>
                      </div>
                      <!-- col-md-4-->
                      <div class="col-md-4">
                        <div contenteditable="true">
                          <h3> Integer condimentum sit amet </h3>
                          <p> <strong>Aenean nonummy a, mattis varius. Cras aliquet.</strong> Praesent <a href="http://ckeditor.com/">magna non mattis ac, rhoncus nunc</a>, rhoncus eget, cursus pulvinar mollis.</p>
                          <p>Proin id nibh. Sed eu libero posuere sed, lectus. Phasellus dui gravida gravida feugiat mattis ac, felis.</p>
                          <p>Integer condimentum sit amet, tempor elit odio, a dolor non ante at sapien. Sed ac lectus. Nulla ligula quis eleifend mi, id leo velit pede cursus arcu id nulla ac lectus. Phasellus vestibulum. Nunc viverra enim quis diam.</p>
                        </div>
                        <div contenteditable="true">
                          <h3> Praesent wisi accumsan sit amet nibh </h3>
                          <p>Donec ullamcorper, risus tortor, pretium porttitor. Morbi quam quis lectus non leo.</p>
                          <p style="margin-left: 40px; ">Integer faucibus scelerisque. Proin faucibus at, aliquet vulputate, odio at eros. Fusce <a href="http://ckeditor.com/">gravida, erat vitae augue</a>. Fusce urna fringilla gravida.</p>
                          <p>In hac habitasse platea dictumst. Praesent wisi accumsan sit amet nibh. Maecenas orci luctus a, lacinia quam sem, posuere commodo, odio condimentum tempor, pede semper risus. Suspendisse pede. In hac habitasse platea dictumst. Nam sed laoreet sit amet erat. Integer.</p>
                        </div>
                      </div>
                      <!-- col-md-4-->
                      <div class="col-md-4">
                        <div contenteditable="true">                          
                          <p> <img src="img/logo.png" alt="CKEditor logo" class="img-left">Quisque justo neque, mattis sed, fermentum ultrices <strong>posuere cubilia Curae</strong>, Vestibulum elit metus, quis placerat ut, lectus. Ut sagittis, nunc libero, egestas consequat lobortis velit rutrum ut, faucibus turpis. Fusce porttitor, nulla quis turpis. Nullam laoreet vel, consectetuer tellus suscipit ultricies, hendrerit wisi. Donec odio nec velit ac nunc sit amet, accumsan cursus aliquet. Vestibulum ante sit amet sagittis mi.</p>
                          <h3> Nullam laoreet vel consectetuer tellus suscipit </h3>
                          <ul>
                            <li>Ut sagittis, nunc libero, egestas consequat lobortis velit rutrum ut, faucibus turpis.</li>
                            <li>Fusce porttitor, nulla quis turpis. Nullam laoreet vel, consectetuer tellus suscipit ultricies, hendrerit wisi.</li>
                            <li>Mauris eget tellus. Donec non felis. Nam eget dolor. Vestibulum enim. Donec.</li>
                          </ul>
                          <p>Quisque justo neque, mattis sed, <a href="http://ckeditor.com/">fermentum ultrices posuere cubilia</a> Curae, Vestibulum elit metus, quis placerat ut, lectus.</p>
                          <p>Nullam laoreet vel, consectetuer tellus suscipit ultricies, hendrerit wisi. Ut sagittis, nunc libero, egestas consequat lobortis velit rutrum ut, faucibus turpis. Fusce porttitor, nulla quis turpis.</p>
                          <p>Donec odio nec velit ac nunc sit amet, accumsan cursus aliquet. Vestibulum ante sit amet sagittis mi. Sed in nonummy faucibus turpis. Mauris eget tellus. Donec non felis. Nam eget dolor. Vestibulum enim. Donec.</p>
                        </div>
                      </div>
                      <!-- col-md-4--> 
                      
                    </div>
                  </div>
                  <!-- panel-body --> 
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-md-12 --> 
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
<?php include('templates/scripts/forms-inline-editing.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>