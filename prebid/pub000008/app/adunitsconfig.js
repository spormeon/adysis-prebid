var adUnits = [
//new ad unit block
// /21665095471/specktra_threads_leaderboard_2
{
code: 'inreedvid4Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
bids: native_bidders.bids   
},
{
code: 'inreedvid4Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { video:  { context: 'outstream', playerSize: [[580, 400]] } },
//renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
//renderer: { options: { adText: 'Advertisement', disableCollapse: { enabled: true, replay: false }, delayExpandUntilVPAIDInit: false, delayStartUntilNotified: false } },
bids: outstream_bidders.bids
},
{
code: 'inreedvid4Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { banner: { sizes: [[728, 90],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400]] } },
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
mediaTypes: { video:  { context: 'outstream', playerSize: [[300, 250]] } },
//renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
//renderer: { options: { adText: 'Advertisement' } },
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
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
bids: native_bidders.bids
},
{
code: 'inreedvid7Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { video:  { context: 'outstream', playerSize: [[580, 400]] } },
//renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
//renderer: { options: { adText: 'Advertisement' } },
bids: outstream_bidders.bids
},
{
code: 'inreedvid7Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { banner: { sizes: [[728, 90],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400]] } },
bids: banner_bidders.bids
},
//new ad unit block
// /21665095471/specktra_threads_leaderboard_1
{
code: 'inreedvid8Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
bids: native_bidders.bids
},
{
code: 'inreedvid8Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { video:  { context: 'outstream', playerSize: [[580, 400]] } },
//renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
//renderer: { options: { adText: 'Advertisement' } },
bids: outstream_bidders.bids
},
{
code: 'inreedvid8Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { banner: { sizes: [[728, 90],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400]] } },
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
mediaTypes: { video:  { context: 'outstream', playerSize: [[300, 250]] } },
//renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
//renderer: { options: { adText: 'Advertisement' } },
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
mediaTypes: { video:  { context: 'outstream', playerSize: [[580, 400]] } },
//renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
//renderer: { options: { adText: 'Advertisement' } },
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
mediaTypes: { banner: { sizes: [[970, 90],[728, 90],[468, 60],[320, 50],[320, 100]] } },
bids: banner_biddersLeaderboard.bids
},
//new ad unit block
///21665095471/specktra_threads_leaderboard_2
{
code: 'inreedvid14Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
bids: native_bidders.bids   
},
{
code: 'inreedvid14Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { video:  { context: 'outstream', playerSize: [[580, 400]] } },
//renderer: { url: 'https://cdn.jsdelivr.net/gh/spormeon/adysis-prebid/prebid/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
//renderer: { options: { adText: 'Advertisement' } },
bids: outstream_bidders.bids
},
{
code: 'inreedvid14Slot',
labelAny: ['desktopinreed', 'tabletinreed', 'phoneinreed'],
mediaTypes: { banner: { sizes: [[728, 90],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400]] } },
bids: banner_bidders.bids
},
];

