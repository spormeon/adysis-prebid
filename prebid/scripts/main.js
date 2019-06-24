requirejs(['prebid_gpt']);

//TIMEOUT MAP - 1000 def brings back bigger bids in Uk
var timeoutMap = {
0 : 1400,
1 : 1400,
2 : 1400,
3 : 1400,
4 : 1400,
5 : 1400,
6 : 1400,
7 : 1400,
8 : 1400,
9 : 1200,
10 : 1200,
11 : 1400,
12 : 1400,
13 : 1400,
14 : 1400,
15 : 1000,
16 : 1400,
17 : 1400,
18 : 1400,
19 : 1400,
20 : 1400,
21 : 1400,
22 : 1400,
23 : 1400
};
var t = new Date().getUTCHours();
PREBID_TIMEOUT = timeoutMap[t];
console.log("prebid timeout:", PREBID_TIMEOUT );

//FLOOR_PRICE MAP - 1000 def brings back bigger bids in Uk
var floorpriceMap = {
0 : 0.20,
1 : 0.21,
2 : 0.22,
3 : 0.23,
4 : 0.24,
5 : 0.25,
6 : 0.16,
7 : 0.17,
8 : 0.18,
9 : 0.19,
10 : 0.20,
11 : 0.31,
12 : 0.32,
13 : 0.33,
14 : 0.34,
15 : 0.35,
16 : 0.36,
17 : 0.37,
18 : 0.38,
19 : 0.39,
20 : 0.40,
21 : 0.41,
22 : 0.42,
23 : 0.43
};
var f = new Date().getUTCHours();
FLOOR_PRICE = floorpriceMap[f];
console.log("floor price:", FLOOR_PRICE );
// site config
var site_config = {
    refresh_rate: PREBID_TIMEOUT*30,  //denoted in milliseonds 40secs=40000...
    FAILSAFE_TIMEOUT: PREBID_TIMEOUT*1.5   //denoted in milliseonds 5secs=5000...
    // floor_price: 1.00 //set a min floor price on bids to pressure higher bids
  };
// site_config end
// unruly player config //
window.top.unruly = window.top.unruly || {}
window.top.unruly.native = window.top.unruly.native || {}
window.top.unruly.native.onAdLoaded = () => {window.top.unruly.native.disclosureMessage = "";}

requirejs(['amazon_bidder']);

var usebidcacheMap = {
0 : true,			   
1 : false,
2 : true,
3 : false,
4 : true,
5 : false,
6 : true,
7 : false,
8 : true,
9 : false,
10 : true,
11 : false,
12 : true,
13 : false,
14 : true,
15 : false,
16 : true,
17 : false,
18 : true,
19 : false,
20 : true,
21 : false,
22 : true,
23 : false
};
var u = new Date().getUTCHours();
USERBIDCACHE = usebidcacheMap[u];
console.log("user bid cache:", USERBIDCACHE );	

requirejs(['analytics_settings']);
requirejs(['bidders']);   
    
// ======== DO NOT EDIT BELOW THIS LINE =========== //
    const customConfigObject = {
     "buckets" : [{
      "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
      "min" : 0,
      "max" : 2,
      "increment" : 0.01  // from $0 to $5, 1-cent increments
      },
      {
      "precision": 2,
      "min" : 2.1,
      "max" : 20,
      "increment" : 0.10  // from $5 to $20, round down to the previous 10-cent increment
    }]
    };
    var googletag = googletag || {};
     googletag.cmd = googletag.cmd || [];
     googletag.cmd.push(function() {
     googletag.pubads().disableInitialLoad();
    });
    var pbjs = pbjs || {};
     pbjs.que = pbjs.que || [];
     pbjs.que.push(function() {
     pbjs.addAdUnits(adUnits);
     
requirejs(['bidder_settings']);     
requirejs(['pbjs_config']);

    pbjs.requestBids({
     bidsBackHandler: initAdserver,
     timeout: PREBID_TIMEOUT
    });
    });
    function initAdserver() {
     if (pbjs.initAdserverSet) return;
     pbjs.initAdserverSet = true;
     googletag.cmd.push(function() {
     pbjs.que.push(function() {
     pbjs.setTargetingForGPTAsync();
     googletag.pubads().refresh();
     });
     });
     }
  // in case PBJS doesn't load
     setTimeout(function() {
     initAdserver();
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
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
 // googletag.pubads().disableInitialLoad();
    googletag.pubads().enableLazyLoad({
      fetchMarginPercent: 25,  // Fetch slots within 30 viewports.
      renderMarginPercent: 20,  // Render slots within 5000 viewports.
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
    })(window.googletag, window.pbjs, {
definitons: {
    inreedvidSlot: { adUnitPath: "/1001824/Golfwrx.com-HB/Golfwrx.com-HB-Vid-test", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
    inreedvid1Slot: { adUnitPath: "/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test1", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
    inreedvid2Slot: { adUnitPath: "/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test2", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
    inreedvid3Slot: { adUnitPath: "/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test3", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
    },
    sizeMappings: {
     mappinginreedvidslot: [
     [[1024, 768],[[728,90],[300,250],[250,250],[468,60],[320,50],[1,1],[550,310]]],
     [[768, 500],[[728,90],[300,250],[250,250],[468,60],[320,50],[1,1],[550,310]]],
     [[1, 1],[[300,250],[250,250],[320,50],[1,1]]],
    ]
    }
   });
});
requirejs(['analytics_custom']);
requirejs(['analytics_client']);