<!-- Footer Start -->
  <footer class="footer-2"  id="footer">      
    <div class="vd_bottom">
        <div class="container">
            <div class="row">
              <div class=" col-xs-12">
                <div class="copyright text-center">
                   	<div class="footer-nav mgtp-10 mgbt-xs-10">
                    	<span class="mgr-10"><a href="index.php">Admin Home</a></span>
                    	<span class="mgr-10"><a href="index.php">Front Page 1</a></span>
                    	<span class="mgr-10"><a href="index.php">Front Page 2</a></span>
                    	<span class=""><a class="vd_btn btn vd_bg-green" href="index.php">Buy Theme</a></span>                        
                    </div>
					<div class="mgbt-xs-10">
                  		<?php if (isset($footer_message)) echo($footer_message); ?> 
                    </div>
                </div>
              </div>           
            </div><!-- row -->
        </div><!-- container -->
    </div>
  </footer>
<!-- Footer END -->

</div>
<!-- .vc_body END  -->
<a id="back-top" href="#" data-action="backtop" class="vd_back-top visible"> <i class="fa  fa-angle-up"> </i> </a>

<!--
<a class="back-top" href="#" id="back-top"> <i class="icon-chevron-up icon-white"> </i> </a> -->

<!-- Javascript =============================================== --> 
<!-- Placed at the end of the document so the pages load faster --> 
<?php include_once('templates/footers/scripts.tpl.php'); ?>
