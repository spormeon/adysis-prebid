//Slots to send to page, have to add 1 on to the child (number) because the div counts as 1 in the string 
window.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#mvp-content-main p:nth-child(2)").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid4Slot"></div></div><br>');
    document.querySelector("#mvp-content-main p:nth-child(4)").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid5Slot"></div></div><br>');
    document.querySelector("#mvp-content-main p:nth-child(8)").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid6Slot"></div></div><br>');
    document.querySelector("#mvp-author-box-text p:nth-child(2)").insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid7Slot"></div></div><br>');
});
//  TIMEOUT MAP - 1000 def brings back bigger bids in Uk
var timeoutMap = {
0 : 1400,
1 : 1400,
2 : 1400,
3 : 1400,
4 : 1400,
5 : 1400,
6 : 1400,
7 : 1800,
8 : 1800,
9 : 1800,
10 : 2200,
11 : 2200,
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

//load up google gpt.js
(function () {
  var gads = document.createElement("script");
  gads.async = true;
  gads.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
  var node = document.getElementsByTagName("footerbid1")[0];
  node.parentNode.insertBefore(gads, node);
})();
//load up prebid.js,  I think we need to load this earlier
(function() {
    var adyjsEl = document.createElement("script");
    adyjsEl.type = "text/javascript";
    adyjsEl.async = true;
    adyjsEl.src = "https://adops.adysis.com/prebid2.17.0A.js";
    var adyjsTargetEl = document.getElementsByTagName("footerbid1")[0];
    adyjsTargetEl.insertBefore(adyjsEl, adyjsTargetEl.firstChild);
})();
// amazon bidder
!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
apstag.init({
   pubID: '7f2180c4-57bc-43a4-9896-ecff1a52049d',
   adServer: 'googletag'
 });
apstag.fetchBids({
slots: [
    { slotID: 'inreedvid4Slot', slotName: '/1001824/adp100001/adp100001A', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
    { slotID: 'inreedvid5Slot', slotName: '/1001824/adp100001/adp100001B', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
    { slotID: 'inreedvid6Slot', slotName: '/1001824/adp100001/adp100001C', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
    { slotID: 'inreedvid7Slot', slotName: '/1001824/adp100001/adp100001D', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] }
    ],
    timeout: 2e3
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

    var adUnits = [
  //new ad unit block
     {
      code: 'inreedvid4Slot',
      mediaTypes: {
       banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50]] },
       video:  { context: 'outstream', playerSize: [550, 310], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', "video/webm"], playbackmethod: [2] },
      },
      bids: [
      { bidder: 'teads',      params: { placementId: '75853', pageId: '87372' } },
      { bidder: 'appnexus',   params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_on'] } } }, /* one placementId for all sizes */
   // { bidder: 'appnexus',   params: { placementId: '13232392', video: { skippable: true}, renderer: { url: 'http://cdn.adnxs.com/renderer/video/ANOutstreamVideo.js' } } }, /* demo video placement, always returns a vid, only works client side */ 
      { bidder: 'districtm',  params: { placementId: 11937611, allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_on'] } } },
      { bidder: 'districtmDMX',  params: { dmxid: 171413, memberid: 100041  } }, /* outstream - display */ 
      { bidder: 'onedisplay',    params: { placement: '4882886', network: '4436.1', server: 'adserver-eu.adtech.advertising.com' } }, /* 300x250 */ 
   // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */   
      { bidder: 'conversant', params: { site_id: '118233', mimes: [ 'video/mp4', 'application/javascript' ], maxduration: 30 } },  /* 300x250 */ 
      { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
      { bidder: 'sovrn',      params: { tagid: '575683' } }, /* 300x250 */
      { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
      { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
      { bidder: 'rhythmone',  params: { placementId: '76184', zone: '1r', path: 'mvo' } }, /* one placementId for all sizes */
   // { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/	
      { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
      { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
      { bidder: 'atomx',      params: { id: 5136354} }, /* does all sizes, not working at moment */
   // { bidder: "yieldmo",    params: { placementId: "1990667709809591856" } }, /* no adapter in file */
      { bidder: 'gumgum',     params: { inSlot: '14600' } }, /*gumgum-300x250*/
      { bidder: 'undertone',  params: { publisherId: '3660' } },
      { bidder: 'unruly',     params: { targetingUUID: '23984444', siteId: 15145, featureOverrides: { canRunUnmissable: true } } },
   // { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
      // { bidder: 'viewdeos',      params: { supplyPartnerId: '1985', rendererUrl: 'https://s.viewdeos.io/video/latest/renderer.js' } }, /* oustream  */
   // { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87709' } }, /* 300x250 */ 
      { bidder: 'vi',         params: { pubId: '535034733735961', lang: 'en-US', cat: 'IAB1', bidFloor: 0.01 } },
   // { bidder: 'onefiftytwomedia', params: { aid: 331133 } }
   // { bidder: 'ucfunnel',   params: { adid: 'ad-E2BBB7E7B69BD226F93D69A83686264' } }
      { bidder: 'beachfront', params: { video: { bidfloor: 0.01, appId: '83d77824-262e-4d13-ae0e-56f8f54bf934', mimes: [ 'video/mp4', 'application/javascript' ] }, banner: { bidfloor: 0.01, appId: '46f09c62-f3f1-4ead-f957-f91964be6f02' } } },
      // { bidder: 'beachfront', params: { bidfloor: 0.01, appId: '11bc5dd5-7421-4dd8-c926-40fa653bec76' } }, /* video for s2s bidding */
      // { bidder: 'beachfront', params: { bidfloor: 0.01, appId: '3b16770b-17af-4d22-daff-9606bdf2c9c3' } }, /* banners for s2s bidding */
      { bidder: 'cedato',     params: { player_id: '1895193152' , bidfloor: 0.01 } },
      { bidder: 'adysis',   params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_on'] } } }, /* one placementId for all sizes */
      { bidder: 'smartyads',  params: { placementId: '6368' } },
      { bidder: 'oftmedia',   params: { placementId: '16137883', allowSmallerSizes: true } },
 ] //./bids
 },
  //new ad unit block
     {
     code: 'inreedvid5Slot',
     mediaTypes: {
      banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50]] },
      video:  { context: 'outstream', mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playerSize: [[550, 310]], minduration: 10,  maxduration: 30, protocols: [2,3], w:640, h:480, playbackmethod: [2]  } 
     },
      bids: [
      { bidder: 'teads',      params: { placementId: '75853', pageId: '87372' } },
      { bidder: 'appnexus',   params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_on'] } } }, /* one placementId for all sizes */
   // { bidder: 'appnexus',   params: { placementId: '13232392', video: { skippable: true } } }, /* demo video placement, always returns a vid, only works client side */ 
      { bidder: 'districtm',  params: { placementId: 11937611, allowSmallerSizes: true, video: { skippable: true } } },
      { bidder: 'districtmDMX',  params: { dmxid: 171413, memberid: 100041  } }, /* outstream - display */ 
      { bidder: 'onedisplay',    params: { placement: '4882886', network: '4436.1', server: 'adserver-eu.adtech.advertising.com' } }, /* 300x250 */  
   // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */ 
      { bidder: 'conversant', params: { site_id: '118233', mimes: [ 'video/mp4', 'application/javascript' ], maxduration: 30 } },  /* 300x250 */
      { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
      { bidder: 'sovrn',      params: { tagid: '575683' } }, /* 300x250 */
      { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
      { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
      { bidder: 'rhythmone',  params: { placementId: '76184', zone: '1r', path: 'mvo' } }, /* one placementId for all sizes */
   // { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/	
      { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
      { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
      { bidder: 'atomx',      params: { id: 5136438} }, /* 300x250A */
   // { bidder: "yieldmo",    params: { placementId: "1990667709809591856" } }, /* no adapter in file */
      { bidder: 'gumgum',     params: { inSlot: '14600' } }, /*gumgum-300x250*/
      { bidder: 'undertone',  params: { publisherId: '3660' } },
      { bidder: 'unruly',     params: { targetingUUID: '23984444', siteId: 15145, featureOverrides: { canRunUnmissable: true } } },
   // { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
      //{ bidder: 'viewdeos',   params: { supplyPartnerId: '1985', rendererUrl: 'https://s.viewdeos.io/video/latest/renderer.js' } } /* oustream  */
   // { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87709' } }, /* 300x250 */ 
      { bidder: 'vi',         params: { pubId: '535034733735961', lang: 'en-US', cat: 'IAB1', bidFloor: 0.01 } },
   // { bidder: 'onefiftytwomedia', params: { aid: 331133 } }
      // { bidder: 'ucfunnel',   params: { adid: 'ad-8A2AA8A9D6B68A4DC3E9398D4DD37DE' } },
      { bidder: 'beachfront', params: { video: { bidfloor: 0.01, appId: '83d77824-262e-4d13-ae0e-56f8f54bf934', mimes: [ 'video/mp4', 'application/javascript' ] }, banner: { bidfloor: 0.01, appId: '46f09c62-f3f1-4ead-f957-f91964be6f02' } } },
      { bidder: 'cedato',     params: { player_id: '1895193152' , bidfloor: 0.01 } },
      { bidder: 'adysis',   params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_on'] } } }, /* one placementId for all sizes */
      { bidder: 'smartyads',  params: { placementId: '6368' } },
      { bidder: 'oftmedia',   params: { placementId: '16137883', allowSmallerSizes: true } },
  ] //./bids
  },
   //new ad unit block
      {
      code: 'inreedvid6Slot',
      mediaTypes: {
       banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50]] },
       video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2] },
      },
       bids: [
       { bidder: 'teads',      params: { placementId: '75853', pageId: '87372' } },
       { bidder: 'appnexus',   params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_on'] } } }, /* one placementId for all sizes */
    // { bidder: 'appnexus',   params: { placementId: '13232392', video: { skippable: true } } }, /* demo video placement, always returns a vid, only works client side */ 
       { bidder: 'districtm',  params: { placementId: 11937611, allowSmallerSizes: true, video: { skippable: true } } },
       { bidder: 'districtmDMX',  params: { dmxid: 171413, memberid: 100041  } }, /* outstream - display */ 
       { bidder: 'onedisplay',    params: { placement: '4882886', network: '4436.1', server: 'adserver-eu.adtech.advertising.com' } }, /* 300x250 */ 
    // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */ 
       { bidder: 'conversant', params: { site_id: '118233', mimes: [ 'video/mp4', 'application/javascript' ], maxduration: 30 } },  /* 300x250 */ 
       { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
       { bidder: 'sovrn',      params: { tagid: '575683' } }, /* 300x250 */
       { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
       { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
       { bidder: 'rhythmone',  params: { placementId: '76184', zone: '1r', path: 'mvo' } }, /* one placementId for all sizes */
    // { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/	
       { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
       { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
       { bidder: 'atomx',      params: { id: 5136439} }, /* 300x250B */
    // { bidder: "yieldmo",    params: { placementId: "1990667709809591856" } }, /* no adapter in file */
       { bidder: 'gumgum',     params: { inSlot: '14600' } }, /*gumgum-300x250*/
       { bidder: 'undertone',  params: { publisherId: '3660' } },
       { bidder: 'unruly',     params: { targetingUUID: '23984444', siteId: 15145, featureOverrides: { canRunUnmissable: true } } },
    // { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
       //{ bidder: 'viewdeos',   params: { supplyPartnerId: '1985', rendererUrl: 'https://s.viewdeos.io/video/latest/renderer.js' } } /* oustream  */
    // { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87709' } }, /* 300x250 */ 
       { bidder: 'vi',         params: { pubId: '535034733735961', lang: 'en-US', cat: 'IAB1', bidFloor: 0.01 } },
    // { bidder: 'onefiftytwomedia', params: { aid: 331133 } }
    // { bidder: 'ucfunnel',   params: { adid: 'ad-E2BBB7E7B69BD226F93D69A83686264' } }
       { bidder: 'beachfront', params: { video: { bidfloor: 0.01, appId: '83d77824-262e-4d13-ae0e-56f8f54bf934', mimes: [ 'video/mp4', 'application/javascript' ] }, banner: { bidfloor: 0.01, appId: '46f09c62-f3f1-4ead-f957-f91964be6f02' } } },
       { bidder: 'cedato',     params: { player_id: '1895193152' , bidfloor: 0.01 } },
       { bidder: 'adysis',   params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_on'] } } }, /* one placementId for all sizes */
       { bidder: 'smartyads',  params: { placementId: '6368' } },
       { bidder: 'oftmedia',   params: { placementId: '16137883', allowSmallerSizes: true } },
   ] //./bids
   },
    //new ad unit block
       {
       code: 'inreedvid7Slot',
       mediaTypes: {
        banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50]] }, 
        video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2] },
       },
        bids: [
        { bidder: 'teads',      params: { placementId: '75853', pageId: '87372' } },
        { bidder: 'appnexus',   params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_on'] } } }, /* one placementId for all sizes, outstream placement */
     // { bidder: 'appnexus',   params: { placementId: '13232392', video: { skippable: true } } }, /* demo video placement, always returns a vid, only works client side */ 
        { bidder: 'districtm',  params: { placementId: 11937611, allowSmallerSizes: true, video: { skippable: true } } },
        { bidder: 'districtmDMX',  params: { dmxid: 171413, memberid: 100041  } }, /* outstream - display */ 
        { bidder: 'aol',        params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
     // { bidder: 'brealtime',  params: { placementId: '12002335' } },  /* 300x250 */  
        { bidder: 'conversant', params: { site_id: '118233', mimes: [ 'video/mp4', 'application/javascript' ], maxduration: 30 } },  /* 300x250 */ 
        { bidder: 'pulsepoint', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
        { bidder: 'sovrn',      params: { tagid: '575683' } }, /* 300x250 */
        { bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
        { bidder: '33across',   params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
        { bidder: 'rhythmone',  params: { placementId: '76184', zone: '1r', path: 'mvo' } }, /* one placementId for all sizes */
     // { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/	
        { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
        { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } },
        { bidder: 'atomx',      params: { id: 5136440} }, /* 300x250C */
     // { bidder: "yieldmo",    params: { placementId: "1990667709809591856" } }, /* no adapter in file */
        { bidder: 'gumgum',     params: { inSlot: '14600' } }, /*gumgum-300x250*/
        { bidder: 'undertone',  params: { publisherId: '3660' } },
        { bidder: 'unruly',     params: { targetingUUID: '23984444', siteId: 15145, featureOverrides: { canRunUnmissable: true } } },
     // { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
        //{ bidder: 'viewdeos',   params: { supplyPartnerId: '1985', rendererUrl: 'https://s.viewdeos.io/video/latest/renderer.js' } } /* oustream  */
     // { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87709' } }, /* 300x250 */ 
        { bidder: 'vi',         params: { pubId: '535034733735961', lang: 'en-US', cat: 'IAB1', bidFloor: 0.01 } },
     // { bidder: 'onefiftytwomedia', params: { aid: 331133 } }
     // { bidder: 'ucfunnel',   params: { adid: 'ad-E2BBB7E7B69BD226F93D69A83686264' } }
     // { bidder: 'beachfront', params: { video: { bidfloor: 0.01, appId: '11bc5dd5-7421-4dd8-c926-40fa653bec76', mimes: [ 'video/mp4', 'application/javascript' ] }, banner: { bidfloor: 0.01, appId: '3b16770b-17af-4d22-daff-9606bdf2c9c3' } } }, /*test ids */
        { bidder: 'beachfront', params: { video: { bidfloor: 0.01, appId: '83d77824-262e-4d13-ae0e-56f8f54bf934', mimes: [ 'video/mp4', 'application/javascript' ] }, banner: { bidfloor: 0.01, appId: '46f09c62-f3f1-4ead-f957-f91964be6f02' } } }, /*live ads ids */
        { bidder: 'cedato',     params: { player_id: '1895193152' , bidfloor: 0.01 } },
        { bidder: 'adysis',   params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_on'] } } }, /* one placementId for all sizes */
        { bidder: 'smartyads',  params: { placementId: '6368' } },
        { bidder: 'oftmedia',  params: { placementId: '16137883', allowSmallerSizes: true } },
    ] //./bids
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
  // alias for bidder
     adyjs.aliasBidder('appnexus','brealtime'); 
     adyjs.aliasBidder('appnexus','springserveAlias2');
     adyjs.aliasBidder('appnexus','districtm');
     adyjs.aliasBidder('gamoshi','viewdeos');
     adyjs.aliasBidder('onedisplay','aol');
     adyjs.aliasBidder('appnexus','adysis');
     // adyjs.aliasBidder('appnexus','152media');
  // adjust the bid in real time before the auction takes place
     adyjs.bidderSettings = { 
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
      adysis: { bidCpmAdjustment : function(bidCpm){ return "+c.cpm+" * 2;} },
    };
    adyjs.setConfig({
     priceGranularity: customConfigObjectA,
     consentManagement: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*200, allowAuctionWithoutConsent: true },
        //cache: {url: "//prebid.adnxs.com/pbc/v1/cache"},
      s2sConfig: {
        accountId: 'e31f627f-53a3-4288-9979-482d3c6ffc76',
        enabled: true,
        bidders: ['sovrn','somoaudience','districtm','rhythmone','pulsepoint','gamoshi'],
        timeout: PREBID_TIMEOUT/2,
        adapter: 'prebidServer',
        endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
        cookieSet: true,
        cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
      },
      userSync: {
        iframeEnabled: true,
        syncsPerBidder: 50, // and no more than 3 syncs at a time
        syncDelay: PREBID_TIMEOUT*2.5, // 5 seconds after the auction
      filterSettings: { iframe: { bidders: ['pulsepoint'], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
       },
       debug: true,
       useBidCache: USERBIDCACHE,
       enableSendAllBids: false, // Default will be `true` as of 1.0
       bidderSequence: 'random', // Default is random
       publisherDomain: 'golfwrx.com',
       bidderTimeout: PREBID_TIMEOUT+300,
       pubcid: {expInterval: 525600},
       currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
       sizeConfig: [
         { mediaQuery: '(min-width: 769px)', sizesSupported: [[550, 310], [728, 90], [468, 60], [320, 50], [300, 250], [250, 250], [1, 1]], labels: ['desktop'] },
         { mediaQuery: '(min-width: 500px) and (max-width: 768px)', sizesSupported: [[550, 310], [728, 90],  [468, 60], [320, 50], [300, 250], [250, 250], [1, 1]], labels: ['tablet'] },
         { mediaQuery: '(min-width: 1px) and (max-width: 499px)', sizesSupported: [[550, 310], [300, 250], [250, 250], [320, 50], [1, 1]], labels: ['phone'] }
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
 // googletag.pubads().disableInitialLoad();
    googletag.pubads().enableLazyLoad({
      fetchMarginPercent: 5,  // Fetch slots within 30 viewports.
      renderMarginPercent: 10,  // Render slots within 5000 viewports.
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
    })(window.googletag, window.adyjs, {
definitons: {
    inreedvid4Slot: { adUnitPath: "/1001824/adp100001/adp100001A", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
    inreedvid5Slot: { adUnitPath: "/1001824/adp100001/adp100001B", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
    inreedvid6Slot: { adUnitPath: "/1001824/adp100001/adp100001C", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
    inreedvid7Slot: { adUnitPath: "/1001824/adp100001/adp100001D", size: "mappinginreedvidslot", sizeMapping: "mappinginreedvidslot", timeout: site_config.refresh_rate, },
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

assertive_custom_1 = USERBIDCACHE ? 'prebid_cache_enabled' : 'prebid_cache_disabled';
assertive_custom_2 = FLOOR_PRICE;

//ASSERTIVE ANALYTICS - Version: 1.8.3
!function(){"use strict";var I="1.8",_="https://api.assertcom.de",e="assertive_analytics_",y=e.concat("sessionUUID"),s=e.concat("sessionStart"),a=e.concat("sessionRandom"),h=e.concat("sessionUTM"),b=e.concat("sessionReferrer"),w=E(),U=[],S=[],t=t||localStorage.getItem("assertiveYield")&&-1!==localStorage.getItem("assertiveYield").indexOf("debug")||-1!==d("assertiveYield").indexOf("debug");function E(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,E)}function d(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function R(e){t&&console.log(e)}Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],r=0;r<n;){var o=t[r];if(e.call(i,o,r,t))return o;r++}},configurable:!0,writable:!0}),function(){if(!localStorage.getItem(s)||Date.now()>localStorage.getItem(s)){localStorage.setItem(y,E()),localStorage.setItem(a,Math.random()),document.referrer?localStorage.setItem(b,document.referrer):localStorage.removeItem(b);var e=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],t={};for(var n in e){var i=e[n],r=d(i);""!==r&&(t[i]=r)}var o=JSON.stringify(t);o!==JSON.stringify({})?localStorage.setItem(h,o):localStorage.removeItem(h)}localStorage.setItem(s,Date.now()+18e5)}(),-1!==d("assertiveYield").indexOf("check")&&alert("Assertive Yield: Check"),("undefined"==typeof assertive_sampleRate||assertive_sampleRate&&localStorage.getItem(a)<assertive_sampleRate)&&function e(){if(n)return;if("undefined"==typeof googletag||!googletag.pubadsReady)return void setTimeout(e,20);n=!0;var v=null;window.addEventListener("blur",function(){if(v){var e=new XMLHttpRequest,t=_+"?event=click&entityId="+assertive_entityId+"&impressionUUID="+U[v];e.open("GET",t,!0),e.send()}});googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(e){if(!e.isEmpty)if("undefined"!=typeof assertive_entityId){var t=e.slot,n=t.getSlotElementId(),i=t.getAdUnitPath(),r=document.getElementById(n),o=null;if(r){if(adyjs.adUnits.find(function(e){return e.code===n}))o=n;else{if(!adyjs.adUnits.find(function(e){return e.code===i}))return;o=i}var s=r.getElementsByTagName("iframe")[0];s.addEventListener("mouseover",function(){v=n}),s.addEventListener("touchstart",function(){v=n}),s.addEventListener("mouseout",function(){v=null}),s.addEventListener("touchend",function(){v=null});var a=t.getHtml(),d=/(?:adyjs\.renderAd\(document, |adId: |hb_adid":\[)['"](.*?)["']/g.exec(a),l=d?d[1]:t.getTargeting("hb_adid")[0],u=!!d,c=adyjs.getBidResponsesForAdUnitCode(o).bids.find(function(e){return e.adId===l});U[n]=E(),R("Session UUID: "+localStorage.getItem(y)+", PageView UUID: "+w+", Impression UUID: "+U[n]),R("Slot Id: "+n+", AdUnitPath: "+i),c&&R(" - Highest PreBid "+c.cpm+" from "+c.bidderCode+" with id "+l),c||R(" - No PreBids!!!"),R(" - Winner: "+(u?"prebid":"dfp (Direct/AdX/AdSense)")+" with size "+(u?c.width:e.size[0])+"x"+(u?c.height:e.size[1])),R("---------------");var m=null,p=null;c&&(c.appnexus?m=c.appnexus.buyerMemberId?c.appnexus.buyerMemberId:null:c.rubicon&&(m=c.rubicon.networkId?c.rubicon.networkId:null,p=c.rubicon.advertiserId?c.rubicon.advertiserId:null));var f={version:I,entityId:assertive_entityId,siteUUID:"undefined"!=typeof assertive_siteUUID?assertive_siteUUID:null,sessionUUID:localStorage.getItem(y),pageViewUUID:w,impressionUUID:U[n],slotId:n,adUnitPath:i,highestPreBid:c?c.cpm:0,highestPreBid_partner:c?c.bidderCode:"",buyerId:m,brandId:p,dealId:c&&c.dealId?c.dealId:null,creativeId:c&&c.creativeId?c.creativeId:null,mediaType:c&&c.mediaType?c.mediaType:null,currency:c&&c.currency?c.currency:null,netRevenue:c&&c.netRevenue?c.netRevenue:null,creative_width:u?c.width:e.size[0],creative_height:u?c.height:e.size[1],preBidWon:u,timeToRespond:c?c.timeToRespond:null,protocol:window.location.protocol,host:window.location.host,pathname:window.location.pathname,pathname_split:window.location.pathname.split("/").filter(function(e){return e}),referrer:localStorage.getItem(b),utm:localStorage.getItem(h),prebid_timeout:assertive_timeout||null,prebid_version:adyjs.version||null,userState:"undefined"!=typeof assertive_userState?assertive_userState:null,layout:"undefined"!=typeof assertive_layout?assertive_layout:null,custom_1:"undefined"!=typeof assertive_custom_1?assertive_custom_1:null,custom_2:"undefined"!=typeof assertive_custom_2?assertive_custom_2:null,custom_3:"undefined"!=typeof assertive_custom_3?assertive_custom_3:null,custom_4:"undefined"!=typeof assertive_custom_4?assertive_custom_4:null,custom_5:"undefined"!=typeof assertive_custom_5?assertive_custom_5:null,bps_type:t.getTargeting("ay_bid")[0]||null,bps_algo:t.getTargeting("ay_algo")[0]||null};S.push(f);var g=new XMLHttpRequest;g.open("POST",_,!0),g.setRequestHeader("Content-Type","text/plain"),g.send(JSON.stringify(f)),R("SENT!!!")}}else console.error("Assertive Yield: Entity ID is mandatory and not defined, exiting...")}),googletag.pubads().addEventListener("impressionViewable",function(e){var t=e.slot.getSlotElementId();if(U[t]){var n=new XMLHttpRequest,i=_+"?event=activeView&entityId="+assertive_entityId+"&impressionUUID="+U[t];n.open("GET",i,!0),n.send()}})})}();var n=!1}();
// end assertive analytics