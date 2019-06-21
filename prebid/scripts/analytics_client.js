//ASSERTIVE ANALYTICS - Version: 1.8.3
!function(){"use strict";var I="1.8",_="https://api.assertcom.de",e="assertive_analytics_",y=e.concat("sessionUUID"),s=e.concat("sessionStart"),a=e.concat("sessionRandom"),h=e.concat("sessionUTM"),b=e.concat("sessionReferrer"),w=E(),U=[],S=[],t=t||localStorage.getItem("assertiveYield")&&-1!==localStorage.getItem("assertiveYield").indexOf("debug")||-1!==d("assertiveYield").indexOf("debug");function E(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,E)}function d(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}function R(e){t&&console.log(e)}Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],r=0;r<n;){var o=t[r];if(e.call(i,o,r,t))return o;r++}},configurable:!0,writable:!0}),function(){if(!localStorage.getItem(s)||Date.now()>localStorage.getItem(s)){localStorage.setItem(y,E()),localStorage.setItem(a,Math.random()),document.referrer?localStorage.setItem(b,document.referrer):localStorage.removeItem(b);var e=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],t={};for(var n in e){var i=e[n],r=d(i);""!==r&&(t[i]=r)}var o=JSON.stringify(t);o!==JSON.stringify({})?localStorage.setItem(h,o):localStorage.removeItem(h)}localStorage.setItem(s,Date.now()+18e5)}(),-1!==d("assertiveYield").indexOf("check")&&alert("Assertive Yield: Check"),("undefined"==typeof assertive_sampleRate||assertive_sampleRate&&localStorage.getItem(a)<assertive_sampleRate)&&function e(){if(n)return;if("undefined"==typeof googletag||!googletag.pubadsReady)return void setTimeout(e,20);n=!0;var v=null;window.addEventListener("blur",function(){if(v){var e=new XMLHttpRequest,t=_+"?event=click&entityId="+assertive_entityId+"&impressionUUID="+U[v];e.open("GET",t,!0),e.send()}});googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(e){if(!e.isEmpty)if("undefined"!=typeof assertive_entityId){var t=e.slot,n=t.getSlotElementId(),i=t.getAdUnitPath(),r=document.getElementById(n),o=null;if(r){if(pbjs.adUnits.find(function(e){return e.code===n}))o=n;else{if(!pbjs.adUnits.find(function(e){return e.code===i}))return;o=i}var s=r.getElementsByTagName("iframe")[0];s.addEventListener("mouseover",function(){v=n}),s.addEventListener("touchstart",function(){v=n}),s.addEventListener("mouseout",function(){v=null}),s.addEventListener("touchend",function(){v=null});var a=t.getHtml(),d=/(?:pbjs\.renderAd\(document, |adId: |hb_adid":\[)['"](.*?)["']/g.exec(a),l=d?d[1]:t.getTargeting("hb_adid")[0],u=!!d,c=pbjs.getBidResponsesForAdUnitCode(o).bids.find(function(e){return e.adId===l});U[n]=E(),R("Session UUID: "+localStorage.getItem(y)+", PageView UUID: "+w+", Impression UUID: "+U[n]),R("Slot Id: "+n+", AdUnitPath: "+i),c&&R(" - Highest PreBid "+c.cpm+" from "+c.bidderCode+" with id "+l),c||R(" - No PreBids!!!"),R(" - Winner: "+(u?"prebid":"dfp (Direct/AdX/AdSense)")+" with size "+(u?c.width:e.size[0])+"x"+(u?c.height:e.size[1])),R("---------------");var m=null,p=null;c&&(c.appnexus?m=c.appnexus.buyerMemberId?c.appnexus.buyerMemberId:null:c.rubicon&&(m=c.rubicon.networkId?c.rubicon.networkId:null,p=c.rubicon.advertiserId?c.rubicon.advertiserId:null));var f={version:I,entityId:assertive_entityId,siteUUID:"undefined"!=typeof assertive_siteUUID?assertive_siteUUID:null,sessionUUID:localStorage.getItem(y),pageViewUUID:w,impressionUUID:U[n],slotId:n,adUnitPath:i,highestPreBid:c?c.cpm:0,highestPreBid_partner:c?c.bidderCode:"",buyerId:m,brandId:p,dealId:c&&c.dealId?c.dealId:null,creativeId:c&&c.creativeId?c.creativeId:null,mediaType:c&&c.mediaType?c.mediaType:null,currency:c&&c.currency?c.currency:null,netRevenue:c&&c.netRevenue?c.netRevenue:null,creative_width:u?c.width:e.size[0],creative_height:u?c.height:e.size[1],preBidWon:u,timeToRespond:c?c.timeToRespond:null,protocol:window.location.protocol,host:window.location.host,pathname:window.location.pathname,pathname_split:window.location.pathname.split("/").filter(function(e){return e}),referrer:localStorage.getItem(b),utm:localStorage.getItem(h),prebid_timeout:assertive_timeout||null,prebid_version:pbjs.version||null,userState:"undefined"!=typeof assertive_userState?assertive_userState:null,layout:"undefined"!=typeof assertive_layout?assertive_layout:null,custom_1:"undefined"!=typeof assertive_custom_1?assertive_custom_1:null,custom_2:"undefined"!=typeof assertive_custom_2?assertive_custom_2:null,custom_3:"undefined"!=typeof assertive_custom_3?assertive_custom_3:null,custom_4:"undefined"!=typeof assertive_custom_4?assertive_custom_4:null,custom_5:"undefined"!=typeof assertive_custom_5?assertive_custom_5:null,bps_type:t.getTargeting("ay_bid")[0]||null,bps_algo:t.getTargeting("ay_algo")[0]||null};S.push(f);var g=new XMLHttpRequest;g.open("POST",_,!0),g.setRequestHeader("Content-Type","text/plain"),g.send(JSON.stringify(f)),R("SENT!!!")}}else console.error("Assertive Yield: Entity ID is mandatory and not defined, exiting...")}),googletag.pubads().addEventListener("impressionViewable",function(e){var t=e.slot.getSlotElementId();if(U[t]){var n=new XMLHttpRequest,i=_+"?event=activeView&entityId="+assertive_entityId+"&impressionUUID="+U[t];n.open("GET",i,!0),n.send()}})})}();var n=!1}();
// end assertive analytics