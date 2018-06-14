  //load up prebid.js,  I think we need to load this earlier
  (function() {
      var pbjsEl = document.createElement("script");
      pbjsEl.type = "text/javascript";
      pbjsEl.async = true;
      pbjsEl.src = "//d3s34vlfe7g7ew.cloudfront.net/prebid114.js";
      var pbjsTargetEl = document.getElementsByTagName("head")[0];
      pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
  })();

<!-- Prebid Config Section START -->

  var PREBID_TIMEOUT = 2500;
     
  var gpt_config = {
    prebid_timeout: 3000, //left for reference but not using right now...
    default_gbp_rate: 0.77, // not being used
    latest_gbp_rate: 0.77414, //RATE AS AT 30-08-2017 , not being used, using newRate from the function
    dynamically_lookup_gbp_rate: true,
    mobileWidthBreakpoint: 640,
    tabletWidthBreakpoint: 767,
    bigbox_sizes: [[300, 600], [300, 250], [160, 600], [120, 600],[250,250]],
    bigbox_sizes_tablet: [[300, 250],[250,250]],
    bigbox_sizes_mobile: [[300, 250],[250,250]],
    leaderboard_sizes: [[970, 250],[970, 90],[728, 90],[468,60],[320, 50],[234,60]],
    leaderboard_sizes_tablet: [[728, 90],[468,60],[320, 50],[234,60]],
    leaderboard_sizes_mobile: [[320, 50],[234,60]]
  }; //./gpt_config
 
  var adUnits = [
  //new ad unit block
  {
    code: 'bottomrightSlot',  // first right hand side 300x600 
    sizes: gpt_config.bigbox_sizes,
    sizeMapping: [  //new!
      { minWidth : 1024, sizes : gpt_config.bigbox_sizes },   //if device screen width is greater than 1024, use these sizes//
      { minWidth : 480, sizes : gpt_config.bigbox_sizes_tablet },  //if device screen width is < 1024 && > 480, use these sizes//
      { minWidth : 0, sizes : gpt_config.bigbox_sizes_mobile }  //if device screen width is < 480 && > 0, use these sizes//
             ],
    bids: [
      { bidder: 'aol',          params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
      { bidder: 'aol',          params: { placement: '4882888', network: '4436.1', server: 'adserver.adtech.de' } }, /* 160x600 */
      { bidder: 'aol',          params: { placement: '5293857', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x600 */
      { bidder: 'aol',          params: { placement: '6507339', network: '4436.1', server: 'adserver.adtech.de' } }, /* 120x600 */
      /* { bidder: 'atomx',        params: { id: '3808201'} }, */  /* does all sizes, not working at moment */ 
      /* { bidder: 'featureforward', params: {pubId:28, siteId:6, placementId: '1' }}, */
      /* { bidder: 'switch',       params: { adUnitID: 6632, domain:'delivery.h.switchadhub.com' } }, */ /* 160x600, 120x600, 300x600, 300x250, 300x50 */
      { bidder: 'appnexus',     params: { placementId: '11971351' } }, /* one placementId for all sizes */
      { bidder: 'rhythmone',    params: { placementId: '76184' } }, /* one placementId for all sizes */
      { bidder: 'brealtime',    params: { placementId: '12002334' } },  /* 300x600 */
      { bidder: 'brealtime',    params: { placementId: '12002335' } },  /* 300x250 */ 
      { bidder: 'brealtime',    params: { placementId: '12002336' } },  /* 160x600 */ 
      { bidder: 'brealtime',    params: { placementId: '12002337' } },  /* 120x600 */
      { bidder: 'conversant',   params: { site_id: '118233' } },  /* 300x250 */ 
      { bidder: 'districtmDMX', params: { id:171413 } }, /* 300x600 - 300x250 - 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X600', cp: 561446, ct: 602638 } }, /* 300x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X250', cp: 561446, ct: 602639 } }, /* 300x250 */
      { bidder: 'pulsepoint',   params: { cf: '160X600', cp: 561446, ct: 602640 } }, /* 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '120X600', cp: 561446, ct: 602641 } }, /* 120x600 */
      { bidder: 'sekindoUM',    params: { spaceId: '87709' } }, /* 300x250 */ 
      { bidder: 'sekindoUM',    params: { spaceId: '87692' } }, /* 300x600 */
      { bidder: 'sekindoUM',    params: { spaceId: '87694' } }, /* 160x600 */
      /* { bidder: 'sekindoapn',   params: { placementId: '11968756' } }, */ /* 300x250 */ 
      /* { bidder: 'sekindoapn',   params: { placementId: '11968757' } }, */ /* 160x600 */
      /* { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test1', dom_id: 'div-gpt-ad-1503393253852-0', floor: 0.0 } },  */ /* does all sizes, different sort of setup */
      { bidder: 'sovrn',        params: { tagid: '504166' } }, /* 300x600 */
      { bidder: 'sovrn',        params: { tagid: '504164' } }, /* 300x250 */
      { bidder: 'sovrn',        params: { tagid: '504163' } }, /* 160x600 */
      { bidder: 'sovrn',        params: { tagid: '504169' } }, /* 120x600 */
      /* { bidder: 'huddledmasses',params: { placement_id: 6544 } }, */ /* 300x250 */
      /* { bidder: 'huddledmasses',params: { placement_id: 6546 } }, */ /* 160x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: 'be3564ac269d63fb992e3b2554e06ada' } }, /* Golfwrx.com _KB 300x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } }, /* Golfwrx.com _KB 300x250 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '3ef8c7500669dc363bec56f1e5a393f7' } }  /* Golfwrx.com _KB 160x600 */
      /* { bidder: 'smartyads',    params: { banner_id: 6368 } }, */ /* 300x250 */
      /* { bidder: 'smartyads',    params: { banner_id: 6383 } }, */ /* 160x600 */
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-F839907VGB86E1'} }, */ /*300x600*/ 
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-M568254V344777'} }, */ /*300x250*/
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-I951082VE249HH'} }, */ /*160x600*/
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-P511170V2009D9'} }, */ /*120x250*/
      /* { bidder: 'springserveAlias2',     params: { placementId: '12463797'} }  *//* 300x600 - 300x250 - 160x600 - 120x600 */
    ] //./bids
  },
  //new ad unit block
  {
    code: 'middlerightSlot', //second right hand side 300x600
    sizes: gpt_config.bigbox_sizes,
    sizeMapping: [  //new!
      { minWidth : 1024, sizes : gpt_config.bigbox_sizes },   //if device screen width is greater than 1024, use these sizes//
      { minWidth : 480, sizes : gpt_config.bigbox_sizes_tablet },  //if device screen width is < 1024 && > 480, use these sizes//
      { minWidth : 0, sizes : gpt_config.bigbox_sizes_mobile }  //if device screen width is < 480 && > 0, use these sizes//
             ],
    bids: [
      { bidder: 'aol',          params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
      { bidder: 'aol',          params: { placement: '4882888', network: '4436.1', server: 'adserver.adtech.de' } }, /* 160x600 */
      { bidder: 'aol',          params: { placement: '5293857', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x600 */
      { bidder: 'aol',          params: { placement: '6507339', network: '4436.1', server: 'adserver.adtech.de' } }, /* 120x600 */
      /* { bidder: 'atomx',        params: { id: '3808201'} }, */ /* does all sizes, not working at moment */
      /* { bidder: 'featureforward', params: {pubId:28, siteId:6, placementId: '2' }}, */
      /* { bidder: 'switch',       params: { adUnitID: 6632, domain:'delivery.h.switchadhub.com' } }, */ /* 160x600, 120x600, 300x600, 300x250, 300x50 */
      { bidder: 'appnexus',     params: { placementId: '11971351' } }, /* one placementId for all sizes */
      { bidder: 'rhythmone',    params: { placementId: '76184' } }, /* one placementId for all sizes */
      { bidder: 'brealtime',    params: { placementId: '12002334' } },  /* 300x600 */
      { bidder: 'brealtime',    params: { placementId: '12002335' } },  /* 300x250 */ 
      { bidder: 'brealtime',    params: { placementId: '12002336' } },  /* 160x600 */ 
      { bidder: 'brealtime',    params: { placementId: '12002337' } },  /* 120x600 */
      { bidder: 'conversant',   params: { site_id: '118233' } },  /* 300x250 */ 
      { bidder: 'districtmDMX', params: { id:171413 } }, /* 300x600 - 300x250 - 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X600', cp: 561446, ct: 602638 } }, /* 300x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X250', cp: 561446, ct: 602639 } }, /* 300x250 */
      { bidder: 'pulsepoint',   params: { cf: '160X600', cp: 561446, ct: 602640 } }, /* 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '120X600', cp: 561446, ct: 602641 } }, /* 120x600 */
      { bidder: 'sekindoUM',    params: { spaceId: '87709' } }, /* 300x250 */ 
      { bidder: 'sekindoUM',    params: { spaceId: '87692' } }, /* 300x600 */
      { bidder: 'sekindoUM',    params: { spaceId: '87694' } }, /* 160x600 */
      /*{ bidder: 'sekindoapn',   params: { placementId: '11968755' } }, */ /* 300x600 */  
      /* { bidder: 'sekindoapn',   params: { placementId: '11968756' } }, */ /* 300x250 */ 
      /* { bidder: 'sekindoapn',   params: { placementId: '11968757' } }, */ /* 160x600 */
      /* { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test1', dom_id: 'div-gpt-ad-1503393253852-0', floor: 0.0 } },  */ /* does all sizes, different sort of setup */
      { bidder: 'sovrn',        params: { tagid: '504166' } }, /* 300x600 */
      { bidder: 'sovrn',        params: { tagid: '504164' } }, /* 300x250 */
      { bidder: 'sovrn',        params: { tagid: '504163' } }, /* 160x600 */
      { bidder: 'sovrn',        params: { tagid: '504169' } }, /* 120x600 */
      /* { bidder: 'huddledmasses',params: { placement_id: 6544 } },  */ /* 300x250 */
      /* { bidder: 'huddledmasses',params: { placement_id: 6546 } },  */ /* 160x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: 'be3564ac269d63fb992e3b2554e06ada' } },  /* Golfwrx.com _KB 300x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '3ef8c7500669dc363bec56f1e5a393f7' } }   /* Golfwrx.com _KB 160x600 */
      /* { bidder: 'smartyads',    params: { banner_id: 6368 } }, */ /* 300x250 */
      /* { bidder: 'smartyads',    params: { banner_id: 6383 } }, */ /* 160x600 */
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-F839907VGB86E1'} }, */ /*300x600*/ 
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-M568254V344777'} }, */ /*300x250*/
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-I951082VE249HH'} }, */ /*160x600*/
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-P511170V2009D9'} }, */ /*120x250*/
      /* { bidder: 'springserveAlias2',  params: { placementId: '12463797'} }  */ /* 300x600 - 300x250 - 160x600 - 120x600 */
    ] //./bids
  },
  //new ad unit block
  {
    code: 'bottomleftSlot',  // first left hand side 300x600
    sizes: gpt_config.bigbox_sizes,
    sizeMapping: [  //new!
      { minWidth : 1024, sizes : gpt_config.bigbox_sizes },   //if device screen width is greater than 1024, use these sizes//
      { minWidth : 480, sizes : gpt_config.bigbox_sizes_tablet },  //if device screen width is < 1024 && > 480, use these sizes//
      { minWidth : 0, sizes : gpt_config.bigbox_sizes_mobile }  //if device screen width is < 480 && > 0, use these sizes//
             ],
    bids: [
      { bidder: 'aol',          params: { placement: '4882886', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x250 */ 
      { bidder: 'aol',          params: { placement: '4882888', network: '4436.1', server: 'adserver.adtech.de' } }, /* 160x600 */
      { bidder: 'aol',          params: { placement: '5293857', network: '4436.1', server: 'adserver.adtech.de' } }, /* 300x600 */
      { bidder: 'aol',          params: { placement: '6507339', network: '4436.1', server: 'adserver.adtech.de' } }, /* 120x600 */
      /* { bidder: 'atomx',        params: { id: '3808201'} }, */ /* does all sizes, not working at moment */
      /* { bidder: 'featureforward', params: {pubId:28, siteId:6, placementId: '3' }}, */
      /* { bidder: 'switch',       params: { adUnitID: 6632, domain:'delivery.h.switchadhub.com' } }, */ /* 160x600, 120x600, 300x600, 300x250, 300x50 */
      { bidder: 'appnexus',     params: { placementId: '11971351' } }, /* one placementId for all sizes */
      { bidder: 'rhythmone',    params: { placementId: '76184' } }, /* one placementId for all sizes */
      { bidder: 'brealtime',    params: { placementId: '12002334' } },  /* 300x600 */
      { bidder: 'brealtime',    params: { placementId: '12002335' } },  /* 300x250 */ 
      { bidder: 'brealtime',    params: { placementId: '12002336' } },  /* 160x600 */ 
      { bidder: 'brealtime',    params: { placementId: '12002337' } },  /* 120x600 */
      { bidder: 'conversant',   params: { site_id: '118233' } },  /* 300x250 */ 
      { bidder: 'districtmDMX', params: { id:171413 } }, /* 300x600 - 300x250 - 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X600', cp: 561446, ct: 602638 } }, /* 300x600 */
      { bidder: 'pulsepoint',   params: { cf: '300X250', cp: 561446, ct: 602639 } }, /* 300x250 */
      { bidder: 'pulsepoint',   params: { cf: '160X600', cp: 561446, ct: 602640 } }, /* 160x600 */
      { bidder: 'pulsepoint',   params: { cf: '120X600', cp: 561446, ct: 602641 } }, /* 120x600 */
      { bidder: 'sekindoUM',    params: { spaceId: '87709' } }, /* 300x250 */ 
      { bidder: 'sekindoUM',    params: { spaceId: '87692' } }, /* 300x600 */
      { bidder: 'sekindoUM',    params: { spaceId: '87694' } }, /* 160x600 */
      /* { bidder: 'sekindoapn',   params: { placementId: '11968755' } },*/ /* 300x600 */  
      /* { bidder: 'sekindoapn',   params: { placementId: '11968756' } }, */ /* 300x250 */ 
      /* { bidder: 'sekindoapn',   params: { placementId: '11968757' } }, */ /* 160x600 */
      /* { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test1', dom_id: 'div-gpt-ad-1503393253852-0', floor: 0.0 } },  */ /* does all sizes, different sort of setup */
      { bidder: 'sovrn',        params: { tagid: '504166' } }, /* 300x600 */
      { bidder: 'sovrn',        params: { tagid: '504164' } }, /* 300x250 */
      { bidder: 'sovrn',        params: { tagid: '504163' } }, /* 160x600 */
      { bidder: 'sovrn',        params: { tagid: '504169' } }, /* 120x600 */
      /* { bidder: 'huddledmasses',params: { placement_id: 6544 } },  */ /* 300x250 */
      /* { bidder: 'huddledmasses',params: { placement_id: 6546 } },  */ /* 160x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: 'be3564ac269d63fb992e3b2554e06ada' } },  /* Golfwrx.com _KB 300x600 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } }, /* Golfwrx.com _KB 300x250 */
      { bidder: 'komoona',      params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '3ef8c7500669dc363bec56f1e5a393f7' } }  /* Golfwrx.com _KB 160x600 */
      /* { bidder: 'smartyads',    params: { banner_id: 6368 } }, */ /* 300x250 */
      /* { bidder: 'smartyads',    params: { banner_id: 6383 } }, */ /* 160x600 */
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-F839907VGB86E1'} }, */ /*300x600*/ 
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-M568254V344777'} }, */ /*300x250*/
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-I951082VE249HH'} }, */ /*160x600*/
      /* { bidder: 'vertoz',       params: { placementId: 'VZ-HB-P511170V2009D9'} }, */ /*120x250*/
      /* { bidder: 'springserveAlias2',  params: { placementId: '12463797'} }  */ /* 300x600 - 300x250 - 160x600 - 120x600 */
    ] //./bids
  },
  //new ad unit block
  {
    code: 'topSlot',
    sizes: gpt_config.leaderboard_sizes,
    bids: [
      { bidder: 'aol',    labelAny: ['desktop', 'tablet'],      params: { placement: '4882887', network: '4436.1', server: 'adserver.adtech.de' } }, /* 728x90 */
      { bidder: 'aol',    labelAny: ['desktop'],      params: { placement: '6507337', network: '4436.1', server: 'adserver.adtech.de' } }, /* 970x250 */
      { bidder: 'aol',    labelAny: ['desktop'],      params: { placement: '6507338', network: '4436.1', server: 'adserver.adtech.de' } }, /* 970x90 */
      { bidder: 'aol',    labelAny: ['desktop', 'tablet'],      params: { placement: '6507341', network: '4436.1', server: 'adserver.adtech.de' } }, /* 468x60 */
      { bidder: 'aol',    labelAny: ['desktop', 'tablet', 'phone'],      params: { placement: '6507340', network: '4436.1', server: 'adserver.adtech.de' } }, /* 320x50 */
      /* { bidder: 'featureforward', params: {pubId:28, siteId:6, placementId: '4' }}, */
      /* { bidder: 'atomx',        params: { id: '3808200'} }, */ /* does all sizes, not working at moment */
      { bidder: 'appnexus',   labelAny: ['desktop', 'tablet', 'phone'],  params: { placementId: '11971351' } }, /* one placementId for all sizes */
      { bidder: 'rhythmone',  labelAny: ['desktop', 'tablet', 'phone'],  params: { placementId: '76184' } }, /* one placementId for all sizes */
      { bidder: 'brealtime',  labelAny: ['desktop'],  params: { placementId: '12002322' } },  /* 970x250 */
      { bidder: 'brealtime',  labelAny: ['desktop'],  params: { placementId: '12002329' } },  /* 970x90 */
      { bidder: 'brealtime',  labelAny: ['desktop', 'tablet'], params: { placementId: '12002330' } },  /* 728x90 */
      { bidder: 'brealtime',  labelAny: ['desktop', 'tablet'], params: { placementId: '12002331' } },  /* 468x60 */
      { bidder: 'brealtime',  labelAny: ['desktop', 'tablet', 'phone'], params: { placementId: '12002333' } },  /* 320x50 */
      { bidder: 'conversant', labelAny: ['desktop', 'tablet'], params: { site_id: '118233' } },  /* 728x90 */ 
      { bidder: 'districtmDMX', labelAny: ['desktop', 'tablet', 'phone'], params: { id: 171412 } }, /* 970x250 - 970x90 - 728x90 - 468x60 */
      { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '970X250', cp: 561446, ct: 602634 } },
      { bidder: 'pulsepoint',   labelAny: ['desktop'], params: { cf: '970X90', cp: 561446, ct: 602642 } },
      { bidder: 'pulsepoint',   labelAny: ['desktop', 'tablet'], params: { cf: '728X90', cp: 561446, ct: 602643 } },
      { bidder: 'pulsepoint',   labelAny: ['desktop', 'tablet', 'phone'], params: { cf: '320X50', cp: 561446, ct: 602644 } },
      { bidder: 'sekindoUM',    labelAny: ['desktop'], params: { spaceId: '87690' } }, /* 970x250 */ 
      { bidder: 'sekindoUM',    labelAny: ['desktop', 'tablet'], params: { spaceId: '87691' } }, /* 728x90 */
      /* { bidder: 'sekindoapn',   labelAny: ['desktop'], params: { placementId: '11968754' } }, */ /* 970x250 */
      /* { bidder: 'sonobi',       params: { ad_unit: '/1001824/prebid_test2', dom_id: 'div-gpt-ad-1503393253852-1', floor: 0.5 } },  */ /* does all sizes, different sort of setup */ 
      { bidder: 'sovrn',        labelAny: ['desktop'], params: { tagid: '504162' } }, /* 970x250 */
      { bidder: 'sovrn',        labelAny: ['desktop', 'tablet'], params: { tagid: '504165' } } /* 728x90 */
      /* { bidder: 'huddledmasses',params: { placement_id: 6545 } },  */ /* 728x90 */
      /* { bidder: 'smartyads',    params: { banner_id: 6379 } }, */ /*728x90*/
      /* { bidder: 'vertoz',       params: { placementId:'VZ-HB-Y968967V15GC66'} }, */ /* 970x250 */
      /* { bidder: 'vertoz',       params: { placementId:'VZ-HB-P786728VDF5C56'} }, */ /*7 28x90 */
      /* { bidder: 'springserveAlias2',  params: { placementId: '12463800'} }  */ /* 970x250 - 970x90 - 728x90  */
    ] //./bids
  }
  ]; //./adUnits
    
  

  var pbjs = pbjs || {};
  pbjs.que = pbjs.que || [];
            
 

  

<!-- Prebid Boilerplate Section START. No Need to Edit. -->

    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function() {
      googletag.pubads().disableInitialLoad();
    });

    pbjs.que.push(function() {
      pbjs.aliasBidder('appnexus','sekindo');  // alias for bidder
      pbjs.aliasBidder('appnexus','brealtime');  // alias for bidder
      pbjs.aliasBidder('appnexus','springserveAlias2'); // alias for bidder
      // pbjs.setPriceGranularity("dense");   // not being used, being done in adserver targeting below, this needs to be tweaked once prices seen more
      pbjs.addAdUnits(adUnits);
      // pbjs.enableSendAllBids();
      
      pbjs.setConfig({
    	  consentManagement: {
              cmpApi: 'iab',
              timeout: 5000,
              allowAuctionWithoutConsent: true
            },
          debug: true,
          enableSendAllBids: false, // Default will be `true` as of 1.0
          bidderSequence: 'random', // Default is random
    	  publisherDomain: 'golfwrx.com',
    	  bidderTimeout: 4000,
    	  cache: {url: 'https://prebid.adnxs.com/pbc/v1/cache'},
    	  
    	   currency: {
   	       'adServerCurrency': "GBP",
   	       'granularityMultiplier': 1,
   	       'conversionRateFile': 'https://currency.prebid.org/latest.json',
   	    },
   	 sizeConfig: [{
         mediaQuery: '(min-width: 1200px)',
         sizesSupported: [[970, 250], [970, 90], [728, 90], [468, 60], [320, 50], [234, 60], [300, 600], [300, 250], [160, 600], [120, 600], [250, 250]],
         labels: ['desktop']
     }, {
         mediaQuery: '(min-width: 768px) and (max-width: 1199px)',
         sizesSupported: [[728, 90], [468, 60], [320, 50], [234, 60], [300, 250], [250, 250]],
         labels: ['tablet']
     }, {
         mediaQuery: '(min-width: 0px)',
         sizesSupported: [[300, 250], [250, 250], [320, 50], [234, 60]],
         labels: ['phone']
     }]
    		  
      });
      
      pbjs.requestBids({
        bidsBackHandler: initAdserver
      });
    });
       
      pbjs.bidderSettings = { 
           aol:               { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.85; } }, // adjust the bid in real time before the auction takes place
           districtmDMX:      { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.90; } }, // adjust the bid in real time before the auction takes place
           sekindonapn:       { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.75; } }, // adjust the bid in real time before the auction takes place
           brealtime:         { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.80; } }, // adjust the bid in real time before the auction takes place
           springserveAlias2: { bidCpmAdjustment : function(bidCpm){ return bidCpm * 0.65; } }, // adjust the bid in real time before the auction takes place
           standard: {
              adserverTargeting: [
              { key: "hb_bidder", val: function(bidResponse) { return bidResponse.bidderCode; } }, 
              { key: "hb_adid",   val: function(bidResponse) { return bidResponse.adId; } }, 
              { key: "hb_size",   val: function(bidResponse) { return bidResponse.size; } },
              { key: "hb_time",   val: function(bidResponse) { return bidResponse.time; } },
              { key: "hb_nowin",  val: function(bidResponse) { return 'no_win'; } }, 
              { key: "hb_website",val: function(bidResponse) { return 'golfwrx.com'; } },
              { key: "hb_pb",     val: function(bidResponse) { var cpm = (bidResponse.cpm * (gpt_config.latest_gbp_rate || gpt_config.default_gbp_rate)) *1.2 ;  //converts cpm to GBP, rounds cpm to nearest 0.10 incriment, sets 20 if above 20, sets a rev share value
                    if (cpm <20) { return (Math.floor(cpm * 10) / 10).toFixed(2);} else { return '20.00'; } }
              }]
            }
          };
          
          function initAdserver() {
      if (pbjs.adserverRequestSent) return;
      pbjs.adserverRequestSent = true;
      googletag.cmd.push(function() {
        pbjs.que.push(function() {
          pbjs.setTargetingForGPTAsync([slot.getSlotElementId()]);
          googletag.pubads().refresh([slot]);
        });
      });
    }
    
    setTimeout(function() { initAdserver(); }, PREBID_TIMEOUT);
  
  <!-- Prebid Boilerplate Section END -->
  
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
    	      console.log('created sizemapping ', key, ' ', sizeMappings[key]);
    	    });

    	    googletag.pubads().enableSingleRequest();
    	    googletag.pubads().collapseEmptyDivs(true, true);
    	    googletag.pubads().setCentering(true);
    	    googletag.pubads().disableInitialLoad();
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
    	      slot.defineSizeMapping(sizeMappings[def.sizeMapping]);
    	      slot.addService(googletag.pubads());
    	      googletag.display(key);
    	      slots[key] = { slot: slot };
    	    });
    	    googletag.pubads().refresh();

    	    // googletag.pubads().refresh();
    	  })(window.googletag, window.pbjs, {
    	    definitons: {
    	      topSlot: {
    	        adUnitPath: '/1001824/prebid_test2',
    	        size: gpt_config.leaderboard_sizes,
    	        sizeMapping: 'mappingleaderslot',
    	        timeout: 45000,
    	      },
    	      middlerightSlot: {
    	        adUnitPath: '/1001824/prebid_test3',
    	        size: gpt_config.bigbox_sizes,
    	        sizeMapping: 'mappingbigboxslot',
    	        timeout: 45000,
    	      },
    	      bottomrightSlot: {
    	        adUnitPath: '/1001824/prebid_test1',
    	        size: gpt_config.bigbox_sizes,
    	        sizeMapping: 'mappingbigboxslot',
    	        timeout: 45000,
    	      },
    	      bottomleftSlot: {
    	        adUnitPath: '/1001824/prebid_test4',
    	        size: gpt_config.bigbox_sizes,
    	        sizeMapping: 'mappingbigboxslot',
    	        timeout: 45000,
    	      },
    	    },
    	    sizeMappings: {
    	      mappingleaderslot: [
    	        [
    	          [1024, 768],
    	          [
    	            [970, 250],
    	            [970, 90],
    	            [728, 90],
    	            [468, 60],
    	            [320, 50],
    	            [234, 60]
    	          ]
    	        ],
    	        [
    	          [768, 500],
    	          [
    	            [728, 90],
    	            [468, 60],
    	            [320, 50],
    	            [234, 60]
    	          ]
    	        ],
    	        [
    	          [1, 1],
    	          [
    	            [320, 50],
    	            [234, 60]
    	          ]
    	        ],
    	      ],
    	      mappingbigboxslot: [
    	        [
    	          [1024, 768],
    	          [
    	            [300, 600],
    	            [300, 250],
    	            [160, 600],
    	            [120, 600],
    	            [250, 250]
    	          ]
    	        ],
    	        [
    	          [768, 500],
    	          [
    	            [300, 250],
    	            [250, 250]
    	          ]
    	        ],
    	        [
    	          [1, 1],
    	          [
    	            [300, 250],
    	            [250, 250]
    	          ]
    	        ],
    	      ]
    	    }
    	  });
    	});
