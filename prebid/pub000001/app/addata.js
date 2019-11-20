/**
 * Gathers the page targeting data.
 *
 * @private
 * @param {Object} page - The internal object to append data to.
 * @returns {undefined}
 */
function getPageTargeting(page) {
  window.googletag.pubads().getTargetingKeys().forEach(function(keys) {
    page.pageTargeting[keys] = window.googletag.pubads().getTargeting(keys);
  });
}

/**
 * Gather the slots.
 *
 * @private
 * @param {Object} page - The internal object to append data to.
 * @returns {undefined}
 */
function getSlots(page) {
  window.googletag.pubads().getSlots().forEach(function(slot) {
    page.slots[slot.getSlotElementId()] = getSlotData(slot);
  });
}

/**
 * Gather individual slots data.
 *
 * @private
 * @param {Object} slot - The slot data returned from an ad call to DFP.
 * @returns {Object} The cleaned slot data.
 */
function getSlotData(slot) {
  var result = {
      sizes: [],
      outOfPage: slot.getOutOfPage(),
      targeting: slot.getTargetingMap(),
      elementId: slot.getSlotElementId()
  };
  var data = slot.getResponseInformation();
  result.advertiserId = data && data.advertiserId || "";
  result.campaignId = data && data.campaignId || "";
  result.creativeId = data && data.creativeId || "";
  result.isBackfill = data && !!data.isBackfill;
  result.labelIds = data && data.labelIds || "";
  result.lineItemId = data && data.lineItemId || "";
  result.outOfPage = data && !!data.outOfPag;
  result.sourceAgnosticCreativeId = data && data.sourceAgnosticCreativeId || "";
  result.sourceAgnosticLineItemId = data && data.sourceAgnosticLineItemId || "";
  result.DFP = data && data.creativeId && "https://www.google.com/dfp/3379#delivery/CreativeDetail/creativeId=" + data.creativeId || "";
  slot.getSizes().forEach(function(size) {
    result.sizes.push(typeof size === 'object' ? size.getWidth() + "x" + size.getHeight() : size);
  });
  return result;
}

/**
 * Gets the ads data fro googletag.
 * 
 *
 * @private
 * @returns {undefined}
 */
function getAdsData() {
  var page = {
      pageTargeting: {},
      slots: {}
  };
  getPageTargeting(page);
  getSlots(page);

  console.info('## Ad Data', page);
}

/**
 * Simply tick till the data is available.
 */
(function waitForGPT(){
  if(window.googletag && window.googletag.pubadsReady){
    getAdsData();;
  }
  else{
    setTimeout(waitForGPT, 250);
  }
}());