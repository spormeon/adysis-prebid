//shows the slots on the page
window.addEventListener("DOMContentLoaded", function() {
 const ads = [
{ "selector": ".p-body-inner", "location": "afterbegin", "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid13Slot"></div></div><br>' },
{ "selector": ".p-sidebar-inner", "location": "afterbegin", "html": '<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid9Slot"></div></div><br>' },
{ "selector": "#advert1", "location": "beforeend", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid8Slot"></div></div>' },
{ "selector": ".block.block--category.block--category97.collapsible-nodes", "location": "beforebegin", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid8Slot"></div></div><br>' },

{ "selector": "#spacer2", "location": "beforebegin", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid5Slot"></div></div><br>' },
{ "selector": "#advert2", "location": "beforeend", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid8Slot"></div></div><br>' },
{ "selector": ".block.block--category.block--category168.collapsible-nodes", "location": "beforebegin", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid4Slot"></div></div><br>' },

{ "selector": "#advert3", "location": "afterend", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid4Slot"></div></div><br>' },
{ "selector": ".block.block--category.block--category2996.collapsible-nodes", "location": "beforebegin", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid7Slot"></div></div><br>' },

{ "selector": ".block.block--category.block--category8", "location": "afterend", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid4Slot"></div></div><br>' },
{ "selector": ".block-outer.block-outer--after", "location": "beforebegin", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid7Slot"></div></div><br>' },
{ "selector": ".p-breadcrumbs--parent.p-breadcrumbs--bottom", "location": "afterend", "html": '<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid10Slot"></div></div><br>' },
{ "selector": "#adfooter", "location": "afterbegin", "html": '<div class="ad-reporter-ahytrfg35423"><div id="inreedvid6Slot"></div></div>' }
];
  ads.forEach(ad => {
	adContainer = document.querySelector(ad.selector);
	if (adContainer) {
	  adContainer.insertAdjacentHTML(ad.location, ad.html);
   }
 });
});




//load up google gpt.js
(function () {
var gads = document.createElement("script");
gads.async = true;
gads.type = "text/javascript";
gads.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
var nodegads = document.getElementsByTagName("head")[0];
nodegads.insertBefore(gads, nodegads.firstChild);
})();

//load up google gpt.js
(function () {
var gads = document.createElement("script");
gads.async = true;
gads.type = "text/javascript";
gads.src = "https://cdn.adysis.com/pub000009/lib/prebid3.19.0-smokingmeatforums.js";
var nodegads = document.getElementsByTagName("head")[0];
nodegads.insertBefore(gads, nodegads.firstChild);
})();

//load up bidfilter.js,
window._BidFilter={site_id:1045,pbjsKey:'adyjs',checkAudio:false};
(function () {
var bidfilter = document.createElement("script");
bidfilter.async = true;
bidfilter.rel = "preload"
bidfilter.type = "text/javascript";
bidfilter.src = "https://cdn.bidfilter.com/bidfilter.js";
var nodebidfilter = document.getElementsByTagName("head")[0];
nodebidfilter.insertBefore(bidfilter, nodebidfilter.fourthChild);
})();

//TIMEOUT MAP - 1000 def brings back bigger bids in Uk
var timeoutMap = {
0 : 2000,
1 : 2000,
2 : 2000,
3 : 1600,
4 : 1600,
5 : 1600,
6 : 1400,
7 : 1400,
8 : 1400,
9 : 1400,
10 : 1400,
11 : 1400,
12 : 1600,
13 : 1600,
14 : 1600,
15 : 1600,
16 : 1600,
17 : 1600,
18 : 1600,
19 : 1600,
20 : 1600,
21 : 1600,
22 : 1600,
23 : 2000
};
var t = new Date().getUTCHours();
PREBID_TIMEOUT = timeoutMap[t];
console.log("prebid timeout:", PREBID_TIMEOUT );

//FLOOR_PRICE MAP - 1000 def brings back bigger bids in Uk
var floorpriceMap = {
0 : 0.00,
1 : 0.00,
2 : 0.00,
3 : 0.00,
4 : 0.00,
5 : 0.00,
6 : 0.00,
7 : 0.00,
8 : 0.00,
9 : 0.00,
10 : 0.00,
11 : 0.00,
12 : 0.00,
13 : 0.00,
14 : 0.00,
15 : 0.00,
16 : 0.00,
17 : 0.00,
18 : 0.00,
19 : 0.00,
20 : 0.00,
21 : 0.00,
22 : 0.00,
23 : 0.00
};
var f = new Date().getUTCHours();
FLOOR_PRICE = floorpriceMap[f];
console.log("floor price:", FLOOR_PRICE );

var site_config = {
		refresh_rate: 30000,         // denoted in milliseonds 40secs=40000...
		FAILSAFE_TIMEOUT: PREBID_TIMEOUT*2,      // denoted in milliseonds 5secs=5000...
		LAZYLOAD_FETCH: 20,                      // Fetch slots within X viewports
		LAZYLOAD_RENDER: 15,                     // Render slots within X viewports.
		LAZYLOAD_MOBILE_SCALE: 1.3               // Scale the above values on mobile.
		};
		// site_config end
		console.log('Lazy Load Fetch = ' +site_config.LAZYLOAD_FETCH );
		console.log('Lazy Load Render = ' +site_config.LAZYLOAD_RENDER );
		console.log('Lazy Load Mobile Scale = ' +site_config.LAZYLOAD_MOBILE_SCALE );

		// amazon bidder
		!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
		apstag.init({
		   pubID: '853ec078-af51-43d8-938b-4b02c2a8c260',
		   adServer: 'googletag',
		   simplerGPT: true   
		 });


		var usebidcacheMap = {
				0 : false,			   
				1 : false,
				2 : false,
				3 : false,
				4 : false,
				5 : false,
				6 : false,
				7 : false,
				8 : false,
				9 : false,
				10 : false,
				11 : false,
				12 : false,
				13 : false,
				14 : false,
				15 : false,
				16 : false,
				17 : false,
				18 : false,
				19 : false,
				20 : false,
				21 : false,
				22 : false,
				23 : false
				};
				var u = new Date().getUTCHours();
				USERBIDCACHE = usebidcacheMap[u];
				console.log("user bid cache:", USERBIDCACHE );
				
				//CONSTANT BIDDER PRICE - SET PRICE FOR TIME OF DAY
				var constantbidderpriceMap = {
				0 : 0.20,
				1 : 0.21,
				2 : 0.22,
				3 : 0.23,
				4 : 0.24,
				5 : 0.25,
				6 : 0.06,
				7 : 0.07,
				8 : 0.08,
				9 : 0.10,
				10 : 0.01,
				11 : 0.01,
				12 : 0.02,
				13 : 0.03,
				14 : 0.04,
				15 : 0.05,
				16 : 0.06,
				17 : 0.07,
				18 : 2.49,
				19 : 0.09,
				20 : 0.01,
				21 : 0.01,
				22 : 0.02,
				23 : 0.03
				};
				var cbp = new Date().getUTCHours();
				CONSTANT_BIDDER_PRICE = constantbidderpriceMap[cbp];
				console.log("Constant Bidder price:", CONSTANT_BIDDER_PRICE );

				//CONSTANT BIDDER STATUS - SET STATUS TO ON OR OFF
				var constantbidderstatusMap = {
				0 : 0.20,
				1 : 0.21,
				2 : 0.22,
				3 : 0.23,
				4 : 0.24,
				5 : 0.25,
				6 : 0.06,
				7 : 0.07,
				8 : 0.08,
				9 : false,
				10 : false,
				11 : 0.01,
				12 : 0.02,
				13 : 0.03,
				14 : 0.04,
				15 : 0.05,
				16 : 0.06,
				17 : 0.07,
				18 : 2.49,
				19 : 0.09,
				20 : 0.01,
				21 : 0.01,
				22 : 0.02,
				23 : 0.03
				};
				var cbs = new Date().getUTCHours();
				CONSTANT_BIDDER_STATUS = constantbidderstatusMap[cbs];
				console.log("Constant Bidder Enabled:", CONSTANT_BIDDER_STATUS );


				CONSTANT_BIDDER_STATUS
				
				
				//ASSERTIVE ANALYTICS SETTINGS - Version: 1.4.0
				var assertive_entityId = "FHkAkgiDWrXm4dZFw";
				var assertive_debug = 0; // append the query string 'assertiveYield=debug' or add this local storage entry 'localStorage.setItem("assertiveYield", "debug")' to enable dynamically
				var assertive_sampleRate = 1; // 1 = 100%, 0.2 = 20%...
				var assertive_timeout = null;
				var assertive_layout = null;
				var assertive_userState = null;
				//var assertive_custom_1 = null;
				var assertive_custom_2 = null;
				var assertive_custom_3 = null;
				var assertive_custom_4 = null;
				var assertive_custom_5 = null;
				//example of supplying a custom var from a prev. defined var
				assertive_timeout = PREBID_TIMEOUT; 

				// NATIVE BIDDER LIST
				var native_bidders = {
				bids: [	
				{ bidder: 'appnexus', params: { placementId: '12995676', allowSmallerSizes: true } }, /* one placementId for all sizes */
				{ bidder: 'districtm', params: { placementId: '19221299', allowSmallerSizes: true } } /* one placementId for all sizes */
				] //./bids
				};
				
				//OUTSTREAM BIDDER LIST
				var outstream_bidders = {
				bids: [
				{ bidder: 'appnexus', params: { placementId: '12995676', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* one placementId for all sizes */
				{ bidder: 'districtm', params: { placementId: '19221299', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* one placementId for all sizes */
				{ bidder: 'conversant', params: { site_id: '117455', mimes: [ 'video/mp4', 'application/javascript' ], maxduration: 60 } }  /* 300x250 */ 
				] //./bids
				};

				// BANNER BIDDER LIST
				var banner_bidders = {
				bids: [
				{ bidder: 'appnexus', params: { placementId: '12995676', allowSmallerSizes: true } }, /* one placementId for all sizes */
				{ bidder: 'districtm', params: { placementId: '19221299', allowSmallerSizes: true } }, /* one placementId for all sizes */
				{ bidder: 'districtmDMX', params: { dmxid:'524026', memberid:'101399' } },
				{ bidder: 'conversant', params: { site_id:'117455', secure:1 } },
				{ bidder: 'sovrn', params: { tagid: '590714' } }, /* 728x90 */
				{ bidder: 'sovrn', params: { tagid: '590717' } }, /* 320x50 */
				//{ bidder: 'sovrn', params: { tagid: '725046' } }, /* 336x280 */
				{ bidder: 'sovrn', params: { tagid: '725044' } }, /* 970x90  */
				{ bidder: 'sovrn', params: { tagid: '725085' } }, /* 300x250 */
				//{ bidder: 'sovrn', params: { tagid: '725045' } }, /* 468x60 */
				//{ bidder: 'sovrn', params: { tagid: '725043' } }, /* 970x250 */
				{ bidder: 'openx', params: { unit: '540375630', delDomain: 'huddler-d.openx.net' } }, /* 728x90 970x90 970x250 */
				{ bidder: 'openx', params: { unit: '540375636', delDomain: 'huddler-d.openx.net' } }, /* 320x50 250x250 300x250 */
				{ bidder: 'sharethrough', params: { pkey: "esV9zAvAVRANpBbComRYEUWv", iframe: true } }, /* Sizeless */
				{ bidder: 'aol', params: { placement: '5219101', network: '11361.1' } }, /* 300x250 */ 
				{ bidder: 'aol', params: { placement: '5219096', network: '11361.1' } }, /* 250x250 */ 
				{ bidder: 'aol', params: { placement: '5219102', network: '11361.1' } }, /* 320x50 */ 
				{ bidder: 'aol', params: { placement: '5219094', network: '11361.1' } }, /* 336x280 */ 
				{ bidder: 'aol', params: { placement: '5219097', network: '11361.1' } }, /* 728x90 */ 
				{ bidder: 'aol', params: { placement: '5219095', network: '11361.1' } }, /* 970x90 */ 
				{ bidder: 'aol', params: { placement: '5219093', network: '11361.1' } } /* 468x60 */
				] //./bids
				};


				// BANNER BIDDER LIST
				var banner_bidders300x600 = {
				bids: [
				{ bidder: 'appnexus', params: { placementId: '12995676', allowSmallerSizes: true } }, /* one placementId for all sizes */
				{ bidder: 'districtm', params: { placementId: '19221299', allowSmallerSizes: true } }, /* one placementId for all sizes */
				{ bidder: 'districtmDMX', params: { dmxid:'524026', memberid:'101399' } },
				{ bidder: 'conversant', params: { site_id:'117455', secure:1 } },
				{ bidder: 'sovrn', params: { tagid: '590708' } }, /* 300x600 */
				{ bidder: 'sovrn', params: { tagid: '725085' } }, /* 300x250 */
				{ bidder: 'sovrn', params: { tagid: '725039' } }, /* 160x600 */
				{ bidder: 'sovrn', params: { tagid: '725040' } }, /* 120x600 */
				{ bidder: 'openx', params: { unit: '540375629', delDomain: 'huddler-d.openx.net' } }, /* 300x250 */
				{ bidder: 'openx', params: { unit: '540923378', delDomain: 'huddler-d.openx.net' } }, /* 160x600 300x600 */
				{ bidder: 'sharethrough', params: { pkey: "esV9zAvAVRANpBbComRYEUWv", iframe: true } }, /* Sizeless */
				{ bidder: 'aol', params: { placement: '5219101', network: '11361.1' } }, /* 300x250 */ 
				{ bidder: 'aol', params: { placement: '5219100', network: '11361.1' } }, /* 120x600 */ 
				{ bidder: 'aol', params: { placement: '5219098', network: '11361.1' } }, /* 160x600 */ 
				{ bidder: 'aol', params: { placement: '5219099', network: '11361.1' } } /* 300x600 */ 
				] //./bids
				};
				
				var adUnits = [
					//new ad unit block
					// /21665095471/specktra_threads_leaderboard_2
					{
					code: 'inreedvid4Slot',
					labelAny: ['desktop', 'tablet', 'phone'],
					mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
					bids: native_bidders.bids   
					},
					{
					code: 'inreedvid4Slot',
					labelAny: ['desktop', 'tablet', 'phone'],
					mediaTypes: { video:  { context: 'outstream', playerSize: [[580, 400]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
					renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
					renderer: { options: { adText: 'Advertisement' } },
					bids: outstream_bidders.bids
					},
					{
					code: 'inreedvid4Slot',
					labelAny: ['desktop', 'tablet', 'phone'],
					mediaTypes: { banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400]] } },
					bids: banner_bidders.bids
					},
					//new ad unit block
					// /21665095471/specktra_halfpage
					{
					code: 'inreedvid5Slot',
					labelAny: ['desktopmenu1', 'tablet', 'phone'],
					mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } }, 
					bids: native_bidders.bids
					},
					{
					code: 'inreedvid5Slot',
					labelAny: ['desktopmenu1', 'tablet', 'phone'],
					mediaTypes: { video:  { context: 'outstream', playerSize: [[300, 250]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
					renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
					renderer: { options: { adText: 'Advertisement' } },
					bids: outstream_bidders.bids
					},
					{
					code: 'inreedvid5Slot',
					labelAny: ['desktopmenu1', 'tablet', 'phone'],
					mediaTypes: { banner: { sizes: [[300, 600],[160, 600],[120, 600],[300, 250],[250, 250]] } },
					bids: banner_bidders300x600.bids
					},
					//new ad unit block
					// /21665095471/specktra_footer_2
					{
					code: 'inreedvid6Slot',
					labelAny: ['desktopfooter', 'tabletfooter', 'phonefooter'],
					mediaTypes: { banner: { sizes: [[970,90],[728,90],[468,60],[320,50]] } },
					bids: banner_bidders.bids
					},
					//new ad unit block
					// /21665095471/specktra_threads_leaderboard_4
					{
					code: 'inreedvid7Slot',
					labelAny: ['desktopbottom2', 'tabletbottom2', 'phonebottom2'],
					mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
					bids: native_bidders.bids
					},
					{
					code: 'inreedvid7Slot',
					labelAny: ['desktopbottom2', 'tabletbottom2', 'phonebottom2'],
					mediaTypes: { video:  { context: 'outstream', playerSize: [[580, 400]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
					renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
					renderer: { options: { adText: 'Advertisement' } },
					bids: outstream_bidders.bids
					},
					{
					code: 'inreedvid7Slot',
					labelAny: ['desktopbottom2', 'tabletbottom2', 'phonebottom2'],
					mediaTypes: { banner: { sizes: [[970, 250],[970, 90],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]] } },
					bids: banner_bidders.bids
					},
					//new ad unit block
					// /21665095471/specktra_threads_leaderboard_1
					{
					code: 'inreedvid8Slot',
					labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
					mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
					bids: native_bidders.bids
					},
					{
					code: 'inreedvid8Slot',
					labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
					mediaTypes: { video:  { context: 'outstream', playerSize: [[580, 400]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
					renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
					renderer: { options: { adText: 'Advertisement' } },
					bids: outstream_bidders.bids
					},
					{
					code: 'inreedvid8Slot',
					labelAny: ['desktopleader', 'tabletmenu', 'phonemenu'],
					mediaTypes: { banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400]] } },
					bids: banner_bidders.bids
					},
					//new ad unit block
					// /21665095471/specktra_mrec_1
					{
					code: 'inreedvid9Slot',
					labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
					mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
					bids: native_bidders.bids
					},
					{
					code: 'inreedvid9Slot',
					labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
					mediaTypes: { video:  { context: 'outstream', playerSize: [[300, 250]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
					renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
					renderer: { options: { adText: 'Advertisement' } },
					bids: outstream_bidders.bids
					},
					{
					code: 'inreedvid9Slot',
					labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
					mediaTypes: { banner: { sizes: [[300, 600],[160, 600],[120, 600],[300, 250],[250, 250]] } },
					bids: banner_bidders300x600.bids
					},
					//new ad unit block
					// /21665095471/specktra_footer_1
					{
					code: 'inreedvid10Slot',
					labelAny: ['desktopbottom2', 'tabletbottom2', 'phonebottom2'],
					mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } }, 
					bids: native_bidders.bids
					},
					{
					code: 'inreedvid10Slot',
					labelAny: ['desktopbottom2', 'tabletbottom2', 'phonebottom2'],
					mediaTypes: { video:  { context: 'outstream', playerSize: [[580, 400]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
					renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
					renderer: { options: { adText: 'Advertisement' } },
					bids: outstream_bidders.bids
					},
					{
					code: 'inreedvid10Slot',
					labelAny: ['desktopbottom2', 'tabletbottom2', 'phonebottom2'],
					mediaTypes: { banner: { sizes: [[970, 250],[970, 90],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]] } },
					bids: banner_bidders.bids
					},   	
					//new ad unit block
					// /21665095471/specktra_top_1
					{
					code: 'inreedvid13Slot',
					labelAny: ['desktopleader', 'tabletleader', 'phoneleader'],
					mediaTypes: { banner: { sizes: [[970, 90],[970, 250],[728, 90],[468, 60],[320, 50],[320, 100]] } },
					bids: banner_bidders.bids
					}
					];

				
				const customConfigObjectA={"buckets":[{"precision":2,"min":0.01,"max":20,"increment":0.01}]};
				
				
				
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
				       publisherDomain: 'smokingmeatforums.com',
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

				assertive_custom_1 = USERBIDCACHE ? 'prebid_cache_enabled' : 'prebid_cache_disabled';
				assertive_custom_2 = FLOOR_PRICE;
				assertive_custom_3 = site_config.refresh_rate;
				assertive_custom_4 = site_config.LAZYLOAD_RENDER;
				assertive_custom_5 = site_config.LAZYLOAD_MOBILE_SCALE;
				
				// version 1.9 //
				!function(){var b="1.10",U="https://api.assertcom.de";function N(e,t){try{var n=t?"POST":"GET",i=new XMLHttpRequest;i.open(n,e,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(t)}catch(e){}}function R(e){console.error(e),e.meta_host=window.location.host,e.meta_url=window.location.href,e.meta_version=b,e.meta_entityId=assertive_entityId,N(U+"/error.php",JSON.stringify(e,Object.getOwnPropertyNames(e)))}function S(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}try{var t="assertive_analytics_",T=O(),D={},r={},n=n||localStorage.getItem("assertiveYield")&&-1!==localStorage.getItem("assertiveYield").indexOf("debug")||-1!==d("assertiveYield").indexOf("debug");function i(e){return t.concat(e)}function a(e,t){return localStorage.setItem(i(e),t)}function P(e){return localStorage.getItem(i(e))}function u(e){return localStorage.removeItem(i(e))}function E(e){e=i(e);var t=Number(localStorage.getItem(e))||0;return localStorage.setItem(e,++t),t}function e(e){if(E(e+"PageViewN"),"client"!==e||!P(e+"UUID")){if("session"===e){if(P(e+"UUID")&&P(e+"Timeout")&&Date.now()<Number(P(e+"Timeout")))return void a(e+"Timeout",Date.now()+18e5);a(e+"Timeout",Date.now()+18e5)}a(e+"UUID",O()),a(e+"Random",Math.random()),document.referrer?a(e+"Referrer",document.referrer):u(e+"Referrer"),a(e+"EntryPathname",window.location.pathname);var t=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],n={};for(var i in t){var r=t[i],s=d(r);""!==s&&(n[r]=s)}var o=JSON.stringify(n);o!==JSON.stringify({})?a(e+"UTM",o):u(e+"UTM"),a(e+"ImpressionN",1),a(e+"PageViewN",1),"session"===e&&E("clientSessionN")}}function O(e){return e?(e^(window&&window.crypto&&window.crypto.getRandomValues?crypto.getRandomValues(new Uint8Array(1))[0]%16:16*Math.random())>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,O)}function d(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function A(e){n&&console.log(e)}function s(e,t){var n=D[e];if(n){var i=n.impressionUUID+":"+t;r[i]||(r[i]=!0,n.event=t,N(U+"/meta",JSON.stringify(n)))}}e("client"),e("session"),-1!==d("assertiveYield").indexOf("check")&&alert("Assertive Yield: Check"),("undefined"==typeof assertive_sampleRate||assertive_sampleRate&&P("sessionRandom")<assertive_sampleRate)&&function e(){if(o)return;if("undefined"==typeof googletag||!googletag.pubadsReady)return void setTimeout(e,20);o=!0;var w=null;window.addEventListener("blur",function(){w&&s(w,"click")});googletag.cmd.push(function(){try{googletag.pubads().addEventListener("slotRenderEnded",function(e){try{if(e.isEmpty)return;if("undefined"==typeof assertive_entityId)return void console.error("Assertive Yield: Entity ID is mandatory and not defined, exiting...");E("clientImpressionN"),E("sessionImpressionN");var t=e.slot,n=t.getSlotElementId(),i=t.getAdUnitPath(),r=document.getElementById(n),s=O();if(!r)return;var o=r.getElementsByTagName("iframe")[0];o.addEventListener("mouseover",function(){w=n}),o.addEventListener("touchstart",function(){w=n}),o.addEventListener("mouseout",function(){w=null}),o.addEventListener("touchend",function(){w=null});var a,u,d=t.getHtml(),l=/(?:(?:pbjs\.renderAd\(document, |adId: |hb_adid":\[)|(?:pbadid=))['"](.*?)["']/gi.exec(d),c=l?l[1]:t.getTargeting("hb_adid")[0],m=!!l;if(c){var p=null;S(pbjs.adUnits,function(e){return e.code===n})?p=n:S(pbjs.adUnits,function(e){return e.code===i})&&(p=i);var f=pbjs.getBidResponsesForAdUnitCode(p).bids||[];if(!f.length)for(var g in u=pbjs.getBidResponses())if(u.hasOwnProperty(g)){var v=u[g].bids;for(var _ in v)v.hasOwnProperty(_)&&f.push(v[_])}a=S(f,function(e){return e.adId===c})||null}u=(u=a?f.filter(function(e){return e.auctionId===a.auctionId}):[]).map(function(e){var t=JSON.parse(JSON.stringify(e));return delete t.ad,t}),A("Session UUID: "+P("sessionUUID")+", PageView UUID: "+T+", Impression UUID: "+s+", AdId: "+c),A("Slot Id: "+n+", AdUnitPath: "+i),a&&A(" - Highest Prebid "+a.cpm+" from "+a.bidderCode+" with id "+c),a||A(" - No PreBids!!!"),A(" - Winner: "+(m?"prebid":"dfp (Direct/AdX/AdSense)")+" with size "+(m&&a?a.width:e.size[0])+"x"+(m&&a?a.height:e.size[1])),A("---------------");var y=null,I=null;a&&(a.appnexus?y=a.appnexus.buyerMemberId?a.appnexus.buyerMemberId:null:a.rubicon&&(y=a.rubicon.networkId?a.rubicon.networkId:null,I=a.rubicon.advertiserId?a.rubicon.advertiserId:null));var h={version:b,entityId:assertive_entityId,siteUUID:"undefined"!=typeof assertive_siteUUID?assertive_siteUUID:null,clientUUID:P("clientUUID"),sessionUUID:P("sessionUUID"),pageViewUUID:T,impressionUUID:s,slotId:n,adUnitPath:i,dfpResponseInformation:t.getResponseInformation()||null,dfpTargetingMap:t.getTargetingMap()||null,highestBid:a,bidResponses:u,highestPreBid:a?a.cpm:0,highestPreBid_partner:a?a.bidderCode:"",buyerId:y,brandId:I,dealId:a&&a.dealId?a.dealId:null,creativeId:a&&a.creativeId?a.creativeId:null,mediaType:a&&a.mediaType?a.mediaType:null,source:a&&a.source?a.source:null,currency:a&&a.currency?a.currency:null,netRevenue:a&&a.netRevenue?a.netRevenue:null,creative_width:m&&a?a.width:e.size[0],creative_height:m&&a?a.height:e.size[1],preBidWon:m,timeToRespond:a?a.timeToRespond:null,protocol:window.location.protocol,host:window.location.host,pathname:window.location.pathname,pathname_split:window.location.pathname.split("/").filter(function(e){return!!e}),referrer:P("sessionReferrer"),utm:P("sessionUTM"),entryPathname:P("sessionEntryPathname"),impressionCount:Number(P("sessionImpressionN"))||null,pageViewCount:Number(P("sessionPageViewN"))||null,client_referrer:P("clientReferrer"),client_utm:P("clientUTM"),client_entryPathname:P("clientEntryPathname"),client_impressionCount:Number(P("clientImpressionN"))||null,client_pageViewCount:Number(P("clientPageViewN"))||null,client_sessionCount:Number(P("clientSessionN"))||null,prebid_timeout:assertive_timeout||null,prebid_version:pbjs.version||null,userState:"undefined"!=typeof assertive_userState?assertive_userState:null,layout:"undefined"!=typeof assertive_layout?assertive_layout:null,custom_1:"undefined"!=typeof assertive_custom_1?assertive_custom_1:null,custom_2:"undefined"!=typeof assertive_custom_2?assertive_custom_2:null,custom_3:"undefined"!=typeof assertive_custom_3?assertive_custom_3:null,custom_4:"undefined"!=typeof assertive_custom_4?assertive_custom_4:null,custom_5:"undefined"!=typeof assertive_custom_5?assertive_custom_5:null,bps_type:t.getTargeting("ay_bid")[0]||null,bps_algo:t.getTargeting("ay_algo")[0]||null};D[n]=h,N(U,JSON.stringify(h)),A("SENT!!!")}catch(e){R(e)}}),googletag.pubads().addEventListener("impressionViewable",function(e){try{var t=e.slot.getSlotElementId();s(t,"activeView")}catch(e){R(e)}})}catch(e){R(e)}})}();var o=!1}catch(e){R(e)}}();

				// end assertive //
				
	
				
				
	
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				