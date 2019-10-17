//scripts and stylesheets to get video instream working - END

//Slots to send to page, have to add 1 on to the child (number) because the div counts as 1 in the string 
window.addEventListener("DOMContentLoaded",function(){
document.querySelector("#custom_html-4").insertAdjacentHTML('afterbegin','<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid8Slot"></div></div>');
document.querySelector("#custom_html-2").insertAdjacentHTML('afterbegin','<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid11Slot"></div></div><br>');
document.querySelector("#custom_html-3").insertAdjacentHTML('afterbegin','<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid12Slot"></div></div><br>');
document.querySelector("#anchor_ad").insertAdjacentHTML('afterbegin','<div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid13Slot"></div></div>');
document.querySelector("#custom_html-5").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid4Slot"></div></div><br>');
document.querySelector("#custom_html-7").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid9Slot"></div></div><br>');
document.querySelector("#custom_html-19").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid5Slot"></div></div>');
document.querySelector(".post-the-content p:nth-child(6)").insertAdjacentHTML('afterbegin','<br><br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid6Slot"></div></div><br>');
document.querySelector(".post-the-content p:nth-child(10)").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid10Slot"></div></div><br>');
document.querySelector(".comments_headline").insertAdjacentHTML('afterend','<br><br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid7Slot"></div></div><br>');
});

//load up prebid.js,  I think we need to load this earlier
(function() {
var adyjsEl = document.createElement("script");
adyjsEl.async = true;
adyjsEl.rel = "preload";
adyjsEl.type = "text/javascript";
adyjsEl.src = "https://adops.adysis.com/prebid2.34.0adyjs.js";
var adyjsTargetEl = document.getElementsByTagName("footerbid1")[0];
adyjsTargetEl.insertBefore(adyjsEl, adyjsTargetEl.firstChild);
})();
//load up google gpt.js
(function () {
var gads = document.createElement("script");
gads.async = true;
gads.rel = "preload"
gads.type = "text/javascript";
gads.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
var nodegads = document.getElementsByTagName("footerbid1")[0];
nodegads.insertBefore(gads, nodegads.thirdChild);
})();
//load up preconnect.js,  I think we need to load this earlier
(function() {
var preconnect = document.createElement("script");
preconnect.rel = "preload";
preconnect.type = "text/javascript";
preconnect.src = "https://adops.adysis.com/preconnect.js";
var nodepreconnect = document.getElementsByTagName("footerbid1")[0];
nodepreconnect.insertBefore(preconnect, nodepreconnect.secondChild);
})();
//load up bidfilter.js,
window._BidFilter={site_id:1045,pbjsKey:'adyjs',checkAudio:false};
(function () {
var bidfilter = document.createElement("script");
bidfilter.async = true;
bidfilter.rel = "preload"
bidfilter.type = "text/javascript";
bidfilter.src = "https://cdn.bidfilter.com/bidfilter.js";
var nodebidfilter = document.getElementsByTagName("footerbid1")[0];
nodebidfilter.insertBefore(bidfilter, nodebidfilter.fourthChild);
})();

//  TIMEOUT MAP - 1000 def brings back bigger bids in Uk
var timeoutMap = {
0 : 1400,
1 : 1400,
2 : 1400,
3 : 1400,
4 : 1400,
5 : 1400,
6 : 1400,
7 : 2400,
8 : 2800,
9 : 2000,
10 : 2000,
11 : 1800,
12 : 1800,
13 : 1800,
14 : 2200,
15 : 2200,
16 : 1800,
17 : 1800,
18 : 1800,
19 : 2200,
20 : 1400,
21 : 2200,
22 : 1800,
23 : 1800
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
6 : 0.06,
7 : 0.07,
8 : 0.08,
9 : 0.06,
10 : 0.01,
11 : 0.01,
12 : 0.02,
13 : 0.03,
14 : 0.04,
15 : 0.05,
16 : 0.06,
17 : 0.07,
18 : 0.08,
19 : 0.09,
20 : 0.01,
21 : 0.01,
22 : 0.02,
23 : 0.03
};
var f = new Date().getUTCHours();
FLOOR_PRICE = floorpriceMap[f];
console.log("floor price:", FLOOR_PRICE );
// site config
var site_config = {
    refresh_rate: PREBID_TIMEOUT*30,  //denoted in milliseonds 40secs=40000...
    FAILSAFE_TIMEOUT: PREBID_TIMEOUT*2   //denoted in milliseonds 5secs=5000...
  };
// site_config end
// unruly player config //
window.top.unruly = window.top.unruly || {}
window.top.unruly.native = window.top.unruly.native || {}
window.top.unruly.native.onAdLoaded = () => {window.top.unruly.native.disclosureMessage = "";}
// amazon bidder
!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
apstag.init({
   pubID: '7f2180c4-57bc-43a4-9896-ecff1a52049d',
   adServer: 'googletag'
 });
