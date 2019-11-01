<?php require_once('templates/headers/opening.tpl.php'); ?>

<!-- Specific Page Data -->
<?php $title = 'Invoice Pages HTML Template - Responsive Multipurpose Admin Templates'; ?>
<?php $keywords = 'HTML5 Template, CSS3, All Purpose Admin Template, Vendroid'; ?>
<?php $description = 'Invoice Pages - Responsive Admin HTML Template'; ?>
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
                <li class="active">Invoice</li>
              </ul>
              <?php include('templates/widgets/panel-menu-head-section.tpl.php'); ?> 
            </div>
          </div>
          <div class="vd_title-section clearfix">
            <div class="vd_panel-header no-subtitle">
              <h1>Invoice</h1>
            </div>
          </div>
          <div class="vd_content-section clearfix">
            <div class="row">
              <div class="col-sm-9">
                <div class="panel widget light-widget">
                  <div class="panel-body" style="padding:40px;">
                    <div class="pull-right text-right">
                      <h3 class="font-semibold mgbt-xs-20">INVOICE</h3>
                      <table class="table table-bordered">
                        <tr>
                          <th>Invoice No.</th>
                          <th>Date</th>
                        </tr>
                        <tr>
                          <td>I-24051301</td>
                          <td>24 May 2013</td>
                        </tr>
                      </table>
                    </div>
                    <div class="mgbt-xs-20"><img alt="logo" src="img/logo.png" /></div>
                    <address>
                    795 Folsom Ave, Suite 600<br>
                    San Francisco, CA 94107<br>
                    <abbr title="Phone">P:</abbr> (123) 456-7890<br />
                    <br />
                    info@venmond.com
                    </address>
                    <hr/>
                    <br/>
                    <div class="pd-25">
                      <div class="row">
                        <div class="col-xs-3">
                          <address>
                          <strong>Bill To:</strong><br>
                          John Doe<br>
                          Incorporesano Ltd.<br>
                          (123) 456-7890
                          </address>
                        </div>
                        <div class="col-xs-4">
                          <address>
                          <strong>Ship To:</strong><br>
                          John Doe<br>
                          795 Folsom Ave, Suite 600<br/>
                          San Francisco, CA 94107<br>
                          </address>
                        </div>
                        <div class="col-xs-2">
                          <address>
                          <strong>Due Date:</strong><br>
                          24 July 2013
                          </address>
                        </div>
                        <div class="col-xs-3">
                          <div class="text-right">
                          <strong>Due Balance:</strong><br>
                          <span class="mgtp-5 vd_green font-md">$2499.99</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <table class="table table-condensed table-striped">
                      <thead>
                        <tr>
                          <th class="text-center" style="width:20px;">QTY</th>
                          <th>DESCRIPTION</th>
                          <th class="text-right" style="width:120px;">UNIT PRICE</th>
                          <th class="text-right" style="width:120px;">TOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center">1</td>
                          <td>Samsung Galaxy Note 3 III N900 32gb Black Factory Unlocked Android Cell Phone</td>
                          <td class="text-right">$649.99</td>
                          <td class="text-right">$649.99</td>
                        </tr>
                        <tr>
                          <td class="text-center">2</td>
                          <td>Xbox One Console</td>
                          <td class="text-right">$500.00</td>
                          <td class="text-right">$1000.00</td>
                        </tr>
                        <tr>
                          <td class="text-center">1</td>
                          <td>Apple iPhone 5s, Gold 16GB (Unlocked)</td>
                          <td class="text-right">$700.00</td>
                          <td class="text-right">$700.00</td>
                        </tr>
                        <tr>
                          <td class="text-center">1</td>
                          <td>Keurig K-Cup Home Brewer</td>
                          <td class="text-right">$100.00</td>
                          <td class="text-right">$100.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colspan="2" rowspan="3" class="bdr">Note:
                            <p class="font-normal">Please send all of these items using wooden box package.</p></th>
                          <th class="text-right pd-10">Sub Total</th>
                          <th class="text-right pd-10">$2449.99</th>
                        </tr>
                        <tr>
                          <th class="text-right  pd-10 no-bd">Discount</th>
                          <th class="text-right  pd-10 vd_red no-bd">($100.00)</th>
                        </tr>
                        <tr>
                          <th class="text-right  pd-10 no-bd">Shipping Cost</th>
                          <th class="text-right  pd-10 no-bd">$50.00</th>
                        </tr>
                        <tr>
                          <th colspan="2">Thank you for your business. Please remit the total amount due within 30 days.</th>
                          <th class="text-right  pd-10">Total</th>
                          <th class="text-right  pd-10 "><span class="vd_green font-sm font-normal">$2399.99</span></th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <!-- panel-body --> 
                  
                </div>
                <!-- Panel Widget --> 
              </div>
              <!-- col-sm-9-->
              <div class="col-sm-3">
                <div class="mgbt-xs-5">
                  <button class="btn vd_btn vd_bg-grey" type="button"><i class="fa fa-print append-icon"></i>Print</button>
                </div>
                <div class="mgbt-xs-5">
                  <button class="btn vd_btn vd_bg-green " type="button"><i class="fa fa-download append-icon"></i>Save as PDF</button>
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


<!-- Specific Page Scripts END -->

<?php require_once('templates/footers/closing.tpl.php'); ?>