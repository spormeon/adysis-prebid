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
   googletag.defineSlot("/1001824/prebid_test2", [[970, 250],[970, 90],[728, 90],[468, 60],[320, 50],[234, 60]], "topleaderSlot")
    .addService(googletag.pubads())
   googletag.defineSlot("/1001824/prebid_test3", [[300, 600],[300, 250],[160, 600],[120, 600],[250, 250]], "toprightSlot")
     .addService(googletag.pubads())
   googletag.defineSlot("/1001824/prebid_test1", [[300, 600],[300, 250],[160, 600],[120, 600],[250, 250]], "middlerightSlot")
   .addService(googletag.pubads())
   googletag.defineSlot("/1001824/prebid_test4", [[300, 600],[300, 250],[160, 600],[120, 600],[250, 250]], "bottomrightSlot")
   .addService(googletag.pubads())
   googletag.pubads().setTargeting("hb_pb","0.21");
   googletag.pubads().enableSingleRequest();
   googletag.pubads().collapseEmptyDivs(true, true);
   googletag.pubads().setCentering(true);
   googletag.enableServices();
 });

 
 googletag.cmd.push(function() {
	 	         googletag.display("topleaderSlot");
	 	        googletag.display("toprightSlot");
	 	         googletag.display("middlerightSlot");
	 	        googletag.display("bottomrightSlot");
	 	      });
 
 
 
//ASSERTIVE ANALYTICS - Version: 1.5.1
 var assertiveVersion="1.5",analyticsURL="https://api.assertcom.de",prefix="assertive_analytics_",sessionTimeoutLength=18e5,sessionUUIDKey=prefix.concat("sessionUUID"),sessionTimeoutKey=prefix.concat("sessionStart"),sessionRandomKey=prefix.concat("sessionRandom"),sessionUTMKey=prefix.concat("sessionUTM"),sessionReferrerKey=prefix.concat("sessionReferrer"),pageViewUUID=generateUUID(),impressionUUIDs=[],_assertive_analytics_data=[],assertive_debug=assertive_debug||localStorage.getItem("assertiveYield")&&-1!==localStorage.getItem("assertiveYield").indexOf("debug")||-1!==getQueryStringValue("assertiveYield").indexOf("debug");function updateSession(){if(!localStorage.getItem(sessionTimeoutKey)||Date.now()>localStorage.getItem(sessionTimeoutKey)){localStorage.setItem(sessionUUIDKey,generateUUID()),localStorage.setItem(sessionRandomKey,Math.random()),document.referrer?localStorage.setItem(sessionReferrerKey,document.referrer):localStorage.removeItem(sessionReferrerKey);var e=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],t={};for(i in e){var s=e[i],o=getQueryStringValue(s);""!==o&&(t[s]=o)}var n=JSON.stringify(t);n!==JSON.stringify({})?localStorage.setItem(sessionUTMKey,n):localStorage.removeItem(sessionUTMKey)}localStorage.setItem(sessionTimeoutKey,Date.now()+sessionTimeoutLength)}function generateUUID(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,generateUUID)}function getQueryStringValue(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function debugLog(e){assertive_debug&&console.log(e)}if(Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),s=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],o=0;o<s;){var n=t[o];if(e.call(i,n,o,t))return n;o++}},configurable:!0,writable:!0}),updateSession(),-1!==getQueryStringValue("assertiveYield").indexOf("check")&&alert("Assertive Yield: Check"),"undefined"==typeof assertive_sampleRate||assertive_sampleRate&&localStorage.getItem(sessionRandomKey)<assertive_sampleRate){var hoveredAdSlot=null;window.addEventListener("blur",function(){if(hoveredAdSlot){var e=new XMLHttpRequest,t=analyticsURL+"?event=click&entityId="+assertive_entityId+"&impressionUUID="+impressionUUIDs[hoveredAdSlot];e.open("GET",t,!0),e.send()}}),googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(e){var t=e.slot,s=t.getTargeting("hb_adid")[0],i=t.getSlotElementId();if(document.getElementById(i)){var o=document.getElementById(i).getElementsByTagName("iframe")[0];o.addEventListener("mouseover",function(){hoveredAdSlot=i}),o.addEventListener("touchstart",function(){hoveredAdSlot=i}),o.addEventListener("mouseout",function(){hoveredAdSlot=null}),o.addEventListener("touchend",function(){hoveredAdSlot=null});var n=pbjs.getBidResponsesForAdUnitCode(i).bids.find(function(e){return e.adId===s}),r=pbjs.getAllWinningBids().some(function(e){return e.adId===s});impressionUUIDs[i]=generateUUID(),debugLog("Session UUID: "+localStorage.getItem(sessionUUIDKey)+", PageView UUID: "+pageViewUUID+", Impression UUID: "+impressionUUIDs[i]),debugLog("Slot Id: "+i),n&&debugLog(" - Highest PreBid "+n.cpm+" from "+n.bidderCode+" with id "+s),n||debugLog(" - No PreBids!!!"),debugLog(" - Winner: "+(r?"prebid":"adsense")+" with size "+(r?n.width:e.size[0])+"x"+(r?n.height:e.size[1])),debugLog("---------------");var a={version:assertiveVersion,entityId:assertive_entityId,siteUUID:"undefined"!=typeof assertive_siteUUID?assertive_siteUUID:null,sessionUUID:localStorage.getItem(sessionUUIDKey),pageViewUUID:pageViewUUID,impressionUUID:impressionUUIDs[i],slotId:i,highestPreBid:n?n.cpm:0,highestPreBid_partner:n?n.bidderCode:"",creative_width:r?n.width:e.size[0],creative_height:r?n.height:e.size[1],preBidWon:r,timeToRespond:n?n.timeToRespond:null,protocol:window.location.protocol,host:window.location.host,pathname:window.location.pathname,pathname_split:window.location.pathname.split("/").filter(function(e){return e}),referrer:localStorage.getItem(sessionReferrerKey),utm:localStorage.getItem(sessionUTMKey),prebid_timeout:assertive_timeout,userState:assertive_userState,layout:assertive_layout};_assertive_analytics_data.push(a);var d=new XMLHttpRequest;d.open("POST",analyticsURL,!0),d.setRequestHeader("Content-Type","text/plain"),d.send(JSON.stringify(a)),debugLog("SENT!!!")}}),googletag.pubads().addEventListener("impressionViewable",function(e){var t=e.slot.getSlotElementId(),s=new XMLHttpRequest,i=analyticsURL+"?event=activeView&entityId="+assertive_entityId+"&impressionUUID="+impressionUUIDs[t];s.open("GET",i,!0),s.send()})})}
