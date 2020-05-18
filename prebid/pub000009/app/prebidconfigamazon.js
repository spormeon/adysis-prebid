// this runs amazon in parallel with prebid
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    //googletag.pubads().disableInitialLoad();
});
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
pbjs.que.push(function() {
    const unitsOnPage = adUnits.filter(u => !!document.getElementById(u.code));
    pbjs.addAdUnits(unitsOnPage);
    
    pbjs.aliasBidder('appnexus','districtm');
    
    pbjs.bidderSettings = {
    		sovrn:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.85; } },
    		appnexus:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
    		openx:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.90; } },
    		sharethrough:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
    		districtm:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.90; } },
    		districtmDMX:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.90; } },
    		//emx_digital:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.80; } },
    		aol:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.90; } },
    		gourmetads:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
    		conversant:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
    		ix:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } }
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
       //bidderTimeout: PREBID_TIMEOUT+500,
       //pubcid: {expInterval: 525600},
       //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
        sizeConfig: [
            { mediaQuery: '(min-width: 769px)', sizesSupported: [[580,400],[970,90],[728,90],[468,60],[336,280],[320,100],[320,50],[300,250],[250,250],[300,600]], labels: [ 'desktop'] },
            { mediaQuery: '(min-width: 769px)', sizesSupported: [[300,600],[300,250],[250,250],[160,600],[120,600]], labels: [ 'desktopmenu'] },
            { mediaQuery: '(min-width: 769px)', sizesSupported: [[300,250],[250,250]], labels: [ 'desktopmenu1'] },
            { mediaQuery: '(min-width: 769px)', sizesSupported: [[970,90],[970,250],[728,90],[468,60],[320,50],[320,100]], labels: [ 'desktopleader'] },
            { mediaQuery: '(min-width: 769px)', sizesSupported: [[970,90],[728,90],[468,60],[320,50]], labels: [ 'desktopfooter'] },
            { mediaQuery: '(min-width: 769px)', sizesSupported: [[970,250],[970,90],[728,90],[300,250],[250,250],[468,60],[320,50],[336,280],[580,400],[320,100]], labels: [ 'desktopbottom2'] },
            { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[580,400],[728,90],[468,60],[320,50],[320,100],[336,280],[300,250],[300,600],[250,250]], labels: [ 'tablet'] },
            { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[300,250],[300,600],[250,250]], labels: [ 'tabletmenu'] },
            { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[728,90],[468,60],[320,50]], labels: [ 'tabletfooter'] },
            { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[728,90],[300,250],[250,250],[468,60],[320,50],[336,280],[580,400],[320,100]], labels: [ 'tabletbottom2'] },
            { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[728,90],[468,60],[320,50]], labels: [ 'tabletleader'] },
            { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[300,250],[250,250],[320,50],[320,100],[336,280]], labels: [ 'phone'] },
            { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[468,60],[320,50]], labels: [ 'phonefooter'] },
            { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[300,250],[250,250],[320,50],[320,100],[336,280],[468,60]], labels: [ 'phonebottom2'] },
            { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[468,60],[320,50]], labels: [ 'phoneleader'] },
            { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[300,250],[250,250]], labels: [ 'phonemenu'] }
          ]
    });
    
    //pbjs.requestBids({
    //    bidsBackHandler: biddersBack,
    //    timeout: PREBID_TIMEOUT
    // });
});

