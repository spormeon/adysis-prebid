                       <h3 class="mgtp-15 mgbt-xs-20"> Product Price</h3>
                        <form class="form-horizontal">
                          <div class="form-group">
                            <label for="wholesale_price" class="control-label col-lg-3"> <span title="" data-toggle="tooltip" class="label-tooltip" data-original-title="The wholesale price is the price you paid for the product. Do not include the tax.">Wholesale price</span> </label>
                            <div class="col-lg-2">
                              <div class="input-group"> <span class="input-group-addon">$ </span>
                                <input type="text" onchange="this.value = this.value.replace(/,/g, '.');" value="4.95" id="wholesale_price" name="wholesale_price" maxlength="14">
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="priceTE" class="control-label col-lg-3"> <span title="" data-toggle="tooltip" class="label-tooltip" data-original-title="The pre-tax retail price is the price for which you intend sell this product to your customers. It should be higher than the pre-tax wholesale price: the difference between the two will be your margin.">Retail price</span> </label>
                            <div class="col-lg-2">
                              <div class="input-group "> <span class="input-group-addon">$ </span>
                                <input type="hidden" value="16.510000" name="price" id="priceTEReal">
                                <input type="text" onkeyup="$('#priceType').val('TE'); $('#priceTEReal').val(this.value.replace(/,/g, '.')); if (isArrowKey(event)) return; calcPriceTI();" onchange="noComma('priceTE'); $('#priceTEReal').val(this.value);" value="16.510000" name="price_displayed" id="priceTE" maxlength="14" size="11">
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="id_tax_rules_group" class="control-label col-lg-3"> Tax rule </label>
                            <div class="col-lg-8">
                              <div class="row">
                                <div class="col-lg-6">
                                  <select id="id_tax_rules_group" name="id_tax_rules_group" onchange="javascript:calcPrice(); unitPriceWithTax('unit');">
                                    <option value="0">No Tax</option>
                                    <option value="2"> US-AK Rate (0%) </option>
                                    <option selected="selected" value="1"> US-AL Rate (4%) </option>
                                    <option value="4"> US-AR Rate (6%) </option>
                                    <option value="3"> US-AZ Rate (6.6%) </option>
                                    <option value="5"> US-CA Rate (8.25%) </option>
                                  </select>
                                </div>
                                <div class="col-lg-2"> <a href="index.php?controller=AdminTaxRulesGroup&amp;token=57467dd9dbc3a0693c6b079f851d7f84&amp;addtax_rules_group&amp;id_product=1" class="btn btn-link confirm_leave"> <i class="icon-plus-sign"></i> Create new tax <i class="icon-external-link-sign"></i> </a> </div>
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="unit_price" class="control-label col-lg-3"> <span title="" data-toggle="tooltip" class="label-tooltip" data-original-title="When selling a pack of items, you can indicate the unit price for each item of the pack. For instance, &quot;per bottle&quot; or &quot;per pound&quot;.">Unit price</span> </label>
                            <div class="col-lg-4">
                              <div class="input-group"> <span class="input-group-addon">$ </span>

                                <input type="text" onkeyup="if (isArrowKey(event)) return ;this.value = this.value.replace(/,/g, '.'); unitPriceWithTax('unit');" maxlength="14" value="0.00" name="unit_price" id="unit_price">
                                <span class="input-group-addon">per</span>
                                <input type="text" onchange="unitySecond();" onkeyup="if (isArrowKey(event)) return ;unitySecond();" maxlength="10" value="" name="unity" id="unity">
                              </div>
                            </div>
                          </div>
                        </form>