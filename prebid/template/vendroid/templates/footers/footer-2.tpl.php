<!-- Footer Start -->
  <footer class="footer-2"  id="footer">      
    <div class="vd_bottom <?php if (isset($bottom_extra_class)) echo($bottom_extra_class); ?>">
        <div class="container">
            <div class="row">
              <div class=" col-xs-12">
                <div class="copyright text-center">
                  	<?php if (isset($footer_message)) echo($footer_message); ?> 
                </div>
              </div>
            </div><!-- row -->
        </div><!-- container -->
    </div>
  </footer>
<!-- Footer END -->

</div>

<!-- .vd_body END  -->
<a id="back-top" href="#" data-action="backtop" class="vd_back-top visible"> <i class="fa  fa-angle-up"> </i> </a>
<!--
<a class="back-top" href="#" id="back-top"> <i class="icon-chevron-up icon-white"> </i> </a> -->

<!-- Javascript =============================================== --> 
<!-- Placed at the end of the document so the pages load faster --> 
<?php include_once('templates/footers/scripts.tpl.php'); ?>
