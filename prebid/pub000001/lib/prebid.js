//load up prebid.js,  I think we need to load this earlier
(function() {
var adyjsEl = document.createElement("script");
adyjsEl.async = true;
adyjsEl.rel = "preload";
adyjsEl.type = "text/javascript";
adyjsEl.src = "https://adops.adysis.com/prebid2.37.0adyjs.js";
var adyjsTargetEl = document.getElementsByTagName("footerbid1")[0];
adyjsTargetEl.insertBefore(adyjsEl, adyjsTargetEl.firstChild);
})();