//load up preconnect.js,  I think we need to load this earlier
(function() {
var preconnect = document.createElement("script");
preconnect.rel = "preload";
preconnect.type = "text/javascript";
preconnect.src = "https://adops.adysis.com/preconnect.js";
var nodepreconnect = document.getElementsByTagName("footerbid1")[0];
nodepreconnect.insertBefore(preconnect, nodepreconnect.secondChild);
})();