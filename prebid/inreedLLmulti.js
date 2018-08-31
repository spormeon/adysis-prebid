(function() {
var script = document.createElement('script');
script.src = '//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
})();
//load up prebid.js,  I think we need to load this earlier
(function() {
    var pbjsEl = document.createElement("script");
    pbjsEl.type = "text/javascript";
    pbjsEl.async = true;
    pbjsEl.src = "//d3s34vlfe7g7ew.cloudfront.net/prebid_teads.js";
    var pbjsTargetEl = document.getElementsByTagName("head")[0];
    pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
})();
           
//load up google gpt.js
(function () {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  var useSSL = 'https:' == document.location.protocol;
  gads.src = (useSSL ? 'https:' : 'http:') +
          '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(gads, node);
})(); 

//  1000 def brings back bigger bids in Uk
var timeoutMap = {
		   0 : 1100,
		   1 : 1100,
		   2 : 1100,
		   3 : 1100,
		   4 : 1100,
		   5 : 1100,
		   6 : 800,
		   7 : 800,
		   8 : 1000,
		   9 : 1000,
		  10 : 1000,
		  11 : 950,
		  12 : 950,
		  13 : 950,
		  14 : 950,
		  15 : 950,
		  16 : 950,
		  17 : 1000,
		  18 : 1000,
		  19 : 1000,
		  20 : 1000,
		  21 : 1000,
		  22 : 1100,
		  23 : 1100
		};

		var t = new Date().getUTCHours();

		PREBID_TIMEOUT = timeoutMap[t];
               
          //ASSERTIVE ANALYTICS SETTINGS - Version: 1.4.0
            var assertive_entityId = 'FHkAkgiDWrXm4dZFw';
            var assertive_debug = 0; // append the query string 'assertiveYield=debug' or add this local storage entry 'localStorage.setItem("assertiveYield", "debug")' to enable dynamically
            var assertive_sampleRate = 1; // 1 = 100%, 0.2 = 20%...

            var assertive_timeout = null;
            var assertive_layout = null;
            var assertive_userState = null;

            // example of supplying a custom var from a prev. defined var
            assertive_timeout = PREBID_TIMEOUT;

            // example of reading data from website and supplying as custom var
            var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a);};
            DOMReady(function () {
                try {
                    var innerHTML = document.querySelector('body > div.navbar ul.nav > li:last-child > a').innerHTML;
                    if ( innerHTML === "Logout" ) {
                        assertive_userState = 'Anonymous';
                    } else if ( innerHTML === "Register" ) {
                        assertive_userState = 'LoggedIn';
                    }
                } catch(e) {
                    console.log(e);
                }
            });

            var adUnits = [
            	//new ad unit block
            	{
            	 code: 'inreedvidSlot',
            	 mediaTypes: {
            		 banner: { sizes: [[970, 250], [728, 90], [300, 250], [320, 50]] }, 
            	     video:  { context: 'outstream', playerSize: [640, 480], mimes: ["video/x-flv", "video/mp4", "application/x-shockwave-flash", "application/javascript"] },
            	},
            	bids: [
            	 { bidder: 'teads',      params: { placementId: '75853', pageId: '87372' } },
            	 { bidder: 'appnexus',   params: { placementId: '11971351',  video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* one placementId for all sizes */
            	 // { bidder: 'appnexus',   params: { placementId: '13232392',  video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* demo video placement, always returns a vid, only works client side */
            	 // { bidder: 'districtm',  params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */ 
            	 { bidder: 'districtm',  params: { placementId: 11937611, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } },
            	 { bidder: 'aol',        params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
            	 // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */   
            	 { bidder: 'conversant', params: { site_id: '118233' } },  /* 300x250 */ 
            	 { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
            	 // { bidder: 'sovrn',      params: { tagId: '575683' } }, /* 300x250 */
            	 { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
            	 // { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
            	 { bidder: 'rhythmone',  params: { placementId: '76184' } }, /* one placementId for all sizes */
            	 // { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
            	 // { bidder: "yieldmo",    params: { placementId: "1990667709809591856" } } /* no adapter in file */
            	 { bidder: 'gumgum',     params: { inSlot: '14600' } }, /*gumgum-300x250*/
            	 // { bidder: 'undertone',  params: { publisherId: '3660' } }
            	 // { bidder: 'unruly',     params: { targetingUUID: '6f15e139-5f18-49a1-b52f-87e5e69ee65e', siteId: 1081534 } },
            	 { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87709' } }, /* 300x250 */ 
            	 { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} } /*300x250*/
            	] //./bids
            	},
            	//new ad unit block
            	{
            	 code: 'inreedvid1Slot',
            	 mediaTypes: {
            		 banner: { sizes: [[728, 90], [300, 250], [320, 50]] },
            		 video:  { context: 'outstream', mimes: ["video/x-flv", "video/mp4", "application/x-shockwave-flash", "application/javascript"], protocols: [1, 2, 3, 4, 5, 6, 7, 8], playbackmethod: [2], playerSize: [640, 480] }, 
            	},
            	bids: [
            	 { bidder: 'teads',      params: { placementId: '95333', pageId: '87372' } },
            	 { bidder: 'appnexus',   params: { placementId: '11971351',  video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* one placementId for all sizes */
            	 { bidder: 'districtm',  params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */  
            	 { bidder: 'aol',        params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
            	 // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */ 
            	 { bidder: 'conversant', params: { site_id: '118233' } },  /* 300x250 */ 
            	 { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
            	 // { bidder: 'sovrn',      params: { tagId: '575683' } }, /* 300x250 */
            	 { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
            	 // { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
            	 // { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
            	 { bidder: 'gumgum',     params: { inSlot: '14600' } } /*gumgum-300x250*/
            	] //./bids
            	},
            	//new ad unit block
            	{
            	 code: 'inreedvid2Slot',
            	 mediaTypes: {
            	     banner: { sizes: [[728, 90], [300, 250], [320, 50]] },
            	     
            	},
            	bids: [
            	 { bidder: 'teads',      params: { placementId: '95334', pageId: '87372' } },
            	 { bidder: 'appnexus',   params: { placementId: '11971351' } }, /* one placementId for all sizes */
            	 { bidder: 'districtm',  params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */ 
            	 { bidder: 'aol',        params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */
            	 // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */ 
            	 { bidder: 'conversant', params: { site_id: '118233' } },  /* 300x250 */ 
            	 { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
            	 // { bidder: 'sovrn',      params: { tagId: '575683' } }, /* 300x250 */
            	 { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
            	 // { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
            	 // { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
            	 { bidder: 'gumgum',     params: { inSlot: '14600' } } /*gumgum-300x250*/
            	] //./bids
            	},
            	//new ad unit block
            	{
            	 code: 'inreedvid3Slot',
            	 mediaTypes: {
            		 banner: { sizes: [[728, 90], [300, 250], [320, 50]] }, 
            	},
            	bids: [
            	 { bidder: 'teads',      params: { placementId: '95335', pageId: '87372' } },
            	 { bidder: 'appnexus',   params: { placementId: '11971351' } }, /* one placementId for all sizes */
            	 { bidder: 'districtm',  params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */ 
            	 { bidder: 'aol',        params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
            	 // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */  
            	 { bidder: 'conversant', params: { site_id: '118233' } },  /* 300x250 */ 
            	 { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
            	 // { bidder: 'sovrn',      params: { tagId: '575683' } }, /* 300x250 */
            	 { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
            	 // { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
            	 // { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
            	 { bidder: 'gumgum',     params: { inSlot: '14600' } } /*gumgum-300x250*/
            	] //./bids
            	}
           ];
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
                
                pbjs.aliasBidder('appnexus','brealtime');  // alias for bidder	
                pbjs.aliasBidder('appnexus','springserveAlias2'); // alias for bidder	
                pbjs.aliasBidder('appnexus','districtm'); // alias for bidder	

                pbjs.bidderSettings = { 
                	        aol:               { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.85; } }, // adjust the bid in real time before the auction takes place
                	        districtm:         { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.90; } }, // adjust the bid in real time before the auction takes place
                	        sekindonUM:        { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.75; } }, // adjust the bid in real time before the auction takes place
                	        brealtime:         { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.80; } }, // adjust the bid in real time before the auction takes place
                	        springserveAlias2: { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.65; } }, // adjust the bid in real time before the auction takes place
                	        teads:             { bidCpmAdjustment : function(bidCpm){ return bidCpm * 1.00; } }, // adjust the bid in real time before the auction takes place
                	        unruly:            { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.20; } }, // adjust the bid in real time before the auction takes place
                	        appnexus:          { bidCpmAdjustment : function(bidCpm){ return bidCpm * 1.00; } }, // adjust the bid in real time before the auction takes place
                	       };	
                	
                pbjs.setConfig({
                	  priceGranularity: customConfigObject,
                	  consentManagement: {
                    cmpApi: 'iab',
                    timeout: 5000,
                    allowAuctionWithoutConsent: true
                  },
                 // cache: {url: "//prebid.adnxs.com/pbc/v1/cache"},
                 s2sConfig: {
                     accountId: 'e31f627f-53a3-4288-9979-482d3c6ffc76',
                     enabled: true,
                     bidders: ['somoaudience', 'conversant', 'pulsepoint'],
                     timeout: 800,
                     adapter: 'prebidServer',
                     endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
                     syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
                     cookieSet: true,
                     cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
                  },
                  userSync: {
                      iframeEnabled: true,
                      syncsPerBidder: 50, // and no more than 3 syncs at a time
                      syncDelay: 6000, // 5 seconds after the auction
                  },
                debug: true,
                enableSendAllBids: false, // Default will be `true` as of 1.0
                bidderSequence: 'random', // Default is random
                	  publisherDomain: 'golfwrx.com',
                	  bidderTimeout: 3500,
                	  pubcid: {expInterval: 525600},
                	   currency: {
                	       'adServerCurrency': "GBP",
                	       'granularityMultiplier': 1,
                	       'conversionRateFile': 'https://currency.prebid.org/latest.json',
                	    },
                	 sizeConfig: [{
                mediaQuery: '(min-width: 769px)',
                sizesSupported: [[970, 250], [970, 90], [728, 90], [640, 480], [640, 390], [550, 310], [468, 60], [320, 50], [300, 600], [300, 250], [160, 600], [120, 600], [1, 1]],
                labels: ['desktop']
                }, {
                mediaQuery: '(min-width: 500px) and (max-width: 768px)',
                sizesSupported: [[728, 90], [640, 480], [468, 60], [320, 50], [300, 250], [1, 1]],
                labels: ['tablet']
                }, {
                mediaQuery: '(min-width: 1px) and (max-width: 499px)',
                sizesSupported: [[640, 480], [300, 250], [320, 50], [1, 1]],
                labels: ['phone']
                }]
                });
                
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
// have to add 1 on to the child (number) because the div counts as 1 in the string
$(document).ready(function(){
   $('<div class="ad-reporter-ahytrfg35423"><div class="advertisement">Advertisement</div><div id="inreedvidSlot"></div></div><br>').insertAfter('#mvp-content-main p:nth-child(1)');
   $('<div class="ad-reporter-ahytrfg35423"><div class="advertisement">Advertisement</div><div id="inreedvid1Slot"></div></div><br>').insertAfter('#mvp-content-main p:nth-child(8)');
   $('<div class="ad-reporter-ahytrfg35423"><div class="advertisement">Advertisement</div><div id="inreedvid2Slot"></div></div><br>').insertAfter('#mvp-content-main p:nth-child(12)');
   $('<div class="ad-reporter-ahytrfg35423"><div class="advertisement">Advertisement</div><div id="inreedvid3Slot"></div></div><br>').insertAfter('#mvp-content-main p:nth-child(18)');                     
// The calls to construct slots and display contents. div-1 is on screen,
// div-2 is 3 viewports down, div-3 is 12 viewports down.
googletag.cmd.push(function() {
    	  inreedvidSlot = googletag.defineSlot('/1001824/Golfwrx.com-HB/Golfwrx.com-HB-Vid-test',  [[300, 250],[728,90],[1,1],[970,250], [640, 480]], 'inreedvidSlot').addService(googletag.pubads());
    	  inreedvid1Slot = googletag.defineSlot('/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test1', [[300, 250],[728,90],[1,1]], 'inreedvid1Slot').addService(googletag.pubads());
    	  inreedvid2Slot = googletag.defineSlot('/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test2', [[300, 250],[728,90],[1,1]], 'inreedvid2Slot').addService(googletag.pubads());
    	  inreedvid3Slot = googletag.defineSlot('/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test3', [[300, 250],[728,90],[1,1]], 'inreedvid3Slot').addService(googletag.pubads()); 
googletag.pubads().enableLazyLoad({
    	fetchMarginPercent: 55,  // Fetch slots within 30 viewports.
    	renderMarginPercent: 30,  // Render slots within 5000 viewports.
    	mobileScaling: 1.0  // Double the above values on mobile.
});
googletag.pubads().enableSingleRequest();
googletag.pubads().collapseEmptyDivs(true, true);
googletag.pubads().setCentering(true);
googletag.pubads().enableVideoAds();
// googletag.pubads().enableAsyncRendering();
// googletag.pubads().disableInitialLoad();
googletag.enableServices();
// As defined by lazy load settings, initially Slot 1 will be fetched and
// rendered on mobile and desktop. Slot 2 will be fetched, on mobile and
// desktop, but will not be rendered on desktop. Slot 3 will not be fetched
// or rendered on mobile and desktop.
googletag.display('inreedvidSlot');
googletag.display('inreedvid1Slot');
googletag.display('inreedvid2Slot');
googletag.display('inreedvid3Slot');
});
});

// ASSERTIVE ANALYTICS - Version: 1.5.1
   var assertiveVersion="1.5",analyticsURL="https://api.assertcom.de",prefix="assertive_analytics_",sessionTimeoutLength=18e5,sessionUUIDKey=prefix.concat("sessionUUID"),sessionTimeoutKey=prefix.concat("sessionStart"),sessionRandomKey=prefix.concat("sessionRandom"),sessionUTMKey=prefix.concat("sessionUTM"),sessionReferrerKey=prefix.concat("sessionReferrer"),pageViewUUID=generateUUID(),impressionUUIDs=[],_assertive_analytics_data=[],assertive_debug=assertive_debug||localStorage.getItem("assertiveYield")&&-1!==localStorage.getItem("assertiveYield").indexOf("debug")||-1!==getQueryStringValue("assertiveYield").indexOf("debug");function updateSession(){if(!localStorage.getItem(sessionTimeoutKey)||Date.now()>localStorage.getItem(sessionTimeoutKey)){localStorage.setItem(sessionUUIDKey,generateUUID()),localStorage.setItem(sessionRandomKey,Math.random()),document.referrer?localStorage.setItem(sessionReferrerKey,document.referrer):localStorage.removeItem(sessionReferrerKey);var e=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],t={};for(i in e){var s=e[i],o=getQueryStringValue(s);""!==o&&(t[s]=o)}var n=JSON.stringify(t);n!==JSON.stringify({})?localStorage.setItem(sessionUTMKey,n):localStorage.removeItem(sessionUTMKey)}localStorage.setItem(sessionTimeoutKey,Date.now()+sessionTimeoutLength)}function generateUUID(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,generateUUID)}function getQueryStringValue(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function debugLog(e){assertive_debug&&console.log(e)}if(Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),s=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],o=0;o<s;){var n=t[o];if(e.call(i,n,o,t))return n;o++}},configurable:!0,writable:!0}),updateSession(),-1!==getQueryStringValue("assertiveYield").indexOf("check")&&alert("Assertive Yield: Check"),"undefined"==typeof assertive_sampleRate||assertive_sampleRate&&localStorage.getItem(sessionRandomKey)<assertive_sampleRate){var hoveredAdSlot=null;window.addEventListener("blur",function(){if(hoveredAdSlot){var e=new XMLHttpRequest,t=analyticsURL+"?event=click&entityId="+assertive_entityId+"&impressionUUID="+impressionUUIDs[hoveredAdSlot];e.open("GET",t,!0),e.send()}}),googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(e){var t=e.slot,s=t.getTargeting("hb_adid")[0],i=t.getSlotElementId();if(document.getElementById(i)){var o=document.getElementById(i).getElementsByTagName("iframe")[0];o.addEventListener("mouseover",function(){hoveredAdSlot=i}),o.addEventListener("touchstart",function(){hoveredAdSlot=i}),o.addEventListener("mouseout",function(){hoveredAdSlot=null}),o.addEventListener("touchend",function(){hoveredAdSlot=null});var n=pbjs.getBidResponsesForAdUnitCode(i).bids.find(function(e){return e.adId===s}),r=pbjs.getAllWinningBids().some(function(e){return e.adId===s});impressionUUIDs[i]=generateUUID(),debugLog("Session UUID: "+localStorage.getItem(sessionUUIDKey)+", PageView UUID: "+pageViewUUID+", Impression UUID: "+impressionUUIDs[i]),debugLog("Slot Id: "+i),n&&debugLog(" - Highest PreBid "+n.cpm+" from "+n.bidderCode+" with id "+s),n||debugLog(" - No PreBids!!!"),debugLog(" - Winner: "+(r?"prebid":"adsense")+" with size "+(r?n.width:e.size[0])+"x"+(r?n.height:e.size[1])),debugLog("---------------");var a={version:assertiveVersion,entityId:assertive_entityId,siteUUID:"undefined"!=typeof assertive_siteUUID?assertive_siteUUID:null,sessionUUID:localStorage.getItem(sessionUUIDKey),pageViewUUID:pageViewUUID,impressionUUID:impressionUUIDs[i],slotId:i,highestPreBid:n?n.cpm:0,highestPreBid_partner:n?n.bidderCode:"",creative_width:r?n.width:e.size[0],creative_height:r?n.height:e.size[1],preBidWon:r,timeToRespond:n?n.timeToRespond:null,protocol:window.location.protocol,host:window.location.host,pathname:window.location.pathname,pathname_split:window.location.pathname.split("/").filter(function(e){return e}),referrer:localStorage.getItem(sessionReferrerKey),utm:localStorage.getItem(sessionUTMKey),prebid_timeout:assertive_timeout,userState:assertive_userState,layout:assertive_layout};_assertive_analytics_data.push(a);var d=new XMLHttpRequest;d.open("POST",analyticsURL,!0),d.setRequestHeader("Content-Type","text/plain"),d.send(JSON.stringify(a)),debugLog("SENT!!!")}}),googletag.pubads().addEventListener("impressionViewable",function(e){var t=e.slot.getSlotElementId(),s=new XMLHttpRequest,i=analyticsURL+"?event=activeView&entityId="+assertive_entityId+"&impressionUUID="+impressionUUIDs[t];s.open("GET",i,!0),s.send()})})}