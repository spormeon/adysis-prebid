<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Form Multiple Upload - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, Mega Menu, Admin Template, Elegant HTML Theme, Vendroid'; ?>
<?php $description = 'Form Multiple Upload - Responsive Admin HTML Template'; ?>
<?php $page = 'forms';   // To set active on the same id of primary menu ?>
<?php $specific_css[0] = 'http://blueimp.github.io/Gallery/css/blueimp-gallery.min.css'; ?>
<?php $specific_css[1] = 'plugins/jquery-file-upload/css/jquery.fileupload.css'; ?>
<?php $specific_css[2] = 'plugins/jquery-file-upload/css/jquery.fileupload-ui.css'; ?>

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
                <li class="active">Form Multiple File Upload</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header no-subtitle">
              <h1>Form Multiple File Upload</h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-12">
                <div class="panel widget light-widget">
                  <div class="panel-heading">
                   <?php include('templates/widgets/panel-menu-widget-no-minimize.tpl.php'); ?> 
                  </div>
                  <div class="panel-body">
                    <h2> Multiple <span class="font-semibold">File Upload </span> </h2>
                    <h2 class="lead">Basic Plus UI version</h2>
                    <blockquote> File Upload widget with multiple file selection, drag&amp;drop support, progress bars, validation and preview images, audio and video for jQuery.<br>
                      Supports cross-domain, chunked and resumable file uploads and client-side image resizing.<br>
                      Works with any server-side platform (PHP, Python, Ruby on Rails, Java, Node.js, Go etc.) that supports standard HTML form file uploads. </blockquote>
                    <br>
                    <!-- The file upload form used as target for the file upload widget -->
                    <form id="fileupload" action="//jquery-file-upload.appspot.com/" method="POST" enctype="multipart/form-data">
                      <!-- Redirect browsers with JavaScript disabled to the origin page -->
                      <noscript>
                      <input type="hidden" name="redirect" value="http://blueimp.github.io/jQuery-File-Upload/">
                      </noscript>
                      <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->
                      <div class="row fileupload-buttonbar">
                        <div class="col-lg-7"> 
                          <!-- The fileinput-button span is used to style the file input field as button --> 
                          <span class="btn btn-success fileinput-button"> <i class="glyphicon glyphicon-plus"></i> <span>Add files...</span>
                          <input type="file" name="files[]" multiple>
                          </span>
                          <button type="submit" class="btn btn-primary start"> <i class="glyphicon glyphicon-upload"></i> <span>Start upload</span> </button>
                          <button type="reset" class="btn btn-warning cancel"> <i class="glyphicon glyphicon-ban-circle"></i> <span>Cancel upload</span> </button>
                          <button type="button" class="btn btn-danger delete"> <i class="glyphicon glyphicon-trash"></i> <span>Delete</span> </button>
                          <input type="checkbox" class="toggle">
                          <!-- The global file processing state --> 
                          <span class="fileupload-process"></span> </div>
                        <!-- The global progress state -->
                        <div class="col-lg-5 fileupload-progress fade"> 
                          <!-- The global progress bar -->
                          <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar progress-bar-success" style="width:0%;"></div>
                          </div>
                          <!-- The extended global progress state -->
                          <div class="progress-extended">&nbsp;</div>
                        </div>
                      </div>
                      <!-- The table listing the files available for upload/download -->
                      <table role="presentation" class="table table-striped">
                        <tbody class="files">
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
                <!-- Panel Widget -->
                
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title vd_black">Demo Notes</h3>
                  </div>
                  <div class="panel-body">
                    <ul>
                      <li><strong>For Demo Purpose Files can only be uploaded but can not be accessed or opened. Edit or remove .htaccess files to enable it</strong></li>
                      <li>The maximum file size for uploads in this demo is <strong>5 MB</strong> (default file size is unlimited).</li>
                      <li>Only image files (<strong>JPG, GIF, PNG</strong>) are allowed in this demo (by default there is no file type restriction).</li>
                      <li>Uploaded files will be deleted automatically after <strong>5 minutes</strong> (demo setting).</li>
                      <li>You can <strong>drag &amp; drop</strong> files from your desktop on this webpage (see <a href="https://github.com/blueimp/jQuery-File-Upload/wiki/Browser-support">Browser support</a>).</li>
                      <li>Please refer to the <a href="https://github.com/blueimp/jQuery-File-Upload">project website</a> and <a href="https://github.com/blueimp/jQuery-File-Upload/wiki">documentation</a> for more information.</li>
                      <li>Built with Twitter's <a href="http://twitter.github.com/bootstrap/">Bootstrap</a> CSS framework and Icons from <a href="http://glyphicons.com/">Glyphicons</a>.</li>
                    </ul>
                  </div>
                </div>
                
                <!-- The blueimp Gallery widget -->
                <div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls" data-filter=":even">
                  <div class="slides"></div>
                  <h3 class="title"></h3>
                  <a class="prev">‹</a> <a class="next">›</a> <a class="close">×</a> <a class="play-pause"></a>
                  <ol class="indicator">
                  </ol>
                </div>
              </div>
              <!-- col-sm-12 --> 
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
<?php include('templates/scripts/forms-multiple-file-upload.tpl.php'); ?>

<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>