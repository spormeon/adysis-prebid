var adUnits = [
//new ad unit block
{
code: 'inreedvid4Slot',
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: native_bidders.bids   
},
{
code: 'inreedvid4Slot',
mediaTypes: { video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
renderer: { url: 'https://adops.adysis.com/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid4Slot',
mediaTypes: { banner: { sizes: [[970, 90],[970, 250],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400],[550, 310]] } },
labelAny: ['desktopleader', 'tablet', 'phone'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid5Slot',
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } }, 
labelAny: ['desktopmenu1', 'tablet', 'phone'],
bids: native_bidders.bids
},
{
code: 'inreedvid5Slot',
mediaTypes: { video:  { context: 'outstream', playerSize: [[300, 250]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
renderer: { url: 'https://adops.adysis.com/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktopmenu1', 'tablet', 'phone'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid5Slot',
mediaTypes: { banner: { sizes: [[300, 250],[250, 250]] } },
labelAny: ['desktopmenu1', 'tablet', 'phone'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid6Slot',
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: native_bidders.bids
},
{
code: 'inreedvid6Slot',
mediaTypes: { video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
renderer: { url: 'https://adops.adysis.com/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid6Slot',
mediaTypes: { banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400],[550, 310]] } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid7Slot',
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: native_bidders.bids
},
{
code: 'inreedvid7Slot',
mediaTypes: { video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
renderer: { url: 'https://adops.adysis.com/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid7Slot',
mediaTypes: { banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400],[550, 310]] } },
labelAny: ['desktop', 'tablet', 'phone'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid8Slot',
mediaTypes: { native: { image: { sizes: [550, 310], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: native_bidders.bids
},
{
code: 'inreedvid8Slot',
mediaTypes: { video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
renderer: { url: 'https://adops.adysis.com/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid8Slot',
mediaTypes: { banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400],[550, 310]] } },
labelAny: ['desktopleader', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid9Slot',
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: native_bidders.bids
},
{
code: 'inreedvid9Slot',
mediaTypes: { video:  { context: 'outstream', playerSize: [[300, 250]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
renderer: { url: 'https://adops.adysis.com/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid9Slot',
mediaTypes: { banner: { sizes: [[300, 600],[160, 600],[120, 600],[300, 250],[250, 250]] } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
},
//new ad unit block
{
code: 'inreedvid10Slot',
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } }, 
labelAny: ['desktop', 'tabletmenu', 'phonemenu'],
bids: native_bidders.bids
},
{
code: 'inreedvid10Slot',
mediaTypes: { video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
renderer: { url: 'https://adops.adysis.com/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktop', 'tabletmenu', 'phonemenu'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid10Slot',
mediaTypes: { banner: { sizes: [[300, 250],[728, 90],[250, 250],[468, 60],[320, 50],[320, 100],[336, 280],[580, 400],[550, 310]] } },
labelAny: ['desktop', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
},   	
//new ad unit block
{
code: 'inreedvid11Slot',
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } }, 
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: native_bidders.bids
},
{
code: 'inreedvid11Slot',
mediaTypes: { video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
renderer: { url: 'https://adops.adysis.com/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid11Slot',
mediaTypes: { banner: { sizes: [[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]] } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
},   	
//new ad unit block
{
code: 'inreedvid12Slot',
mediaTypes: { native: { image: { sizes: [300, 100], sendId: true }, title: { len: 50, sendId: true }, sponsoredBy: { required: true, sendId: true }, clickUrl: { required: true, sendId: true } } }, 
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: native_bidders.bids
},
{
code: 'inreedvid12Slot',
mediaTypes: { video:  { context: 'outstream', playerSize: [[550, 310]], mimes: ['video/x-flv', 'video/mp4', 'application/x-shockwave-flash', 'application/javascript', 'video/webm'], playbackmethod: [2], minduration: 0,  maxduration: 45, protocols: [1,2,3,4,5,6,7,8,9,10], linearity: 1, api: [1,2,3,4,5,6] } },
renderer: { url: 'https://adops.adysis.com/ANOutstreamVideo.js', render: function (bid) { ANOutstreamVideo.renderAd({ targetId: bid.adUnitCode, adResponse: bid.adResponse, }); } },
renderer: { options: { adText: 'Advertisement' } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: outstream_bidders.bids
},
{
code: 'inreedvid12Slot',
mediaTypes: { banner: { sizes: [[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]] } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
},   	
//new ad unit block
{
code: 'inreedvid13Slot',
mediaTypes: { banner: { sizes: [[970, 90],[728, 90],[468, 60],[320, 50]] } },
labelAny: ['desktopmenu', 'tabletmenu', 'phonemenu'],
bids: banner_bidders.bids
}
];