apstag.fetchBids({
slots: [
    { slotID: 'inreedvid4Slot', slotName: '/1001824/adp100001/adp100001A', sizes: [[970, 250], [970, 90], [728, 90], [468, 60], [300, 250], [250, 250], [320, 50]] },
    { slotID: 'inreedvid5Slot', slotName: '/1001824/adp100001/adp100001B', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
    { slotID: 'inreedvid6Slot', slotName: '/1001824/adp100001/adp100001C', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
    { slotID: 'inreedvid7Slot', slotName: '/1001824/adp100001/adp100001D', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
    { slotID: 'inreedvid8Slot', slotName: '/1001824/adp100001/adp100001E', sizes: [[970, 250], [970, 90], [728, 90], [468, 60], [300, 250], [250, 250], [320, 50]] },
    { slotID: 'inreedvid9Slot', slotName: '/1001824/adp100001/adp100001F', sizes: [[300, 600], [300, 250], [250, 250]] },
    { slotID: 'inreedvid10Slot', slotName: '/1001824/adp100001/adp100001G', sizes: [[300, 600], [300, 250], [250, 250]] },
    { slotID: 'inreedvid11Slot', slotName: '/1001824/adp100001/adp100001H', sizes: [[300, 600], [160, 600], [120, 600]] },
    { slotID: 'inreedvid12Slot', slotName: '/1001824/adp100001/adp100001I', sizes: [[300, 600], [160, 600], [120, 600]] },
    { slotID: 'inreedvid13Slot', slotName: '/1001824/adp100001/adp100001J', sizes: [[970, 250], [970, 90], [728, 90], [468, 60], [300, 250], [250, 250], [320, 50]] }
    ],
    timeout: 1e3
 }, function(bids) {
// set apstag targeting on googletag, then trigger the first DFP request in googletag's disableInitialLoad integration
     googletag.cmd.push(function(){
         apstag.setDisplayBids();
       //googletag.pubads().refresh();
     });
 });
// amazon bidder end

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
//ASSERTIVE ANALYTICS SETTINGS - Version: 1.4.0
    var assertive_entityId = "FHkAkgiDWrXm4dZFw";
    var assertive_debug = 0; // append the query string 'assertiveYield=debug' or add this local storage entry 'localStorage.setItem("assertiveYield", "debug")' to enable dynamically
    var assertive_sampleRate = 1; // 1 = 100%, 0.2 = 20%...
    var assertive_timeout = null;
    var assertive_layout = null;
    var assertive_userState = null;
 // var assertive_custom_1 = null;
    var assertive_custom_2 = null;
    var assertive_custom_3 = null;
    var assertive_custom_4 = null;
    var assertive_custom_5 = null;
//example of supplying a custom var from a prev. defined var
    assertive_timeout = PREBID_TIMEOUT;  
    
//  NATIVE BIDDER LIST
    var native_bidders = {
    bids: [	
    { bidder: 'appnexus', params: { placementId: '11962910', allowSmallerSizes: true } }, /* one placementId for all sizes */
    { bidder: 'districtm', params: { placementId: 11937611, allowSmallerSizes: true } },
    { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
    { bidder: 'rhythmone', params: { placementId: '76184', zone: '1r', path: 'mvo' } }, /* one placementId for all sizes */
    { bidder: 'adysis', params: { placementId: '11962910', allowSmallerSizes: true } }, /* one placementId for all sizes */
    { bidder: 'smartyads', params: { placementId: '12335' } }, /* native */
    { bidder: 'oftmedia', params: { placementId: '16137883', allowSmallerSizes: true } },
    { bidder: 'openx', params: { unit: '539181725', delDomain: 'freestar-d.openx.net', openrtb: { imp: [{ video: { mimes: ['video/x-flv, video/mp4, application/x-shockwave-flash, application/javascript, video/webm'] } }] } } },
    //{ bidder: 'colossusssp', params: { placementId: '35324' } } /* native */
    { bidder: 'brealtime', params: { placementId: '16717366', allowSmallerSizes: true } } /* one placementId for all sizes */
    ] //./bids
    };
    // OUTSTREAM BIDDER LIST
    var outstream_bidders = {
    bids: [
    { bidder: 'appnexus', params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* one placementId for all sizes */
    //{ bidder: 'appnexus', params: { placementId: '13232392', video: { skippable: true}, renderer: { url: 'http://cdn.adnxs.com/renderer/video/ANOutstreamVideo.js' } } }, /* demo video placement, always returns a vid, only works client side */ 
    { bidder: 'districtm', params: { placementId: 11937611, allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, 
    { bidder: 'conversant', params: { site_id: '118233', mimes: [ 'video/mp4', 'application/javascript' ], maxduration: 30 } },  /* 300x250 */ 
    { bidder: 'pulsepoint', params: { cf: '1X1', cp: '561446', ct: '702261', cw: 550, ch: 310 } }, /* outstream */
    { bidder: 'rhythmone', params: { placementId: '76184', zone: '1r', path: 'mvo' } }, /* one placementId for all sizes */	
    //{ bidder: 'komoona', params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
    //{ bidder: "yieldmo", params: { placementId: "1990667709809591856" } }, /* no adapter in file */
    //{ bidder: 'unruly', params: { UUID: '23984444', SiteId: 15145 } },
    //{ bidder: 'contentignite', params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
    //{ bidder: 'viewdeos', params: { supplyPartnerId: '1985', rendererUrl: 'https://s.viewdeos.io/video/latest/renderer.js' } }, /* oustream  */
    //{ bidder: 'sekindoUM', params: { spaceId: '87709' } }, /* 300x250 */ 
    //{ bidder: 'ucfunnel', params: { adid: 'ad-E2BBB7E7B69BD226F93D69A83686264' } }
    { bidder: 'beachfront', params: { video: { bidfloor: 0.01, appId: '83d77824-262e-4d13-ae0e-56f8f54bf934', mimes: [ 'video/mp4', 'application/javascript' ] }, banner: { bidfloor: 0.01, appId: '46f09c62-f3f1-4ead-f957-f91964be6f02' } } },
    //{ bidder: 'beachfront', params: { bidfloor: 0.01, appId: '11bc5dd5-7421-4dd8-c926-40fa653bec76' } }, /* video for s2s bidding */
    //{ bidder: 'beachfront', params: { bidfloor: 0.01, appId: '3b16770b-17af-4d22-daff-9606bdf2c9c3' } }, /* banners for s2s bidding */
    //{ bidder: 'cedato', params: { player_id: '1895193152' , bidfloor: 0.01 } },
    { bidder: 'adysis', params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* one placementId for all sizes */
    { bidder: 'smartyads', params: { placementId: '11833' } }, /* outstream */
    { bidder: 'oftmedia', params: { placementId: '16137883', allowSmallerSizes: true, allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } },
    { bidder: 'openx', params: { unit: '539181725', delDomain: 'freestar-d.openx.net', openrtb: { imp: [{ video: { mimes: ['video/x-flv, video/mp4, application/x-shockwave-flash, application/javascript, video/webm'] } }] } } },
    { bidder: 'rubicon', params: { accountId: "16924", siteId: "151312", zoneId: "896644", video: { language: 'en' } } }, /* video call */
    //{ bidder: 'criteo', params: { zoneId: "1079305", video: { skip: 1, playbackmethod: 2, placement: 1 } } },
    //{ bidder: 'colossusssp', params: { placementId: '35323' } }, /* outstream */
    //{ bidder: "ix", params: { siteId: "261017", size: [300, 250], video: { skippable: true, mimes: [ 'video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm' ], minduration: 0, maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10] } } }, /* id 261017 golfwrx id */
    { bidder: 'emx_digital', params: { tagid: '77460', video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* outstream */
    { bidder: 'brealtime', params: { placementId: '16714331', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }  /* video placement */   
    ] //./bids
    };
    // BANNER BIDDER LIST
    var banner_bidders = {
    bids: [
    { bidder: 'teads', params: { placementId: '75853', pageId: '87372' } },
    { bidder: 'appnexus', params: { placementId: '11962910', allowSmallerSizes: true } }, /* one placementId for all sizes */
    //{ bidder: 'appnexus', params: { placementId: '13232392' } }, /* demo video placement, always returns a vid, only works client side */ 
    { bidder: 'districtm', params: { placementId: 11937611, allowSmallerSizes: true } },
    { bidder: 'districtmDMX', params: { dmxid: 171413, memberid: 100041  } }, /* outstream - display */ 
    { bidder: 'onedisplay', params: { placement: '4882886', network: '4436.1', server: 'adserver-eu.adtech.advertising.com' } }, /* 300x250 */ 
    { bidder: 'brealtime', params: { placementId: '16717366' } },  /* sizeless placement */   
    { bidder: 'conversant', params: { site_id: '118233' } },  /* 300x250 */ 
    //{ bidder: 'pulsepoint', params: { cf: '1X1', cp: '561446', ct: '702261', cw: 550, ch: 310 } }, /* outstream */
    { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
    { bidder: 'sovrn', params: { tagid: '575683' } }, /* 300x250 */
    //{ bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
    { bidder: '33across', params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
    { bidder: 'rhythmone', params: { placementId: '76184', zone: '1r', path: 'mvo' } }, /* one placementId for all sizes */
    //{ bidder: 'adsparc', params: { networkId: '9969', siteId: '1019801' } }, /*one placementId for all sizes*/	
    //{ bidder: 'komoona', params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
    { bidder: "ix", params: { siteId: "261017", size: [300, 250] } }, /* id 261017 golfwrx id */
    //{ bidder: 'atomx', params: { id: 5136354 } }, /* does all sizes not working at moment */
    //{ bidder: "yieldmo", params: { placementId: "1990667709809591856" } }, /* no adapter in file */
    { bidder: 'gumgum', params: { inSlot: '14600' } }, /*gumgum-300x250*/
    { bidder: 'undertone', params: { publisherId: '3660' } },
    // { bidder: 'contentignite', params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
    // { bidder: 'viewdeos', params: { supplyPartnerId: '1985', rendererUrl: 'https://s.viewdeos.io/video/latest/renderer.js' } }, /* oustream  */
    // { bidder: 'sekindoUM', params: { spaceId: '87709' } }, /* 300x250 */ 
    { bidder: 'vi', params: { pubId: '535034733735961', lang: 'en-US', cat: 'IAB1', bidFloor: 0.01 } },
    // { bidder: 'ucfunnel', params: { adid: 'ad-E2BBB7E7B69BD226F93D69A83686264' } }
    { bidder: 'beachfront', params: { video: { bidfloor: 0.01, appId: '83d77824-262e-4d13-ae0e-56f8f54bf934', mimes: [ 'video/mp4', 'application/javascript' ] }, banner: { bidfloor: 0.01, appId: '46f09c62-f3f1-4ead-f957-f91964be6f02' } } },
    // { bidder: 'beachfront', params: { bidfloor: 0.01, appId: '11bc5dd5-7421-4dd8-c926-40fa653bec76' } }, /* video for s2s bidding */
    // { bidder: 'beachfront', params: { bidfloor: 0.01, appId: '3b16770b-17af-4d22-daff-9606bdf2c9c3' } }, /* banners for s2s bidding */
    //{ bidder: 'cedato', params: { player_id: '1895193152' , bidfloor: 0.01 } },
    { bidder: 'adysis', params: { placementId: '11962910', allowSmallerSizes: true } }, /* one placementId for all sizes */
    //{ bidder: 'smartyads', params: { placementId: '6368' } }, /* 300x250 */
    { bidder: 'oftmedia', params: { placementId: '16137883', allowSmallerSizes: true } },
    { bidder: 'openx', params: { unit: '539181725', delDomain: 'freestar-d.openx.net', openrtb: { imp: [{ video: { mimes: ['video/x-flv, video/mp4, application/x-shockwave-flash, application/javascript, video/webm'] } }] } } },
    { bidder: 'rubicon', params: { accountId: "16924", siteId: "151312", zoneId: "896644" } }, /* display call */
    //{ bidder: 'quantcast', params: { publisherId: "EnBKrGZNvq"} },
    { bidder: 'criteo', params: { zoneId: "1079305", video: { skip: 1, minduration: 5, playbackmethod: 1, placement: 2 } } },
    { bidder: 'triplelift', params: { inventoryCode: "freestar_desktopleader_RON_300x250"} },
    { bidder: 'triplelift', params: { inventoryCode: "freestar_desktopleader_RON_300x250_NATIVE"} },
    { bidder: 'sharethrough', params: { pkey: "DSthphoQqH66AkQXPDoXn74b", iframe: true} },
    { bidder: 'sharethrough', params: { pkey: "GrVComq83JzCSLK1pi9waoyR", iframe: true} },
    { bidder: 'connectad', params: { networkId: "10047", siteId: "1029474"} },
    //{ bidder: 'colossusssp', params: { placementId: '6544' } } /* 300x250 */
    { bidder: 'emx_digital', params: { tagid: '77461' } } /* sizeless */
    //{ bidder: 'decenterads', params: { placementId: '10384' } }, /* 300x250 */
    //{ bidder: 'lockerdome', params: { adUnitId: 'LD12197908548395622' } }, /* 300x250 */
    //{ bidder: 'lockerdome', params: { adUnitId: 'LD12197907843752550' } }, /* 300x100 */
    //{ bidder: 'lockerdome', params: { adUnitId: 'LD12197911702512230' } } /* 728x90 */
    ] //./bids
    };
var adUnits = [
//new ad unit block
{
code: 'inreedvid4Slot',
mediaTypes: {
native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } }
},
labelAny: ['desktop', 'tablet', 'phone'],
bids: native_bidders.bids   
},
{
code: 'inreedvid4Slot',
mediaTypes: {
video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: 2, minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] }
},
 renderer: {
    url: 'https://adops.adysis.com/ANOutstreamVideo.js',
    render: function (bid) {
        ANOutstreamVideo.renderAd({
              targetId: bid.adUnitCode,
              adResponse: bid.adResponse,
            });
          }
        },
      renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid4Slot',
mediaTypes: {
banner: { sizes: [[970, 90],[970, 250],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400],[550, 310]] }  
},
labelAny: ['desktopleader', 'tablet', 'phone'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid5Slot',
mediaTypes: {
native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } }
}, 
labelAny: ['desktop', 'tablet', 'phone'],
bids: native_bidders.bids
},
{
code: 'inreedvid5Slot',
mediaTypes: {
video:  { context: 'outstream', playerSize: [[300, 250]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] }
},
    renderer: {
        url: 'https://adops.adysis.com/ANOutstreamVideo.js',
        render: function (bid) {
            ANOutstreamVideo.renderAd({
                targetId: bid.adUnitCode,
                adResponse: bid.adResponse,
            });
        }
    },
    renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid5Slot',
mediaTypes: {
banner: { sizes: [[300, 250],[250, 250]] } 
},
labelAny: ['desktop', 'tablet', 'phone'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid6Slot',
mediaTypes: {
native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } }
},
labelAny: ['desktop', 'tablet', 'phone'],
bids: native_bidders.bids
},
{
code: 'inreedvid6Slot',
mediaTypes: {
video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] }
},
   renderer: {
       url: 'https://adops.adysis.com/ANOutstreamVideo.js',
       render: function (bid) {
           ANOutstreamVideo.renderAd({
               targetId: bid.adUnitCode,
               adResponse: bid.adResponse,
           });
       }
   },
   renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid6Slot',
mediaTypes: {
banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400],[550, 310]] }  
},
labelAny: ['desktop', 'tablet', 'phone'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid7Slot',
mediaTypes: {
native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } }
},
labelAny: ['desktop', 'tablet', 'phone'],
bids: native_bidders.bids
},
{
code: 'inreedvid7Slot',
mediaTypes: {
video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] }
   },
   renderer: {
       url: 'https://adops.adysis.com/ANOutstreamVideo.js',
       render: function (bid) {
           ANOutstreamVideo.renderAd({
               targetId: bid.adUnitCode,
               adResponse: bid.adResponse,
           });
       }
   },
   renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid7Slot',
