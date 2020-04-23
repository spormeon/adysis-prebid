var googletag = googletag || {};
     googletag.cmd = googletag.cmd || [];
     googletag.cmd.push(function() {
     googletag.pubads().disableInitialLoad();
    });   
var pbjs = pbjs || {};
     pbjs.que = pbjs.que || [];
     pbjs.que.push(function() {
     const unitsOnPage = adUnits.filter(u => !! document.getElementById(u.code));
     pbjs.addAdUnits(unitsOnPage);
     //pbjs.addAdUnits(videoAdUnit); // add your ad units to the bid request
  // alias for bidder
     //pbjs.aliasBidder('appnexus','brealtime'); 
  // adjust the bid in real time before the auction takes place
     pbjs.bidderSettings = {
//standard: {
//adserverTargeting: [
//{ key: "hb_bidder", val: function(bidResponse) { return bidResponse.bidderCode; } },
//{ key: "hb_adid", val: function(bidResponse) { return bidResponse.adId; } },
//{ key: "hb_pb",     val: function(bidResponse) { return bidResponse.pbCg; } },
//{ key: 'hb_size', val: function (bidResponse) { return bidResponse.size; } },
//{ key: 'hb_source', val: function (bidResponse) { return bidResponse.source; } },
//{ key: 'hb_deal', val: function (bidResponse) { return bidResponse.deal; } },
//{ key: 'hb_format', val: function (bidResponse) { return bidResponse.mediaType; } },
//{ key: 'hb_native_linkurl', val: function (bidResponse) { return bidResponse.native.clickUrl; } },
//{ key: 'hb_native_image', val: function (bidResponse) { return bidResponse.native.image; } },
//{ key: 'hb_native_brand', val: function (bidResponse) { return bidResponse.native.brand; } },
//{ key: 'hb_native_title', val: function (bidResponse) { return bidResponse.native.title; } }
//]
//},
sovrn:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.75; } },
appnexus:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.80; } },
openx:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.85; } },
sharethrough:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } }
};
    pbjs.setConfig({
    	//rubicon: {singleRequest: true},
    	priceGranularity: customConfigObjectA,
     consentManagement: { gdpr: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true }, usp: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400 } },
      cache: {url: "https://prebid.adnxs.com/pbc/v1/cache"},
      s2sConfig: {
        accountId: 'e31f627f-53a3-4288-9979-482d3c6ffc76',
        enabled: false,
        bidders: ['sovrn', 'openx','sharethrough'],
        timeout: PREBID_TIMEOUT-300,
        adapter: 'prebidServer',
        endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
        cookieSet: true,
        cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
      },
      userSync: {
        iframeEnabled: true,
        syncsPerBidder: 999, // and no more than 3 syncs at a time
        syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
        userIds: [{
            name: 'unifiedId',
            params: {
                partner: 'kvir89h'
            },
            storage: {
                type: 'cookie',
                name: 'pbjs-unifiedid',
                expires: 60
            }
        }],
      filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
      // enableOverride: true // publisher will call `pbjs.triggerUserSyncs()'
       },
       debug: true,
       useBidCache: USERBIDCACHE,
       enableSendAllBids: false, // Default will be `true` as of 1.0
       bidderSequence: 'random', // Default is random
       publisherDomain: 'specktra.com',
       bidderTimeout: PREBID_TIMEOUT+500,
       //pubcid: {expInterval: 525600},
       //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
       sizeConfig: [
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[580,400],[970,90],[728,90],[468,60],[336,280],[320,100],[320,50],[300,250],[250,250],[300,600]], labels: [ 'desktop'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[300,600],[300,250],[250,250],[160,600],[120,600]], labels: [ 'desktopmenu'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[300,250],[250,250]], labels: [ 'desktopmenu1'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[970, 90],[970, 250],[728, 90],[468, 60],[320, 50],[320, 100]], labels: [ 'desktopleader'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[970,90],[728,90],[468,60],[320,50]], labels: [ 'desktopfooter'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[970, 250],[970, 90],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]], labels: [ 'desktopbottom2'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[580,400],[728,90],[468,60],[320,50],[320,100],[336,280],[300,250],[300,600],[250,250]], labels: [ 'tablet'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[300,250],[300,600],[250,250]], labels: [ 'tabletmenu'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[728,90],[468,60],[320,50]], labels: [ 'tabletfooter'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]], labels: [ 'tabletbottom2'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[728,90],[468,60],[320,50]], labels: [ 'tabletleader'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[300,250],[250,250],[320,50],[320,100],[336,280]], labels: [ 'phone'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[468,60],[320,50]], labels: [ 'phonefooter'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[300, 250],[250, 250],[320, 50],[320, 100],[336, 280],[468, 90]], labels: [ 'phonebottom2'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[468,60],[320,50]], labels: [ 'phoneleader'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[300,250],[250,250]], labels: [ 'phonemenu'] }
       ]
     });
    pbjs.requestBids({
     bidsBackHandler: initAdserver1,
     timeout: PREBID_TIMEOUT
    });
    });
    function initAdserver1() {
     if (pbjs.initAdserver1Set) return;
     pbjs.initAdserver1Set = true;
     googletag.cmd.push(function() {
     pbjs.que.push(function() {
     pbjs.setTargetingForGPTAsync();
     pbjs.triggerUserSyncs();
     googletag.pubads().refresh();
     });
     });
     }
  // in case pbjs doesn't load
     setTimeout(function() {
     initAdserver1();
     }, site_config.FAILSAFE_TIMEOUT);
     
     
     
