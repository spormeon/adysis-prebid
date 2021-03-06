//have to add 1 on to the child (number) because the div counts as 1 in the string 
window.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#mvp-content-main p:nth-child(2)').insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvidSlot"></div></div><br>');
    document.querySelector('#mvp-content-main p:nth-child(4)').insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid1Slot"></div></div><br>');
    document.querySelector('#mvp-content-main p:nth-child(7)').insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid2Slot"></div></div><br>');
    document.querySelector('#mvp-content-main p:nth-child(10)').insertAdjacentHTML('afterbegin','<br><div class="ad-reporter-ahytrfg35423"><div id="advertisement" style="border: 0pt none; margin: auto; text-align: center; color: #999; text-transform: uppercase; font-family: sans-serif; font-size: 9px; font-weight: 400; letter-spacing: .2em; line-height: 1; margin-top: 0px; position: relative; top: -4px;">Advertisement</div><div id="inreedvid3Slot"></div></div><br>');
});

var timeoutMap = {
   0 : 1500,
   1 : 1500,
   2 : 1500,
   3 : 1500,
   4 : 1700,
   5 : 1700,
   6 : 1700,
   7 : 1900,
   8 : 2500,
   9 : 2500,
  10 : 2500,
  11 : 2500,
  12 : 3000,
  13 : 3000,
  14 : 1500,
  15 : 1700,
  16 : 1500,
  17 : 1500,
  18 : 1500,
  19 : 1500,
  20 : 1500,
  21 : 1500,
  22 : 1500,
  23 : 1500
};

var t = new Date().getUTCHours();

PREBID_TIMEOUT = timeoutMap[t];

//ASSERTIVE ANALYTICS SETTINGS - Version: 1.4.0
var assertive_entityId = 'eE88aE2HtwKnXikcL';
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

