var site_config = {
    refresh_rate: 40000,  //denoted in milliseonds 40secs=40000...
    FAILSAFE_TIMEOUT: 5000,   //denoted in milliseonds 5secs=5000...
    leaderboard_sizes_mobile: [[320, 50],[234,60]]
  }; //./site_config
// unruly player config //
window.top.unruly = window.top.unruly || {}
window.top.unruly.native = window.top.unruly.native || {}
window.top.unruly.native.onAdLoaded = () => {window.top.document.querySelector('.unruly_ia_disclosure_text').style['background-color'] = '#C7897B'}
//have to add 1 on to the child (number) because the div counts as 1 in the string 
window.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#mvp-content-main p:nth-child(2)').insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvidSlot"></div></div><br>');
    document.querySelector('#mvp-content-main p:nth-child(6)').insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid1Slot"></div></div><br>');
    document.querySelector('#mvp-content-main p:nth-child(10)').insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid2Slot"></div></div><br>');
    document.querySelector('#mvp-content-main p:nth-child(14)').insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid3Slot"></div></div><br>');
});

//load up google gpt.js
(function () {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  var useSSL = 'https:' == document.location.protocol;
  gads.src = (useSSL ? 'https:' : 'http:') +
          '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('footerbid')[0];
  node.parentNode.insertBefore(gads, node);
})(); 

//load up prebid.js,  I think we need to load this earlier
(function() {
    var pbjsEl = document.createElement("script");
    pbjsEl.type = "text/javascript";
    pbjsEl.async = true;
    pbjsEl.src = "//adops.adysis.com/prebid2.7.0.js";
    var pbjsTargetEl = document.getElementsByTagName("footerbid")[0];
    pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
})();