googletag.cmd.push(function() {
    (function(googletag, pbjs, config) {
        var sizeMappings = {};
        var slots = {};

        function refreshSlot(slot){
          requestManager.aps = false;
          requestManager.adserverRequestSent = false;
          requestManager.prebid = false;
          // initiate bid request
          console.log('refreshSlot Function called');
          requestHeaderBidsRefresh(slot);
        }

        Object.keys(config.sizeMappings).forEach(function(key) {
            var sizeMappingBuilder = googletag.sizeMapping();
            config.sizeMappings[key].forEach(function(mapping) {
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
            fetchMarginPercent: site_config.LAZYLOAD_FETCH,     // Fetch slots within 30 viewports.
            renderMarginPercent: site_config.LAZYLOAD_RENDER,   // Render slots within 5000 viewports.
            mobileScaling: site_config.LAZYLOAD_MOBILE_SCALE    // Double the above values on mobile. 
        });
        console.log('lazy load fetch triggered = ' +site_config.LAZYLOAD_FETCH);
        console.log('lazy load render triggered = ' +site_config.LAZYLOAD_RENDER);
        console.log('lazy load mobile scale set = ' +site_config.LAZYLOAD_MOBILE_SCALE);
        
        googletag.pubads().setPrivacySettings({
            'restrictDataProcessing': false
        });
        googletag.pubads().disableInitialLoad();
        googletag.enableServices();
        // not sure if impressionViewable, slotRenderEnded or slotOnload or impressionViewable is best to use yet
        googletag.pubads().addEventListener("impressionViewable", function(event) {
            var elementId = event.slot.getSlotElementId();
            var slotConfig = slots[elementId];
            if (slotConfig) {
                var handle = setTimeout(function() {
                    googletag.cmd.push(function() {
                        refreshSlot(event.slot);
                    });
                }, config.definitons[elementId].timeout);
                console.log("handle for time ", handle, "elementId", elementId, "duration", config.definitons[elementId].timeout);
            }
        });
        Object.keys(config.definitons).forEach(function(key) {
            if (!!!document.getElementById(key)) {
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
    })
    // the order below determines the order on the page //
    (window.googletag, window.pbjs, {
definitons: {
inreedvid13Slot: { adUnitPath: "/21665095471/SMF_Threads_Leaderboard_1", size: [[970, 90],[970, 250],[728, 90],[468, 60],[320, 50],[320, 100]], sizeMapping: "mappingleaderslot", timeout: site_config.refresh_rate, },
inreedvid9Slot: { adUnitPath: "/21665095471/SMF_Mrec_1", size: [[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]], sizeMapping: "mappingmenuslot", timeout: site_config.refresh_rate, },
inreedvid5Slot: { adUnitPath: "/21665095471/SMF_Skyscraper_1", size: [[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]], sizeMapping: "mappingmenuslot", timeout: site_config.refresh_rate, },
inreedvid8Slot: { adUnitPath: "/21665095471/SMF_Threads_Leaderboard_2", size: [[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]], sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid4Slot: { adUnitPath: "/21665095471/SMF_Threads_Leaderboard_3", size: [[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]], sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid7Slot: { adUnitPath: "/21665095471/SMF_Threads_Leaderboard_4", size: [[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]], sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid10Slot: { adUnitPath: "/21665095471/SMF_Footer_1", size: [[970, 250],[970, 90],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]], sizeMapping: "mappingbottom2slot", timeout: site_config.refresh_rate, },
inreedvid6Slot: { adUnitPath: "/21665095471/SMF_Top_Leaderboard_1", size: [[970, 90],[728, 90],[468, 60],[320, 50],[320, 100]], sizeMapping: "mappingfooterslot", timeout: site_config.refresh_rate, },
},
sizeMappings: {
	mappinginreedvidslot: [
	[[1024, 768],[[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]]],
	[[768, 500],[[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]]],
	[[1, 1],[[300, 250],[250, 250],[320, 50],[320, 100],[336, 280],[468, 60]]]
	],
	mappingmenuslot: [
	[[1024, 768],[[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]]],
	[[768, 500],[[300, 250],[250, 250]]],
	[[1, 1],[[300, 250],[250, 250]]]
	],
	mappingbottom2slot: [
	[[1024, 768],[[970, 250],[970, 90],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]]],
	[[768, 500],[[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]]],
	[[1, 1],[[300, 250],[250, 250],[320, 50],[320, 100],[336, 280],[468, 60]]]
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


var requestManager = {
    adserverRequestSent: false,
    aps: false,
    prebid: false
};

//function to check if both APS and Prebid have sent bids
function biddersBack() {
    if (requestManager.aps && requestManager.prebid) {
        console.log('biddersBack Called');
        sendAdserverRequest();
    }
    return;
}

//function to send bids to GAM
function sendAdserverRequest() {
    console.log('sendAdserverRequest Called');
    console.log('requestManager.adserverRequestSent = '+requestManager.adserverRequestSent);
    if (requestManager.adserverRequestSent === true) {
        return;
    }
    requestManager.adserverRequestSent = true;
    googletag.cmd.push(function() {
        console.log('sendAdserverRequest Refresh Called');
        googletag.pubads().refresh();
    });
}

//function to call the bids
function requestHeaderBids() {
    console.log('requestHeaderBids Called');
    // APS request
    apstag.fetchBids({},function(bids) {
            googletag.cmd.push(function() {
                console.log('APS Bids Called');
                apstag.setDisplayBids();
                requestManager.aps = true; // signals that APS request has completed
                biddersBack(); // checks whether both APS and Prebid have returned
            });
        }
    );

    // put prebid request here
    pbjs.que.push(function() {
        pbjs.requestBids({
            bidsBackHandler: function() {
                googletag.cmd.push(function() {
                    console.log('Prebid Bids Called');
                    pbjs.setTargetingForGPTAsync();
                    requestManager.prebid = true; // signals that Prebid request has completed
                    biddersBack(); // checks whether both APS and Prebid have returned
                })
            }
        });
    });
}
// initiate bid request
requestHeaderBids();


//Refresh Functions
function biddersBackRefresh(slot) {
    if (requestManager.aps && requestManager.prebid) {
        console.log('biddersBack Refresh Called');
        sendAdserverRequestRefresh(slot);
    }
    return;
}

//function to send bids to GAM
function sendAdserverRequestRefresh(slot) {
    console.log('sendAdserverRequestRefresh Called');
    console.log('requestManager.adserverRequestSent = '+requestManager.adserverRequestSent);
    if (requestManager.adserverRequestSent === true) {
        return;
    }
    requestManager.adserverRequestSent = true;
    googletag.cmd.push(function() {
        console.log('sendAdserverRequestRefresh Refresh Called');
        googletag.pubads().refresh([slot]);
    });
}

//function to call the bids
function requestHeaderBidsRefresh(slot) {
    console.log('requestHeaderBidsRefresh Called');
    // APS request
    apstag.fetchBids({
      //timeout: PREBID_TIMEOUT
    },function(bids) {
            googletag.cmd.push(function() {
                console.log('APS Refresh Bids Called');
                apstag.setDisplayBids();
                requestManager.aps = true; // signals that APS request has completed
                biddersBackRefresh(slot); // checks whether both APS and Prebid have returned
            });
        }
    );

    // put prebid request here
    pbjs.que.push(function() {
        pbjs.requestBids({
            //timeout: PREBID_TIMEOUT,
            adUnitCodes: [slot.getSlotElementId()],
            bidsBackHandler: function() {
                googletag.cmd.push(function() {
                    console.log('Prebid Refresh Bids Called');
                    pbjs.setTargetingForGPTAsync([slot.getSlotElementId()]);
                    requestManager.prebid = true; // signals that Prebid request has completed
                    biddersBackRefresh(slot); // checks whether both APS and Prebid have returned
                })
            }
        });
    });
}
//set failsafe timeout
window.setTimeout(function() {
    sendAdserverRequest();
}, PREBID_TIMEOUT);

