// amazon bidder
!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");
apstag.init({
   pubID: '7f2180c4-57bc-43a4-9896-ecff1a52049d',
   adServer: 'googletag'
 });
apstag.fetchBids({
slots: [
    { slotID: 'inreedvid4Slot', slotName: '/21665095471/specktra_threads_leaderboard_2', sizes: [[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]] },
    { slotID: 'inreedvid5Slot', slotName: '/21665095471/specktra_halfpage', sizes: [[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]] },
    { slotID: 'inreedvid6Slot', slotName: '/21665095471/specktra_footer_2', sizes: [[970, 90],[728, 90],[468, 60],[320, 50],[320, 100]] },
    { slotID: 'inreedvid7Slot', slotName: '/21665095471/specktra_threads_leaderboard_4', sizes: [[970, 250],[970, 90],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]] },
    { slotID: 'inreedvid8Slot', slotName: '/21665095471/specktra_threads_leaderboard_1', sizes: [[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]] },
    { slotID: 'inreedvid9Slot', slotName: '/21665095471/specktra_mrec_1', sizes: [[300, 600],[300, 250],[250, 250],[160, 600],[120, 600]] },
    { slotID: 'inreedvid10Slot', slotName: '/21665095471/specktra_footer_1', sizes: [[970, 250],[970, 90],[728, 90],[300, 250],[250, 250],[468, 60],[320, 50],[336, 280],[580, 400],[320, 100]] },
    { slotID: 'inreedvid13Slot', slotName: '/21665095471/specktra_top_1', sizes: [[970, 90],[970, 250],[728, 90],[468, 60],[320, 50],[320, 100]] }
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