//  1000 def brings back bigger bids in Uk
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
		   9 : 1400,
		  10 : 1400,
		  11 : 2500,
		  12 : 2500,
		  13 : 2000,
		  14 : 1300,
		  15 : 1800,
		  16 : 1800,
		  17 : 1500,
		  18 : 1500,
		  19 : 1500,
		  20 : 1400,
		  21 : 1400,
		  22 : 1400,
		  23 : 1400
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

          

            var adUnits = [
            	//new ad unit block
            	{
            	 code: 'inreedvidSlot',
            	 mediaTypes: {
            		 banner: { sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] }, 
            	     video:  { context: 'outstream', playerSize: [550, 310], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', "video/webm"], playbackmethod: [2] },
            	},
            	bids: [
            	 { bidder: 'teads',      params: { placementId: '75853', pageId: '87372' } },
            	 { bidder: 'appnexus',   params: { placementId: '11971351', allowSmallerSizes: true, usePaymentRule: true } }, /* one placementId for all sizes */
            	 // { bidder: 'appnexus',   params: { placementId: '13232392', video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* demo video placement, always returns a vid, only works client side, pretty sure having this on lifts Teads to bidding higher */
            	 // { bidder: 'districtm',  params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */ 
            	 { bidder: 'districtm',  params: { placementId: 11937611, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } },
            	 { bidder: 'districtmDMX',  params: { dmxid: 171413, memberid: 100041  } }, /* 300x600 - 300x250 - 160x600 */ 
            	 { bidder: 'aol',        params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
            	 // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */   
            	 { bidder: 'conversant', params: { site_id: '118233' } },  /* 300x250 */ 
            	 { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
            	 { bidder: 'sovrn',      params: { tagid: '575683' } }, /* 300x250 */
            	 { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
            	 { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
            	 { bidder: 'rhythmone',  params: { placementId: '76184' } }, /* one placementId for all sizes */
            	 { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/	
            	 { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
            	 { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
            	 // { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87709' } }, /* 300x250 */ 
            	 { bidder: 'atomx',        params: { id: '5136354'} }, /* does all sizes, not working at moment */
            	 // { bidder: "yieldmo",    params: { placementId: "1990667709809591856" } }, /* no adapter in file */
            	 { bidder: 'gumgum',     params: { inSlot: '14600' } }, /*gumgum-300x250*/
            	 { bidder: 'undertone',  params: { publisherId: '3660' } },
            	 { bidder: 'unruly',     params: { targetingUUID: '23984444', siteId: 15145, featureOverrides: { canRunUnmissable: true } } },
            	 { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
            	 { bidder: 'viewdeos',      labelAny: ['desktop', 'tablet', 'phone'], params: { supplyPartnerId: 1985} } /* oustream  */
            	 // { bidder: 'vi',         params: { pubId: '535034733735961', lang: 'en-US', cat: 'IAB17', bidFloor: 0.01 } }
            	 // { bidder: 'onefiftytwomedia', params: { aid: 331133 } }
            	] //./bids
            	},
            	//new ad unit block
            	{
            	 code: 'inreedvid1Slot',
            	 mediaTypes: {
            		 banner: { sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
            		 video:  { context: 'outstream', playerSize: [550, 310], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', "video/webm"], playbackmethod: [2] }, 
            	},
            	bids: [
            	 { bidder: 'teads',      params: { placementId: '75853', pageId: '87372' } },
            	 { bidder: 'appnexus',   params: { placementId: '11971351' } }, /* one placementId for all sizes */
            	 // { bidder: 'appnexus',   params: { placementId: '13232392', video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* demo video placement, always returns a vid, only works client side, pretty sure having this on lifts Teads to bidding higher */
            	 { bidder: 'districtm',  params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */ 
            	 { bidder: 'districtmDMX',  params: { dmxid: 171413, memberid: 100041  } }, /* 300x600 - 300x250 - 160x600 */
            	 { bidder: 'aol',        params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
            	 // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */ 
            	 // { bidder: 'conversant', params: { site_id: '118233' } },  /* 300x250 */ 
            	 { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
            	 { bidder: 'sovrn',      params: { tagid: '575683' } }, /* 300x250 */
            	 { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
            	 { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
            	 { bidder: 'rhythmone',  params: { placementId: '76184' } }, /* one placementId for all sizes */
            	 { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/	
            	 { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
            	 { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
            	 { bidder: 'atomx',        params: { id: '5136438'} }, /* 300x250A */
            	 { bidder: 'gumgum',     params: { inSlot: '14600' } }, /*gumgum-300x250*/
            	 { bidder: 'undertone',  params: { publisherId: '3660' } },
            	 { bidder: 'unruly',     params: { targetingUUID: '23984444', siteId: 15145, featureOverrides: { canRunUnmissable: true } } },
            	 { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
            	 { bidder: 'viewdeos',      labelAny: ['desktop', 'tablet', 'phone'], params: { supplyPartnerId: 1985} } /* oustream  */
            	 // { bidder: 'vi',         params: { pubId: '272766657673392', lang: 'en-US', cat: 'IAB17', bidFloor: 0.01 } }
            	] //./bids
            	},
            	//new ad unit block
            	{
            	 code: 'inreedvid2Slot',
            	 mediaTypes: {
            	     banner: { sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
            	     video:  { context: 'outstream', playerSize: [550, 310], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', "video/webm"], playbackmethod: [2] },
            	},
            	bids: [
            	 { bidder: 'teads',      params: { placementId: '75853', pageId: '87372' } },
            	 { bidder: 'appnexus',   params: { placementId: '11971351' } }, /* one placementId for all sizes */
            	 { bidder: 'districtm',  params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */ 
            	 { bidder: 'districtmDMX',  params: { dmxid: 171413, memberid: 100041  } }, /* 300x600 - 300x250 - 160x600 */
            	 { bidder: 'aol',        params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */
            	 // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */ 
            	 // { bidder: 'conversant', params: { site_id: '118233' } },  /* 300x250 */ 
            	 { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
            	 { bidder: 'sovrn',      params: { tagid: '575683' } }, /* 300x250 */
            	 { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
            	 { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
            	 { bidder: 'rhythmone',  params: { placementId: '76184' } }, /* one placementId for all sizes */
            	 { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/	
            	 { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
            	 { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
            	 { bidder: 'atomx',        params: { id: '5136439'} }, /* 300x250B */
            	 { bidder: 'gumgum',     params: { inSlot: '14600' } }, /*gumgum-300x250*/
            	 { bidder: 'undertone',  params: { publisherId: '3660' } },
            	 { bidder: 'unruly',     params: { targetingUUID: '23984444', siteId: 15145, featureOverrides: { canRunUnmissable: true } } },
            	 { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
            	 { bidder: 'viewdeos',      labelAny: ['desktop', 'tablet', 'phone'], params: { supplyPartnerId: 1985} } /* oustream  */
            	 // { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87709' } }, /* 300x250 */ 
            	 // { bidder: 'vi',         params: { pubId: '272766657673392', lang: 'en-US', cat: 'IAB17', bidFloor: 0.01 } }
            	] //./bids
            	},
            	//new ad unit block
            	{
            	 code: 'inreedvid3Slot',
            	 mediaTypes: {
            		 banner: { sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] }, 
            		 video:  { context: 'outstream', playerSize: [550, 310], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', "video/webm"], playbackmethod: [2] },
            	},
            	bids: [
            	 { bidder: 'teads',      params: { placementId: '75853', pageId: '87372' } },
            	 { bidder: 'appnexus',   params: { placementId: '11971351' } }, /* one placementId for all sizes */
            	 { bidder: 'districtm',  params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */ 
            	 { bidder: 'districtmDMX',  params: { dmxid: 171413, memberid: 100041  } }, /* 300x600 - 300x250 - 160x600 */
            	 { bidder: 'aol',        params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
            	 // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */  
            	 // { bidder: 'conversant', params: { site_id: '118233' } },  /* 300x250 */ 
            	 { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
            	 { bidder: 'sovrn',      params: { tagid: '575683' } }, /* 300x250 */
            	 { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
            	 { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
            	 { bidder: 'rhythmone',  params: { placementId: '76184' } }, /* one placementId for all sizes */
            	 { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/	
            	 { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
            	 { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
            	 { bidder: 'atomx',        params: { id: '5136440'} }, /* 300x250C */
            	 { bidder: 'gumgum',     params: { inSlot: '14600' } }, /*gumgum-300x250*/
            	 { bidder: 'undertone',  params: { publisherId: '3660' } },
            	 { bidder: 'unruly',     params: { targetingUUID: '23984444', siteId: 15145, featureOverrides: { canRunUnmissable: true } } },
            	 { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
            	 { bidder: 'viewdeos',      labelAny: ['desktop', 'tablet', 'phone'], params: { supplyPartnerId: 1985} } /* oustream  */
            	 // { bidder: 'vi',         params: { pubId: '272766657673392', lang: 'en-US', cat: 'IAB17', bidFloor: 0.01 } }
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
                pbjs.aliasBidder('gamoshi','viewdeos'); // alias for bidder	

                pbjs.bidderSettings = { 
                	        aol:               { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.85; } }, // adjust the bid in real time before the auction takes place
                	        districtm:         { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.88; } }, // adjust the bid in real time before the auction takes place
                	        districtmDMX:      { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.90; } }, // adjust the bid in real time before the auction takes place
                	        sekindonUM:        { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.75; } }, // adjust the bid in real time before the auction takes place
                	        // brealtime:         { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.80; } }, // adjust the bid in real time before the auction takes place
                	        // springserveAlias2: { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.65; } }, // adjust the bid in real time before the auction takes place
                	        teads:             { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.94; } }, // adjust the bid in real time before the auction takes place
                	        unruly:            { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.95; } }, // adjust the bid in real time before the auction takes place
                	        viewdeos:          { bidCpmAdjustment : function(bidCpm){ return bidCpm * 1.00; } }, // adjust the bid in real time before the auction takes place
                	        sovrn:             { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.95; } }, // adjust the bid in real time before the auction takes place
                	        // appnexus:       { bidCpmAdjustment : function(bidCpm){ return bidCpm * 1.00; } }, // adjust the bid in real time before the auction takes place
                	       };	
                	
                pbjs.setConfig({
                	  priceGranularity: customConfigObject,
                	  consentManagement: {
                    cmpApi: 'iab',
                    timeout: 5000,
                    allowAuctionWithoutConsent: true
                  },
                 cache: {url: "//prebid.adnxs.com/pbc/v1/cache"},
                 s2sConfig: {
                     accountId: 'e31f627f-53a3-4288-9979-482d3c6ffc76',
                     enabled: true,
                     bidders: ['somoaudience', 'sovrn', 'conversant'],
                     timeout: 1000,
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
                      filterSettings: {  
                      iframe: { bidders: ['pulsepoint'], filter: 'exclude' },
                      image:  { bidders: '*', filter: 'include' } 
                      },
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
                	       'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json',
                	    },
                	 sizeConfig: [{
                mediaQuery: '(min-width: 769px)',
                sizesSupported: [[728, 90], [550, 310], [468, 60], [320, 50], [300, 250], [250, 250], [1, 1]],
                labels: ['desktop']
                }, {
                mediaQuery: '(min-width: 500px) and (max-width: 768px)',
                sizesSupported: [[728, 90], [640, 480], [468, 60], [320, 50], [300, 250], [250, 250], [1, 1]],
                labels: ['tablet']
                }, {
                mediaQuery: '(min-width: 1px) and (max-width: 499px)',
                sizesSupported: [[640, 480], [300, 250], [250, 250], [320, 50], [1, 1]],
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
	          adUnitCodes: [slot.getSlotElementId()],
	          bidsBackHandler: function() {
	            pbjs.setTargetingForGPTAsync([slot.getSlotElementId()]);
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
	      console.log('created sizemapping ', + key + ' ' + sizeMappings[key]);
	    });
	    
	    googletag.pubads().enableSingleRequest();
	    googletag.pubads().collapseEmptyDivs(true, true);
	    googletag.pubads().setCentering(true);
	    // googletag.pubads().disableInitialLoad();
	    googletag.pubads().enableLazyLoad({
	    	fetchMarginPercent: 25,  // Fetch slots within 30 viewports.
	    	renderMarginPercent: 20,  // Render slots within 5000 viewports.
	    	mobileScaling: 0.1  // Double the above values on mobile.
	    });
	    googletag.enableServices();
	    googletag.pubads().addEventListener('impressionViewable', function (event) {
	      var elementId = event.slot.getSlotElementId();
	      var slotConfig = slots[elementId];
	      if (slotConfig) {
	        var handle = setTimeout(function () {
	          googletag.cmd.push(function () {
	            refreshSlot(event.slot);
	          });
	        }, config.definitons[elementId].timeout);
	        console.log('handle for time ', handle, ' elementId ', elementId, ' duration ', config.definitons[elementId].timeout);
	      }
	    });
	    Object.keys(config.definitons).forEach(function (key) {
	      var def = config.definitons[key];
	      var slot = googletag.defineSlot(def.adUnitPath, def.size, key);
	      slot.setTargeting('test', 'refresh');
	      // slot.setTargeting(event.slot);
	      slot.defineSizeMapping(sizeMappings[def.sizeMapping]);
	      slot.addService(googletag.pubads());
	      googletag.display(key);
	      slots[key] = { slot: slot };
	    });
	     // googletag.pubads().refresh();

	  })(window.googletag, window.pbjs, {
	    definitons: {
	      inreedvidSlot: {
	        adUnitPath: '/1001824/Golfwrx.com-HB/Golfwrx.com-HB-Vid-test',
	        size: 'mappinginreedvidslot',
	        sizeMapping: 'mappinginreedvidslot',
	        timeout: site_config.refresh_rate,
	      },
	      inreedvid1Slot: {
	        adUnitPath: '/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test1',
	        size: 'mappinginreedvidslot',
	        sizeMapping: 'mappinginreedvidslot',
	        timeout: site_config.refresh_rate,
	      },
	      inreedvid2Slot: {
	        adUnitPath: '/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test2',
	        size: 'mappinginreedvidslot',
	        sizeMapping: 'mappinginreedvidslot',
	        timeout: site_config.refresh_rate,
	      },
	      inreedvid3Slot: {
	        adUnitPath: '/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test3',
	        size: 'mappinginreedvidslot',
	        sizeMapping: 'mappinginreedvidslot',
	        timeout: site_config.refresh_rate,
	      },
	    },
	    sizeMappings: {
	      mappinginreedvidslot: [
	        [[1024, 768],[[300,250],[250,250],[728,90],[468,60],[320,50],[1,1],[550,310]]],
	        [[768, 500],[[728,90],[300,250],[250,250],[468,60],[320,50],[1,1],[550,310],[640,480]]],
	        [[1, 1],[[300,250],[250,250],[320,50],[1,1]]],
	      ]
	    }
	  });
	});

//ASSERTIVE ANALYTICS - Version: 1.8.0
!function(){"use strict";var I="1.8",_="https://api.assertcom.de",e="assertive_analytics_",y=e.concat("sessionUUID"),s=e.concat("sessionStart"),a=e.concat("sessionRandom"),h=e.concat("sessionUTM"),b=e.concat("sessionReferrer"),w=E(),U=[],S=[],t=t||localStorage.getItem("assertiveYield")&&-1!==localStorage.getItem("assertiveYield").indexOf("debug")||-1!==d("assertiveYield").indexOf("debug");function E(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,E)}function d(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function R(e){t&&console.log(e)}Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],r=0;r<n;){var o=t[r];if(e.call(i,o,r,t))return o;r++}},configurable:!0,writable:!0}),function(){if(!localStorage.getItem(s)||Date.now()>localStorage.getItem(s)){localStorage.setItem(y,E()),localStorage.setItem(a,Math.random()),document.referrer?localStorage.setItem(b,document.referrer):localStorage.removeItem(b);var e=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],t={};for(var n in e){var i=e[n],r=d(i);""!==r&&(t[i]=r)}var o=JSON.stringify(t);o!==JSON.stringify({})?localStorage.setItem(h,o):localStorage.removeItem(h)}localStorage.setItem(s,Date.now()+18e5)}(),-1!==d("assertiveYield").indexOf("check")&&alert("Assertive Yield: Check"),("undefined"==typeof assertive_sampleRate||assertive_sampleRate&&localStorage.getItem(a)<assertive_sampleRate)&&function e(){if(n)return;if("undefined"==typeof googletag||!googletag.pubadsReady)return void setTimeout(e,20);n=!0;var v=null;window.addEventListener("blur",function(){if(v){var e=new XMLHttpRequest,t=_+"?event=click&entityId="+assertive_entityId+"&impressionUUID="+U[v];e.open("GET",t,!0),e.send()}});googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(e){if(!e.isEmpty)if("undefined"!=typeof assertive_entityId){var t=e.slot,n=t.getSlotElementId(),i=t.getAdUnitPath(),r=document.getElementById(n),o=null;if(r){if(pbjs.adUnits.find(function(e){return e.code===n}))o=n;else{if(!pbjs.adUnits.find(function(e){return e.code===i}))return;o=i}var s=r.getElementsByTagName("iframe")[0];s.addEventListener("mouseover",function(){v=n}),s.addEventListener("touchstart",function(){v=n}),s.addEventListener("mouseout",function(){v=null}),s.addEventListener("touchend",function(){v=null});var a=t.getHtml(),d=/pbjs\.renderAd\(document, '(.*)'\)/g.exec(a),l=d?d[1]:t.getTargeting("hb_adid")[0],u=!!d,c=pbjs.getBidResponsesForAdUnitCode(o).bids.find(function(e){return e.adId===l});U[n]=E(),R("Session UUID: "+localStorage.getItem(y)+", PageView UUID: "+w+", Impression UUID: "+U[n]),R("Slot Id: "+n+", AdUnitPath: "+i),c&&R(" - Highest PreBid "+c.cpm+" from "+c.bidderCode+" with id "+l),c||R(" - No PreBids!!!"),R(" - Winner: "+(u?"prebid":"dfp (Direct/AdX/AdSense)")+" with size "+(u?c.width:e.size[0])+"x"+(u?c.height:e.size[1])),R("---------------");var m=null,p=null;c&&(c.appnexus?m=c.appnexus.buyerMemberId?c.appnexus.buyerMemberId:null:c.rubicon&&(m=c.rubicon.networkId?c.rubicon.networkId:null,p=c.rubicon.advertiserId?c.rubicon.advertiserId:null));var g={version:I,entityId:assertive_entityId,siteUUID:"undefined"!=typeof assertive_siteUUID?assertive_siteUUID:null,sessionUUID:localStorage.getItem(y),pageViewUUID:w,impressionUUID:U[n],slotId:n,adUnitPath:i,highestPreBid:c?c.cpm:0,highestPreBid_partner:c?c.bidderCode:"",buyerId:m,brandId:p,dealId:c&&c.dealId?c.dealId:null,creativeId:c&&c.creativeId?c.creativeId:null,mediaType:c&&c.mediaType?c.mediaType:null,currency:c&&c.currency?c.currency:null,netRevenue:c&&c.netRevenue?c.netRevenue:null,creative_width:u?c.width:e.size[0],creative_height:u?c.height:e.size[1],preBidWon:u,timeToRespond:c?c.timeToRespond:null,protocol:window.location.protocol,host:window.location.host,pathname:window.location.pathname,pathname_split:window.location.pathname.split("/").filter(function(e){return e}),referrer:localStorage.getItem(b),utm:localStorage.getItem(h),prebid_timeout:assertive_timeout||null,prebid_version:pbjs.version||null,userState:"undefined"!=typeof assertive_userState?assertive_userState:null,layout:"undefined"!=typeof assertive_layout?assertive_layout:null,custom_1:"undefined"!=typeof assertive_custom_1?assertive_custom_1:null,custom_2:"undefined"!=typeof assertive_custom_2?assertive_custom_2:null,custom_3:"undefined"!=typeof assertive_custom_3?assertive_custom_3:null,custom_4:"undefined"!=typeof assertive_custom_4?assertive_custom_4:null,custom_5:"undefined"!=typeof assertive_custom_5?assertive_custom_5:null,bps_type:t.getTargeting("ay_bid")[0]||null,bps_algo:t.getTargeting("ay_algo")[0]||null};S.push(g);var f=new XMLHttpRequest;f.open("POST",_,!0),f.setRequestHeader("Content-Type","text/plain"),f.send(JSON.stringify(g)),R("SENT!!!")}}else console.error("Assertive Yield: Entity ID is mandatory and not defined, exiting...")}),googletag.pubads().addEventListener("impressionViewable",function(e){var t=e.slot.getSlotElementId(),n=new XMLHttpRequest,i=_+"?event=activeView&entityId="+assertive_entityId+"&impressionUUID="+U[t];n.open("GET",i,!0),n.send()})})}();var n=!1}();
// end assertive analytics