<!-- Prebid Config Section START -->

  
 
  var adUnits = [
//new ad unit block
{
 code: 'inreedvidSlot',
 mediaTypes: {
	 banner: {
		 sizes: [[728, 90], [300, 250], [320, 50]]
	 } 
},
bids: [
 { bidder: 'teads',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '75853', pageId: '87372' } },
 { bidder: 'appnexus',  labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '11971351' } }, /* one placementId for all sizes */
 { bidder: 'districtm', labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */ 
 { bidder: 'aol',       labelAny: ['desktop', 'tablet', 'phone'], params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
 { bidder: 'brealtime', labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '12002335' } }  /* 300x250 */   
] //./bids
},
//new ad unit block
{
 code: 'inreedvid1Slot',
 mediaTypes: {
	 banner: {
		 sizes: [[728, 90], [300, 250], [320, 50]]
	 } 
},
bids: [
 { bidder: 'teads',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '95333', pageId: '87372' } },
 { bidder: 'appnexus',  labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '11971351' } }, /* one placementId for all sizes */
 { bidder: 'districtm', labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */  
 { bidder: 'aol',       labelAny: ['desktop', 'tablet', 'phone'], params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
 { bidder: 'brealtime', labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '12002335' } }  /* 300x250 */   
] //./bids
},
//new ad unit block
{
 code: 'inreedvid2Slot',
 mediaTypes: {
     banner: {
		 sizes: [[728, 90], [300, 250], [320, 50]]
	 } 
},
bids: [
 { bidder: 'teads',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '95334', pageId: '87372' } },
 { bidder: 'appnexus',  labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '11971351' } }, /* one placementId for all sizes */
 { bidder: 'districtm', labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */ 
 { bidder: 'aol',       labelAny: ['desktop', 'tablet', 'phone'], params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */
 { bidder: 'brealtime', labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '12002335' } }  /* 300x250 */   
] //./bids
},
//new ad unit block
{
 code: 'inreedvid3Slot',
 mediaTypes: {
	 banner: {
		 sizes: [[728, 90], [300, 250], [320, 50]]
	 } 
},
bids: [
 { bidder: 'teads',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '95335', pageId: '87372' } },
 { bidder: 'appnexus',  labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '11971351' } }, /* one placementId for all sizes */
 { bidder: 'districtm', labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */ 
 { bidder: 'aol',       labelAny: ['desktop', 'tablet', 'phone'], params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
 { bidder: 'brealtime', labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '12002335' } }  /* 300x250 */   
] //./bids
},
//new ad unit block
{
 code: 'topleaderSlot',
 mediaTypes: {
	 banner: {
		 sizes: [[970, 250], [970, 90], [728, 90], [468, 60], [320, 50]]
	 }
},
bids: [
 { bidder: 'aol',    labelAny: ['desktop', 'tablet'],      params: { placement: '4882887', network: '4436.1', server: 'adserver.adtech.de' } }, /* 728x90 */
 { bidder: 'aol',    labelAny: ['desktop'],      params: { placement: '6507337', network: '4436.1', server: 'adserver.adtech.de' } }, /* 970x250 */
 { bidder: 'aol',    labelAny: ['desktop'],      params: { placement: '6507338', network: '4436.1', server: 'adserver.adtech.de' } }, /* 970x90 */
 { bidder: 'aol',    labelAny: ['desktop', 'tablet'],      params: { placement: '6507341', network: '4436.1', server: 'adserver.adtech.de' } }, /* 468x60 */
 { bidder: 'aol',    labelAny: ['desktop', 'tablet', 'phone'],      params: { placement: '6507340', network: '4436.1', server: 'adserver.adtech.de' } }, /* 320x50 */
 /* { bidder: 'featureforward', params: {pubId:28, siteId:6, placementId: '4' } }, */
 /* { bidder: 'atomx',        params: { id: '3808200'} }, */ /* does all sizes, not working at moment */
 { bidder: 'appnexus',   labelAny: ['desktop', 'tablet', 'phone'],  params: { placementId: '11971351' } }, /* one placementId for all sizes */
 { bidder: 'rhythmone',  labelAny: ['desktop', 'tablet', 'phone'],  params: { placementId: '76184' } }, /* one placementId for all sizes */
 { bidder: 'brealtime',  labelAny: ['desktop'],  params: { placementId: '12002322' } },  /* 970x250 */
 { bidder: 'brealtime',  labelAny: ['desktop'],  params: { placementId: '12002329' } },  /* 970x90 */
 { bidder: 'brealtime',  labelAny: ['desktop', 'tablet'], params: { placementId: '12002330' } },  /* 728x90 */
 { bidder: 'brealtime',  labelAny: ['desktop', 'tablet'], params: { placementId: '12002331' } },  /* 468x60 */
 { bidder: 'brealtime',  labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '12002333' } },  /* 320x50 */
 { bidder: 'conversant', labelAny: ['desktop', 'tablet'], params: { site_id: '118233' } },  /* 728x90 */ 
 { bidder: 'districtm',  labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 11937610 } }, /* 970x250 - 970x90 - 728x90 - 468x60 */
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '970X250', cp: '561446', ct: '602634' } },
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '970X90', cp: '561446', ct: '602642' } },
 { bidder: 'pulsepoint',   labelAny: ['desktop', 'tablet'], params: { cf: '728X90', cp: '561446', ct: '602643' } },
 { bidder: 'pulsepoint',   labelAny: ['desktop', 'tablet', 'phone'], params: { cf: '320X50', cp: '561446', ct: '602644' } },
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87690' } }, */ /* 970x250 */ 
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87691' } }, */ /* 728x90 */
 /* { bidder: 'sekindoapn',   labelAny: ['desktop'], params: { placementId: '11968754' } }, */ /* 970x250 */
 /* { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test2', dom_id: 'div-gpt-ad-1503393253852-1', floor: 0.5 } },  */ /* does all sizes, different sort of setup */ 
 { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagId: '575684' } }, /* 970x250 */
 { bidder: 'sovrn',        labelAny: ['desktop', 'tablet'], params: { tagId: '574059' } }, /* 728x90 */
 { bidder: 'sovrn',        labelAny: ['desktop', 'tablet', 'phone'], params: { tagId: '575686' } }, /* 468x60 */
 { bidder: 'sovrn',        labelAny: ['desktop', 'tablet', 'phone'], params: { tagId: '575687' } }, /* 320x50 */
 /* { bidder: 'huddledmasses', labelAny: ['desktop', 'tablet'], params: { placement_id: 6545 } },  */ /* 728x90 */
 /* { bidder: 'smartyads',    labelAny: ['desktop', 'tablet'], params: { banner_id: 6379 } }, */ /*728x90*/
 /* { bidder: 'vertoz',       labelAny: ['desktop'], params: { placementId:'VZ-HB-Y968967V15GC66'} }, */ /* 970x250 */
 /* { bidder: 'vertoz',       labelAny: ['desktop', 'tablet'], params: { placementId:'VZ-HB-P786728VDF5C56'} },  */ /*7 28x90 */
 /* { bidder: 'springserveAlias2',  params: { placementId: '12463800'} }  */ /* 970x250 - 970x90 - 728x90  */	      
 { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/	      
 /* { bidder: 'contentignite',      labelAny: ['desktop', 'tablet'], params: { accountID: '168237', zoneID: '316287'} }, */ /*728x90*/	      
 /* { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316289'} }, */ /*320x50*/	      
 /* { bidder: 'fidelity',      labelAny: ['desktop', 'tablet'], params: { zoneid: '53862'} }, */ /*728x90*/	     
 /* { bidder: 'fidelity',      labelAny: ['desktop', 'tablet', 'phone'], params: { zoneid: '53865'} }, */ /*320x50*/	     
 /* { bidder: 'fidelity',      labelAny: ['desktop', 'tablet', 'phone'], params: { zoneid: '54663'} }, */ /*468x60*/		      
 { bidder: 'gumgum',      labelAny: ['desktop'], params: { inSlot: '14605' } }, /*gumgum-970x90*/		      
 { bidder: 'gumgum',      labelAny: ['desktop', 'tablet'], params: { inSlot: '14604' } }, /*gumgum-728x90*/		      
 { bidder: 'gumgum',      labelAny: ['desktop', 'tablet', 'phone'], params: { inSlot: '14603' } }, /*gumgum-468x60*/		      
 { bidder: 'gumgum',      labelAny: ['desktop', 'tablet', 'phone'], params: { inSlot: '14602' } }, /*gumgum-320x50*/		      
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: '7cd3a578076555b630cf3525595dbe33' } }, /*somo-970x250*/		      
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: '7ea46e02b3b69d777e1fe8f6a96a3af6' } }, /*somo-970x90*/		      
 { bidder: 'somoaudience',      labelAny: ['desktop', 'tablet'], params: { placement_hash: '08068141ea62f58f5e86ec750e1b2c9c' } }, /*somo-728x90*/		      
 { bidder: 'somoaudience',      labelAny: ['desktop', 'tablet', 'phone'], params: { placement_hash: '35dcb1ced18e7d865844af641e1c3b59' } }, /*somo-468x60*/		      
 { bidder: 'somoaudience',      labelAny: ['desktop', 'tablet', 'phone'], params: { placement_hash: '69d91b86f5c09a59230594bb8b274e34' } }, /*somo-320x50*/		      
 { bidder: '33across',      labelAny: ['desktop', 'tablet', 'phone'], params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } } /*All sizes*/		     
 /* { bidder: 'bizzclick',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId : '38' } } */ /*728x90*/
] //./bids
},
//new ad unit block
{
 code: 'toprightSlot',
 mediaTypes: {
     banner: {
         sizes: [[300, 600], [300, 250], [160, 600], [120, 600]]
     }
},
bids: [
 { bidder: 'aol',          labelAny: ['desktop', 'tablet', 'phone'], params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */   
 { bidder: 'aol',          labelAny: ['desktop'], params: { placement: '4882888', network: '4436.1', server: 'adserver.adtech.de' } }, /* 160x600 */ 
 { bidder: 'aol',          labelAny: ['desktop'], params: { placement: '5293857', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x600 */   
 { bidder: 'aol',          labelAny: ['desktop'], params: { placement: '6507339', network: '4436.1', server: 'adserver.adtech.de' } }, /* 120x600 */  
 /* { bidder: 'atomx',        params: { id: '3808201'} }, */ /* does all sizes, not working at moment */  
 /* { bidder: 'featureforward', params: {pubId:28, siteId:6, placementId: '3' }}, */  
 /* { bidder: 'switch',       params: { adUnitID: 6632, domain:'delivery.h.switchadhub.com' } }, */ /* 160x600, 120x600, 300x600, 300x250, 300x50 */   
 { bidder: 'appnexus',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '11971351' } }, /* one placementId for all sizes */  
 { bidder: 'rhythmone',    labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '76184' } }, /* one placementId for all sizes */   
 { bidder: 'brealtime',    labelAny: ['desktop'], params: { placementId: '12002334' } },  /* 300x600 */   
 { bidder: 'brealtime',    labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '12002335' } },  /* 300x250 */   
 { bidder: 'brealtime',    labelAny: ['desktop'], params: { placementId: '12002336' } },  /* 160x600 */   
 { bidder: 'brealtime',    labelAny: ['desktop'], params: { placementId: '12002337' } },  /* 120x600 */  
 { bidder: 'conversant',   labelAny: ['desktop', 'tablet', 'phone'], params: { site_id: '118233' } },  /* 300x250 */   
 { bidder: 'districtm',    labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */  
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '300X600', cp: '561446', ct: '602638' } }, /* 300x600 */  
 { bidder: 'pulsepoint',   labelAny: ['desktop', 'tablet', 'phone'], params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */  
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '160X600', cp: '561446', ct: '602640' } }, /* 160x600 */  
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '120X600', cp: '561446', ct: '602641' } }, /* 120x600 */ 
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87709' } }, */ /* 300x250 */   
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87692' } }, */ /* 300x600 */  
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87694' } }, */ /* 160x600 */
 /* { bidder: 'sekindoapn',   params: { placementId: '11968755' } }, */ /* 300x600 */  
 /* { bidder: 'sekindoapn',   params: { placementId: '11968756' } }, */ /* 300x250 */ 
 /* { bidder: 'sekindoapn',   params: { placementId: '11968757' } }, */ /* 160x600 */
 /* { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test1', dom_id: 'div-gpt-ad-1503393253852-0', floor: 0.0 } },  */ /* does all sizes, different sort of setup */
 { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagId: '574058' } }, /* 300x600*/
 { bidder: 'sovrn',        labelAny: ['desktop', 'tablet', 'phone'], params: { tagId: '575683' } }, /* 300x250 */
 { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagId: '574057' } }, /* 160x600*/
 { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagId: '575685' } }, /* 120x600 */
 /* { bidder: 'huddledmasses',params: { placement_id: 6544 } },  */ /* 300x250 */
 /* { bidder: 'huddledmasses',params: { placement_id: 6546 } },  */ /* 160x600 */
 /* { bidder: 'komoona',      labelAny: ['desktop'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: 'be3564ac269d63fb992e3b2554e06ada' } },  */ /* Golfwrx.com _KB 300x600 */
 /* { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } }, */ /* Golfwrx.com _KB 300x250 */
 /* { bidder: 'komoona',      labelAny: ['desktop'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '3ef8c7500669dc363bec56f1e5a393f7' } },  */ /* Golfwrx.com _KB 160x600 */
 /* { bidder: 'smartyads',    labelAny: ['desktop', 'tablet', 'phone'], params: { banner_id: '6368' } }, */ /* 300x250 */
 /* { bidder: 'smartyads',    labelAny: ['desktop'], params: { banner_id: '6383' } }, */ /* 160x600 */
 /* { bidder: 'vertoz',       labelAny: ['desktop'], params: { placementId: 'VZ-HB-F839907VGB86E1'} }, */ /*300x600*/ 
 /* { bidder: 'vertoz',       labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 'VZ-HB-M568254V344777'} }, */ /*300x250*/
 /* { bidder: 'vertoz',       labelAny: ['desktop'], params: { placementId: 'VZ-HB-I951082VE249HH'} }, */ /*160x600*/
 /* { bidder: 'vertoz',       labelAny: ['desktop'], params: { placementId: 'VZ-HB-P511170V2009D9'} }, */ /*120x250*/
 /* { bidder: 'springserveAlias2',  params: { placementId: '12463797'} }  */ /* 300x600 - 300x250 - 160x600 - 120x600 */
 { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/
 /* { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, */ /*300x250*/
 /* { bidder: 'fidelity',      labelAny: ['desktop', 'tablet', 'phone'], params: { zoneid: '53864'} }, */ /*300x250*/
 /* { bidder: 'fidelity',      labelAny: ['desktop'], params: { zoneid: '53866'} }, */ /*300x600*/
 /* { bidder: 'fidelity',      labelAny: ['desktop'], params: { zoneid: '53863'} }, */ /*160x600*/
 /* { bidder: 'fidelity',      labelAny: ['desktop'], params: { zoneid: '54662'} }, */ /*120x600*/
 { bidder: 'gumgum',      labelAny: ['desktop'], params: { inSlot: '14598' } }, /*gumgum-160x600*/
 { bidder: 'gumgum',      labelAny: ['desktop', 'tablet', 'phone'], params: { inSlot: '14600' } }, /*gumgum-300x250*/
 { bidder: 'gumgum',      labelAny: ['desktop'], params: { inSlot: '14601' } }, /*gumgum-300x600*/
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: 'cf17e3f3896fdd66f5382875847b4f0e' } }, /*300x600*/
 { bidder: 'somoaudience',      labelAny: ['desktop', 'tablet', 'phone'], params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: '90f47aec2647cba6d85b667413a38f61' } }, /*160x600*/
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: 'f90e06a5c41c0d7d8dda78b18b3bd7d8' } },  /*120x600*/
 { bidder: '33across',      labelAny: ['desktop', 'tablet', 'phone'], params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } } /*All sizes*/
 /* { bidder: 'teads',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '85341', pageId: '87372' } } */
] //./bids
},
//new ad unit block
{
 code: 'middlerightSlot',
 mediaTypes: {
     banner: {
         sizes: [[300, 600], [300, 250], [160, 600], [120, 600]]
     }
},
bids: [
 { bidder: 'aol',          labelAny: ['desktop', 'tablet', 'phone'], params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
 { bidder: 'aol',          labelAny: ['desktop'], params: { placement: '4882888', network: '4436.1', server: 'adserver.adtech.de' } }, /* 160x600 */
 { bidder: 'aol',          labelAny: ['desktop'], params: { placement: '5293857', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x600 */   
 { bidder: 'aol',          labelAny: ['desktop'], params: { placement: '6507339', network: '4436.1', server: 'adserver.adtech.de' } }, /* 120x600 */  
 /* { bidder: 'atomx',        params: { id: '3808201'} }, */ /* does all sizes, not working at moment */
 /* { bidder: 'featureforward', params: {pubId:28, siteId:6, placementId: '3' }}, */
 /* { bidder: 'switch',       params: { adUnitID: 6632, domain:'delivery.h.switchadhub.com' } }, */ /* 160x600, 120x600, 300x600, 300x250, 300x50 */
 { bidder: 'appnexus',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '11971351' } }, /* one placementId for all sizes */
 { bidder: 'rhythmone',    labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '76184' } }, /* one placementId for all sizes */
 { bidder: 'brealtime',    labelAny: ['desktop'], params: { placementId: '12002334' } },  /* 300x600 */
 { bidder: 'brealtime',    labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '12002335' } },  /* 300x250 */ 
 { bidder: 'brealtime',    labelAny: ['desktop'], params: { placementId: '12002336' } },  /* 160x600 */ 
 { bidder: 'brealtime',    labelAny: ['desktop'], params: { placementId: '12002337' } },  /* 120x600 */
 { bidder: 'conversant',   labelAny: ['desktop', 'tablet', 'phone'], params: { site_id: '118233' } },  /* 300x250 */ 
 { bidder: 'districtm',    labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '300X600', cp: '561446', ct: '602638' } }, /* 300x600 */
 { bidder: 'pulsepoint',   labelAny: ['desktop', 'tablet', 'phone'], params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '160X600', cp: '561446', ct: '602640' } }, /* 160x600 */
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '120X600', cp: '561446', ct: '602641' } }, /* 120x600 */
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87709' } }, */ /* 300x250 */ 
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87692' } }, */ /* 300x600 */
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87694' } }, */ /* 160x600 */
 /* { bidder: 'sekindoapn',   params: { placementId: '11968755' } }, */ /* 300x600 */  
 /* { bidder: 'sekindoapn',   params: { placementId: '11968756' } }, */ /* 300x250 */ 
 /* { bidder: 'sekindoapn',   params: { placementId: '11968757' } }, */ /* 160x600 */
 /* { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test1', dom_id: 'div-gpt-ad-1503393253852-0', floor: 0.0 } },  */ /* does all sizes, different sort of setup */
 { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagId: '574058' } }, /* 300x600*/
 { bidder: 'sovrn',        labelAny: ['desktop', 'tablet', 'phone'], params: { tagId: '575683' } }, /* 300x250 */
 { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagId: '574057' } }, /* 160x600*/
 { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagId: '575685' } }, /* 120x600 */
 /* { bidder: 'huddledmasses',params: { placement_id: 6544 } },  */ /* 300x250 */
 /* { bidder: 'huddledmasses',params: { placement_id: 6546 } },  */ /* 160x600 */
 /* { bidder: 'komoona',      labelAny: ['desktop'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: 'be3564ac269d63fb992e3b2554e06ada' } },  */ /* Golfwrx.com _KB 300x600 */
 /* { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } }, */ /* Golfwrx.com _KB 300x250 */
 /* { bidder: 'komoona',      labelAny: ['desktop'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '3ef8c7500669dc363bec56f1e5a393f7' } },  */ /* Golfwrx.com _KB 160x600 */
 /* { bidder: 'smartyads',    labelAny: ['desktop', 'tablet', 'phone'], params: { banner_id: 6368 } }, */ /* 300x250 */
 /* { bidder: 'smartyads',    labelAny: ['desktop'], params: { banner_id: 6383 } }, */ /* 160x600 */
 /* { bidder: 'vertoz',       labelAny: ['desktop'], params: { placementId: 'VZ-HB-F839907VGB86E1'} }, */ /*300x600*/ 
 /* { bidder: 'vertoz',       labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 'VZ-HB-M568254V344777'} }, */ /*300x250*/
 /* { bidder: 'vertoz',       labelAny: ['desktop'], params: { placementId: 'VZ-HB-I951082VE249HH'} }, */ /*160x600*/
 /* { bidder: 'vertoz',       labelAny: ['desktop'], params: { placementId: 'VZ-HB-P511170V2009D9'} }, */ /*120x250*/
 /* { bidder: 'springserveAlias2',  params: { placementId: '12463797'} }  */ /* 300x600 - 300x250 - 160x600 - 120x600 */
 { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/
 /* { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, */ /*300x250*/
 /* { bidder: 'fidelity',      labelAny: ['desktop', 'tablet', 'phone'], params: { zoneid: '53864'} }, */ /*300x250*/
 /* { bidder: 'fidelity',      labelAny: ['desktop'], params: { zoneid: '53866'} }, */ /*300x600*/
 /* { bidder: 'fidelity',      labelAny: ['desktop'], params: { zoneid: '53863'} }, */ /*160x600*/
 /* { bidder: 'fidelity',      labelAny: ['desktop'], params: { zoneid: '54662'} }, */ /*120x600*/
 { bidder: 'gumgum',      labelAny: ['desktop'], params: { inSlot: '14598' } }, /*gumgum-160x600*/
 { bidder: 'gumgum',      labelAny: ['desktop', 'tablet', 'phone'], params: { inSlot: '14600' } }, /*gumgum-300x250*/
 { bidder: 'gumgum',      labelAny: ['desktop'], params: { inSlot: '14601' } }, /*gumgum-300x600*/
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: 'cf17e3f3896fdd66f5382875847b4f0e' } }, /*300x600*/
 { bidder: 'somoaudience',      labelAny: ['desktop', 'tablet', 'phone'], params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: '90f47aec2647cba6d85b667413a38f61' } }, /*160x600*/
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: 'f90e06a5c41c0d7d8dda78b18b3bd7d8' } },  /*120x600*/
 { bidder: '33across',      labelAny: ['desktop', 'tablet', 'phone'], params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } } /*All sizes*/
 /* { bidder: 'teads',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '82762', pageId: '87372' } } */
] //./bids
},
//new ad unit block
{
 code: 'bottomrightSlot',
 mediaTypes: {
     banner: {
         sizes: [[300, 600], [300, 250], [160, 600], [120, 600]]
     }
},
bids: [
 { bidder: 'aol',          labelAny: ['desktop', 'tablet', 'phone'], params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */    
 { bidder: 'aol',          labelAny: ['desktop'], params: { placement: '4882888', network: '4436.1', server: 'adserver.adtech.de' } }, /* 160x600 */   
 { bidder: 'aol',          labelAny: ['desktop'], params: { placement: '5293857', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x600 */
 { bidder: 'aol',          labelAny: ['desktop'], params: { placement: '6507339', network: '4436.1', server: 'adserver.adtech.de' } }, /* 120x600 */
 /* { bidder: 'atomx',        params: { id: '3808201'} }, */ /* does all sizes, not working at moment */
 /* { bidder: 'featureforward', params: {pubId:28, siteId:6, placementId: '3' }}, */
 /* { bidder: 'switch',       params: { adUnitID: 6632, domain:'delivery.h.switchadhub.com' } }, */ /* 160x600, 120x600, 300x600, 300x250, 300x50 */
 { bidder: 'appnexus',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '11971351' } }, /* one placementId for all sizes */
 { bidder: 'rhythmone',    labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '76184' } }, /* one placementId for all sizes */
 { bidder: 'brealtime',    labelAny: ['desktop'], params: { placementId: '12002334' } },  /* 300x600 */
 { bidder: 'brealtime',    labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '12002335' } },  /* 300x250 */ 
 { bidder: 'brealtime',    labelAny: ['desktop'], params: { placementId: '12002336' } },  /* 160x600 */ 
 { bidder: 'brealtime',    labelAny: ['desktop'], params: { placementId: '12002337' } },  /* 120x600 */
 { bidder: 'conversant',   labelAny: ['desktop', 'tablet', 'phone'], params: { site_id: '118233' } },  /* 300x250 */ 
 { bidder: 'districtm',    labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 11937611 } }, /* 300x600 - 300x250 - 160x600 */
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '300X600', cp: '561446', ct: '602638' } }, /* 300x600 */
 { bidder: 'pulsepoint',   labelAny: ['desktop', 'tablet', 'phone'], params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '160X600', cp: '561446', ct: '602640' } }, /* 160x600 */
 { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '120X600', cp: '561446', ct: '602641' } }, /* 120x600 */
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87709' } }, */ /* 300x250 */ 
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87692' } }, */ /* 300x600 */
 /* { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87694' } }, */ /* 160x600 */
 /* { bidder: 'sekindoapn',   params: { placementId: '11968755' } }, */ /* 300x600 */  
 /* { bidder: 'sekindoapn',   params: { placementId: '11968756' } }, */ /* 300x250 */ 
 /* { bidder: 'sekindoapn',   params: { placementId: '11968757' } }, */ /* 160x600 */
 /* { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test1', dom_id: 'div-gpt-ad-1503393253852-0', floor: 0.0 } },  */ /* does all sizes, different sort of setup */
 { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagId: '574058' } }, /* 300x600*/
 { bidder: 'sovrn',        labelAny: ['desktop', 'tablet', 'phone'], params: { tagId: '575683' } }, /* 300x250 */
 { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagId: '574057' } }, /* 160x600*/
 { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagId: '575685' } }, /* 120x600 */
 /* { bidder: 'huddledmasses',params: { placement_id: 6544 } },  */ /* 300x250 */
 /* { bidder: 'huddledmasses',params: { placement_id: 6546 } },  */ /* 160x600 */
 /* { bidder: 'komoona',      labelAny: ['desktop'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: 'be3564ac269d63fb992e3b2554e06ada' } }, */ /* Golfwrx.com _KB 300x600 */
 /* { bidder: 'komoona',      labelAny: ['desktop', 'tablet', 'phone'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } }, */ /* Golfwrx.com _KB 300x250 */
 /* { bidder: 'komoona',      labelAny: ['desktop'], params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '3ef8c7500669dc363bec56f1e5a393f7' } },  */ /* Golfwrx.com _KB 160x600 */
 /* { bidder: 'smartyads',    labelAny: ['desktop', 'tablet', 'phone'], params: { banner_id: 6368 } }, */ /* 300x250 */
 /* { bidder: 'smartyads',    labelAny: ['desktop'], params: { banner_id: 6383 } }, */ /* 160x600 */
 /* { bidder: 'vertoz',       labelAny: ['desktop'], params: { placementId: 'VZ-HB-F839907VGB86E1'} }, */ /*300x600*/ 
 /* { bidder: 'vertoz',       labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: 'VZ-HB-M568254V344777'} }, */ /*300x250*/
 /* { bidder: 'vertoz',       labelAny: ['desktop'], params: { placementId: 'VZ-HB-I951082VE249HH'} }, */ /*160x600*/
 /* { bidder: 'vertoz',       labelAny: ['desktop'], params: { placementId: 'VZ-HB-P511170V2009D9'} }, */ /*120x250*/
 /* { bidder: 'springserveAlias2',  params: { placementId: '12463797'} }  */ /* 300x600 - 300x250 - 160x600 - 120x600 */
 { bidder: 'adsparc',      labelAny: ['desktop', 'tablet', 'phone'], params: { networkId: '9969', siteId: '1019801'} }, /*one placementId for all sizes*/
 /* { bidder: 'contentignite',      labelAny: ['desktop', 'tablet', 'phone'], params: { accountID: '168237', zoneID: '316288'} }, */ /*300x250*/
 /* { bidder: 'fidelity',      labelAny: ['desktop', 'tablet', 'phone'], params: { zoneid: '53864'} }, */ /*300x250*/
 /* { bidder: 'fidelity',      labelAny: ['desktop'], params: { zoneid: '53866'} }, */ /*300x600*/
 /* { bidder: 'fidelity',      labelAny: ['desktop'], params: { zoneid: '53863'} }, */ /*160x600*/
 /* { bidder: 'fidelity',      labelAny: ['desktop'], params: { zoneid: '54662'} }, */ /*120x600*/
 { bidder: 'gumgum',      labelAny: ['desktop'], params: { inSlot: '14598' } }, /*gumgum-160x600*/
 { bidder: 'gumgum',      labelAny: ['desktop', 'tablet', 'phone'], params: { inSlot: '14600' } }, /*gumgum-300x250*/
 { bidder: 'gumgum',      labelAny: ['desktop'], params: { inSlot: '14601' } }, /*gumgum-300x600*/
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: 'cf17e3f3896fdd66f5382875847b4f0e' } }, /*300x600*/
 { bidder: 'somoaudience',      labelAny: ['desktop', 'tablet', 'phone'], params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: '90f47aec2647cba6d85b667413a38f61' } }, /*160x600*/
 { bidder: 'somoaudience',      labelAny: ['desktop'], params: { placement_hash: 'f90e06a5c41c0d7d8dda78b18b3bd7d8' } },  /*120x600*/
 { bidder: '33across',      labelAny: ['desktop', 'tablet', 'phone'], params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } } /*All sizes*/
 /* { bidder: 'teads',     labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '95262', pageId: '87372' } } */
] //./bids
},
//new ad unit block
{
 code: 'skinSlot',
 mediaTypes: {
	 banner: {
		 sizes: [[1, 1], [1800, 1000], [1600, 1050]]
	 } 
},
bids: [
 { bidder: 'justpremium', labelAny: ['desktop', 'tablet'], params: { zone: '50978', allow: ['wp', 'sa', 'pu', 'pd', 'pa', 'ms', 'mo', 'is', 'as', 'fa', 'fi', 'hi', 'cf'] } }, /* wallpaper, video wallpaper */
 { bidder: 'appnexus',    labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '11971351' } } /* one placementId for all sizes */
] //./bids
}
]; //./adUnits
    
 
            
