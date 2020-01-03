// BANNER BIDDER LIST
var banner_bidders = {
bids: [
{ bidder: 'bidder4', params: { placementId: '75853', pageId: '87372' } },
{ bidder: 'bidder7', params: { placementId: '11962910', allowSmallerSizes: true } }, /* one placementId for all sizes */
//{ bidder: 'appnexus', params: { placementId: '13232392' } }, /* demo video placement, always returns a vid, only works client side */ 
{ bidder: 'bidder2', params: { placementId: 11937611, allowSmallerSizes: true } },
{ bidder: 'bidder3', params: { dmxid: 171413, memberid: 100041  } }, /* outstream - display */ 
{ bidder: 'bidder1', params: { placement: '4882886', network: '4436.1', server: 'adserver-eu.adtech.advertising.com' } }, /* 300x250 */ 
{ bidder: 'bidder28', params: { placementId: '16717366', allowSmallerSizes: true } },  /* sizeless placement */   
{ bidder: 'bidder13', params: { site_id: '118233' } },  /* 300x250 */ 
//{ bidder: 'pulsepoint', params: { cf: '1X1', cp: '561446', ct: '702261', cw: 550, ch: 310 } }, /* outstream */
{ bidder: 'bidder10', params: { cf: '300X250', cp: '561446', ct: '602639' } }, /* 300x250 */
{ bidder: 'bidder5', params: { tagid: '575683' } }, /* 300x250 */
//{ bidder: 'somoaudience', params: { placement_hash: '1152340cac3268b0e737b49c1382cd2b' } }, /*300x250*/
{ bidder: 'bidder12', params: { siteId : 'cLN3UCBHar5OfDrkHcnlKl', productId: 'siab' } }, /*All sizes*/
{ bidder: 'bidder9', params: { placementId: '76184', zone: '1r', path: 'mvo' } }, /* one placementId for all sizes */
//{ bidder: 'adsparc', params: { networkId: '9969', siteId: '1019801' } }, /*one placementId for all sizes*/	
//{ bidder: 'komoona', params: { hbid: 'e885cf345b55406b9c37415b7fcc8409', placementId: '2d14facbe61621faad0c7b2aa0458cff' } },  /* Golfwrx.com _KB 300x250 */
{ bidder: "bidder8", params: { siteId: "261017", size: [300, 250] } }, /* id 261017 golfwrx id */
//{ bidder: 'atomx', params: { id: 5136354 } }, /* does all sizes not working at moment */
//{ bidder: "yieldmo", params: { placementId: "1990667709809591856" } }, /* no adapter in file */
{ bidder: 'bidder26', params: { inSlot: '14600' } }, /*gumgum-300x250*/
{ bidder: 'bidder27', params: { publisherId: '3660' } },
//{ bidder: 'contentignite', params: { accountID: '168237', zoneID: '316288'} }, /*300x250*/
//{ bidder: 'viewdeos', params: { supplyPartnerId: '1985', rendererUrl: 'https://s.viewdeos.io/video/latest/renderer.js' } }, /* oustream  */
//{ bidder: 'sekindoUM', params: { spaceId: '87709' } }, /* 300x250 */ 
{ bidder: 'bidder11', params: { pubId: '535034733735961', lang: 'en-US', cat: 'IAB1', bidFloor: 0.01 } },
// { bidder: 'ucfunnel', params: { adid: 'ad-E2BBB7E7B69BD226F93D69A83686264' } }
{ bidder: 'bidder6', params: { video: { bidfloor: 0.01, appId: '83d77824-262e-4d13-ae0e-56f8f54bf934', mimes: [ 'video/mp4', 'application/javascript' ] }, banner: { bidfloor: 0.01, appId: '46f09c62-f3f1-4ead-f957-f91964be6f02' } } },
//{ bidder: 'beachfront', params: { bidfloor: 0.01, appId: '11bc5dd5-7421-4dd8-c926-40fa653bec76' } }, /* video for s2s bidding TEST*/
//{ bidder: 'beachfront', params: { bidfloor: 0.01, appIds: '3b16770b-17af-4d22-daff-9606bdf2c9c3' } }, /* banners for s2s bidding TEST*/
//{ bidder: 'cedato', params: { player_id: '1895193152' , bidfloor: 0.01 } },
{ bidder: 'bidder23', params: { placementId: '11962910', allowSmallerSizes: true } }, /* one placementId for all sizes */
//{ bidder: 'smartyads', params: { placementId: '6368' } }, /* 300x250 */
{ bidder: 'bidder15', params: { placementId: '16137883', allowSmallerSizes: true } },
{ bidder: 'bidder18', params: { unit: '539181725', delDomain: 'freestar-d.openx.net' } },
{ bidder: 'bidder20', params: { accountId: "16924", siteId: "151312", zoneId: "896644" } }, /* display call */
//{ bidder: 'quantcast', params: { publisherId: "EnBKrGZNvq"} },
{ bidder: 'bidder17', params: { zoneId: "1079305" } },
{ bidder: 'bidder16', params: { inventoryCode: "freestar_desktopleader_RON_300x250"} },
{ bidder: 'bidder16', params: { inventoryCode: "freestar_desktopleader_RON_300x250_NATIVE"} },
{ bidder: 'bidder19', params: { pkey: "DSthphoQqH66AkQXPDoXn74b", iframe: true, iframeSize: [300, 250] } }, /* 300x250 */
//{ bidder: 'sharethrough', params: { pkey: "GrVComq83JzCSLK1pi9waoyR", iframe: true, iframeSize: [728, 90] } }, /* 728x90 */
{ bidder: 'bidder25', params: { networkId: "10047", siteId: "1029474"} },
//{ bidder: 'colossusssp', params: { placementId: '6544' } } /* 300x250 */
{ bidder: 'bidder21', params: { tagid: '77461' } }, /* sizeless */
//{ bidder: 'decenterads', params: { placementId: '10384' } }, /* 300x250 */
{ bidder: 'bidder24', params: { adUnitId: '12197908548395622' } }, /* 300x250 */
//{ bidder: 'lockerdome', params: { adUnitId: '12197907843752550' } }, /* 300x100 */
{ bidder: 'bidder24', params: { adUnitId: '12197911702512230' } }, /* 728x90 */
{ bidder: 'bidder24', params: { adUnitId: '12197911031423590' } }, /* 300x600 */
{ bidder: 'bidder22', params: { zoneId: "I0Mnk7dqNXKrCdjpgzp5" } }
] //./bids
};