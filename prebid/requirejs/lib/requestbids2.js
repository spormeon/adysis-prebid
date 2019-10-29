function initAdserver1() {
     if (adyjs.initAdserver1Set) return;
     adyjs.initAdserver1Set = true;
     googletag.cmd.push(function() {
     adyjs.que.push(function() {
     adyjs.setTargetingForGPTAsync();
     adyjs.triggerUserSyncs();
     googletag.pubads().refresh();
     });
     });
     }
  // in case adyjs doesn't load
     setTimeout(function() {
     initAdserver1();
     }, site_config.FAILSAFE_TIMEOUT);
     
googletag.cmd.push(function () {
    (function (googletag, adyjs, config) {
     var sizeMappings = {};
      var slots = {};
       function refreshSlot(slot) {
       adyjs.que.push(function() {
       adyjs.requestBids({
       timeout: PREBID_TIMEOUT,
    // useBidCache: USERBIDCACHE,
       adUnitCodes: [slot.getSlotElementId()],
       bidsBackHandler: function() {
       adyjs.setTargetingForGPTAsync([slot.getSlotElementId()]);
    //googletag.destroySlots([slot]);
       googletag.pubads().refresh([slot]);
    }
    });
    });
    }
    Object.keys(config.sizeMappings).forEach(function (key) {
     var sizeMappingBuilder = googletag.sizeMapping();
      config.sizeMappings[key].forEach(function (mapping) {
      sizeMappingBuilder.addSize(mapping[0], mapping[1]);
    });
     var sizeMapping = sizeMappingBuilder.build();
      sizeMappings[key] = sizeMapping;
      console.log("created sizemapping", sizeMappings[key]);
    });
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    //googletag.pubads().setSafeFrameConfig({allowPushExpansion: true, sandbox: true});
    //googletag.setAdIframeTitle('Advertisement');
 // googletag.pubads().disableInitialLoad();
    googletag.pubads().enableLazyLoad({
      fetchMarginPercent: 12,  // Fetch slots within 30 viewports.
      renderMarginPercent: 8,  // Render slots within 5000 viewports.
      mobileScaling: 0.0  // Double the above values on mobile.
    });
    
    googletag.enableServices();
// not sure if impressionViewable, slotRenderEnded or slotOnload is best to use yet
    googletag.pubads().addEventListener("impressionViewable", function (event) {
     var elementId = event.slot.getSlotElementId();
      var slotConfig = slots[elementId];
       if (slotConfig) {
        var handle = setTimeout(function () {
         googletag.cmd.push(function () {
         refreshSlot(event.slot);
    });
    }, config.definitons[elementId].timeout);
      console.log("handle for time ", handle, "elementId", elementId, "duration", config.definitons[elementId].timeout);
    }
    });
    Object.keys(config.definitons).forEach(function (key) {
     var def = config.definitons[key];
      var slot = googletag.defineSlot(def.adUnitPath, def.size, key);
       slot.setTargeting("test", "refresh");
    // slot.setTargeting(event.slot);
       slot.defineSizeMapping(sizeMappings[def.sizeMapping]);
       slot.addService(googletag.pubads());
        googletag.display(key);
       slots[key] = { slot: slot };
    });
    // googletag.pubads().refresh();