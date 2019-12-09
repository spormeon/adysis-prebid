     var adyjs = adyjs || {};
     adyjs.que = adyjs.que || [];
     adyjs.que.push(function() {
     adyjs.addAdUnits(adUnits);
     //adyjs.addAdUnits(videoAdUnit); // add your ad units to the bid request
  // alias for bidder
     //adyjs.aliasBidder('appnexus','brealtime'); 
     //adyjs.aliasBidder('appnexus','springserveAlias2');
     //adyjs.aliasBidder('appnexus','districtm');
     //adyjs.aliasBidder('gamoshi','viewdeos');
     adyjs.aliasBidder('onedisplay','aol');
     adyjs.aliasBidder('appnexus','adysis');
     //adyjs.aliasBidder('serverbid','adsparc');
     //adyjs.aliasBidder('aardvark','adsparc');
     // adyjs.aliasBidder('appnexus','152media');
  // adjust the bid in real time before the auction takes place
     adyjs.bidderSettings = {
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
aol:  { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.85; } },
onedisplay:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.85; } },
districtm:    { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.88; } },
districtmDMX:  { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.90; } },
// sekindonUM:    { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.75; } },
//brealtime:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
// springserveAlias2:  { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.65; } },
teads:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.94; } },
//unruly:  { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.90; } },
//viewdeos:  { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
sovrn:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.85; } },
beachfront:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } }, 
appnexus:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
ix:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
rhythmone:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
//somoaudience:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
pulsepoint:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
vi:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
//cedato:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
//komoona:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
'33across':   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
conversant:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
//atomx:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
smartyads:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
oftmedia:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.85; } },
//adsparc:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.85; } },
triplelift:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
criteo:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
openx:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
sharethrough:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
rubicon:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
emx_digital:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
//decenterads:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
smartrtb:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
//adysis: { bidCpmAdjustment : function(bidCpm){ return "+c.cpm+" * 2;} },
adysis: { bidCpmAdjustment : function(bidCpm){ return 0.28;} }
//adysis: { bidCpmAdjustment : function(bidCpm){ if(bidCpm < 300 ){ return 0.68; } },
};
    adyjs.setConfig({
    	rubicon: {singleRequest: true},
    	priceGranularity: customConfigObjectA,
     consentManagement: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true },
      cache: {url: "https://prebid.adnxs.com/pbc/v1/cache"},
      s2sConfig: {
        accountId: 'e31f627f-53a3-4288-9979-482d3c6ffc76',
        enabled: true,
        bidders: ['sovrn','rhythmone','pulsepoint','rubicon','ix','openx','lockerdome'],
        timeout: PREBID_TIMEOUT-300,
        adapter: 'prebidServer',
        endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
        cookieSet: true,
        cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
      },
      userSync: {
        iframeEnabled: true,
        syncsPerBidder: 10, // and no more than 3 syncs at a time
        syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
      filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
      // enableOverride: true // publisher will call `pbjs.triggerUserSyncs()'
       },
       debug: true,
       useBidCache: USERBIDCACHE,
       enableSendAllBids: false, // Default will be `true` as of 1.0
       bidderSequence: 'random', // Default is random
       publisherDomain: 'golfwrx.com',
       bidderTimeout: PREBID_TIMEOUT+500,
       pubcid: {expInterval: 525600},
       currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
       sizeConfig: [
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[580,400],[550,310],[970,90],[728,90],[468,60],[336,280],[320,100],[320,50],[300,250],[250,250],[300,600],[1,1]], labels: [ 'desktop'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[550,310],[300,600],[300,250],[250,250],[160,600],[120,600],[1,1]], labels: [ 'desktopmenu'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[300,250],[250,250],[1,1]], labels: [ 'desktopmenu1'] },
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[970,90],[970,250],[728,90],[468,60],[320,50]], labels: [ 'desktopleader'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[550,310],[580,400],[728,90],[468,60],[320,50],[320,100],[336,280],[300,250],[300,600],[250,250],[1,1]], labels: [ 'tablet'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[300,250],[300,600],[250,250],[1,1]], labels: [ 'tabletmenu'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[550,310],[300,250],[250,250],[320,50],[320,100],[336,280],[1,1]], labels: [ 'phone'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[300,250],[250,250],[1,1]], labels: [ 'phonemenu'] }
       ]
     });
    adyjs.requestBids({
     bidsBackHandler: initAdserver1,
     timeout: PREBID_TIMEOUT
    });
    });
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
     
     var googletag = googletag || {};
     googletag.cmd = googletag.cmd || [];
     googletag.cmd.push(function() {
    });
     
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
    googletag.pubads().enableLazyLoad({
      fetchMarginPercent: 12,  // Fetch slots within 30 viewports.
      renderMarginPercent: 8,  // Render slots within 5000 viewports.
      mobileScaling: 0.0  // Double the above values on mobile.
    });
    googletag.pubads().disableInitialLoad();
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
// the order below determines the order on the page //
    })(window.googletag, window.adyjs, {
definitons: {
//inreedvid11Slot: { adUnitPath: "/1001824/adp100001/adp100001H", size: "mappinginreedvidslot", sizeMapping: "mappingstickyslot", timeout: site_config.refresh_rate, },
//inreedvid12Slot: { adUnitPath: "/1001824/adp100001/adp100001I", size: "mappinginreedvidslot", sizeMapping: "mappingstickyslot", timeout: site_config.refresh_rate, },
inreedvid13Slot: { adUnitPath: "/1001824/adp100001/adp100001J", size: "mappingleaderslot", sizeMapping: "mappingleaderslot", timeout: site_config.refresh_rate, },
inreedvid5Slot: { adUnitPath: "/1001824/adp100001/adp100001B", size: "mappingmenuslot", sizeMapping: "mappingmenuslot", timeout: site_config.refresh_rate, },
inreedvid9Slot: { adUnitPath: "/1001824/adp100001/adp100001F", size: "mappingmenuslot", sizeMapping: "mappingmenuslot", timeout: site_config.refresh_rate, },
inreedvid8Slot: { adUnitPath: "/1001824/adp100001/adp100001E", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid4Slot: { adUnitPath: "/1001824/adp100001/adp100001A", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid6Slot: { adUnitPath: "/1001824/adp100001/adp100001C", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid10Slot: { adUnitPath: "/1001824/adp100001/adp100001G", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid7Slot: { adUnitPath: "/1001824/adp100001/adp100001D", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
},
sizeMappings: {
mappinginreedvidslot: [
[[1024, 768],[[550, 310],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]]],
[[768, 500],[[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[550, 310],[336, 280],[580, 400],[320, 100]]],
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
mappingstickyslot: [
[[1024, 768],[[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]]],
[[768, 500],[[160, 600],[120, 600]]],
[[1, 1],[[120, 600]]]
],
mappingfooterslot: [
[[1024, 768],[[970, 90],[728, 90],[468, 60],[320, 50]]],
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