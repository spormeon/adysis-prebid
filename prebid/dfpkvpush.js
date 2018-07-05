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
  
  googletag.cmd.push(function() {
	  var mappingleaderslot = googletag.sizeMapping().
	  addSize([1024, 769], [[970,250],[970,90],[728,90],[468,60],[320,50],[234,60]]).
	  addSize([768, 500], [[728,90],[468,60],[320,50],[234,60]]).
	  addSize([1, 1], [[320,50],[234,60]]).
	  build();
	  var mappingbigboxslot = googletag.sizeMapping().
	  addSize([1024, 769], [[300,600],[300,250],[160,600],[120,600],[250,250]]).
	  addSize([768, 500], [[300,250],[250,250]]).
	  addSize([1, 1], [[300,250],[250,250]]).
	  build();
      topSlot = googletag.defineSlot('/1001824/prebid_test2', [[970, 250],[970, 90],[728, 90],[468, 60],[320, 50],[234, 60]], 'topSlot').defineSizeMapping(mappingleaderslot).setTargeting("hb_pb", "0.50").addService(googletag.pubads());
      middlerightSlot = googletag.defineSlot('/1001824/prebid_test3', [[300, 600],[300, 250],[160, 600],[120, 600],[250, 250]], 'middlerightSlot').defineSizeMapping(mappingbigboxslot).setTargeting("test", "refresh").addService(googletag.pubads());
      bottomrightSlot = googletag.defineSlot('/1001824/prebid_test1', [[300, 600],[300, 250],[160, 600],[120, 600],[250, 250]], 'bottomrightSlot').defineSizeMapping(mappingbigboxslot).setTargeting("test", "refresh").addService(googletag.pubads());
      bottomleftSlot = googletag.defineSlot('/1001824/prebid_test4', [[300, 600],[300, 250],[160, 600],[120, 600],[250,250]], 'bottomleftSlot').defineSizeMapping(mappingbigboxslot).setTargeting("test", "refresh").addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().collapseEmptyDivs(true, true);
    googletag.pubads().setCentering(true);
    googletag.enableServices();
    googletag.display("topSlot");
    googletag.display("middlerightSlot");
    googletag.display("bottomrightSlot");
    googletag.display("bottomleftSlot");
    setInterval(function(){googletag.pubads().refresh([topSlot]);}, 120000);
    setInterval(function(){googletag.pubads().refresh([middlerightSlot]);}, 120000);
    setInterval(function(){googletag.pubads().refresh([bottomrightSlot]);}, 120000);
    setInterval(function(){googletag.pubads().refresh([bottomleftSlot]);}, 120000);
  });
    
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
    function refreshtopSlot() {
  	    refreshSlot(topSlot);
  	}
  	function refreshmiddlerightSlot() {
  	    refreshSlot(middlerightSlot);
  	}
  	function refreshbottomrightSlot() {
  	    refreshSlot(bottomrightSlot);
  	}  
  	function refreshbottomleftSlot() {
  	    refreshSlot(bottomleftSlot);
  	}
  	  	  
    
  
  