<!-- Prebid Boilerplate Section START. No Need to Edit. -->
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
	
// pbjs.setPriceGranularity("dense");   // not being used, being done in adserver targeting below, this needs to be tweaked once prices seen more
pbjs.addAdUnits(adUnits);
// pbjs.enableSendAllBids();
	
pbjs.aliasBidder('appnexus','brealtime');  // alias for bidder	
pbjs.aliasBidder('appnexus','springserveAlias2'); // alias for bidder	
pbjs.aliasBidder('appnexus','districtm'); // alias for bidder	

pbjs.bidderSettings = { 
	        aol:               { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.85; } }, // adjust the bid in real time before the auction takes place
	        districtm:         { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.90; } }, // adjust the bid in real time before the auction takes place
	        sekindonUM:        { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.75; } }, // adjust the bid in real time before the auction takes place
	        brealtime:         { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.80; } }, // adjust the bid in real time before the auction takes place
	        springserveAlias2: { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.65; } }, // adjust the bid in real time before the auction takes place
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
     bidders: ['appnexus', 'somoaudience', 'sovrn', 'districtm', 'conversant', 'pulsepoint', 'brealtime'],
     timeout: 1300,
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
sizesSupported: [[970, 250], [970, 90], [728, 90], [468, 60], [320, 50], [300, 600], [300, 250], [160, 600], [120, 600], [1, 1], [1800, 1000], [1600, 1050]],
labels: ['desktop']
}, {
mediaQuery: '(min-width: 500px) and (max-width: 768px)',
sizesSupported: [[728, 90], [468, 60], [320, 50], [300, 250], [1, 1]],
labels: ['tablet']
}, {
mediaQuery: '(min-width: 1px) and (max-width: 499px)',
sizesSupported: [[300, 250], [320, 50], [1, 1]],
labels: ['phone']
}]
		  
});  
      