googletag.cmd.push(function () {
    (function (googletag, pbjs, config) {
     var sizeMappings = {};
      var slots = {};
       function refreshSlot(slot) {
       pbjs.que.push(function() {
       pbjs.requestBids({
       timeout: PREBID_TIMEOUT,
    // useBidCache: USERBIDCACHE,
       adUnitCodes: [slot.getSlotElementId()],
       bidsBackHandler: function() {
       pbjs.setTargetingForGPTAsync([slot.getSlotElementId()]);
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
    //googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    //googletag.pubads().setSafeFrameConfig({allowPushExpansion: true, sandbox: true});
    //googletag.setAdIframeTitle('Advertisement');
    googletag.pubads().enableLazyLoad({
      fetchMarginPercent: 15,  // Fetch slots within 30 viewports.
      renderMarginPercent: 8,  // Render slots within 5000 viewports.
      mobileScaling: 0.0  // Double the above values on mobile.
    });
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    //googletag.pubads().disableInitialLoad();
    googletag.enableServices();
// not sure if impressionViewable, slotRenderEnded or slotOnload or impressionViewable is best to use yet
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
    	if (!!! document.getElementById(key)) {
            return;
          }
     var def = config.definitons[key];
      var slot = googletag.defineSlot(def.adUnitPath, def.size, key);
       slot.setTargeting("test", "refresh");
    // slot.setTargeting(event.slot);
       slot.defineSizeMapping(sizeMappings[def.sizeMapping]);
       slot.addService(googletag.pubads());
       googletag.display(key);
       slots[key] = { slot: slot };
    });
    
    googletag.cmd.push(function() {
        apstag.fetchBids({
                timeout: PREBID_TIMEOUT
            },
            function(bids) {
                apstag.setDisplayBids();
                //googletag.pubads().refresh();
            });
    });
    // googletag.pubads().refresh();
// the order below determines the order on the page //
    })(window.googletag, window.pbjs, {
definitons: {
inreedvid13Slot: { adUnitPath: "/21665095471/specktra_top_1", size: [[970, 90],[970, 250],[728, 90],[468, 60],[320, 50],[320, 100]], sizeMapping: "mappingleaderslot", timeout: site_config.refresh_rate, },
inreedvid9Slot: { adUnitPath: "/21665095471/specktra_mrec_1", size: [[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]], sizeMapping: "mappingmenuslot", timeout: site_config.refresh_rate, },
inreedvid5Slot: { adUnitPath: "/21665095471/specktra_halfpage", size: [[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]], sizeMapping: "mappingmenuslot", timeout: site_config.refresh_rate, },
inreedvid8Slot: { adUnitPath: "/21665095471/specktra_threads_leaderboard_1", size: [[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]], sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid4Slot: { adUnitPath: "/21665095471/specktra_threads_leaderboard_2", size: [[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]], sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid7Slot: { adUnitPath: "/21665095471/specktra_threads_leaderboard_4", size: [[970, 250],[970, 90],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]], sizeMapping: "mappingbottom2slot", timeout: site_config.refresh_rate, },
inreedvid10Slot: { adUnitPath: "/21665095471/specktra_footer_1", size: [[970, 250],[970, 90],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]], sizeMapping: "mappingbottom2slot", timeout: site_config.refresh_rate, },
inreedvid6Slot: { adUnitPath: "/21665095471/specktra_footer_2", size: [[970, 90],[728, 90],[468, 60],[320, 50],[320, 100]], sizeMapping: "mappingfooterslot", timeout: site_config.refresh_rate, },
},
sizeMappings: {
mappinginreedvidslot: [
[[1024, 768],[[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]]],
[[768, 500],[[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]]],
[[1, 1],[[300, 250],[250, 250],[320, 50],[320, 100],[336, 280],[468, 90]]]
],
mappingmenuslot: [
[[1024, 768],[[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]]],
[[768, 500],[[300, 250],[250, 250]]],
[[1, 1],[[300, 250],[250, 250]]]
],
mappingmenu1slot: [
[[1024, 768],[[300, 250],[250, 250]]],
[[768, 500],[[300, 250],[250, 250]]],
[[1, 1],[[300, 250],[250, 250]]]
],
mappingbottom2slot: [
[[1024, 768],[[970, 250],[970, 90],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]]],
[[768, 500],[[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]]],
[[1, 1],[[300, 250],[250, 250],[320, 50],[320, 100],[336, 280],[468, 90]]]
],
mappingfooterslot: [
[[1024, 768],[[970, 90],[728, 90],[468, 60],[320, 50],[320, 100]]],
[[768, 500],[[728, 90],[468, 60],[320, 50]]],
[[1, 1],[[468, 60],[320, 50]]]
],
mappingleaderslot: [
[[1024, 768],[[970, 90],[970, 250],[728, 90],[468, 60],[320, 50],[320, 100]]],
[[768, 500],[[728, 90],[468, 60],[320, 50]]],
[[1, 1],[[468, 60],[320, 50]]]
] 
}
});
});