mediaTypes: {
banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400],[550, 310]] }  
},
labelAny: ['desktop', 'tablet', 'phone'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid8Slot',
mediaTypes: {
native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } }
},
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: native_bidders.bids
},
{
code: 'inreedvid8Slot',
mediaTypes: {
video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] }
},
   renderer: {
       url: 'https://adops.adysis.com/ANOutstreamVideo.js',
       render: function (bid) {
           ANOutstreamVideo.renderAd({
               targetId: bid.adUnitCode,
               adResponse: bid.adResponse,
           });
       }
   },
   renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid8Slot',
mediaTypes: {
banner: { sizes: [[970, 90],[970, 250],[728, 90],[468, 60],[320, 50],[300, 250],[728, 90],[250, 250],[468, 60],[320, 100],[336, 280],[580, 400],[550, 310]] }
},
labelAny: ['desktopleader', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid9Slot',
mediaTypes: {
native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } }
},
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: native_bidders.bids
},
{
code: 'inreedvid9Slot',
mediaTypes: {
video:  { context: 'outstream', playerSize: [[300, 250]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] }
},
 renderer: {
     url: 'https://adops.adysis.com/ANOutstreamVideo.js',
     render: function (bid) {
         ANOutstreamVideo.renderAd({
             targetId: bid.adUnitCode,
             adResponse: bid.adResponse,
         });
     }
 },
 renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid9Slot',
mediaTypes: {
banner: { sizes: [[300, 600],[160, 600],[120, 600],[300, 250],[250, 250]] }
},
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid10Slot',
mediaTypes: {
native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } }
}, 
labelAny: ['desktop', 'tabletmenu', 'phonemenu'],
bids: native_bidders.bids
},
{
code: 'inreedvid10Slot',
mediaTypes: {
video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] }
},
renderer: {
   url: 'https://adops.adysis.com/ANOutstreamVideo.js',
   render: function (bid) {
       ANOutstreamVideo.renderAd({
           targetId: bid.adUnitCode,
           adResponse: bid.adResponse,
       });
   }
},
renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktop', 'tabletmenu', 'phonemenu'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid10Slot',
mediaTypes: {
banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400],[550, 310]] }
},
labelAny: ['desktop', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
},   	
//new ad unit block
{
code: 'inreedvid11Slot',
mediaTypes: {
banner: { sizes: [[300, 600],[300, 250],[160, 600],[120, 600]] }
},
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
},   	
//new ad unit block
{
code: 'inreedvid12Slot',
mediaTypes: {
banner: { sizes: [[300, 600],[300, 250],[160, 600],[120, 600]] }
},
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
},   	
//new ad unit block
{
code: 'inreedvid13Slot',
mediaTypes: {
banner: { sizes: [[970, 90],[728, 90],[468, 60],[320, 50]] }
},
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
}
];
// ======== DO NOT EDIT BELOW THIS LINE =========== //
    const customConfigObjectA = {
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
    
     var adyjs = adyjs || {};
     adyjs.que = adyjs.que || [];
     adyjs.que.push(function() {
     adyjs.addAdUnits(adUnits);
     //adyjs.addAdUnits(videoAdUnit); // add your ad units to the bid request
  // alias for bidder
     //adyjs.aliasBidder('appnexus','brealtime'); 
     //adyjs.aliasBidder('appnexus','springserveAlias2');
     adyjs.aliasBidder('appnexus','districtm');
     adyjs.aliasBidder('gamoshi','viewdeos');
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
// brealtime:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.80; } },
// springserveAlias2:  { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.65; } },
teads:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.94; } },
unruly:  { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.90; } },
viewdeos:  { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
sovrn:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.85; } },
beachfront:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } }, 
appnexus:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
ix:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
rhythmone:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
somoaudience:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
pulsepoint:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
vi:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
cedato:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
komoona:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
'33across':   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
conversant:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
atomx:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
smartyads:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
oftmedia:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.85; } },
adsparc:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 0.85; } },
triplelift:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
criteo:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
openx:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
sharethrough:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
rubicon:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
emx_digital:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
decenterads:   { bidCpmAdjustment : function(bidCpm){ if(bidCpm < FLOOR_PRICE){ return 0;}return bidCpm * 1.00; } },
adysis: { bidCpmAdjustment : function(bidCpm){ return "+c.cpm+" * 2;} },
};
    adyjs.setConfig({
    	rubicon: {singleRequest: true},
    	priceGranularity: customConfigObjectA,
     consentManagement: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true },
      cache: {url: "https://prebid.adnxs.com/pbc/v1/cache"},
      s2sConfig: {
        accountId: 'e31f627f-53a3-4288-9979-482d3c6ffc76',
        enabled: false,
        bidders: ['sovrn','somoaudience','rhythmone','pulsepoint','rubicon','ix','openx','33across','unruly'],
        timeout: PREBID_TIMEOUT/2,
        adapter: 'prebidServer',
        endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
        cookieSet: true,
        cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
      },
      userSync: {
        iframeEnabled: true,
        syncsPerBidder: 10, // and no more than 3 syncs at a time
        syncDelay: PREBID_TIMEOUT*3, // 5 seconds after the auction
      filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
      // enableOverride: true // publisher will call `pbjs.triggerUserSyncs()'
       },
       debug: true,
       useBidCache: true,
       enableSendAllBids: false, // Default will be `true` as of 1.0
       bidderSequence: 'random', // Default is random
       publisherDomain: 'golfwrx.com',
       bidderTimeout: PREBID_TIMEOUT+500,
       pubcid: {expInterval: 525600},
       currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
       sizeConfig: [
         { mediaQuery: '(min-width: 769px)', 'sizesSupported': [[580, 400],[550, 310], [970, 90], [728, 90], [468, 60], [336, 280], [320, 100], [320, 50], [300, 250], [250, 250], [300, 600]], 'labels': ['desktop'] },
         { mediaQuery: '(min-width: 769px)', 'sizesSupported': [[300, 600],[300, 250],[250, 250],[160, 600], [120, 600]], 'labels': ['desktopmenu'] },
         { mediaQuery: '(min-width: 769px)', 'sizesSupported': [[970, 90],[970, 250],[728, 90],[468, 60],[320, 50],[300, 250],[728, 90],[250, 250],[468, 60],[320, 100],[336, 280],[580, 400],[550, 310]], 'labels': ['desktopleader'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[550, 310], [580, 400], [728, 90],  [468, 60], [320, 50], [320, 100], [336, 280], [300, 250], [300, 600], [250, 250]], labels: ['tablet'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[300, 250], [300, 600], [250, 250]], labels: ['tabletmenu'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[550, 310], [300, 250], [250, 250], [320, 50], [320, 100], [336, 280]], labels: ['phonemenu'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[300, 250], [250, 250]], labels: ['phonemenu'] }
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
// the order below determines the order on the page //
    })(window.googletag, window.adyjs, {
definitons: {
inreedvid11Slot: { adUnitPath: "/1001824/adp100001/adp100001H", size: "mappinginreedvidslot", sizeMapping: "mappingstickyslot", timeout: site_config.refresh_rate, },
inreedvid12Slot: { adUnitPath: "/1001824/adp100001/adp100001I", size: "mappinginreedvidslot", sizeMapping: "mappingstickyslot", timeout: site_config.refresh_rate, },
inreedvid13Slot: { adUnitPath: "/1001824/adp100001/adp100001J", size: "mappinginreedvidslot", sizeMapping: "mappingfooterslot", timeout: site_config.refresh_rate, },
inreedvid8Slot: { adUnitPath: "/1001824/adp100001/adp100001E", size: "mappingleaderslot", sizeMapping: "mappingleaderslot", timeout: site_config.refresh_rate, },
inreedvid4Slot: { adUnitPath: "/1001824/adp100001/adp100001A", size: "mappingleaderslot", sizeMapping: "mappingleaderslot", timeout: site_config.refresh_rate, },
inreedvid5Slot: { adUnitPath: "/1001824/adp100001/adp100001B", size: "mappingmenu1slot", sizeMapping: "mappingmenu1slot", timeout: site_config.refresh_rate, },
inreedvid9Slot: { adUnitPath: "/1001824/adp100001/adp100001F", size: "mappingmenuslot", sizeMapping: "mappingmenuslot", timeout: site_config.refresh_rate, },
inreedvid6Slot: { adUnitPath: "/1001824/adp100001/adp100001C", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid10Slot: { adUnitPath: "/1001824/adp100001/adp100001G", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
inreedvid7Slot: { adUnitPath: "/1001824/adp100001/adp100001D", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
},
sizeMappings: {
mappinginreedvidslot: [
     [[1024, 768],[[550,310],[728,90],[300,250],[250,250],[468,60],[320,50],[336,280],[580,400],[320,100]]],
     [[768, 500],[[728,90],[300,250],[250,250],[468,60],[320,50],[550,310],[336,280],[580,400],[320,100]]],
     [[1, 1],[[300,250],[250,250],[320,50],[320, 100],[336, 280],[468, 90]]],
    ],
mappingmenuslot: [
    [[1024, 768],[[300, 600],[300, 250],[160, 600],[120,600]]],
    [[768, 500],[[300,250],[250,250]]],
    [[1, 1],[[300,250],[250,250]]],
   ],
mappingmenu1slot: [
	[[1024, 768],[[300,250],[250,250]]],
	[[768, 500],[[300,250],[250,250]]],
	[[1, 1],[[300,250],[250,250]]],
   ],
mappingstickyslot: [
    [[1024, 768],[[300, 600],[160,600],[120, 600]]],
    [[768, 500],[[160,600],[120, 600]]],
    [[1, 1],[[120, 600]]],
   ],
mappingfooterslot: [
	[[1024, 768],[[970, 90],[728,90],[468, 60],[320, 50]]],
	[[768, 500],[[728,90],[468, 60],[320, 50]]],
	[[1, 1],[[468, 60],[320, 50]]],
   ],
mappingleaderslot: [
    [[1024, 768],[[970, 90],[970, 250],[728, 90],[468, 60],[320, 50],[300, 250],[728, 90],[250, 250],[468, 60],[320, 100],[336, 280],[580, 400],[550, 310]]],
	[[768, 500],[[728,90],[468, 60],[320, 50]]],
	[[1, 1],[[468, 60],[320, 50]]],
   ] 
    }
   });
});
assertive_custom_1 = USERBIDCACHE ? 'prebid_cache_enabled' : 'prebid_cache_disabled';
assertive_custom_2 = FLOOR_PRICE;
assertive_custom_3 = site_config.refresh_rate;
/*  ####################################
 *  #    ASSERTIVE ANALYTICS CLIENT    #
 *  #        Version: 1.9.1            #
 *  ####################################
 */
!function(){function w(e){console.error(e);var t=new XMLHttpRequest;t.open("POST",N+"/error.php",!0),t.setRequestHeader("Content-Type","text/plain"),t.send(JSON.stringify(e,Object.getOwnPropertyNames(e)))}try{var U="1.9",N="https://api.assertcom.de",t="assertive_analytics_",R=P(),T=[],S=[],n=n||localStorage.getItem("assertiveYield")&&-1!==localStorage.getItem("assertiveYield").indexOf("debug")||-1!==u("assertiveYield").indexOf("debug");function i(e){return t.concat(e)}function a(e,t){return localStorage.setItem(i(e),t)}function D(e){return localStorage.getItem(i(e))}function d(e){return localStorage.removeItem(i(e))}function E(e){e=i(e);var t=Number(localStorage.getItem(e))||0;return localStorage.setItem(e,++t),t}function e(e){if(E(e+"PageViewN"),"client"!==e||!D(e+"UUID")){if("session"===e){if(D(e+"UUID")&&D(e+"Timeout")&&Date.now()<D(e+"Timeout"))return void a(e+"Timeout",Date.now()+18e5);a(e+"Timeout",Date.now()+18e5)}a(e+"UUID",P()),a(e+"Random",Math.random()),document.referrer?a(e+"Referrer",document.referrer):d(e+"Referrer"),a(e+"EntryPathname",window.location.pathname);var t=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],n={};for(var i in t){var r=t[i],s=u(r);""!==s&&(n[r]=s)}var o=JSON.stringify(n);o!==JSON.stringify({})?a(e+"UTM",o):d(e+"UTM"),a(e+"ImpressionN",1),a(e+"PageViewN",1),E(e+"SessionN")}}function P(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,P)}function u(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function O(e){n&&console.log(e)}Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],r=0;r<n;){var s=t[r];if(e.call(i,s,r,t))return s;r++}},configurable:!0,writable:!0}),e("client"),e("session"),-1!==u("assertiveYield").indexOf("check")&&alert("Assertive Yield: Check"),("undefined"==typeof assertive_sampleRate||assertive_sampleRate&&D("sessionRandom")<assertive_sampleRate)&&function e(){if(r)return;if("undefined"==typeof googletag||!googletag.pubadsReady)return void setTimeout(e,20);r=!0;var b=null;window.addEventListener("blur",function(){if(b){var e=new XMLHttpRequest,t=N+"?event=click&entityId="+assertive_entityId+"&impressionUUID="+T[b];e.open("GET",t,!0),e.send()}});googletag.cmd.push(function(){try{googletag.pubads().addEventListener("slotRenderEnded",function(e){try{if(e.isEmpty)return;if("undefined"==typeof assertive_entityId)return void console.error("Assertive Yield: Entity ID is mandatory and not defined, exiting...");E("clientImpressionN"),E("sessionImpressionN");var t=e.slot,n=t.getSlotElementId(),i=t.getAdUnitPath(),r=document.getElementById(n);if(!r)return;var s=r.getElementsByTagName("iframe")[0];s.addEventListener("mouseover",function(){b=n}),s.addEventListener("touchstart",function(){b=n}),s.addEventListener("mouseout",function(){b=null}),s.addEventListener("touchend",function(){b=null});var o,a=t.getHtml(),d=/(?:(?:adyjs\.renderAd\(document, |adId: |hb_adid":\[)|(?:pbadid=))['"](.*?)["']/gi.exec(a),u=d?d[1]:t.getTargeting("hb_adid")[0],l=!!d;if(u){var c=null;adyjs.adUnits.find(function(e){return e.code===n})?c=n:adyjs.adUnits.find(function(e){return e.code===i})&&(c=i);var p=adyjs.getBidResponsesForAdUnitCode(c).bids||[];if(!p.length){var m=adyjs.getBidResponses();for(var f in m)if(m.hasOwnProperty(f)){var v=m[f].bids;for(var g in v)v.hasOwnProperty(g)&&p.push(v[g])}}o=p.find(function(e){return e.adId===u})||null}var m=o?p.filter(function(e){return e.auctionId===o.auctionId}):[];T[n]=P(),O("Session UUID: "+D("sessionUUID")+", PageView UUID: "+R+", Impression UUID: "+T[n]+", AdId: "+u),O("Slot Id: "+n+", AdUnitPath: "+i),o&&O(" - Highest Prebid "+o.cpm+" from "+o.bidderCode+" with id "+u),o||O(" - No PreBids!!!"),O(" - Winner: "+(l?"prebid":"dfp (Direct/AdX/AdSense)")+" with size "+(l&&o?o.width:e.size[0])+"x"+(l&&o?o.height:e.size[1])),O("---------------");var y=null,I=null;o&&(o.appnexus?y=o.appnexus.buyerMemberId?o.appnexus.buyerMemberId:null:o.rubicon&&(y=o.rubicon.networkId?o.rubicon.networkId:null,I=o.rubicon.advertiserId?o.rubicon.advertiserId:null));var _={version:U,entityId:assertive_entityId,siteUUID:"undefined"!=typeof assertive_siteUUID?assertive_siteUUID:null,clientUUID:D("clientUUID"),sessionUUID:D("sessionUUID"),pageViewUUID:R,impressionUUID:T[n],slotId:n,adUnitPath:i,dfpResponseInformation:t.getResponseInformation()||null,dfpTargetingMap:t.getTargetingMap()||null,highestBid:o,bidResponses:m,highestPreBid:o?o.cpm:0,highestPreBid_partner:o?o.bidderCode:"",buyerId:y,brandId:I,dealId:o&&o.dealId?o.dealId:null,creativeId:o&&o.creativeId?o.creativeId:null,mediaType:o&&o.mediaType?o.mediaType:null,source:o&&o.source?o.source:null,currency:o&&o.currency?o.currency:null,netRevenue:o&&o.netRevenue?o.netRevenue:null,creative_width:l&&o?o.width:e.size[0],creative_height:l&&o?o.height:e.size[1],preBidWon:l,timeToRespond:o?o.timeToRespond:null,protocol:window.location.protocol,host:window.location.host,pathname:window.location.pathname,pathname_split:window.location.pathname.split("/").filter(function(e){return!!e}),referrer:D("sessionReferrer"),utm:D("sessionUTM"),entryPathname:D("sessionEntryPathname"),impressionN:Number(D("sessionImpressionN"))||null,pageViewN:Number(D("sessionPageViewN"))||null,client_referrer:D("clientReferrer"),client_utm:D("clientUTM"),client_entryPathname:D("clientEntryPathname"),client_impressionN:Number(D("clientImpressionN"))||null,client_pageViewN:Number(D("clientPageViewN"))||null,client_sessionN:Number(D("clientSessionN"))||null,prebid_timeout:assertive_timeout||null,prebid_version:adyjs.version||null,userState:"undefined"!=typeof assertive_userState?assertive_userState:null,layout:"undefined"!=typeof assertive_layout?assertive_layout:null,custom_1:"undefined"!=typeof assertive_custom_1?assertive_custom_1:null,custom_2:"undefined"!=typeof assertive_custom_2?assertive_custom_2:null,custom_3:"undefined"!=typeof assertive_custom_3?assertive_custom_3:null,custom_4:"undefined"!=typeof assertive_custom_4?assertive_custom_4:null,custom_5:"undefined"!=typeof assertive_custom_5?assertive_custom_5:null,bps_type:t.getTargeting("ay_bid")[0]||null,bps_algo:t.getTargeting("ay_algo")[0]||null};S.push(_);var h=new XMLHttpRequest;h.open("POST",N,!0),h.setRequestHeader("Content-Type","text/plain"),h.send(JSON.stringify(_)),O("SENT!!!")}catch(e){w(e)}}),googletag.pubads().addEventListener("impressionViewable",function(e){try{var t=e.slot.getSlotElementId();if(!T[t])return;var n=new XMLHttpRequest,i=N+"?event=activeView&entityId="+assertive_entityId+"&impressionUUID="+T[t];n.open("GET",i,!0),n.send()}catch(e){w(e)}})}catch(e){w(e)}})}();var r=!1}catch(e){w(e)}}();
// end assertive //