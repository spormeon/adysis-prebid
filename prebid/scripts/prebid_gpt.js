//load up google gpt.js
(function () {
  var gads = document.createElement("script");
  gads.async = true;
  gads.type = "text/javascript";
  var useSSL = "https:" == document.location.protocol;
  gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
  var node = document.getElementsByTagName("footerbid")[0];
  node.parentNode.insertBefore(gads, node);
})();
//load up prebid.js,  I think we need to load this earlier
(function() {
    var pbjsEl = document.createElement("script");
    pbjsEl.type = "text/javascript";
    pbjsEl.async = true;
    pbjsEl.src = "https://adops.adysis.com/scripts/prebid/prebid2.22.0.js";
    var pbjsTargetEl = document.getElementsByTagName("footerbid")[0];
    pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
})();