pbjs.requestBids({
    bidsBackHandler: initAdserver
  });
});
 
function initAdserver() {
      if (pbjs.adserverRequestSent) return;
      pbjs.adserverRequestSent = true;
      googletag.cmd.push(function() {
        pbjs.que.push(function() {
          pbjs.setTargetingForGPTAsync();
          googletag.pubads().refresh();
        });
    });
}
    
setTimeout(function() { initAdserver(); }, PREBID_TIMEOUT);
  
  <!-- Prebid Boilerplate Section END -->
  
    
  
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
    	      topleaderSlot: {
    	        adUnitPath: '/1001824/prebid_test2',
    	        size: 'mappingleaderslot',
    	        sizeMapping: 'mappingleaderslot',
    	        timeout: 45000,
    	      },
    	      toprightSlot: {
    	        adUnitPath: '/1001824/prebid_test3',
    	        size: 'mappingbigboxslot',
    	        sizeMapping: 'mappingbigboxslot',
    	        timeout: 45000,
    	      },
    	      middlerightSlot: {
    	        adUnitPath: '/1001824/prebid_test1',
    	        size: 'mappingbigboxslot',
    	        sizeMapping: 'mappingbigboxslot',
    	        timeout: 45000,
    	      },
    	      bottomrightSlot: {
    	        adUnitPath: '/1001824/prebid_test4',
    	        size: 'mappingbigboxslot',
    	        sizeMapping: 'mappingbigboxslot',
    	        timeout: 45000,
    	      },
      	      inreedvidSlot: {
      	        adUnitPath: '/1001824/Golfwrx.com-HB/Golfwrx.com-HB-Vid-test',
      	        size: 'mappinginreedvidslot',
      	        sizeMapping: 'mappinginreedvidslot',
      	        timeout: 40000,
      	      },
      	      inreedvid1Slot: {
      	        adUnitPath: '/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test1',
      	        size: 'mappinginreedvidslot',
      	        sizeMapping: 'mappinginreedvidslot',
      	        timeout: 40000,
      	      },
      	      inreedvid2Slot: {
      	        adUnitPath: '/1001824/Golfwrx.com-HB/Golfwrx.comHb-Vid-test2',
      	        size: 'mappinginreedvidslot',
      	        sizeMapping: 'mappinginreedvidslot',
      	        timeout: 40000,
      	      },
      	      inreedvid3Slot: {
      	        adUnitPath: '/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test3',
      	        size: 'mappinginreedvidslot',
      	        sizeMapping: 'mappinginreedvidslot',
      	        timeout: 40000,
      	      },
      	      skinSlot: {
      	        adUnitPath: '/1001824/Golfwrx.com-HB/Golfwrx.com-HB-Skin',
      	        size: 'mappingskinslot',
      	        sizeMapping: 'mappingskinslot',
      	        timeout: 50000,
      	      },
    	    },
    	    sizeMappings: {
    	      mappingleaderslot: [
    	    	[[1024, 768],[[970, 250],[970, 90],[728, 90],[468, 60],[320, 50],[234, 60]]],
    	        [[768, 500],[[728, 90],[468, 60],[320, 50],[234, 60]]],
    	        [[1, 1],[[320, 50],[234, 60]]],
    	      ],
    	      mappingbigboxslot: [
    	        [[1024, 768],[[300, 600],[300, 250],[160, 600],[120, 600],[250, 250]]],
    	        [[768, 500],[[300, 250],[250, 250]]],
    	        [[1, 1],[[300, 250],[250, 250]]],
    	      ],
    	      mappinginreedvidslot: [
    	        [[1024, 768],[[728, 90],[300, 250]]],
    	        [[768, 500],[[728, 90],[300, 250]]],
    	        [[1, 1],[[300, 250],[320, 50]]],
    	      ],
	          mappingskinslot: [
  	            [[1024, 768],[[1, 1],[1800, 1000],[1600, 1050]]],
  	            [[768, 500],[[1, 1]]],
  	            [[1, 1],[[1, 1]]],
  	          ]
    	    }
    	  });
    	});
    
 // ASSERTIVE ANALYTICS - Version: 1.5.1
    var assertiveVersion="1.5",analyticsURL="https://api.assertcom.de",prefix="assertive_analytics_",sessionTimeoutLength=18e5,sessionUUIDKey=prefix.concat("sessionUUID"),sessionTimeoutKey=prefix.concat("sessionStart"),sessionRandomKey=prefix.concat("sessionRandom"),sessionUTMKey=prefix.concat("sessionUTM"),sessionReferrerKey=prefix.concat("sessionReferrer"),pageViewUUID=generateUUID(),impressionUUIDs=[],_assertive_analytics_data=[],assertive_debug=assertive_debug||localStorage.getItem("assertiveYield")&&-1!==localStorage.getItem("assertiveYield").indexOf("debug")||-1!==getQueryStringValue("assertiveYield").indexOf("debug");function updateSession(){if(!localStorage.getItem(sessionTimeoutKey)||Date.now()>localStorage.getItem(sessionTimeoutKey)){localStorage.setItem(sessionUUIDKey,generateUUID()),localStorage.setItem(sessionRandomKey,Math.random()),document.referrer?localStorage.setItem(sessionReferrerKey,document.referrer):localStorage.removeItem(sessionReferrerKey);var e=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],t={};for(i in e){var s=e[i],o=getQueryStringValue(s);""!==o&&(t[s]=o)}var n=JSON.stringify(t);n!==JSON.stringify({})?localStorage.setItem(sessionUTMKey,n):localStorage.removeItem(sessionUTMKey)}localStorage.setItem(sessionTimeoutKey,Date.now()+sessionTimeoutLength)}function generateUUID(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,generateUUID)}function getQueryStringValue(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function debugLog(e){assertive_debug&&console.log(e)}if(Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),s=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],o=0;o<s;){var n=t[o];if(e.call(i,n,o,t))return n;o++}},configurable:!0,writable:!0}),updateSession(),-1!==getQueryStringValue("assertiveYield").indexOf("check")&&alert("Assertive Yield: Check"),"undefined"==typeof assertive_sampleRate||assertive_sampleRate&&localStorage.getItem(sessionRandomKey)<assertive_sampleRate){var hoveredAdSlot=null;window.addEventListener("blur",function(){if(hoveredAdSlot){var e=new XMLHttpRequest,t=analyticsURL+"?event=click&entityId="+assertive_entityId+"&impressionUUID="+impressionUUIDs[hoveredAdSlot];e.open("GET",t,!0),e.send()}}),googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(e){var t=e.slot,s=t.getTargeting("hb_adid")[0],i=t.getSlotElementId();if(document.getElementById(i)){var o=document.getElementById(i).getElementsByTagName("iframe")[0];o.addEventListener("mouseover",function(){hoveredAdSlot=i}),o.addEventListener("touchstart",function(){hoveredAdSlot=i}),o.addEventListener("mouseout",function(){hoveredAdSlot=null}),o.addEventListener("touchend",function(){hoveredAdSlot=null});var n=pbjs.getBidResponsesForAdUnitCode(i).bids.find(function(e){return e.adId===s}),r=pbjs.getAllWinningBids().some(function(e){return e.adId===s});impressionUUIDs[i]=generateUUID(),debugLog("Session UUID: "+localStorage.getItem(sessionUUIDKey)+", PageView UUID: "+pageViewUUID+", Impression UUID: "+impressionUUIDs[i]),debugLog("Slot Id: "+i),n&&debugLog(" - Highest PreBid "+n.cpm+" from "+n.bidderCode+" with id "+s),n||debugLog(" - No PreBids!!!"),debugLog(" - Winner: "+(r?"prebid":"adsense")+" with size "+(r?n.width:e.size[0])+"x"+(r?n.height:e.size[1])),debugLog("---------------");var a={version:assertiveVersion,entityId:assertive_entityId,siteUUID:"undefined"!=typeof assertive_siteUUID?assertive_siteUUID:null,sessionUUID:localStorage.getItem(sessionUUIDKey),pageViewUUID:pageViewUUID,impressionUUID:impressionUUIDs[i],slotId:i,highestPreBid:n?n.cpm:0,highestPreBid_partner:n?n.bidderCode:"",creative_width:r?n.width:e.size[0],creative_height:r?n.height:e.size[1],preBidWon:r,timeToRespond:n?n.timeToRespond:null,protocol:window.location.protocol,host:window.location.host,pathname:window.location.pathname,pathname_split:window.location.pathname.split("/").filter(function(e){return e}),referrer:localStorage.getItem(sessionReferrerKey),utm:localStorage.getItem(sessionUTMKey),prebid_timeout:assertive_timeout,userState:assertive_userState,layout:assertive_layout};_assertive_analytics_data.push(a);var d=new XMLHttpRequest;d.open("POST",analyticsURL,!0),d.setRequestHeader("Content-Type","text/plain"),d.send(JSON.stringify(a)),debugLog("SENT!!!")}}),googletag.pubads().addEventListener("impressionViewable",function(e){var t=e.slot.getSlotElementId(),s=new XMLHttpRequest,i=analyticsURL+"?event=activeView&entityId="+assertive_entityId+"&impressionUUID="+impressionUUIDs[t];s.open("GET",i,!0),s.send()})})}
    
