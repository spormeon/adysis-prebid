//load up google gpt.js
(function () {
var gads = document.createElement("script");
gads.async = true;
gads.type = "text/javascript";
gads.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
var nodegads = document.getElementsByTagName("head")[0];
nodegads.insertBefore(gads, nodegads.firstChild);
})();