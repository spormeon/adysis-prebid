<!-- Footer Start -->
  <footer class="footer-2"  id="footer">      
    <div class="vd_bottom <?php if (isset($bottom_extra_class)) echo($bottom_extra_class); ?>">
        <div class="container">
            <div class="row">
              <div class=" col-xs-12">
              	<div class="text-center mgbt-xs-10">
                	<a class="btn vd_btn vd_bg-facebook vd_round-btn btn-sm  mgr-10"><i class="fa fa-facebook fa-fw "></i></a>
                    <a class="btn vd_btn vd_bg-googleplus vd_round-btn btn-sm  mgr-10"><i class="fa fa-google-plus fa-fw"></i></a>
                    <a class="btn vd_btn vd_bg-twitter vd_round-btn btn-sm mgr-10"><i class="fa fa-twitter fa-fw "></i></a>                    
                </div>              
                <div class="copyright text-center">
                	<p><span class="mgr-10">795 Folsom Ave, Suite 600</span><span class="mgr-10">-</span><span class="mgr-10">San Francisco, CA 94107</span><br/> 
                    P: (123) 456-7890 
                    </p>
                  	<?php if (isset($footer_message)) echo($footer_message); ?> 
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
