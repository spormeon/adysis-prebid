var adUnits = [
  //new ad unit block
     {
      code: 'inreedvidSlot',
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
          { bidder: "ix",         params: { siteId: "281563", size: [300, 250] } }, /* id 261017 golfwrx id
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
          { bidder: 'openx',   params: { unit: '539181725', delDomain: 'freestar-d.openx.net' } },
          { bidder: 'rubicon',   params: { accountId: "16924", siteId: "151312", zoneId: "896644" } },
          { bidder: 'quantcast',   params: { publisherId: "EnBKrGZNvq"} },
          { bidder: 'criteo',   params: { zoneId: "1079305"} },
          { bidder: 'triplelift',   params: { inventoryCode: "freestar_desktop_RON_300x250"} },
          { bidder: 'sharethrough',   params: { pkey: "DSthphoQqH66AkQXPDoXn74b"} },
          { bidder: 'connectad',   params: { networkId: "10047", siteId: "1029474"} },
     ] //./bids
 },
  //new ad unit block
     {
     code: 'inreedvid1Slot',
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
      { bidder: 'openx',   params: { unit: '539181725', delDomain: 'freestar-d.openx.net' } },
      { bidder: 'rubicon',   params: { accountId: "16924", siteId: "151312", zoneId: "896644" } },
      { bidder: 'quantcast',   params: { publisherId: "EnBKrGZNvq"} },
      { bidder: 'criteo',   params: { zoneId: "1079305"} },
      { bidder: 'triplelift',   params: { inventoryCode: "freestar_desktop_RON_300x250"} },
      { bidder: 'sharethrough',   params: { pkey: "DSthphoQqH66AkQXPDoXn74b"} },
      { bidder: 'connectad',   params: { networkId: "10047", siteId: "1029474"} },
  ] //./bids
  },
   //new ad unit block
      {
      code: 'inreedvid2Slot',
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
       { bidder: 'openx',   params: { unit: '539181725', delDomain: 'freestar-d.openx.net' } },
       { bidder: 'rubicon',   params: { accountId: "16924", siteId: "151312", zoneId: "896644" } },
       { bidder: 'quantcast',   params: { publisherId: "EnBKrGZNvq"} },
       { bidder: 'criteo',   params: { zoneId: "1079305"} },
       { bidder: 'triplelift',   params: { inventoryCode: "freestar_desktop_RON_300x250"} },
       { bidder: 'sharethrough',   params: { pkey: "DSthphoQqH66AkQXPDoXn74b"} },
       { bidder: 'connectad',   params: { networkId: "10047", siteId: "1029474"} },
   ] //./bids
   },
    //new ad unit block
       {
       code: 'inreedvid3Slot',
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
        { bidder: 'openx',   params: { unit: '539181725', delDomain: 'freestar-d.openx.net' } },
        { bidder: 'rubicon',   params: { accountId: "16924", siteId: "151312", zoneId: "896644" } },
        { bidder: 'quantcast',   params: { publisherId: "EnBKrGZNvq"} },
        { bidder: 'criteo',   params: { zoneId: "1079305"} },
        { bidder: 'triplelift',   params: { inventoryCode: "freestar_desktop_RON_300x250"} },
        { bidder: 'sharethrough',   params: { pkey: "DSthphoQqH66AkQXPDoXn74b"} },
        { bidder: 'connectad',   params: { networkId: "10047", siteId: "1029474"} },
    ] //./bids
    }
    ];