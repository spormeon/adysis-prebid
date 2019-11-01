                        <form class="form-horizontal">                      
                        <div class="vd_panel-menu">
                          <div> <a class="btn vd_btn vd_bg-blue btn-sm" data-action="notification" data-type="success" data-title="Title" data-message="Your has setting is saved successfully"><i class="fa fa-save append-icon"></i> Save Changes</a> <a class="btn btn-default btn-sm"><i class="fa fa-times append-icon"></i> Cancel Changes</a></div>
                        </div>
                        <h3 class="mgtp-15 mgbt-xs-20"> Product Information</h3>

                          <div class="form-group">
                            <label for="simple_product" class="control-label col-lg-3" ><span data-toggle="tooltip" class="label-tooltip" data-original-title="Product type"> Type </span></label>
                            <div class="col-lg-9">
                              <div class="radio">
                                <label for="simple_product">
                                  <input type="radio" checked="checked" value="0" id="simple_product" name="type_product">
                                  Standard product</label>
                              </div>
                              <div class="radio">
                                <label for="pack_product">
                                  <input type="radio" value="1" id="pack_product" name="type_product">
                                  Pack of existing products</label>
                              </div>
                              <div class="radio">
                                <label for="virtual_product">
                                  <input type="radio" value="2" id="virtual_product" name="type_product">
                                  Virtual product (services, booking, downloadable products, etc.)</label>
                              </div>
                            </div>
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label for="name_1" class="control-label col-lg-3 required"> <span title="" data-toggle="tooltip" class="label-tooltip" data-original-title="The public name for this product. Invalid characters &lt;&gt;;=#{}"> Name </span> </label>
                            <div class="col-lg-5">
                              <div class="row mgbt-xs-0">
                                <div class="col-sm-9">
                                  <input type="text" required value="Tight Long Jeans" name="name_1" class="form-control  updateCurrentText " id="name_1" >
                                </div>
                                <div class="col-sm-2">
                                  <button tabindex="-1" data-toggle="dropdown" class="btn btn-default btn-xs dropdown-toggle" type="button"> en <span class="caret"></span> </button>
                                  <ul class="dropdown-menu">
                                    <li> <a href="javascript:hideOtherLanguage(1);">English (English)</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(2);">Español (Spanish)</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(3);">Français (French)</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(4);">Italiano (Italian)</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(5);">Deutsch (German)</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(6);">Dutch</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(7);">Polish</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(8);">Russian</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(9);">Portuguese</a> </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label for="code_1" class="control-label col-lg-3 required"> <span title="" data-toggle="tooltip" class="label-tooltip" data-original-title="Product reference number (SKU-10423, etc.)"> Code </span> </label>
                            <div class="col-lg-3">
                              <input type="text" required value="REF-0102392" name="name_1" class="form-control  updateCurrentText " id="code_1" >
                            </div>
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label for="code_1" class="control-label col-lg-3 required"> <span title="" data-toggle="tooltip" class="label-tooltip" data-original-title="Enable product" > Enable </span> </label>
                            <div class="col-lg-3">
                              <input  type="checkbox" data-rel="switch" data-wrapper-class="inverse" data-size="small" data-on-text="<i class='fa fa-check'></i>" data-off-text="<i class='fa fa-times'></i>"  checked>
                            </div>
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label for="description_short_1" class="control-label col-lg-3"> <span title="" data-toggle="tooltip" class="label-tooltip" data-original-title="Appears in the product list(s), and at the top of the product page."> Short description </span> </label>
                            <div class="col-lg-8 mgbt-xs-10 mgbt-lg-0">
                              <textarea name="editor1" data-rel="ckeditor" rows="1" ></textarea>
                            </div>
                            <div class="col-lg-1">
                              <button tabindex="-1" data-toggle="dropdown" class="btn btn-xs btn-default dropdown-toggle" type="button"> en <span class="caret"></span> </button>
                              <ul class="dropdown-menu pull-right">
                                <li> <a href="javascript:hideOtherLanguage(1);">English (English)</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(2);">Español (Spanish)</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(3);">Français (French)</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(4);">Italiano (Italian)</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(5);">Deutsch (German)</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(6);">Dutch</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(7);">Polish</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(8);">Russian</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(9);">Portuguese</a> </li>
                              </ul>
                            </div>
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label for="description_1" class="control-label col-lg-3"> <span title="" data-toggle="tooltip" class="label-tooltip" data-original-title="Appears in the body of product detail."> Description </span> </label>
                            <div class="col-lg-8 mgbt-xs-10 mgbt-lg-0">
                              <textarea name="editor2" data-rel="ckeditor" rows="1" ></textarea>
                            </div>
                            <div class="col-lg-1">
                              <button tabindex="-1" data-toggle="dropdown" class="btn btn-xs btn-default dropdown-toggle" type="button"> en <span class="caret"></span> </button>
                              <ul class="dropdown-menu pull-right">
                                <li> <a href="javascript:hideOtherLanguage(1);">English (English)</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(2);">Español (Spanish)</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(3);">Français (French)</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(4);">Italiano (Italian)</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(5);">Deutsch (German)</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(6);">Dutch</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(7);">Polish</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(8);">Russian</a> </li>
                                <li> <a href="javascript:hideOtherLanguage(9);">Portuguese</a> </li>
                              </ul>
                            </div>
                          </div>
                          <!-- form-group -->
                          
                          <div class="form-group">
                            <label for="tags_1" class="control-label col-lg-3"> <span title="" data-toggle="tooltip" class="label-tooltip" data-original-title="Each tag has to be followed by a comma. The following characters are forbidden: !&lt;;&gt;;?=+#&quot;°{}_$%"> Tags </span> </label>
                            <div class="col-lg-8 mgbt-xs-10 mgbt-lg-0">
                              <div class="row">
                                <div class="col-lg-9 mgbt-xs-10 mgbt-lg-0">
                                  <input type="text" value="" name="tags_1"  id="tags_1" data-rel="tags-input">
                                </div>
                                <div class="col-lg-2">
                                  <button data-toggle="dropdown" class="btn btn-xs btn-default dropdown-toggle" type="button"> en <span class="caret"></span> </button>
                                  <ul class="dropdown-menu">
                                    <li> <a href="javascript:hideOtherLanguage(1);">English (English)</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(2);">Español (Spanish)</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(3);">Français (French)</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(4);">Italiano (Italian)</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(5);">Deutsch (German)</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(6);">Dutch</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(7);">Polish</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(8);">Russian</a> </li>
                                    <li> <a href="javascript:hideOtherLanguage(9);">Portuguese</a> </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- form-group -->
                          
                        </form>