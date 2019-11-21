//load up bidfilter.js,
window._BidFilter={site_id:1045,pbjsKey:'adyjs',checkAudio:false};
(function () {
var bidfilter = document.createElement("script");
bidfilter.async = true;
bidfilter.rel = "preload"
bidfilter.type = "text/javascript";
bidfilter.src = "https://cdn.bidfilter.com/bidfilter.js";
var nodebidfilter = document.getElementsByTagName("footerbid1")[0];
nodebidfilter.insertBefore(bidfilter, nodebidfilter.fourthChild);
})();