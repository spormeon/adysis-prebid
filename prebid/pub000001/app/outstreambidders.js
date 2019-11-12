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
    //{ bidder: 'beachfront', params: { bidfloor: 0.01, appId: '11bc5dd5-7421-4dd8-c926-40fa653bec76' } }, /* video for s2s bidding TEST */
    //{ bidder: 'beachfront', params: { bidfloor: 0.01, appId: '3b16770b-17af-4d22-daff-9606bdf2c9c3' } }, /* banners for s2s bidding TEST*/
    //{ bidder: 'cedato', params: { player_id: '1895193152' , bidfloor: 0.01 } },
    { bidder: 'adysis', params: { placementId: '11962910', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* one placementId for all sizes */
    //{ bidder: 'smartyads', params: { placementId: '11833' } }, /* outstream */
    { bidder: 'oftmedia', params: { placementId: '16137883', allowSmallerSizes: true, allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } },
    { bidder: 'openx', params: { unit: '539181725', delDomain: 'freestar-d.openx.net', openrtb: { imp: [{ video: { mimes: ['video/x-flv, video/mp4, application/x-shockwave-flash, application/javascript, video/webm'] } }] } } },
    { bidder: 'rubicon', params: { accountId: "16924", siteId: "151312", zoneId: "896644", video: { language: 'en' } } }, /* video call */
    //{ bidder: 'criteo', params: { zoneId: "1079305", video: { skip: 1, playbackmethod: 2, placement: 1 } } },
    //{ bidder: 'colossusssp', params: { placementId: '35323' } }, /* outstream */
    //{ bidder: "ix", params: { siteId: "261017", size: [300, 250], video: { skippable: true, mimes: [ 'video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm' ], minduration: 0, maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10] } } }, /* id 261017 golfwrx id */
    { bidder: 'emx_digital', params: { tagid: '77460', video: { skippable: true, playback_method: ['auto_play_sound_off'] } } }, /* outstream */
    { bidder: 'brealtime', params: { placementId: '16714331', allowSmallerSizes: true, video: { skippable: true, playback_method: ['auto_play_sound_off'] } } },  /* video placement */
    { bidder: 'smartrtb', params: { zoneId: "oER0LEUveIUa2IMZI3uR" } }
    ] //./bids
    };