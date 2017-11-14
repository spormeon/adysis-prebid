<script>
  function PPObjectIndented(obj, indent) {
   try { console.log("PrettyPrint Object Function Called...");} catch (e) { }
   if (Object.keys(obj).length === 0 && obj.constructor === Object) return "{}: empty object returned...";
   var result = "";
   if (indent == null) { indent = ""; }
   for (var property in obj) {
     var value = obj[property];
     if (typeof value == 'string') { value = "'" + value + "'"; }
     else if (typeof value == 'object') {
       if (value instanceof Array) { value = "[ " + value + " ]"; }
       else {
         var od = PPObjectIndented(value, indent + "  ");
         value = "\n<br/>" + indent + "{\n<br/>" + od + "\n" + indent + "}";   // If you prefer { and } to be aligned
       }
     }
     result += indent + "'" + property + "' : " + value + ",\n<br/>";
   }
   return result.replace(/,\n$/, "");
 }
</script>
<!-- Prebid Config Section START -->
<!-- Make sure this is inserted before your GPT tag -->
<script>
  
  var PREBID_TIMEOUT = 1500;
     
  var gpt_config = {
    prebid_timeout: 1000, //left for reference but not using right now...
    default_gbp_rate: 0.77, // not being used
    latest_gbp_rate: 0.77414, //RATE AS AT 30-08-2017 , not being used, using newRate from the function
    dynamically_lookup_gbp_rate: true,
    mobileWidthBreakpoint: 640,
    tabletWidthBreakpoint: 767,
    bigbox_sizes: [[300, 600], [300, 250], [160, 600], [120, 600]],
    bigbox_sizes_tablet: [[300, 250]],
    bigbox_sizes_mobile: [[300, 250]],
    leaderboard_sizes: [[970, 250],[970, 90],[728, 90]],
    leaderboard_sizes_tablet: [[728, 90]],
    leaderboard_sizes_mobile: [[320, 50]]
  }; //./gpt_config
 
  var adUnits = [
  //new ad unit block
  {
    code: 'div-gpt-ad-1503571938435-0',  // first right hand side 300x600 
    sizes: gpt_config.bigbox_sizes,
    sizeMapping: [  //new!
      { minWidth : 1024, sizes : [[300, 600], [300, 250], [160, 600], [120, 600]] },   //if device screen width is greater than 1024, use these sizes//
      { minWidth : 480, sizes : [[300, 250]] },  //if device screen width is < 1024 && > 480, use these sizes//
      { minWidth : 0, sizes : [[300, 250]] }  //if device screen width is < 480 && > 0, use these sizes//
             ],
    bids: [
      { bidder: 'aol',          params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
      { bidder: 'aol',          params: { placement: '4882888', network: '4436.1', server: 'adserver.adtech.de' } }, /* 160x600 */
      { bidder: 'aol',          params: { placement: '5293857', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x600 */
      { bidder: 'aol',          params: { placement: '6507339', network: '4436.1', server: 'adserver.adtech.de' } }, /* 120x600 */
      /* { bidder: 'atomx',        params: { id: '3808201'} }, */  /* does all sizes, not working at moment */ 
      { bidder: 'brealtime',    params: { placementId: '12002334' } },  /* 300x600 */
      { bidder: 'brealtime',    params: { placementId: '12002335' } },  /* 300x250 */ 
      { bidder: 'brealtime',    params: { placementId: '12002336' } },  /* 160x600 */ 
      { bidder: 'brealtime',    params: { placementId: '12002337' } },  /* 120x600 */
      { bidder: 'districtmDMX', params: { id:171413 } }, /* 300x600 - 300x250 - 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X600', cp: 561446, ct: 602638 } }, /* 300x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X250', cp: 561446, ct: 602639 } }, /* 300x250 */
      { bidder: 'pulsepoint',   params: { cf: '160X600', cp: 561446, ct: 602640 } }, /* 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '120X600', cp: 561446, ct: 602641 } }, /* 120x600 */
      { bidder: 'sekindoapn',   params: { placementId: '11968755' } }, /* 300x600 */  
      { bidder: 'sekindoapn',   params: { placementId: '11968756' } }, /* 300x250 */ 
      { bidder: 'sekindoapn',   params: { placementId: '11968757' } }, /* 160x600 */
      { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test1', dom_id: 'div-gpt-ad-1503393253852-0', floor: 0.0 } },  /* does all sizes, different sort of setup */
      { bidder: 'sovrn',        params: { tagid: '504166' } }, /* 300x600 */
      { bidder: 'sovrn',        params: { tagid: '504164' } }, /* 300x250 */
      { bidder: 'sovrn',        params: { tagid: '504163' } }, /* 160x600 */
      { bidder: 'sovrn',        params: { tagid: '504169' } }, /* 120x600 */
      { bidder: 'huddledmasses',params: { placement_id: 6544 } },  /* 300x250 */
      { bidder: 'huddledmasses',params: { placement_id: 6546 } },  /* 160x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: 'be3564ac269d63fb992e3b2554e06ada' } },  /* Golfwrx.com _KB 300x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '3ef8c7500669dc363bec56f1e5a393f7' } },  /* Golfwrx.com _KB 160x600 */
      { bidder: 'smartyads',    params: { banner_id: 6368 } }, /* 300x250 */
      { bidder: 'smartyads',    params: { banner_id: 6383 } }, /* 160x600 */
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-F839907VGB86E1'} }, /*300x600*/ 
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-M568254V344777'} }, /*300x250*/
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-I951082VE249HH'} }, /*160x600*/
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-P511170V2009D9'} }  /*120x250*/
    ] //./bids
  },
  //new ad unit block
  {
    code: 'div-gpt-ad-1503571938435-2', //second right hand side 300x600
    sizes: gpt_config.bigbox_sizes,
    sizeMapping: [  //new!
      { minWidth : 1024, sizes : [[300, 600], [300, 250], [160, 600], [120, 600]] },   //if device screen width is greater than 1024, use these sizes//
      { minWidth : 480, sizes : [[300, 250]] },  //if device screen width is < 1024 && > 480, use these sizes//
      { minWidth : 0, sizes : [[300, 250]] }  //if device screen width is < 480 && > 0, use these sizes//
             ],
    bids: [
      { bidder: 'aol',          params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
      { bidder: 'aol',          params: { placement: '4882888', network: '4436.1', server: 'adserver.adtech.de' } }, /* 160x600 */
      { bidder: 'aol',          params: { placement: '5293857', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x600 */
      { bidder: 'aol',          params: { placement: '6507339', network: '4436.1', server: 'adserver.adtech.de' } }, /* 120x600 */
      /* { bidder: 'atomx',        params: { id: '3808201'} }, */ /* does all sizes, not working at moment */
      { bidder: 'brealtime',    params: { placementId: '12002334' } },  /* 300x600 */
      { bidder: 'brealtime',    params: { placementId: '12002335' } },  /* 300x250 */ 
      { bidder: 'brealtime',    params: { placementId: '12002336' } },  /* 160x600 */ 
      { bidder: 'brealtime',    params: { placementId: '12002337' } },  /* 120x600 */
      { bidder: 'districtmDMX', params: { id:171413 } }, /* 300x600 - 300x250 - 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X600', cp: 561446, ct: 602638 } }, /* 300x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X250', cp: 561446, ct: 602639 } }, /* 300x250 */
      { bidder: 'pulsepoint',   params: { cf: '160X600', cp: 561446, ct: 602640 } }, /* 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '120X600', cp: 561446, ct: 602641 } }, /* 120x600 */
      { bidder: 'sekindoapn',   params: { placementId: '11968755' } }, /* 300x600 */  
      { bidder: 'sekindoapn',   params: { placementId: '11968756' } }, /* 300x250 */ 
      { bidder: 'sekindoapn',   params: { placementId: '11968757' } }, /* 160x600 */
      { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test1', dom_id: 'div-gpt-ad-1503393253852-0', floor: 0.0 } },  /* does all sizes, different sort of setup */
      { bidder: 'sovrn',        params: { tagid: '504166' } }, /* 300x600 */
      { bidder: 'sovrn',        params: { tagid: '504164' } }, /* 300x250 */
      { bidder: 'sovrn',        params: { tagid: '504163' } }, /* 160x600 */
      { bidder: 'sovrn',        params: { tagid: '504169' } }, /* 120x600 */
      { bidder: 'huddledmasses',params: { placement_id: 6544 } },  /* 300x250 */
      { bidder: 'huddledmasses',params: { placement_id: 6546 } },  /* 160x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: 'be3564ac269d63fb992e3b2554e06ada' } },  /* Golfwrx.com _KB 300x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '3ef8c7500669dc363bec56f1e5a393f7' } },  /* Golfwrx.com _KB 160x600 */
      { bidder: 'smartyads',    params: { banner_id: 6368 } }, /* 300x250 */
      { bidder: 'smartyads',    params: { banner_id: 6383 } }, /* 160x600 */
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-F839907VGB86E1'} }, /*300x600*/ 
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-M568254V344777'} }, /*300x250*/
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-I951082VE249HH'} }, /*160x600*/
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-P511170V2009D9'} }  /*120x250*/
    ] //./bids
  },
  //new ad unit block
  {
    code: 'div-gpt-ad-1503571938435-3',  // first left hand side 300x600
    sizes: gpt_config.bigbox_sizes,
    sizeMapping: [  //new!
      { minWidth : 1024, sizes : [[300, 600], [300, 250], [160, 600], [120, 600]] },   //if device screen width is greater than 1024, use these sizes//
      { minWidth : 480, sizes : [[300, 250]] },  //if device screen width is < 1024 && > 480, use these sizes//
      { minWidth : 0, sizes : [[300, 250]] }  //if device screen width is < 480 && > 0, use these sizes//
             ],
    bids: [
      { bidder: 'aol',          params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
      { bidder: 'aol',          params: { placement: '4882888', network: '4436.1', server: 'adserver.adtech.de' } }, /* 160x600 */
      { bidder: 'aol',          params: { placement: '5293857', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x600 */
      { bidder: 'aol',          params: { placement: '6507339', network: '4436.1', server: 'adserver.adtech.de' } }, /* 120x600 */
      /* { bidder: 'atomx',        params: { id: '3808201'} }, */ /* does all sizes, not working at moment */
      { bidder: 'brealtime',    params: { placementId: '12002334' } },  /* 300x600 */
      { bidder: 'brealtime',    params: { placementId: '12002335' } },  /* 300x250 */ 
      { bidder: 'brealtime',    params: { placementId: '12002336' } },  /* 160x600 */ 
      { bidder: 'brealtime',    params: { placementId: '12002337' } },  /* 120x600 */
      { bidder: 'districtmDMX', params: { id:171413 } }, /* 300x600 - 300x250 - 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X600', cp: 561446, ct: 602638 } }, /* 300x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X250', cp: 561446, ct: 602639 } }, /* 300x250 */
      { bidder: 'pulsepoint',   params: { cf: '160X600', cp: 561446, ct: 602640 } }, /* 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '120X600', cp: 561446, ct: 602641 } }, /* 120x600 */
      { bidder: 'sekindoapn',   params: { placementId: '11968755' } }, /* 300x600 */  
      { bidder: 'sekindoapn',   params: { placementId: '11968756' } }, /* 300x250 */ 
      { bidder: 'sekindoapn',   params: { placementId: '11968757' } }, /* 160x600 */
      { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test1', dom_id: 'div-gpt-ad-1503393253852-0', floor: 0.0 } },  /* does all sizes, different sort of setup */
      { bidder: 'sovrn',        params: { tagid: '504166' } }, /* 300x600 */
      { bidder: 'sovrn',        params: { tagid: '504164' } }, /* 300x250 */
      { bidder: 'sovrn',        params: { tagid: '504163' } }, /* 160x600 */
      { bidder: 'sovrn',        params: { tagid: '504169' } }, /* 120x600 */
      { bidder: 'huddledmasses',params: { placement_id: 6544 } },  /* 300x250 */
      { bidder: 'huddledmasses',params: { placement_id: 6546 } },  /* 160x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: 'be3564ac269d63fb992e3b2554e06ada' } },  /* Golfwrx.com _KB 300x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '3ef8c7500669dc363bec56f1e5a393f7' } },  /* Golfwrx.com _KB 160x600 */
      { bidder: 'smartyads',    params: { banner_id: 6368 } }, /* 300x250 */
      { bidder: 'smartyads',    params: { banner_id: 6383 } }, /* 160x600 */
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-F839907VGB86E1'} }, /*300x600*/ 
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-M568254V344777'} }, /*300x250*/
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-I951082VE249HH'} }, /*160x600*/
      { bidder: 'vertoz',       params: { placementId: 'VZ-HB-P511170V2009D9'} }  /*120x250*/
    ] //./bids
  },
  //new ad unit block
  {
    code: 'div-gpt-ad-1503571938435-1',
    sizes: gpt_config.leaderboard_sizes,
    sizeMapping: [  //new!
      { minWidth : 1024, sizes : [[970, 250], [970, 90], [728, 90]] }, //if device screen width is greater than 1024, use these sizes
      { minWidth : 480, sizes : [[728, 90]] }, //if device screen width is < 1024 && > 480, use these sizes
      { minWidth : 0, sizes : [[320, 50]] } //if device screen width is < 480 && > 0, use these sizes              
             ],
    bids: [
      { bidder: 'aol',          params: { placement: '4882887', network: '4436.1', server: 'adserver.adtech.de' } }, /* 728x90 */
      { bidder: 'aol',          params: { placement: '6507337', network: '4436.1', server: 'adserver.adtech.de' } }, /* 970x250 */
      { bidder: 'aol',          params: { placement: '6507338', network: '4436.1', server: 'adserver.adtech.de' } }, /* 970x90 */
      { bidder: 'aol',          params: { placement: '6507341', network: '4436.1', server: 'adserver.adtech.de' } }, /* 468x60 */
      { bidder: 'aol',          params: { placement: '6507340', network: '4436.1', server: 'adserver.adtech.de' } }, /* 320x50 */
      /* { bidder: 'atomx',        params: { id: '3808200'} }, */ /* does all sizes, not working at moment */
      { bidder: 'brealtime',    params: { placementId: '12002322' } },  /* 970x250 */
      { bidder: 'brealtime',    params: { placementId: '12002329' } },  /* 970x90 */
      { bidder: 'brealtime',    params: { placementId: '12002330' } },  /* 728x90 */
      { bidder: 'brealtime',    params: { placementId: '12002331' } },  /* 468x60 */
      { bidder: 'brealtime',    params: { placementId: '12002333' } },  /* 320x50 */
      { bidder: 'districtmDMX', params: { id: 171412 } }, /* 970x250 - 970x90 - 728x90 - 468x60 */
      { bidder: 'pulsepoint',   params: { cf: '970X250', cp: 561446, ct: 602634 } },
      { bidder: 'pulsepoint',   params: { cf: '970X90', cp: 561446, ct: 602642 } },
      { bidder: 'pulsepoint',   params: { cf: '728X90', cp: 561446, ct: 602643 } },
      { bidder: 'pulsepoint',   params: { cf: '320X50', cp: 561446, ct: 602644 } },
      { bidder: 'sekindoapn',   params: { placementId: '11968754' } }, /* 970x250 */
      { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test2', dom_id: 'div-gpt-ad-1503393253852-1', floor: 0.5 } },  /* does all sizes, different sort of setup */ 
      { bidder: 'sovrn',        params: { tagid: '504162' } }, /* 970x250 */
      { bidder: 'sovrn',        params: { tagid: '504165' } }, /* 728x90 */
      { bidder: 'huddledmasses',params: { placement_id: 6545 } },  /* 728x90 */
      { bidder: 'smartyads',    params: { banner_id: 6379 } }, /*728x90*/
      { bidder: 'vertoz',       params: { placementId:'VZ-HB-Y968967V15GC66'} }, /* 970x250 */
      { bidder: 'vertoz',       params: { placementId:'VZ-HB-P786728VDF5C56'} } /*7 28x90 */
    ] //./bids
  }
  ]; //./adUnits
    
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];

  // get latest currency exchange rate GBP to USD 
  function getGBPRate(callback) {
    var currencyUrl = "https://api.fixer.io/latest?base=USD";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        newRate = JSON.parse(xhr.responseText).rates.GBP;
        callback(newRate);
      }
    };
    xhr.open("GET", currencyUrl, true);
    xhr.send(null);
  }

  var pbjs = pbjs || {};
  pbjs.que = pbjs.que || [];
            
  //load up prebid.js,  I think we need to load this earlier
  (function() {
      var pbjsEl = document.createElement("script");
      pbjsEl.type = "text/javascript";
      pbjsEl.async = true;
      pbjsEl.src = "https://d3s34vlfe7g7ew.cloudfront.net/prebid_20170821225746.js";
      var pbjsTargetEl = document.getElementsByTagName("head")[0];
      pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
  })();

  getGBPRate(function(newRate) {
    gpt_config.latest_gbp_rate = newRate;
    console.log('Latest GBP Rate updated: ', gpt_config.latest_gbp_rate);
  });
</script>
<!-- Prebid Boilerplate Section START. No Need to Edit. -->
<script>
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function() {
      googletag.pubads().disableInitialLoad();
    });

    pbjs.que.push(function() {
      pbjs.aliasBidder('appnexus','sekindoapn');  // alias for bidder
      pbjs.aliasBidder('appnexus','brealtime');   // alias for bidder
      // pbjs.setPriceGranularity("high");   // not being used, being done in adserver targeting below, this needs to be tweaked once prices seen more
      pbjs.addAdUnits(adUnits);
      pbjs.requestBids({
        bidsBackHandler: initAdserver
      });
    });
            
      pbjs.bidderSettings = { 
           aol:         { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.85; } }, // adjust the bid in real time before the auction takes place
           districtDMX: { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.90; } }, // adjust the bid in real time before the auction takes place
           sekindonapn: { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.75; } }, // adjust the bid in real time before the auction takes place
           brealtime:   { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.80; } }, // adjust the bid in real time before the auction takes place
            
           standard: {
              adserverTargeting: [
              { key: "hb_bidder", val: function(bidResponse) { return bidResponse.bidderCode; } }, 
              { key: "hb_adid",   val: function(bidResponse) { return bidResponse.adId; } }, 
              { key: "hb_size",   val: function(bidResponse) { return bidResponse.size; } },         
              { key: "hb_nowin",  val: function(bidResponse) { return 'no_win'; } }, 
              { key: "hb_pb",     val: function(bidResponse) { var cpm = bidResponse.cpm * (gpt_config.latest_gbp_rate || gpt_config.default_gbp_rate);  //converts cpm to GBP, rounds cpm to nearest 0.10 incriment, sets 20 if above 20
                    if (cpm <20) { return (Math.floor(cpm * 10) / 10).toFixed(2);} else { return '20.00'; } }
              }]
            }
          };
          
          function initAdserver() {
      if (pbjs.adserverRequestSent) return;
      pbjs.adserverRequestSent = true;
      googletag.cmd.push(function() {
        pbjs.que.push(function() {
            
          //./pbjs.bidderSettings

          pbjs.setTargetingForGPTAsync();
          googletag.pubads().refresh();

          // development output of targeting params - 2DO: remove prior to production deployment
          var targetingParams = pbjs.getAdserverTargeting();
          var paramsOutput = PPObjectIndented(targetingParams, "  ");
          var container = document.getElementById('targeting_info');
          container.innerHTML = paramsOutput;
          // container.innerHTML = JSON.stringify(targetingParams);
        });
      });
    }
    
    setTimeout(function() { initAdserver(); }, PREBID_TIMEOUT);
  </script>
  <!-- Prebid Boilerplate Section END -->
  <script>
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
  </script>
  <script>
  googletag.cmd.push(function() {
    googletag.defineSlot('/1001824/prebid_test1', [[300, 600],[300, 250],[160, 600],[120, 600]], 'div-gpt-ad-1503571938435-0').addService(googletag.pubads());
    googletag.defineSlot('/1001824/prebid_test2', [[970, 250],[970, 90],[728, 90]], 'div-gpt-ad-1503571938435-1').addService(googletag.pubads());
    googletag.defineSlot('/1001824/prebid_test3', [[300, 600],[300, 250],[160, 600],[120, 600]], 'div-gpt-ad-1503571938435-2').addService(googletag.pubads());
    googletag.defineSlot('/1001824/prebid_test4', [[300, 600],[300, 250],[160, 600],[120, 600]], 'div-gpt-ad-1503571938435-3').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
</script>
