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

var googletag = googletag || {};
 googletag.cmd = googletag.cmd || [];
 
 googletag.cmd.push(function() {
   googletag.defineSlot("/1001824/prebid_test2", [[970, 250],[970, 90],[728, 90],[468, 60],[320, 50],[234, 60]], "topSlot")
    .addService(googletag.pubads())
     .setTargeting("hb_pb", "0.50");
   googletag.defineSlot("/1001824/prebid_test3", [[300, 600],[300, 250],[160, 600],[120, 600],[250, 250]], "middlerightSlot")
     .addService(googletag.pubads())
     .setTargeting("hb_pb", "0.50")
     .setTargeting("age", "20-30");
   googletag.pubads().setTargeting("topic","basketball");
   googletag.pubads().enableSingleRequest();
   googletag.enableServices();
 });
