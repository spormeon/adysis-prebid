// amazon bidder
!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
apstag.init({
   pubID: '7f2180c4-57bc-43a4-9896-ecff1a52049d',
   adServer: 'googletag'
 });
apstag.fetchBids({
slots: [
    { slotID: 'inreedvidSlot', slotName: '/1001824/Golfwrx.com-HB/Golfwrx.com-HB-Vid-test', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
    { slotID: 'inreedvid1Slot', slotName: '/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test1', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
    { slotID: 'inreedvid2Slot', slotName: '/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test2', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] },
    { slotID: 'inreedvid3Slot', slotName: '/1001824/Golfwrx.com-HB/Golfwrx.comHB-Vid-test3', sizes: [[728, 90], [300, 250], [250, 250], [468, 60], [320, 50]] }
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