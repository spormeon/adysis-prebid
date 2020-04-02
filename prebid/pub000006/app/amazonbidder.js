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